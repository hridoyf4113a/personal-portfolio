import { getProject } from "@/app/utils/getProjects";
import Link from "next/link";
import React from "react";

export default async function SingleProject({ params }) {
  const screenshots = [1, 2, 3, 4];
  const { id } = await params;
  const response = await getProject(id);
  if (!response.success) throw new Error("Something went wrong");
  const project = response.data;
  return (
    <div className=" mt-10">
      <h1 className="text-2xl font-extrabold tracking-wider text-gray-300">
        {project.name}
      </h1>
      <p className="leading-snug text-gray-400 w-[60%] mt-4">{project.desc}</p>
      <h2 className="mt-4">
        Live link -{" "}
        <Link href="#" className="text-blue-200">
          {project.link}
        </Link>
      </h2>
      <p className="font-bold text-gray-300 mb-1 mt-8">Technologies</p>

      <div className="w-[38%] flex gap-2 items-center flex-wrap">
        {project.technologies.map((tech, idx) => (
          <div
            key={idx}
            className="leading-tight bg-neutral-900 border border-[#262626] p-2 text-gray-300 rounded "
          >
            {tech}
          </div>
        ))}
      </div>
      <p className="font-bold text-gray-300 mb-1 mt-8">Screenshots</p>
      <div className="w-full grid grid-cols-4 h-80 gap-2">
        {screenshots.map((screenshot, idx) => (
          <div
            key={idx}
            className="col-span-1 bg-neutral-900 border border-[#262626] rounded flex justify-center flex-col items-center"
          >
            <p>image{screenshot}</p>
            <h2>{project.name}</h2>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-gray-600 font-semibold text-sm">Crafting tomorrow’s web, one pixel at a time!</p>
    </div>
  );
}
