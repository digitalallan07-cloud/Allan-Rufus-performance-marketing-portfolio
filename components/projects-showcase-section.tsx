"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  LineChart,
  Zap,
  Award,
} from "lucide-react";

type ProjectCategory = "all" | "brand" | "growth" | "ads" | "seo";

interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  metrics: {
    label: string;
    value: string;
    icon: any;
    color: string;
  }[];
  tags: string[];
  results: string[];
}

const projects: Project[] = [
  {
    id: "brand-strategy-1",
    title: "Brand Positioning & Identity",
    category: "brand",
    description:
      "Comprehensive brand strategy for a fintech startup entering the UAE market, including positioning, messaging, and visual identity guidelines.",
    image: "/images/placeholder-strategy.svg",
    metrics: [
      {
        label: "Brand Awareness",
        value: "+150%",
        icon: Users,
        color: "from-blue-500 to-cyan-500",
      },
      {
        label: "Market Share",
        value: "+12%",
        icon: Target,
        color: "from-purple-500 to-pink-500",
      },
      {
        label: "Engagement",
        value: "+85%",
        icon: TrendingUp,
        color: "from-orange-500 to-red-500",
      },
    ],
    tags: ["Brand Strategy", "Market Research", "Positioning"],
    results: [
      "Established strong brand presence in competitive market",
      "Increased social media following by 250K in 6 months",
      "Generated 15K+ brand mentions across digital channels",
    ],
  },
  {
    id: "growth-strategy-1",
    title: "Multi-Channel Growth Strategy",
    category: "growth",
    description:
      "End-to-end growth strategy combining paid advertising, content marketing, and conversion optimization for SaaS company.",
    image: "/images/placeholder-dashboard.svg",
    metrics: [
      {
        label: "Revenue Growth",
        value: "+240%",
        icon: DollarSign,
        color: "from-green-500 to-emerald-500",
      },
      {
        label: "MRR Increase",
        value: "$125K",
        icon: LineChart,
        color: "from-blue-500 to-indigo-500",
      },
      {
        label: "Customer Acquisition",
        value: "+320%",
        icon: Users,
        color: "from-pink-500 to-purple-500",
      },
    ],
    tags: ["Growth Strategy", "Performance Marketing", "Funnel Optimization"],
    results: [
      "Scaled from $50K to $175K MRR in 8 months",
      "Reduced CAC by 35% while increasing volume",
      "Implemented data-driven attribution model",
    ],
  },
  {
    id: "digital-ads-1",
    title: "Google & Meta Ads Campaign",
    category: "ads",
    description:
      "High-performance multi-platform advertising campaign for e-learning platform targeting MENA region.",
    image: "/images/placeholder-analytics.svg",
    metrics: [
      {
        label: "ROAS",
        value: "8.5x",
        icon: DollarSign,
        color: "from-green-500 to-teal-500",
      },
      {
        label: "CPL",
        value: "AED 42",
        icon: Target,
        color: "from-blue-500 to-cyan-500",
      },
      {
        label: "Conversions",
        value: "+450%",
        icon: TrendingUp,
        color: "from-orange-500 to-amber-500",
      },
    ],
    tags: ["Google Ads", "Meta Ads", "Lead Generation"],
    results: [
      "Generated 5,200+ qualified leads in 3 months",
      "Achieved 8.5x return on ad spend",
      "Reduced cost per acquisition by 42%",
    ],
  },
  {
    id: "digital-ads-2",
    title: "LinkedIn B2B Lead Generation",
    category: "ads",
    description:
      "Targeted LinkedIn Ads campaign for enterprise software company, focusing on decision-makers in banking sector.",
    image: "/images/placeholder-strategy.svg",
    metrics: [
      {
        label: "SQL Generated",
        value: "850+",
        icon: Target,
        color: "from-indigo-500 to-blue-500",
      },
      {
        label: "Conversion Rate",
        value: "12.5%",
        icon: BarChart3,
        color: "from-purple-500 to-pink-500",
      },
      {
        label: "Deal Value",
        value: "AED 2.4M",
        icon: DollarSign,
        color: "from-green-500 to-emerald-500",
      },
    ],
    tags: ["LinkedIn Ads", "B2B Marketing", "ABM"],
    results: [
      "Generated 850+ sales-qualified leads",
      "Closed 65 enterprise deals worth AED 2.4M",
      "Achieved 12.5% lead-to-opportunity rate",
    ],
  },
  {
    id: "seo-strategy-1",
    title: "SEO & Content Marketing",
    category: "seo",
    description:
      "Comprehensive SEO strategy and content marketing program for real estate portal, including technical SEO and content creation.",
    image: "/images/placeholder-analytics.svg",
    metrics: [
      {
        label: "Organic Traffic",
        value: "+385%",
        icon: TrendingUp,
        color: "from-blue-500 to-cyan-500",
      },
      {
        label: "Keywords Ranked",
        value: "1,200+",
        icon: Award,
        color: "from-purple-500 to-pink-500",
      },
      {
        label: "Domain Authority",
        value: "45 → 68",
        icon: Zap,
        color: "from-orange-500 to-red-500",
      },
    ],
    tags: ["SEO", "Content Marketing", "Technical SEO"],
    results: [
      "Increased organic traffic from 12K to 58K monthly visitors",
      "Ranked 1,200+ keywords in top 10 positions",
      "Generated 15,000+ organic leads annually",
    ],
  },
  {
    id: "growth-strategy-2",
    title: "E-commerce Revenue Optimization",
    category: "growth",
    description:
      "Complete e-commerce optimization including paid ads, email marketing, and conversion rate optimization.",
    image: "/images/placeholder-dashboard.svg",
    metrics: [
      {
        label: "Revenue",
        value: "+180%",
        icon: DollarSign,
        color: "from-green-500 to-emerald-500",
      },
      {
        label: "AOV",
        value: "+45%",
        icon: BarChart3,
        color: "from-blue-500 to-purple-500",
      },
      {
        label: "ROAS",
        value: "6.8x",
        icon: TrendingUp,
        color: "from-pink-500 to-orange-500",
      },
    ],
    tags: ["E-commerce", "CRO", "Email Marketing"],
    results: [
      "Scaled revenue from AED 450K to AED 1.2M monthly",
      "Increased average order value by 45%",
      "Improved checkout conversion rate by 28%",
    ],
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "brand", label: "Brand Strategy" },
  { id: "growth", label: "Growth Strategy" },
  { id: "ads", label: "Digital Ads" },
  { id: "seo", label: "SEO & Content" },
];

export function ProjectsShowcaseSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Projects & Strategies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Portfolio of strategic marketing initiatives and campaigns across
            different industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                  : "glassmorphism hover:bg-accent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glassmorphism rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Header */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-background/50 rounded-lg p-3 text-center"
                    >
                      <div
                        className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${metric.color} mb-2`}
                      >
                        <metric.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-lg font-bold mb-1">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Results */}
                <div className="space-y-2">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span className="text-sm text-muted-foreground">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
