"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Activity,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
  PhoneCall,
  Award,
  CheckCircle2,
  Zap,
  Clock,
  Sparkles,
  UserCheck,
  Microscope,
  GraduationCap,
  Calendar,
  Building2,
  AlertCircle,
  BookOpen,
} from "lucide-react";

const doctorSpecialties = [
  {
    id: "heart",
    label: "Heart & Cardiac Specializations",
    icon: Heart,
    color: "from-blue-600 to-indigo-600",
    title: "Advanced Cardiac Care & Structural Heart Interventions",
    description:
      "Expert medical diagnosis, interventional consultation, and management for coronary artery disease, valvular heart disease (TAVR, MitraClip), and electrical heart disorders.",
    conditions: [
      {
        name: "Coronary Artery Disease (CAD)",
        link: "/heart/cad",
        desc: "Complex coronary artery interventions and plaque management.",
      },
      {
        name: "Arrhythmias & Rhythm Disorders",
        link: "/heart/arrhythmias",
        desc: "Atrial fibrillation, electrical disturbances, and Holter monitoring.",
      },
      {
        name: "Valvular & Structural Disease",
        link: "/heart/valvular-heart-disease",
        desc: "Aortic stenosis (TAVR), MitraClip, ASD & PFO closure.",
      },
      {
        name: "Congestive Heart Failure (CHF)",
        link: "/heart/chf",
        desc: "Advanced heart failure care & mechanical circulatory support.",
      },
    ],
    hubLink: "/heart",
    hubText: "View All Heart Care Guides →",
  },
  {
    id: "vascular",
    label: "Vascular & Circulation Specializations",
    icon: Activity,
    color: "from-sky-600 to-blue-700",
    title: "Peripheral Vascular & Endovascular Center",
    description:
      "Specialized interventional diagnosis for peripheral artery disease (PAD), deep vein thrombosis (DVT), pulmonary embolism, and hyperlipidemia.",
    conditions: [
      {
        name: "Venous Insufficiency & Varicose",
        link: "/blood-vessels/venous-disease",
        desc: "Lower limb venous valve management and duplex ultrasound.",
      },
      {
        name: "Peripheral Artery Disease (PAD)",
        link: "/blood-vessels/peripheral-artery-disease",
        desc: "Endovascular intervention for leg arterial blockages.",
      },
      {
        name: "Thromboembolic & DVT Care",
        link: "/blood-vessels/thromboembolic-disease",
        desc: "Minimally invasive catheter procedures for DVT & Pulmonary Embolism.",
      },
      {
        name: "Hypertension & Lipidology",
        link: "/blood-vessels/hypertension",
        desc: "Atherosclerosis prevention, cholesterol & blood pressure control.",
      },
    ],
    hubLink: "/blood-vessels",
    hubText: "View All Vascular Care Guides →",
  },
  {
    id: "diagnostics",
    label: "Diagnostic Excellence",
    icon: Microscope,
    color: "from-blue-700 to-sky-600",
    title: "Advanced Cardiovascular Imaging & Interpretation",
    description:
      "Certified diagnostic interpretation in Nuclear Cardiology, Echocardiography, Cardiac CT, and Vascular Interpretation (RPVI).",
    conditions: [
      {
        name: "Echocardiography (Echo)",
        link: "/heart",
        desc: "Detailed 3D valve, ejection fraction, and cardiac wall motion imaging.",
      },
      {
        name: "Cardiac Computed Tomography (CT)",
        link: "/heart/cad",
        desc: "High-resolution coronary calcium scoring and CT angiography.",
      },
      {
        name: "RPVI Vascular Interpretation",
        link: "/blood-vessels/peripheral-artery-disease",
        desc: "Registered interpretation for arterial & venous duplex ultrasound.",
      },
      {
        name: "Nuclear Cardiology & Stress Testing",
        link: "/heart/cad",
        desc: "Myocardial perfusion imaging for ischemic heart disease.",
      },
    ],
    hubLink: "/about",
    hubText: "Learn About Diagnostic Standards →",
  },
  {
    id: "prevention",
    label: "Preventive Cardiology & Research",
    icon: ShieldCheck,
    color: "from-indigo-600 to-blue-600",
    title: "Clinical Research & Landmark Atherosclerosis Trials",
    description:
      "Evidence-based risk factor modification backed by NIH-sponsored clinical research fellowship experience.",
    conditions: [
      {
        name: "Atherosclerosis Regression",
        link: "/blood-vessels/hypertension",
        desc: "Advanced lipid management and plaque stabilization.",
      },
      {
        name: "Hyperlipidemia & Weight Loss",
        link: "/blood-vessels/hypertension",
        desc: "Targeted cardio-metabolic risk reduction programs.",
      },
      {
        name: "Stroke & Clot Risk Reduction",
        link: "/blood-vessels/thromboembolic-disease",
        desc: "Atrial fibrillation stroke prevention & anticoagulation.",
      },
      {
        name: "Heart Failure Prevention",
        link: "/heart/chf",
        desc: "Proactive monitoring for hypertrophic cardiomyopathy (HOCM) & CHF.",
      },
    ],
    hubLink: "/contact",
    hubText: "Book Consultation →",
  },
];

