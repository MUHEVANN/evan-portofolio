"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "frontend",
    title: "X Gaming",
    description: "Project yang berisi web tentang informasi gaming",
    stack: [{ name: "HTML 5" }, { name: "Tailwind CSS" }, { name: "Javascript" }],
    image: "/work/porto1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "X Watch",
    description: "Project Jam Tangan Website",
    stack: [{ name: "HTML 5" }, { name: "Tailwind CSS" }, { name: "Javascript" }],
    image: "/work/porto2.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Project 3",
    description: "This is a project description",
    stack: [
      { name: "HTML 5" },
      { name: "CSS" },
      { name: "JQuery/Ajax" },
      { name: "laravel" },
    ],
    image: "/work/vannShop.png",
    live: "",
    github: "",
  },
];
function Work() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    console.log(swiper);
    const activeIndex = swiper.activeIndex;
    setProject(projects[activeIndex]);
  };
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8 ">
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl font-extrabold text-transparent text-outline leading-none">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, i) => (
                  <li key={i} className="text-xl text-accent">
                    {item.name}
                    {i < project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="h-[70px] w-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsArrowUpRight className="text-white text-xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="h-[70px] w-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-white text-xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] relative">
            <Swiper
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              spaceBetween={30}
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, i) => (
                <SwiperSlide key={i} className="w-full">
                  <div className="h-[465px] relative group flex justify-center items-center bg-pink-50/20">
                    <div></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        fill
                        className="object-cover "
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyle={
                  "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                }
                btnStyle={
                  "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                }
              />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
