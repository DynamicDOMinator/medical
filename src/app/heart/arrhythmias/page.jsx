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
    { name: 'Atrial Fibrillation (AFib)', desc: 'Most common arrhythmia. Chaotic, rapid atrial signals prevent organized atrial contraction and create an irregular ventricular response.', tag: 'Most Common', color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { name: 'Supraventricular Tachycardia (SVT)', desc: 'Sudden onset of rapid regular rhythm originating above the ventricles. Causes sudden racing heart at 150–250 bpm.', tag: 'Common', color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Ventricular Tachycardia (VT)', desc: 'Fast rhythm originating in the ventricles — often in patients with structural heart disease. Can degenerate into ventricular fibrillation.', tag: 'Dangerous', color: 'text-red-600', bg: 'bg-red-50' },
    { name: 'Heart Block (AV Block)', desc: 'Delayed or interrupted conduction from atria to ventricles through the AV node. Complete (3rd degree) heart block requires pacemaker.', tag: 'Bradycardia', color: 'text-orange-600', bg: 'bg-orange-50' },
    { name: 'Wolff-Parkinson-White (WPW)', desc: 'An accessory electrical pathway bypasses the AV node, enabling rapid re-entry tachycardias. Diagnosed by delta wave on ECG.', tag: 'Congenital', color: 'text-purple-600', bg: 'bg-purple-50' },
    { name: 'Sick Sinus Syndrome', desc: 'The sinus node fails to generate adequate impulses, causing alternating bradycardia and tachycardia (tachy-brady syndrome).', tag: 'Bradycardia', color: 'text-slate-600', bg: 'bg-slate-50' },
  ];

  const treatments = [
    {
      name: 'Antiarrhythmic Medication Therapy',
      desc: 'Rate-control (beta-blockers, calcium channel blockers) or rhythm-control medications (flecainide, amiodarone, sotalol) to stabilize heart electrical signals.',
      type: 'Medical Therapy',
    },
    {
      name: 'Catheter Ablation (RF & Cryoablation)',
      desc: 'Minimally invasive catheter procedure that delivers thermal energy to scar tiny areas of heart tissue causing abnormal signals. Gold standard for SVT and AFib.',
      type: 'Interventional',
    },
    {
      name: 'Permanent Pacemaker Implantation',
      desc: 'Implantation of a tiny battery-powered device under the skin to send electric impulses when the heart beats too slowly or pauses.',
      type: 'Device Therapy',
    },
    {
      name: 'Implantable Cardioverter-Defibrillator (ICD)',
      desc: 'Device that continuously monitors rhythm, delivers anti-tachycardia pacing, or a defibrillation shock to terminate ventricular fibrillation and prevent sudden death.',
      type: 'Device Therapy',
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
          <div className="flex items-center text-xs text-sky-300 font-bold mb-4 space-x-1.5 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <Link href="/heart" className="hover:underline">Heart Conditions</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Cardiac Arrhythmias</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Heart Rhythm & <br />
                <span className="animated-gradient-text">Arrhythmias</span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Complete clinical guide to Atrial Fibrillation (AFib), Bradycardia, Tachycardia, Holter rhythm monitoring, antiarrhythmic medications, and pacemakers by Dr. Mohamed Faher Almahmoud.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-indigo-400 to-blue-500 hover:from-indigo-300 hover:to-blue-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Schedule Rhythm Evaluation
                </Link>
                <a
                  href="#ablation"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <Zap className="mr-2 h-4 w-4 text-indigo-300" />
                  Ablation & Pacemakers
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Arrhythmia ECG Diagnostics"
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
            <div className="sticky top-28 bg-white border border-indigo-100 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider border-b border-indigo-50 pb-3 flex items-center space-x-2">
                <FileText className="h-4 w-4 text-indigo-600" />
                <span>Arrhythmia Guide</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ['#overview', 'What are Arrhythmias?'],
                  ['#types', 'Types of Arrhythmias'],
                  ['#symptoms', 'Symptoms & Warning Signs'],
                  ['#diagnosis', 'ECG & Holter Monitor'],
                  ['#ablation', 'Ablation & Pacemakers'],
                  ['#afib', 'AFib & Stroke Prevention'],
                  ['#faqs', 'Patient FAQs'],
                ].map(([id, label]) => (
                  <a
                    key={id}
                    href={id}
                    className="hover:text-indigo-600 text-slate-600 font-medium transition-colors flex items-center py-1 group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1.5 text-indigo-400 group-hover:translate-x-1 transition-transform shrink-0" />
                    <span>{label}</span>
                  </a>
                ))}
              </nav>
              <div className="pt-4 border-t border-slate-100">
                <div className="bg-indigo-50/80 p-4 rounded-2xl border border-indigo-100">
                  <p className="text-xs font-bold text-indigo-900">Experiencing Palpitations?</p>
                  <p className="text-[11px] text-slate-600 mt-1">Get a Holter monitor rhythm evaluation.</p>
                  <Link
                    href="/contact"
                    className="mt-3 block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md shadow-indigo-600/20"
                  >
                    Book Evaluation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-12">

            {/* OVERVIEW */}
            <section id="overview" className="bg-white border border-indigo-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-indigo-50 p-3 rounded-2xl border border-indigo-100">
                  <Info className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Electrical Conduction</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What are Cardiac Arrhythmias?</h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Cardiac arrhythmias occur when the electrical signals that coordinate heartbeats misfire, causing the heart to beat too fast (tachycardia, &gt;100 bpm), too slow (bradycardia, &lt;60 bpm), or irregularly (atrial fibrillation). The heart's electrical system relies on a precisely timed cascade: the SA node fires, conducts through the AV node, and spreads through the His-Purkinje system to the ventricles.
                </p>
                <p>
                  When this conduction system is disrupted — by scarring, inflammation, electrolyte imbalance, or structural disease — abnormal rhythms emerge. Some arrhythmias are benign; others can be life-threatening and require urgent intervention.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <div className="relative h-56 rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                    alt="Cardiologist Analyzing ECG Tracing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-slate-900 text-base">Key Rhythm Terminology:</h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-indigo-600 shrink-0" /><span><strong>Tachycardia:</strong> Heart rate above 100 beats per minute.</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-indigo-600 shrink-0" /><span><strong>Bradycardia:</strong> Heart rate below 60 beats per minute.</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-indigo-600 shrink-0" /><span><strong>AFib:</strong> Chaotic irregular atrial signals.</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-indigo-600 shrink-0" /><span><strong>Heart Block:</strong> Delayed AV node impulse conduction.</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Types of Cardiac Arrhythmias</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {arrhythmiaTypes.map(t => (
                  <div key={t.name} className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-800 text-sm">{t.name}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${t.bg} ${t.color}`}>{t.tag}</span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 relative h-52 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80"
                  alt="Types of Cardiac Arrhythmias"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/80 to-transparent" />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white max-w-xs">
                  <p className="text-xs uppercase tracking-wider font-bold text-indigo-300">Electrophysiology Lab</p>
                  <p className="text-sm font-bold mt-1">Advanced mapping technology identifies and eliminates arrhythmia circuits.</p>
                </div>
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-indigo-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-indigo-50 p-3 rounded-2xl border border-indigo-100">
                  <HeartPulse className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Warning Signs</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of Arrhythmias</h2>
                </div>
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
            <section id="diagnosis" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">ECG & Rhythm Monitoring</h2>
              <div className="space-y-3">
                {[
                  { abbr: 'ECG', name: '12-Lead Electrocardiogram', desc: 'The first-line diagnostic test — records the electrical activity of the heart at a single point in time across 12 different leads. Identifies AFib, heart block, delta waves (WPW), and ST changes.' },
                  { abbr: 'HOLTER', name: '24–48 Hour Holter Monitor', desc: 'A wearable continuous ECG recorder worn for 24–48 hours. Captures arrhythmias occurring during daily activities and correlates them with symptoms.' },
                  { abbr: 'PATCH', name: 'Extended ECG Patch Monitor', desc: 'Adhesive ECG patches worn for 7–14 days or up to 30 days. Ideal for infrequent arrhythmias not captured on standard Holter monitoring.' },
                  { abbr: 'ILR', name: 'Implantable Loop Recorder (ILR)', desc: 'A tiny subcutaneous device implanted under the skin that continuously monitors rhythm for up to 3 years — used for unexplained syncope evaluation.' },
                  { abbr: 'EPS', name: 'Electrophysiology Study (EPS)', desc: 'An invasive intracardiac test where catheters are used to map the heart\'s electrical system, induce and analyze arrhythmias, and plan ablation therapy.' },
                ].map(d => (
                  <div key={d.abbr} className="bg-white border border-slate-200/80 rounded-2xl p-5 flex space-x-4">
                    <div className="bg-indigo-50 text-indigo-700 font-bold text-xs px-2.5 py-1.5 rounded-xl h-fit shrink-0 text-center">{d.abbr}</div>
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
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-indigo-50 p-3 rounded-2xl border border-indigo-100">
                  <Activity className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Interventional Electrophysiology</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Ablation, Pacemakers & ICDs</h2>
                </div>
              </div>

              <div className="space-y-5">
                {treatments.map((t) => (
                  <div key={t.name} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-200 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">{t.name}</h3>
                      <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full w-fit">{t.type}</span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 relative h-60 rounded-2xl overflow-hidden border border-indigo-100 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2000&q=80"
                  alt="Electrophysiology Ablation Procedure Room"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider font-extrabold text-indigo-300">Electrophysiology Suite</p>
                  <p className="text-sm font-bold">3D electroanatomical mapping for precise arrhythmia ablation targeting.</p>
                </div>
              </div>
            </section>

            {/* AFIB & STROKE PREVENTION */}
            <section id="afib" className="scroll-mt-24">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-3xl p-6 sm:p-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-white p-3 rounded-2xl border border-indigo-100">
                    <ShieldCheck className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Stroke Prevention</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">AFib & CHA₂DS₂-VASc Risk Scoring</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Atrial fibrillation creates blood stagnation in the left atrial appendage, promoting clot formation. These clots can embolize to the brain, causing disabling ischemic strokes. The CHA₂DS₂-VASc score is used to determine which AFib patients need anticoagulation therapy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { factor: 'Congestive Heart Failure', points: '1 point' },
                    { factor: 'Hypertension', points: '1 point' },
                    { factor: 'Age ≥75 years', points: '2 points' },
                    { factor: 'Diabetes Mellitus', points: '1 point' },
                    { factor: 'Prior Stroke or TIA', points: '2 points' },
                    { factor: 'Vascular Disease (CAD/PAD)', points: '1 point' },
                    { factor: 'Age 65–74 years', points: '1 point' },
                    { factor: 'Female Sex', points: '1 point' },
                  ].map(item => (
                    <div key={item.factor} className="flex items-center justify-between bg-white p-3 rounded-xl border border-indigo-100">
                      <span className="text-xs text-slate-700 font-medium">{item.factor}</span>
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-lg">{item.points}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white border border-indigo-100 p-4 rounded-2xl">
                  <p className="text-xs font-bold text-indigo-900">Anticoagulation Recommendation:</p>
                  <p className="text-sm text-slate-600 mt-1">Score ≥2 (men) or ≥3 (women): Oral anticoagulants (DOACs: Apixaban, Rivaroxaban, Dabigatran) are strongly recommended to reduce stroke risk by 60–70%.</p>
                </div>
              </div>
            </section>



            {/* FAQS */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Patient Queries</span>
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
