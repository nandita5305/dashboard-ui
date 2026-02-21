"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// Counter component for animated numbers
function Counter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let startTime: number | null = null;
          const startValue = 0;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return (
    <span ref={countRef} className="text-3xl md:text-4xl font-bold mt-1">
      {count}{suffix}
    </span>
  );
}

export default function Homepage() {
  return (
    <div className="relative min-h-screen bg-[#f5f3ef] overflow-hidden">

      {/* ===== GRID BACKGROUND ===== */}
      <div
        className="absolute inset-0 z-0 pointer-events-none
        bg-[linear-gradient(#e8e4dc_1px,transparent_1px),linear-gradient(to_right,#e8e4dc_1px,transparent_1px)]
        bg-[size:60px_60px] opacity-60"
      />

      <div className="relative z-10">

        {/* ================= NAVBAR ================= */}
        <header className="py-5 px-5 md:px-8 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-purple-200 flex items-center justify-center font-bold text-purple-700 transition-transform duration-300 hover:scale-110">
              S
            </div>
            <span className="text-xl md:text-2xl font-semibold text-purple-700 transition-all duration-300 hover:text-purple-500">
              Savara
            </span>
          </div>

          {/* Center Nav (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-8 bg-black text-white px-8 py-3 rounded-full text-sm font-medium">
            <Link 
              href="#" 
              className="relative group"
            >
              <span className="transition-all duration-300 group-hover:text-purple-300">
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#" 
              className="relative group"
            >
              <span className="transition-all duration-300 group-hover:text-purple-300">
                Product
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#" 
              className="relative group"
            >
              <span className="transition-all duration-300 group-hover:text-purple-300">
                Our Story
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#" 
              className="relative group"
            >
              <span className="transition-all duration-300 group-hover:text-purple-300">
                Contact Us
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/signup"
              className="ml-4 bg-white text-black px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-purple-100 hover:scale-105 hover:shadow-lg"
            >
              Start for free
            </Link>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-3 md:gap-6 text-sm">
            <Link 
              href="/login" 
              className="text-gray-700 transition-all duration-300 hover:text-black hover:scale-105"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-black text-white px-4 md:px-5 py-2 rounded-full font-medium transition-all duration-300 hover:bg-gray-700 hover:scale-105 hover:shadow-lg"
            >
              Sign Up
            </Link>
          </div>
        </header>

        {/* ================= HERO SECTION ================= */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 pt-12 md:pt-20 pb-10 flex flex-col lg:flex-row items-center">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Your AI{" "}
              <span className="bg-gradient-to-r from-purple-700 to-indigo-500 bg-clip-text text-transparent">
                TEACHING
              </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-purple-700 to-indigo-500 bg-clip-text text-transparent">
                COMPANION
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-800 font-light">
              Built for Indian Classrooms
            </p>

            <p className="mt-4 text-base md:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Simplify lesson planning, generate assessments, create gamified
              quizzes and personalize teaching — aligned to CBSE and NEP 2020.
            </p>

            <Link
              href="/signup"
              className="inline-block mt-8 bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              Get Started For Free
            </Link>

          </div>

          {/* Right Image */}
          <div className="flex-1 mt-12 lg:mt-0 flex justify-center">
            <Image
              src="/girl.png"
              alt="AI Teaching Illustration"
              width={500}
              height={500}
              className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] drop-shadow-2xl transition-all duration-500 hover:scale-105 hover:drop-shadow-3xl"
              priority
            />
          </div>

        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center lg:justify-start">

            {/* Card 1 */}
            <div className="bg-white border border-gray-300 rounded-3xl px-6 py-5 w-full sm:w-[230px] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="inline-block bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-xs mb-3">
                Education
              </div>
              <p className="text-sm text-gray-600">subjects</p>
              <Counter end={40} suffix="+" />
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-3xl px-6 py-5 w-full sm:w-[230px] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:from-purple-600 hover:to-indigo-600">
              <div className="inline-block bg-yellow-300 text-black px-3 py-1 rounded-full text-xs mb-3">
                Online
              </div>
              <p className="text-sm opacity-90">courses</p>
              <Counter end={120} suffix="+" />
            </div>

            {/* Card 3 */}
            <div className="bg-yellow-400 rounded-3xl px-6 py-5 w-full sm:w-[230px] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-yellow-500">
              <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-full w-fit mb-3 text-xs">
                ⭐⭐⭐⭐⭐ <span className="font-semibold">5.0</span>
              </div>
              <p className="text-sm">learner reviews</p>
              <Counter end={180} suffix="k" />
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}