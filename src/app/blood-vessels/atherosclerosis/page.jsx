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
  Clock,
  Zap,
  Apple,
  Heart,
} from 'lucide-react';
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from '@/components/FAQAccordion';

export default function AtherosclerosisPage() {
  const faqs = [
    {
      question: 'What is Atherosclerosis?',
      answer:
        'Atherosclerosis is a chronic inflammatory condition where cholesterol, calcium, and cellular debris form fatty deposits (plaques) inside vessel walls, narrowing arteries and restricting oxygenated blood flow.',
    },
    {
      question: 'Can atherosclerotic plaque be reversed or stabilized?',
      answer:
        'While calcified plaque cannot be completely erased, high-intensity statin therapy, PCSK9 inhibitors, and strict LDL-C reduction halt plaque progression and stabilize vulnerable plaques.',
    },
    {
      question: 'What is the difference between stable and vulnerable plaque?',
      answer:
        'Stable plaques have a thick fibrous cap. Vulnerable plaques have a thin cap covering a lipid core and are prone to sudden rupture, triggering blood clots.',
    },
  ];

  const typesList = [
    {
      name: 'Coronary Atherosclerosis',
      tag: 'Heart Attack Risk',
      desc: 'Plaque accumulation in epicardial coronary arteries supplying oxygen to heart muscle. Causes angina and acute MI.',
      color: 'text-blue-700',
      bg: 'bg-blue-50',
    },
    {
      name: 'Carotid Atherosclerosis',
      tag: 'Stroke Risk',
      desc: 'Plaque buildup in carotid arteries feeding the brain. Causes transient ischemic attacks (TIA) and ischemic stroke.',
      color: 'text-purple-700',
      bg: 'bg-purple-50',
    },
    {
      name: 'Peripheral Arterial Atherosclerosis',
      tag: 'Leg Ischemia',
      desc: 'Plaque narrowing lower extremity femoral and popliteal arteries, causing claudication pain and non-healing ulcers.',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
    },
    {
      name: 'Renal & Aortic Atherosclerosis',
      tag: 'Aortic & Kidney Risk',
      desc: 'Plaque in the abdominal aorta and renal arteries causing renovascular hypertension and aortic aneurysm formation.',
      color: 'text-red-700',
      bg: 'bg-red-50',
    },
  ];

  const symptoms = [
    { title: 'Chest Pressure & Exertional Angina', desc: 'Squeezing chest pain caused by coronary artery plaque narrowing blood flow.', icon: Heart },
    { title: 'Leg Pain During Walking (Claudication)', desc: 'Calf muscle cramping during exercise relieved by rest, caused by peripheral arterial plaque.', icon: Activity },
    { title: 'Sudden Numbness or Weakness', desc: 'Transient ischemic attacks caused by carotid plaque embolization to brain arteries.', icon: Zap },
    { title: 'Shortness of Breath', desc: 'Dyspnea during physical activity due to impaired cardiac oxygen delivery.', icon: Clock },
    { title: 'Coldness & Pale Skin in Legs', desc: 'Decreased peripheral arterial circulation in feet and toes.', icon: AlertTriangle },
    { title: 'High Blood Pressure Spikes', desc: 'Renovascular stenosis driven by renal artery plaque accumulation.', icon: HeartPulse },
  ];

  const treatments = [
    { name: 'High-Intensity Statin Therapy', desc: 'Atorvastatin 80 mg or Rosuvastatin 40 mg. Lowers LDL-C by >50%, halts plaque growth, and stabilizes fibrous caps.', duration: 'Daily Medication', recovery: 'Long-term Protection', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80' },
    { name: 'PCSK9 Inhibitors (Evolocumab / Alirocumab)', desc: 'Injectable monoclonal antibodies providing additional 50–60% LDL-C reduction for high-risk patients.', duration: 'Bi-weekly Injection', recovery: 'Plaque Regression', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80' },
    { name: 'Antiplatelet Therapy (Aspirin / Clopidogrel)', desc: 'Inhibits platelet aggregation on vulnerable plaque surfaces to prevent acute arterial thrombosis.', duration: 'Daily Protocol', recovery: 'Ongoing Prevention', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80' },
    { name: 'Angioplasty & Stenting / Endarterectomy', desc: 'Interventional reopening of severely occluded coronary, carotid, or peripheral vessels using drug-eluting stents.', duration: 'Procedural', recovery: 'Rapid Revascularization', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Atherosclerosis & <br />
            Arterial Plaque
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Atherosclerosis Outline"
              items={[
                ['#overview', 'Overview'],
                ['#types', 'Classifications & Types'],
                ['#symptoms', 'Symptoms'],
                ['#diagnosis', 'Diagnostic Testing'],
                ['#treatment', 'Treatment & Procedures'],
                ['#living-with', 'Living with Atherosclerosis'],
                ['#faqs', 'FAQs'],
              ]}
              cta={{
                title: "Experiencing Chest Tightness or Poor Circulation?",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">

            {/* 1. OVERVIEW (USE IMAGE) */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is Atherosclerosis?</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Atherosclerosis is the underlying driver behind coronary artery disease, carotid stenosis, and peripheral artery disease. It begins when LDL particles penetrate arterial walls, triggering inflammatory foam cell accumulation and plaque formation.
                </p>
                <p>
                  Over time, smooth muscle migration forms a fibrous cap over a lipid core. If the cap ruptures, thrombosis causes acute ischemia.
                </p>
              </div>

              {/* Banner Image */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiologist Analyzing Vascular Scan"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Classifications & Vascular Locations</h2>
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
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of Atherosclerosis</h2>
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
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnosis & Plaque Screening</h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Advanced risk stratification detects subclinical atherosclerosis before cardiac events occur:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                        alt="Coronary CT Angiography (CCTA)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Coronary CT Angiography (CCTA)</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Visualizes soft and calcified plaque burden.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                        alt="Coronary Calcium Score (CAC)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Coronary Calcium Score (CAC)</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Quantifies subclinical coronary calcification.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                        alt="Advanced Lipid Panel"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Advanced Lipid Panel</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Measures ApoB, Lp(a), and atherogenic particles.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                        alt="Carotid Duplex Ultrasound"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Carotid Duplex Ultrasound</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Screens for carotid artery intima-media thickness & bifurcation plaque.</p>
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

            {/* 6. LIVING WITH ATHEROSCLEROSIS */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Living with Atherosclerosis</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">Dietary Modifications</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Strict Mediterranean diet with soluble fiber and plant sterols</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Eliminate trans-fats and restrict saturated fat to &lt;6% of calories</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Increase omega-3 fatty acids from fish and flaxseed</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Exercise & Smoking Cessation</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>150 minutes of moderate aerobic exercise weekly</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Complete smoking cessation (eliminates endothelial toxicity)</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Maintain BP &lt;130/80 and HbA1c &lt;7.0%</span></li>
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
