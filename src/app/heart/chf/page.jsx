"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Info,
  Stethoscope,
  Activity,
  ShieldCheck,
  Clock,
  HeartPulse,
  FileText,
  Droplets,
  Apple,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export default function CHFPage() {
  const faqs = [
    {
      question: "What is Congestive Heart Failure (CHF)?",
      answer:
        "CHF is a chronic progressive condition in which the heart muscle cannot pump enough blood to meet the body's metabolic needs (HFrEF - reduced ejection fraction) or cannot relax sufficiently to fill with blood properly (HFpEF - preserved ejection fraction).",
    },
    {
      question: "What is Left Ventricular Ejection Fraction (LVEF)?",
      answer:
        "LVEF measures the percentage of blood pumped out of the left ventricle with each contraction. Normal LVEF is 50–70%. An LVEF below 40% indicates heart failure with reduced ejection fraction (HFrEF), which responds well to guideline-directed medications.",
    },
    {
      question: "What are guideline-directed medical therapies for heart failure?",
      answer:
        "GDMT comprises 4 foundational pillars of medical therapy that dramatically improve survival: ARNI/ACEi/ARB, Beta-Blockers, MRAs, and SGLT2 Inhibitors.",
    },
    {
      question: "Can heart failure be cured?",
      answer:
        "Heart failure is generally a chronic condition, but with modern medications, device therapy (ICD/CRT), and lifestyle modifications, many patients achieve near-normal quality of life.",
    },
  ];

  const typesList = [
    {
      name: "Heart Failure with Reduced EF (HFrEF)",
      desc: "Left ventricular ejection fraction is ≤40%. The heart muscle is weakened and cannot contract with normal force.",
    },
    {
      name: "Heart Failure with Preserved EF (HFpEF)",
      desc: "Ejection fraction remains ≥50%, but heart muscle is stiff and unable to relax and fill properly during diastole.",
    },
    {
      name: "Mildly Reduced EF (HFmrEF)",
      desc: "Ejection fraction ranges between 41–49%, representing a transitional state that benefits from tailored medical therapy.",
    },
    {
      name: "Right-Sided Heart Failure",
      desc: "Right ventricle fails to effectively pump blood to the lungs, causing fluid backlog, peripheral leg edema, and liver engorgement.",
    },
  ];

  const symptomList = [
    {
      title: "Shortness of Breath (Dyspnea)",
      desc: "Breathlessness during routine exertion, lying flat (orthopnea), or waking up gasping at night.",
      icon: Clock,
    },
    {
      title: "Fluid Retention & Edema",
      desc: "Rapid weight gain, leg/ankle swelling, and abdominal bloating due to fluid accumulation.",
      icon: Droplets,
    },
    {
      title: "Persistent Coughing & Wheezing",
      desc: "Cough producing white or pink blood-tinged phlegm caused by pulmonary congestion.",
      icon: AlertTriangle,
    },
    {
      title: "Profound Fatigue & Weakness",
      desc: "Constant tiredness caused by reduced cardiac output and tissue oxygen delivery.",
      icon: Info,
    },
    {
      title: "Rapid Heart Rate (Tachycardia)",
      desc: "The heart compensates for reduced output by beating faster to maintain perfusion.",
      icon: HeartPulse,
    },
    {
      title: "Reduced Urination & Fluid Weight",
      desc: "Decreased kidney perfusion leads to sodium retention and rapid fluid buildup.",
      icon: Activity,
    },
  ];

  const treatments = [
    {
      title: "Guideline-Directed Medical Therapy (GDMT)",
      desc: "Combination of ARNI/ACEi, Beta-Blockers, MRA, and SGLT2 inhibitors to improve heart function and survival.",
      duration: "Daily Medication",
      recovery: "Long-term Management",
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: "ICD (Implantable Cardioverter Defibrillator)",
      desc: "Device that detects life-threatening ventricular arrhythmias and delivers shocks to restore normal rhythm.",
      duration: "Minor Surgery",
      recovery: "1–2 Weeks",
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: "CRT (Cardiac Resynchronization Therapy)",
      desc: "Biventricular pacemaker that resynchronizes left and right ventricular contractions.",
      duration: "1–2 Hours",
      recovery: "1 Week",
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: "Advanced Mechanical Support (LVAD / Transplant)",
      desc: "Surgical pump or organ transplantation for end-stage refractory heart failure.",
      duration: "Surgical",
      recovery: "In-patient Rehab",
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2000&q=80"
            alt="Heart Failure Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center text-xs text-sky-300 font-bold mb-4 space-x-1.5 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <Link href="/heart" className="hover:underline">
              Heart Conditions
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span>Congestive Heart Failure</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Congestive Heart <br />
                <span className="animated-gradient-text">Failure (CHF)</span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Comprehensive clinical guide to Ejection Fraction (LVEF), HFrEF vs
                HFpEF, GDMT medications, ICD/CRT device therapy, and self-management by Dr. Mohamed Faher Almahmoud.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Schedule Heart Failure Evaluation
                </Link>
                <a
                  href="#treatment"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <Activity className="mr-2 h-4 w-4 text-sky-300" />
                  Treatments & Devices
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                  alt="Heart Failure Diagnostics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 bg-white border border-blue-100 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider border-b border-blue-50 pb-3 flex items-center space-x-2">
                <FileText className="h-4 w-4 text-blue-600" />
                <span>CHF Guide Outline</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ["#overview", "Overview"],
                  ["#types", "Classifications & Types"],
                  ["#symptoms", "Symptoms"],
                  ["#diagnosis", "Diagnostic Testing"],
                  ["#treatment", "Treatment & Procedures"],
                  ["#living-with", "Living with CHF"],
                  ["#faqs", "FAQs"],
                ].map(([id, label]) => (
                  <a
                    key={id}
                    href={id}
                    className="hover:text-blue-600 text-slate-600 font-medium transition-colors flex items-center py-1 group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1.5 text-blue-400 group-hover:translate-x-1 transition-transform shrink-0" />
                    <span>{label}</span>
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-100">
                <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-100">
                  <p className="text-xs font-bold text-blue-900">
                    Experiencing Breathlessness?
                  </p>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Get an echocardiogram evaluation today.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-3 block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/20"
                  >
                    Book Evaluation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Sections */}
          <div className="lg:col-span-9 space-y-12">
            {/* 1. OVERVIEW (USE IMAGE) */}
            <section
              id="overview"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Heart Function Overview
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    What is Congestive Heart Failure?
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Congestive Heart Failure (CHF) occurs when the heart muscle becomes incapable of pumping sufficient blood to meet the body's metabolic requirements, or requires abnormally elevated filling pressures to do so.
                </p>
                <p>
                  When cardiac output drops, blood backing up into the pulmonary veins and peripheral circulation causes fluid leakage into the lungs, legs, and liver—resulting in congestion, shortness of breath, and fatigue.
                </p>
              </div>

              {/* Banner Medical Image */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiac Ultrasound Echocardiogram"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                Classifications & Types of Heart Failure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {typesList.map((t) => (
                  <div key={t.name} className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2">
                    <h3 className="font-bold text-slate-900 text-base">{t.name}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. SYMPTOMS (USE ICONS) */}
            <section
              id="symptoms"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <HeartPulse className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Clinical Signs
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Symptoms of Heart Failure
                  </h2>
                </div>
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

            {/* 4. DIAGNOSIS/TEST (USE IMAGE) */}
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Diagnostic Workup
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Diagnosis & Testing
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Comprehensive evaluation determines the underlying etiology and guides precise medical and device interventions:
                  </p>
                  <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 space-y-2">
                    <h4 className="font-bold text-blue-950 text-sm">Diagnostic Tools:</h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>Echocardiogram:</strong> Calculates LVEF, measures chamber sizes and valve gradients.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>NT-proBNP Biomarker:</strong> Measures wall stress to diagnose fluid overload.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>Cardiac MRI / PET:</strong> Evaluates myocardial tissue viability and scar burden.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-blue-200 shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                      alt="Cardiac Imaging Evaluation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 5. TREATMENT (PROCEDURES) (USE IMAGE) */}
            <section
              id="treatment"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Clinical Interventions
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Treatment & Procedures
                  </h2>
                </div>
              </div>

              <div className="space-y-5">
                {treatments.map((t) => (
                  <div key={t.title} className="rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image src={t.image} alt={t.title} fill className="object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-2">
                        <span className="bg-blue-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{t.duration}</span>
                        <span className="bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{t.recovery}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">{t.title}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. LIVING WITH CHF */}
            <section
              id="living-with"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Self-Management
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Living with CHF & Self-Care
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Droplets className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Fluid & Sodium Restriction</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Daily morning weight monitoring before eating</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Limit sodium intake to &lt;2,000 mg daily</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Report 2–3 lb weight gain in 24 hours to clinic</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">Exercise & Medication Compliance</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Take GDMT medications strictly as prescribed</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Tailored cardiac rehabilitation exercise protocol</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Avoid NSAID painkillers which trigger fluid retention</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. FAQS */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Patient Queries
                </span>
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
