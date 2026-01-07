"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Image as ImageIcon,
  Globe,
  Search,
  Mail,
  BarChart3,
  ExternalLink
} from "lucide-react";

type PortfolioTab = "creatives" | "landing-pages" | "seo" | "email" | "google-ads";

const portfolioData = {
  creatives: [
    {
      title: "Real Estate Lead Gen Campaign",
      description: "High-intent ad creative targeting property investors",
      concept: "Social proof + urgency",
      copyAngle: "Limited inventory in prime locations",
      audience: "High-net-worth individuals aged 35-55",
      platform: "Meta Ads",
      performance: "2.8% CTR, AED 45 CPL",
    },
    {
      title: "B2B SaaS Product Launch",
      description: "LinkedIn carousel ads for enterprise software",
      concept: "Problem-solution framework",
      copyAngle: "ROI-focused messaging with case study data",
      audience: "C-level executives in tech companies",
      platform: "LinkedIn Ads",
      performance: "3.2% CTR, 15% conversion rate",
    },
    {
      title: "E-commerce Seasonal Campaign",
      description: "Dynamic product ads for fashion brand",
      concept: "Lifestyle + product benefits",
      copyAngle: "Limited-time offer with social proof",
      audience: "Women 25-45 interested in fashion",
      platform: "Meta + Google Display",
      performance: "4.1% CTR, 6.5x ROAS",
    },
  ],
  "landing-pages": [
    {
      title: "B2B Lead Generation Landing Page",
      description: "High-converting lead gen page for enterprise solution",
      croLogic: [
        "Above-the-fold CTA with clear value proposition",
        "Trust signals: client logos, testimonials, security badges",
        "Multi-step form to reduce friction (email first, details second)",
        "Exit-intent popup with alternative offer",
        "Mobile-optimized with sticky CTA",
      ],
      results: "34% conversion rate (industry avg: 12%)",
      tools: "Unbounce, GTM, Hotjar for heatmaps",
    },
    {
      title: "E-commerce Product Landing Page",
      description: "Optimized product page with enhanced conversion elements",
      croLogic: [
        "High-quality product images with zoom functionality",
        "Prominent reviews and ratings (4.8★ average)",
        "Urgency: stock counter + limited-time discount timer",
        "Clear shipping information and guarantee badges",
        "Related products for cross-sell",
      ],
      results: "5.8% conversion rate, 28% increase from baseline",
      tools: "Shopify, Google Optimize, Lucky Orange",
    },
    {
      title: "Webinar Registration Funnel",
      description: "Multi-step funnel for B2B webinar signups",
      croLogic: [
        "Benefit-driven headline with social proof",
        "Simplified registration form (name + email only)",
        "Thank you page with calendar integration",
        "Automated email sequence for nurturing",
        "Retargeting campaign for non-attendees",
      ],
      results: "52% registration rate, 38% attendance rate",
      tools: "Instapage, Zoom, ActiveCampaign",
    },
  ],
  seo: [
    {
      title: "B2B SaaS SEO Strategy",
      description: "Comprehensive SEO overhaul for enterprise software company",
      strategy: [
        "Keyword research targeting bottom-of-funnel terms",
        "Technical SEO audit and fixes (site speed, mobile, schema)",
        "Content strategy: 40+ high-intent blog posts",
        "Backlink acquisition through digital PR",
        "Local SEO optimization for regional offices",
      ],
      results: "145% increase in organic traffic, 60+ keywords in top 10",
      teamManagement: "Led team of 3 content writers and 1 technical SEO specialist",
    },
    {
      title: "E-commerce SEO Campaign",
      description: "Product and category page optimization for online retailer",
      strategy: [
        "Product description optimization with long-tail keywords",
        "Category page restructuring for better UX and SEO",
        "Internal linking strategy to boost product page authority",
        "User-generated content strategy (reviews) for fresh content",
        "Image optimization and alt text for visual search",
      ],
      results: "95% increase in organic revenue, 1,200+ ranking keywords",
      teamManagement: "Coordinated with development and content teams",
    },
  ],
  email: [
    {
      title: "Lead Nurture Email Sequence",
      description: "7-email automation for B2B lead nurturing",
      strategy: "Educational content → case study → product demo → sales call",
      metrics: {
        openRate: "42%",
        clickRate: "12%",
        conversionRate: "18%",
      },
      keyElements: [
        "Personalized subject lines based on lead source",
        "Progressive profiling through content offers",
        "A/B tested CTAs (button vs. text link)",
        "Optimal send times based on engagement data",
      ],
    },
    {
      title: "E-commerce Cart Abandonment Flow",
      description: "Automated sequence to recover abandoned carts",
      strategy: "Reminder → discount → urgency → last chance",
      metrics: {
        recoveryRate: "32%",
        revenue: "AED 125,000 recovered",
        avgOrderValue: "AED 340",
      },
      keyElements: [
        "Product images and details in email",
        "Dynamic discount codes based on cart value",
        "Social proof and urgency elements",
        "Mobile-optimized design",
      ],
    },
    {
      title: "Re-engagement Campaign",
      description: "Win-back campaign for inactive subscribers",
      strategy: "Preference update → special offer → final notice",
      metrics: {
        reactivationRate: "24%",
        unsubscribeRate: "8%",
        newPurchases: "15%",
      },
      keyElements: [
        "Preference center for email frequency",
        "Exclusive comeback offers",
        "Clear unsubscribe option (maintain list health)",
        "Segment-specific messaging",
      ],
    },
  ],
  "google-ads": [
    {
      title: "Search Campaign Optimization",
      description: "Performance improvement for high-intent search campaigns",
      metrics: [
        { label: "Avg CPC", value: "AED 4.20", change: "-22% from baseline" },
        { label: "CTR", value: "6.8%", change: "+45% improvement" },
        { label: "Conversion Rate", value: "12.4%", change: "+38% increase" },
        { label: "Quality Score", value: "8.2/10", change: "Avg across campaigns" },
      ],
      optimizations: [
        "Implemented SKAG (Single Keyword Ad Groups) for better relevance",
        "Created audience-specific ad copy with dynamic keyword insertion",
        "Used ad extensions: sitelinks, callouts, structured snippets",
        "Negative keyword refinement to reduce wasted spend",
        "Bid adjustments based on device, location, and time of day",
      ],
      auctionInsights: "Maintained top 3 position with 35% impression share at 22% lower CPC than competitors",
    },
    {
      title: "Display & Video Campaign",
      description: "Brand awareness and retargeting campaign",
      metrics: [
        { label: "Viewable CPM", value: "AED 12", change: "28% below market avg" },
        { label: "View Rate", value: "45%", change: "Video completion rate" },
        { label: "Retargeting CVR", value: "8.2%", change: "2.5x cold traffic" },
        { label: "Reach", value: "850K", change: "Unique users reached" },
      ],
      optimizations: [
        "Custom intent audiences based on search behavior",
        "Frequency capping to avoid ad fatigue",
        "Sequential messaging for customer journey",
        "Placement exclusions for brand safety",
        "Responsive display ads with dynamic content",
      ],
      auctionInsights: "Secured 42% impression share in competitive categories",
    },
  ],
};

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<PortfolioTab>("creatives");

  const tabs: { id: PortfolioTab; label: string; icon: any }[] = [
    { id: "creatives", label: "Ad Creatives", icon: ImageIcon },
    { id: "landing-pages", label: "Landing Pages", icon: Globe },
    { id: "seo", label: "SEO Results", icon: Search },
    { id: "email", label: "Email Marketing", icon: Mail },
    { id: "google-ads", label: "Google Ads", icon: BarChart3 },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of campaigns, pages, and strategies that drove real
            business results
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "glassmorphism hover:bg-accent"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[600px]">
          {/* Creatives */}
          {activeTab === "creatives" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.creatives.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glassmorphism rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-muted-foreground">
                      Screenshot Placeholder
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-sm text-blue-400 font-medium">
                      {item.platform}
                    </div>
                    <h3 className="text-xl font-display font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="pt-3 border-t border-border space-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Concept:</span>{" "}
                        {item.concept}
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Copy Angle:
                        </span>{" "}
                        {item.copyAngle}
                      </div>
                      <div>
                        <span className="text-muted-foreground">Audience:</span>{" "}
                        {item.audience}
                      </div>
                      <div className="text-green-400 font-medium">
                        {item.performance}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Landing Pages */}
          {activeTab === "landing-pages" && (
            <div className="space-y-6">
              {portfolioData["landing-pages"].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-muted-foreground">
                          Landing Page Screenshot
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {item.tools}
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-display font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">CRO Logic:</h4>
                        <ul className="space-y-2">
                          {item.croLogic.map((logic, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-2 text-sm text-muted-foreground"
                            >
                              <span className="text-blue-500 mt-1">→</span>
                              <span>{logic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="text-sm text-muted-foreground mb-1">
                          Results
                        </div>
                        <div className="text-lg font-semibold text-green-400">
                          {item.results}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* SEO */}
          {activeTab === "seo" && (
            <div className="space-y-6">
              {portfolioData.seo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-display font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Strategy:</h4>
                        <ul className="space-y-2">
                          {item.strategy.map((point, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-2 text-sm text-muted-foreground"
                            >
                              <span className="text-green-500 mt-1">→</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div className="glassmorphism rounded-xl p-6">
                          <div className="text-sm text-muted-foreground mb-2">
                            Results
                          </div>
                          <div className="text-xl font-semibold text-green-400">
                            {item.results}
                          </div>
                        </div>
                        <div className="glassmorphism rounded-xl p-6">
                          <div className="text-sm text-muted-foreground mb-2">
                            Team Management
                          </div>
                          <div className="text-sm">{item.teamManagement}</div>
                        </div>
                      </div>
                    </div>

                    <div className="h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-muted-foreground">
                        SEO Results Screenshot (Traffic Graph, Rankings, etc.)
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Email Marketing */}
          {activeTab === "email" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.email.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glassmorphism rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="h-48 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">
                        Email Template Screenshot
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      <div className="text-sm text-blue-400 mb-4">
                        {item.strategy}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(item.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-background/50 rounded-lg p-3 text-center"
                        >
                          <div className="text-xs text-muted-foreground mb-1">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                          <div className="text-lg font-bold">{value}</div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2">
                        Key Elements:
                      </h4>
                      <ul className="space-y-1">
                        {item.keyElements.map((element, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-2 text-xs text-muted-foreground"
                          >
                            <span className="text-orange-500 mt-1">→</span>
                            <span>{element}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Google Ads */}
          {activeTab === "google-ads" && (
            <div className="space-y-6">
              {portfolioData["google-ads"].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-display font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {item.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="glassmorphism rounded-xl p-4 text-center"
                        >
                          <div className="text-xs text-muted-foreground mb-1">
                            {metric.label}
                          </div>
                          <div className="text-2xl font-bold mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-green-400">
                            {metric.change}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">
                        Optimization Strategy:
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {item.optimizations.map((opt, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-2 text-sm text-muted-foreground"
                          >
                            <span className="text-blue-500 mt-1">→</span>
                            <span>{opt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="glassmorphism rounded-xl p-6">
                      <h4 className="font-semibold mb-2">Auction Insights:</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.auctionInsights}
                      </p>
                    </div>

                    <div className="h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-muted-foreground">
                        Google Ads Performance Screenshots
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
