'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function CHFPage() {
  const faqs = [
    {
      question: 'What is Congestive Heart Failure (CHF)?',
      answer:
        'CHF is a chronic progressive condition in which the heart muscle cannot pump enough blood to meet the body\'s metabolic needs (HFrEF - reduced ejection fraction) or cannot relax sufficiently to fill with blood properly (HFpEF - preserved ejection fraction).',
    },
    {
      question: 'What is Left Ventricular Ejection Fraction (LVEF)?',
      answer:
        'LVEF measures the percentage of blood pumped out of the left ventricle with each contraction. Normal LVEF is 50–70%. An LVEF below 40% indicates heart failure with reduced ejection fraction (HFrEF), which responds well to guideline-directed medications.',
    },
    {
      question: 'What are GDMT guideline-directed medical therapies for heart failure?',
      answer:
        'GDMT comprises 4 foundational pillars of medical therapy that dramatically improve survival: ARNI/ACEi/ARB (reduce cardiac workload), Beta-Blockers (protect from arrhythmias), Mineralocorticoid Receptor Antagonists (MRA) (prevent fibrosis), and SGLT2 Inhibitors (reduce hospitalizations).',
    },
    {
      question: 'Can heart failure be cured?',
      answer:
        'Heart failure is generally a chronic, progressive condition rather than a curable disease. However, with the right combination of GDMT medications, device therapy (ICD/CRT), lifestyle modifications, and sometimes LVAD or transplant, many patients achieve significant symptom improvement and near-normal quality of life.',
    },
  ];

  const symptomList = [
    {
      title: 'Shortness of Breath (Dyspnea)',
      desc: 'Breathlessness during routine exertion, lying flat (orthopnea), or waking up gasping at night (paroxysmal nocturnal dyspnea).',
      icon: Clock,
    },
    {
      title: 'Fluid Retention & Edema',
      desc: 'Rapid weight gain, leg/ankle swelling, and abdominal bloating (ascites) due to venous blood backlog and elevated venous pressure.',
      icon: Droplets,
    },
    {
      title: 'Persistent Coughing & Wheezing',
      desc: 'Cough producing white or pink blood-tinged phlegm caused by pulmonary fluid congestion in the alveoli.',
      icon: AlertTriangle,
    },
    {
      title: 'Profound Fatigue & Exercise Intolerance',
      desc: 'Feeling constantly exhausted due to reduced oxygen delivery to working skeletal muscles and tissues.',
      icon: Info,
    },
    {
      title: 'Rapid Heart Rate (Tachycardia)',
      desc: 'The heart compensates for reduced output by beating faster, causing awareness of rapid or irregular palpitations.',
      icon: HeartPulse,
    },
    {
      title: 'Reduced Urination (Oliguria)',
      desc: 'Decreased kidney perfusion due to reduced cardiac output leads to water and sodium retention.',
      icon: Activity,
    },
  ];

  const gdmtPillars = [
    {
      drug: 'ARNI / ACEi / ARB',
      example: 'Sacubitril-Valsartan, Lisinopril, Losartan',
      action: 'Reduces cardiac preload and afterload by blocking the renin-angiotensin system, preventing ventricular remodeling.',
      color: 'text-blue-700',
      bg: 'bg-blue-50',
    },
    {
      drug: 'Beta-Blockers',
      example: 'Carvedilol, Metoprolol Succinate, Bisoprolol',
      action: 'Blocks excessive adrenergic stimulation, reduces resting heart rate, prevents sudden cardiac death from arrhythmias.',
      color: 'text-indigo-700',
      bg: 'bg-indigo-50',
    },
    {
      drug: 'Mineralocorticoid Receptor Antagonists (MRA)',
      example: 'Spironolactone, Eplerenone',
      action: 'Blocks aldosterone to prevent cardiac fibrosis, reduces fluid retention, and lowers mortality in HFrEF.',
      color: 'text-purple-700',
      bg: 'bg-purple-50',
    },
    {
      drug: 'SGLT2 Inhibitors',
      example: 'Dapagliflozin, Empagliflozin',
      action: 'Reduces hospitalizations and cardiovascular death through diuretic, cardioprotective, and renal-protective mechanisms.',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50',
    },
  ];

  const procedures = [
    { title: 'ICD (Defibrillator)', desc: 'An implanted device that detects life-threatening arrhythmias and delivers a corrective shock to restore normal rhythm. Indicated for LVEF ≤35%.' },
    { title: 'CRT (Biventricular Pacemaker)', desc: 'Resynchronizes the timing of the left and right ventricles, improving pumping efficiency in patients with wide QRS bundle branch block.' },
    { title: 'LVAD (Ventricular Assist Device)', desc: 'A mechanical pump implanted to take over the work of the failing left ventricle as a bridge to transplant or permanent destination therapy.' },
    { title: 'Heart Transplantation', desc: 'For end-stage refractory heart failure, cardiac transplantation remains the definitive curative option with excellent long-term outcomes.' },
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
            <Link href="/heart" className="hover:underline">Heart Conditions</Link>
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
                Clinical management guide to Ejection Fraction (LVEF), HFrEF vs HFpEF, the 4-pillar GDMT medications, device therapy, and remote cardiac monitoring by Dr. Mohamed Faher Almahmoud.
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
                  href="#gdmt"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <Activity className="mr-2 h-4 w-4 text-sky-300" />
                  4-Pillar GDMT Therapy
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
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-blue-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">Advanced Heart Failure Clinic</p>
                    <p className="text-[11px] text-blue-600 font-semibold">GDMT Optimization & Device Therapy</p>
                  </div>
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">Specialist Care</span>
                </div>
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
                <span>CHF Guide Sections</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ['#overview', 'What is Heart Failure?'],
                  ['#symptoms', 'Symptoms & Signs'],
                  ['#diagnosis', 'Echo & Biomarkers'],
                  ['#devices', 'Device Therapy'],
                  ['#lifestyle', 'Living With CHF'],
                  ['#faqs', 'Patient FAQs'],
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
                  <p className="text-xs font-bold text-blue-900">Experiencing Breathlessness?</p>
                  <p className="text-[11px] text-slate-600 mt-1">Get an echocardiogram evaluation today.</p>
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

          <div className="lg:col-span-9 space-y-12">

            {/* OVERVIEW */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Myocardial Performance</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is Heart Failure?</h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Heart Failure (HF) does not mean the heart has stopped working; rather, it means the heart muscle is unable to pump sufficient blood volume to supply oxygen to tissues and organs. As a result, vital organs receive less oxygen and nutrients than they need.
                </p>
                <p>
                  Heart failure develops when another cardiac condition damages or overworks the heart muscle. The most common causes include coronary artery disease, high blood pressure (hypertension), past heart attacks, diabetes, and valvular heart disease.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start space-x-3">
                  <Activity className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-500"><span className="font-semibold text-slate-700">Prevalence:</span> Over 6 million Americans live with heart failure. It is the leading cause of hospitalization in adults over 65 years of age, costing the healthcare system over $30 billion annually.</p>
                </div>
              </div>

              <div className="mt-8 relative h-60 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80"
                  alt="Heart Failure Clinical Overview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 to-transparent" />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
                  <p className="text-xs uppercase tracking-wider font-bold text-sky-300">Clinical Insight</p>
                  <p className="text-sm font-bold mt-1 max-w-xs">Early GDMT initiation can reverse cardiac remodeling and improve LVEF by 10–15%.</p>
                </div>
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <HeartPulse className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Warning Signs</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of Heart Failure</h2>
                </div>
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

            {/* DIAGNOSIS */}
            <section id="diagnosis" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Diagnostic Investigations</h2>
              <div className="space-y-3">
                {[
                  { abbr: 'ECHO', name: 'Echocardiogram', desc: 'The cornerstone of HF diagnosis — directly measures ejection fraction, wall motion, valve function, and filling pressures via Doppler ultrasound.' },
                  { abbr: 'BNP', name: 'BNP / NT-proBNP Blood Test', desc: 'A biomarker hormone released by stressed heart muscle. Elevated levels strongly indicate heart failure and help assess severity and treatment response.' },
                  { abbr: 'CXR', name: 'Chest X-Ray', desc: 'Identifies cardiomegaly (enlarged heart shadow) and pulmonary congestion (butterfly wing pattern of fluid in the lungs).' },
                  { abbr: 'CATH', name: 'Right Heart Catheterization', desc: 'Measures intracardiac filling pressures directly (PCWP, PAP) — essential for guiding therapy in advanced heart failure and transplant evaluation.' },
                ].map(d => (
                  <div key={d.abbr} className="bg-white border border-slate-200/80 rounded-2xl p-5 flex space-x-4">
                    <div className="bg-blue-50 text-blue-700 font-bold text-xs px-2.5 py-1.5 rounded-xl h-fit shrink-0">{d.abbr}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{d.name}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative h-52 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
                    alt="Echocardiogram Heart Failure Diagnosis"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-52 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80"
                    alt="Cardiac Biomarker Blood Testing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* DEVICE THERAPY */}
            <section id="devices" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Device & Surgical Therapies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {procedures.map(t => (
                  <div key={t.title} className="border border-slate-100 p-5 rounded-2xl bg-white shadow-xs">
                    <h4 className="font-bold text-slate-800 text-sm mb-1.5">{t.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* LIVING WITH CHF */}
            <section id="lifestyle" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Self-Management</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Living With Heart Failure</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 p-5 rounded-2xl space-y-3">
                  <h3 className="font-bold text-slate-800 text-base">Daily Monitoring</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-500 shrink-0" /><span>Weigh yourself every morning before eating</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-500 shrink-0" /><span>Call doctor if weight increases &gt;2 lbs overnight or 5 lbs in a week</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-500 shrink-0" /><span>Monitor blood pressure and heart rate twice daily</span></li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl space-y-3">
                  <h3 className="font-bold text-slate-800 text-base">Diet & Fluid Restrictions</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-500 shrink-0" /><span>Limit sodium to under 2,000 mg per day</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-500 shrink-0" /><span>Restrict fluid to 1.5–2 liters daily if prescribed</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-500 shrink-0" /><span>Avoid alcohol — it directly weakens heart muscle</span></li>
                  </ul>
                </div>
              </div>
            </section>


            {/* FAQS */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Patient Queries</span>
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
