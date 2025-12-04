"use client";
import axios from "axios";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function MainProjectList({ projects }) {
  if (!projects.success) toast.error(projects.message);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState(projects);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://personal-portofolio-backend-production.up.railway.app/projects/all?q=${query}`
      );
      setResults(res.data);
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      <div className=" w-full flex justify-end">
        <div className="relative">
          <input
            type="text"
            placeholder="Search .."
            className="rounded-full bg-neutral-800 py-4 w-50 focus:w-70 transition-all outline-0 text-xl pl-5 pr-16"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="rounded-full cursor-pointer bg-white/90 text-black p-2.5 absolute top-2  right-2">
            <Search strokeWidth={"2"} />
          </button>
        </div>
      </div>
      <h2 className="text-xl mb-1.5 font-bold text-gray-300">All Projects</h2>
      {results.data.length === 0 && (
        <p className="text-xl text-center mt-40 text-gray-400">
          No result found!
        </p>
      )}
      <div className="grid grid-cols-4 gap-x-3 gap-y-4">
        {results.data.map((project) => (
          <div
            key={project._id}
            className="border bg-neutral-900 border-[#262626] px-4 py-3 rounded "
          >
            <Link
              href={`/projects/${project._id}`}
              className="text-lg hover:underline leading-snug text-gray-300 font-bold"
            >
              {project.name}
            </Link>
            <p className="text-sm mt-2 mb-2 text-gray-400">{project.desc}</p>
          </div>
        ))}
      </div>
      {results.data.length >= 12 && (
        <p className="text-center mt-6 text-gray-600 mb-4 font-semibold text-sm">
          Crafting tomorrow’s web, one pixel at a time!
        </p>
      )}
    </>
  );
}
