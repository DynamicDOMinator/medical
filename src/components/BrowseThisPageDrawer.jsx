"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, X, MoreVertical, ArrowUp } from "lucide-react";

export default function BrowseThisPageDrawer({
  menuItems = [
    {
      id: "overview",
      title: "Overview",
      subtitle: "Biography & Board Certifications",
    },
    {
      id: "early-evaluation",
      title: "Early Evaluation",
      subtitle: "Care starts before serious problems develop",
    },
    {
      id: "prevention",
      title: "Prevention",
      subtitle: "What sets our approach apart",
    },
    {
      id: "regular-follow-up",
      title: "Regular Follow-up",
      subtitle: "Things every patient should know",
    },
    {
      id: "patient-reviews",
      title: "Patient Reviews",
      subtitle: "Verified patient testimonials",
    },
    {
      id: "clinic-location",
      title: "Clinic Location & Hours",
      subtitle: "The Woodlands, TX location & map",
    },
  ],
}) {
  const [browseOpen, setBrowseOpen] = useState(false);

  // Close on Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setBrowseOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToSection = (sectionId) => {
    setBrowseOpen(false);
    setTimeout(() => {
      if (sectionId === "top" || sectionId === "overview") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -90;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 80);
  };

  return (
    <>
      {/* Side-Docked "Browse this page" Button (Right Edge) */}
      <div className="fixed top-28 sm:top-32 right-0 z-40">
        <button
          type="button"
          onClick={() => setBrowseOpen(true)}
          className="flex items-center space-x-2 pl-4 pr-3 py-3 bg-[#001c4c] hover:bg-blue-900 text-white font-extrabold text-xs sm:text-sm rounded-l-2xl shadow-2xl shadow-blue-950/50 border-l border-t border-b border-blue-400/30 transition-all hover:-translate-x-1 active:translate-x-0 cursor-pointer"
          aria-label="Browse this page"
        >
          <span className="tracking-tight">Browse this page</span>
          <MoreVertical className="h-4 w-4 text-white shrink-0" />
        </button>
      </div>

      {/* "Browse this page" Drawer / Topic Menu Modal */}
      {browseOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
          {/* Backdrop overlay */}
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setBrowseOpen(false)}
          />

          {/* Dropdown / Modal Panel */}
          <div className="absolute inset-x-3 top-16 sm:top-24 max-w-xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-950/20 overflow-hidden z-10 transition-all transform animate-slide-down">
            {/* Header bar */}
            <div className="bg-[#001c4c] text-white px-5 py-4 flex items-center justify-between border-b border-blue-900">
              <button
                type="button"
                onClick={() => setBrowseOpen(false)}
                className="flex items-center space-x-2 font-bold text-sm sm:text-base text-white hover:text-sky-300 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
                <span>Browse this page</span>
              </button>
              <button
                type="button"
                onClick={() => setBrowseOpen(false)}
                className="p-1.5 rounded-full hover:bg-blue-900 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Menu Options List */}
            <div className="divide-y divide-slate-100 max-h-[70vh] overflow-y-auto bg-white">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-6 py-4 font-bold text-[#001c4c] text-sm sm:text-base hover:bg-blue-50/80 transition-colors flex items-center justify-between group border-b border-slate-100 cursor-pointer"
                >
                  <div className="pr-4">
                    <span className="block text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </span>
                    {item.subtitle && (
                      <span className="text-xs text-slate-500 font-normal mt-0.5 block">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-blue-600 shrink-0">
                    View →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
