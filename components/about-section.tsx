"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Users, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Ads → Funnel → CRM",
    description: "End-to-end campaign management aligned with sales goals",
  },
  {
    icon: TrendingUp,
    title: "Multi-Platform Expertise",
    description: "Google Ads, Meta Ads, LinkedIn Ads with proven ROI",
  },
  {
    icon: Users,
    title: "Sales Alignment",
    description: "Direct collaboration between marketing and sales teams",
  },
  {
    icon: BarChart3,
    title: "SEO Coordination",
    description: "Strategic SEO team management for organic growth",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glassmorphism rounded-2xl p-8 space-y-4">
              <h3 className="text-2xl font-display font-semibold">
                Performance-Driven Marketing Professional
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 4 years of experience in performance marketing, I
                specialize in creating data-driven campaigns that deliver
                measurable business outcomes. My approach focuses on the entire
                customer journey—from ad creative to funnel optimization, CRM
                integration, and sales enablement.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I don't just run ads; I build systems that connect marketing
                spend to revenue. Every campaign is tracked, optimized, and
                aligned with your business goals.
              </p>
            </div>

            <div className="glassmorphism rounded-2xl p-8">
              <h4 className="text-xl font-display font-semibold mb-4">
                Core Philosophy
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-500">→</span>
                  <span>
                    Business outcomes over vanity metrics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-purple-500">→</span>
                  <span>
                    Data-driven decisions backed by analytics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-pink-500">→</span>
                  <span>
                    Continuous testing and optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-orange-500">→</span>
                  <span>
                    Transparent reporting and clear communication
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <highlight.icon className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
