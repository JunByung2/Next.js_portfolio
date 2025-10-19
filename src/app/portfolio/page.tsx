import React from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/project.json";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-12">
      <h1 className="flex text-3xl font-bold mb-5 text-[#ffffff] item-center">
        Projects
      </h1>

      <div className="grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#fdd30063] w-150 rounded-2xl shadow-lg transition overflow-hidden hover:scale-80"
          >
            <Link href={project.link} target="_blank">
              <div className="relative flex items-center justify-center">
                {project.image ? (
                  <Image
                    className="mt-10 rounded-2xl"
                    src={project.image}
                    alt={project.title}
                    width={430}
                    height={280}
                  />
                ) : (
                  <span className="text-gray-600">No Image</span>
                )}
              </div>

              <div className="p-5 flex flex-col items-center text-center">
                <h2 className="text-xl text-[#ffffff] font-semibold mb-2">
                  {project.title}
                </h2>
                <p className="text-[#ffffff] text-sm mb-3">
                  {project.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
