/**
 * GNT Construction LLC - Footer Component
 * Design: Professional footer with links to review platforms and SEO optimization
 * Includes: Google, Yelp, Nextdoor, Angie's List review links
 */

import { Phone, MapPin, Mail, Star } from "lucide-react";

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

          {/* Review Platforms */}
          <div>
            <h3 className="text-lg font-bold mb-4">Review Platforms</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.google.com/maps/search/GNT+Construction+Joplin+MO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition flex items-center gap-2"
                >
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  Google Reviews
                </a>
              </li>
              <li>
                <a 
                  href="https://www.yelp.com/search?find_desc=GNT+Construction&find_loc=Joplin%2C+MO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition flex items-center gap-2"
                >
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  Yelp Reviews
                </a>
              </li>
              <li>
                <a 
                  href="https://nextdoor.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition flex items-center gap-2"
                >
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  Nextdoor
                </a>
              </li>
              <li>
                <a 
                  href="https://www.angieslist.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition flex items-center gap-2"
                >
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  Angie's List
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="mb-6">
            <p className="text-xs text-gray-400 mb-2">Service Areas:</p>
            <p className="text-xs text-gray-500">
              We proudly serve Joplin, Webb City, Carl Junction, Carthage, and surrounding areas in Missouri with professional handyman, remodeling, and construction services.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} GNT Construction LLC. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-red-400 transition">Terms & Conditions</a>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-xs text-gray-500">Licensed • Insured • Professional • Trusted by 100+ Customers</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
