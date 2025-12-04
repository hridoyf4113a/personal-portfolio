import React from "react";
import MainProjectList from "./components/MainProjectList";
import { getProjects } from "../utils/getProjects";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="mt-8">
      <MainProjectList projects={projects} />
    </div>
  );
}
