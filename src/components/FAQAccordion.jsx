'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'border-brand-500 bg-brand-50/20 shadow-sm shadow-brand-500/5'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="flex items-center justify-between w-full p-5 text-left font-medium text-slate-800 transition-colors focus:outline-none"
            >
              <div className="flex items-center space-x-3 pr-4">
                <HelpCircle className={`h-5 w-5 shrink-0 transition-colors ${
                  isOpen ? 'text-brand-600' : 'text-slate-400'
                }`} />
                <span className="text-base sm:text-lg">{item.question}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'transform rotate-180 text-brand-600' : ''
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
              }`}
            >
              <div className="p-5 text-slate-600 text-sm sm:text-base leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
