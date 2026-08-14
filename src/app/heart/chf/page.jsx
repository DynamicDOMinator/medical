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
import GuideSidebarNav from "@/components/GuideSidebarNav";
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Congestive Heart <br />
            Failure (CHF)
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <GuideSidebarNav
              title="CHF Guide Outline"
              items={[
                ["#overview", "Overview"],
                ["#types", "Classifications & Types"],
                ["#symptoms", "Symptoms"],
                ["#diagnosis", "Diagnostic Testing"],
                ["#treatment", "Treatment & Procedures"],
                ["#living-with", "Living with CHF"],
                ["#faqs", "FAQs"],
              ]}
              cta={{
                title: "Experiencing Breathlessness?",
                desc: "Get an echocardiogram evaluation today.",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          {/* Main Sections */}
          <div className="lg:col-span-9 space-y-12">
            {/* 1. OVERVIEW (USE IMAGE) */}
            <section
              id="overview"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What is Congestive Heart Failure?
                </h2>
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
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Symptoms of Heart Failure
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

            {/* 4. DIAGNOSIS/TEST (USE IMAGE) */}
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Diagnosis & Testing
                </h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Comprehensive evaluation determines the underlying etiology and guides precise medical and device interventions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
                        alt="Echocardiogram"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Echocardiogram</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Calculates LVEF, measures chamber sizes and valve gradients.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                        alt="NT-proBNP Biomarker"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">NT-proBNP Biomarker</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Measures wall stress to diagnose fluid overload.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                        alt="Cardiac MRI / PET"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Cardiac MRI / PET</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Evaluates myocardial tissue viability and scar burden.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                        alt="12-Lead ECG & Chest X-Ray"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">12-Lead ECG & Chest X-Ray</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Assesses QRS width, LBBB, and pulmonary congestion.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. TREATMENT (PROCEDURES) (USE IMAGE) */}
            <section
              id="treatment"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Treatment & Procedures
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Living with CHF & Self-Care
                </h2>
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
