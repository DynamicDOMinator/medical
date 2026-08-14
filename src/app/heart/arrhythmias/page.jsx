'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap,
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
} from 'lucide-react';
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from '@/components/FAQAccordion';

export default function ArrhythmiasPage() {
  const faqs = [
    {
      question: 'What is Atrial Fibrillation (AFib)?',
      answer:
        'Atrial Fibrillation is the most common cardiac arrhythmia characterized by rapid, irregular electrical signals in the upper heart chambers (atria). AFib increases stroke risk 5-fold and requires stroke prevention therapy with anticoagulants.',
    },
    {
      question: 'How are heart palpitations diagnosed?',
      answer:
        'Palpitations are diagnosed using 12-lead ECG, 24–48 hour Holter monitoring, extended patch monitors (Zio patch), or implantable loop recorders to capture transient electrical rhythm disturbances during symptoms.',
    },
    {
      question: 'When is a pacemaker or ICD needed?',
      answer:
        'Pacemakers are implanted to treat symptomatic bradycardia (slow heart rate below 40 bpm). Implantable Cardioverter-Defibrillators (ICDs) are indicated for patients at risk of dangerous ventricular tachycardia or sudden cardiac arrest.',
    },
    {
      question: 'What is catheter ablation and how effective is it?',
      answer:
        'Catheter ablation uses radiofrequency or cryothermal energy delivered through a thin catheter to destroy small areas of heart tissue responsible for abnormal rhythms. For paroxysmal AFib, pulmonary vein isolation ablation achieves freedom from arrhythmia in 70–80% of patients at one year.',
    },
  ];

  const symptomList = [
    {
      title: 'Heart Palpitations & Thumping',
      desc: 'Sensation of skipped beats, fluttering, racing, or thumping feelings in the chest caused by irregular electrical firing.',
      icon: Zap,
    },
    {
      title: 'Lightheadedness & Dizziness',
      desc: 'Temporary feeling of weakness or unsteadiness caused by reduced brain perfusion during fast or slow rhythms.',
      icon: Info,
    },
    {
      title: 'Fainting Spells (Syncope)',
      desc: 'Sudden temporary loss of consciousness due to profound electrical pauses (complete heart block) or rapid rhythms.',
      icon: AlertTriangle,
    },
    {
      title: 'Shortness of Breath',
      desc: 'Dyspnea occurring during irregular rapid rhythms when heart pumping efficiency drops significantly.',
      icon: Clock,
    },
    {
      title: 'Chest Tightness or Discomfort',
      desc: 'Chest pressure or tightening occurring during rapid ventricular rhythms from reduced coronary filling time.',
      icon: HeartPulse,
    },
    {
      title: 'Fatigue & Exercise Intolerance',
      desc: 'Overwhelming tiredness during activity due to irregular or insufficient cardiac output from sustained arrhythmias.',
      icon: Activity,
    },
  ];

  const arrhythmiaTypes = [
    { name: 'Atrial Fibrillation (AFib)', desc: 'Most common arrhythmia. Chaotic, rapid atrial signals prevent organized atrial contraction and create an irregular ventricular response.' },
    { name: 'Supraventricular Tachycardia (SVT)', desc: 'Sudden onset of rapid regular rhythm originating above the ventricles. Causes sudden racing heart at 150–250 bpm.' },
    { name: 'Ventricular Tachycardia (VT)', desc: 'Fast rhythm originating in the ventricles — often in patients with structural heart disease. Can degenerate into ventricular fibrillation.' },
    { name: 'Heart Block (AV Block)', desc: 'Delayed or interrupted conduction from atria to ventricles through the AV node. Complete (3rd degree) heart block requires pacemaker.' },
    { name: 'Wolff-Parkinson-White (WPW)', desc: 'An accessory electrical pathway bypasses the AV node, enabling rapid re-entry tachycardias. Diagnosed by delta wave on ECG.' },
    { name: 'Sick Sinus Syndrome', desc: 'The sinus node fails to generate adequate impulses, causing alternating bradycardia and tachycardia (tachy-brady syndrome).' },
  ];

  const treatments = [
    {
      name: 'Antiarrhythmic Medication Therapy',
      desc: 'Rate-control (beta-blockers, calcium channel blockers) or rhythm-control medications (flecainide, amiodarone, sotalol) to stabilize heart electrical signals.',
      type: 'Medical Therapy',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Catheter Ablation (RF & Cryoablation)',
      desc: 'Minimally invasive catheter procedure that delivers thermal energy to scar tiny areas of heart tissue causing abnormal signals. Gold standard for SVT and AFib.',
      type: 'Interventional',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Permanent Pacemaker Implantation',
      desc: 'Implantation of a tiny battery-powered device under the skin to send electric impulses when the heart beats too slowly or pauses.',
      type: 'Device Therapy',
      image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Implantable Cardioverter-Defibrillator (ICD)',
      desc: 'Device that continuously monitors rhythm, delivers anti-tachycardia pacing, or a defibrillation shock to terminate ventricular fibrillation and prevent sudden death.',
      type: 'Device Therapy',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2000&q=80"
            alt="Arrhythmia Clinical Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-indigo-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Heart Rhythm & <br />
            Arrhythmias
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Arrhythmia Guide"
              accent="indigo"
              items={[
                ['#overview', 'What are Arrhythmias?'],
                ['#types', 'Types of Arrhythmias'],
                ['#symptoms', 'Symptoms & Warning Signs'],
                ['#diagnosis', 'ECG & Holter Monitor'],
                ['#ablation', 'Ablation & Pacemakers'],
                ['#faqs', 'Patient FAQs'],
              ]}
              cta={{
                title: "Experiencing Palpitations or Irregular Heartbeats?",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">

            {/* OVERVIEW */}
            <section id="overview" className="bg-white border border-indigo-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What are Cardiac Arrhythmias?</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Arrhythmias are disorders of the heart’s electrical system
                  that can cause slow, fast, or irregular heartbeats. They range
                  from harmless to potentially serious conditions.
                </p>
                <p>
                  Arrhythmias can be intermittent and difficult to detect,
                  meaning that a routine ECG may not always capture the abnormal
                  rhythm. In some cases, extended heart-rhythm monitoring may be
                  needed.
                </p>
                <p>
                  Importantly, symptoms do not always reflect the severity of an
                  arrhythmia. A serious arrhythmia may cause only mild symptoms,
                  while a less serious rhythm disturbance may feel very
                  noticeable or uncomfortable.
                </p>
              </div>

              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiologist Analyzing ECG Tracing"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Types of Cardiac Arrhythmias</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {arrhythmiaTypes.map(t => (
                  <div key={t.name} className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2">
                    <h3 className="font-bold text-slate-800 text-sm">{t.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>

              
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-indigo-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of Arrhythmias</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptomList.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <div key={s.title} className="p-5 rounded-2xl bg-indigo-50/40 border border-indigo-100/80 space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl border border-indigo-100 text-indigo-600">
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
            <section id="diagnosis" className="bg-white border border-indigo-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnostic Tests & Imaging</h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Accurate arrhythmia diagnosis combines non-invasive rhythm monitoring with advanced cardiac imaging. The following modalities are used to capture, characterize, and localize abnormal heart rhythms.
              </p>

              <div className="space-y-3">
                {[
                  { abbr: 'ECG', name: '12-Lead Electrocardiogram', desc: 'First-line diagnostic test recording the heart\'s electrical activity across 12 leads. Identifies AFib, heart block, delta waves (WPW), and ventricular rhythms in real time.' },
                  { abbr: 'HOLTER', name: '24–48 Hour Holter Monitor', desc: 'Continuous wearable ECG recorder worn for 24–48 hours to capture arrhythmias during daily activities and correlate them with patient symptoms.' },
                  { abbr: 'PATCH', name: 'Extended ECG Patch Monitor', desc: 'Adhesive ECG patches worn for 7–30 days. Ideal for detecting infrequent or paroxysmal arrhythmias not captured on standard Holter monitoring.' },
                  { abbr: 'ECHO', name: 'Echocardiogram (Cardiac Ultrasound)', desc: 'Ultrasound evaluation of cardiac structure and function — detects structural heart disease, valve abnormalities, and ventricular dysfunction driving arrhythmias.' },
                  { abbr: 'ILR', name: 'Implantable Loop Recorder', desc: 'A subcutaneous device continuously monitoring rhythm for up to 3 years. Used for unexplained syncope or cryptogenic stroke evaluation.' },
                  { abbr: 'EPS', name: 'Electrophysiology Study (EPS)', desc: 'Invasive intracardiac mapping procedure using catheters to study the heart\'s electrical pathways, induce arrhythmias, and plan targeted ablation therapy.' },
                ].map(d => (
                  <div key={d.abbr} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex space-x-4">
                    <div className="bg-indigo-100 text-indigo-700 font-bold text-xs px-2.5 py-1.5 rounded-xl h-fit shrink-0 text-center min-w-[52px]">{d.abbr}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{d.name}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ABLATION & PACEMAKERS */}
            <section id="ablation" className="bg-white border border-indigo-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Ablation, Pacemakers & ICDs</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {treatments.map((t) => (
                  <div key={t.name} className="rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-200 transition-all overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image src={t.image} alt={t.name} fill className="object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
                        <span className="bg-indigo-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{t.type}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">{t.name}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            
            </section>


            {/* FAQS */}
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
