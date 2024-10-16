import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { SiNextdotjs, SiNuxtdotjs, SiTailwindcss } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About Me",
  description:
    "Halo, Saya Muhammad Evan Kusyanto, biasa dipanggil Evan. Saya berumur 21 tahun, dan bertempat tinggal di Klaten, Jawa Tengah. Saya lulusan dari Universitas Amikom Yogyakarta, saya mengambil jurusan D3 Teknik Informatika.",
  info: [
    {
      fieldName: "Name",
      FieldValue: "Muhamad Evan Kusyanto",
    },
    {
      fieldName: "Phone",
      FieldValue: "087812418286",
    },
    {
      fieldName: "Experience",
      FieldValue: "6 Month",
    },
    {
      fieldName: "Address",
      FieldValue: "Sendangrejo, Karanganom, Klaten",
    },
    {
      fieldName: "Email",
      FieldValue: "muhammadevankusyanto@gmail.com",
    },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "Sebagai Web Developer, saya berpengalaman dalam merancang dan mengembangkan aplikasi web responsif menggunakan teknologi modern seperti React.js, Vue.js, dan Laravel Saya berfokus pada pengembangan antarmuka pengguna yang menarik dan intuitif, serta mengoptimalkan kinerja aplikasi agar berjalan lancar di berbagai perangkat",
  items: [
    {
      company: "PT Jetorbit Tehnologi Indonesia",
      position: "Full Stack Developer",
      duration: "Aug 2023 - Jan 2024",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "Berikut adalah catatan riwayat pendidikan saya dan beberapa pelajaran yang saya ambil diluar dari pendidikan formal",
  items: [
    {
      institution: "Universitas Amikom Yogyakarta",
      position: "D3 Teknik Informatika",
      duration: "2021 - 2024",
    },
    {
      institution: "Workshop React JS",
      position: "Front End Developer Workshop",
      duration: "2023",
    },
    {
      institution: "laravel & Vue Hris Application",
      position: "Full Stack Developer Bootcamp",
      duration: "2024",
    },
  ],
};

const skill = {
  title: "My Skills",
  description:
    "Berikut adalah beberapa teknologi yang saya kuasai dan sering saya gunakan dalam proyek-proyek saya",
  items: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "Javascript",
      icon: <FaJs />,
    },
    {
      name: "React JS",
      icon: <FaReact />,
    },
    {
      name: "Next JS",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Laravel",
      icon: <FaLaravel />,
    },
    {
      name: "Vue JS",
      icon: <FaVuejs />,
    },
    {
      name: "Nuxt JS",
      icon: <SiNuxtdotjs />,
    },
  ],
};
function Resume() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center  py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col md:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col max-w-[380px] gap-6 mx-auto md:mx-0 w-full">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="text-center lg:text-left flex flex-col gap-3">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] rounded-xl flex justify-center items-center lg:items-start flex-col py-6 px-10 "
                      >
                        <span className="text-accent text-sm mb-2">
                          {item.duration}
                        </span>
                        <h3 className="text-xl min-h-[60px] text-center md:text-start">
                          {item.position}
                        </h3>
                        <div className="flex gap-4 items-center">
                          <span className="bg-accent w-[6px] h-[6px] rounded-full"></span>
                          <p className="text-white/60 text-sm">
                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="text-center lg:text-left flex flex-col gap-3">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] rounded-xl flex justify-center items-center lg:items-start flex-col py-6 px-10 "
                      >
                        <span className="text-accent text-sm mb-2">
                          {item.duration}
                        </span>
                        <h3 className="text-xl min-h-[60px] text-center md:text-start">
                          {item.position}
                        </h3>
                        <div className="flex gap-4 items-center">
                          <span className="bg-accent w-[6px] h-[6px] rounded-full"></span>
                          <p className="text-white/60 text-sm">
                            {item.institution}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-3 text-center xl:text-start">
                  <h3 className="text-4xl font-bold">{skill.title}</h3>
                  <p className="max-w-[600px] text-white/60">
                    {skill.description}
                  </p>
                  <ul className="grid grid-cols-2  xl:grid-cols-4 gap-[30px]">
                    {skill.items.map((item, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full bg-[#232329] flex justify-center items-center h-[150px] group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 ">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4 "
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.FieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Resume;
