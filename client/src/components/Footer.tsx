/**
 * GNT Construction LLC - Footer Component
 */

import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <a href="tel:+14179525820" className="flex items-center gap-2 hover:text-red-400 transition">
                <Phone size={18} />
                <span>(417) 952-5820</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Joplin, Missouri</span>
              </div>
              <a href="mailto:gntcontractors82@gmail.com" className="flex items-center gap-2 hover:text-red-400 transition">
                <Mail size={18} />
                <span>gntcontractors82@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>Joplin, MO</li>
              <li>Webb City, MO</li>
              <li>Carl Junction, MO</li>
              <li>Carthage, MO</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-red-400 transition">Home</a></li>
              <li><a href="#services" className="hover:text-red-400 transition">Services</a></li>
              <li><a href="#reviews" className="hover:text-red-400 transition">Reviews</a></li>
              <li><a href="#gallery" className="hover:text-red-400 transition">Gallery</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} GNT Construction LLC. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-red-400 transition">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
