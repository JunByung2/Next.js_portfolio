import React from "react";
import team from "@/data/team.json";
import Image from "next/image";
import git from "@/image/git.png";
import bear from "@/image/bear.png";

export default function TeamPage() {
  return (
    <div className="p-10 min-h-screen mt-10">
      <h1 className="text-3xl font-bold mb-10 text-white text-center">
        Team 미정
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {team.map((member) => (
          <a
            key={member.id}
            href={member.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#facc0092] p-7 rounded-lg shadow-lg w-40 text-center hover:scale-110 transition-transform"
          >
            <div className="w-24 h-24 mx-auto mb-2 relative">
              {member.image && (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-lg object-cover"
                />
              )}
            </div>
            <h2 className="text-white font-semibold">{member.name}</h2>
            <p className="text-white text-sm">{member.num}</p>
            <Image
              src={git}
              alt="github"
              width={35}
              className="block mx-auto mt-2"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
