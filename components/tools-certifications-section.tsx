"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Search,
  Mail,
  Target,
  Users,
  Settings,
  Award,
  ShieldCheck,
  Star
} from "lucide-react";

const tools = [
  {
    category: "Advertising Platforms",
    items: [
      { name: "Google Ads", icon: Target, proficiency: 95 },
      { name: "Meta Ads Manager", icon: Users, proficiency: 98 },
      { name: "LinkedIn Campaign Manager", icon: Users, proficiency: 90 },
      { name: "TikTok Ads", icon: TrendingUp, proficiency: 85 },
    ],
  },
  {
    category: "Analytics & Tracking",
    items: [
      { name: "Google Analytics 4", icon: BarChart3, proficiency: 95 },
      { name: "Google Tag Manager", icon: Settings, proficiency: 90 },
      { name: "Looker Studio", icon: BarChart3, proficiency: 88 },
      { name: "Hotjar", icon: Search, proficiency: 85 },
    ],
  },
  {
    category: "CRM & Automation",
    items: [
      { name: "Odoo CRM", icon: Users, proficiency: 92 },
      { name: "HubSpot", icon: Mail, proficiency: 88 },
      { name: "Mailchimp", icon: Mail, proficiency: 85 },
      { name: "Zapier", icon: Settings, proficiency: 80 },
    ],
  },
  {
    category: "SEO & Content",
    items: [
      { name: "SEMrush", icon: Search, proficiency: 90 },
      { name: "Ahrefs", icon: Search, proficiency: 88 },
      { name: "Google Search Console", icon: Search, proficiency: 95 },
      { name: "Screaming Frog", icon: Search, proficiency: 82 },
    ],
  },
];

const certifications = [
  {
    title: "Google Ads Certification",
    issuer: "Google",
    year: "2023",
    icon: ShieldCheck,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Meta Certified Media Professional",
    issuer: "Meta Blueprint",
    year: "2023",
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Google Analytics Individual Qualification",
    issuer: "Google",
    year: "2023",
    icon: Star,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Digital Marketing Specialist",
    issuer: "HubSpot Academy",
    year: "2022",
    icon: Award,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "LinkedIn Ads Certified",
    issuer: "LinkedIn",
    year: "2023",
    icon: ShieldCheck,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Advanced Performance Marketing",
    issuer: "Digital Marketing Institute",
    year: "2022",
    icon: Star,
    color: "from-pink-500 to-purple-500",
  },
];

export function ToolsCertificationsSection() {
  return (
    <section id="tools-certifications" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Tools & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert-level proficiency in industry-leading platforms and tools
          </p>
        </motion.div>

        {/* Tools Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold mb-8"
          >
            Professional Tools
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {tools.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="glassmorphism rounded-2xl p-8"
              >
                <h4 className="text-xl font-semibold mb-6 text-blue-400">
                  {category.category}
                </h4>
                <div className="space-y-6">
                  {category.items.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + toolIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <tool.icon className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium">{tool.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {tool.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tool.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + toolIndex * 0.05 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold mb-8"
          >
            Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${cert.color} mb-4`}
                >
                  <cert.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>{cert.issuer}</p>
                  <p className="text-xs">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
