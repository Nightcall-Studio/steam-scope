"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is this website about?",
    answer:
      "This website provides data and insights on free Steam games using the SteamSpy API.",
  },
  {
    question: "How often is the data updated?",
    answer:
      "Game data is refreshed automatically every few hours to keep information up to date.",
  },
  {
    question: "Do I need a Steam account to use this site?",
    answer:
      "No, you don’t need a Steam account. You can browse and filter games freely.",
  },
];

export default function FAQDropdown() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Frequently Asked Questions
      </h1>

      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className="border border-white/20 rounded-xl overflow-hidden bg-white/5"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left px-4 py-3 font-medium text-lg cursor-pointer"
            >
              {faq.question}
              <span className="ml-2 text-blue-400 transition-transform duration-300">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-4 pb-4 text-white/80">
                {faq.answer}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
