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

  const arrhythmiaCategories = [
    {
      title: 'Fast Heart Rhythms',
      category: 'Tachyarrhythmias',
      items: 'Supraventricular tachycardia · Atrial tachycardia · Atrial flutter · Ventricular tachycardia',
    },
    {
      title: 'Slow Heart Rhythms',
      category: 'Bradyarrhythmias',
      items: 'Sinus bradycardia · Sinus node dysfunction · Heart block',
    },
    {
      title: 'Irregular Heart Rhythms',
      category: 'Irregular rhythms',
      items: 'Atrial fibrillation · Premature atrial contractions · Premature ventricular contractions',
    },
  ];

  const diagnosticTests = [
    {
      name: 'Holter Monitor',
      desc: 'A portable ECG device worn for 24 hours or longer during daily routines.',
    },
    {
      name: 'Event Recorder',
      desc: 'A wearable monitor used for up to 30 days, activated when you feel symptoms.',
    },
    {
      name: 'Echocardiogram',
      desc: 'An ultrasound test that uses sound waves to check heart structure, valves, and blood flow.',
    },
    {
      name: 'Implantable Loop Recorder (ILR)',
      desc: 'A small insertable device placed under the skin to continuously monitor and record heart rhythm for up to 3 years.',
    },
    {
      name: 'Electrophysiology Study (EPS)',
      desc: 'A hospital procedure using thin tubes threaded into the heart to map abnormal electrical signals.',
    },
  ];

  const treatments = [
    {
      name: 'Antiarrhythmic Medication Therapy',
      desc: 'Rate-control (beta-blockers, calcium channel blockers) or rhythm-control medications (flecainide, amiodarone, sotalol) to stabilize heart electrical signals.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Catheter Ablation',
      desc: 'Minimally invasive catheter procedure that delivers thermal energy to scar tiny areas of heart tissue causing abnormal signals. Gold standard for SVT and AFib.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Permanent Pacemaker Implantation',
      desc: 'Implantation of a tiny battery-powered device under the skin to send electric impulses when the heart beats too slowly or pauses.',
      image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Implantable Cardioverter-Defibrillator (ICD)',
      desc: 'Device that continuously monitors rhythm, delivers anti-tachycardia pacing, or a defibrillation shock to terminate ventricular fibrillation and prevent sudden death.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Arrhythmias &amp; <br />
            Atrial Fibrillation
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Arrhythmia Guide Outline"
              items={[
                ['#overview', 'What are Arrhythmias?'],
                ['#types', 'Types of Arrhythmias'],
                ['#symptoms', 'Symptoms'],
                ['#diagnosis', 'Diagnostic Testing'],
                ['#treatment', 'Treatment'],
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
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden">
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
                  Importantly, symptoms do not always reflect the severity of an
                  arrhythmia. A serious arrhythmia may cause only mild symptoms,
                  while a less serious rhythm disturbance may feel very
                  noticeable or uncomfortable.
                </p>
              </div>

              {/* Overview Medical Infographic */}
              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/content.png"
                  alt="Cardiac Electrical System and Arrhythmias Overview Infographic"
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* TYPES */}
            <section
              id="types"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Types of Cardiac Arrhythmias
                </h2>
              </div>

              <div className="divide-y divide-slate-200/80">
                {arrhythmiaCategories.map((t) => (
                  <div
                    key={t.title}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0 space-y-0.5">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        {t.title}
                      </h3>
                      <p className="italic text-blue-600 font-medium text-xs sm:text-sm">
                        {t.category}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {t.items}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clinical Note Callout */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Some arrhythmias, like atrial fibrillation, increase stroke risk and require more than just heart rate control.
                </p>
              </div>

              {/* Arrhythmia 3 Rhythms Light Infographic */}
              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/types.png"
                  alt="Understanding Cardiac Arrhythmias - Fast, Slow, and Uneven Rhythm Types"
                  width={1400}
                  height={800}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What might you notice?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptomList.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <div key={s.title} className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100/80 space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl border border-blue-100 text-blue-600">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base">{s.title}</h3>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-1">{s.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Note Callout */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p>
                    Arrhythmias can be intermittent and hard to detect, sometimes requiring extended monitoring.
                  </p>
                  <p>
                    Symptoms don’t always match severity—serious arrhythmias may feel mild, and benign ones may feel intense.
                  </p>
                </div>
              </div>
            </section>

            {/* DIAGNOSIS */}
            <section id="diagnosis" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnostic Tests & Imaging</h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Depending on the symptoms and suspected rhythm problem, extended heart-rhythm monitoring may be necessary.
              </p>

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

              {/* Note Callout */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Wearable technology can help detection, but results must be interpreted carefully.
                </p>
              </div>
            </section>

            {/* TREATMENT */}
            <section id="treatment" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Treatment</h2>
              </div>

              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  Treatment is individualized and depends on the type of arrhythmia, its cause, symptoms, associated conditions, and overall risk.
                </p>
                <p>
                  Treatment may range from observation and monitoring to:
                </p>
                <p>
                  Some cases can be significantly improved or resolved with procedures, reducing long-term medication needs.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Treatment includes but not limited to : left atrial appendage closure
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {treatments.map((t) => (
                    <div key={t.name} className="rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all overflow-hidden">
                      <div className="relative h-48 w-full">
                        <Image src={t.image} alt={t.name} fill className="object-cover object-center" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      </div>
                      <div className="p-5">
                        <h4 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">{t.name}</h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
