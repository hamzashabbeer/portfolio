"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiStripe,
  SiFirebase,
  SiMui,
  SiRedux
} from "react-icons/si";

const projects = [
  {
    title: "Modern Portfolio",
    description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring glass morphism and smooth animations.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1470&auto=format&fit=crop",
    tags: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
    github: "https://github.com/hamzashabbeer/my-portfolio",
    demo: "https://hamzashabbeer.vercel.app",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1470&auto=format&fit=crop",
    tags: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Stripe", icon: SiStripe },
    ],
    github: "https://github.com/hamzashabbeer/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop",
    tags: [
      { name: "React", icon: SiReact },
      { name: "Firebase", icon: SiFirebase },
      { name: "Material UI", icon: SiMui },
      { name: "Redux", icon: SiRedux },
    ],
    github: "https://github.com/hamzashabbeer/taskapp",
    demo: "https://taskapp-demo.vercel.app",
  },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleProjects = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      result.push(projects[index]);
    }
    return result;
  };

  const paginate = (newDirection: number) => {
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + projects.length) % projects.length);
  };

  return (
    <section className="relative py-20 overflow-hidden" id="projects">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Some of my recent works that showcase my skills and experience
          </p>
          {/* Cool Separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative h-1 w-24 mx-auto mt-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500" />
            <div className="absolute -top-[2px] left-0 w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <div className="absolute -bottom-[2px] right-0 w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-blue-500/50 blur-md animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative h-[500px] w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-6 absolute inset-0">
            {getVisibleProjects().map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="relative h-[450px] bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl rounded-3xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] overflow-hidden group transform-gpu hover:scale-[1.02] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_40%,rgba(255,255,255,0.1)_45%,rgba(255,255,255,0.1)_55%,transparent_60%)] pointer-events-none"></div>
                
                {/* Project Image */}
                <div 
                  className="relative h-[250px] transform-gpu rotate-[-5deg] scale-110 -translate-y-4 hover:scale-115 hover:rotate-[-3deg] transition-all duration-400"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => {
                      const Icon = tag.icon;
                      return (
                        <span
                          key={tag.name}
                          className="group flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                        >
                          <Icon className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors" />
                          {tag.name}
                        </span>
                      );
                    })}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                    >
                      <BsGithub className="w-4 h-4" />
                      <span>Code</span>
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                    >
                      <HiOutlineExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="group relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
            >
              {/* Disco Light Effect */}
              <div className="absolute inset-0 bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.purple.600)_0%,theme(colors.blue.600)_10%,theme(colors.purple.600)_20%)] animate-[shimmer_2.5s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ '--shimmer-angle': '0deg' } as React.CSSProperties} />
              <div className="absolute inset-[1px] rounded-full bg-black/50 backdrop-blur-sm group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
              <BsChevronLeft className="w-6 h-6 text-white/80 group-hover:text-white relative z-10" />
            </button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <button
              onClick={() => paginate(1)}
              className="group relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
            >
              {/* Disco Light Effect */}
              <div className="absolute inset-0 bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.purple.600)_0%,theme(colors.blue.600)_10%,theme(colors.purple.600)_20%)] animate-[shimmer_2.5s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ '--shimmer-angle': '0deg' } as React.CSSProperties} />
              <div className="absolute inset-[1px] rounded-full bg-black/50 backdrop-blur-sm group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
              <BsChevronRight className="w-6 h-6 text-white/80 group-hover:text-white relative z-10" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-purple-500 to-blue-500"
                    : "w-4 bg-white/20 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 