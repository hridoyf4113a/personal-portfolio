import express from "express";
import Project from "../database/models/project.model.js";
import mongoose from "mongoose";
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const { q } = req.query;

    const query = q ? { name: { $regex: q, $options: "i" } } : {};

    const projects = await Project.find(query);
    return res.status(200).json({
      success: true,
      data: projects,
      message: "Project's fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// router.get("/all", async (req, res) => {
//   try {
//     const projects = await Project.find();
//     if (projects.length === 0)
//       return res.status(404).json({ error: "No projects found" });
//     return res.status(200).json({
//       success: true,
//       data: projects,
//       message: "Project's fetched successfully",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// });

router.get("/:id", async (req, res) => {
  const projectId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    return res.status(400).json({ error: "Invalid project ID" });
  }

  try {
    const project = await Project.findById({ _id: projectId });
    if (!project) return res.status(404).json({ error: "Project not found" });
    return res.status(200).json({
      success: true,
      data: project,
      message: "Project fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
