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
import GuideSidebarNav from "@/components/GuideSidebarNav";
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

  const diagnosticTests = [
    {
      name: "Ankle-Brachial Index (ABI)",
      desc: "Compares blood pressure readings between your ankles and arms; a score below 0.9 points to PAD.",
    },
    {
      name: "Exercise ABI Test",
      desc: "Measures blood pressure changes before and after walking on a treadmill.",
    },
    {
      name: "Doppler Ultrasound",
      desc: "Uses sound waves to view blood flow and spot blocked vessels.",
    },
    {
      name: "Angiography",
      desc: "Uses specialized imaging and contrast dye to map out exact blockages in the arteries.",
    },
  ];

  const treatments = [
    {
      name: 'Supervised Exercise Therapy (SET)',
      desc: 'Structured treadmill walking program to build collateral blood vessel pathways and increase pain-free walking distance.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Endovascular Balloon Angioplasty',
      desc: 'A tiny catheter with a balloon tip is navigated to the blocked leg artery and inflated to push plaque against arterial walls.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Directional / Laser Atherectomy',
      desc: 'Advanced catheter device gently shaves or laser-vaporizes tough calcified plaque from peripheral arterial walls.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Peripheral Arterial Stenting',
      desc: 'Placement of a metallic mesh stent to scaffold narrowed leg arteries open and ensure durable long-term blood flow.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Peripheral Artery <br />
            Disease (PAD)
          </h1>
        </div>
      </div>

      {/* 2. MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="PAD Guide Sections"
              items={[
                ['#overview', 'Overview'],
                ['#symptoms', 'Symptoms'],
                ['#diagnosis', 'Diagnosis'],
                ['#treatment', 'Treatment'],
                ['#faqs', 'Patient FAQs'],
              ]}
              cta={{
                title: "Experiencing Leg Pain or Cramping While Walking?",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          {/* Main Sections */}
          <div className="lg:col-span-9 space-y-12">
            
            {/* OVERVIEW */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Understanding Peripheral Artery Disease</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Peripheral artery disease (PAD) is more than a circulation problem in the legs—it is a manifestation of systemic atherosclerosis. The same disease process that affects the arteries of the legs can also affect the heart and brain, which is why PAD is an important marker of overall cardiovascular risk.
                </p>
              </div>

              <div className="mt-8 relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-white">
                <Image
                  src="/images/pad-overview-illustration.jpg"
                  alt="Peripheral Artery Disease (PAD) Overview Illustration"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-8 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Progressive PAD can reduce walking ability, physical activity, strength, and mobility, sometimes leading to significant disability.
                </p>
                <p>
                  Advanced PAD can threaten the limb. Severe disease may cause rest pain, nonhealing wounds, ulcers, or gangrene and can ultimately result in amputation.
                </p>
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of PAD</h2>
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
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Diagnosis
                </h2>
              </div>

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

            {/* TREATMENT */}
            <section
              id="treatment"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Treatment
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Treatment for peripheral artery disease (PAD) focuses on improving blood flow, relieving symptoms, protecting your legs, and reducing the risk of heart attack and stroke. The right approach depends on the severity of the disease, your symptoms, and your overall health.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {treatments.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all overflow-hidden"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">
                        {t.name}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Our goal is to choose the least invasive treatment that can safely improve your circulation and help you stay active.
                </p>
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
