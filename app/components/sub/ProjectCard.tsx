"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  src: string;
  title: string;
  descriptions: string[];
  link: string;
  skills: string[];
}

const ProjectCard = ({ src, title, descriptions, link, skills }: Props) => {
  const router = useRouter();
  const navigate = () => {
    router.push(link);
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-105 duration-300 cursor-pointer z-40"
      onClick={navigate}
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">👨‍💻 {skills.join(",")}</p>
        {descriptions.map((d) => (
          <p className="mt-2 text-gray-300" key={d}>
            ・{d}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
