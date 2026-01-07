"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Your Company Name",
    role: "Performance Marketing Specialist",
    location: "Dubai, UAE",
    duration: "2020 - Present",
    type: "Full-time",
    achievements: [
      "Drove 25-30% reduction in Cost Per Lead (CPL) through advanced audience segmentation and bid optimization across Google, Meta, and LinkedIn platforms",
      "Increased lead generation by 20-35% while maintaining or improving lead quality through data-driven campaign optimization",
      "Built and optimized end-to-end marketing funnels from ad creative to CRM, resulting in 4x-6x ROI on marketing spend",
      "Managed daily budgets and auction insights to maintain competitive positioning while reducing costs",
      "Collaborated directly with sales teams to align marketing efforts with revenue goals and improve lead-to-sale conversion rates",
    ],
  },
  {
    company: "Previous Company",
    role: "Digital Marketing Specialist",
    location: "Dubai, UAE",
    duration: "2018 - 2020",
    type: "Full-time",
    achievements: [
      "Led multi-channel paid advertising campaigns across Google Ads and Meta platforms",
      "Developed and implemented SEO strategies that improved organic traffic by 40%",
      "Created high-converting landing pages and optimized conversion funnels",
    ],
  },
  // Add more experiences as needed
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 z-10 ring-4 ring-background" />

                {/* Content */}
                <div className={index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 text-blue-400 mb-2">
                        <Briefcase className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.type}</span>
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl text-muted-foreground font-semibold mb-4">
                        {exp.company}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + achIndex * 0.05 }}
                          className="flex items-start space-x-3"
                        >
                          <span className="text-blue-500 mt-1 flex-shrink-0">
                            →
                          </span>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={index % 2 === 0 ? "md:col-start-2" : ""} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
