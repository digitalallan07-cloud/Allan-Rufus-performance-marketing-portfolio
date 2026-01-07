"use client";

import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  Database,
  BarChart3,
  Megaphone,
  Workflow,
  Mail,
  Search,
  Zap,
  Users,
  Filter,
  LineChart,
} from "lucide-react";

const skillCategories = [
  {
    category: "Performance Marketing",
    icon: Megaphone,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Google Ads", icon: Target },
      { name: "Meta Ads", icon: Users },
      { name: "LinkedIn Ads", icon: TrendingUp },
      { name: "Campaign Strategy", icon: Workflow },
    ],
  },
  {
    category: "Funnels & CRO",
    icon: Filter,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Landing Page Optimization", icon: Zap },
      { name: "A/B Testing", icon: BarChart3 },
      { name: "Conversion Rate Optimization", icon: TrendingUp },
      { name: "User Journey Mapping", icon: Workflow },
    ],
  },
  {
    category: "CRM & Automation",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Odoo CRM", icon: Database },
      { name: "Marketing Automation", icon: Zap },
      { name: "Lead Scoring", icon: Target },
      { name: "Sales Enablement", icon: Users },
    ],
  },
  {
    category: "Analytics & Tracking",
    icon: LineChart,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Google Analytics 4", icon: BarChart3 },
      { name: "GTM", icon: Workflow },
      { name: "Data Analysis", icon: LineChart },
      { name: "Performance Reporting", icon: TrendingUp },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Core Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set built through hands-on experience in
            performance marketing and growth optimization
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-r ${category.color}`}
                >
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-display font-semibold">
                  {category.category}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
                  >
                    <skill.icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="glassmorphism rounded-xl p-6 inline-block">
            <h4 className="text-lg font-semibold mb-3">Also Proficient In</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "SEO Strategy",
                "Email Marketing",
                "Content Strategy",
                "Auction Insights",
                "Budget Optimization",
                "Team Leadership",
                "Stakeholder Management",
                "Excel Advanced",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-background/50 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
