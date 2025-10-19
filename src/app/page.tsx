import Navbar from "@/components/Navbar";
import Image from "next/image";
import mainImage from "../image/2.webp";
import apple from "../image/apple.png";

export default function Home() {
  return (
    <div>
      <div className="mt-25 flex justify-center">
        <h1 className="font-bold  text-[#ffffff] text-5xl">
          Welcome, This Is Where My Story Begins
        </h1>
      </div>
      <div className="flex justify-center mt-5">
        <div>
          <Image
            src={mainImage}
            alt="mainimage"
            width={130}
            height={150}
            className="mt-15"
          />
          <div className="transform translate-x-40 -translate-y-30">
            <Image
              src={apple}
              alt="mainimage"
              width={50}
              height={70}
              className="mt-15"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
