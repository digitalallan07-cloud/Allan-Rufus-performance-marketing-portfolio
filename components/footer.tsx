"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 XX XXX XXXX",
      href: "tel:+971XXXXXXXXX",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dubai, UAE",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/allanrufus",
      href: "https://www.linkedin.com/in/allanrufus",
    },
  ];

  return (
    <footer className="relative py-24 px-4 sm:px-6 lg:px-8 bg-accent/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Looking for a performance marketing specialist who delivers
            measurable results? Let's discuss how I can help grow your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:your.email@example.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg"
            >
              <Mail className="h-5 w-5" />
              <span>Get in Touch</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv/allan-rufus-cv.pdf"
              download
              className="inline-flex items-center space-x-2 px-8 py-4 glassmorphism rounded-xl font-medium text-lg hover:bg-accent transition-colors"
            >
              <span>Download CV</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 mb-4">
                <item.icon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-sm text-muted-foreground mb-1">
                {item.label}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-blue-400 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <div className="text-foreground">{item.value}</div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <div className="text-2xl font-display font-bold gradient-text mb-2">
                Allan Rufus
              </div>
              <p className="text-sm text-muted-foreground">
                Performance Marketing Specialist
              </p>
            </div>

            <div className="text-sm text-muted-foreground text-center">
              <p>© {new Date().getFullYear()} Allan Rufus. All rights reserved.</p>
              <p className="mt-1">
                Built with Next.js, Tailwind CSS & Framer Motion
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
