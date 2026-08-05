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
  Clock,
  HeartPulse,
  FileText,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function ThromboembolicDiseasePage() {
  const faqs = [
    {
      question: 'What is Venous Thromboembolism (VTE)?',
      answer:
        'Venous Thromboembolism (VTE) is a medical term encompassing two linked conditions: Deep Vein Thrombosis (DVT) — a blood clot forming in deep leg veins — and Pulmonary Embolism (PE) — when a clot breaks off and travels into pulmonary lung arteries, obstructing oxygenation.',
    },
    {
      question: 'What are the warning signs of a Pulmonary Embolism (PE)?',
      answer:
        'PE is a life-threatening medical emergency. Key symptoms include sudden shortness of breath, sharp chest pain when breathing in (pleuritic pain), rapid heart rate, coughing up bloody sputum (hemoptysis), and lightheadedness or syncope. Call emergency services immediately — PE kills within 1 hour if massive.',
    },
    {
      question: 'How do anticoagulant medications (blood thinners) work?',
      answer:
        'Anticoagulants do not instantly dissolve existing clots; rather, they prevent existing blood clots from growing larger while preventing new clots from forming. Over time, your body\'s natural fibrinolytic enzymes (plasmin) naturally dissolve the clot. DOACs (apixaban, rivaroxaban) are preferred over warfarin for most VTE patients.',
    },
    {
      question: 'What is catheter-directed thrombolysis for massive PE?',
      answer:
        'For massive or submassive PE causing hemodynamic instability, catheter-directed thrombolysis (CDT) delivers low-dose tPA (tissue plasminogen activator) directly into the pulmonary artery clot through a catheter, dissolving it rapidly and restoring right ventricular function — with less bleeding risk than systemic thrombolysis.',
    },
  ];

  const symptomList = [
    {
      title: 'Unilateral Swelling & Calf Warmth',
      desc: 'Sudden, unexplained swelling in one leg accompanied by warmth and tenderness along the deep vein pathway — classic DVT presentation.',
      icon: Activity,
    },
    {
      title: 'Sudden Shortness of Breath (Dyspnea)',
      desc: 'Rapid onset of unexplained breathlessness occurring at rest or with minimal effort — hallmark PE symptom. Can be the only symptom.',
      icon: Zap,
    },
    {
      title: 'Sharp Pleuritic Chest Pain',
      desc: 'Stabbing chest pain that worsens significantly with deep inspiration or coughing, due to pulmonary infarction near the pleural surface.',
      icon: AlertTriangle,
    },
    {
      title: 'Tachycardia & Rapid Pulse',
      desc: 'Elevated heart rate over 100 beats per minute triggered by pulmonary vascular obstruction and right ventricular strain.',
      icon: HeartPulse,
    },
    {
      title: 'Hemoptysis (Coughing Blood)',
      desc: 'Blood-tinged sputum resulting from pulmonary infarction — hemorrhagic necrosis of lung tissue distal to the occluded artery.',
      icon: Clock,
    },
    {
      title: 'Syncope & Near-Fainting',
      desc: 'Massive PE can cause sudden cardiovascular collapse as the right ventricle fails acutely from acute pressure overload.',
      icon: Info,
    },
  ];

  const peProbability = [
    { factor: 'Clinical signs of DVT (leg swelling + pain)', points: '3 points' },
    { factor: 'Alternative diagnosis less likely than PE', points: '3 points' },
    { factor: 'Heart rate > 100 bpm', points: '1.5 points' },
    { factor: 'Immobilization or surgery in past 4 weeks', points: '1.5 points' },
    { factor: 'Previous DVT or PE', points: '1.5 points' },
    { factor: 'Hemoptysis', points: '1 point' },
    { factor: 'Active cancer treatment', points: '1 point' },
  ];

  const treatments = [
    {
      name: 'Direct Oral Anticoagulants (DOACs)',
      desc: 'Apixaban, Rivaroxaban, Dabigatran. First-line therapy for most VTE. No routine INR monitoring. Proven to be as effective as warfarin with significantly lower bleeding rates.',
      type: 'Anticoagulation',
    },
    {
      name: 'Low Molecular Weight Heparin (LMWH)',
      desc: 'Enoxaparin subcutaneous injections. Preferred for cancer-associated VTE (LMWH or DOAC) and during pregnancy (DOACs cross the placenta).',
      type: 'Anticoagulation',
    },
    {
      name: 'Systemic Thrombolysis (tPA)',
      desc: 'IV alteplase for massive, hemodynamically unstable PE with cardiac arrest or cardiogenic shock. Rapidly dissolves the clot but carries significant bleeding risk.',
      type: 'Clot Dissolution',
    },
    {
      name: 'Catheter-Directed Thrombolysis (CDT)',
      desc: 'Low-dose local tPA delivered directly into the pulmonary artery clot via catheter. For submassive PE with RV dysfunction — maximizes efficacy while minimizing bleeding risk.',
      type: 'Interventional',
    },
    {
      name: 'IVC Filter Placement',
      desc: 'Retrievable inferior vena cava filter placed when anticoagulation is absolutely contraindicated. Prevents clot migration from legs to lungs.',
      type: 'Mechanical',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=2000&q=80"
            alt="Thromboembolic Background"
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
            <span>Thromboembolic Disease</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Thromboembolic <br />
                <span className="animated-gradient-text">Disease & VTE</span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Clinical care guide to Deep Vein Thrombosis (DVT), Pulmonary Embolism (PE), Wells scoring, Direct Oral Anticoagulants (DOACs), and catheter-directed thrombolysis.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Schedule Clot Risk Evaluation
                </Link>
                <a
                  href="#wells"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <Activity className="mr-2 h-4 w-4 text-sky-300" />
                  Wells PE Score
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                  alt="Vascular Lab Screening"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
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
                <span>Thromboembolic Guide</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ['#overview', 'What is VTE?'],
                  ['#symptoms', 'DVT & PE Symptoms'],
                  ['#wells', 'Wells PE Score'],
                  ['#diagnosis', 'CT-PA & D-Dimer'],
                  ['#treatments', 'Anticoagulants & Thrombolysis'],
                  ['#prevention', 'VTE Prevention'],
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
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Venous Clots</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is Thromboembolic Disease?</h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Thromboembolic disease occurs when blood clots (thrombi) form inside venous blood vessels. If a clot breaks loose from lower limb deep veins, it travels through the vena cava and right heart chambers into pulmonary lung arteries — causing a potentially catastrophic Pulmonary Embolism (PE).
                </p>
                <p>
                  VTE is the third most common cardiovascular emergency after myocardial infarction and stroke. Pulmonary embolism kills approximately 100,000 Americans annually — yet up to 70% of deaths are missed at initial presentation because symptoms are nonspecific and overlap with other conditions.
                </p>
              </div>

              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Patient Clinical Evaluation"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <HeartPulse className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Warning Signs</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of DVT & Pulmonary Embolism</h2>
                </div>
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
            </section>

            {/* WELLS PE SCORE */}
            <section id="wells" className="scroll-mt-24">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-3xl p-6 sm:p-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-white p-3 rounded-2xl border border-indigo-100">
                    <Activity className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Pre-Test Probability</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Wells Criteria for PE Probability</h2>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  The Wells PE score stratifies patients into low, moderate, or high pre-test probability, guiding the sequence of diagnostic testing and helping avoid unnecessary CT-PA radiation in low-risk patients.
                </p>

                <div className="space-y-2">
                  {peProbability.map(item => (
                    <div key={item.factor} className="flex items-center justify-between bg-white p-3 rounded-xl border border-indigo-100">
                      <span className="text-xs text-slate-700 font-medium">{item.factor}</span>
                      <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg shrink-0 ml-4">{item.points}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-center">
                    <p className="text-xs font-bold text-emerald-800">Low Probability</p>
                    <p className="text-emerald-700 text-xs mt-0.5">Score ≤ 4</p>
                    <p className="text-[10px] text-slate-600 mt-1">D-Dimer first</p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-center">
                    <p className="text-xs font-bold text-amber-800">Moderate</p>
                    <p className="text-amber-700 text-xs mt-0.5">Score 5–6</p>
                    <p className="text-[10px] text-slate-600 mt-1">CT-PA directly</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 p-3 rounded-xl text-center">
                    <p className="text-xs font-bold text-red-800">High Probability</p>
                    <p className="text-red-700 text-xs mt-0.5">Score ≥ 7</p>
                    <p className="text-[10px] text-slate-600 mt-1">CT-PA + anticoagulate</p>
                  </div>
                </div>
              </div>
            </section>

            {/* DIAGNOSIS */}
            <section id="diagnosis" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Diagnostic Investigations</h2>
              <div className="space-y-3">
                {[
                  { abbr: 'CT-PA', name: 'CT Pulmonary Angiography (CT-PA)', desc: 'Gold standard for PE diagnosis — visualizes thrombi directly in pulmonary arteries with high resolution. Rapid, widely available, and highly accurate (sensitivity >95%).' },
                  { abbr: 'D-DIMER', name: 'D-Dimer Assay', desc: 'Extremely sensitive (>95%) but not specific. A negative D-dimer effectively rules out PE in low-probability patients, avoiding radiation from CT-PA.' },
                  { abbr: 'DUPLEX', name: 'Lower Extremity Duplex Ultrasound', desc: 'Confirms DVT as source of PE. If positive in a patient with PE symptoms, confirms the VTE diagnosis and guides treatment duration.' },
                  { abbr: 'ECHO', name: 'Echocardiogram (Bedside)', desc: 'Rapid assessment of right ventricular strain — RV dilation (RV/LV ratio >0.9) and septal flattening indicate hemodynamic compromise from massive PE.' },
                ].map(d => (
                  <div key={d.abbr} className="bg-white border border-slate-200/80 rounded-2xl p-5 flex space-x-4">
                    <div className="bg-blue-50 text-blue-700 font-bold text-xs px-2 py-1.5 rounded-xl h-fit shrink-0 text-center min-w-[56px]">{d.abbr}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{d.name}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" alt="CT Pulmonary Angiography PE Diagnosis" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="Echocardiogram Right Ventricular Strain" fill className="object-cover" />
                </div>
              </div>
            </section>

            {/* TREATMENTS */}
            <section id="treatments" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Anticoagulation & Reperfusion</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">VTE Treatment Strategies</h2>
                </div>
              </div>

              <div className="space-y-5">
                {treatments.map((t) => (
                  <div key={t.name} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">{t.name}</h3>
                      <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full w-fit">{t.type}</span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* PREVENTION */}
            <section id="prevention" className="scroll-mt-24">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-6 sm:p-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-white p-3 rounded-2xl border border-emerald-100">
                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">VTE Prevention</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Preventing Blood Clots</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { tip: 'Stay Mobile on Long Flights', desc: 'Walk the aisle every 1–2 hours. Perform ankle pumping exercises while seated. Stay well hydrated.' },
                    { tip: 'Graduated Compression Stockings', desc: '15–30 mmHg stockings during travel or prolonged standing reduce DVT risk by 50%.' },
                    { tip: 'Prophylactic Anticoagulation', desc: 'All high-risk surgical patients receive LMWH or fondaparinux injections pre- and post-operatively.' },
                    { tip: 'Early Mobilization After Surgery', desc: 'Getting out of bed within 24 hours of surgery dramatically reduces the risk of DVT from venous stasis.' },
                  ].map(item => (
                    <div key={item.tip} className="bg-white border border-emerald-100 p-4 rounded-2xl space-y-1">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                        <h4 className="font-bold text-slate-800 text-sm">{item.tip}</h4>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed pl-6">{item.desc}</p>
                    </div>
                  ))}
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