const symptomCheckerItems = [
  {
    id: 1,
    title: "Palpitations, Atrial Fibrillation or Fluttering",
    category: "Arrhythmia & Rhythm",
    severity: "Requires Medical Evaluation",
    recommendation:
      "Dr. Almahmoud recommends continuous ECG/Holter monitoring and clinical research-backed rhythm management.",
    primaryLink: "/heart/arrhythmias",
    linkText: "Read Arrhythmias Guide",
  },
  {
    id: 2,
    title: "Leg Pain While Walking (Claudication)",
    category: "Peripheral Vascular Disease",
    severity: "Circulatory Warning",
    recommendation:
      "Vascular interpretation (RPVI) and Ankle-Brachial Index (ABI) testing to check for Peripheral Artery Disease.",
    primaryLink: "/blood-vessels/peripheral-artery-disease",
    linkText: "Read PAD Guide",
  },
  {
    id: 3,
    title: "Leg Swelling, DVT or Clot Concerns",
    category: "Deep Vein Thrombosis (DVT)",
    severity: "Vascular Assessment Needed",
    recommendation:
      "Duplex ultrasound and evaluation for catheter-directed thrombosis therapies or anticoagulation.",
    primaryLink: "/blood-vessels/venous-disease",
    linkText: "Read DVT & Venous Guide",
  },
  {
    id: 4,
    title: "Shortness of Breath or Valve Murmur",
    category: "Structural Heart & Valve",
    severity: "Specialist Evaluation Recommended",
    recommendation:
      "Comprehensive Echocardiogram to evaluate aortic stenosis (TAVR candidate), mitral regurgitation (MitraClip), or heart failure.",
    primaryLink: "/heart/chf",
    linkText: "Read Structural Heart Guide",
  },
];

const boardCertificationsList = [
  "Internal Medicine",
  "Cardiovascular Disease",
  "Nuclear Cardiology",
  "Echocardiography",
  "Cardiac Computed Tomography",
  "Registered Physician in Vascular Interpretation (RPVI)",
];

const testimonials = [
  {
    quote:
      "Dr. Almahmoud explained my TAVR procedure options with tremendous care and clarity. His expertise in structural heart disease gave our family total peace of mind.",
    author: "Robert M.",
    age: 68,
    condition: "Aortic Stenosis / Valve Patient",
    stars: 5,
  },
  {
    quote:
      "I suffered from severe leg pain when walking. Thanks to Dr. Almahmoud's vascular intervention and PAD treatment plan, I am fully active again.",
    author: "Elena R.",
    age: 62,
    condition: "Peripheral Vascular Disease",
    stars: 5,
  },
  {
    quote:
      "Comprehensive cardiology care with deep research expertise in atrial fibrillation and cholesterol optimization. Truly a top-tier cardiologist.",
    author: "David H.",
    age: 55,
    condition: "Coronary & AFib Patient",
    stars: 5,
  },
];

