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
} from 'lucide-react';
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
        'Key DVT symptoms include sudden swelling in one leg, deep calf pain or cramping (especially when bending the foot upward — Homans\' sign), skin redness or discoloration, and a feeling of warmth along the affected vein path.',
    },
    {
      question: 'How long must I take blood thinners for DVT?',
      answer:
        'For a provoked DVT (caused by surgery, immobility, or travel), anticoagulation is typically prescribed for 3 months. For unprovoked DVT or recurrent clots, indefinite anticoagulation may be recommended. Your cardiologist will individualize treatment duration based on your clot risk.',
    },
    {
      question: 'Can DVT recur after treatment?',
      answer:
        'Yes. DVT recurrence risk is highest in the first 6–12 months after stopping anticoagulation, particularly in patients with thrombophilia (inherited clotting disorders), active cancer, or those with unprovoked first episodes. Compression stockings and regular follow-up reduce recurrence risk.',
    },
  ];

  const riskFactors = [
    { name: 'Prolonged Immobility', detail: 'Long-haul flights over 4 hours, bed rest after surgery, or immobilization in a cast all lead to venous stasis — the most common DVT trigger.' },
    { name: 'Recent Surgery or Trauma', detail: 'Orthopedic (hip/knee replacement), pelvic, and abdominal surgeries dramatically increase DVT risk due to vessel injury and reduced ambulation.' },
    { name: 'Active Cancer', detail: 'Malignancy is a hypercoagulable state. Tumor cells release pro-coagulant factors, and chemotherapy further increases clot risk.' },
    { name: 'Hormonal Therapy & Pregnancy', detail: 'Oral contraceptives, hormone replacement therapy, and pregnancy increase clotting factor levels and pelvic vessel compression.' },
    { name: 'Inherited Thrombophilia', detail: 'Factor V Leiden, Prothrombin gene mutation, Protein C/S deficiency, and antiphospholipid syndrome increase DVT risk by 3–8 fold.' },
    { name: 'Obesity & Older Age', detail: 'Increased abdominal pressure on pelvic veins and reduced ambulatory capacity both contribute to venous insufficiency and stasis.' },
  ];

  const symptoms = [
    { title: 'Unilateral Leg Swelling', desc: 'Sudden, unexplained swelling in one entire leg or calf that develops over hours to days.', icon: Activity },
    { title: 'Deep Calf Pain & Tenderness', desc: 'Aching, throbbing, or cramping pain in the calf or thigh that is worsened by walking.', icon: Zap },
    { title: 'Skin Redness & Warmth', desc: 'The skin over the clot becomes red, warm, or discolored (erythematous) due to inflammation.', icon: AlertTriangle },
    { title: 'Engorged Superficial Veins', desc: 'Visible dilation of surface veins as blood bypasses the blocked deep vein pathway.', icon: HeartPulse },
    { title: 'Homans\' Sign', desc: 'Calf pain elicited by dorsiflexing the foot — a bedside clinical test (low sensitivity but commonly tested).', icon: Clock },
    { title: 'Pulmonary Embolism Symptoms', desc: 'If clot travels to lungs: sudden breathlessness, chest pain worsened by breathing, coughing blood, rapid pulse.', icon: Info },
  ];

  const diagnostics = [
    { abbr: 'DUPLEX', name: 'Compression Duplex Ultrasound', desc: 'First-line, non-invasive gold standard for DVT diagnosis. Directly visualizes the clot and assesses venous compressibility and flow.' },
    { abbr: 'D-DIMER', name: 'D-Dimer Blood Test', desc: 'A fibrin degradation marker. Highly sensitive — a negative D-dimer effectively rules out DVT/PE in low-probability patients without imaging.' },
    { abbr: 'CT-PA', name: 'CT Pulmonary Angiography (CT-PA)', desc: 'Gold standard for diagnosing pulmonary embolism — directly visualizes clots in the pulmonary arteries with high sensitivity and specificity.' },
    { abbr: 'WELLS', name: 'Wells DVT Pre-Test Score', desc: 'A clinical scoring tool combining risk factors and symptoms to stratify DVT probability into low, moderate, or high, guiding the testing pathway.' },
  ];

  const treatments = [
    { title: 'Direct Oral Anticoagulants (DOACs)', desc: 'Rivaroxaban (Xarelto), Apixaban (Eliquis), or Dabigatran. Preferred first-line therapy — no routine monitoring needed, predictable effect, low bleeding risk.' },
    { title: 'Low Molecular Weight Heparin (LMWH)', desc: 'Enoxaparin (Lovenox) subcutaneous injections — preferred for cancer-associated DVT and during pregnancy as DOACs are not safe for fetal development.' },
    { title: 'Catheter-Directed Thrombolysis (CDT)', desc: 'For massive, limb-threatening DVT: a catheter delivers clot-dissolving tPA directly into the clot to rapidly restore venous drainage and prevent post-thrombotic syndrome.' },
    { title: 'Inferior Vena Cava (IVC) Filter', desc: 'A retrievable filter placed in the vena cava to catch clots before reaching the lungs — used when anticoagulation is contraindicated (e.g., active bleeding).' },
    { title: 'Compression Stockings & Ambulation', desc: '30–40 mmHg graduated compression stockings worn for 2 years significantly reduce post-thrombotic syndrome (chronic leg swelling and pain after DVT).' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-rose-950 via-slate-900 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=2000&q=80"
            alt="DVT Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-rose-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center text-xs text-rose-300 font-bold mb-4 space-x-1.5 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <Link href="/blood-vessels" className="hover:underline">Vascular Conditions</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Deep Vein Thrombosis</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Deep Vein <br />
                <span className="animated-gradient-text">Thrombosis (DVT)</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Urgent medical guide to deep leg vein clots, Wells scoring, D-dimer testing, compression ultrasound scans, DOAC anticoagulants, and catheter-directed thrombolysis.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 text-white font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Schedule DVT Ultrasound
                </Link>
                <a
                  href="#symptoms"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <Activity className="mr-2 h-4 w-4 text-rose-300" />
                  DVT Warning Signs
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="DVT Diagnostic Exam"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-rose-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">Vascular Duplex Ultrasound</p>
                    <p className="text-[11px] text-rose-600 font-semibold">Real-Time Clot Detection & Mapping</p>
                  </div>
                  <span className="bg-rose-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">Same Day</span>
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
            <div className="sticky top-28 bg-white border border-rose-100 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider border-b border-rose-50 pb-3 flex items-center space-x-2">
                <FileText className="h-4 w-4 text-rose-600" />
                <span>DVT Guide Sections</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ['#overview', 'What is DVT?'],
                  ['#risk', 'Risk Factors'],
                  ['#symptoms', 'Symptoms & Signs'],
                  ['#diagnosis', 'Ultrasound & D-Dimer'],
                  ['#treatment', 'Anticoagulation Therapy'],
                  ['#pe', 'Pulmonary Embolism Warning'],
                  ['#faqs', 'Patient FAQs'],
                ].map(([id, label]) => (
                  <a
                    key={id}
                    href={id}
                    className="hover:text-rose-600 text-slate-600 font-medium transition-colors flex items-center py-1 group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1.5 text-rose-400 group-hover:translate-x-1 transition-transform shrink-0" />
                    <span>{label}</span>
                  </a>
                ))}
              </nav>
              <div className="pt-4 border-t border-slate-100">
                <div className="bg-rose-50/80 p-4 rounded-2xl border border-rose-100">
                  <p className="text-xs font-bold text-rose-900">Sudden Leg Swelling?</p>
                  <p className="text-[11px] text-slate-600 mt-1">Get an urgent DVT duplex ultrasound today.</p>
                  <Link
                    href="/contact"
                    className="mt-3 block text-center bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md shadow-rose-600/20"
                  >
                    Urgent Evaluation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-12">

            {/* OVERVIEW */}
            <section id="overview" className="bg-white border border-rose-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-rose-50 p-3 rounded-2xl border border-rose-100">
                  <Info className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Venous Clotting</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is Deep Vein Thrombosis?</h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Deep Vein Thrombosis (DVT) occurs when a thrombus forms inside the deep veins of the legs or pelvis, most commonly in the iliac, femoral, or popliteal veins. DVT affects approximately 900,000 Americans annually and is responsible for 60,000–100,000 deaths per year from pulmonary embolism.
                </p>
                <p>
                  The condition is explained by Virchow's Triad: venous stasis (slow blood flow), hypercoagulability (increased clotting tendency), and endothelial injury (vessel wall damage). When two or more of these conditions coexist, DVT risk increases dramatically.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <div className="relative h-56 rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                    alt="DVT Duplex Ultrasound"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-slate-900 text-base">Virchow's Triad:</h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-rose-600 shrink-0" /><span><strong>Venous Stasis:</strong> Immobility, bed rest, long flights.</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-rose-600 shrink-0" /><span><strong>Hypercoagulability:</strong> Cancer, thrombophilia, hormones.</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-rose-600 shrink-0" /><span><strong>Endothelial Injury:</strong> Surgery, trauma, catheter placement.</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* RISK FACTORS */}
            <section id="risk" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">DVT Risk Factors</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {riskFactors.map((r, i) => (
                  <div key={r.name} className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-slate-200/80">
                    <div className="bg-rose-500 text-white font-extrabold text-xs h-6 w-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{r.name}</h4>
                      <p className="text-slate-600 text-xs mt-0.5">{r.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-rose-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-rose-50 p-3 rounded-2xl border border-rose-100">
                  <HeartPulse className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Warning Signs</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of DVT</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptoms.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <div key={s.title} className="p-5 rounded-2xl bg-rose-50/40 border border-rose-100/80 space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl border border-rose-100 text-rose-600">
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
            <section id="diagnosis" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">DVT Diagnosis & Testing</h2>
              <div className="space-y-3">
                {diagnostics.map(d => (
                  <div key={d.abbr} className="bg-white border border-slate-200/80 rounded-2xl p-5 flex space-x-4">
                    <div className="bg-rose-50 text-rose-700 font-bold text-xs px-2.5 py-1.5 rounded-xl h-fit shrink-0 text-center">{d.abbr}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{d.name}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 relative h-52 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=80"
                  alt="DVT Ultrasound Vascular Lab"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-rose-950/80 to-transparent" />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white max-w-xs">
                  <p className="text-xs uppercase tracking-wider font-bold text-rose-300">Vascular Lab</p>
                  <p className="text-sm font-bold mt-1">Duplex ultrasound confirms DVT in under 20 minutes — same day results.</p>
                </div>
              </div>
            </section>

            {/* TREATMENT */}
            <section id="treatment" className="bg-white border border-rose-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-rose-50 p-3 rounded-2xl border border-rose-100">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Anticoagulation & Thrombolysis</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">DVT Treatment Options</h2>
                </div>
              </div>

              <div className="space-y-4">
                {treatments.map(t => (
                  <div key={t.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{t.title}</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>



            {/* FAQS */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Patient Queries</span>
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
