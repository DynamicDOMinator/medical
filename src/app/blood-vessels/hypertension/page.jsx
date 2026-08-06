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
  Brain,
  Eye,
  Zap,
  Apple,
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
        'Primary (essential) hypertension accounts for 90–95% of cases and develops gradually over time due to genetics, diet, and lifestyle. Secondary hypertension is triggered by an underlying medical condition, such as renal artery stenosis, sleep apnea, or adrenal gland tumors.',
    },
    {
      question: 'What blood pressure readings define stage 1 and stage 2 hypertension?',
      answer:
        'Normal blood pressure is under 120/80 mmHg. Elevated: 120–129/under 80. Stage 1 Hypertension: systolic 130–139 or diastolic 80–89 mmHg. Stage 2 Hypertension: systolic ≥140 or diastolic ≥90 mmHg. Hypertensive crisis: systolic >180 or diastolic >120 mmHg.',
    },
    {
      question: 'What is the DASH diet and how does it help blood pressure?',
      answer:
        'The DASH (Dietary Approaches to Stop Hypertension) diet emphasizes fruits, vegetables, whole grains, lean protein, and low-fat dairy while restricting sodium, saturated fat, and red meat. Studies show DASH diet alone reduces systolic blood pressure by 8–14 mmHg.',
    },
  ];

  const typesList = [
    {
      name: 'Primary (Essential) Hypertension',
      tag: '90-95% of Cases',
      desc: 'Develops gradually over years without a single identifiable cause. Driven by age, arterial stiffening, genetics, excess sodium, and obesity.',
      color: 'text-blue-700',
      bg: 'bg-blue-50',
    },
    {
      name: 'Secondary Hypertension',
      tag: 'Underlying Cause',
      desc: 'Appears suddenly and causes higher BP than primary HTN. Caused by renal artery stenosis, kidney disease, sleep apnea, or adrenal tumors.',
      color: 'text-purple-700',
      bg: 'bg-purple-50',
    },
    {
      name: 'Isolated Systolic Hypertension',
      tag: 'Common in Elderly',
      desc: 'Systolic BP is ≥130 mmHg while diastolic remains normal (<80 mmHg). Caused by age-related loss of arterial elasticity.',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
    },
    {
      name: 'Hypertensive Emergency / Crisis',
      tag: 'Immediate Danger',
      desc: 'Blood pressure exceeds 180/120 mmHg with acute target-organ damage (chest pain, stroke symptoms, acute renal failure).',
      color: 'text-red-700',
      bg: 'bg-red-50',
    },
  ];

  const symptomList = [
    {
      title: 'Severe Headaches',
      desc: 'Occipital headaches occurring upon waking up in the morning when BP reaches peak elevation.',
      icon: Brain,
    },
    {
      title: 'Shortness of Breath',
      desc: 'Breathlessness during exertion due to increased left ventricular afterload and elevated pulmonary filling pressures.',
      icon: Activity,
    },
    {
      title: 'Chest Pain or Tightness',
      desc: 'Angina caused by left ventricular hypertrophy and increased myocardial oxygen demand.',
      icon: Heart,
    },
    {
      title: 'Visual Disturbances & Blurring',
      desc: 'Retinal microvascular damage, hemorrhages, or papilledema during severe hypertensive surges.',
      icon: Eye,
    },
    {
      title: 'Dizziness & Vertigo',
      desc: 'Transient cerebral hypoperfusion or sudden spikes causing lightheadedness and instability.',
      icon: Zap,
    },
    {
      title: 'Palpitations & Bounding Pulse',
      desc: 'Feeling rapid, thumping, or forceful heartbeats in chest, neck, or ears.',
      icon: HeartPulse,
    },
  ];

  const treatments = [
    {
      name: 'ACE Inhibitors & ARBs',
      desc: 'Lisinopril, Losartan, Valsartan. Block renin-angiotensin-aldosterone axis, relaxing systemic arteries and protecting kidney function.',
      duration: 'Daily Protocol',
      recovery: 'Ongoing Control',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Calcium Channel Blockers (CCBs)',
      desc: 'Amlodipine, Felodipine, Nifedipine. Inhibit calcium entry into arterial smooth muscle cells, reducing systemic vascular resistance.',
      duration: 'Daily Protocol',
      recovery: 'Rapid BP Reduction',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Thiazide & Loop Diuretics',
      desc: 'Hydrochlorothiazide, Chlorthalidone, Furosemide. Promote renal excretion of excess sodium and water to reduce blood volume.',
      duration: 'Daily Medication',
      recovery: 'Long-term Benefit',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Renal Artery Denervation (Catheter Procedure)',
      desc: 'Minimally invasive radiofrequency catheter ablation of renal sympathetic nerves for resistant hypertension.',
      duration: '60 Mins',
      recovery: '1 Day',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    },
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
          <div className="flex items-center text-xs text-sky-300 font-bold mb-4 space-x-1.5 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <Link href="/blood-vessels" className="hover:underline">Vascular Health</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Hypertension</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hypertension & <br />
                <span className="animated-gradient-text">Arterial Stress</span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Complete clinical guide to blood pressure categories, target organ damage, DASH diet nutrition, 24-hr ambulatory monitoring, and medical therapies by Dr. Mohamed Faher Almahmoud.
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
                  href="#treatment"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <TrendingUp className="mr-2 h-4 w-4 text-sky-300" />
                  Treatments & Medications
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
                <span>Hypertension Outline</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ['#overview', 'Overview'],
                  ['#types', 'Classifications & Types'],
                  ['#symptoms', 'Symptoms'],
                  ['#diagnosis', 'Diagnostic Testing'],
                  ['#treatment', 'Treatment & Procedures'],
                  ['#living-with', 'Living with Hypertension'],
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

            {/* 1. OVERVIEW (USE IMAGE) */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Arterial Pressure Overview</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is Hypertension?</h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Hypertension occurs when blood exerts chronically elevated pressure against arterial walls as it flows through your body. Over time, high pressure weakens vessel linings, accelerates plaque accumulation (atherosclerosis), and forces the heart muscle to pump significantly harder against increased systemic resistance.
                </p>
                <p>
                  Worldwide, hypertension affects over 1.28 billion adults — yet only about 42% of those diagnosed are adequately controlled. It remains the single most important preventable risk factor for cardiovascular disease, stroke, and kidney failure.
                </p>
              </div>

              {/* Banner Image */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiologist Blood Pressure Consultation"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Classifications & Types of Hypertension</h2>
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
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <HeartPulse className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Clinical Warning Signs</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of High Blood Pressure</h2>
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
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Diagnostic Evaluation</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnosis & BP Testing</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Accurate blood pressure determination requires standardized measurement techniques and evaluation of target organ health:
                  </p>
                  <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 space-y-2">
                    <h4 className="font-bold text-blue-950 text-sm">Diagnostic Modalities:</h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>24-Hour Ambulatory BP Monitoring (ABPM):</strong> Eliminates white-coat HTN and reveals nocturnal dipping patterns.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>Echocardiography:</strong> Assesses Left Ventricular Hypertrophy (LVH) and diastolic filling.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>Renal Duplex Ultrasound:</strong> Evaluates renal artery stenosis in secondary hypertension.</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                        <span><strong>Renal & Endocrine Biomarkers:</strong> Serum Creatinine, eGFR, Urine Albumin, and Aldosterone-to-Renin ratio.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-blue-200 shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                      alt="Ambulatory Blood Pressure Measurement"
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
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Therapeutic Management</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Treatment & Procedures</h2>
                </div>
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

            {/* 6. LIVING WITH HYPERTENSION */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Lifestyle & Self-Care</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Living with Hypertension</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">DASH Diet & Sodium Control</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Follow DASH diet rich in potassium, calcium, and fiber</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Restrict sodium intake to &lt;1,500–2,000 mg per day</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Avoid ultra-processed foods and hidden dietary sodium</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Exercise & Home Monitoring</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>150 minutes of aerobic physical exercise per week</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Home blood pressure monitoring twice daily (morning & evening)</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Weight loss (every 10 kg lost drops BP by 5–10 mmHg)</span></li>
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
