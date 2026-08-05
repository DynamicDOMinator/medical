'use client';

import Image from 'next/image';
import { Wind, AlertTriangle, CheckCircle, ChevronRight, Info } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';

export default function PericarditisPage() {
  const faqs = [
    { question: 'How is pericarditis different from a heart attack?', answer: 'Both cause chest pain, but the character is very different. Pericarditis causes sharp, stabbing chest pain that worsens when lying flat and improves when sitting forward (leaning). Heart attack pain is typically pressure-like, crushing, radiates to the arm or jaw, and is NOT affected by position or breathing. An ECG and cardiac biomarkers help differentiate them.' },
    { question: 'Can pericarditis recur?', answer: 'Yes. Recurrent pericarditis occurs in 15–30% of patients after an initial episode. Multiple recurrences are less common but can lead to a condition called constrictive pericarditis, where scar tissue surrounds and constricts the heart. Colchicine taken for 3–6 months significantly reduces recurrence rates and is now a standard of care.' },
    { question: 'What is cardiac tamponade?', answer: 'Cardiac tamponade is a life-threatening emergency where fluid accumulates in the pericardial sac fast enough to compress the heart, preventing it from filling normally. Signs include hypotension, muffled heart sounds, and distended neck veins (Beck\'s triad). Emergency pericardiocentesis (needle drainage) is required immediately.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-20 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2000&q=80"
            alt="Pericarditis Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-teal-950/60 to-slate-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center text-xs text-teal-300 mb-3 space-x-1">
            <Link href="/heart" className="hover:underline">Heart Conditions</Link><ChevronRight className="h-3 w-3" /><span>Pericarditis</span>
          </div>
          <div className="max-w-3xl space-y-4">
            <span className="bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">Disease Guide</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">Pericarditis</h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">Inflammation of the pericardium — the fibrous two-layered sac surrounding the heart — typically causing characteristic sharp positional chest pain.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 bg-white border border-slate-200/80 rounded-2xl p-5 space-y-3 shadow-sm">
              <h3 className="font-bold text-slate-800 text-sm uppercase border-b pb-2">Guide Outline</h3>
              <nav className="flex flex-col space-y-1.5 text-sm text-slate-600">
                {[['#overview','What is Pericarditis?'],['#causes','Causes'],['#symptoms','Symptoms'],['#diagnosis','Diagnosis'],['#treatment','Treatment'],['#emergency','Emergency'],['#faqs','FAQs']].map(([id,label]) => (
                  <a key={id} href={id} className="hover:text-teal-600 flex items-center py-0.5"><ChevronRight className="h-4 w-4 mr-1 text-slate-400 shrink-0" />{label}</a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-14">
            <section id="overview" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 scroll-mt-20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-teal-50 p-2 rounded-lg"><Info className="h-6 w-6 text-teal-600" /></div>
                <h2 className="text-2xl font-bold text-slate-800">What is Pericarditis?</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">The pericardium is a two-layered sac of fibrous tissue that surrounds and protects the heart. Pericarditis occurs when this sac becomes inflamed, most commonly due to a viral infection. The inflammation causes the layers to rub against each other, producing sharp chest pain, and can lead to fluid accumulation around the heart (pericardial effusion).</p>
            </section>

            <section id="causes" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Common Causes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { cause: 'Viral (Most Common)', desc: 'Coxsackievirus, echovirus, adenovirus, and SARS-CoV-2. Responsible for ~80% of cases.', color: 'text-teal-600', bg: 'bg-teal-50' },
                  { cause: 'Bacterial / Tuberculous', desc: 'Rare in developed countries but severe when it occurs. TB pericarditis is common in endemic regions.', color: 'text-orange-600', bg: 'bg-orange-50' },
                  { cause: 'Autoimmune / Idiopathic', desc: 'Lupus, rheumatoid arthritis, post-cardiac injury syndrome (Dressler syndrome after MI or surgery).', color: 'text-violet-600', bg: 'bg-violet-50' },
                ].map(c => (
                  <div key={c.cause} className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.bg} ${c.color} uppercase`}>{c.cause}</span>
                    <p className="text-slate-600 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="symptoms" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 scroll-mt-20">
              <h2 className="text-2xl font-bold text-slate-800 mb-5">Symptoms</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { s: 'Sharp Stabbing Chest Pain', d: 'The hallmark symptom — typically left-sided, worsens when breathing deeply, lying flat, or coughing. Improves sitting forward.' },
                  { s: 'Pericardial Rub', d: 'A scratchy, leathery sound heard through a stethoscope — from inflamed pericardial layers rubbing together.' },
                  { s: 'Fever & Fatigue', d: 'Low-grade fever and malaise common in viral and bacterial pericarditis.' },
                  { s: 'Shortness of Breath', d: 'May develop if a large pericardial effusion compresses the heart (pericardial tamponade).' },
                ].map(item => (
                  <div key={item.s} className="flex items-start space-x-3 bg-slate-50 p-4 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                    <div><h4 className="font-semibold text-slate-800 text-sm">{item.s}</h4><p className="text-slate-500 text-xs mt-0.5">{item.d}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section id="diagnosis" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Diagnosis</h2>
              <div className="space-y-3">
                {[
                  { abbr: 'ECG', name: 'Electrocardiogram (ECG)', desc: 'Characteristic diffuse ST elevation in a "saddle-shaped" pattern across multiple leads is the classic ECG sign of pericarditis.' },
                  { abbr: 'ECHO', name: 'Echocardiogram', desc: 'Detects pericardial effusion (fluid) and assesses for tamponade physiology.' },
                  { abbr: 'CRP', name: 'C-Reactive Protein (CRP)', desc: 'A blood test for systemic inflammation. Elevated CRP guides treatment duration and predicts recurrence risk.' },
                  { abbr: 'MRI', name: 'Cardiac MRI', desc: 'Detects pericardial enhancement (inflammation) and fibrosis — essential for guiding therapy in recurrent pericarditis.' },
                ].map(d => (
                  <div key={d.abbr} className="bg-white border border-slate-200/80 rounded-2xl p-5 flex space-x-4">
                    <div className="bg-teal-50 text-teal-700 font-bold text-xs px-2.5 py-1.5 rounded-xl h-fit shrink-0">{d.abbr}</div>
                    <div><h4 className="font-bold text-slate-800 text-sm">{d.name}</h4><p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">{d.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section id="treatment" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 scroll-mt-20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Treatment</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: 'NSAIDs (Anti-inflammatories)', d: 'Aspirin or ibuprofen are first-line treatment to reduce pain and inflammation. Treatment typically lasts 2–4 weeks.' },
                  { t: 'Colchicine', d: 'Added to NSAIDs for 3–6 months. Dramatically reduces rates of treatment failure and recurrence (by ~50%).' },
                  { t: 'Corticosteroids', d: 'Reserved for refractory cases or autoimmune pericarditis. Risk of dependency and recurrence limits their routine use.' },
                  { t: 'Pericardiocentesis', d: 'Emergency needle drainage of pericardial fluid — performed immediately for cardiac tamponade.' },
                ].map(t => <div key={t.t} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50"><h4 className="font-bold text-slate-800 text-sm mb-1">{t.t}</h4><p className="text-slate-600 text-xs leading-relaxed">{t.d}</p></div>)}
              </div>
            </section>



            <section id="faqs" className="scroll-mt-20 space-y-6">
              <div className="text-center mb-8"><h2 className="text-2xl font-bold text-slate-800">Frequently Asked Questions</h2></div>
              <FAQAccordion items={faqs} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
