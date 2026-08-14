import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Info,
  Activity,
  Shield,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  Stethoscope,
  ChevronRight,
  UserCheck,
  Calendar,
  Sparkles,
} from "lucide-react";
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from "@/components/FAQAccordion";

export default function CADPage() {
  const faqs = [
    {
      question: "What is Coronary Artery Disease (CAD)?",
      answer:
        "Coronary Artery Disease (CAD) is a cardiovascular condition caused by atherosclerosis—the gradual buildup of fatty plaque within the epicardial coronary arteries. Over time, these plaques narrow the arterial lumen, restricting oxygen-rich blood flow to the heart muscle.",
    },
    {
      question: "What are the main warning signs of CAD?",
      answer:
        "Common symptoms include exertional chest pressure or tightness (angina), shortness of breath during routine activities, fatigue, and pain radiating to the neck, jaw, shoulder, or left arm.",
    },
    {
      question: "What is the difference between Angina and a Heart Attack?",
      answer:
        "Angina is temporary chest pressure occurring during exertion when heart muscle demand exceeds blood supply. A heart attack (Myocardial Infarction) occurs when a plaque ruptures and completely blocks a coronary artery, causing permanent heart muscle damage.",
    },
    {
      question: "How does Coronary Angioplasty & Stenting work?",
      answer:
        "Percutaneous Coronary Intervention (PCI) involves threading a fine catheter through a wrist or groin artery into the blocked heart artery. A balloon inflates the blockage and a drug-eluting stent is placed to keep the artery permanently open.",
    },
    {
      question: "Can coronary plaque be reversed?",
      answer:
        "While advanced calcified plaque cannot be fully reversed, high-intensity statin therapy, PCSK9 inhibitors, and lifestyle modifications can stabilize vulnerable plaques and significantly reduce the risk of future heart attacks.",
    },
  ];

  const typesList = [
    {
      name: "Obstructive CAD",
      desc: "Plaque significantly narrows a coronary artery and can restrict blood flow.",
    },
    {
      name: "Non-obstructive CAD",
      desc: "Symptoms or disease may occur despite no major blockage in the large coronary arteries.",
    },
    {
      name: "Chronic CAD",
      desc: "Long-standing disease that may cause predictable symptoms, particularly with exertion.",
    },
    {
      name: "Acute Coronary Syndrome",
      desc: "Sudden reduction in coronary blood flow, including unstable angina and heart attacks.",
    },
  ];

  const symptomList = [
    {
      title: "Chest Pain or Discomfort (Angina)",
      desc: "Pressure, squeezing, fullness, or burning sensation in the center of chest during exertion or emotional stress.",
      icon: Heart,
    },
    {
      title: "Shortness of Breath (Dyspnea)",
      desc: "Inability to catch breath during routine physical activities or when lying flat.",
      icon: Activity,
    },
    {
      title: "Radiation of Pain",
      desc: "Discomfort radiating outward into shoulders, left arm, neck, jaw, or upper back.",
      icon: Shield,
    },
    {
      title: "Fatigue & Lightheadedness",
      desc: "Unusual exhaustion, dizziness, cold sweats, or nausea during exertion.",
      icon: Stethoscope,
    },
  ];

  const diagnosisTests = [
    {
      title: "12-Lead Electrocardiogram (ECG)",
      desc: "Records cardiac electrical signals to detect ischemic ST-segment changes, T-wave inversions, or prior myocardial scars.",
    },
    {
      title: "Coronary CT Angiography (CCTA)",
      desc: "Non-invasive high-resolution 3D CT imaging quantifying coronary artery calcium score and luminal plaque narrowing.",
    },
    {
      title: "Stress Echocardiography / Nuclear SPECT",
      desc: "Evaluates myocardial wall motion abnormalities and perfusion deficits under exercise or pharmacological stress.",
    },
    {
      title: "Invasive Coronary Angiography (Gold Standard)",
      desc: "Direct fluoroscopic visualization of coronary lumen geometry and fractional flow reserve (FFR/iFR) via arterial catheterization.",
    },
  ];

  const treatments = [
    {
      title: "Guideline-Directed Medical Therapy (GDMT)",
      desc: "Antiplatelets (Aspirin, Clopidogrel), high-intensity statins (Atorvastatin, Rosuvastatin), Beta-Blockers, and ACE inhibitors/ARBs to stabilize plaque.",
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Percutaneous Coronary Intervention (PCI / Stenting)",
      desc: "Catheter-based balloon dilation and drug-eluting stent placement to restore vessel patency during acute or chronic ischemia.",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Coronary Artery Bypass Grafting (CABG)",
      desc: "Surgical revascularization utilizing arterial/venous grafts to bypass complex multi-vessel or left main coronary disease.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cardiac Rehabilitation & Risk Control",
      desc: "Structured exercise training, Mediterranean diet guidance, strict BP (<130/80) and HbA1c (<7.0%) optimization.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Coronary Artery Disease (CAD)
          </h1>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sticky Sidebar Navigation */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="On This Page"
              items={[
                ["#overview", "Overview"],
                ["#types", "Classifications & Types"],
                ["#symptoms", "Symptoms & Signs"],
                ["#risk-factors", "Risk Factors & Prevention"],
                ["#diagnosis", "Diagnosis & Testing"],
                ["#treatment", "Treatment Procedures"],
                ["#living-with", "Living with CAD"],
                ["#faqs", "Patient FAQs"],
              ]}
              cta={{
                title: "Experiencing Chest Pain or Pressure?",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          {/* Main Article Content */}
          <div className="lg:col-span-9 space-y-12">
            {/* 1. OVERVIEW (USE IMAGE) */}
            <section
              id="overview"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What is Coronary Artery Disease?
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Coronary artery disease is a lifelong condition caused by
                  atherosclerosis, where plaque builds up in the heart’s
                  arteries. It is not just about “blockages,” but about an active
                  disease process that can progress or suddenly rupture and cause
                  a heart attack.
                </p>
                <p>
                  The severity of a blockage alone does not fully define risk,
                  since heart attacks can occur even with moderate disease.
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
            <section
              id="types"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Classifications & Types of CAD
                </h2>
              </div>
              <div className="divide-y divide-slate-200/80">
                {typesList.map((t) => (
                  <div
                    key={t.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        {t.name}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CAD Progression Medical Infographic */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-white">
                  <Image
                    src="/images/cad-progression.jpg"
                    alt="How Coronary Artery Disease Develops - CAD Progression Infographic"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </section>

            {/* 3. SYMPTOMS (USE ICONS) */}
            <section
              id="symptoms"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Symptoms & Indicators
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptomList.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <div
                      key={s.title}
                      className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100/80 space-y-2"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl border border-blue-100 text-blue-600">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-1">
                        {s.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 4. RISK FACTORS & PREVENTION */}
            <section
              id="risk-factors"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 space-y-6"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  Risk Factors & Prevention
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Understanding what drives plaque progression and taking proactive steps allows for significant risk reduction and long-term cardiovascular health preservation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Risk Factors Box - Subtle warm/orange accent */}
                <div className="bg-amber-50/40 border border-amber-200/80 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-2.5 text-amber-900 font-bold text-base">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-200 shrink-0">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <span>Risk Factors</span>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {[
                      "High blood pressure",
                      "Family history",
                      "Diabetes",
                      "Smoking",
                      "High cholesterol",
                      "Overweight / obesity",
                      "Physical inactivity",
                      "Increasing age",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-3 text-slate-700 text-xs sm:text-sm"
                      >
                        <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prevention Box - Subtle fresh green/emerald accent */}
                <div className="bg-emerald-50/40 border border-emerald-200/80 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-2.5 text-emerald-950 font-bold text-base">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-200 shrink-0">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span>Prevention</span>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {[
                      "Don't smoke",
                      "Eat a heart-healthy diet",
                      "Exercise regularly",
                      "Maintain a healthy weight",
                      "Take prescribed medications",
                      "Monitor BP, cholesterol & glucose",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-3 text-slate-700 text-xs sm:text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. DIAGNOSIS/TEST (USE IMAGE) */}
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Diagnosis & Clinical Tests
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {diagnosisTests.map((test) => (
                  <div
                    key={test.title}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2"
                  >
                    <h3 className="font-bold text-slate-900 text-base">
                      {test.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {test.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Diagnosis Image */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiologist Reviewing Cardiac CT & Angiography"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 5. TREATMENT (PROCEDURES) (USE IMAGE) */}
            <section
              id="treatment"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 space-y-6"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  Treatment & Procedures
                </h2>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Treatment is not always a stent or surgery; many patients
                    benefit most from medical therapy and aggressive risk-factor
                    control, including cholesterol, blood pressure, diabetes,
                    smoking, and lifestyle management. Procedures are reserved
                    for selected cases based on symptoms, anatomy, and overall
                    risk.
                  </p>
                  <p>
                    Finding the right answers starts with understanding your
                    heart. We use a range of tests and procedures to see how
                    your heart is working and check for problems with your
                    coronary arteries. We’ll explain what to expect at every
                    step.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Examples
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {treatments.map((t) => (
                    <div
                      key={t.title}
                      className="rounded-2xl bg-blue-50/40 border border-blue-100/80 overflow-hidden hover:border-blue-200 transition-all"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={t.image}
                          alt={t.title}
                          fill
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-slate-900 text-base mb-1">
                          {t.title}
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {t.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/70 border border-blue-100 text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Most importantly, CAD requires ongoing prevention even after
                  treatment, because the disease can affect multiple arteries
                  over time.
                </p>
                <p className="font-semibold text-blue-950">
                  The goal is not just to open arteries, but to prevent heart
                  attacks, preserve heart function, and maintain long-term
                  health and quality of life.
                </p>
              </div>
            </section>

            {/* 6. LIVING WITH CAD */}
            <section
              id="living-with"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Living with CAD
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    Heart-Healthy Nutrition
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Adopt a Mediterranean diet rich in extra virgin olive oil,
                    whole grains, vegetables, and lean fish. Limit saturated
                    fats and sodium.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    Regular Aerobic Activity
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Aim for 150 minutes per week of moderate-intensity exercise
                    (brisk walking, cycling) approved by your cardiologist.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    Medication Adherence
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Never stop antiplatelet or statin therapy without consulting
                    your cardiologist. Consistent dosing prevents acute stent
                    thrombosis.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. FAQS */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Frequently Asked Questions
                </h2>
              </div>
              <FAQAccordion items={faqs} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
