"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, Target, DollarSign, Users, ChevronRight } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  thumbnail: string;
  duration: string;
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
  context: string;
  objective: string;
  role: string;
  strategy: string[];
  execution: string[];
  results: {
    metric: string;
    value: string;
    impact: string;
  }[];
  learnings: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "lead-gen-optimization",
    title: "B2B Lead Generation Optimization",
    client: "Technology Company",
    category: "Google Ads + LinkedIn",
    thumbnail: "/screenshots/case-study-1.png",
    duration: "6 months",
    metrics: [
      { label: "CPL Reduction", value: "30%", change: "↓" },
      { label: "Lead Volume", value: "+35%", change: "↑" },
      { label: "ROI", value: "5.2x", change: "↑" },
      { label: "Avg CPL", value: "AED 65", change: "↓" },
    ],
    context:
      "A B2B technology company was struggling with high cost per lead and low lead volume from their paid campaigns. Previous campaigns had CPLs of AED 95+ with inconsistent lead quality.",
    objective:
      "Reduce cost per lead by at least 25% while increasing lead volume by 30% and improving lead quality for the sales team.",
    role: "Led the entire campaign strategy, execution, and optimization. Worked directly with the sales team to understand ideal customer profiles and with the creative team to develop ad assets.",
    strategy: [
      "Conducted thorough audience research and created detailed ICPs based on sales data",
      "Developed multi-touch attribution model to understand customer journey",
      "Created platform-specific strategies for Google Ads and LinkedIn",
      "Implemented advanced audience segmentation using CRM data",
      "Designed A/B testing framework for ad creative, copy, and landing pages",
    ],
    execution: [
      "Google Ads: Launched search campaigns targeting high-intent keywords with SKAG structure",
      "LinkedIn: Created ABM campaigns targeting specific companies and decision-makers",
      "Built custom landing pages for each campaign with optimized conversion elements",
      "Implemented conversion tracking through GTM and integrated with Odoo CRM",
      "Set up automated lead scoring based on demographic and behavioral data",
      "Weekly optimization based on auction insights and performance data",
    ],
    results: [
      {
        metric: "Cost Per Lead",
        value: "30% reduction (AED 95 → AED 65)",
        impact: "Saved AED 45,000+ in marketing spend over 6 months",
      },
      {
        metric: "Lead Volume",
        value: "35% increase (280 → 378 leads/month)",
        impact: "98 additional qualified leads per month",
      },
      {
        metric: "Lead Quality",
        value: "Lead-to-Opportunity: 22% → 34%",
        impact: "Sales team closed 45% more deals from marketing leads",
      },
      {
        metric: "Return on Ad Spend",
        value: "5.2x ROAS",
        impact: "Every AED 1 spent generated AED 5.20 in revenue",
      },
    ],
    learnings: [
      "Platform-specific strategies outperform one-size-fits-all approaches",
      "Tight sales-marketing alignment is crucial for lead quality improvement",
      "Regular auction insights analysis reveals competitive opportunities",
      "Landing page optimization has 2-3x more impact than ad creative alone",
      "CRM integration enables smarter bidding and better attribution",
    ],
  },
  {
    id: "ecommerce-roas",
    title: "E-commerce ROAS Improvement",
    client: "Fashion Retailer",
    category: "Meta Ads + Google Shopping",
    thumbnail: "/screenshots/case-study-2.png",
    duration: "4 months",
    metrics: [
      { label: "ROAS", value: "6.1x", change: "↑" },
      { label: "CPA", value: "-28%", change: "↓" },
      { label: "Revenue", value: "+42%", change: "↑" },
      { label: "Ad Spend Efficiency", value: "+35%", change: "↑" },
    ],
    context:
      "Fashion e-commerce brand with declining ROAS and increasing customer acquisition costs. Previous ROAS was 3.8x with stagnant revenue growth.",
    objective:
      "Achieve minimum 5x ROAS while scaling revenue by 40% within 4 months.",
    role: "Full ownership of paid media strategy across Meta and Google. Coordinated with creative team for ad assets and development team for tracking implementation.",
    strategy: [
      "Implemented dynamic product ads with advanced catalog segmentation",
      "Created lookalike audiences from high-LTV customers",
      "Developed seasonal campaign calendars aligned with inventory",
      "Built comprehensive conversion funnel with micro-conversions",
      "Implemented value-based bidding strategies",
    ],
    execution: [
      "Meta: Launched DPA campaigns with 15+ audience segments",
      "Google Shopping: Optimized product feed and implemented smart bidding",
      "Created retargeting sequences based on browsing behavior and cart value",
      "A/B tested 50+ ad creative variations focusing on social proof",
      "Implemented server-side tracking for accurate attribution",
      "Daily budget reallocation based on performance data",
    ],
    results: [
      {
        metric: "Return on Ad Spend",
        value: "6.1x (from 3.8x)",
        impact: "60% improvement in advertising efficiency",
      },
      {
        metric: "Revenue Growth",
        value: "42% increase",
        impact: "Additional AED 840,000 in revenue",
      },
      {
        metric: "Cost Per Acquisition",
        value: "28% reduction",
        impact: "Acquired 180 more customers with same budget",
      },
      {
        metric: "Cart Abandonment Recovery",
        value: "32% recovery rate",
        impact: "Recovered AED 125,000 in abandoned cart revenue",
      },
    ],
    learnings: [
      "Product catalog quality directly impacts campaign performance",
      "High-LTV customer lookalikes significantly outperform broad audiences",
      "Creative testing should focus on social proof and urgency for fashion",
      "Server-side tracking is essential for accurate performance measurement",
      "Value-based bidding requires 4-6 weeks of data for optimization",
    ],
  },
  // Add more case studies here
];

