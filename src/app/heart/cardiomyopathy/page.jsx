"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
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
  Dna,
} from "lucide-react";
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from "@/components/FAQAccordion";

export default function CardiomyopathyPage() {
  const faqs = [
    {
      question: "What is the most common type of cardiomyopathy?",
      answer:
        "Dilated cardiomyopathy (DCM) is the most common type, accounting for roughly 60% of all cases. In DCM, the left ventricle becomes enlarged (dilated) and weakened, reducing its ability to pump blood effectively.",
    },
    {
      question: "Is cardiomyopathy hereditary?",
      answer:
        "Yes, genetic forms are common — especially hypertrophic cardiomyopathy (HCM), which is the most common inherited cardiac condition (affecting 1 in 500 people). First-degree relatives should be offered genetic counseling and cardiac screening.",
    },
    {
      question: "Can athletes develop cardiomyopathy?",
      answer:
        "Hypertrophic cardiomyopathy is a leading cause of sudden cardiac death in young competitive athletes. All athletes with family history or symptoms should undergo pre-participation cardiovascular screening.",
    },
  ];

  const typesList = [
    {
      name: "Dilated Cardiomyopathy (DCM)",
      desc: "Left ventricle becomes enlarged (dilated) and weakened, impairing systolic pumping ability. Caused by genetics, viral myocarditis, or alcohol.",
    },
    {
      name: "Hypertrophic Cardiomyopathy (HCM)",
      desc: "Asymmetric ventricular wall thickening (hypertrophy), often impairing left ventricular outflow. Leading cause of sudden cardiac arrest in young athletes.",
    },
    {
      name: "Restrictive Cardiomyopathy (RCM)",
      desc: "Ventricular walls become rigid and non-compliant, impairing diastolic filling. Associated with amyloidosis, sarcoidosis, and hemochromatosis.",
    },
    {
      name: "Arrhythmogenic Right Ventricular Dysplasia (ARVD)",
      desc: "Genetically determined replacement of RV myocardium by fibrofatty tissue, predisposing to dangerous ventricular arrhythmias.",
    },
  ];

  const symptomList = [
    {
      title: "Breathlessness & Exertional Dyspnea",
      desc: "Shortness of breath during mild exertion or lying flat as ventricular filling pressure rises.",
      icon: Clock,
    },
    {
      title: "Chest Pain or Pressure",
      desc: "Angina occurring with exertion in HCM due to subendocardial ischemia and outflow tract obstruction.",
      icon: Heart,
    },
    {
      title: "Heart Palpitations",
      desc: "Rapid, fluttery, or irregular heartbeats caused by atrial fibrillation or ventricular ectopy.",
      icon: HeartPulse,
    },
    {
      title: "Syncope (Fainting Spells)",
      desc: "Sudden transient loss of consciousness during exertion — a red flag for outflow obstruction or VT.",
      icon: Zap,
    },
    {
      title: "Peripheral Leg & Abdominal Edema",
      desc: "Fluid retention causing ankle swelling and liver engorgement due to right ventricular elevated pressures.",
      icon: AlertTriangle,
    },
    {
      title: "Genetic Risk & Sudden Cardiac Death",
      desc: "Potentially fatal ventricular fibrillation during exertion in undiagnosed young athletes.",
      icon: Dna,
    },
  ];

  const treatments = [
    {
      name: "Guideline Medical Therapy",
      desc: "Beta-blockers, ARNI/ACEi, MRAs, and SGLT2 inhibitors to relieve symptoms and reduce disease progression.",
      duration: "Daily Protocol",
      recovery: "Long-term Management",
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Implantable Cardioverter Defibrillator (ICD)",
      desc: "Implanted device to monitor cardiac rhythm and deliver life-saving shocks if malignant ventricular arrhythmias occur.",
      duration: "1 Hour Procedure",
      recovery: "1–2 Weeks",
      image:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Septal Myectomy / Alcohol Ablation",
      desc: "Surgical or catheter-based reduction of thickened septal muscle to relieve outflow tract obstruction in HCM.",
      duration: "Procedural",
      recovery: "Hospital Stay Required",
      image:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Cardiac Transplantation",
      desc: "Definitive therapy for end-stage refractory cardiomyopathy failing optimal medical and device care.",
      duration: "Surgical",
      recovery: "Rehabilitation",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=2000&q=80"
            alt="Cardiomyopathy Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Cardiomyopathy & <br />
            Heart Muscle Health
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Cardiomyopathy Outline"
              items={[
                ["#overview", "Overview"],
                ["#types", "Classifications & Types"],
                ["#symptoms", "Symptoms"],
                ["#diagnosis", "Diagnostic Testing"],
                ["#treatment", "Treatment & Procedures"],
                ["#living-with", "Living with Cardiomyopathy"],
                ["#faqs", "FAQs"],
              ]}
              cta={{
                title: "Experiencing Fatigue or Breathlessness?",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">
            {/* 1. OVERVIEW (USE IMAGE) */}
            <section
              id="overview"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What is Cardiomyopathy?
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Cardiomyopathy is a primary disease of the heart muscle
                  (myocardium) where muscle tissue becomes abnormally enlarged,
                  thickened, rigid, or replaced by fibrofatty tissue.
                </p>
                <p>
                  Unlike CAD caused by blocked epicardial arteries,
                  cardiomyopathy stems directly from genetic sarcomere
                  mutations, viral myocarditis, metabolic infiltrations, or
                  toxic insults—leading to heart failure and ventricular
                  arrhythmias.
                </p>
              </div>

              {/* Banner Image */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiac Muscle Structure"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                Classifications & Types of Cardiomyopathy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {typesList.map((t) => (
                  <div
                    key={t.name}
                    className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2"
                  >
                    <h3 className="font-bold text-slate-900 text-base">
                      {t.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. SYMPTOMS (USE ICONS) */}
            <section
              id="symptoms"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Symptoms of Cardiomyopathy
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptomList.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <div
                      key={s.title}
                      className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100/80 hover:bg-blue-50 transition-colors space-y-2"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl border border-blue-100 text-blue-600 shadow-2xs">
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

            {/* 4. DIAGNOSIS/TEST (USE IMAGE) */}
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Diagnosis & Diagnostic Tests
                </h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Comprehensive workup determines the precise muscle subtype and
                guides medical or device interventions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
                        alt="Echocardiography"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Echocardiography
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Primary test for wall thickness and EF.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                        alt="Cardiac MRI (CMR)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Cardiac MRI (CMR)
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Gold standard for myocardial tissue fibrosis
                      characterization.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                        alt="Genetic Panel Testing"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Genetic Panel Testing
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Identifies underlying inherited gene mutations.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                        alt="24-Hour Holter Monitor"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        24-Hour Holter Monitor
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Screens for non-sustained ventricular tachycardia (NSVT).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. TREATMENT (PROCEDURES) (USE IMAGE) */}
            <section
              id="treatment"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Treatment & Procedures
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {treatments.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all overflow-hidden"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-2">
                        <span className="bg-blue-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                          {t.duration}
                        </span>
                        <span className="bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                          {t.recovery}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">
                        {t.name}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. LIVING WITH CARDIOMYOPATHY */}
            <section
              id="living-with"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Living with Cardiomyopathy
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">
                      Diet & Weight Control
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Low-sodium diet to prevent fluid overload</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Avoid heavy alcohol consumption completely</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>
                        Monitor daily weight and report sudden changes
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">
                      Exercise Precautions
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>
                        Avoid strenuous competitive sports if diagnosed with HCM
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>
                        Engage in moderate low-impact aerobic activity with
                        physician clearance
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>
                        Family genetic screening for first-degree relatives
                      </span>
                    </li>
                  </ul>
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
