"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";

export default function GuideSidebarNav({
  title = "Guide Outline",
  icon: Icon = FileText,
  items = [],
  cta = null,
  accent = "blue",
}) {
  const [activeId, setActiveId] = useState(
    items[0]?.[0]?.replace("#", "") || ""
  );
  const isClickingRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isClickingRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 200;

          const sectionElements = items
            .map(([id]) => {
              const cleanId = id.replace("#", "");
              return {
                id: cleanId,
                element: document.getElementById(cleanId),
              };
            })
            .filter((item) => item.element !== null);

          if (sectionElements.length === 0) {
            ticking = false;
            return;
          }

          // If scrolled to near the bottom of the page, activate the last section
          if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 80
          ) {
            setActiveId(sectionElements[sectionElements.length - 1].id);
            ticking = false;
            return;
          }

          let currentSectionId = sectionElements[0].id;
          for (let i = 0; i < sectionElements.length; i++) {
            const { id, element } = sectionElements[i];
            if (element.offsetTop <= scrollPosition) {
              currentSectionId = id;
            } else {
              break;
            }
          }

          setActiveId(currentSectionId);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, [items]);

  const isIndigo = accent === "indigo";

  const handleLinkClick = (e, cleanId) => {
    e.preventDefault();
    setActiveId(cleanId);
    isClickingRef.current = true;

    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);

    const elem = document.getElementById(cleanId);
    if (elem) {
      const yOffset = -90;
      const y =
        elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    // Release click lock after smooth scroll animation completes
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 700);
  };

  return (
    <div
      className={`sticky top-28 bg-white border ${
        isIndigo ? "border-indigo-100" : "border-blue-100"
      } rounded-3xl p-6 space-y-4 shadow-sm`}
    >
      <h3
        className={`font-bold text-slate-900 text-sm uppercase tracking-wider border-b ${
          isIndigo ? "border-indigo-50" : "border-blue-50"
        } pb-3 flex items-center space-x-2`}
      >
        <Icon
          className={`h-4 w-4 ${
            isIndigo ? "text-indigo-600" : "text-blue-600"
          }`}
        />
        <span>{title}</span>
      </h3>

      <nav className="flex flex-col space-y-1 text-sm">
        {items.map(([id, label]) => {
          const cleanId = id.replace("#", "");
          const isActive = activeId === cleanId;

          return (
            <button
              key={id}
              type="button"
              onClick={(e) => handleLinkClick(e, cleanId)}
              className={`w-full text-left flex items-center py-2 px-3 rounded-xl font-medium text-sm transition-colors duration-150 outline-none focus:outline-none focus:ring-0 cursor-pointer select-none border-0 ${
                isActive
                  ? isIndigo
                    ? "bg-indigo-50 text-indigo-700 font-bold"
                    : "bg-blue-50 text-blue-700 font-bold"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              <ChevronRight
                className={`h-4 w-4 mr-2 shrink-0 transition-transform duration-150 ${
                  isActive
                    ? isIndigo
                      ? "text-indigo-600 translate-x-0.5"
                      : "text-blue-600 translate-x-0.5"
                    : "text-slate-400 group-hover:text-blue-500"
                }`}
              />
              <span className="truncate">{label}</span>
            </button>
          );
        })}
      </nav>

      {cta && (
        <div className="pt-4 border-t border-slate-100">
          <div
            className={`${
              isIndigo
                ? "bg-indigo-50/80 border-indigo-100"
                : "bg-blue-50/80 border-blue-100"
            } p-4 rounded-2xl border`}
          >
            <p
              className={`text-xs font-bold ${
                isIndigo ? "text-indigo-900" : "text-blue-900"
              }`}
            >
              {cta.title}
            </p>
            {cta.desc && (
              <p className="text-[11px] text-slate-600 mt-1">{cta.desc}</p>
            )}
            <Link
              href={cta.href || "/contact"}
              className={`mt-3 block text-center ${
                isIndigo
                  ? "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20"
                  : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20"
              } text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md`}
            >
              {cta.btnText || "Book Evaluation"}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
