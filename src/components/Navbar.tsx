import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-[#FDD200] py-4">
        <div className="container flex items-center justify-between">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-black ml-6 hover:font-black">
                SONG'S PORTFOLIO
              </div>
            </Link>
          </div>

          <div className="flex items-center font-bold">
            <Link
              href="/"
              className="text-black font-bold hover:font-black mr-5"
            >
              Home
            </Link>
            <Link
              href="/about_me"
              className="text-black font-bold hover:font-black mr-5"
            >
              About Me
            </Link>
            <Link
              href="/portfolio"
              className="text-black font-bold hover:font-black mr-5"
            >
              Project
            </Link>
            <Link
              href="/team"
              className="text-black font-bold hover:font-black mr-5"
            >
              Team
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
