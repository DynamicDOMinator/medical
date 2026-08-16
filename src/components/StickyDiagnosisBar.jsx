"use client";

import Link from "next/link";

const HEALOW_BOOKING_URL =
  "https://healow.com/apps/provider/mohamed-almahmoud-2103459";

export default function StickyDiagnosisBar({
  title = "Looking to get a diagnosis?",
  btnText = "Book Now",
  href = HEALOW_BOOKING_URL,
}) {
  const isExternal = href.startsWith("http");

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-3 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] flex items-center justify-between gap-3">
      <div className="min-w-0 flex-1 text-left">
        <p className="text-xs sm:text-sm font-extrabold text-slate-900 truncate">
          {title}
        </p>
      </div>
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-blue-600 hover:bg-blue-700 shadow-blue-600/20 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md active:scale-95"
        >
          {btnText}
        </a>
      ) : (
        <Link
          href={href}
          className="shrink-0 bg-blue-600 hover:bg-blue-700 shadow-blue-600/20 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md active:scale-95"
        >
          {btnText}
        </Link>
      )}
    </div>
  );
}
