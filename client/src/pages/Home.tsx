/**
 * GNT Construction LLC - Home Page
 * Design: Modern handyman and remodeling services site
 * Sections: Hero, Why Choose Us, Services, Remodeling, Contact Form
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wrench, Droplet, DoorOpen, Hammer, Zap, Fence } from "lucide-react";
import { useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414461255/bYREEpJsYEFMWsv7TTLyLm/gnt-hero-bg-ntTFdCS3zcbEqbdwRnUFPL.webp";
const REMODELING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663414461255/bYREEpJsYEFMWsv7TTLyLm/gnt-remodeling-kitchen-jxTgJYUG2CDQR7EfNVsiUH.webp";

const services = [
  {
    icon: Droplet,
    title: "Plumbing Repairs",
    description: "Professional plumbing services including fixture installation, leak repairs, and pipe work.",
  },
  {
    icon: Wrench,
    title: "Drywall Repair",
    description: "Expert drywall installation, patching, and finishing for a flawless interior.",
  },
  {
    icon: DoorOpen,
    title: "Door Repair",
    description: "Door installation, repair, and adjustment for smooth operation and security.",
  },
  {
    icon: Hammer,
    title: "Window Repair",
    description: "Window repair, replacement, and weatherproofing services.",
  },
  {
    icon: Zap,
    title: "Electrical Repair",
    description: "Safe and reliable electrical repair and installation services.",
  },
  {
    icon: Fence,
    title: "Deck & Fence Repair",
    description: "Professional deck and fence repair, restoration, and installation.",
  },
];

const testimonials = [
  {
    name: "John Smith",
    text: "GNT Construction did an amazing job on our kitchen remodel. Professional, on time, and within budget!",
  },
  {
    name: "Sarah Johnson",
    text: "Excellent handyman service. They fixed our plumbing issue quickly and professionally.",
  },
  {
    name: "Mike Davis",
    text: "Highly recommend GNT Construction for any home repair or remodeling project.",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", budget: "", message: "" });
    alert("Thank you for your message! We will contact you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted Handyman & Remodeling Services in Joplin, Webb City, Carl Junction & Carthage, MO
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Professional repairs, remodeling, and new construction solutions you can rely on.
            </p>
            <a href="#contact" className="gnt-btn-primary inline-block">
              CONTACT US
            </a>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="gnt-section-title mb-6">Why Homeowners & Businesses Choose GNT Construction</h2>
                <p className="text-gray-700 mb-4">
                  When you call GNT Construction, you get more than a quick fix — you get a partner dedicated to doing the job right. Our focus is simple: top-tier craftsmanship, transparent communication, and service you can rely on.
                </p>
                <p className="text-gray-700">
                  We handle everything from minor home repairs to multi-room remodels and commercial construction projects, ensuring professional results every time.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={HERO_BG} alt="Professional handyman work" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="gnt-section-title mb-12 text-center">Our Professional Handyman Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="gnt-service-card">
                    <div className="gnt-service-icon">
                      <Icon size={32} />
                    </div>
                    <h3 className="gnt-service-title">{service.title}</h3>
                    <p className="gnt-service-text">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Remodeling Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={REMODELING_IMG} alt="Modern kitchen remodeling" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="gnt-section-title mb-6">Full-Service Remodeling</h2>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Expert Remodeling for Kitchens, Bathrooms & Whole Homes</h3>
                <p className="text-gray-700 mb-4">
                  Ready to upgrade your space? We provide high-quality remodeling services built around durability, value, and clean workmanship.
                </p>
                <p className="text-gray-700 mb-6">
                  From concept to completion, our team works closely with you to bring your vision to life while staying on schedule and within budget.
                </p>
                <a href="#contact" className="gnt-btn-primary inline-block">
                  GET A FREE QUOTE
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="gnt-section-title mb-8 inline-block">Service Areas</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Proudly Serving Joplin, Webb City, Carl Junction & Carthage, MO
            </p>
            <p className="text-gray-600">
              GNT Construction provides handyman, remodeling, and new construction services to both homeowners and businesses across the region with fast, professional service.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="gnt-section-title mb-12 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="gnt-section-title mb-8 text-center">Message Us Now</h2>
            <form onSubmit={handleSubmit} className="gnt-contact-form">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="gnt-form-group">
                  <label className="gnt-form-label">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="gnt-form-input"
                  />
                </div>
                <div className="gnt-form-group">
                  <label className="gnt-form-label">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="gnt-form-input"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="gnt-form-group">
                  <label className="gnt-form-label">Phone:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="gnt-form-input"
                  />
                </div>
                <div className="gnt-form-group">
                  <label className="gnt-form-label">What's Your Budget?*</label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="gnt-form-input"
                  />
                </div>
              </div>

              <div className="gnt-form-group">
                <label className="gnt-form-label">Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="gnt-form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="gnt-btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
