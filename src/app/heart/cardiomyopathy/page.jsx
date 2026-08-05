'use client';

import Image from 'next/image';
import { Shield, AlertTriangle, CheckCircle, ChevronRight, Info } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';

export default function CardiomyopathyPage() {
  const faqs = [
    { question: 'What is the most common type of cardiomyopathy?', answer: 'Dilated cardiomyopathy (DCM) is the most common type, accounting for roughly 60% of all cases. In DCM, the left ventricle becomes enlarged (dilated) and weakened, reducing its ability to pump blood effectively. It can be caused by genetic mutations, viral infections, alcohol abuse, or certain chemotherapy drugs.' },
    { question: 'Is cardiomyopathy hereditary?', answer: 'Yes, genetic forms are common — especially hypertrophic cardiomyopathy (HCM), which is the most common inherited cardiac condition (affecting 1 in 500 people). First-degree relatives of a patient diagnosed with any inherited cardiomyopathy should be offered genetic counseling and cardiac screening. Mutations in sarcomere protein genes are the most frequently identified cause of HCM.' },
    { question: 'Can athletes develop cardiomyopathy?', answer: 'Yes. Hypertrophic cardiomyopathy is the leading cause of sudden cardiac death in young competitive athletes. Additionally, extreme endurance training can rarely cause "arrhythmogenic cardiomyopathy" in genetically susceptible individuals. All young athletes should ideally undergo pre-participation cardiovascular screening with ECG and echocardiography.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-20 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=2000&q=80"
            alt="Cardiomyopathy Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-indigo-950/60 to-slate-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center text-xs text-indigo-300 mb-3 space-x-1">
            <Link href="/heart" className="hover:underline">Heart Conditions</Link><ChevronRight className="h-3 w-3" /><span>Cardiomyopathy</span>
          </div>
          <div className="max-w-3xl space-y-4">
            <span className="bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">Disease Guide</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold">Cardiomyopathy</h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">A disease of the heart muscle itself — causing the myocardium to become enlarged, thickened, or rigid and impairing its pumping ability.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 bg-white border border-slate-200/80 rounded-2xl p-5 space-y-3 shadow-sm">
              <h3 className="font-bold text-slate-800 text-sm uppercase border-b pb-2">Guide Outline</h3>
              <nav className="flex flex-col space-y-1.5 text-sm text-slate-600">
                {[['#overview','What is Cardiomyopathy?'],['#types','Types'],['#symptoms','Symptoms'],['#diagnosis','Diagnosis'],['#treatment','Treatment'],['#emergency','Emergency'],['#faqs','FAQs']].map(([id,label]) => (
                  <a key={id} href={id} className="hover:text-indigo-600 flex items-center py-0.5"><ChevronRight className="h-4 w-4 mr-1 text-slate-400 shrink-0" />{label}</a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-14">
            <section id="overview" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 scroll-mt-20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-indigo-50 p-2 rounded-lg"><Info className="h-6 w-6 text-indigo-600" /></div>
                <h2 className="text-2xl font-bold text-slate-800">What is Cardiomyopathy?</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Cardiomyopathy is a group of diseases that directly affect the heart muscle (myocardium), making it harder for the heart to pump blood to the rest of the body. Unlike CAD (where narrowed arteries cause problems), cardiomyopathy is intrinsic to the muscle itself — often genetic or caused by toxins, viruses, or metabolic disorders. It can lead to heart failure, arrhythmias, and sudden cardiac death.</p>
            </section>

            <section id="types" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Types of Cardiomyopathy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { name: 'Dilated Cardiomyopathy (DCM)', desc: 'Most common type. Left ventricle becomes enlarged and weak. Causes: genetic, viral, alcohol, chemotherapy.', tag: 'Most Common', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                  { name: 'Hypertrophic Cardiomyopathy (HCM)', desc: 'Heart muscle thickens abnormally — most often the interventricular septum. Most common inherited cardiac disease.', tag: 'Inherited', color: 'text-purple-600', bg: 'bg-purple-50' },
                  { name: 'Restrictive Cardiomyopathy', desc: 'Heart muscle becomes stiff and rigid, impairing ventricular filling. Associated with amyloidosis and sarcoidosis.', tag: 'Rare', color: 'text-violet-600', bg: 'bg-violet-50' },
                  { name: 'Arrhythmogenic Cardiomyopathy (ACM)', desc: 'Fatty or fibrous tissue replaces ventricular muscle, predisposing to dangerous arrhythmias — especially in athletes.', tag: 'Genetic', color: 'text-blue-600', bg: 'bg-blue-50' },
                ].map(t => (
                  <div key={t.name} className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-800 text-sm">{t.name}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${t.bg} ${t.color}`}>{t.tag}</span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="symptoms" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 scroll-mt-20">
              <h2 className="text-2xl font-bold text-slate-800 mb-5">Symptoms</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { s: 'Breathlessness', d: 'Even with light exertion or at rest as the weakened heart fails to meet oxygen demands.' },
                  { s: 'Chest Pain or Pressure', d: 'Especially with HCM where obstruction occurs in the outflow tract during exercise.' },
                  { s: 'Heart Palpitations', d: 'Rapid or irregular heartbeat from arrhythmias generated by the abnormal muscle.' },
                  { s: 'Syncope', d: 'Fainting, particularly during exercise in HCM — a red flag requiring immediate evaluation.' },
                  { s: 'Leg & Abdominal Swelling', d: 'Fluid accumulation from reduced cardiac output and elevated filling pressures.' },
                  { s: 'Sudden Cardiac Death', d: 'A catastrophic first presentation in some, especially young athletes with undiagnosed HCM or ACM.' },
                ].map(item => (
                  <div key={item.s} className="flex items-start space-x-3 bg-slate-50 p-4 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                    <div><h4 className="font-semibold text-slate-800 text-sm">{item.s}</h4><p className="text-slate-500 text-xs mt-0.5">{item.d}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section id="diagnosis" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Diagnosis</h2>
              <div className="space-y-3">
                {[
                  { abbr: 'ECHO', name: 'Echocardiogram', desc: 'Primary diagnostic tool — measures ventricular size, wall thickness, ejection fraction, and outflow obstruction in HCM.' },
                  { abbr: 'MRI', name: 'Cardiac MRI (CMR)', desc: 'Gold standard for tissue characterization — detects fibrosis (late gadolinium enhancement), guides prognosis and treatment decisions.' },
                  { abbr: 'GENE', name: 'Genetic Testing', desc: 'Identifies causative mutations in sarcomere genes (for HCM), desmosomal genes (for ACM). Guides family screening.' },
                ].map(d => (
                  <div key={d.abbr} className="bg-white border border-slate-200/80 rounded-2xl p-5 flex space-x-4">
                    <div className="bg-indigo-50 text-indigo-700 font-bold text-xs px-2.5 py-1.5 rounded-xl h-fit shrink-0">{d.abbr}</div>
                    <div><h4 className="font-bold text-slate-800 text-sm">{d.name}</h4><p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">{d.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section id="treatment" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 scroll-mt-20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Treatment</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: 'Medications', d: 'Beta-blockers and calcium channel blockers reduce outflow obstruction in HCM. Diuretics and ACE inhibitors manage DCM symptoms.' },
                  { t: 'ICD Implantation', d: 'Implantable defibrillator for patients at high risk of sudden cardiac death (particularly HCM with risk factors).' },
                  { t: 'Septal Reduction Therapy', d: 'For obstructive HCM: surgical myectomy (removes thickened septal muscle) or alcohol septal ablation reduces obstruction.' },
                  { t: 'Heart Transplantation', d: 'For end-stage cardiomyopathy refractory to medical and device therapy.' },
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
