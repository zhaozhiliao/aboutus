"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Can I request a specific vehicle not listed on your platform?",
    answer:
      "Absolutely! Our Direct Sourcing service is designed for this exact need. Simply contact our procurement specialists with your specific requirements (make, model, year, condition, quantity), and we'll leverage our extensive network to hand-pick and secure the exact inventory you need directly from individual owners across China.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept secure international bank transfers (T/T) for all transactions. For your protection and ours, we maintain official bank records of all payments. All transaction details, including currency (USD/CNY), payment terms, and deadlines, are clearly outlined in your commercial invoice. We also support Letter of Credit (L/C) for large-volume orders.",
  },
  {
    question: "How does your 200-point inspection process work?",
    answer:
      "Every vehicle undergoes our rigorous 200+ point inspection by certified technicians before listing. We thoroughly check engine performance, transmission, safety features, interior/exterior condition, electrical systems, and accident/flood history. You receive a comprehensive condition report with high-definition photos and videos highlighting every detail—complete transparency, no hidden flaws.",
  },
  {
    question: "What shipping methods do you offer?",
    answer:
      "We provide flexible shipping solutions including Container (20ft/40ft) and Ro-Ro (Roll-on/Roll-off) services to major ports worldwide. Average delivery time is 30-45 days depending on destination. Our dedicated logistics team handles all export clearance, customs documentation, tax refunds, and international freight forwarding—you focus on sales, we handle the supply chain.",
  },
  {
    question: "What if there's a discrepancy with my purchase?",
    answer:
      "We stand behind our vehicles with transparent policies and dedicated support. If there's any discrepancy between the vehicle received and our listing description, contact your regional account manager immediately. Our team will investigate the issue thoroughly and work to resolve it promptly and fairly, ensuring your satisfaction and maintaining our B2B trust.",
  },
  {
    question: "Do you offer 24/7 customer support?",
    answer:
      "Yes! Our multilingual customer support team is available 24/7 to assist with any questions before, during, or after your purchase. Whether you need help with documentation, logistics updates, or technical questions, our regional specialists (covering Central Asia, Middle East, and Africa) provide immediate and highly professional responses in your preferred language.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #009B3F 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold tracking-wider">
            <HelpCircle className="w-3 h-3" />
            COMMON QUESTIONS
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our services
          </p>
        </div>

        {/* FAQ 手风琴 */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* 问题按钮 */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 lg:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 pr-4">
                  {/* 问题 */}
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                </div>

                {/* 箭头图标 */}
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {/* 答案区域 */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 lg:px-8 pb-6 pt-2">
                  <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary">
                    <p className="text-gray-700 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部提示 */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30"
          >
            <HelpCircle className="w-5 h-5" />
            <span>Contact Our Team</span>
          </a>
        </div>
      </div>
    </section>
  );
}
