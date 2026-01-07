"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    field: "Marketing & Digital Strategy",
    institution: "University Name",
    location: "Dubai, UAE",
    period: "2016 - 2020",
    icon: GraduationCap,
    highlights: [
      "Specialization in Digital Marketing and Consumer Behavior",
      "Dean's List - Multiple Semesters",
      "Marketing Club President",
      "Graduated with Honors (3.8 GPA)",
    ],
  },
  {
    degree: "Professional Certificate",
    field: "Digital Marketing Specialist",
    institution: "HubSpot Academy",
    location: "Online",
    period: "2021",
    icon: Award,
    highlights: [
      "Comprehensive digital marketing training",
      "Focus on inbound marketing strategies",
      "Advanced analytics and reporting",
    ],
  },
  {
    degree: "Professional Certificate",
    field: "Advanced Google Ads",
    institution: "Google Skillshop",
    location: "Online",
    period: "2022",
    icon: Award,
    highlights: [
      "Search, Display, Shopping & Video Ads",
      "Campaign optimization strategies",
      "Advanced bidding techniques",
    ],
  },
];

const continuingEducation = [
  {
    title: "Performance Marketing Masterclass",
    provider: "Digital Marketing Institute",
    year: "2023",
    icon: BookOpen,
  },
  {
    title: "Data Analytics for Marketers",
    provider: "LinkedIn Learning",
    year: "2023",
    icon: BookOpen,
  },
  {
    title: "Growth Hacking Strategies",
    provider: "Udemy",
    year: "2022",
    icon: BookOpen,
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Education & Learning
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in marketing and technology
          </p>
        </motion.div>

        {/* Formal Education */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                  <edu.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">{edu.field}</p>
                  <p className="text-muted-foreground text-sm mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{edu.period}</span>
                    </div>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                {edu.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">→</span>
                    <span className="text-sm text-muted-foreground">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuing Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-2xl p-8"
        >
          <h3 className="text-2xl font-display font-bold mb-6">
            Continuing Professional Development
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {continuingEducation.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/50 rounded-xl p-6"
              >
                <course.icon className="h-6 w-6 text-blue-400 mb-3" />
                <h4 className="font-semibold mb-2">{course.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">
                  {course.provider}
                </p>
                <p className="text-xs text-muted-foreground">{course.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
