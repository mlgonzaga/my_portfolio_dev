"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";

// about data

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus tempora fuga aperiam repudiandae vitae, voluptatum inventore, quisquam natus, mollitia facere dolore nemo asperiores reprehenderit facilis? Voluptate vero sed cum unde?",
  info: [
    {
      fieldName: "Name",
      fielValue: "Mateus Luiz Gonzaga",
    },
    {
      fieldName: "Phone",
      fielValue: "+55 (34) 99243-4560",
    },
    {
      fieldName: "Email",
      fielValue: "mateusluizgonzaga@gmail.com",
    },
    {
      fieldName: "Experience",
      fielValue: "2+ Years",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: `Desenvolvimento de chatbots com a plataforma Blip, baseado em construção de fluxos de atendimento e instegrações com sistemas de clientes , diversos CRM's como(RD Station, Pipe Drive e etc), gerenciadores de projeto como Jira Software, utilizando API Rest e tratativa de dados utilizando JavaScript, treinamento de estagiários e Dev’s Jr.`,
  items: [
    {
      company: "Telek Sistemas",
      position: "Backend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Telek Sistemas",
      position: "Backend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Telek Sistemas",
      position: "Backend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Telek Sistemas",
      position: "Backend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Telek Sistemas",
      position: "Backend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Telek Sistemas",
      position: "Backend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Telek Sistemas",
      position: "Backend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Telek Sistemas",
      position: "Backend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Telek Sistemas",
      position: "Backend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Telek Sistemas",
      position: "Backend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Telek Sistemas",
      position: "Backend Developer",
      duration: "2022 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sit amet velit necessitatibus dolore nemo delectus, nobis autem labore non, asperiores vero. Quam, ab. Rem rerum aliquam cum exercitationem aperiam.`,

  items: [
    {
      instituition: "Unicesumar",
      degree: "Análise e Desenvolvimento de Sistemas",
      duration: "2022 - Present",
    },
    {
      instituition: "OneBitCode",
      degree: "FullStack Web Development",
      duration: "2023",
    },
    {
      instituition: "EW Academy",
      degree: "Imersão em desenvolvimento de APIs com Node.js",
      duration: "2024",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sit amet velit necessitatibus dolore nemo delectus, nobis autem labore non, asperiores vero. Quam, ab. Rem rerum aliquam cum exercitationem aperiam.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <BiLogoPostgresql />,
      name: "postgres",
    },
    {
      icon: <BiLogoMongodb />,
      name: "mongodb",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" className="">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full ">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>

                          <div className="flex  items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-3">
                            {item.degree}
                          </h3>

                          <div className="flex  items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.instituition}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index)=>{
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="group-hover:text-accent text-6xl transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full">
              about me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