export default function HomeClient() {
  const [activeTab, setActiveTab] = useState("heart");
  const [selectedSymptom, setSelectedSymptom] = useState(
    symptomCheckerItems[0],
  );

  const currentCategory = doctorSpecialties.find((c) => c.id === activeTab);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 overflow-hidden">
      {/* 1. HERO SECTION: DR. ALMAHMOUD & CLINIC PORTAL */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            
            {/* Hero Main Headline */}
            <div className="space-y-6 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Advanced Care for <br />
                <span className="animated-gradient-text font-black">
                  Heart & Vascular Health
                </span>
              </h1>

              <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
                Board-certified cardiologist specialized in general and
                interventional cardiology, coronary artery disease, peripheral
                vascular disease, and structural heart procedures.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-4 font-bold rounded-2xl text-blue-950 bg-gradient-to-r from-sky-300 via-sky-200 to-blue-200 hover:from-sky-200 hover:to-white transition-all duration-300 shadow-lg shadow-sky-400/20 hover-lift text-sm sm:text-base"
                >
                  <Calendar className="mr-2 h-5 w-5 text-blue-950" />
                  Book Clinic Consultation
                </Link>
                <a
                  href="#doctor-profile"
                  className="inline-flex items-center justify-center px-7 py-4 border border-blue-400/40 hover:border-blue-300 font-bold rounded-2xl text-white bg-white/10 hover:bg-white/15 backdrop-blur-md transition-all duration-300 hover-lift text-sm sm:text-base"
                >
                  <Stethoscope className="mr-2 h-5 w-5 text-sky-300" />
                  View Physician Profile
                </a>
              </div>

              {/* Doctor Quick Certifications & Key Stats */}
              <div className="pt-8 pb-4 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-blue-900/60 max-w-3xl mx-auto text-center">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
                  <p className="text-xl sm:text-2xl font-black text-white">
                    F.A.C.C.
                  </p>
                  <p className="text-xs text-sky-300 font-medium mt-0.5">
                    Fellow American Coll. Cardiology
                  </p>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
                  <p className="text-xl sm:text-2xl font-black text-white">
                    6x
                  </p>
                  <p className="text-xs text-sky-300 font-medium mt-0.5">
                    Board Certified Specialist
                  </p>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
                  <p className="text-xl sm:text-2xl font-black text-white">
                    RPVI
                  </p>
                  <p className="text-xs text-sky-300 font-medium mt-0.5">
                    Vascular Interpretation
                  </p>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
                  <p className="text-xl sm:text-2xl font-black text-white">
                    15+ Yrs
                  </p>
                  <p className="text-xs text-sky-300 font-medium mt-0.5">
                    Clinical Excellence
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. DOCTOR PROFILE, BOARD CERTIFICATIONS, EDUCATION & BIO */}
      <section
        id="doctor-profile"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-12 shadow-xl shadow-blue-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Photo on Left & Board Certifications */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-blue-100 via-sky-50 to-slate-100 p-2 border border-blue-200/80 shadow-lg">
                <div className="relative h-96 sm:h-[480px] w-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/doc-img.png"
                    alt="Dr. Mohamed Faher Almahmoud, M.D., F.A.C.C."
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-blue-100 shadow-lg text-center">
                    <h3 className="font-extrabold text-slate-900 text-base">
                      Dr. Mohamed Faher Almahmoud
                    </h3>
                    <p className="text-blue-600 text-xs font-bold mt-0.5">
                      M.D., F.A.C.C.
                    </p>
                    <p className="text-slate-500 text-[11px] mt-1">
                      Specialist in General & Interventional Cardiology
                    </p>
                  </div>
                </div>
              </div>

              {/* Board Certification Badges (6 Items) */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span>Board Certifications (6)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {boardCertificationsList.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 bg-white px-3 py-2 rounded-xl border border-blue-100 text-xs text-slate-700 font-semibold shadow-2xs"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Full Doctor Biography, Education, Fellowship */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 text-blue-600 text-xs font-extrabold uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 mb-3">
                  <GraduationCap className="h-4 w-4" />
                  <span>Physician Biography & Education</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Dr. Mohamed Faher Almahmoud,{" "}
                  <span className="text-blue-600">M.D., F.A.C.C.</span>
                </h2>
                <p className="text-blue-600 font-bold text-sm mt-1">
                  Board-Certified Cardiologist & Interventional Specialist
                </p>
              </div>

              {/* Full Biography Text */}
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Dr. Almahmoud is a board-certified cardiologist specialized in
                  general and interventional cardiology with interest in
                  coronary artery disease, peripheral vascular disease and
                  valvular/structural heart disease.
                </p>
                <p>
                  Dr. Almahmoud has expertise in clinical research with
                  interests in weight loss, atrial fibrillation, heart failure,
                  valvular heart disease, atherosclerosis and hyperlipidemia
                  (high cholesterol). He completed two years of NIH sponsored
                  clinical research fellowship and participated in several
                  landmark clinical trials targeting atherosclerosis and
                  ischemic heart disease.
                </p>
                <p>
                  His expertise includes advanced coronary interventions,
                  peripheral vascular disease and structural/valvular heart
                  disease. Including a variety of minimally invasive
                  trans-catheter procedures for patients with deep venous
                  thrombosis, pulmonary embolism, aortic stenosis (TAVR and
                  aortic valvuloplasty), mitral regurgitation (MitraClip),
                  atrial septal defect (ASD), patent foramen ovale (PFO), and
                  hypertrophic cardiomyopathy (HOCM).
                </p>
                <p>
                  He is also trained on advanced mechanical support devices for
                  patients with acute heart failure and cardiogenic shock.{" "}
                </p>
              </div>

              {/* Education & Fellowships Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Medical Education */}
                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                    <span>Medical Education</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-2 font-medium">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>University of Aleppo</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>American University of Beirut</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>SUNY Downstate Medical Center</span>
                    </li>
                  </ul>
                </div>

                {/* Fellowship */}
                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <Building2 className="h-4 w-4 text-blue-600" />
                    <span>Fellowships</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-2 font-medium">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>
                        University of Texas Medical Branch (UTMB), Galveston
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>
                        Medical University of South Carolina (MUSC), Charleston
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DOCTOR'S SPECIALTIES & CONDITIONS HUB */}
      <section
        id="doctor-specialties"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-blue-600 text-xs font-extrabold uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 mb-3">
            <Zap className="h-4 w-4" />
            <span>Clinical Specializations Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Dr. Almahmoud's Clinical Specializations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Explore detailed evidence-based guides for coronary interventions,
            peripheral vascular disease, and structural heart care.
          </p>
        </div>

        {/* Specialty Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {doctorSpecialties.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center space-x-2 px-5 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-600/25 scale-105"
                    : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/80"
                }`}
              >
                <Icon
                  className={`h-4 w-4 ${isActive ? "text-white" : "text-blue-600"}`}
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {currentCategory && (
          <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xl shadow-blue-900/5 transition-all duration-300 animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8 pb-8 border-b border-slate-100">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
                  {currentCategory.label}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentCategory.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {currentCategory.description}
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href={currentCategory.hubLink}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-blue-600/20 hover-lift"
                >
                  <span>{currentCategory.hubText}</span>
                </Link>
              </div>
            </div>

            {/* Condition Grid inside Active Specialty */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {currentCategory.conditions.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="group bg-slate-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-sky-50 border border-slate-200/70 hover:border-blue-200 p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between hover-lift"
                >
                  <div className="space-y-2">
                    <div className="h-8 w-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <h4 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span>Read Clinical Guide</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 4. INTERACTIVE SYMPTOM CHECKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-sky-950 rounded-3xl p-6 sm:p-12 text-white shadow-2xl border border-blue-800/40">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center space-x-2 text-sky-300 text-xs font-extrabold uppercase tracking-wider bg-blue-500/20 px-3.5 py-1.5 rounded-full border border-blue-400/30 mb-3">
              <Stethoscope className="h-4 w-4 text-sky-400" />
              <span>Interactive Patient Symptom Checker</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              What Symptoms Are You Experiencing?
            </h2>
            <p className="text-blue-100 text-sm mt-2 leading-relaxed">
              Select your primary symptom below to see Dr. Almahmoud's
              recommended diagnostic steps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Symptom Selection Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {symptomCheckerItems.map((item) => {
                const isSelected = selectedSymptom.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedSymptom(item)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between ${
                      isSelected
                        ? "bg-blue-600 border-sky-400 text-white shadow-lg shadow-blue-600/30 translate-x-1"
                        : "bg-white/5 border-white/10 hover:bg-white/10 text-blue-100"
                    }`}
                  >
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300">
                        {item.category}
                      </span>
                      <p className="font-bold text-sm">{item.title}</p>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform ${isSelected ? "rotate-90 text-white" : "text-slate-400"}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Recommendation Box */}
            <div className="lg:col-span-7 bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-md space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-extrabold text-sky-300 uppercase tracking-widest">
                    Doctor's Recommended Step
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedSymptom.title}
                  </h3>
                </div>
               
              </div>

              <div className="space-y-3">
                <p className="text-blue-100 text-sm leading-relaxed">
                  {selectedSymptom.recommendation}
                </p>

                <div className="p-4 rounded-xl bg-blue-900/50 border border-blue-400/30 flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-sky-300 shrink-0 mt-0.5" />
                  <p className="text-xs text-sky-100">
                    If experiencing sudden severe chest crushing pain, fainting,
                    or acute difficulty breathing, seek emergency hospital care
                    immediately.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href={selectedSymptom.primaryLink}
                  className="inline-flex items-center justify-center px-5 py-3 bg-sky-400 hover:bg-sky-300 text-blue-950 font-bold text-xs rounded-xl transition-all shadow-md shadow-sky-400/20"
                >
                  <span>{selectedSymptom.linkText}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs rounded-xl transition-all"
                >
                  <Stethoscope className="mr-2 h-4 w-4 text-sky-300" />
                  <span>Request Clinic Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PATIENT TESTIMONIALS */}
      <section className="bg-slate-100/80 py-20 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Verified Patient Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Patient Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-sm hover-lift flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <span key={i} className="text-base">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {item.author}, {item.age}
                    </h4>
                    <p className="text-[11px] text-blue-600 font-semibold">
                      {item.condition}
                    </p>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. APPOINTMENT BOOKING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-blue-400/20 text-sky-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-blue-400/30">
                Direct Specialist Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Schedule Consultation with Dr. Almahmoud
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                For expert evaluation of coronary artery disease, peripheral
                vascular disease, structural valve conditions, or atrial
                fibrillation.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-sky-300 hover:bg-white text-blue-950 font-extrabold rounded-2xl transition-all shadow-xl shadow-sky-400/20 text-center hover-lift"
              >
                <Stethoscope className="h-5 w-5" />
                <span>Book Appointment</span>
              </Link>
              <a
                href="tel:+18005557857"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all text-center"
              >
                <PhoneCall className="h-5 w-5 text-sky-300" />
                <span>Call Clinic Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
