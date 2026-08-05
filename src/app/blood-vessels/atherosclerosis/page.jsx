'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Layers,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Info,
  Stethoscope,
  Activity,
  ShieldCheck,
  HeartPulse,
  FileText,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function AtherosclerosisPage() {
  const faqs = [
    {
      question: 'What is Atherosclerosis?',
      answer:
        'Atherosclerosis is a chronic inflammatory condition where cholesterol, calcium, and cellular debris form fatty deposits (plaques) inside vessel walls, narrowing arteries and restricting oxygenated blood flow to vital organs.',
    },
    {
      question: 'Can atherosclerotic plaque be reversed or stabilized?',
      answer:
        'While advanced calcified plaque cannot be completely erased, high-intensity statin therapy, PCSK9 inhibitors, and strict LDL-C cholesterol reduction can halt plaque progression, stabilize soft vulnerable plaques, and reduce heart attack and stroke risks.',
    },
    {
      question: 'What is the difference between stable and vulnerable plaque?',
      answer:
        'Stable (calcified) plaques have a thick fibrous cap and rarely rupture. Vulnerable (soft, lipid-rich) plaques have a thin cap and are prone to sudden rupture, triggering a blood clot that can completely block the artery and cause a heart attack or stroke.',
    },
    {
      question: 'How is atherosclerosis different from arteriosclerosis?',
      answer:
        'Arteriosclerosis is a general term for hardening of the arteries due to aging. Atherosclerosis is a specific type where lipid-laden plaques accumulate in arterial walls. Atherosclerosis is the principal cause of coronary artery disease, strokes, and peripheral artery disease.',
    },
  ];

  const stages = [
    { stage: 'Stage 1: Fatty Streak', desc: 'LDL particles infiltrate the arterial intima, oxidize, and attract monocytes that engulf lipids to become foam cells — the earliest lesion.' },
    { stage: 'Stage 2: Fibrous Plaque', desc: 'Smooth muscle cells migrate and form a fibrous cap over the lipid core. Plaque begins to project into the arterial lumen, restricting flow.' },
    { stage: 'Stage 3: Vulnerable Plaque', desc: 'A thin, inflamed fibrous cap covers a large lipid pool. High risk of sudden rupture triggering thrombosis.' },
    { stage: 'Stage 4: Acute Rupture / Thrombosis', desc: 'Plaque rupture exposes the lipid core to blood, activating platelets and the coagulation cascade, resulting in acute arterial occlusion.' },
  ];

  const riskFactors = [
    { name: 'High LDL Cholesterol', detail: 'Elevated LDL-C is the primary driver of plaque initiation. Target LDL <70 mg/dL in high-risk patients; <55 mg/dL in very high-risk.' },
    { name: 'Hypertension', detail: 'High blood pressure creates turbulent flow and endothelial shear stress that promotes LDL entry and inflammatory cell recruitment.' },
    { name: 'Diabetes & Insulin Resistance', detail: 'Hyperglycemia glycates LDL particles, making them more atherogenic, and promotes widespread arterial inflammation.' },
    { name: 'Smoking', detail: 'Nicotine and carbon monoxide damage the endothelial barrier, reduce HDL, and dramatically accelerate plaque accumulation.' },
    { name: 'Chronic Inflammation & Obesity', detail: 'Adipose tissue secretes pro-inflammatory cytokines (IL-6, TNF-α) that destabilize plaques and promote atherosclerosis progression.' },
  ];

  const diagnostics = [
    { abbr: 'CCTA', name: 'Coronary CT Angiography (CCTA)', desc: 'High-resolution 3D X-ray imaging of coronary arteries that detects and characterizes plaque composition — distinguishing soft from calcified plaques.' },
    { abbr: 'CAC', name: 'Coronary Artery Calcium (CAC) Score', desc: 'CT scan measuring calcium deposits in coronary arteries. A CAC score >100 significantly increases 10-year cardiovascular event risk.' },
    { abbr: 'IMT', name: 'Carotid Intima-Media Thickness (CIMT)', desc: 'Ultrasound measurement of carotid artery wall thickness — a surrogate marker of subclinical atherosclerosis burden and cardiovascular risk.' },
    { abbr: 'ABI', name: 'Ankle-Brachial Index (ABI)', desc: 'Simple pressure ratio comparing ankle to arm blood pressure. ABI <0.9 indicates peripheral atherosclerosis in leg arteries.' },
  ];

  const treatments = [
    { title: 'High-Intensity Statin Therapy', desc: 'Atorvastatin 40–80 mg or Rosuvastatin 20–40 mg daily. Reduces LDL-C by 50–60%, stabilizes plaque, and decreases cardiovascular events by 25–35%.' },
    { title: 'PCSK9 Inhibitors', desc: 'Evolocumab or Alirocumab injections reduce LDL-C by an additional 50–60% on top of statins. For very high-risk patients who cannot reach target LDL.' },
    { title: 'Antiplatelet Therapy', desc: 'Low-dose aspirin and/or P2Y12 inhibitors (clopidogrel) prevent platelet aggregation on plaque surfaces, reducing clot formation risk.' },
    { title: 'Blood Pressure Control', desc: 'ACE inhibitors, ARBs, and calcium channel blockers reduce arterial wall stress, slowing plaque progression and preventing vessel remodeling.' },
    { title: 'Lifestyle Therapeutic Changes', desc: 'Mediterranean diet, aerobic exercise (≥150 min/week), smoking cessation, and weight management are independently proven to reduce plaque burden.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80"
            alt="Atherosclerosis Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center text-xs text-sky-300 font-bold mb-4 space-x-1.5 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <Link href="/blood-vessels" className="hover:underline">Vascular Conditions</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Atherosclerosis Guide</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Atherosclerosis & <br />
                <span className="animated-gradient-text">Arterial Plaque</span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Clinical guide to vascular inflammation, lipid accumulation, plaque stabilization, statin therapy, and preventative lipidology by Dr. Mohamed Faher Almahmoud.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Schedule Lipid & Plaque Exam
                </Link>
                <a
                  href="#diagnostics"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <Activity className="mr-2 h-4 w-4 text-sky-300" />
                  CAC & Lipid Screening
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                  alt="Vascular Lipidology Diagnostic Exam"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-blue-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">Lipidology & Prevention Clinic</p>
                    <p className="text-[11px] text-blue-600 font-semibold">Plaque Imaging & Statin Optimization</p>
                  </div>
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">Preventive</span>
                </div>
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
                <span>Atherosclerosis Guide</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ['#overview', 'What is Atherosclerosis?'],
                  ['#stages', 'Plaque Formation Stages'],
                  ['#risk', 'Risk Factors'],
                  ['#diagnostics', 'CAC & Lipid Screening'],
                  ['#treatment', 'Statin & Lifestyle Therapy'],
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
                  <p className="text-xs font-bold text-blue-900">High LDL Cholesterol?</p>
                  <p className="text-[11px] text-slate-600 mt-1">Schedule a lipid panel and CAC score assessment.</p>
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

            {/* OVERVIEW */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Arterial Inflammation</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is Atherosclerosis?</h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Atherosclerosis is the underlying driver behind coronary artery disease, carotid artery stenosis, and peripheral artery disease. It begins when low-density lipoprotein (LDL) particles penetrate the inner lining of arteries, triggering inflammatory foam cell accumulation and plaque formation.
                </p>
                <p>
                  The process is not simply "cholesterol clogging pipes" — it is a complex, chronic inflammatory disease involving endothelial dysfunction, oxidative stress, macrophage infiltration, smooth muscle cell migration, and fibrous cap formation over a lipid-rich necrotic core.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <div className="relative h-56 rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                    alt="Cardiologist Analyzing Vascular Scan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-slate-900 text-base">Arteries Affected:</h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0" /><span><strong>Coronary Arteries:</strong> → Coronary Artery Disease & Heart Attack</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0" /><span><strong>Carotid Arteries:</strong> → Transient Ischemic Attack & Stroke</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0" /><span><strong>Peripheral Arteries:</strong> → Claudication & Critical Limb Ischemia</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0" /><span><strong>Aorta:</strong> → Aortic Aneurysm Formation</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* PLAQUE STAGES */}
            <section id="stages" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Stages of Plaque Formation</h2>
              <div className="space-y-4">
                {stages.map((s, i) => (
                  <div key={s.stage} className="flex items-start space-x-4 bg-white border border-slate-200/80 rounded-2xl p-5">
                    <div className="bg-blue-600 text-white font-extrabold text-sm h-8 w-8 rounded-xl flex items-center justify-center shrink-0">{i + 1}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{s.stage}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 relative h-52 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1400&q=80"
                  alt="Plaque Rupture and Thrombosis"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white max-w-xs">
                  <p className="text-xs uppercase tracking-wider font-bold text-sky-300">Plaque Vulnerability</p>
                  <p className="text-sm font-bold mt-1">Most heart attacks are caused by thin-cap vulnerable plaques, not severe stenosis.</p>
                </div>
              </div>
            </section>

            {/* RISK FACTORS */}
            <section id="risk" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Risk Assessment</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Atherosclerosis Risk Factors</h2>
                </div>
              </div>
              <div className="space-y-4">
                {riskFactors.map((r, i) => (
                  <div key={r.name} className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="bg-amber-500 text-white font-extrabold text-xs h-6 w-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{r.name}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">{r.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* DIAGNOSTICS */}
            <section id="diagnostics" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Atherosclerosis Screening & Diagnostics</h2>
              <div className="space-y-3">
                {diagnostics.map(d => (
                  <div key={d.abbr} className="bg-white border border-slate-200/80 rounded-2xl p-5 flex space-x-4">
                    <div className="bg-blue-50 text-blue-700 font-bold text-xs px-2.5 py-1.5 rounded-xl h-fit shrink-0">{d.abbr}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{d.name}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" alt="CT Coronary Angiography Scan" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80" alt="Carotid Ultrasound Vascular Imaging" fill className="object-cover" />
                </div>
              </div>
            </section>

            {/* TREATMENT */}
            <section id="treatment" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Medical & Lifestyle Therapy</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Stabilizing & Treating Atherosclerosis</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {treatments.map(t => (
                  <div key={t.title} className="border border-slate-100 p-5 rounded-2xl bg-slate-50/50">
                    <h4 className="font-bold text-slate-800 text-sm mb-1.5">{t.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{t.desc}</p>
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
