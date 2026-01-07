"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Eye,
  Search,
  MousePointerClick,
  BarChart3,
  Target,
  DollarSign,
  Zap,
} from "lucide-react";

const socialMediaMetrics = [
  {
    platform: "Meta (Facebook & Instagram)",
    period: "Last 6 Months",
    metrics: [
      { label: "Total Reach", value: "2.5M", change: "+185%", icon: Eye },
      { label: "Engagement Rate", value: "8.4%", change: "+125%", icon: Heart },
      { label: "Followers Growth", value: "45K", change: "+220%", icon: Users },
      { label: "Ad Spend ROI", value: "6.2x", change: "+85%", icon: DollarSign },
    ],
    campaigns: [
      { name: "Brand Awareness Campaign", impressions: "850K", engagement: "9.2%" },
      { name: "Lead Generation", leads: "2,400", cpl: "AED 48" },
      { name: "Retargeting Campaign", roas: "7.8x", conversions: "1,850" },
    ],
  },
  {
    platform: "Google Ads",
    period: "Last 6 Months",
    metrics: [
      { label: "Total Conversions", value: "4,800", change: "+165%", icon: Target },
      { label: "Click-Through Rate", value: "4.2%", change: "+92%", icon: MousePointerClick },
      { label: "Cost Per Lead", value: "AED 52", change: "-28%", icon: DollarSign },
      { label: "ROAS", value: "5.8x", change: "+145%", icon: TrendingUp },
    ],
    campaigns: [
      { name: "Search Campaigns", clicks: "125K", ctr: "4.8%" },
      { name: "Display Network", impressions: "2.8M", cpc: "AED 1.25" },
      { name: "Shopping Ads", revenue: "AED 1.2M", roas: "6.5x" },
    ],
  },
  {
    platform: "LinkedIn Ads",
    period: "Last 6 Months",
    metrics: [
      { label: "Lead Generation", value: "1,250", change: "+140%", icon: Users },
      { label: "Engagement Rate", value: "6.8%", change: "+95%", icon: MessageCircle },
      { label: "CPL", value: "AED 85", change: "-22%", icon: DollarSign },
      { label: "Conversion Rate", value: "3.5%", change: "+78%", icon: Target },
    ],
    campaigns: [
      { name: "ABM Campaign", accounts: "450", engagement: "12.5%" },
      { name: "Thought Leadership", views: "180K", shares: "2,400" },
      { name: "Lead Gen Forms", submissions: "850", conversion: "4.2%" },
    ],
  },
];

const seoMetrics = [
  {
    category: "Organic Performance",
    metrics: [
      { label: "Organic Traffic", value: "125K", change: "+285%", icon: Users, color: "from-blue-500 to-cyan-500" },
      { label: "Keywords Ranked", value: "2,400", change: "+320%", icon: Search, color: "from-purple-500 to-pink-500" },
      { label: "Page 1 Rankings", value: "850", change: "+245%", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
      { label: "Domain Authority", value: "72", change: "+35 points", icon: Zap, color: "from-orange-500 to-red-500" },
    ],
  },
  {
    category: "Content Performance",
    metrics: [
      { label: "Blog Posts", value: "150+", change: "Published", icon: MessageCircle, color: "from-indigo-500 to-blue-500" },
      { label: "Avg. Time on Page", value: "4:25", change: "+125%", icon: Eye, color: "from-pink-500 to-purple-500" },
      { label: "Pages per Session", value: "3.8", change: "+92%", icon: MousePointerClick, color: "from-teal-500 to-cyan-500" },
      { label: "Bounce Rate", value: "35%", change: "-42%", icon: BarChart3, color: "from-amber-500 to-orange-500" },
    ],
  },
  {
    category: "Conversion & Revenue",
    metrics: [
      { label: "Organic Leads", value: "8,500", change: "+310%", icon: Target, color: "from-green-500 to-teal-500" },
      { label: "Lead Conversion", value: "6.2%", change: "+95%", icon: TrendingUp, color: "from-blue-500 to-purple-500" },
      { label: "Revenue from SEO", value: "AED 2.4M", change: "+265%", icon: DollarSign, color: "from-emerald-500 to-green-500" },
      { label: "Avg. Lead Value", value: "AED 282", change: "+78%", icon: Zap, color: "from-orange-500 to-amber-500" },
    ],
  },
];

export function MetricsDashboardSection() {
  return (
    <section id="metrics" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Campaign Performance Dashboard
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Real metrics from actual campaigns - demonstrating consistent,
            measurable results
          </p>
        </motion.div>

        {/* Social Media Metrics */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold mb-8"
          >
            Social Media & Paid Advertising
          </motion.h3>

          <div className="space-y-12">
            {socialMediaMetrics.map((platform, platformIndex) => (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: platformIndex * 0.1 }}
                className="glassmorphism rounded-2xl p-8"
              >
                <div className="mb-6">
                  <h4 className="text-2xl font-semibold mb-2">
                    {platform.platform}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {platform.period}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {platform.metrics.map((metric, metricIndex) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: platformIndex * 0.1 + metricIndex * 0.05 }}
                      className="bg-background/50 rounded-xl p-4"
                    >
                      <metric.icon className="h-5 w-5 text-blue-400 mb-3" />
                      <div className="text-2xl font-bold mb-1">{metric.value}</div>
                      <div className="text-xs text-muted-foreground mb-2">
                        {metric.label}
                      </div>
                      <div className="text-xs text-green-500 font-medium">
                        {metric.change}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Campaign Breakdown */}
                <div className="border-t border-border pt-6">
                  <h5 className="text-sm font-semibold mb-4 text-muted-foreground">
                    Campaign Breakdown
                  </h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    {platform.campaigns.map((campaign, campIndex) => (
                      <div
                        key={campIndex}
                        className="bg-background/30 rounded-lg p-4"
                      >
                        <div className="font-medium mb-3 text-sm">
                          {campaign.name}
                        </div>
                        <div className="space-y-2 text-xs text-muted-foreground">
                          {Object.entries(campaign)
                            .filter(([key]) => key !== "name")
                            .map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="capitalize">
                                  {key.replace(/([A-Z])/g, " $1").trim()}:
                                </span>
                                <span className="font-semibold text-foreground">
                                  {value}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SEO Metrics */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold mb-8"
          >
            SEO & Organic Growth
          </motion.h3>

          <div className="space-y-8">
            {seoMetrics.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="glassmorphism rounded-2xl p-8"
              >
                <h4 className="text-xl font-semibold mb-6 text-blue-400">
                  {section.category}
                </h4>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {section.metrics.map((metric, metricIndex) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: sectionIndex * 0.1 + metricIndex * 0.05,
                      }}
                      className="bg-background/50 rounded-xl p-4"
                    >
                      <div
                        className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${metric.color} mb-3`}
                      >
                        <metric.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-2xl font-bold mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        {metric.label}
                      </div>
                      <div className="text-xs text-green-500 font-medium">
                        {metric.change}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
