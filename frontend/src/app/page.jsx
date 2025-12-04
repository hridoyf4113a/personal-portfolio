import React from "react";
import MyInfo from "./components/MyInfo";
import ProjectList from "./components/ProjectList";
import { getProjects } from "./utils/getProjects";

export default async function App() {
  const projects = await getProjects();

  return (
    <div className="mt-14 w-full grid grid-cols-6 min-h-full">
      <MyInfo />
      <div className="col-span-4 pl-25">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}
