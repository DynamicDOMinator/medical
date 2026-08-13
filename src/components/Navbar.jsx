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
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import { useState, useRef } from "react";

const heartDiseases = [
  {
    name: "Coronary Artery Disease (CAD)",
    href: "/heart/cad",
    desc: "Plaque buildup narrowing the coronary arteries",
  },
  {
    name: "Arrhythmias",
    href: "/heart/arrhythmias",
    desc: "Irregular heart rhythms & electrical disorders",
  },
  {
    name: "Valvular Heart Disease",
    href: "/heart/valvular-heart-disease",
    desc: "Damaged or malfunctioning heart valves",
  },
  {
    name: "Congestive Heart Failure (CHF)",
    href: "/heart/chf",
    desc: "Weakened or stiff heart muscle unable to pump effectively",
  },
];

const bloodVesselDiseases = [
  {
    name: "Venous Disease",
    href: "/blood-vessels/venous-disease",
    desc: "Venous insufficiency, varicose veins & leg swelling",
  },
  {
    name: "Peripheral Artery Disease (PAD)",
    href: "/blood-vessels/peripheral-artery-disease",
    desc: "Narrowed limb arteries reducing circulation",
  },
  {
    name: "Thromboembolic Disease",
    href: "/blood-vessels/thromboembolic-disease",
    desc: "Blood clots, DVT & pulmonary embolism risks",
  },
];

