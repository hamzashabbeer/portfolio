"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const socialLinks = [
  {
    name: "GitHub",
    icon: BsGithub,
    href: "https://github.com/hamzashabbeer",
  },
  {
    name: "LinkedIn",
    icon: BsLinkedin,
    href: "https://linkedin.com/in/hamza-shabbeer",
  },
  {
    name: "Email",
    icon: HiOutlineMail,
    href: "mailto:hamzashabbeer@gmail.com",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 lg:pt-16">
      {/* Background Effects - Optimized */}
      <div className="absolute inset-0 bg-[#0A0118]">
        {/* Reduced number of patterns and simplified effects */}
        <div className="absolute inset-0 pattern-grid opacity-20" />
        <div className="absolute inset-0 pattern-dots opacity-10" />
        
        {/* Reduced and optimized gradient circles */}
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full filter blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-[120px] animate-pulse-slow" />
        
        {/* Reduced number of animated lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
            style={{
              top: `${25 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: [-1000, 1000],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
          />
        ))}
      </div>

        {/* Simplified overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Optimized animations */}
          <div className="space-y-8">
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex bg-gradient-to-r from-emerald-600/90 to-teal-600/90 backdrop-blur-xl px-6 py-3 rounded-full border-2 border-white/20 shadow-[0_8px_32px_0_rgba(16,185,129,0.3)] hover:shadow-[0_8px_32px_0_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 group/badge"
            >
              <div className="relative flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="relative text-sm font-medium text-white group-hover/badge:text-transparent group-hover/badge:bg-clip-text group-hover/badge:bg-gradient-to-r group-hover/badge:from-emerald-200 group-hover/badge:to-teal-200">
                  Available for new projects
                </span>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
              >
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  Hamza Shabbeer
                </span>
              </motion.h1>

              {/* Cool Separator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-1 w-24 mx-0 mt-6"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500" />
                <div className="absolute -top-[2px] left-0 w-2 h-2 rounded-full bg-purple-500 animate-pulse-slow" />
                <div className="absolute -bottom-[2px] right-0 w-2 h-2 rounded-full bg-blue-500 animate-pulse-slow" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400 max-w-2xl"
              >
                I&apos;m a passionate{" "}
                <span className="text-purple-400">Full Stack Developer</span> &{" "}
                <span className="text-blue-400">UI/UX Designer</span> crafting
                innovative digital solutions
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform duration-300"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-black/80 to-black/60 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-black/50">
                  Contact Me
                  <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="#projects"
                className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-transform duration-300"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF3D9A_0%,#FF9946_50%,#FF3D9A_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-black/80 to-black/60 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-black/50">
                View Projects
                  <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: "2+", label: "Years Experience", icon: "💼" },
                { value: "10+", label: "Projects Complete", icon: "🚀" },
                { value: "15+", label: "Tech Stack", icon: "⚡" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="group bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">{stat.icon}</span>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300">
                        {stat.value}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-3 rounded-xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.2)] transition-all duration-300 hover:scale-110 group"
                >
                  <link.icon className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl animate-pulse-slow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
                <Image
                  src="/images/profile.png"
                  alt="Hamza Shabbeer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 300px, 500px"
                />
              </div>

              {/* Floating Tags */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute top-10 right-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-xl px-6 py-3 rounded-full border-2 border-white/20 shadow-[0_8px_32px_0_rgba(147,51,234,0.3)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105 group/badge"
              >
                <span className="relative text-sm font-medium text-white group-hover/badge:text-transparent group-hover/badge:bg-clip-text group-hover/badge:bg-gradient-to-r group-hover/badge:from-purple-200 group-hover/badge:to-blue-200">
                  Full Stack Dev
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute bottom-10 left-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-xl px-6 py-3 rounded-full border-2 border-white/20 shadow-[0_8px_32px_0_rgba(147,51,234,0.3)] hover:shadow-[0_8px_32px_0_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105 group/badge"
              >
                <span className="relative text-sm font-medium text-white group-hover/badge:text-transparent group-hover/badge:bg-clip-text group-hover/badge:bg-gradient-to-r group-hover/badge:from-blue-200 group-hover/badge:to-purple-200">
                  UI/UX Designer
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 