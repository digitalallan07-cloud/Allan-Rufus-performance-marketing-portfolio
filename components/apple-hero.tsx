"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function AppleHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ctaButtons = [
    { label: "PPC", angle: -45, distance: 280 },
    { label: "CRO", angle: -135, distance: 280 },
    { label: "GTM", angle: 45, distance: 280 },
    { label: "AI Coding", angle: 135, distance: 280 },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,112,243,0.1),transparent_50%)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-8">
        {/* Left Side Text */}
        <div
          className={`absolute left-8 lg:left-24 top-1/2 -translate-y-1/2 max-w-xs transition-all duration-1000 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <p className="text-2xl lg:text-3xl font-light leading-tight text-gray-800">
            Empowered brands with{" "}
            <span className="font-semibold text-electric-blue">
              full-funnel marketing
            </span>{" "}
            to accelerate growth.
          </p>
        </div>

        {/* Center - Profile Image with Floating CTAs */}
        <div className="relative flex items-center justify-center">
          {/* Profile Image Container */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-electric-blue/20 blur-3xl animate-pulse-slow" />

            {/* Image */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-electric-blue/30">
              <Image
                src="https://digitalallan.sirv.com/Profile%20Pic/WhatsApp%20Image%202026-01-07%20at%2020.12.51.jpeg"
                alt="Allan Rufus"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Floating CTA Buttons */}
          {ctaButtons.map((cta, index) => {
            const radians = (cta.angle * Math.PI) / 180;
            const x = Math.cos(radians) * cta.distance;
            const y = Math.sin(radians) * cta.distance;

            return (
              <button
                key={cta.label}
                className={`absolute group transition-all duration-1000 ${
                  mounted ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
                style={{
                  transform: mounted
                    ? `translate(${x}px, ${y}px)`
                    : "translate(0, 0)",
                  transitionDelay: `${400 + index * 100}ms`,
                }}
              >
                <div className="relative px-6 py-3 bg-white rounded-full border-2 border-electric-blue shadow-lg shadow-electric-blue/20 hover:shadow-xl hover:shadow-electric-blue/40 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-sm lg:text-base font-semibold text-electric-blue group-hover:text-electric-blue-dark">
                    {cta.label}
                  </span>

                  {/* Ripple effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-electric-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side Text */}
        <div
          className={`absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 max-w-xs text-right transition-all duration-1000 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <p className="text-2xl lg:text-3xl font-light leading-tight text-gray-800">
            <span className="block text-6xl lg:text-7xl font-bold text-electric-blue mb-2">
              4
            </span>
            <span className="text-2xl lg:text-3xl font-semibold text-electric-blue">
              years
            </span>
            <br />
            UAE experience
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-electric-blue rounded-full animate-scroll-down" />
          </div>
          <span className="text-xs text-gray-500 font-medium">Scroll</span>
        </div>
      </div>
    </div>
  );
}
