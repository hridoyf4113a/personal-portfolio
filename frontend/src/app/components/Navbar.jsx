import Link from "next/link";
import React from "react";
import AdminRoute from "./AdminRoute";

export default function Navbar() {
  return (
    <div className="w-full bg-transparent text-white py-4 flex justify-between items-center ">
      <div className="flex gap-6 justify-between items-center ">
        <Link href="/" className="text-3xl font-bold tracking-wide">
          PixelCraft by Hridoy
        </Link>
        <Link href="/projects" className="font-semibold cursor-pointer">
          Projects
        </Link>
        <Link href="/contact" className="font-semibold cursor-pointer">
          Contact
        </Link>
      </div>
      
        <AdminRoute/>
    </div>
  );
}
