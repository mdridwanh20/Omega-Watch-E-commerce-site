import React, { useState } from "react";
import { HeadingH2 } from "../Component/Share/Typography";

export default function Faq() {
  const faqs = [
    {
      question: "What makes Omega watches unique compared to other luxury brands?",
      answer:
        "Omega is renowned for its precision, innovation, and legacy—from being the first watch on the moon to official timekeeping at the Olympics.",
    },
    {
      question: "Are Omega watches Swiss-made?",
      answer:
        "Yes, every Omega watch is designed and manufactured in Switzerland, upholding the highest standards of Swiss watchmaking.",
    },
    {
      question: "How often should I service my Omega watch?",
      answer:
        "It is recommended to service your Omega watch every 5 to 8 years, depending on the model and usage conditions.",
    },
    {
      question: "Do Omega watches come with a warranty?",
      answer:
        "Yes, all new Omega watches come with a 5-year international warranty covering manufacturing defects.",
    },
    {
      question:
        "What’s the difference between the Seamaster, Speedmaster, and Constellation collections?",
      answer:
        "Each collection is tailored to different lifestyles—Seamaster for diving, Speedmaster for chronographs, and Constellation for elegant daily wear.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <div id="faq" className="scroll-mt-20 max-w-xl mx-auto p-4">

        <HeadingH2 headH2={'Frequently Asked Questions'} className=" font-bold mb-6 text-center"></HeadingH2>

      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border-b border-gray-200"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full text-left py-4 flex justify-between border-gray-100 shadow border mb-3 px-3 bg-white items-center focus:outline-none"
          >
            <span className="font-medium ">{faq.question}</span>
            <span
              className={`transform transition-transform duration-200 ${
                activeIndex === i ? "-rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>

          {activeIndex === i && (
            <div className="pb-4 border-0 p-2 bg-slate-100 border-b-1 border-gray-200 text-gray-700">
              {faq.answer}
            </div>
          )}

        </div>
      ))}

    </div>
  );
}
