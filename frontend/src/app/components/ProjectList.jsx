"use client";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

export default function ProjectList({ projects }) {
  if (!projects.success) toast.error(projects.message);

  return (
    <div className="grid w-full mt-2  gap-2.5 grid-cols-2">
      {projects.data.slice(0, 11).map((project) => (
        <div
          key={project._id}
          className="col-span-1 border border-[#262626] bg-neutral-900 rounded py-3 px-4"
        >
          <Link href={`/projects/${project._id}`} className="font-semibold hover:underline text-gray-300 mb-2">{project.name}</Link>
          <p className="txt-sm text-gray-400 line-heigh leading-tight">
            {project.desc.slice(0, 105)}{" "}
            <Link href={`/projects/${project._id}`} className="text-blue-400">
              ..see more
            </Link>
          </p>
        </div>
      ))}
      <Link
        href="projects"
        className="font-semibold text-center mt-12 text-blue-400 underline"
      >
        View all
      </Link>
    </div>
  );
}