export function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Case Studies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Real campaigns, real results. Each case study demonstrates
            measurable business impact backed by data.
          </p>
        </motion.div>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedCase(study)}
              className="glassmorphism rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              {/* Thumbnail Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  Screenshot Placeholder
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-blue-400 font-medium mb-2">
                    {study.category}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground">{study.client}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-background/50 rounded-lg p-3"
                    >
                      <div className="text-xs text-muted-foreground mb-1">
                        {metric.label}
                      </div>
                      <div className="text-lg font-bold flex items-center space-x-1">
                        <span>{metric.value}</span>
                        <span className="text-green-500 text-sm">
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    {study.duration}
                  </span>
                  <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">View Details</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-start justify-between">
                <div>
                  <div className="text-sm text-blue-400 font-medium mb-2">
                    {selectedCase.category}
                  </div>
                  <h3 className="text-3xl font-display font-bold">
                    {selectedCase.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedCase.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="glassmorphism rounded-xl p-4 text-center"
                    >
                      <div className="text-sm text-muted-foreground mb-2">
                        {metric.label}
                      </div>
                      <div className="text-2xl font-bold">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Context */}
                <div>
                  <h4 className="text-xl font-display font-semibold mb-3">
                    Business Context
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCase.context}
                  </p>
                </div>

                {/* Objective */}
                <div>
                  <h4 className="text-xl font-display font-semibold mb-3">
                    Objective
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCase.objective}
                  </p>
                </div>

                {/* Role */}
                <div>
                  <h4 className="text-xl font-display font-semibold mb-3">
                    My Role
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCase.role}
                  </p>
                </div>

                {/* Strategy */}
                <div>
                  <h4 className="text-xl font-display font-semibold mb-3">
                    Strategy
                  </h4>
                  <ul className="space-y-2">
                    {selectedCase.strategy.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-muted-foreground"
                      >
                        <span className="text-blue-500 mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Execution */}
                <div>
                  <h4 className="text-xl font-display font-semibold mb-3">
                    Execution
                  </h4>
                  <ul className="space-y-2">
                    {selectedCase.execution.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-muted-foreground"
                      >
                        <span className="text-purple-500 mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-xl font-display font-semibold mb-4">
                    Results & Impact
                  </h4>
                  <div className="space-y-4">
                    {selectedCase.results.map((result, index) => (
                      <div
                        key={index}
                        className="glassmorphism rounded-xl p-4"
                      >
                        <div className="font-semibold mb-1">
                          {result.metric}
                        </div>
                        <div className="text-2xl font-bold text-green-400 mb-2">
                          {result.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {result.impact}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learnings */}
                <div>
                  <h4 className="text-xl font-display font-semibold mb-3">
                    Key Learnings
                  </h4>
                  <ul className="space-y-2">
                    {selectedCase.learnings.map((learning, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-muted-foreground"
                      >
                        <span className="text-orange-500 mt-1">→</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshot Placeholder */}
                <div className="glassmorphism rounded-xl p-8 text-center">
                  <p className="text-muted-foreground">
                    📊 Campaign screenshots and performance data visualizations
                    will be displayed here
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
