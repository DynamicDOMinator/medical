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
import GuideSidebarNav from "@/components/GuideSidebarNav";
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

  const diagnosticTests = [
    {
      name: 'CT Pulmonary Angiography (CT-PA)',
      desc: 'Visualizes thrombi directly in pulmonary arteries with high resolution and accuracy to confirm or rule out a pulmonary embolism.',
    },
    {
      name: 'Lower Extremity Duplex Ultrasound',
      desc: 'High-resolution vascular ultrasound evaluating deep leg veins to detect or rule out deep vein thrombosis (DVT).',
    },
    {
      name: 'D-Dimer Blood Assay',
      desc: 'Measures clot-degradation protein fragments in the blood to help rule out active clot formation in appropriate patients.',
    },
    {
      name: 'Echocardiogram',
      desc: 'Assesses right ventricular strain, heart chamber function, and pulmonary artery pressures affected by blood clots.',
    },
  ];

  const treatments = [
    {
      name: 'Direct Oral Anticoagulants (DOACs)',
      desc: 'Apixaban, Rivaroxaban, Dabigatran. First-line therapy for most VTE. No routine INR monitoring. Proven to be as effective as warfarin with significantly lower bleeding rates.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Low Molecular Weight Heparin (LMWH)',
      desc: 'Enoxaparin subcutaneous injections. Preferred for cancer-associated VTE (LMWH or DOAC) and during pregnancy (DOACs cross the placenta).',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Catheter-Directed Thrombolysis (CDT)',
      desc: 'Low-dose local tPA delivered directly into the pulmonary artery clot via catheter. For submassive PE with RV dysfunction — maximizes efficacy while minimizing bleeding risk.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'IVC Filter Placement',
      desc: 'Retrievable inferior vena cava filter placed when anticoagulation is absolutely contraindicated. Prevents clot migration from legs to lungs.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Thromboembolic <br />
            Disease & VTE
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Thromboembolic Guide"
              items={[
                ['#overview', 'Overview'],
                ['#patient-insights', 'What Patients Should Know'],
                ['#symptoms', 'Symptoms'],
                ['#diagnosis', 'Diagnostic Testing'],
                ['#treatment', 'Treatment'],
                ['#prevention', 'Prevention'],
                ['#faqs', 'Patient FAQs'],
              ]}
              cta={{
                title: "Experiencing Sudden Breathlessness or Clot Symptoms?",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">

            {/* OVERVIEW */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is Thromboembolic Disease?</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Thromboembolic disease occurs when blood clots (thrombi) form inside venous blood vessels. If a clot breaks loose from lower limb deep veins, it travels through the vena cava and right heart chambers into pulmonary lung arteries — causing a potentially catastrophic Pulmonary Embolism (PE).
                </p>
              </div>

              <div className="mt-8 relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-white">
                <Image
                  src="/images/thromboembolic.png"
                  alt="Thromboembolic Disease & Venous Thrombus Medical Illustration"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </section>

            {/* WHAT PATIENTS SHOULD KNOW */}
            <section
              id="patient-insights"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What Patients Should Know
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  A clot is often a warning, not just an isolated event. When a DVT or PE occurs, it is important to understand why it happened—including recent surgery or immobilization, medications, cancer, inherited or acquired clotting disorders, or other risk factors.
                </p>
                <p>
                  Pulmonary embolism can be unpredictable. A relatively small clot may cause significant symptoms in some patients, while others may have few warning signs before a potentially serious event.
                </p>
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of DVT & Pulmonary Embolism</h2>
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



            {/* DIAGNOSIS */}
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Diagnostic
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Diagnosing thromboembolic disease starts with understanding your symptoms, medical history, and risk factors. We use a clinical assessment and targeted tests, such as ultrasound and CT imaging, to determine whether a clot is present, where it is located, and how it is affecting blood flow.
              </p>

              <div className="divide-y divide-slate-200/80">
                {diagnosticTests.map((d) => (
                  <div
                    key={d.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        {d.name}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TREATMENT */}
            <section id="treatment" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Treatment</h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Treatment focuses on stopping the clot from growing, preventing new clots, and reducing the risk of complications. Depending on the location and severity of the clot, treatment may include blood-thinning medications, clot-removal procedures, or clot-dissolving treatment in selected cases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {treatments.map((t) => (
                  <div key={t.name} className="rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image src={t.image} alt={t.name} fill className="object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">{t.name}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PREVENTION */}
            <section id="prevention" className="scroll-mt-24">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-6 sm:p-10">
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Preventing Blood Clots</h2>
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
