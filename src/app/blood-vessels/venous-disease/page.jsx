"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Info,
  Stethoscope,
  Activity,
  ShieldCheck,
  Zap,
  Clock,
  HeartPulse,
  Sparkles,
  PhoneCall,
  UserCheck,
  FileText,
} from "lucide-react";
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from "@/components/FAQAccordion";

export default function VenousDiseasePage() {

  const faqs = [
    {
      question: "What is the root cause of chronic venous insufficiency?",
      answer:
        "Venous insufficiency occurs when tiny one-way valves inside lower limb veins become stretched or damaged. Instead of pumping blood upward back to the heart against gravity, blood leaks backward (venous reflux) and pools in the leg veins, causing elevated pressure, swelling, and vessel dilation.",
    },
    {
      question:
        "Are varicose veins just a cosmetic issue or a medical condition?",
      answer:
        "While mild spider veins may be purely aesthetic, bulging varicose veins are often a sign of underlying venous reflux and elevated venous hypertension. Left untreated, chronic reflux can progress to severe edema, skin hyperpigmentation, stasis dermatitis, and open venous stasis ulcers.",
    },
    {
      question: "What happens during a Duplex Ultrasound scan?",
      answer:
        "Duplex Doppler ultrasound is a pain-free, non-invasive imaging procedure. The vascular technologist uses high-frequency sound waves to visualize vein structures, assess blood flow direction, measure valve reflux duration in seconds, and rule out deep vein thrombosis (DVT).",
    },
    {
      question:
        "Are endovenous laser and radiofrequency ablation procedures painful?",
      answer:
        "No. Minimal invasive thermal ablation (RFA/EVLT) is performed right in our outpatient clinic using local tumescent anesthesia. Patients feel minimal discomfort during the 30-minute procedure and usually resume normal light walking immediately afterward.",
    },
    {
      question:
        "Will insurance cover treatment for varicose veins and venous disease?",
      answer:
        "Most medical insurance plans and Medicare cover vein procedures when patients exhibit documented clinical symptoms (pain, swelling, skin changes) and confirmed ultrasound evidence of venous reflux after trying conservative compression therapy.",
    },
  ];

  const typesList = [
    {
      name: "Chronic Venous Insufficiency (CVI)",
      desc: "Weak vein valves allow blood to flow backward and pool in the legs, causing swelling, heaviness, and skin changes.",
    },
    {
      name: "Varicose & Spider Veins",
      desc: "Varicose veins are enlarged, twisted veins; spider veins are smaller, web-like veins visible beneath the skin.",
    },
    {
      name: "Deep Vein Thrombosis (DVT)",
      desc: "A blood clot forms in a deep vein, usually in the leg, and may cause swelling, pain, and warmth.",
    },
    {
      name: "Superficial Thrombophlebitis",
      desc: "A vein close to the skin becomes inflamed and develops a small clot, causing tenderness, redness, or warmth.",
    },
    {
      name: "Venous Ulcers",
      desc: "Slow-healing sores, usually around the ankle, caused by long-term poor venous circulation.",
    },
  ];

  const symptomList = [

    {
      title: "Aching, Heaviness & Fatigue",
      desc: "A dull, tired, or throbbing sensation in the lower extremities relieved by leg elevation.",
      icon: Clock,
    },
    {
      title: "Skin Hyperpigmentation & Eczema",
      desc: "Dark browning or rust-colored skin staining (hemosiderin) near the inner ankles due to red blood cell breakdown.",
      icon: Info,
    },
    {
      title: "Restless Legs & Night Cramps",
      desc: "Involuntary leg twitching or painful nocturnal calf spasms triggered by venous congestion.",
      icon: Zap,
    },
    {
      title: "Venous Stasis Ulcers",
      desc: "Slow-healing open sores above the inner ankle resulting from long-standing tissue breakdown and poor circulation.",
      icon: AlertTriangle,
    },
  ];

  const riskFactors = [
    {
      name: "Genetics & Family History",
      detail:
        "Over 70% of patients with venous reflux have a first-degree relative with vein disease.",
    },
    {
      name: "Prolonged Standing or Sitting",
      detail:
        "Occupations requiring hours of stillness prevent leg calf muscles from pumping blood.",
    },
    {
      name: "Pregnancy & Hormonal Shifts",
      detail:
        "Increased blood volume and pelvic pressure relax vein walls during pregnancy.",
    },
    {
      name: "Age & Obesity",
      detail:
        "Natural loss of vein wall elasticity combined with excess abdominal pressure on venous return.",
    },
    {
      name: "Prior Deep Vein Thrombosis (DVT)",
      detail:
        "Post-thrombotic syndrome damages vein valves following a major blood clot.",
    },
  ];

  const diagnosticTests = [
    {
      name: "Duplex Reflux Mapping",
      desc: "Measures valve reflux duration in seconds (>0.5s indicates valve failure) to pinpoint dysfunctional vein valves.",
    },
    {
      name: "Saphenous Trunk Mapping",
      desc: "Maps the precise anatomical pathway and dimensions of the Great and Small Saphenous veins.",
    },
    {
      name: "Perforator Vein Inspection",
      desc: "Identifies incompetent connecting veins between the deep and superficial systems contributing to swelling and skin breakdown.",
    },
    {
      name: "Deep Venous Assessment",
      desc: "Evaluates deep vein patency to rule out Deep Vein Thrombosis (DVT) and obstructive venous compression.",
    },
  ];

  const treatments = [
    {
      name: "Thermal endovenous ablation",
      badgeType: "Procedure",
      desc: "Uses targeted heat energy from radiofrequency (RFA) or laser (EVLT) delivered via a thin catheter to seal shut the diseased vein, redirecting blood flow into healthier vessels.",
    },
    {
      name: "Nonthermal glue ablation",
      badgeType: "Procedure",
      desc: "Uses a specialized medical-grade adhesive delivered via catheter to close the diseased vein without requiring heat, tumescent anesthesia, or post-procedure compression stockings.",
    },
    {
      name: "Microfoam ablation",
      badgeType: "Procedure",
      desc: "Injects an ultrasound-guided physician-compounded microfoam into tortuous or complex diseased vein segments to gently displace blood and seal the vessel.",
    },
    {
      name: "Sclerotherapy",
      badgeType: "Procedure",
      desc: "Injects a targeted solution directly into spider veins and smaller tributary varicose veins, causing them to collapse and gradually fade from view.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Venous Disease & <br />
            Chronic Insufficiency
          </h1>
        </div>
      </div>

      {/* 2. MAIN CONTENT LAYOUT WITH STICKY OUTLINE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Navigation Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Clinical Guide Contents"
              items={[
                ["#overview", "Overview"],
                ["#types", "Types of Venous Disease"],
                ["#symptoms", "Symptoms"],
                ["#causes", "Causes & Risk Factors"],
                ["#diagnosis", "Diagnostic Testing"],
                ["#treatment", "Treatment"],
                ["#prevention", "Lifestyle & Prevention"],
                ["#faqs", "Patient FAQs"],
              ]}
              cta={{
                title: "Experiencing Heavy, Aching Legs or Varicose Veins?",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          {/* Main Article & Medical Sections */}
          <div className="lg:col-span-9 space-y-12">
            {/* OVERVIEW SECTION WITH ANATOMY IMAGE */}
            <section
              id="overview"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What is Venous Disease?
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Venous disease is common and can affect your comfort, mobility, and quality of life. It occurs when the veins in your legs have difficulty returning blood to the heart, causing blood to pool in the lower legs.
                </p>
                <p>
                  When the small valves inside the veins become weak or damaged, blood can flow backward and increase pressure in the veins. This may cause swelling, aching, heaviness, varicose veins, skin changes, and, in advanced cases, leg ulcers.
                </p>
              </div>

              {/* Overview Medical Infographic Banner */}
              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/images/venous-types-visual-white.jpg"
                  alt="Venous Disease & Chronic Insufficiency Clinical Infographic"
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* TYPES */}
            <section
              id="types"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Types of Venous Disease
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Venous disease can range from <strong>spider and varicose veins</strong> to <strong>chronic venous insufficiency</strong>, <strong>skin changes</strong>, and <strong>venous ulcers</strong>. Identifying the type and underlying cause helps us choose the right treatment for you.
              </p>

              <div className="divide-y divide-slate-200/80">
                {typesList.map((t) => (
                  <div
                    key={t.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        {t.name}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note Callout */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Swelling has many causes. Not all leg swelling is due to veins—cardiac, renal, lymphatic, medication, and clot-related causes should be considered.
                </p>
              </div>
            </section>

            {/* SYMPTOMS GRID SECTION */}
            <section
              id="symptoms"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Common Symptoms of Venous Insufficiency
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptomList.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <div
                      key={s.title}
                      className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100/80 hover:bg-blue-50 transition-colors space-y-2"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl border border-blue-100 text-blue-600 shadow-2xs">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-1">
                        {s.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* CAUSES & RISK FACTORS */}
            <section
              id="causes"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What Triggers Vein Valve Damage?
                </h2>
              </div>

              <div className="divide-y divide-slate-200/80">
                {riskFactors.map((r) => (
                  <div
                    key={r.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        {r.name}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {r.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. DIAGNOSIS */}
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Diagnostic Testing
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Accurate diagnosis begins with a comprehensive vascular ultrasound to assess vein anatomy, measure blood flow, and identify specific points of valve reflux.
              </p>

              <div className="divide-y divide-slate-200/80">
                {diagnosticTests.map((t) => (
                  <div
                    key={t.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        {t.name}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. TREATMENT */}
            <section
              id="treatment"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Treatment
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Modern venous treatments are minimally invasive, performed in-office with minimal discomfort and rapid recovery times, restoring healthy leg circulation.
              </p>

              <div className="divide-y divide-slate-200/80">
                {treatments.map((t) => (
                  <div
                    key={t.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[34%] lg:w-[30%] shrink-0 space-y-1.5">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                        {t.name}
                      </h3>
                      <div>
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${t.badgeType === "Treatment"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-blue-50 text-blue-700 border-blue-200"
                            }`}
                        >
                          {t.badgeType}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note Callout */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Our goal is to recommend the least invasive, most effective vein treatment tailored to your ultrasound findings, symptoms, and lifestyle.
                </p>
              </div>
            </section>

            {/* PREVENTION & LIFESTYLE */}
            <section
              id="prevention"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Lifestyle & Compression Protocol
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    Graduated Compression
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Wear 20-30 mmHg prescription compression stockings during
                    prolonged standing or travel.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    Leg Elevation Routine
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Elevate legs above heart level for 15-20 minutes 3 times
                    daily to assist gravity venous drain.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    Calf Muscle Flexing
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Engage in regular walking and ankle flex exercises to
                    activate calf muscle venous pumps.
                  </p>
                </div>
              </div>
            </section>

            {/* PATIENT FAQS */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Frequently Asked Questions
                </h2>
              </div>
              <FAQAccordion items={faqs} />
            </section>

            {/* CALL TO ACTION CARD */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 text-white shadow-2xl border border-blue-800/40 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-2xl font-extrabold">
                  Ready for relief from leg swelling & vein pain?
                </h3>
                <p className="text-blue-100 text-sm">
                  Schedule a comprehensive vascular duplex evaluation with Dr.
                  Almahmoud.
                </p>
              </div>
              <a
                href="https://healow.com/apps/provider/mohamed-almahmoud-2103459"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-sm rounded-2xl shadow-xl transition-all shrink-0"
              >
                <Stethoscope className="mr-2 h-4 w-4" />
                Book Vein Scan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
