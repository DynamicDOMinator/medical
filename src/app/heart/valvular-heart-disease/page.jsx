"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Info,
  Stethoscope,
  Activity,
  HeartPulse,
  Clock,
  Zap,
  FileText,
} from "lucide-react";
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from "@/components/FAQAccordion";

export default function ValvularHeartDiseasePage() {
  const faqs = [
    {
      question: "What is Valvular Heart Disease?",
      answer:
        "Valvular Heart Disease occurs when one or more of the heart four valves (aortic, mitral, tricuspid, pulmonary) do not function properly. Valves may fail to open fully (stenosis) or fail to close tightly, allowing blood to leak backward (regurgitation/insufficiency).",
    },
    {
      question: "What is TAVR (Transcatheter Aortic Valve Replacement)?",
      answer:
        "TAVR is a revolutionary minimally invasive procedure that replaces a diseased aortic valve through a catheter inserted in the femoral groin artery. TAVR avoids traditional open-heart surgery, offering faster recovery and less pain for patients with severe aortic stenosis.",
    },
    {
      question: "What are the main warning signs of heart valve failure?",
      answer:
        "Common symptoms include shortness of breath during exertion, unusual fatigue, chest tightness, heart palpitations, lightheadedness or fainting (syncope), and fluid swelling in lower ankles.",
    },
    {
      question: "How is valvular heart disease diagnosed?",
      answer:
        "Echocardiography (Transthoracic & Transesophageal 3D Echo) is the gold standard diagnostic tool. It uses ultrasound waves to visualize valve leaflet mobility, measure pressure gradients, and calculate effective valve orifice area.",
    },
  ];

  const symptomList = [
    
    {
      title: "Dizziness & Fainting (Syncope)",
      desc: "Sudden lightheadedness or fainting caused by temporary reduction of blood flow to the brain across a severe aortic valve stenosis.",
      icon: Zap,
    },
    {
      title: "Heart Palpitations & AFib",
      desc: "Fluttering or irregular heartbeats resulting from atrium stretching caused by valve regurgitation.",
      icon: HeartPulse,
    },
    {
      title: "Ankle & Foot Swelling (Edema)",
      desc: "Fluid retention in lower extremities due to right-sided heart congestion and elevated venous pressure.",
      icon: Activity,
    },
    {
      title: "Chronic Fatigue & Weakness",
      desc: "Overwhelming tiredness caused by reduced cardiac output delivered to body organs.",
      icon: Info,
    },
  ];

  const treatments = [
    {
      name: "Transcatheter Aortic Valve Replacement (TAVR)",
      badgeType: "Procedure",
      desc: "An expandable artificial valve is deployed inside the diseased aortic valve via a small leg artery catheter puncture.",
    },
    {
      name: "MitraClip™ Transcatheter Edge-to-Edge Repair",
      badgeType: "Procedure",
      desc: "A small clip is guided into the heart to hold mitral valve leaflets together and reduce severe mitral regurgitation.",
    },
    {
      name: "Balloon Aortic / Mitral Valvuloplasty",
      badgeType: "Procedure",
      desc: "Catheter balloon inflation used to stretch open stiff, narrow heart valve openings in select symptomatic patients.",
    },
    {
      name: "Surgical Valve Repair or Replacement",
      badgeType: "Procedure",
      desc: "Traditional or mini-thoracotomy surgical repair or replacement with mechanical or tissue prosthetic valves.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Valvular Heart <br />
            Disease &amp; TAVR
          </h1>
        </div>
      </div>

      {/* 2. MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Valvular Guide Contents"
              items={[
                ["#overview", "Valve Disease Overview"],
                ["#symptoms", "Symptoms"],
                ["#diagnosis", "Diagnostic Testing"],
                ["#treatments", "Treatment"],
                ["#faqs", "Patient FAQs"],
              ]}
              cta={{
                title: "Experiencing Shortness of Breath or Murmur?",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">
            {/* OVERVIEW */}
            <section
              id="overview"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What is Valvular Heart Disease?
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Your heart features four essential valves — Aortic, Mitral,
                  Tricuspid, and Pulmonary — that open and close with every
                  heartbeat to ensure blood flows strictly forward through the
                  heart chambers to the lungs and body.
                </p>
                <p>
                  Valvular heart disease develops when valves become calcified
                  and stiffened (<strong>Stenosis</strong>), preventing full
                  opening, or when valve leaflets fail to seal tightly (
                  <strong>Regurgitation / Insufficiency</strong>), allowing
                  blood to leak backward into the heart.
                </p>
              </div>

              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiologist Evaluating Heart Valves"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                Over time, untreated valve disease can strain the heart and lead to complications like heart enlargement, rhythm problems, or heart failure.
              </p>
            </section>

            {/* SYMPTOMS */}
            <section
              id="symptoms"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Symptoms of Valve Failure
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptomList.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <div
                      key={s.title}
                      className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100/80 space-y-2"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl border border-blue-100 text-blue-600">
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

            {/* DIAGNOSIS */}
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Diagnostic Tests
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Finding the right answers starts with understanding your heart. We use gentle, non-invasive imaging tests to assess how your heart valves open and close, measure blood flow, and determine the best care plan for your health.
              </p>

              <div className="divide-y divide-slate-200/80">
                {[
                  {
                    name: "Transthoracic Echocardiogram (TTE)",
                    desc: "Standard 2D/3D non-invasive ultrasound to evaluate valve anatomy, leaflet mobility, and chamber dimensions.",
                  },
                  {
                    name: "Transesophageal Echocardiogram (TEE)",
                    desc: "High-resolution specialized ultrasound via an esophageal probe, providing clear, unobstructed views of complex valve structures.",
                  },
                  {
                    name: "Cardiac CT & Calcium Scoring",
                    desc: "Detailed cross-sectional imaging evaluating aortic valve calcification and annular dimensions prior to TAVR or surgical intervention.",
                  },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[34%] lg:w-[30%] shrink-0">
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

            {/* TREATMENTS */}
            <section
              id="treatments"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Treatment
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Modern treatments include both surgery and less invasive catheter-based options for selected patients.
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
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${
                            t.badgeType === "Treatment"
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
                  The main goal is to protect heart function and quality of life by monitoring carefully and treating at the right time—not too early or too late.
                </p>
              </div>
            </section>

            {/* FAQS */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Frequently Asked Questions
                </h2>
              </div>
              <FAQAccordion items={faqs} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
