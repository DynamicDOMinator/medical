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

export default function PericarditisPage() {
  const faqs = [
    {
      question: 'How is pericarditis different from a heart attack?',
      answer:
        'Both cause chest pain, but pericarditis produces sharp, stabbing pain that worsens when breathing in or lying flat and improves sitting forward. Heart attack pain is crushing, radiating, and unaffected by body position.',
    },
    {
      question: 'Can pericarditis recur?',
      answer:
        'Yes. Recurrent pericarditis occurs in 15–30% of patients after an initial episode. Colchicine added to NSAID therapy for 3–6 months reduces recurrence rates by over 50%.',
    },
    {
      question: 'What is cardiac tamponade?',
      answer:
        'Cardiac tamponade is a life-threatening emergency where fluid accumulates in the pericardial sac, compressing the heart and preventing normal diastolic filling.',
    },
  ];

  const typesList = [
    {
      name: 'Acute Viral / Idiopathic Pericarditis',
      desc: 'Sudden onset of pericardial inflammation following enterovirus, adenovirus, Coxsackie, or SARS-CoV-2 infection.',
    },
    {
      name: 'Recurrent Pericarditis',
      desc: 'Repeat episodes of pericardial inflammation occurring after a symptom-free interval, often immune-mediated.',
    },
    {
      name: 'Constrictive Pericarditis',
      desc: 'Chronic inflammation causes the pericardial sac to become thickened, fibrotic, and calcified, encasing the heart.',
    },
    {
      name: 'Cardiac Tamponade',
      desc: 'Rapid accumulation of pericardial effusion causing hemodynamic collapse and requiring urgent pericardiocentesis.',
    },
  ];

  const symptomList = [
    {
      title: 'Sharp Positional Chest Pain',
      desc: 'Classic stabbing pain behind sternum that worsens lying flat or breathing in, and improves sitting forward.',
      icon: Heart,
    },
    {
      title: 'Pericardial Friction Rub',
      desc: 'Scratchy, high-pitched sound heard on cardiac auscultation caused by inflamed pericardial layers rubbing together.',
      icon: Stethoscope,
    },
    {
      title: 'Low-Grade Fever & Malaise',
      desc: 'Systemic inflammatory response with body aches, fatigue, and low-grade fever.',
      icon: Info,
    },
    {
      title: 'Shortness of Breath (Dyspnea)',
      desc: 'Breathlessness caused by splinting shallow breaths to avoid sharp chest discomfort.',
      icon: Clock,
    },
    {
      title: 'Heart Palpitations',
      desc: 'Rapid or irregular heartbeats from secondary atrial inflammation or pericardial effusion.',
      icon: HeartPulse,
    },
    {
      title: 'Hypotension & Distended Neck Veins',
      desc: 'Classic signs of pericardial tamponade requiring urgent clinical intervention.',
      icon: AlertTriangle,
    },
  ];

  const treatments = [
    {
      name: 'High-Dose NSAIDs + Colchicine',
      desc: 'First-line anti-inflammatory therapy (Ibuprofen/Aspirin) combined with Colchicine for 3 months to prevent recurrence.',
      duration: '3–6 Months',
      recovery: 'Outpatient Care',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Pericardiocentesis',
      desc: 'Echocardiogram-guided needle drainage of pericardial fluid to relieve cardiac tamponade.',
      duration: '30 Mins',
      recovery: 'Immediate Relief',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Interleukin-1 Blockers (Anakinra / Rilonacept)',
      desc: 'Targeted biologic therapy for refractory, corticosteroids-dependent recurrent pericarditis.',
      duration: 'Subcutaneous Injections',
      recovery: 'Long-term Protection',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Pericardiectomy',
      desc: 'Surgical decortication and removal of the fibrotic pericardium for severe constrictive pericarditis.',
      duration: 'Surgical',
      recovery: 'In-patient Rehab',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2000&q=80"
            alt="Pericarditis Background"
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
            <span>Pericarditis</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Pericarditis & <br />
                <span className="animated-gradient-text">Pericardial Sac Care</span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Detailed guide to sharp positional chest pain, pericardial friction rub, echocardiographic fluid detection, anti-inflammatory treatment, and pericardiocentesis by Dr. Mohamed Faher Almahmoud.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Schedule Evaluation
                </Link>
                <a
                  href="#treatment"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <Activity className="mr-2 h-4 w-4 text-sky-300" />
                  Treatments & Drainage
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                  alt="Pericarditis Clinical Evaluation"
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
                <span>Pericarditis Outline</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ['#overview', 'Overview'],
                  ['#types', 'Classifications & Types'],
                  ['#symptoms', 'Symptoms'],
                  ['#diagnosis', 'Diagnostic Testing'],
                  ['#treatment', 'Treatment & Procedures'],
                  ['#living-with', 'Living with Pericarditis'],
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
                  <p className="text-xs font-bold text-blue-900">Sharp Positional Chest Pain?</p>
                  <p className="text-[11px] text-slate-600 mt-1">Get an ECG and echocardiogram evaluation.</p>
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
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Pericardial Inflammation</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is Pericarditis?</h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Pericarditis is an inflammation of the pericardium—the double-layered fibrous sac surrounding the heart that contains a small amount of lubricating pericardial fluid.
                </p>
                <p>
                  When inflamed, the two layers rub against each other like sandpaper, causing intense, sharp chest pain that typically worsens when lying flat or taking a deep breath and improves sitting forward.
                </p>
              </div>

              {/* Banner Image */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiac Pericardial Imaging"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Classifications & Types of Pericarditis</h2>
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
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Clinical Warning Signs</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of Pericarditis</h2>
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

            {/* 4. DIAGNOSIS/TEST (USE IMAGE) */}
            <section id="diagnosis" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Diagnostic Workup</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnosis & Testing</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Confirmation relies on clinical criteria (at least 2 out of 4: sharp positional pain, friction rub, ECG ST elevation, pericardial effusion):
                  </p>
                  <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 space-y-2">
                    <h4 className="font-bold text-blue-950 text-sm">Diagnostic Tools:</h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>ECG:</strong> Widespread concave ST elevation and PR segment depression.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>Echocardiography:</strong> Assesses presence and size of pericardial fluid effusion.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>Cardiac MRI:</strong> Evaluates active pericardial inflammation and thickening.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-blue-200 shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                      alt="Cardiac Pericarditis Evaluation"
                      fill
                      className="object-cover"
                    />
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
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Clinical Management</span>
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

            {/* 6. LIVING WITH PERICARDITIS */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Recovery & Self-Care</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Living with Pericarditis</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Rest & Physical Activity Restriction</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Strict restriction of exercise until symptoms and CRP normalize</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Athletes must refrain from competition for 3 months minimum</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Avoid heavy physical exertion during active inflammation</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">Medication Adherence</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Complete full 3-month course of Colchicine even if pain subsides</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Take NSAIDs with stomach protection (proton pump inhibitors)</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Monitor CRP blood levels regularly before tapering therapy</span></li>
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
