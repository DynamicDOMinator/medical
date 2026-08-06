'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  GitBranch,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Info,
  Stethoscope,
  Activity,
  ShieldCheck,
  Zap,
  Clock,
  HeartPulse,
  Sparkles,
  PhoneCall,
  FileText,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function PADPage() {
  const faqs = [
    {
      question: 'What is Peripheral Artery Disease (PAD)?',
      answer:
        'PAD is a circulatory condition where atherosclerotic plaque builds up in the arteries supplying blood to the legs and arms. The resulting vessel narrowing impairs circulation, causing leg muscle pain during walking (claudication).',
    },
    {
      question: 'What is the Ankle-Brachial Index (ABI) test?',
      answer:
        'The ABI is a simple, non-invasive diagnostic test that compares blood pressure measured at your ankle with blood pressure measured at your arm. An ABI ratio below 0.90 indicates arterial blockage and peripheral artery disease.',
    },
    {
      question: 'Can PAD cause critical limb ischemia if left untreated?',
      answer:
        'Yes. Severe untreated PAD can progress to Critical Limb Ischemia (CLI), characterized by severe rest pain, non-healing foot ulcers, gangrene, and high risk of limb amputation. Early interventional diagnosis is crucial.',
    },
    {
      question: 'How is PAD treated by an interventional cardiologist?',
      answer:
        'Treatment combines risk factor control (statins, antiplatelets, supervised walking exercise) with minimally invasive endovascular procedures such as balloon angioplasty, atherectomy (plaque removal), and arterial stenting.',
    },
  ];

  const symptomList = [
    {
      title: 'Intermittent Claudication',
      desc: 'Painful leg muscle cramping in calves or thighs while walking or climbing stairs that subsides with a few minutes of rest.',
      icon: Clock,
    },
    {
      title: 'Coldness in Lower Leg or Foot',
      desc: 'Distinct temperature difference where one leg or foot feels significantly colder than the other due to poor arterial supply.',
      icon: Info,
    },
    {
      title: 'Slow-Healing Foot Ulcers',
      desc: 'Sores or wounds on toes, feet, or ankles that heal very slowly or fail to heal over weeks.',
      icon: AlertTriangle,
    },
    {
      title: 'Hair Loss & Shiny Leg Skin',
      desc: 'Loss of hair on toes and lower legs along with smooth, shiny, or pale/bluish skin changes.',
      icon: Activity,
    },
    {
      title: 'Weak or Absent Leg Pulses',
      desc: 'Diminished femoral, popliteal, or pedal pulses detected by a cardiologist during physical exam.',
      icon: HeartPulse,
    },
    {
      title: 'Ischemic Rest Pain',
      desc: 'Severe burning foot pain occurring at night while lying flat, relieved by dangling the leg over the bed edge.',
      icon: Zap,
    },
  ];

  const treatments = [
    {
      name: 'Supervised Exercise Therapy (SET)',
      desc: 'Structured treadmill walking program to build collateral blood vessel pathways and increase pain-free walking distance.',
      type: 'Conservative',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Endovascular Balloon Angioplasty',
      desc: 'A tiny catheter with a balloon tip is navigated to the blocked leg artery and inflated to push plaque against arterial walls.',
      type: 'Minimally Invasive',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Directional / Laser Atherectomy',
      desc: 'Advanced catheter device gently shaves or laser-vaporizes tough calcified plaque from peripheral arterial walls.',
      type: 'Plaque Removal',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Peripheral Arterial Stenting',
      desc: 'Placement of a metallic mesh stent to scaffold narrowed leg arteries open and ensure durable long-term blood flow.',
      type: 'Revascularization',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO SECTION WITH IMAGE */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="PAD Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center text-xs text-sky-300 font-bold mb-4 space-x-1.5 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <Link href="/blood-vessels" className="hover:underline">
              Vascular Conditions
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span>PAD Guide</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Peripheral Artery <br />
                <span className="animated-gradient-text">Disease (PAD)</span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Clinical guide to leg arterial circulation, intermittent claudication, Ankle-Brachial Index (ABI) testing, and advanced endovascular revascularization.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Book Circulation Test
                </Link>
                <a
                  href="#diagnosis"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <Activity className="mr-2 h-4 w-4 text-sky-300" />
                  ABI & Vascular Mapping
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Vascular Lab Testing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 bg-white border border-blue-100 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider border-b border-blue-50 pb-3 flex items-center space-x-2">
                <FileText className="h-4 w-4 text-blue-600" />
                <span>PAD Guide Sections</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ['#overview', 'What is PAD?'],
                  ['#symptoms', 'Claudication Symptoms'],
                  ['#diagnosis', 'ABI & Duplex Testing'],
                  ['#treatments', 'Angioplasty & Stenting'],
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
                  <p className="text-xs font-bold text-blue-900">Experiencing Leg Pain While Walking?</p>
                  <p className="text-[11px] text-slate-600 mt-1">Schedule an Ankle-Brachial Index (ABI) flow test.</p>
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
            
            {/* OVERVIEW */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Arterial Blockages</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Understanding Peripheral Artery Disease</h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Peripheral Artery Disease (PAD) is a circulatory disorder in which fatty cholesterol plaques narrow the arteries that carry oxygen-rich blood to your legs, feet, and arms. Like coronary artery disease in the heart, PAD is a sign of systemic atherosclerosis.
                </p>
                <p>
                  When leg arteries become narrowed or blocked, leg muscles do not receive enough oxygenated blood during physical activity. This causes painful muscle cramping known as <strong>intermittent claudication</strong>.
                </p>
              </div>

              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80"
                  alt="Endovascular Catheter Suite"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <HeartPulse className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Clinical Warning Signs</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of PAD</h2>
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

            {/* DIAGNOSIS WITH IMAGE */}
            <section id="diagnosis" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Non-Invasive Vascular Lab</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Ankle-Brachial Index (ABI) Testing</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    The primary screening test for PAD is the <strong>Ankle-Brachial Index (ABI)</strong>. It is a quick, pain-free test comparing blood pressure in your ankles to blood pressure in your arms using Doppler ultrasound cuffs.
                  </p>
                  <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 space-y-2">
                    <h4 className="font-bold text-blue-950 text-sm">Diagnostic Modalities:</h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>Ankle-Brachial Index (ABI):</strong> Gold-standard non-invasive Doppler pressure ratio test (&lt;0.90 confirms PAD).</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>Arterial Duplex Ultrasound:</strong> Visualizes leg artery plaque occlusion and blood flow velocities.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>Toe-Brachial Index (TBI):</strong> Evaluates microvascular flow in non-compressible calcified vessels.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>CT / MR Angiography (CTA/MRA):</strong> 3D vascular arterial roadmapping prior to stenting or surgery.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-blue-200 shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                      alt="ABI Testing Consultation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* TREATMENTS */}
            <section id="treatments" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Revascularization Therapies</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Endovascular Angioplasty & Stenting</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {treatments.map((t) => (
                  <div key={t.name} className="rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image src={t.image} alt={t.name} fill className="object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
                        <span className="bg-blue-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{t.type}</span>
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
