'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Info,
  Stethoscope,
  Activity,
  ShieldCheck,
  Zap,
  Clock,
  HeartPulse,
  FileText,
  Apple,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function HeartCADPage() {
  const faqs = [
    {
      question: 'What is Coronary Artery Disease (CAD)?',
      answer:
        'Coronary Artery Disease occurs when cholesterol plaque accumulates in the arteries supplying oxygen-rich blood to your heart muscle. Over time, plaque narrows the coronary arteries, restricting blood flow and causing angina or heart attacks.',
    },
    {
      question: 'What is the difference between Angina and a Heart Attack?',
      answer:
        'Angina is temporary chest pressure occurring during exertion when heart muscle demand exceeds blood supply. A heart attack (Myocardial Infarction) occurs when a plaque ruptures and completely blocks a coronary artery, causing permanent heart muscle damage.',
    },
    {
      question: 'How does Coronary Angioplasty & Stenting work?',
      answer:
        'Percutaneous Coronary Intervention (PCI) involves threading a fine catheter through a wrist or groin artery into the blocked heart artery. A balloon inflates the blockage and a drug-eluting stent is placed to keep the artery permanently open.',
    },
    {
      question: 'Can coronary plaque be reversed?',
      answer:
        'While advanced calcified plaque cannot be fully reversed, high-intensity statin therapy, PCSK9 inhibitors, and lifestyle modifications can stabilize vulnerable plaques and significantly reduce the risk of future heart attacks.',
    },
  ];

  const typesList = [
    {
      name: 'Stable Angina',
      desc: 'Predictable chest pressure occurring during physical activity or emotional stress that resolves within minutes of rest or sublingual nitroglycerin.',
    },
    {
      name: 'Unstable Angina',
      desc: 'Unpredictable chest discomfort occurring at rest or with minimal exertion. Indicates plaque disruption and high immediate risk of heart attack.',
    },
    {
      name: 'Acute Myocardial Infarction (NSTEMI / STEMI)',
      desc: 'Complete or subtotal occlusion of a coronary artery causing cardiac cell death. Requires urgent catheterization and stent revascularization.',
    },
    {
      name: 'Coronary Microvascular Disease (MVD)',
      desc: 'Damage to the walls of tiny coronary blood vessels that branch off from major arteries, causing angina despite open main arteries.',
    },
  ];

  const symptomList = [
    {
      title: 'Chest Pain or Discomfort (Angina)',
      desc: 'Pressure, squeezing, fullness, or burning sensation in the center of chest during exertion or emotional stress.',
      icon: Heart,
    },
    {
      title: 'Shortness of Breath (Dyspnea)',
      desc: 'Inability to catch your breath during mild physical activity when heart muscle is starved of oxygen.',
      icon: Clock,
    },
    {
      title: 'Radiation to Arm, Neck or Jaw',
      desc: 'Radiating discomfort extending into the left shoulder, left arm, neck, jaw, or upper back.',
      icon: AlertTriangle,
    },
    {
      title: 'Extreme Fatigue & Weakness',
      desc: 'Unusual, overwhelming tiredness during routine tasks caused by decreased cardiac output.',
      icon: Info,
    },
    {
      title: 'Cold Sweats & Lightheadedness',
      desc: 'Sudden diaphoresis (cold sweating), nausea, or dizziness accompanying chest pressure.',
      icon: Zap,
    },
    {
      title: 'Heart Palpitations',
      desc: 'Sensation of rapid, thumping, or irregular heartbeats triggered by myocardial ischemia.',
      icon: HeartPulse,
    },
  ];

  const treatments = [
    {
      name: 'Percutaneous Coronary Intervention (PCI / Stenting)',
      desc: 'Minimally invasive catheterization where a tiny balloon dilates blocked heart arteries and a Drug-Eluting Stent (DES) scaffolds it open permanently.',
      duration: '45–60 Mins',
      recovery: '1–2 Days',
    },
    {
      name: 'Fractional Flow Reserve (FFR / iFR) Assessment',
      desc: 'Pressure wire measurement inside coronary arteries to determine if a narrowed artery truly starves heart muscle of blood flow before stenting.',
      duration: '30 Mins',
      recovery: 'Same Day',
    },
    {
      name: 'Intravascular Ultrasound (IVUS) & OCT Imaging',
      desc: 'High-definition sound and light wave cameras inserted inside coronary vessels to view plaque composition and verify stent expansion.',
      duration: 'Diagnostic',
      recovery: 'Immediate',
    },
    {
      name: 'Optimal Medical Therapy (OMT)',
      desc: 'Guideline-directed medical management using Dual Antiplatelet Therapy (DAPT), high-intensity statins, beta-blockers, and ACE-inhibitors.',
      duration: 'Daily Protocol',
      recovery: 'Long-term Protection',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=2000&q=80"
            alt="CAD Clinical Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center text-xs text-sky-300 font-bold mb-4 space-x-1.5 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <Link href="/heart" className="hover:underline">Heart Conditions</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Coronary Artery Disease</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Coronary Artery <br />
                <span className="animated-gradient-text">Disease (CAD)</span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Detailed clinical guide to coronary plaque accumulation, angina pectoris, stress testing, cardiac catheterization, FFR/IVUS imaging, and drug-eluting stenting by Dr. Mohamed Faher Almahmoud.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Schedule Cardiac Consultation
                </Link>
                <a
                  href="#diagnosis"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <Activity className="mr-2 h-4 w-4 text-sky-300" />
                  Stress Testing & Angiography
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiac Catheterization Suite"
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

          {/* Sticky Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 bg-white border border-blue-100 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider border-b border-blue-50 pb-3 flex items-center space-x-2">
                <FileText className="h-4 w-4 text-blue-600" />
                <span>CAD Guide Outline</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ['#overview', 'Overview'],
                  ['#types', 'Classifications & Types'],
                  ['#symptoms', 'Symptoms'],
                  ['#diagnosis', 'Diagnostic Testing'],
                  ['#treatment', 'Treatment & Procedures'],
                  ['#living-with', 'Living with CAD'],
                  ['#faqs', 'FAQs'],
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
                  <p className="text-xs font-bold text-blue-900">Experiencing Chest Pain?</p>
                  <p className="text-[11px] text-slate-600 mt-1">Contact PulseCare Cardiology for urgent evaluation.</p>
                  <Link
                    href="/contact"
                    className="mt-3 block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/20"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Sections */}
          <div className="lg:col-span-9 space-y-12">

            {/* 1. OVERVIEW (USE IMAGE) */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Coronary Circulation</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is Coronary Artery Disease?</h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Coronary Artery Disease (CAD) is the leading cause of heart attacks and cardiovascular mortality worldwide. It develops when cholesterol, fats, calcium, and inflammatory cells accumulate within the inner lining of the major epicardial coronary arteries — the vessel channels that deliver blood, oxygen, and nutrients to your continuously pumping heart muscle.
                </p>
                <p>
                  As atherosclerotic plaque grows, it restricts blood flow to the myocardium during physical exertion or stress (causing <strong>Angina Pectoris</strong>). If a plaque ruptures, a blood clot forms instantly, completely occluding coronary blood flow and triggering an acute <strong>Myocardial Infarction (Heart Attack)</strong>.
                </p>
              </div>

              {/* Overview Medical Banner Image */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiologist Examining Coronary Angiogram"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Classifications & Types of CAD</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {typesList.map((t) => (
                  <div key={t.name} className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2">
                    <h3 className="font-bold text-slate-900 text-base">{t.name}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. SYMPTOMS (USE ICONS) */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <HeartPulse className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Clinical Warning Signs</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of Coronary Disease</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptomList.map((s) => {
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
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Advanced Cardiac Diagnostics</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnostic Tests & Imaging</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Accurate CAD diagnosis combines non-invasive risk stratification with advanced anatomical imaging. Dr. Almahmoud utilizes state-of-the-art diagnostic modalities:
                  </p>
                  <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 space-y-2">
                    <h4 className="font-bold text-blue-950 text-sm">Diagnostic Modalities:</h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>Treadmill Stress Echocardiogram:</strong> Evaluates wall motion under stress.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>Coronary CT Angiography (CCTA):</strong> 3D non-invasive plaque imaging.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>Invasive Coronary Angiography:</strong> Gold-standard fluoroscopic vessel mapping.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-blue-200 shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                      alt="Cardiologist Analyzing Diagnostic Scan"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 5. TREATMENT (PROCEDURES) (USE IMAGE) */}
            <section id="treatment" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Interventional Cardiology</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Treatment & Procedures</h2>
                </div>
              </div>

              <div className="space-y-5">
                {treatments.map((t) => (
                  <div key={t.name} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">{t.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{t.duration}</span>
                        <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">{t.recovery}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 relative h-64 rounded-2xl overflow-hidden border border-blue-100 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=2000&q=80"
                  alt="Angioplasty Stent Procedure Room"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider font-extrabold text-sky-300">Interventional Procedure Suite</p>
                  <p className="text-sm font-bold">Radial artery access for faster recovery and immediate ambulation.</p>
                </div>
              </div>
            </section>

            {/* 6. LIVING WITH CAD */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Heart Health</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Living with CAD & Prevention</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">Dietary Recommendations</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Mediterranean diet rich in olive oil, fish, vegetables, and whole grains</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Reduce saturated fats, trans fats, and processed sugars</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Limit sodium intake to under 2,000 mg per day</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Physical Activity Guidelines</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>At least 150 minutes of moderate aerobic exercise weekly</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Brisk walking, cycling, or swimming as low-impact options</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Enroll in cardiac rehabilitation after any heart event</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. FAQS */}
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
