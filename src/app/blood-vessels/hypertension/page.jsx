'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Info,
  Stethoscope,
  Activity,
  ShieldCheck,
  HeartPulse,
  FileText,
  Heart,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function HypertensionPage() {
  const faqs = [
    {
      question: 'Why is Hypertension called the Silent Killer?',
      answer:
        'Hypertension (high blood pressure) typically produces no noticeable symptoms for years while silently damaging arterial walls, heart muscle, kidneys, and brain vessels. Most patients feel perfectly fine until a major event like a heart attack or stroke occurs.',
    },
    {
      question: 'What is the difference between Primary and Secondary Hypertension?',
      answer:
        'Primary (essential) hypertension accounts for 90–95% of cases and develops gradually over time due to genetics, diet, and lifestyle. Secondary hypertension is triggered by an underlying medical condition, such as renal artery stenosis, primary hyperaldosteronism, sleep apnea, or adrenal gland tumors (pheochromocytoma).',
    },
    {
      question: 'What blood pressure readings define stage 1 and stage 2 hypertension?',
      answer:
        'Normal blood pressure is under 120/80 mmHg. Elevated: 120–129/under 80. Stage 1 Hypertension: systolic 130–139 or diastolic 80–89 mmHg. Stage 2 Hypertension: systolic ≥140 or diastolic ≥90 mmHg. Hypertensive crisis: systolic >180 or diastolic >120 mmHg.',
    },
    {
      question: 'What is the DASH diet and how does it help blood pressure?',
      answer:
        'The DASH (Dietary Approaches to Stop Hypertension) diet emphasizes fruits, vegetables, whole grains, lean protein, and low-fat dairy while restricting sodium, saturated fat, and red meat. Studies show DASH diet alone reduces systolic blood pressure by 8–14 mmHg — equivalent to one blood pressure medication.',
    },
    {
      question: 'Can hypertension be cured without medications?',
      answer:
        'Mild Stage 1 hypertension can sometimes be controlled with lifestyle modifications alone — DASH diet, regular exercise, sodium restriction under 1,500 mg/day, weight loss (each 10 kg lost reduces systolic BP by 5–10 mmHg), and alcohol reduction. However, most patients with Stage 2 or target organ damage require medication combined with lifestyle changes.',
    },
  ];

  const bpCategories = [
    { category: 'Normal', systolic: '< 120', diastolic: '< 80', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { category: 'Elevated', systolic: '120–129', diastolic: '< 80', color: 'text-yellow-700', bg: 'bg-yellow-50', border: 'border-yellow-200' },
    { category: 'Stage 1 HTN', systolic: '130–139', diastolic: '80–89', color: 'text-orange-700', bg: 'bg-orange-50', border: 'border-orange-200' },
    { category: 'Stage 2 HTN', systolic: '≥ 140', diastolic: '≥ 90', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200' },
    { category: 'Hypertensive Crisis', systolic: '> 180', diastolic: '> 120', color: 'text-red-900', bg: 'bg-red-100', border: 'border-red-400' },
  ];

  const organDamage = [
    { organ: 'Heart', effects: ['Left Ventricular Hypertrophy (LVH)', 'Heart Failure', 'Coronary Artery Disease', 'Atrial Fibrillation'] },
    { organ: 'Brain', effects: ['Ischemic Stroke', 'Hemorrhagic Stroke', 'Transient Ischemic Attack', 'Vascular Dementia'] },
    { organ: 'Kidneys', effects: ['Chronic Kidney Disease', 'Renal Artery Stenosis', 'Glomerulosclerosis', 'Proteinuria'] },
    { organ: 'Eyes', effects: ['Hypertensive Retinopathy', 'Retinal Vein Occlusion', 'Papilledema', 'Vision Loss'] },
  ];

  const medications = [
    { class: 'ACE Inhibitors', examples: 'Lisinopril, Ramipril, Enalapril', action: 'Block angiotensin-converting enzyme, reducing vasoconstriction. First choice in diabetes + hypertension.', color: 'text-blue-700', bg: 'bg-blue-50' },
    { class: 'ARBs (Angiotensin II Blockers)', examples: 'Losartan, Valsartan, Irbesartan', action: 'Block AT1 receptor directly. Preferred over ACEi if ACE inhibitor causes dry cough.', color: 'text-indigo-700', bg: 'bg-indigo-50' },
    { class: 'Calcium Channel Blockers', examples: 'Amlodipine, Felodipine, Nifedipine', action: 'Block calcium entry into arterial smooth muscle, causing vasodilation. Excellent for isolated systolic HTN.', color: 'text-purple-700', bg: 'bg-purple-50' },
    { class: 'Thiazide Diuretics', examples: 'Hydrochlorothiazide, Chlorthalidone', action: 'Promote sodium and water excretion, reducing blood volume. First-line for most patients. Most cost-effective.', color: 'text-teal-700', bg: 'bg-teal-50' },
    { class: 'Beta-Blockers', examples: 'Metoprolol, Atenolol, Bisoprolol', action: 'Reduce cardiac output and renin release. Preferred in CAD + hypertension, heart failure, post-MI patients.', color: 'text-slate-700', bg: 'bg-slate-50' },
  ];

  const lifestyleInterventions = [
    { measure: 'DASH Diet', reduction: '8–14 mmHg', detail: 'Rich in potassium, calcium, magnesium. Low sodium, low saturated fat.' },
    { measure: 'Sodium Restriction', reduction: '5–10 mmHg', detail: 'Reduce sodium to under 1,500–2,000 mg per day.' },
    { measure: 'Regular Aerobic Exercise', reduction: '4–9 mmHg', detail: '150 min/week of moderate activity (brisk walking, swimming, cycling).' },
    { measure: 'Weight Loss (10 kg)', reduction: '5–10 mmHg', detail: 'Each kilogram of weight lost reduces systolic BP by approximately 1 mmHg.' },
    { measure: 'Alcohol Reduction', reduction: '2–4 mmHg', detail: 'Limit to ≤2 standard drinks per day for men, ≤1 for women.' },
    { measure: 'Stop Smoking', reduction: 'Varies', detail: 'Eliminates BP spikes from nicotine and dramatically reduces cardiovascular risk.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2000&q=80"
            alt="Hypertension Care Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hypertension & <br />
                <span className="animated-gradient-text">Arterial Stress</span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Complete clinical guide to blood pressure categories, target organ damage, DASH diet nutrition, renal artery evaluation, and antihypertensive medical therapies by Dr. Mohamed Faher Almahmoud.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Schedule BP Evaluation
                </Link>
                <a
                  href="#medications"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <TrendingUp className="mr-2 h-4 w-4 text-sky-300" />
                  BP Medications Guide
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Doctor Checking Blood Pressure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-blue-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">24-Hour Ambulatory BP Monitor</p>
                    <p className="text-[11px] text-blue-600 font-semibold">Accurate White-Coat vs True HTN</p>
                  </div>
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">Gold Standard</span>
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
                <span>Hypertension Guide</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ['#overview', 'What is Hypertension?'],
                  ['#categories', 'BP Categories Table'],
                  ['#organ', 'Target Organ Damage'],
                  ['#diagnosis', 'BP Measurement Methods'],
                  ['#medications', 'Antihypertensive Drugs'],
                  ['#lifestyle', 'DASH Diet & Lifestyle'],
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
                  <p className="text-xs font-bold text-blue-900">Blood Pressure Above 130/80?</p>
                  <p className="text-[11px] text-slate-600 mt-1">Schedule a 24-hr ambulatory monitoring evaluation.</p>
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
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Arterial Pressure</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is Hypertension?</h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Hypertension occurs when blood exerts chronically elevated pressure against arterial walls as it flows through your body. Over time, high pressure weakens vessel linings, accelerates plaque accumulation (atherosclerosis), and forces the heart muscle to pump significantly harder to circulate blood against increased resistance.
                </p>
                <p>
                  Worldwide, hypertension affects over 1.28 billion adults — yet only about 42% of those diagnosed are adequately treated. It remains the single most important preventable risk factor for cardiovascular disease, stroke, and kidney failure.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <div className="relative h-56 rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                    alt="Cardiologist Blood Pressure Consultation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-slate-900 text-base">Key Statistics:</h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0" /><span><strong>1.28 billion</strong> adults worldwide have hypertension.</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0" /><span><strong>50%</strong> of strokes are attributable to uncontrolled BP.</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0" /><span><strong>70%</strong> of patients with a first heart attack have hypertension.</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0" /><span>Most cases (90–95%) have <strong>no identifiable cause</strong> (essential HTN).</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* BP CATEGORIES */}
            <section id="categories" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Blood Pressure Classification (ACC/AHA 2017)</h2>
              <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 bg-slate-100 px-5 py-3 text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                  <span>Category</span>
                  <span className="text-center">Systolic (mmHg)</span>
                  <span className="text-center">Diastolic (mmHg)</span>
                </div>
                {bpCategories.map(cat => (
                  <div key={cat.category} className={`grid grid-cols-3 px-5 py-4 border-b last:border-b-0 border-slate-100 ${cat.bg}`}>
                    <span className={`font-bold text-sm ${cat.color}`}>{cat.category}</span>
                    <span className={`text-center font-bold text-sm ${cat.color}`}>{cat.systolic}</span>
                    <span className={`text-center font-bold text-sm ${cat.color}`}>{cat.diastolic}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 relative h-52 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80"
                  alt="Blood Pressure Monitoring Equipment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-transparent" />
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white max-w-xs">
                  <p className="text-xs uppercase tracking-wider font-bold text-sky-300">Accurate Measurement</p>
                  <p className="text-sm font-bold mt-1">Always measure BP after 5 minutes of sitting rest, twice daily for 7 days, to establish a true baseline.</p>
                </div>
              </div>
            </section>

            {/* TARGET ORGAN DAMAGE */}
            <section id="organ" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Heart className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-500">Hypertensive Complications</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Target Organ Damage</h2>
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-6">Uncontrolled hypertension progressively damages the vasculature and parenchyma of four major target organs:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {organDamage.map(o => (
                  <div key={o.organ} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                    <h4 className="font-extrabold text-slate-900 text-base border-b border-slate-200 pb-2">{o.organ}</h4>
                    <ul className="space-y-1.5">
                      {o.effects.map(e => (
                        <li key={e} className="flex items-center space-x-2 text-xs text-slate-600">
                          <CheckCircle className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* DIAGNOSIS */}
            <section id="diagnosis" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Blood Pressure Measurement Methods</h2>
              <div className="space-y-3">
                {[
                  { abbr: 'OFFICE', name: 'Office Blood Pressure Measurement', desc: 'Standard clinic BP measurement. Average of 3 readings after 5 min rest. White-coat hypertension (clinic BP elevated, home BP normal) affects up to 20% of patients.' },
                  { abbr: 'ABPM', name: '24-Hour Ambulatory BP Monitoring (ABPM)', desc: 'Gold standard for HTN diagnosis. Wearable device measures BP every 20–30 minutes over 24 hours, capturing daytime, nighttime, and morning surge patterns.' },
                  { abbr: 'HBPM', name: 'Home Blood Pressure Monitoring (HBPM)', desc: 'Patient-measured BP twice daily for 7 days with a validated upper arm device. Eliminates white-coat effect. Recommended for all hypertensive patients for treatment monitoring.' },
                  { abbr: 'ECHO', name: 'Echocardiogram', desc: 'Assesses left ventricular hypertrophy (LVH) — a major cardiovascular risk marker in hypertension. Also evaluates diastolic function and aortic valve disease.' },
                  { abbr: 'LABS', name: 'Renal Function & Electrolytes', desc: 'Serum creatinine, eGFR, urinalysis (proteinuria), potassium, and glucose. Essential to identify secondary causes and guide medication selection (avoid ACEi/ARBs if eGFR <30).' },
                ].map(d => (
                  <div key={d.abbr} className="bg-white border border-slate-200/80 rounded-2xl p-5 flex space-x-4">
                    <div className="bg-blue-50 text-blue-700 font-bold text-xs px-2 py-1.5 rounded-xl h-fit shrink-0 text-center min-w-[52px]">{d.abbr}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{d.name}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* MEDICATIONS */}
            <section id="medications" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Pharmacological Therapy</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Antihypertensive Medications</h2>
                </div>
              </div>

              <div className="space-y-4">
                {medications.map(m => (
                  <div key={m.class} className={`p-5 rounded-2xl border border-slate-200/80 ${m.bg}`}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className={`font-extrabold text-sm ${m.color}`}>{m.class}</h4>
                    </div>
                    <p className="text-slate-500 text-[11px] italic mb-2">Examples: {m.examples}</p>
                    <p className="text-slate-700 text-xs leading-relaxed">{m.action}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 relative h-56 rounded-2xl overflow-hidden border border-blue-100 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=80"
                  alt="Hypertension Medication Consultation"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider font-extrabold text-sky-300">Combination Therapy</p>
                  <p className="text-sm font-bold">Most Stage 2 hypertension requires 2 or more medications for optimal control.</p>
                </div>
              </div>
            </section>

            {/* LIFESTYLE */}
            <section id="lifestyle" className="scroll-mt-24">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-6 sm:p-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-white p-3 rounded-2xl border border-emerald-100">
                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Non-Pharmacological Therapy</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">DASH Diet & Lifestyle Interventions</h2>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-emerald-200">
                        <th className="text-left py-2 pr-4 text-xs font-extrabold text-emerald-800 uppercase">Intervention</th>
                        <th className="text-center py-2 pr-4 text-xs font-extrabold text-emerald-800 uppercase">BP Reduction</th>
                        <th className="text-left py-2 text-xs font-extrabold text-emerald-800 uppercase">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lifestyleInterventions.map((item, i) => (
                        <tr key={item.measure} className={`border-b border-emerald-100 ${i % 2 === 0 ? 'bg-white/50' : ''}`}>
                          <td className="py-3 pr-4 font-semibold text-slate-800 text-xs">{item.measure}</td>
                          <td className="py-3 pr-4 text-center">
                            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">{item.reduction}</span>
                          </td>
                          <td className="py-3 text-xs text-slate-600">{item.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
