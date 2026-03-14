/**
 * Trust Signals Component
 * Displays certifications, awards, guarantees, and key statistics
 */

import { Award, Shield, Clock, Zap } from "lucide-react";

export default function TrustSignals() {
  const signals = [
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind",
    },
    {
      icon: Shield,
      title: "100% Satisfaction",
      description: "Money-back guarantee if you're not completely satisfied",
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "We respect your time - always punctual and professional",
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Same-day quotes and emergency service available",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Emergency Service" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Trust Signals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {signals.map((signal, idx) => {
            const Icon = signal.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <Icon className="w-10 h-10 text-red-600 mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">{signal.title}</h3>
                <p className="text-sm text-gray-600">{signal.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-800 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose GNT Construction</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="mt-12 bg-white p-8 rounded-lg border-2 border-red-600">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Guarantees</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-red-600 text-2xl">✓</div>
              <div>
                <h4 className="font-bold text-gray-800">Workmanship Warranty</h4>
                <p className="text-sm text-gray-600">All work backed by our 2-year workmanship warranty</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-red-600 text-2xl">✓</div>
              <div>
                <h4 className="font-bold text-gray-800">Free Estimates</h4>
                <p className="text-sm text-gray-600">No obligation, no hidden fees - transparent pricing</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-red-600 text-2xl">✓</div>
              <div>
                <h4 className="font-bold text-gray-800">Licensed Professionals</h4>
                <p className="text-sm text-gray-600">All team members background checked and trained</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-red-600 text-2xl">✓</div>
              <div>
                <h4 className="font-bold text-gray-800">Emergency Available</h4>
                <p className="text-sm text-gray-600">24/7 emergency service for urgent repairs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
