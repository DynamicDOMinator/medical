'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Info,
  Stethoscope,
  Activity,
  ShieldCheck,
  HeartPulse,
  FileText,
  Heart,
  Brain,
  Eye,
  Zap,
  Apple,
} from 'lucide-react';
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from '@/components/FAQAccordion';

export default function HypertensionPage() {
  const faqs = [
    {
      question: 'Why is Hypertension called the Silent Killer?',
      answer:
        'Hypertension (high blood pressure) typically produces no noticeable symptoms for years while silently damaging arterial walls, heart muscle, kidneys, and brain vessels. Most patients feel perfectly fine until a major event like a heart attack or stroke occurs.',
    },
    {
      question: 'What is the difference between Primary and Secondary Hypertension?',
      answer:
        'Primary (essential) hypertension accounts for 90–95% of cases and develops gradually over time due to genetics, diet, and lifestyle. Secondary hypertension is triggered by an underlying medical condition, such as renal artery stenosis, sleep apnea, or adrenal gland tumors.',
    },
    {
      question: 'What blood pressure readings define stage 1 and stage 2 hypertension?',
      answer:
        'Normal blood pressure is under 120/80 mmHg. Elevated: 120–129/under 80. Stage 1 Hypertension: systolic 130–139 or diastolic 80–89 mmHg. Stage 2 Hypertension: systolic ≥140 or diastolic ≥90 mmHg. Hypertensive crisis: systolic >180 or diastolic >120 mmHg.',
    },
    {
      question: 'What is the DASH diet and how does it help blood pressure?',
      answer:
        'The DASH (Dietary Approaches to Stop Hypertension) diet emphasizes fruits, vegetables, whole grains, lean protein, and low-fat dairy while restricting sodium, saturated fat, and red meat. Studies show DASH diet alone reduces systolic blood pressure by 8–14 mmHg.',
    },
  ];

  const mainTypes = [
    {
      name: 'Primary (Essential) Hypertension',
      desc: 'Develops slowly over time with no single clear cause; linked to age, genetics, and lifestyle.',
    },
    {
      name: 'Secondary Hypertension',
      desc: 'Caused by another medical condition, such as kidney disease, sleep apnea, or thyroid/hormone imbalances.',
    },
  ];

  const specificSubtypes = [
    {
      name: 'Resistant Hypertension',
      desc: 'Blood pressure stays higher than normal even when you take three or more different blood pressure medicines.',
    },
    {
      name: 'Isolated Systolic Hypertension',
      desc: 'Only the top number (systolic pressure) is high while the bottom number remains normal; very common in older adults.',
    },
  ];

  const symptomList = [
    {
      title: 'Severe Headaches',
      desc: 'Occipital headaches occurring upon waking up in the morning when BP reaches peak elevation.',
      icon: Brain,
    },
    {
      title: 'Shortness of Breath',
      desc: 'Breathlessness during exertion due to increased left ventricular afterload and elevated pulmonary filling pressures.',
      icon: Activity,
    },
    {
      title: 'Chest Pain or Tightness',
      desc: 'Angina caused by left ventricular hypertrophy and increased myocardial oxygen demand.',
      icon: Heart,
    },
    {
      title: 'Visual Disturbances & Blurring',
      desc: 'Retinal microvascular damage, hemorrhages, or papilledema during severe hypertensive surges.',
      icon: Eye,
    },
    {
      title: 'Dizziness & Vertigo',
      desc: 'Transient cerebral hypoperfusion or sudden spikes causing lightheadedness and instability.',
      icon: Zap,
    },
    {
      title: 'Palpitations & Bounding Pulse',
      desc: 'Feeling rapid, thumping, or forceful heartbeats in chest, neck, or ears.',
      icon: HeartPulse,
    },
  ];

  const diagnosticTests = [
    {
      name: '24-Hour Ambulatory BP Monitoring',
      desc: 'Eliminates white-coat hypertension and records nocturnal dipping patterns to evaluate true 24-hour vascular load.',
    },
    {
      name: 'Echocardiography',
      desc: 'Assesses left ventricular wall thickness, hypertrophy (LVH), and diastolic relaxation impaired by chronic high pressure.',
    },
    {
      name: 'Renal Duplex Ultrasound',
      desc: 'High-resolution vascular Doppler evaluating renal artery blood flow to screen for renal artery stenosis.',
    },
    {
      name: 'Renal & Endocrine Biomarkers',
      desc: 'Comprehensive blood and urine testing (eGFR, Creatinine, Urine Albumin, Aldosterone-to-Renin ratio) to assess organ impact.',
    },
  ];

  const treatments = [
    {
      name: 'Medicine',
      badgeType: 'Treatment',
      desc: 'Guideline-directed antihypertensive medications (such as ACE inhibitors, ARBs, calcium channel blockers, and diuretics) tailored to lower arterial pressure and protect your heart, kidneys, and brain.',
    },
    {
      name: 'Interventional therapy / Catheter Procedure',
      badgeType: 'Procedure',
      desc: 'Minimally invasive catheter-based procedures (such as renal denervation) designed to treat resistant or difficult-to-control hypertension by targeting overactive renal sympathetic nerves.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hypertension & <br />
            Arterial Stress
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Sticky Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Hypertension Outline"
              items={[
                ['#overview', 'Overview'],
                ['#types', 'Classifications & Types'],
                ['#symptoms', 'Symptoms'],
                ['#diagnosis', 'Diagnostic Testing'],
                ['#treatment', 'Treatment'],
                ['#living-with', 'Living with Hypertension'],
                ['#faqs', 'FAQs'],
              ]}
              cta={{
                title: "Experiencing High Blood Pressure or Headaches?",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">

            {/* 1. OVERVIEW (USE IMAGE) */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is Hypertension?</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Hypertension occurs when blood exerts chronically elevated pressure against arterial walls as it flows through your body. Over time, high pressure weakens vessel linings, accelerates plaque accumulation (atherosclerosis), and forces the heart muscle to pump significantly harder against increased systemic resistance.
                </p>
                <p>
                  Worldwide, hypertension affects over 1.28 billion adults — yet only about 42% of those diagnosed are adequately controlled. It remains the single most important preventable risk factor for cardiovascular disease, stroke, and kidney failure.
                </p>
              </div>

              {/* Banner Image */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiologist Blood Pressure Consultation"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section
              id="types"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Classifications & Types of Hypertension
                </h2>
              </div>

              <div className="divide-y divide-slate-200/80">
                {mainTypes.map((t) => (
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

              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                  Specific Subtypes and Situations
                </h3>
                <div className="divide-y divide-slate-200/80">
                  {specificSubtypes.map((t) => (
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
              </div>

              {/* Note Callout */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Risk depends on more than the blood pressure number. Cholesterol, diabetes, smoking, kidney function, age, family history, and evidence of existing cardiovascular disease all influence the overall risk.
                </p>
              </div>
            </section>

            {/* 3. SYMPTOMS (USE ICONS) */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of High Blood Pressure</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptomList.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <div key={s.title} className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100/80 hover:bg-blue-50 transition-colors space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl border border-blue-100 text-blue-600 shadow-2xs">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base">{s.title}</h3>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-1">{s.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 4. DIAGNOSIS/TEST */}
            <section id="diagnosis" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnostic Testing</h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Blood pressure changes over time and one reading does not always tell the whole story. We combine comprehensive monitoring with targeted tests to identify root causes and evaluate cardiovascular impact.
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

            {/* 5. TREATMENT */}
            <section id="treatment" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Treatment</h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Hypertension care is about understanding your overall cardiovascular risk and controlling blood pressure in a way that is effective, sustainable, and protective of the heart, brain, kidneys, and vascular system.
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
            </section>

            {/* 6. LIVING WITH HYPERTENSION */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Living with Hypertension</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Diet & Lifestyle</h4>
                  </div>
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    <li className="flex items-start space-x-2.5"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Follow a heart-healthy diet rich in fruits, vegetables, and whole grains</span></li>
                    <li className="flex items-start space-x-2.5"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Limit dietary sodium and avoid ultra-processed foods</span></li>
                    <li className="flex items-start space-x-2.5"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Engage in regular physical activity such as brisk walking or swimming</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Daily Management & Monitoring</h4>
                  </div>
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    <li className="flex items-start space-x-2.5"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Keep a daily log of home blood pressure readings to track trends</span></li>
                    <li className="flex items-start space-x-2.5"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Take all prescribed blood pressure medications consistently</span></li>
                    <li className="flex items-start space-x-2.5"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Manage stress, prioritize quality sleep, and attend routine checkups</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. FAQS */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
              </div>
              <FAQAccordion items={faqs} />
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
