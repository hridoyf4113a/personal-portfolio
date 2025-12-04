"use client";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

export default function CopyNumber() {
  const number = "+880 1739 989931";

  const handleCopy = () => {
    navigator.clipboard.writeText(number);
    toast.success("Copied!");
  };
  return (
    <p onClick={handleCopy} className="text-gray-400">
      WhatsApp :{" "}
      <Link href="#" className="text-blue-200/90">
        {number}
      </Link>
    </p>
  );
}
