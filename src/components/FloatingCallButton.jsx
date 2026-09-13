"use client";

import { usePathname } from "next/navigation";
import { PhoneCall } from "lucide-react";

export default function FloatingCallButton() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const isElevatedPage =
    pathname?.startsWith("/symptom") ||
    pathname?.startsWith("/heart/") ||
    pathname?.startsWith("/blood-vessels/") ||
    pathname?.startsWith("/disease/");

  return (
    <aside
      aria-label="Quick contact"
      className={`fixed left-4 sm:left-6 z-40 animate-bounce transition-all duration-300 ${
        isHomePage
          ? "hidden md:block bottom-5 sm:bottom-6"
          : isElevatedPage
          ? "bottom-20 sm:bottom-6"
          : "bottom-5 sm:bottom-6"
      }`}
    >
      <a
        href="tel:+12813581950"
        title="Call Clinic: +1 (281) 358-1950"
        aria-label="Call Clinic at +1 (281) 358-1950"
        className="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl shadow-blue-950/40 hover:shadow-blue-600/50 border-2 border-white/50 backdrop-blur-sm transition-all duration-200 active:scale-90"
      >
        <PhoneCall className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
        <span className="sr-only">Call Clinic</span>
      </a>
    </aside>
  );
}

