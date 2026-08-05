'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  Info,
  AlertOctagon,
  Stethoscope,
  Activity,
  ShieldCheck,
  HeartPulse,
  FileText,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function AorticAneurysmPage() {
  const faqs = [
    {
      question: 'How big does an aneurysm need to be before surgery is recommended?',
      answer:
        'For Abdominal Aortic Aneurysms (AAA), repair is typically recommended when diameter reaches 5.5 cm in men or 5.0 cm in women, or if expanding faster than 0.5 cm in 6 months. Smaller aneurysms undergo periodic surveillance with ultrasound or CT every 6-12 months.',
    },
    {
      question: 'What does an aortic aneurysm rupture feel like?',
      answer:
        'A ruptured aortic aneurysm causes sudden, severe, tearing or ripping pain in the abdomen, chest, or back, rapidly accompanied by signs of hypovolemic shock (dizziness, sweating, rapid heart rate, fainting). It requires immediate emergency surgical intervention.',
    },
    {
      question: 'What is Endovascular Aneurysm Repair (EVAR)?',
      answer:
        'EVAR is a minimally invasive procedure where a stent graft is inserted through small groin artery punctures and guided into the aorta to reinforce the weak arterial wall, shielding it from high blood pressure without open abdominal surgery.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO SECTION WITH IMAGE */}
      <div className="bg-gradient-to-br from-amber-950 via-slate-900 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=2000&q=80"
            alt="Aortic Aneurysm Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-amber-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center text-xs text-amber-300 font-bold mb-4 space-x-1.5 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <Link href="/blood-vessels" className="hover:underline">
              Vascular Conditions
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span>Aortic Aneurysm</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Aortic Aneurysm & <br />
                <span className="animated-gradient-text">Aortic Disease</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Clinical guide to Abdominal Aortic Aneurysms (AAA), Thoracic Aortic Aneurysms (TAA), CT angiographic surveillance, and Endovascular Aneurysm Repair (EVAR).
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Schedule Aortic Screening
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Aortic Scanning & Diagnostic Imaging"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 bg-white border border-amber-100 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider border-b border-amber-50 pb-3 flex items-center space-x-2">
                <FileText className="h-4 w-4 text-amber-600" />
                <span>Aortic Guide</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ['#overview', 'What is Aortic Aneurysm?'],
                  ['#surveillance', 'CT & Ultrasound Surveillance'],
                  ['#treatment', 'EVAR & Surgical Repair'],
                  ['#faqs', 'Patient FAQs'],
                ].map(([id, label]) => (
                  <a
                    key={id}
                    href={id}
                    className="hover:text-amber-600 text-slate-600 font-medium transition-colors flex items-center py-1 group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1.5 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0" />
                    <span>{label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-12">
            
            <section id="overview" className="bg-white border border-amber-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-amber-50 p-3 rounded-2xl border border-amber-100">
                  <Info className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Aortic Wall Bulging</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Understanding Aortic Aneurysms</h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  An aortic aneurysm is a localized, balloon-like bulge in the wall of the aorta — the main artery carrying blood from the heart down through the chest and abdomen. Because high arterial pressure constantly pushes against the weakened vessel wall, untreated aneurysms grow larger over time and carry a risk of catastrophic rupture.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <div className="relative h-56 rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80"
                    alt="EVAR Catheter Operating Suite"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-slate-900 text-base">Key Diagnostic Guidelines:</h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-amber-600 shrink-0" />
                      <span><strong>Abdominal Ultrasound:</strong> Recommended one-time screening for men 65-75 with smoking history.</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-amber-600 shrink-0" />
                      <span><strong>CTA Imaging:</strong> High-definition 3D aortic reconstructive scanning.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Patient Queries</span>
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
