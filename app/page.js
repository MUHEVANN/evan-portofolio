import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <section>
      <div className="container h-full">
        <div className="flex flex-col lg:flex-row  lg:items-center pb-8 justify-between xl:pt-8 xl:pb-24 gap-8">
          <div className="lg:order-none order-2">
            <span>Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'am <br />
              <span className="text-accent">Muhammad Evan</span>
            </h1>
            <p className="w-full lg:max-w-[500px] mb-9">
              I am passionate about web development as a whole, from the
              interface to the back-end architecture. My programming languages
              include Laravel, React, and Vue.js
            </p>
            <div className="flex flex-col md:flex-row items-center  gap-8">
              <Button
                className="uppercase flex gap-2 items-center tracking-[2px]"
                variant="outline"
              >
                <span>Download CV</span> <FiDownload />
              </Button>

              <div>
                <Social outline />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-none ">
            <Photo />
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
}
