'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Activity, CheckCircle, AlertTriangle, ChevronRight, Info } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';

export default function HeartFailurePage() {
  const [activeTab, setActiveTab] = useState('conservative');
  const faqs = [
    { question: 'Can heart failure be cured?', answer: 'Heart failure is generally a chronic, progressive condition rather than a curable disease. However, with the right combination of medications, lifestyle modifications, and sometimes devices or surgery, many patients can achieve significant symptom improvement and a near-normal quality of life. Identifying and treating the underlying cause (e.g., CAD, high blood pressure) is critical.' },
    { question: 'What is ejection fraction and why does it matter?', answer: 'Ejection fraction (EF) is the percentage of blood the left ventricle pumps out with each heartbeat. A normal EF is 55–70%. In heart failure with reduced EF (HFrEF), the heart pumps weakly (EF below 40%). In heart failure with preserved EF (HFpEF), the heart contracts normally but the muscle is stiff. EF guides treatment choices.' },
    { question: 'Is swelling in my legs always related to heart failure?', answer: 'Leg swelling (edema) can result from heart failure, but also from kidney disease, venous insufficiency, lymphedema, certain medications, or prolonged inactivity. When it is from heart failure, it is usually bilateral (both legs), worsens during the day, and is accompanied by breathlessness or fatigue. A cardiologist can distinguish the cause with proper examination and testing.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-gradient-to-br from-orange-950 via-slate-900 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-20 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="Heart Failure Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-orange-950/60 to-slate-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center text-xs text-orange-300 mb-3 space-x-1">
            <Link href="/heart" className="hover:underline">Heart Conditions</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Heart Failure</span>
          </div>
          <div className="max-w-3xl space-y-4">
            <span className="bg-orange-500/25 border border-orange-500/40 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">Disease Guide</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Heart Failure</h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">A comprehensive guide to understanding why the heart loses pumping power, how it is classified, and how to manage this chronic condition.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 bg-white border border-slate-200/80 rounded-2xl p-5 space-y-3 shadow-sm">
              <h3 className="font-bold text-slate-800 text-sm uppercase border-b pb-2">Guide Outline</h3>
              <nav className="flex flex-col space-y-1.5 text-sm text-slate-600">
                {['#overview','#symptoms','#diagnosis','#treatments','#living-with','#emergency','#faqs'].map((id, i) => (
                  <a key={id} href={id} className="hover:text-orange-600 flex items-center py-0.5">
                    <ChevronRight className="h-4 w-4 mr-1 text-slate-400 shrink-0" />
                    {['What is Heart Failure?','Symptoms','Diagnosis','Treatment','Living With HF','Emergency Signs','FAQs'][i]}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-14">
            <section id="overview" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 scroll-mt-20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-orange-50 p-2 rounded-lg"><Info className="h-6 w-6 text-orange-600" /></div>
                <h2 className="text-2xl font-bold text-slate-800">What is Heart Failure?</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>Heart failure (HF) does not mean the heart has stopped — it means the heart muscle has become too weak or too stiff to pump blood effectively throughout the body. As a result, vital organs and tissues receive less oxygen and nutrients than they need.</p>
                <p>Heart failure develops when another heart condition damages or overworks the cardiac muscle. The most common causes include coronary artery disease, high blood pressure (hypertension), past heart attacks, and valvular disease.</p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start space-x-3">
                  <Activity className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-500"><span className="font-semibold text-slate-700">Prevalence:</span> Over 6 million Americans live with heart failure. It is the leading cause of hospitalization in adults over 65 years of age.</p>
                </div>
              </div>
            </section>

            <section id="symptoms" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 scroll-mt-20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Symptoms of Heart Failure</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Shortness of Breath (Dyspnea)', desc: 'Occurs at rest or during minimal activity; worsens when lying flat (orthopnea).' },
                  { title: 'Ankle & Leg Swelling (Edema)', desc: 'Fluid retention causes pitting edema, typically worse in the evenings.' },
                  { title: 'Rapid Weight Gain', desc: 'Sudden weight gain of 2–3 lbs in a day or 5 lbs in a week signals fluid buildup.' },
                  { title: 'Persistent Fatigue', desc: 'Overwhelming tiredness even during light activity due to poor cardiac output.' },
                  { title: 'Nighttime Coughing', desc: 'Lying down redistributes fluid to the lungs, triggering coughing or wheezing.' },
                  { title: 'Reduced Exercise Tolerance', desc: 'Inability to perform activities that were previously well-tolerated.' },
                ].map(s => (
                  <div key={s.title} className="flex items-start space-x-3 bg-slate-50 p-4 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">{s.title}</h4>
                      <p className="text-slate-500 text-xs mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="diagnosis" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Diagnostic Investigations</h2>
              <div className="space-y-3">
                {[
                  { abbr: 'BNP', name: 'BNP / NT-proBNP Blood Test', desc: 'A hormone released by stressed heart muscle. Elevated levels strongly indicate heart failure and help assess severity.' },
                  { abbr: 'ECHO', name: 'Echocardiogram', desc: 'The cornerstone of HF diagnosis — directly measures ejection fraction, wall motion, and valve function via ultrasound.' },
                  { abbr: 'CXR', name: 'Chest X-Ray', desc: 'Identifies cardiomegaly (enlarged heart) and pulmonary congestion (fluid in the lungs).' },
                  { abbr: 'CATH', name: 'Cardiac Catheterization', desc: 'Measures pressures inside the heart and identifies coronary blockages that may be driving heart failure.' },
                ].map(d => (
                  <div key={d.abbr} className="bg-white border border-slate-200/80 rounded-2xl p-5 flex space-x-4">
                    <div className="bg-orange-50 text-orange-700 font-bold text-xs px-2.5 py-1.5 rounded-xl h-fit shrink-0">{d.abbr}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{d.name}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="treatments" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 scroll-mt-20">
              <div className="flex items-center justify-between border-b pb-4 mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Treatment Pathways</h2>
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  {['conservative','procedures'].map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all capitalize ${activeTab === tab ? 'bg-white text-orange-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>{tab}</button>
                  ))}
                </div>
              </div>
              {activeTab === 'conservative' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Guideline-Directed Medications', desc: 'ACE inhibitors, ARBs, beta-blockers, aldosterone antagonists, and SGLT2 inhibitors (the "4 pillars" of HFrEF therapy).' },
                    { title: 'Sodium & Fluid Restriction', desc: 'Limiting daily sodium to under 2g and monitoring fluid intake prevents dangerous fluid overload episodes.' },
                    { title: 'Diuretics (Water Pills)', desc: 'Furosemide and other loop diuretics flush excess fluid from the body, relieving breathlessness and leg swelling.' },
                    { title: 'Cardiac Rehabilitation', desc: 'Supervised exercise programs improve functional capacity, reduce hospitalizations, and improve quality of life.' },
                  ].map(t => (
                    <div key={t.title} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50">
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{t.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'ICD (Defibrillator)', desc: 'An implanted device that detects life-threatening arrhythmias and delivers a corrective shock to restore normal rhythm.' },
                    { title: 'CRT (Biventricular Pacemaker)', desc: 'Resynchronizes the timing of the left and right ventricles, improving pumping efficiency in patients with bundle branch block.' },
                    { title: 'LVAD (Ventricular Assist Device)', desc: 'A mechanical pump implanted to take over the work of the failing left ventricle as a bridge to transplant or destination therapy.' },
                    { title: 'Heart Transplantation', desc: 'For end-stage refractory heart failure, cardiac transplantation remains the definitive curative option.' },
                  ].map(t => (
                    <div key={t.title} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50">
                      <h4 className="font-bold text-slate-800 text-sm mb-1">{t.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section id="living-with" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Living With Heart Failure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-3">
                  <h3 className="font-bold text-slate-850 text-lg">Diet Recommendations</h3>
                  <ul className="text-slate-600 text-xs sm:text-sm space-y-2 list-disc pl-4">
                    <li>Limit sodium to <strong>under 2,000 mg/day</strong> to prevent fluid retention.</li>
                    <li>Monitor daily fluid intake — typically 1.5–2 liters total per day.</li>
                    <li>Eat small, frequent meals to reduce cardiac workload after eating.</li>
                    <li>Reduce alcohol — it directly weakens the heart muscle.</li>
                  </ul>
                </div>
                <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-3">
                  <h3 className="font-bold text-slate-850 text-lg">Can I Exercise?</h3>
                  <p className="text-slate-600 text-xs sm:text-sm"><span className="text-emerald-600 font-bold">Yes, carefully.</span> Regular light exercise (walking, cycling) is beneficial and improves quality of life. Exercise must be physician-approved and done within your tolerance. Stop immediately if you feel chest pain, severe breathlessness, or dizziness.</p>
                </div>
              </div>
            </section>



            <section id="faqs" className="scroll-mt-20 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Frequently Asked Questions</h2>
              </div>
              <FAQAccordion items={faqs} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
