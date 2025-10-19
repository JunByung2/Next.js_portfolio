import React from "react";
import projects from "@/data/about.json";
import Image from "next/image";
import git from "@/image/git.png";
import tis from "@/image/tistory.png";
import bear from "@/image/bear.png";

export default function AboutMePage() {
  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-bold mb-2 text-white text-center">
        About Me
      </h1>
      <div className="flex justify-center">
        <Image src={bear} alt="bear" width={100} height={100} />
      </div>
      <div className="grid gap-10">
        {projects.map((about) => (
          <div key={about.id} className="bg-[#facc0092] p-6 rounded-lg mx-50">
            <h2 className="text-xl font-semibold text-[#ffffff] flex flex-col items-center">
              {about.title}
            </h2>

            <ul className="text-[#ffffff] mt-2 list-disc list-inside flex flex-col items-center">
              {about.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="bg-[#facc0092] p-6 rounded-lg mx-50">
          <h2 className="text-xl font-semibold text-[#ffffff] flex flex-col items-center mb-3">
            Study Log
          </h2>
          <div className="text-[#ffffff] mt-2 list-disc list-inside flex flex-col items-center">
            <a
              href="https://github.com/Junbyung2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:font-bold"
            >
              <Image src={git} alt="git" width={30} />
              ---https://github.com/Junbyung2
            </a>
            <a
              href="https://das-geheimnis-stage.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white mt-4 hover:font-bold"
            >
              <Image src={tis} alt="tistory" width={30} />
              ---https://das-geheimnis-stage.tistory.com/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
