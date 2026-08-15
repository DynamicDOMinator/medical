"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Heart,
  Activity,
  Menu,
  X,
  PhoneCall,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  Stethoscope,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useState, useRef } from "react";

const heartDiseases = [
  {
    name: "Coronary Artery Disease (CAD)",
    href: "/heart/cad",
    desc: "Plaque buildup & arterial narrowing",
  },
  {
    name: "Arrhythmias",
    href: "/heart/arrhythmias",
    desc: "Irregular electrical rhythms",
  },
  {
    name: "Valvular Heart Disease",
    href: "/heart/valvular-heart-disease",
    desc: "Valve stenosis & regurgitation",
  },
  {
    name: "Congestive Heart Failure (CHF)",
    href: "/heart/chf",
    desc: "Reduced pumping function & fluid strain",
  },
];

const bloodVesselDiseases = [
  {
    name: "Venous Disease",
    href: "/blood-vessels/venous-disease",
    desc: "Insufficiency, varicose veins & swelling",
  },
  {
    name: "Peripheral Artery Disease (PAD)",
    href: "/blood-vessels/peripheral-artery-disease",
    desc: "Limb circulation blockages",
  },
  {
    name: "Thromboembolic Disease",
    href: "/blood-vessels/thromboembolic-disease",
    desc: "Deep vein thrombosis & clot prevention",
  },
];

// Organized into the 3 clear categories
const symptomsCategories = [
  {
    id: "heart",
    category: "Heart Symptoms",
    icon: Heart,
    iconColor: "text-rose-500",
    items: [
      { name: "Chest Pain", href: "/symptom/chest-pain" },
      { name: "Shortness of Breath", href: "/symptom/shortness-of-breath" },
      { name: "Palpitations", href: "/symptom/palpitations" },
      { name: "Dizziness & Fainting", href: "/symptom/dizziness-and-fainting" },
      { name: "Fatigue", href: "/symptom/fatigue" },
    ],
  },
  {
    id: "vascular",
    category: "Vascular Symptoms",
    icon: Activity,
    iconColor: "text-sky-500",
    items: [
      { name: "Leg Pain When Walking", href: "/symptom/leg-pain-when-walking" },
      { name: "Leg Swelling", href: "/symptom/leg-swelling" },
      { name: "Leg Heaviness & Aching", href: "/symptom/leg-heaviness-and-aching" },
      { name: "Varicose Veins", href: "/symptom/varicose-veins" },
      { name: "Cold or Discolored Feet", href: "/symptom/cold-or-discolored-feet" },
    ],
  },
  {
    id: "hypertension",
    category: "Hypertension",
    icon: TrendingUp,
    iconColor: "text-indigo-500",
    items: [
      { name: "High Blood Pressure", href: "/symptom/high-blood-pressure" },
      { name: "Headaches", href: "/symptom/headaches" },
      { name: "Dizziness", href: "/symptom/dizziness" },
    ],
  },
];

