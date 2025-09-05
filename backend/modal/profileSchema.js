const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: String,
  email: String,
  education: [{ degree: String, institution: String, year: Number }],
  skills: [String],
  projects: [
    { title: String, description: String, links: [String], skills: [String] }
  ],
  work: [{ company: String, role: String, duration: String }],
  links: { github: String, linkedin: String, portfolio: String }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile ;
