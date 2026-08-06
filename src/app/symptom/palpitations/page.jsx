'use client';

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
  HeartPulse,
  FileText,
  Clock,
  Zap,
  Apple,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function PalpitationsPage() {
  const faqs = [
    {
      question: 'Can anxiety alone cause severe palpitations?',
      answer:
        'Yes. When you experience anxiety or panic, your sympathetic nervous system releases a surge of adrenaline. This directly triggers your sinoatrial node, causing your heart to beat faster and harder.',
    },
    {
      question: 'Are palpitations always a sign of a dangerous heart condition?',
      answer:
        'No. Most palpitations are benign and linked to caffeine, stress, dehydration, or poor sleep. However, an ECG or Holter monitor is recommended to rule out underlying arrhythmias.',
    },
    {
      question: 'What is a vagal maneuver, and how does it help?',
      answer:
        'Vagal maneuvers (such as bearing down or coughing) stimulate the vagus nerve to slow down an abnormally rapid heart rate during SVT episodes.',
    },
  ];

  const typesList = [
    {
      name: 'Premature Contractions (PVCs / PACs)',
      desc: 'Early heartbeats originating in the atria (PACs) or ventricles (PVCs) followed by a brief pause and a compensatory strong beat.',
    },
    {
      name: 'Supraventricular Tachycardia (SVT)',
      desc: 'Sudden episodes of very rapid heartbeats (150–220 bpm) originating above the ventricles, often due to an extra electrical pathway.',
    },
    {
      name: 'Atrial Fibrillation (AFib)',
      desc: 'Chaotic, rapid electrical signals in the upper chambers leading to an irregularly irregular heart rate and elevated stroke risk.',
    },
    {
      name: 'Ventricular Tachycardia (VT)',
      desc: 'Fast rhythm originating in the ventricles, often associated with structural heart disease or scar tissue. Requires immediate medical care.',
    },
  ];

  const symptoms = [
    { title: 'Skipped Beats & Pauses', desc: 'Sensation that your heart hesitated or skipped a beat, followed by a heavy thump.', icon: HeartPulse },
    { title: 'Fluttering in Chest', desc: 'Feeling like a butterfly or flip-flopping motion inside the central chest wall.', icon: Activity },
    { title: 'Rapid Pounding Pulse', desc: 'Forceful thumping felt in the chest, neck, or throat even while resting.', icon: Zap },
    { title: 'Lightheadedness & Dizziness', desc: 'Transient cerebral hypoperfusion during rapid paroxysmal arrhythmia spikes.', icon: AlertTriangle },
    { title: 'Shortness of Breath', desc: 'Breathlessness accompanying sudden palpitations as cardiac filling efficiency drops.', icon: Clock },
    { title: 'Chest Tightness', desc: 'Discomfort during prolonged tachycardia or when associated with underlying CAD.', icon: Heart },
  ];

  const treatments = [
    { name: 'Ambulatory Holter & Patch Monitoring', desc: 'Continuous 24-hr to 14-day wearable ECG recording to capture irregular rhythm episodes.', duration: '24 hr – 14 Days', recovery: 'Non-invasive', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Catheter Ablation', desc: 'Minimally invasive radiofrequency or cryo energy ablation of abnormal electrical pathways causing SVT or AFib.', duration: '1–3 Hours', recovery: '1–2 Days', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80' },
    { name: 'Anti-Arrhythmic & Beta-Blocker Drugs', desc: 'Metoprolol, Bisoprolol, or Flecainide to stabilize sinus rhythm and control heart rate spikes.', duration: 'Daily Protocol', recovery: 'Long-term Control', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80' },
    { name: 'Lifestyle & Stimulant Removal', desc: 'Caffeine reduction, stress management, hydration, and electrolyte optimization.', duration: 'Ongoing', recovery: 'Immediate Relief', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2000&q=80"
            alt="Palpitations Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center text-xs text-sky-300 font-bold mb-4 space-x-1.5 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <Link href="/symptom" className="hover:underline">Symptoms</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Palpitations</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Heart Palpitations & <br />
                <span className="animated-gradient-text">Rhythm Assessment</span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Comprehensive guide to skipped beats, chest fluttering, Holter monitor diagnostics, electrophysiology evaluation, and catheter ablation by Dr. Mohamed Faher Almahmoud.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Schedule Rhythm Consultation
                </Link>
                <a
                  href="#treatment"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <Activity className="mr-2 h-4 w-4 text-sky-300" />
                  Holter & Ablation Therapy
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Heart Rhythm Monitoring"
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
                <span>Palpitations Outline</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ['#overview', 'Overview'],
                  ['#types', 'Classifications & Types'],
                  ['#symptoms', 'Symptoms'],
                  ['#diagnosis', 'Diagnostic Testing'],
                  ['#treatment', 'Treatment & Procedures'],
                  ['#living-with', 'Living with Palpitations'],
                  ['#faqs', 'FAQs'],
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
                  <p className="text-xs font-bold text-blue-900">Skipped Beats or Fluttering?</p>
                  <p className="text-[11px] text-slate-600 mt-1">Book an ambulatory ECG Holter monitor test.</p>
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

            {/* 1. OVERVIEW (USE IMAGE) */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Heart Rhythm Sensation</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What are Heart Palpitations?</h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Heart palpitations are conscious sensations of an abnormal heartbeat — described as fluttering, pounding, racing, or skipping beats.
                </p>
                <p>
                  While many palpitations stem from benign causes like caffeine, anxiety, or fatigue, others are driven by underlying electrical arrhythmias requiring electrophysiology diagnostic workup.
                </p>
              </div>

              {/* Banner Image */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiac Rhythm Assessment"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Classifications & Rhythm Types</h2>
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
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <HeartPulse className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Clinical Presentation</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms & Sensations</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptoms.map((s) => {
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

            {/* 4. DIAGNOSIS/TEST (USE IMAGE) */}
            <section id="diagnosis" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Electrophysiology Workup</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnosis & Rhythm Testing</h2>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Capturing rhythm during symptomatic episodes is key to definitive diagnosis:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                        alt="24–48 Hr Holter Monitor"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">24–48 Hr Holter Monitor</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Continuous ECG rhythm logging during daily activity.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
                        alt="14-Day Extended Patch Monitor"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">14-Day Extended Patch Monitor</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Captures paroxysmal infrequent arrhythmias.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
                        alt="Echocardiography"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Echocardiography</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Evaluates structural valve and myocardial muscle integrity.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                        alt="Treadmill Exercise Stress Test"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Treadmill Exercise Stress Test</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Assesses catecholamine/exertion-triggered arrhythmia spikes.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. TREATMENT (PROCEDURES) (USE IMAGE) */}
            <section id="treatment" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Electrophysiology Interventions</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Treatment & Procedures</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {treatments.map((t) => (
                  <div key={t.name} className="rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image src={t.image} alt={t.name} fill className="object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-2">
                        <span className="bg-blue-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{t.duration}</span>
                        <span className="bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{t.recovery}</span>
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

            {/* 6. LIVING WITH PALPITATIONS */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Self-Management</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Living with Palpitations</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">Dietary & Stimulant Management</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Eliminate energy drinks, high-caffeine sodas, and excess coffee</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Maintain optimal hydration with water and electrolyte balance</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Avoid OTC decongestants containing pseudoephedrine</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Vagal Maneuvers & Stress Control</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Learn bearing-down vagal maneuvers for sudden fast rhythm episodes</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Practice diaphragmatic breathing and mindfulness meditation</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Seek emergency care if palpitations cause syncope or chest pain</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. FAQS */}
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
