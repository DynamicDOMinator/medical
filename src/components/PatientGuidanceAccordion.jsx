"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function PatientGuidanceAccordion({ points }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Mobile Screen: Interactive Accordion with + / - Toggle */}
      <div className="md:hidden space-y-3">
        {points.map((point, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-blue-400 bg-blue-50/40 shadow-sm"
                  : "border-slate-200/90 bg-white hover:border-slate-300"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-4 text-left font-bold text-slate-900 text-sm gap-3 cursor-pointer focus:outline-none"
              >
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <span
                    className={`h-2 w-2 rounded-full shrink-0 transition-colors ${
                      isOpen ? "bg-blue-600 ring-4 ring-blue-100" : "bg-blue-600"
                    }`}
                  />
                  <span className="leading-snug">{point.title}</span>
                </div>
                <div
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen
                    ? "max-h-60 opacity-100 pb-4 px-4 pl-8"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-slate-600 text-xs leading-relaxed border-t border-blue-100/60 pt-2.5">
                  {point.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* PC / Desktop: Original Clean 2-Column Grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-x-8 gap-y-6">
        {points.map((point, idx) => (
          <div key={idx} className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0" />
              <span>{point.title}</span>
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed pl-4.5">
              {point.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
