"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    { name: "PPC", position: "top-left" },
    { name: "CRO", position: "top-right" },
    { name: "GTM", position: "bottom-left" },
    { name: "AI Coding", position: "bottom-right" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30" />

      {/* Radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="w-full max-w-7xl mx-auto">
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">

            {/* Left Side - Tagline */}
            <div
              className={`text-center lg:text-right transition-all duration-1000 delay-200 ${
                mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 leading-tight">
                Empowered brands with{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  full-funnel marketing
                </span>{" "}
                to accelerate growth.
              </h2>
            </div>

            {/* Center - Profile Image with Floating CTAs */}
            <div className="relative flex items-center justify-center">
              {/* Profile Image */}
              <div
                className={`relative transition-all duration-1000 delay-500 ${
                  mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                {/* Animated glow rings */}
                <div className="absolute inset-0 animate-ping-slow opacity-20">
                  <div className="w-full h-full rounded-full border-4 border-blue-500" />
                </div>

                {/* Static glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-2xl opacity-20" />

                {/* Profile Image Container */}
                <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="https://digitalallan.sirv.com/Profile%20Pic/WhatsApp%20Image%202026-01-07%20at%2020.12.51.jpeg"
                          alt="Allan Rufus"
                          fill
                          className="object-cover"
                          priority
                          sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating CTA Buttons */}
                {services.map((service, index) => {
                  const positions = {
                    "top-left": "-top-8 -left-8 lg:-top-12 lg:-left-12",
                    "top-right": "-top-8 -right-8 lg:-top-12 lg:-right-12",
                    "bottom-left": "-bottom-8 -left-8 lg:-bottom-12 lg:-left-12",
                    "bottom-right": "-bottom-8 -right-8 lg:-bottom-12 lg:-right-12",
                  };

                  return (
                    <button
                      key={service.name}
                      className={`absolute ${positions[service.position as keyof typeof positions]}
                        group transition-all duration-1000 hover:scale-110 hover:-translate-y-1
                        ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                      style={{ transitionDelay: `${700 + index * 100}ms` }}
                    >
                      <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />

                        {/* Button */}
                        <div className="relative px-6 py-3 bg-white rounded-full border-2 border-blue-500 shadow-lg">
                          <span className="text-sm lg:text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                            {service.name}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Experience */}
            <div
              className={`text-center lg:text-left transition-all duration-1000 delay-300 ${
                mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="inline-block">
                <div className="text-8xl lg:text-9xl font-bold bg-gradient-to-br from-blue-600 to-blue-500 bg-clip-text text-transparent mb-4">
                  4
                </div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    years
                  </span>
                </h2>
                <p className="text-2xl lg:text-3xl font-light text-gray-700 mt-2">
                  UAE experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-blue-500 rounded-full animate-scroll" />
          </div>
          <span className="text-xs text-gray-500 font-medium">Scroll</span>
        </div>
      </div>
    </section>
  );
}
