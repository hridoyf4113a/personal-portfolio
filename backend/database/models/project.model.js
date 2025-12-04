import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    required: true,
    trim: true,
  },
  technologies: {
    type: [String],
    default: [],
  },
  link: {
    type: String,
    trim: true,
  },
});

const Project =
  mongoose.models.Project ?? mongoose.model("Project", projectSchema);
export default Project;
