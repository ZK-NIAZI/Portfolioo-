"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-xl" : ""
        }`}
        style={{
          backgroundColor: isScrolled ? "var(--color-bg-primary)" : "transparent",
          borderBottom: isScrolled ? "var(--border-width) solid var(--border-color)" : "none"
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className="text-2xl font-black cursor-pointer relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {personalInfo.name.split(" ")[0]}
              </span>
              <span className="text-white">.dev</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="relative px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer"
                  style={{
                    color: activeSection === link.href.substring(1)
                      ? "var(--color-text-primary)"
                      : "var(--color-text-secondary)"
                  }}
                >
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundColor: "var(--color-bg-secondary)",
                        border: "var(--border-width) solid var(--border-color)"
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}

              {/* Theme Toggle */}
              <div className="ml-2">
                <ThemeToggle />
              </div>

              {/* Resume Button */}
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-6 py-2 rounded-full font-bold transition-all"
                style={{
                  backgroundColor: "var(--color-text-primary)",
                  color: "var(--color-bg-primary)"
                }}
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl transition-colors"
                style={{
                  backgroundColor: "var(--color-bg-secondary)",
                  border: "var(--border-width) solid var(--border-color)"
                }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" style={{ color: "var(--color-text-primary)" }} />
                ) : (
                  <Menu className="w-6 h-6" style={{ color: "var(--color-text-primary)" }} />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-50 lg:hidden overflow-y-auto"
              style={{
                backgroundColor: "var(--color-bg-primary)",
                borderLeft: "var(--border-width) solid var(--border-color)"
              }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <div className="text-2xl font-black">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Menu
                    </span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>
                </div>

                {/* Mobile Nav Links */}
                <div className="flex flex-col gap-2 mb-8">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="px-6 py-4 rounded-2xl text-lg font-bold transition-all cursor-pointer"
                      style={{
                        backgroundColor: activeSection === link.href.substring(1)
                          ? "var(--color-bg-secondary)"
                          : "transparent",
                        color: activeSection === link.href.substring(1)
                          ? "var(--color-text-primary)"
                          : "var(--color-text-secondary)",
                        border: activeSection === link.href.substring(1)
                          ? "var(--border-width) solid var(--border-color)"
                          : "var(--border-width) solid transparent"
                      }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                {/* Resume Button Mobile */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 rounded-2xl text-lg font-bold text-center transition-all"
                  style={{
                    backgroundColor: "var(--color-text-primary)",
                    color: "var(--color-bg-primary)"
                  }}
                >
                  Download Resume
                </motion.a>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-8 border-t border-white/10"
                >
                  <div className="text-sm text-gray-500 mb-4">Connect</div>
                  <div className="flex gap-3">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl text-center text-sm font-semibold text-gray-300 hover:bg-white/10 transition-all"
                    >
                      GitHub
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-blue-600/10 border border-blue-500/30 rounded-xl text-center text-sm font-semibold text-blue-400 hover:bg-blue-600/20 transition-all"
                    >
                      LinkedIn
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
