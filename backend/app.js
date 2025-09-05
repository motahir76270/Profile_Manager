const express = require("express");
const mongoose = require("mongoose");
const Profile = require("./modal/profileSchema");
const data = require('./data/profileData.json')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));

async function main() {
    try {
        const DbURL= process.env.MONGODB_URL
        mongoose.connect(DbURL);
        console.log("database is connected")
    } catch (error) {
        console.log("data base not connected")
    }
    
}
main();

// Health check
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// Create profile
app.post("/api/profile", async (req, res) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        res.json(profile);
    } catch (error) {
        res.status(400).json("error in sending profine data" , error)
    }
});

// Read profile
app.get("/api/profile/:id", async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        res.json(profile);
    } catch (error) {
        res.status(400).json("error in read profine data" , error)
    }
});

// Update profile
app.put("/api/profile/:id", async (req, res) => {
    try {
        const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(profile);
    } catch (error) {
        res.status(400).json("error in update profine data" , error)
    }
});

// Delete profile
app.delete("/api/profile/:id", async (req, res) => {
    try {
        await Profile.findByIdAndDelete(req.params.id);
        res.json({ message: "Profile deleted" });
    } catch (error) {
        res.status(400).json("error in delete profine data" , error)
    }
});

//read all profile
app.get('/api/profile' , async(req,res) => {
    try {
        const profile = await Profile.find();
        res.json(profile);
    } catch (error) {
         res.status(400).json("error in reading all profine data" , error)
    }
})
    
// Query projects by skill
app.get("/api/projects/skill", async (req, res) => {
    try {
        
        const { skill } = req.query;
        const profiles = await Profile.find({ "projects.skills": skill });
        const projects = profiles.flatMap(p => p.projects.filter(proj => proj.skills.includes(skill)));
        res.json(projects);
    } catch (error) {
          res.status(400).json("error in Query projects by skill " , error)
    }
});

// Get top skills
app.get("/api/skills/top", async (req, res) => {
    try {
        
        const profiles = await Profile.find();
        const skills = profiles.flatMap(p => p.skills);
        const counts = skills.reduce((acc, s) => ((acc[s] = (acc[s] || 0) + 1), acc), {});
        res.json(counts);
    } catch (error) {
       res.status(400).json("error in Get top skills " , error)
    }
});

// Search across profile fields
app.get("/api/search", async (req, res) => {
   try {
    const { q } = req.query;
    const profiles = await Profile.find({
      $or: [
        { name: new RegExp(q, "i") },
        { email: new RegExp(q, "i") },
        { "projects.title": new RegExp(q, "i") },
        { skills: new RegExp(q, "i") },
        { "work.company": new RegExp(q, "i") }
      ]
    });
    res.json(profiles);

   } catch (error) {
     res.status(400).json("error in Search across profile fields" , error)
   }
});


app.use(async (req, res) => {
    try {
        res.status(404).json({ message: "Page not found" });
    } catch (error) {
        res.status(500).json({ message: "Network issue" });
    }
}); 

// ----- Start Server -----
app.listen(3000, () => console.log("Server running on http://localhost:3000"));