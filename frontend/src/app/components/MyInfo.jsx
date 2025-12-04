import Image from "next/image";
import Link from "next/link";
import React from "react";
import CopyNumber from "./CopyNumber";

export default function MyInfo() {
  return (
    <div className="col-span-2">
      <div className="rounded-full h-36 w-36 relative overflow-hidden">
        <Image
          src="https://res.cloudinary.com/hridoy002/image/upload/v1764351998/photo_6147970330035686421_x_h7gqr6.jpg"
          alt="dp"
          fill
        />
      </div>
      <h1 className="text-2xl mt-4 font-extrabold text-gray-300 tracking-wider">
        Hridoy Ahmed
      </h1>
      <p className="text-gray-400">hridoyahamad42@gmail.com</p>
      <h1 className="mt-4 leading-snug text-gray-300">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eos
        accusantium corrupti. Nisi animi cumque odit architecto, neque omnis
        voluptatum at, sequi reiciendis nemo libero corrupti asperiores totam
        non cupiditate?
      </h1>

      <h2 className="font-semibold mt-6 text-gray-300">
        Educational statement
      </h2>
      <p className="text-gray-400">
        Status : <span className="text-green-600 font-medium">Running</span>
      </p>
      <p className="text-gray-400">
        Course : <span className=" font-medium text-gray-300">Honours</span>
      </p>
      <p className="text-gray-400">
        Department :{" "}
        <span className=" font-medium tracking-tighter text-gray-300">
          Bachelor of Buisness Administration(BBA)
        </span>
      </p>
      <p className="text-gray-400">
        Subject : <span className=" font-medium text-gray-300">Accounting</span>
      </p>
      <p className="text-gray-400">
        Year : <span className=" font-medium text-gray-300">2022-23</span>
      </p>

      <h2 className="font-semibold mt-6 text-gray-300">Contact</h2>
      <p className="text-gray-400">
        Email :{" "}
        <Link
          href="mailto:hridoyahamad42@gmail.com"
          className="text-blue-200/90 underline"
        >
          hridoyahamad42@gmail.com
        </Link>
      </p>
      <p className="text-gray-400">
        Github :{" "}
        <Link
          href="https://github.com/hridoyf4113a"
          className="text-blue-200/90"
        >
          hridoyf4113a
        </Link>
      </p>
      <CopyNumber />
      <h2 className="font-semibold mt-6 text-gray-300">Address</h2>
      <p className="text-gray-400">
        {" "}
        House No. 23, Road No. 11, Block E, DHSO,
      </p>
      <p className="text-gray-400">Banani, Dhaka, Bangladesh</p>
    </div>
  );
}
