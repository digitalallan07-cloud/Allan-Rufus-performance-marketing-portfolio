"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown, TrendingUp, Target, DollarSign, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "20-35%",
    label: "Lead Growth",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    value: "25-30%",
    label: "CPL Reduction",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: DollarSign,
    value: "4x-6x",
    label: "ROI",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    value: "AED 50-80",
    label: "Avg CPL",
    color: "from-green-500 to-emerald-500",
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

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={item} className="space-y-4">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <div className="px-4 py-2 rounded-full glassmorphism inline-flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight">
              <span className="block text-foreground">Allan Rufus</span>
              <span className="block mt-2 gradient-text">
                Performance Marketing Specialist
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-muted-foreground font-light">
              4+ years driving measurable growth through data-driven campaigns
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glassmorphism rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-4`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold font-display mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv/allan-rufus-cv.pdf"
              download
              className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <Download className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Download CV</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#case-studies")}
              className="inline-flex items-center space-x-2 px-8 py-4 glassmorphism rounded-xl font-medium text-lg hover:bg-accent transition-colors"
            >
              <span>View Case Studies</span>
              <ArrowDown className="h-5 w-5" />
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={item}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