const symptomsCategoryList = [
  {
    category: "Heart",
    items: [
      { name: "Chest pain", href: "/symptom/chest-pain" },
      { name: "Shortness of breath", href: "/symptom/shortness-of-breath" },
      { name: "Palpitations", href: "/symptom/palpitations" },
      { name: "Dizziness", href: "/symptom/dizziness" },
      { name: "Fatigue", href: "/symptom/fatigue" },
    ],
  },
  {
    category: "Blood Vessels",
    items: [
      { name: "Leg Pain", href: "/symptom/leg-pain" },
      { name: "Lower Limb Swelling", href: "/symptom/lower-limb-swelling" },
      { name: "Cold Feet / Numbness", href: "/symptom/cold-feet-numbness" },
      { name: "Cramping while Walking", href: "/symptom/cramping-while-walking" },
      { name: "Skin Discoloration", href: "/symptom/skin-discoloration" },
    ],
  },
  {
    category: "Hypertension",
    items: [
      { name: "Headaches", href: "/symptom/headaches" },
      { name: "Chest Tightness", href: "/symptom/chest-tightness" },
      { name: "Shortness of Breath", href: "/symptom/shortness-of-breath" },
      { name: "Visual Changes", href: "/symptom/visual-changes" },
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
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center space-x-1.5 text-sm font-bold px-3 py-2 rounded-xl transition-all ${
          open
            ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
            : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
        }`}
      >
        <Icon className="h-4 w-4" />
        <span>{label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180 text-white" : "text-slate-400"}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-84 bg-white border border-blue-100 rounded-2xl shadow-xl shadow-blue-900/10 z-50 overflow-hidden animate-fade-in-up">
          <Link
            href={categoryHref}
            className="flex items-center justify-between px-5 py-3.5 border-b border-blue-50 bg-gradient-to-r from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 transition-colors"
          >
            <div className="flex items-center space-x-2">
              <Icon className="h-4 w-4 text-blue-600" />
              <span className="font-bold text-xs text-blue-900 uppercase tracking-wider">
                All {label}
              </span>
            </div>
            <span className="text-xs font-bold text-blue-600">Explore →</span>
          </Link>
          <div className="py-2 divide-y divide-slate-50">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col px-5 py-3 hover:bg-blue-50/80 transition-colors group"
              >
                <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </span>
                <span className="text-xs text-slate-500 mt-0.5">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SymptomMegaDropdown() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center space-x-1.5 text-sm font-bold px-3 py-2 rounded-xl transition-all ${
          open
            ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
            : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
        }`}
      >
        <AlertCircle className="h-4 w-4" />
        <span>Symptoms</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180 text-white" : "text-slate-400"
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full -left-28 mt-2 w-[600px] bg-white border border-blue-100 rounded-2xl shadow-xl shadow-blue-900/10 z-50 overflow-hidden animate-fade-in-up p-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-blue-600" />
              <span className="font-extrabold text-xs text-blue-900 uppercase tracking-wider">
                Symptoms Evaluation
              </span>
            </div>
            <span className="text-[11px] font-bold text-blue-600">
              Select a symptom for diagnostic workup →
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {symptomsCategoryList.map((cat, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="text-[11px] font-extrabold text-blue-900 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded-md">
                  {cat.category}
                </h4>
                <div className="space-y-0.5">
                  {cat.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      href={item.href}
                      className="block px-2 py-1 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 transition-colors"
                    >
                      • {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
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
  const [mobileSymptomsOpen, setMobileSymptomsOpen] = useState(false);

  const staticLinks = [
    { name: "Heart Care", href: "/heart-care" },
    { name: "Provider", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mt-3 sm:mt-4 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-blue-950/10 mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-blue-950 group shrink-0"
          >
            <div className="bg-blue-600 p-2 rounded-xl text-white group-hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/30">
              <Heart className="h-5 w-5" fill="currentColor" />
            </div>
            <span className="font-extrabold text-xl tracking-tight">
              Pulse<span className="text-blue-600">Care</span>
            </span>
          </Link>

          {/* Desktop Nav */}
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
              className={`flex items-center space-x-1.5 text-sm font-bold px-3 py-2 rounded-xl transition-all ${
                pathname === "/blood-vessels/hypertension"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              <span>Hypertension</span>
            </Link>
            <SymptomMegaDropdown />

            {/* Divider */}
            <div className="h-5 w-px bg-slate-200 mx-1.5" />

            {staticLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold px-3 py-2 rounded-xl transition-all ${
                  pathname === link.href
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* CTA */}
            <a
              href="tel:+18005557857"
              className="ml-1.5 inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-md shadow-blue-600/20 shrink-0"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Call Clinic</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-700 hover:text-blue-600 p-2 rounded-xl hover:bg-blue-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-blue-100 bg-white max-h-[80vh] overflow-y-auto pointer-events-auto mt-2">
          <div className="px-4 py-4 space-y-2">
            {/* Heart accordion */}
            <div>
              <button
                onClick={() => setMobileHeartOpen(!mobileHeartOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-blue-900 bg-blue-50 rounded-xl"
              >
                <div className="flex items-center space-x-2">
                  <Heart
                    className="h-4 w-4 text-blue-600"
                    fill="currentColor"
                  />
                  <span>Heart Conditions</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-blue-600 transition-transform ${mobileHeartOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileHeartOpen && (
                <div className="mt-1 ml-4 space-y-1 border-l-2 border-blue-100 pl-3">
                  <Link
                    href="/heart"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-xs font-bold text-blue-600"
                  >
                    Browse All Heart Conditions →
                  </Link>
                  {heartDiseases.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm text-slate-700 hover:text-blue-600 font-semibold"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blood Vessels accordion */}
            <div>
              <button
                onClick={() => setMobileVesselsOpen(!mobileVesselsOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-blue-900 bg-blue-50 rounded-xl"
              >
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-blue-600" />
                  <span>Blood Vessel Conditions</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-blue-600 transition-transform ${mobileVesselsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileVesselsOpen && (
                <div className="mt-1 ml-4 space-y-1 border-l-2 border-blue-100 pl-3">
                  <Link
                    href="/blood-vessels"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-xs font-bold text-blue-600"
                  >
                    Browse All Blood Vessel Conditions →
                  </Link>
                  {bloodVesselDiseases.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm text-slate-700 hover:text-blue-600 font-semibold"
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
              className="flex items-center space-x-2 px-4 py-3 text-sm font-bold text-blue-900 bg-blue-50 rounded-xl"
            >
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span>Hypertension</span>
            </Link>

            {/* Symptoms accordion */}
            <div>
              <button
                onClick={() => setMobileSymptomsOpen(!mobileSymptomsOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-blue-900 bg-blue-50 rounded-xl"
              >
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-blue-600" />
                  <span>Symptoms</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-blue-600 transition-transform ${
                    mobileSymptomsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSymptomsOpen && (
                <div className="mt-2 ml-2 space-y-3 border-l-2 border-blue-100 pl-3">
                  {symptomsCategoryList.map((cat, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-[11px] font-bold text-blue-900 uppercase tracking-wider">
                        {cat.category}
                      </p>
                      {cat.items.map((item, iIdx) => (
                        <Link
                          key={iIdx}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1 text-xs text-slate-700 hover:text-blue-600 font-semibold"
                        >
                          • {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-100 my-2" />

            {staticLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  pathname === link.href
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:+18005557857"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center space-x-2 w-full mt-3 px-4 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-md shadow-blue-600/20"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call PulseCare Clinic</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
