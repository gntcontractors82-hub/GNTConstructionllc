/**
 * Before/After Gallery Component
 * Showcase completed projects with before and after photos
 */

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BeforeAfterGallery() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Kitchen Remodel",
      category: "Remodeling",
      description: "Complete kitchen renovation with new cabinets, countertops, and appliances",
      before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&blend=https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&blend_mode=lighten",
    },
    {
      title: "Bathroom Renovation",
      category: "Remodeling",
      description: "Modern bathroom with new fixtures, tile work, and lighting",
      before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop&blend=https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop&blend_mode=lighten",
    },
    {
      title: "Deck Construction",
      category: "Outdoor",
      description: "Beautiful new composite deck with built-in seating",
      before: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&blend=https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&blend_mode=lighten",
    },
    {
      title: "Drywall & Paint",
      category: "Interior",
      description: "Professional drywall repair and fresh paint throughout",
      before: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=400&fit=crop",
      after: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=400&fit=crop&blend=https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=400&fit=crop&blend_mode=lighten",
    },
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[activeProject];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Work Speaks for Itself</h2>
          <p className="text-lg text-gray-600">See the transformation we bring to every project</p>
        </div>

        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-4 p-4">
            {/* Before */}
            <div>
              <div className="relative overflow-hidden rounded-lg bg-gray-300 h-96">
                <img
                  src={project.before}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  BEFORE
                </div>
              </div>
            </div>

            {/* After */}
            <div>
              <div className="relative overflow-hidden rounded-lg bg-gray-300 h-96">
                <img
                  src={project.after}
                  alt="After"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  AFTER
                </div>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-8 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-red-600 font-semibold text-sm mt-1">{project.category}</p>
              </div>
              <div className="text-sm text-gray-600">
                Project {activeProject + 1} of {projects.length}
              </div>
            </div>
            <p className="text-gray-700 mb-6">{project.description}</p>

            {/* Navigation */}
            <div className="flex gap-4 justify-between items-center">
              <button
                onClick={prevProject}
                className="flex items-center gap-2 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveProject(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      idx === activeProject ? "bg-red-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Ready to transform your home?</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Get Your Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
