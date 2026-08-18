'use client';

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
  HeartPulse,
  FileText,
  Clock,
  Apple,
} from 'lucide-react';
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from '@/components/FAQAccordion';

export default function DVTPage() {
  const faqs = [
    {
      question: 'What is Deep Vein Thrombosis (DVT)?',
      answer:
        'DVT is a serious medical condition where a blood clot (thrombus) forms in a deep vein, usually in the thigh or lower leg. If part of the clot breaks free, it can travel to the lungs, causing a life-threatening pulmonary embolism (PE).',
    },
    {
      question: 'What are the main symptoms of DVT in the leg?',
      answer:
        'Key DVT symptoms include sudden swelling in one leg, deep calf pain or cramping, skin redness or discoloration, and a feeling of warmth along the affected vein path.',
    },
    {
      question: 'How long must I take blood thinners for DVT?',
      answer:
        'For a provoked DVT (caused by surgery or immobility), anticoagulation is typically prescribed for 3 months. For unprovoked DVT or recurrent clots, indefinite anticoagulation may be recommended.',
    },
  ];

  const typesList = [
    {
      name: 'Distal DVT (Calf Veins)',
      tag: 'Lower Leg',
      desc: 'Clots localized in posterior tibial or peroneal veins below the knee. Lower immediate risk of PE but requires monitoring.',
      color: 'text-blue-700',
      bg: 'bg-blue-50',
    },
    {
      name: 'Proximal DVT (Popliteal/Femoral)',
      tag: 'High Risk for PE',
      desc: 'Clots in veins above the knee joint. High rate of pulmonary embolization requiring urgent anticoagulation.',
      color: 'text-red-700',
      bg: 'bg-red-50',
    },
    {
      name: 'Iliofemoral DVT',
      tag: 'Extensive Clot',
      desc: 'Extensive thrombosis extending into iliac veins and inferior vena cava. Causes severe leg swelling and phlegmasia.',
      color: 'text-purple-700',
      bg: 'bg-purple-50',
    },
    {
      name: 'Phlegmasia Cerulea Dolens',
      tag: 'Surgical Emergency',
      desc: 'Near-total occlusion of leg venous outflow causing severe pain, cyanosis, edema, and risk of venous gangrene.',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
    },
  ];

  const symptoms = [
    { title: 'Unilateral Leg Swelling', desc: 'Sudden, unexplained swelling in one entire leg or calf that develops over hours.', icon: Activity },
    { title: 'Deep Calf Pain & Tenderness', desc: 'Aching, throbbing, or severe cramping pain in the calf or thigh worsened by walking.', icon: Zap },
    { title: 'Skin Redness & Warmth', desc: 'Skin over the clot path becomes warm, erythematous, or discolored.', icon: AlertTriangle },
    { title: 'Engorged Superficial Veins', desc: 'Visible expansion of collateral surface veins as blood bypasses blocked deep veins.', icon: HeartPulse },
    { title: 'Homans\' Sign', desc: 'Calf pain elicited by dorsiflexing the foot upward.', icon: Clock },
    { title: 'Pulmonary Embolism Signs', desc: 'Sudden shortness of breath, pleuritic chest pain, coughing blood if clot dislodges to lungs.', icon: Info },
  ];

  const treatments = [
    { name: 'Direct Oral Anticoagulants (DOACs)', desc: 'Eliquis (Apixaban), Xarelto (Rivaroxaban). First-line blood thinners that stop clot growth and prevent recurrence.', duration: '3–6 Months', recovery: 'Immediate Protection', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80' },
    { name: 'Low Molecular Weight Heparin (LMWH)', desc: 'Subcutaneous injections (Enoxaparin) preferred in active cancer or pregnancy where DOACs are contraindicated.', duration: 'Clinical Protocol', recovery: 'Outpatient Care', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80' },
    { name: 'Catheter-Directed Thrombolysis (CDT)', desc: 'Minimally invasive catheter delivers tPA directly into massive iliofemoral clots to dissolve blockage.', duration: 'Procedural', recovery: 'In-hospital Stay', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80' },
    { name: 'IVC Filter Placement', desc: 'Filter inserted in inferior vena cava to trap emboli before reaching lungs when blood thinners are unsafe.', duration: '30 Mins', recovery: 'Same Day', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Deep Vein <br />
            Thrombosis (DVT)
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="DVT Outline"
              items={[
                ['#overview', 'Overview'],
                ['#types', 'Classifications & Types'],
                ['#symptoms', 'Symptoms'],
                ['#diagnosis', 'Diagnostic Testing'],
                ['#treatment', 'Treatment & Procedures'],
                ['#living-with', 'Living with DVT'],
                ['#faqs', 'FAQs'],
              ]}
              cta={{
                title: "Experiencing Sudden Leg Swelling or Calf Pain?",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">

            {/* 1. OVERVIEW (USE IMAGE) */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is Deep Vein Thrombosis?</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Deep Vein Thrombosis (DVT) occurs when a blood clot (thrombus) forms inside the deep veins of the lower extremities or pelvis (popliteal, femoral, or iliac veins).
                </p>
                <p>
                  If a portion of the clot breaks free, it travels through the vena cava into the pulmonary arteries—causing a life-threatening <strong>Pulmonary Embolism (PE)</strong>.
                </p>
              </div>

              {/* Banner Image */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Venous Duplex Scan"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Classifications & Types of DVT</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {typesList.map((t) => (
                  <div key={t.name} className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 text-base">{t.name}</h3>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${t.bg} ${t.color}`}>{t.tag}</span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. SYMPTOMS (USE ICONS) */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of Deep Vein Clots</h2>
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
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnosis & Duplex Testing</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Rapid evaluation combines clinical scoring with high-resolution bedside venous ultrasound:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                        alt="Compression Duplex Ultrasound"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Compression Duplex Ultrasound</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Gold-standard bedside diagnostic scan.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                        alt="High-Sensitivity D-Dimer Assay"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">High-Sensitivity D-Dimer Assay</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Rules out DVT in low-risk patients.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
                        alt="Wells DVT Clinical Score"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Wells DVT Clinical Score</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Stratifies pre-test clinical probability.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                        alt="CT / MR Venography"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">CT / MR Venography</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Evaluates pelvic and iliofemoral venous extension.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. TREATMENT (PROCEDURES) (USE IMAGE) */}
            <section id="treatment" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Treatment & Procedures</h2>
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

            {/* 6. LIVING WITH DVT */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Living with DVT & Post-Thrombotic Care</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Graduated Compression Stockings</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Wear 30–40 mmHg knee-high compression stockings daily</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Reduces post-thrombotic syndrome (chronic pain & swelling)</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Elevate legs above heart level when resting</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">Travel & Mobility Guidelines</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Stand up and walk every 1–2 hours during flights & car rides</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Stay well hydrated and perform ankle pump exercises</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Strict adherence to oral blood thinner schedule</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. FAQS */}
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
