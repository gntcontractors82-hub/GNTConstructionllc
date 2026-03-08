/**
 * GNT Construction LLC - Header Component
 * Design: Modern handyman services site
 * - Dark gray navigation bar with white text
 * - Contact info in red boxes at top
 * - Logo on left, nav items on right
 */

import { useState } from "react";
import { Menu, X, Phone, MapPin, Mail } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414461255/bYREEpJsYEFMWsv7TTLyLm/gnt-logo.webp";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "SERVICES", href: "#services" },
    { label: "REVIEWS", href: "#reviews" },
    { label: "GALLERY", href: "#gallery" },
    { label: "CONTACT US", href: "#contact" },
  ];

  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Phone */}
            <a href="tel:+14179525820" className="flex items-center gap-2 hover:text-red-600 transition">
              <div className="bg-red-600 text-white p-2 rounded">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-xs text-gray-600">CALL US</div>
                <div className="font-bold text-gray-800">(417) 952-5820</div>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-2">
              <div className="bg-red-600 text-white p-2 rounded">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs text-gray-600">FIND US</div>
                <div className="font-bold text-gray-800">Joplin, Missouri</div>
              </div>
            </div>

            {/* Email */}
            <a href="mailto:gntcontractors82@gmail.com" className="flex items-center gap-2 hover:text-red-600 transition">
              <div className="bg-red-600 text-white p-2 rounded">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-xs text-gray-600">EMAIL US</div>
                <div className="font-bold text-gray-800 text-sm">gntcontractors82@gmail.com</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img src={LOGO_URL} alt="GNT Construction LLC" className="h-16 object-contain" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold hover:text-red-400 transition duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-red-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-semibold hover:bg-red-600 rounded transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
