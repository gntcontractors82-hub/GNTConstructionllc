/**
 * FAQ Section Component
 * Frequently asked questions with schema markup for SEO
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you offer free estimates?",
      answer:
        "Yes! We provide free, no-obligation estimates for all projects. We'll assess your needs and provide transparent pricing with no hidden fees.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Absolutely. GNT Construction is fully licensed, bonded, and insured. All our team members are background checked and trained professionals.",
    },
    {
      question: "How quickly can you respond to emergency calls?",
      answer:
        "We offer 24/7 emergency service. Most emergency calls are responded to within 1-2 hours. Contact us immediately at (417) 952-5820 for urgent repairs.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve Joplin, Webb City, Carl Junction, Carthage, and surrounding areas in Missouri. Contact us to confirm service availability for your location.",
    },
    {
      question: "What warranty do you provide?",
      answer:
        "All our work is backed by a 2-year workmanship warranty. We stand behind our craftsmanship and want you to be completely satisfied.",
    },
    {
      question: "Can you handle both small repairs and large remodels?",
      answer:
        "Yes! From minor repairs to complete home remodels, we handle projects of all sizes with the same level of professionalism and attention to detail.",
    },
    {
      question: "Do you work with specific materials or brands?",
      answer:
        "We work with quality materials and can accommodate your preferences. We can recommend trusted brands and materials that fit your budget and style.",
    },
    {
      question: "How do I schedule a consultation?",
      answer:
        "Simply call us at (417) 952-5820, email gntcontractors82@gmail.com, or fill out our contact form. We'll schedule a convenient time to discuss your project.",
    },
  ];

  // Schema markup for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about our services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="font-semibold text-gray-800 text-left">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-red-600 transition-transform ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-red-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="mb-6">Contact us today and our team will be happy to help!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="tel:+14179525820"
                className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
              >
                Call (417) 952-5820
              </a>
              <a
                href="mailto:gntcontractors82@gmail.com"
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
