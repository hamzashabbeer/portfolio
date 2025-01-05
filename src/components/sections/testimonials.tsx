"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  image: string;
  linkedin: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "I had the pleasure of working with Hamza on several web development projects. His expertise in React and Next.js is outstanding, and he consistently delivers clean, efficient code. His ability to solve complex problems and attention to detail make him a valuable asset to any development team.",
    author: "Alex Thompson",
    position: "Senior Frontend Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/alex-thompson",
  },
  {
    id: 2,
    content: "Hamza demonstrated exceptional skills in both frontend and backend development. His work on our e-commerce platform showcased his ability to create seamless user experiences while maintaining robust server-side functionality. A true full-stack developer who goes above and beyond.",
    author: "David Park",
    position: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/david-park",
  },
  {
    id: 3,
    content: "Working with Hamza was a fantastic experience. His proficiency in modern web technologies and commitment to best practices resulted in a portfolio website that exceeded our expectations. His communication skills and dedication to project success are truly commendable.",
    author: "Jessica Chen",
    position: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    linkedin: "https://linkedin.com/in/jessica-chen",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const paginate = (newDirection: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getVisibleTestimonials = () => {
    const result: Testimonial[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section className="py-32 relative -mt-32 -mb-32 z-0" id="testimonials">
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {getVisibleTestimonials().map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-medium">{testimonial.author}</h4>
                <p className="text-gray-400">{testimonial.position}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300">{testimonial.content}</p>
          </div>
        ))}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => paginate(-1)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            <BsChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            <BsChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
} 