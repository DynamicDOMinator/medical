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
          <div className="flex items-center text-xs text-sky-300 font-bold mb-4 space-x-1.5 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <Link href="/heart" className="hover:underline">
              Heart Conditions
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span>Cardiomyopathy</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Cardiomyopathy & <br />
                <span className="animated-gradient-text">
                  Heart Muscle Health
                </span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Comprehensive guide to dilated, hypertrophic, and restrictive
                cardiomyopathy, genetic testing, cardiac MRI imaging, and ICD
                defibrillator protection by Dr. Mohamed Faher Almahmoud.
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
                  href="#treatment"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <Activity className="mr-2 h-4 w-4 text-sky-300" />
                  Treatments & Devices
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiomyopathy MRI Evaluation"
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
                <span>Cardiomyopathy Outline</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ["#overview", "Overview"],
                  ["#types", "Classifications & Types"],
                  ["#symptoms", "Symptoms"],
                  ["#diagnosis", "Diagnostic Testing"],
                  ["#treatment", "Treatment & Procedures"],
                  ["#living-with", "Living with Cardiomyopathy"],
                  ["#faqs", "FAQs"],
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
                  <p className="text-xs font-bold text-blue-900">
                    Family History of Heart Disease?
                  </p>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Get echocardiography & genetic risk screening.
                  </p>
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
            <section
              id="overview"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Myocardial Pathology
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    What is Cardiomyopathy?
                  </h2>
                </div>
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
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <HeartPulse className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Clinical Signs
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Symptoms of Cardiomyopathy
                  </h2>
                </div>
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
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Advanced Imaging & Genetics
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Diagnosis & Diagnostic Tests
                  </h2>
                </div>
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
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Therapeutic Options
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Treatment & Procedures
                  </h2>
                </div>
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
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Self-Management
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Living with Cardiomyopathy
                  </h2>
                </div>
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
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Patient Queries
                </span>
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
