'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Activity, ShieldAlert, HeartPulse, Stethoscope, CheckCircle2, ChevronRight, BookOpen, UserCheck, Flame, Compass } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function PalpitationsPage() {
  const [activeTreatmentTab, setActiveTreatmentTab] = useState('lifestyle');

  const faqs = [
    {
      question: 'Can anxiety alone cause severe palpitations?',
      answer: 'Absolutely. When you experience anxiety or panic, your sympathetic nervous system releases a surge of adrenaline. This "fight-or-flight" hormone directly triggers your sinoatrial node, increasing heart rate and contractility. This causes your heart to beat faster and harder, which you perceive as palpitations. Managing stress, performing breathing exercises, and cognitive behavioral therapy can dramatically reduce their frequency.',
    },
    {
      question: 'Are palpitations always a sign of a dangerous heart condition?',
      answer: 'No. In fact, the vast majority of palpitations are benign and not caused by structural heart disease. They are frequently linked to lifestyle factors like high caffeine consumption, stress, dehydration, lack of sleep, or hormonal changes. However, because they can occasionally indicate underlying electrical issues (arrhythmias), they should always be evaluated by a healthcare professional to rule out cardiac problems.',
    },
    {
      question: 'What is a vagal maneuver, and how does it help?',
      answer: 'Vagal maneuvers are physical actions that stimulate the vagus nerve, which in turn signals the heart to slow down. Examples include coughing, bearing down (as if having a bowel movement), or splashing ice-cold water on your face. These are sometimes used to stop episodes of rapid heartbeats (like SVT), but you should only perform them under the guidance of a physician.',
    },
  ];

  const relatedConditions = [
    {
      title: 'Arrhythmias',
      description: 'Irregular heartbeats including rapid, slow, or chaotic patterns.',
      subTypes: ['Atrial Fibrillation (AFib)', 'Supraventricular Tachycardia (SVT)', 'Premature Ventricular Contractions (PVCs)'],
      href: '#',
    },
    {
      title: 'Valvular Heart Disease',
      description: 'Damage or defect in one of the four heart valves restricting flow.',
      subTypes: [],
      href: '#',
    },
    {
      title: 'Heart Failure',
      description: 'Chronic weakness of the heart muscle limiting pumping efficiency.',
      subTypes: [],
      href: '#',
    },
    {
      title: 'Hypertension',
      description: 'Chronic high blood pressure straining arterial walls and heart muscle.',
      subTypes: [],
      href: '#',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Header / Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-20 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2000&q=80"
            alt="Palpitations Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-blue-950/60 to-slate-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="bg-cyan-500/20 border border-cyan-500/35 text-cyan-300 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
              Symptom Guide
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Heart Palpitations
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Understand the sensation of skipped beats, racing pulses, and fluttering chest feelings. Learn about common triggers, diagnostic paths, and when to seek medical evaluation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          
          {/* Left Column: Side Navigation for Desktop */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 bg-white border border-slate-200/80 rounded-2xl p-5 space-y-4 shadow-sm">
              <h3 className="font-bold text-slate-800 text-sm tracking-wider uppercase border-b pb-2 font-mono">Symptom Menu</h3>
              <nav className="flex flex-col space-y-2 text-sm text-slate-600">
                <a href="#what-are-they" className="hover:text-brand-600 transition-colors flex items-center py-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-slate-400" /> What do they feel like?
                </a>
                <a href="#causes" className="hover:text-brand-600 transition-colors flex items-center py-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-slate-400" /> Common Causes
                </a>
                <a href="#urgent-attention" className="hover:text-brand-600 transition-colors flex items-center py-1 text-amber-600 font-semibold">
                  <ChevronRight className="h-4 w-4 mr-1 text-amber-500 animate-pulse" /> Urgent Medical Care
                </a>
                <a href="#investigations" className="hover:text-brand-600 transition-colors flex items-center py-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-slate-400" /> Clinical Investigation
                </a>
                <a href="#treatments" className="hover:text-brand-600 transition-colors flex items-center py-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-slate-400" /> Treatment & Care
                </a>
                <a href="#faqs" className="hover:text-brand-600 transition-colors flex items-center py-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-slate-400" /> Symptom FAQs
                </a>
                <a href="#related" className="hover:text-brand-600 transition-colors flex items-center py-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-slate-400" /> Related Conditions
                </a>
              </nav>
            </div>
          </div>

          {/* Right Column: Detailed Sections */}
          <div className="lg:col-span-9 space-y-16">
            
            {/* Section 1: What do they feel like? */}
            <section id="what-are-they" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 scroll-mt-20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-cyan-50 p-2 rounded-lg">
                  <Activity className="h-6 w-6 text-cyan-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">What are Palpitations & What do they feel like?</h2>
              </div>
              <div className="space-y-4 text-slate-650 leading-relaxed text-sm sm:text-base">
                <p>
                  Heart palpitations are the sensation that your heart is beating abnormally or in an irregular pattern. While our bodies usually operate without us noticing our heartbeat, palpitations make you acutely aware of cardiac muscle activity.
                </p>
                <p>
                  Patients describe heart palpitations in several distinct ways, depending on their trigger:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="border border-slate-100 p-4 rounded-xl bg-slate-50/50">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">Fluttering / Flip-Flopping</h4>
                    <p className="text-slate-500 text-xs sm:text-sm">Often described as a "butterfly in the chest" or a somatic sensation that the heart rolled over or skipped a beat.</p>
                  </div>
                  <div className="border border-slate-100 p-4 rounded-xl bg-slate-50/50">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">Pounding / Thumping</h4>
                    <p className="text-slate-500 text-xs sm:text-sm">A heavy thud felt in the chest, throat, or neck, making it feel like the heart is pumping with excessive force.</p>
                  </div>
                  <div className="border border-slate-100 p-4 rounded-xl bg-slate-50/50">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">Racing / Galloping</h4>
                    <p className="text-slate-500 text-xs sm:text-sm">A highly accelerated, rapid heartbeat that feels like running a sprint even while sitting completely still.</p>
                  </div>
                  <div className="border border-slate-100 p-4 rounded-xl bg-slate-50/50">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">Skipped Beats / Pauses</h4>
                    <p className="text-slate-500 text-xs sm:text-sm">The sensation of a brief hesitation or pause in the heart's rhythm, immediately followed by a powerful corrective thump.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Causes (Cardiac vs Non-cardiac) */}
            <section id="causes" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Common Causes of Palpitations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Non-Cardiac Column */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-2 border-b pb-3 text-emerald-700">
                    <CheckCircle2 className="h-5 w-5" />
                    <h3 className="font-bold text-lg text-slate-850">Non-Cardiac Causes (Common & Benign)</h3>
                  </div>
                  <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">
                    Most palpitations are triggered by external factors or temporary physiological stress. These do not indicate structural heart disease:
                  </p>
                  <ul className="text-slate-600 text-xs sm:text-sm space-y-2.5 pl-4 list-disc">
                    <li><span className="font-semibold text-slate-850">Emotional triggers:</span> Anxiety, stress, panic attacks, or fear.</li>
                    <li><span className="font-semibold text-slate-850">Stimulants:</span> Caffeine, nicotine, alcohol, energy drinks, and decongestants.</li>
                    <li><span className="font-semibold text-slate-850">Physiological states:</span> Dehydration, fever, pregnancy, anemia, or hyperthyroidism (overactive thyroid).</li>
                    <li><span className="font-semibold text-slate-850">Electrolytes:</span> Low potassium or magnesium levels.</li>
                  </ul>
                </div>

                {/* Cardiac Column */}
                <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-2 border-b pb-3 text-red-700">
                    <HeartPulse className="h-5 w-5" />
                    <h3 className="font-bold text-lg text-slate-900">Cardiac Causes (Need Investigation)</h3>
                  </div>
                  <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">
                    Underlying heart structures or electrical pathways can disrupt standard rhythms. These require expert electrophysiology review:
                  </p>
                  <ul className="text-slate-600 text-xs sm:text-sm space-y-2.5 pl-4 list-disc">
                    <li><span className="font-semibold text-slate-905">Arrhythmias:</span> Fast (SVT, AFib) or extra heartbeats (PVCs, PACs).</li>
                    <li><span className="font-semibold text-slate-905">Ischemic disease:</span> Coronary Artery Disease (CAD) or past cardiac injury.</li>
                    <li><span className="font-semibold text-slate-905">Valvular defects:</span> Mitral valve prolapse, stenosis, or regurgitation.</li>
                    <li><span className="font-semibold text-slate-905">Structural defects:</span> Cardiomyopathy (enlarged heart) or heart failure.</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Section 3: Urgent Attention (Visually Outstanding) */}
            <section id="urgent-attention" className="scroll-mt-20">
              <div className="relative overflow-hidden rounded-2xl border border-amber-300 bg-amber-50/70 p-6 sm:p-8 animate-glow-amber">
                
                {/* Glowing beacon */}
                <div className="absolute top-4 right-4 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600/10 p-3 rounded-2xl shrink-0">
                    <ShieldAlert className="h-8 w-8 text-amber-650" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-amber-950 uppercase tracking-wider">
                      When to Seek Urgent Medical Attention
                    </h3>
                    <p className="text-amber-900 text-sm sm:text-base leading-relaxed">
                      While most palpitations are harmless, they can signal a critical cardiac crisis if paired with other symptoms. <span className="font-bold text-amber-950">Seek immediate urgent or emergency hospital care</span> if your palpitations occur alongside:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-amber-950 text-xs sm:text-sm font-semibold pt-2">
                      <div className="flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-700 shrink-0" />
                        <span>Chest pain, pressure, or tightness</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-700 shrink-0" />
                        <span>Sudden, severe shortness of breath</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-700 shrink-0" />
                        <span>Fainting (syncope) or loss of consciousness</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-700 shrink-0" />
                        <span>Severe dizziness, confusion, or weakness</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Section 4: Investigations */}
            <section id="investigations" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 scroll-mt-20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-cyan-50 p-2 rounded-lg">
                  <Stethoscope className="h-6 w-6 text-cyan-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">How are Palpitations Investigated?</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Because palpitations come and go, cardiodiagnostic procedures aim to record the heart's rhythm exactly when the symptoms occur to diagnose any underlying arrhythmias.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50/50 space-y-2">
                  <span className="text-xs font-bold text-cyan-700 bg-cyan-150/40 px-2 py-0.5 rounded uppercase">Baseline Rhythm</span>
                  <h4 className="font-bold text-slate-800">12-Lead Electrocardiogram (ECG)</h4>
                  <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">
                    Provides a brief 10-second capture of the heart's electrical currents. Used to check for baseline abnormalities, conduction delays, or signs of past injury.
                  </p>
                </div>

                <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50/50 space-y-2">
                  <span className="text-xs font-bold text-cyan-700 bg-cyan-150/40 px-2 py-0.5 rounded uppercase">24-48 Hour Tracking</span>
                  <h4 className="font-bold text-slate-800">Holter Monitoring</h4>
                  <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">
                    A compact, wearable device that records every single heartbeat over 1 to 2 days. Perfect for symptoms that occur daily.
                  </p>
                </div>

                <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50/50 space-y-2">
                  <span className="text-xs font-bold text-cyan-700 bg-cyan-150/40 px-2 py-0.5 rounded uppercase">Extended Tracking</span>
                  <h4 className="font-bold text-slate-800">Event & Patch Monitors</h4>
                  <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">
                    Wearable cardiac monitors kept on for 1 to 4 weeks. Activated by the patient or automatic threshold triggers to record less frequent heart flutters.
                  </p>
                </div>

                <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50/50 space-y-2">
                  <span className="text-xs font-bold text-cyan-700 bg-cyan-150/40 px-2 py-0.5 rounded uppercase">Structural Analysis</span>
                  <h4 className="font-bold text-slate-800">Transthoracic Echocardiogram</h4>
                  <p className="text-slate-550 text-xs sm:text-sm leading-relaxed">
                    An ultrasound check of the heart's chambers and valves to ensure palpitations are not originating from structural defects or muscle weakening.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Treatments & Commitments */}
            <section id="treatments" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 scroll-mt-20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4 mb-6 space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <div className="bg-cyan-55 p-2 rounded-lg">
                    <HeartPulse className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Treatment Strategies</h2>
                </div>
                
                {/* Custom sub-tabs */}
                <div className="flex bg-slate-100 p-1 rounded-xl w-fit">
                  <button
                    onClick={() => setActiveTreatmentTab('lifestyle')}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                      activeTreatmentTab === 'lifestyle'
                        ? 'bg-white text-cyan-700 shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Lifestyle Adjust
                  </button>
                  <button
                    onClick={() => setActiveTreatmentTab('medical')}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                      activeTreatmentTab === 'medical'
                        ? 'bg-white text-cyan-700 shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Clinical Interventions
                  </button>
                </div>
              </div>

              {activeTreatmentTab === 'lifestyle' ? (
                <div className="space-y-6">
                  <div className="bg-emerald-50/40 border border-emerald-100 p-4 sm:p-5 rounded-xl">
                    <h4 className="font-bold text-emerald-950 text-sm sm:text-base">If No Serious Heart Problem is Found</h4>
                    <p className="text-emerald-900 text-xs sm:text-sm leading-relaxed mt-1">
                      For the majority of patients, reassurance and basic lifestyle modifications result in complete symptom resolution. Many people improve by incorporating these practices:
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-slate-100 p-4 rounded-xl bg-slate-50/50">
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Trigger Avoidance</h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        Significantly lowering or stopping intake of stimulant beverages (energy drinks, double espressos), tobacco products, and alcohol.
                      </p>
                    </div>
                    <div className="border border-slate-100 p-4 rounded-xl bg-slate-50/50">
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Anxiety Management</h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        Utilizing deep relaxation, meditation, yoga, or biofeedback methods to quiet overstimulated sympathetic nervous systems.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-slate-100 p-4 rounded-xl bg-slate-50/50">
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Medications</h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        If an arrhythmia is confirmed, medications such as beta-blockers or calcium channel blockers are used to stabilize the heart rate, while anti-arrhythmics help control irregular beats.
                      </p>
                    </div>
                    <div className="border border-slate-100 p-4 rounded-xl bg-slate-50/50">
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Cardiac Procedures</h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        For persistent conditions (like SVT or AFib), procedures such as <span className="font-semibold">Catheter Ablation</span> are performed to safely cauterize the pathways causing abnormal rhythms.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Custom Clinic Note block */}
              <div className="bg-brand-900 text-white rounded-2xl p-6 sm:p-8 mt-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-2xl" />
                <div className="bg-white/10 p-3.5 rounded-2xl shrink-0">
                  <UserCheck className="h-8 w-8 text-brand-300" />
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <h4 className="text-lg font-bold text-brand-300">The PulseCare Diagnostic Commitment</h4>
                  <p className="text-slate-350 text-xs sm:text-sm leading-relaxed">
                    At PulseCare Cardiology Clinic, we ensure that every patient presenting with palpitations undergoes a thorough, patient-first diagnostic pathway. We coordinate advanced Holter monitoring, metabolic evaluations, and structural cardiac analysis in a single center. Our board-certified electrophysiologists deliver clear answers and detailed, customized therapeutic plans.
                  </p>
                </div>
              </div>

            </section>

            {/* Section 6: FAQs */}
            <section id="faqs" className="scroll-mt-20 space-y-6">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Frequently Asked Questions</h2>
                <p className="text-slate-500 text-sm mt-1">Answers to common questions regarding cardiac palpitations</p>
              </div>
              <FAQAccordion items={faqs} />
            </section>

            {/* Section 7: Related Conditions (At the bottom) */}
            <section id="related" className="scroll-mt-20 border-t border-slate-200 pt-12 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Related Conditions</h2>
                <p className="text-slate-500 text-sm mt-1">Palpitations can be symptomatic of various underlying cardiovascular conditions:</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedConditions.map((condition) => (
                  <div key={condition.title} className="bg-white border border-slate-200/80 rounded-2xl p-5 hover:border-brand-500 transition-colors flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-slate-800 text-base mb-1">{condition.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed mb-3">{condition.description}</p>
                      {condition.subTypes.length > 0 && (
                        <div className="space-y-1 pl-3 border-l-2 border-slate-100 text-xs text-slate-650">
                          {condition.subTypes.map((subType) => (
                            <div key={subType} className="flex items-center">
                              <span className="w-1 h-1 bg-brand-500 rounded-full mr-1.5 shrink-0" />
                              {subType}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation link back to CAD */}
              <div className="bg-cyan-50/50 border border-cyan-200/60 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 mt-8">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-bold text-slate-850 text-base sm:text-lg">Are you checking for Coronary Artery Disease?</h4>
                  <p className="text-slate-550 text-xs sm:text-sm">Palpitations can sometimes coexist with coronary narrowing or chest pain.</p>
                </div>
                <Link
                  href="/disease/cad"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl text-sm transition-all shadow shadow-cyan-600/10"
                >
                  Explore the CAD Center
                  <ChevronRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </section>

          </div>

        </div>
      </div>
    </div>
  );
}
