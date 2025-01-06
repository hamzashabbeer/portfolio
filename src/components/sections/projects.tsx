"use client";

import { useState, useEffect } from "react";
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
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleProjects = () => {
    const result = [];
    const visibleCount = windowWidth < 640 ? 1 : 
                        windowWidth < 1024 ? 2 : 3;
    
    for (let i = 0; i < visibleCount; i++) {
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
      {/* Background Effects - Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
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
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-1 w-24 mx-auto mt-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500" />
            <div className="absolute -top-[2px] left-0 w-2 h-2 rounded-full bg-purple-500 animate-pulse-slow" />
            <div className="absolute -bottom-[2px] right-0 w-2 h-2 rounded-full bg-blue-500 animate-pulse-slow" />
          </motion.div>
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative h-[500px] w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 absolute inset-0">
            {getVisibleProjects().map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-[450px] bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl rounded-3xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] overflow-hidden group transform-gpu hover:scale-[1.02] transition-all duration-500"
              >
                {/* Project Image */}
                <div 
                  className="relative h-[250px] transform-gpu rotate-[-5deg] scale-110 -translate-y-4 hover:scale-115 hover:rotate-[-3deg] transition-all duration-400"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
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
                  <div className="flex gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/[0.05] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300"
                    >
                      <BsGithub className="w-4 h-4 text-white/80 group-hover/link:text-white relative z-10" />
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl border border-white/[0.05] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300"
                    >
                      <HiOutlineExternalLink className="w-4 h-4 text-white/80 group-hover/link:text-white relative z-10" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="group relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-black/50 backdrop-blur-sm hover:bg-black/30 transition-colors"
            >
              <BsChevronLeft className="w-6 h-6 text-white/80 group-hover:text-white relative z-10" />
            </button>
          </div>
          <div className="absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <button
              onClick={() => paginate(1)}
              className="group relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-black/50 backdrop-blur-sm hover:bg-black/30 transition-colors"
            >
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