function MegaDropdown({ items, label, icon: Icon, categoryHref }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`flex items-center space-x-1.5 text-sm font-semibold px-3.5 py-2 rounded-full transition-all duration-150 ${
          open
            ? "bg-slate-900 text-white shadow-sm"
            : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/80"
        }`}
      >
        <Icon className="h-4 w-4 text-slate-500 group-hover:text-slate-700" />
        <span>{label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180 text-white" : "text-slate-400"
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2.5 w-76 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-900/10 z-50 overflow-hidden animate-fade-in-up p-2">
          <Link
            href={categoryHref}
            className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-bold text-blue-600 hover:bg-blue-50/80 transition-colors mb-1"
          >
            <span>All {label} Overview</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <div className="space-y-0.5">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {item.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SymptomsMegaDropdown() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`flex items-center space-x-1.5 text-sm font-semibold px-3.5 py-2 rounded-full transition-all duration-150 ${
          open
            ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
            : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/80"
        }`}
      >
        <Stethoscope className="h-4 w-4" />
        <span>Symptoms</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180 text-white" : "text-slate-400"
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full -left-44 lg:-left-28 mt-2.5 w-[660px] bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-2xl shadow-2xl shadow-slate-950/15 z-50 overflow-hidden animate-fade-in-up p-5">
          {/* 3 Clean Minimalist Columns */}
          <div className="grid grid-cols-3 gap-6">
            {symptomsCategories.map((col) => {
              const ColIcon = col.icon;
              return (
                <div key={col.id} className="space-y-3">
                  {/* Category Header */}
                  <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
                    <ColIcon className={`h-4 w-4 ${col.iconColor}`} />
                    <h3 className="font-extrabold text-xs text-slate-900 uppercase tracking-wide">
                      {col.category}
                    </h3>
                  </div>

                  {/* Clean Links */}
                  <div className="space-y-1">
                    {col.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 transition-all duration-150"
                      >
                        <span>{item.name}</span>
                        <ChevronRight className="h-3 w-3 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Minimalist Bottom Bar */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="text-[11px] text-slate-400">
              Select any symptom for targeted diagnostic guidance
            </span>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center space-x-1 font-bold text-blue-600 hover:text-blue-700 hover:underline text-xs"
            >
              <span>Book Doctor Consultation</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileHeartOpen, setMobileHeartOpen] = useState(false);
  const [mobileVesselsOpen, setMobileVesselsOpen] = useState(false);
  const [mobileSymptomsOpen, setMobileSymptomsOpen] = useState(true);
  const [activeMobileSymptomCat, setActiveMobileSymptomCat] = useState("heart");

  const staticLinks = [
    { name: "Heart Care", href: "/heart-care" },
    { name: "Provider", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mt-3 sm:mt-4 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-950/5 mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div className="flex justify-between h-16 items-center">
          {/* Clinic Brand Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-blue-950 group shrink-0"
          >
            <div className="bg-gradient-to-tr from-blue-700 to-sky-500 p-2 rounded-xl text-white group-hover:from-blue-600 group-hover:to-sky-400 transition-all shadow-sm shadow-blue-500/30">
              <Heart className="h-5 w-5" fill="currentColor" />
            </div>
            <span className="font-extrabold text-xl tracking-tight">
              Pulse<span className="text-blue-600">Care</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <MegaDropdown
              items={heartDiseases}
              label="Heart"
              icon={Heart}
              categoryHref="/heart"
            />
            <MegaDropdown
              items={bloodVesselDiseases}
              label="Blood Vessels"
              icon={Activity}
              categoryHref="/blood-vessels"
            />
            <Link
              href="/blood-vessels/hypertension"
              className={`flex items-center space-x-1.5 text-sm font-semibold px-3.5 py-2 rounded-full transition-all duration-150 ${
                pathname === "/blood-vessels/hypertension"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/80"
              }`}
            >
              <TrendingUp className="h-4 w-4 text-slate-500" />
              <span>Hypertension</span>
            </Link>

            {/* Intuitive Clean Symptoms Dropdown */}
            <SymptomsMegaDropdown />

            {/* Divider */}
            <div className="h-4 w-px bg-slate-200 mx-1.5" />

            {staticLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold px-3.5 py-2 rounded-full transition-all duration-150 ${
                  pathname === link.href
                    ? "bg-blue-50 text-blue-700 font-bold"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/70"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Call Clinic CTA */}
            <a
              href="tel:+18005557857"
              className="ml-2 inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-sm shadow-blue-600/20 shrink-0"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Call Clinic</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-700 hover:text-blue-600 p-2 rounded-xl hover:bg-blue-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border border-slate-200 bg-white max-h-[85vh] overflow-y-auto pointer-events-auto mt-2 rounded-3xl mx-3 shadow-2xl">
          <div className="px-4 py-4 space-y-2">
            {/* Symptoms Section (Top Priority on Mobile) */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3">
              <button
                type="button"
                onClick={() => setMobileSymptomsOpen(!mobileSymptomsOpen)}
                className="flex items-center justify-between w-full py-1 text-sm font-extrabold text-slate-900"
              >
                <div className="flex items-center space-x-2 text-blue-700">
                  <Stethoscope className="h-4 w-4" />
                  <span>Symptoms Guide</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                    mobileSymptomsOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {mobileSymptomsOpen && (
                <div className="mt-3 space-y-2 pt-2 border-t border-slate-200/70">
                  {symptomsCategories.map((cat) => {
                    const isExpanded = activeMobileSymptomCat === cat.id;
                    const CatIcon = cat.icon;
                    return (
                      <div key={cat.id} className="rounded-xl border border-slate-200/80 bg-white overflow-hidden">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveMobileSymptomCat(isExpanded ? null : cat.id)
                          }
                          className="flex items-center justify-between w-full p-2.5 text-left font-bold text-xs text-slate-800 hover:bg-blue-50/50 transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <CatIcon className={`h-4 w-4 ${cat.iconColor}`} />
                            <span>{cat.category}</span>
                          </div>
                          <ChevronDown
                            className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                              isExpanded ? "rotate-180 text-blue-600" : ""
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="px-3 pb-3 pt-1 bg-slate-50/60 divide-y divide-slate-100">
                            {cat.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-between py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors group"
                              >
                                <span>{item.name}</span>
                                <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-blue-600 transition-transform" />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Heart Conditions Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileHeartOpen(!mobileHeartOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-bold text-slate-800 transition-colors hover:text-blue-600"
              >
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4 text-blue-600" />
                  <span>Heart Conditions</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                    mobileHeartOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>
              {mobileHeartOpen && (
                <div className="pl-6 py-1 space-y-1">
                  <Link
                    href="/heart"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-1.5 text-xs font-bold text-blue-600"
                  >
                    <span>Browse All Heart Conditions →</span>
                  </Link>
                  {heartDiseases.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-slate-700 text-xs font-semibold"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blood Vessels Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileVesselsOpen(!mobileVesselsOpen)}
                className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-bold text-slate-800 transition-colors hover:text-blue-600"
              >
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-blue-600" />
                  <span>Blood Vessel Conditions</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                    mobileVesselsOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>
              {mobileVesselsOpen && (
                <div className="pl-6 py-1 space-y-1">
                  <Link
                    href="/blood-vessels"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-1.5 text-xs font-bold text-blue-600"
                  >
                    <span>Browse All Vascular Conditions →</span>
                  </Link>
                  {bloodVesselDiseases.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-slate-700 text-xs font-semibold"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Hypertension Mobile Link */}
            <Link
              href="/blood-vessels/hypertension"
              onClick={() => setMobileOpen(false)}
              className="flex items-center space-x-2 px-3 py-2.5 text-sm font-bold text-slate-800 transition-colors hover:text-blue-600"
            >
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span>Hypertension</span>
            </Link>

            {/* Static Links */}
            <div className="border-t border-slate-100 pt-2 space-y-1">
              {staticLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded-xl text-sm font-semibold ${
                    pathname === link.href
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="tel:+18005557857"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call PulseCare Clinic (800) 555-PULSE</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
