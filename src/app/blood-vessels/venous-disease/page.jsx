"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
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
  Sparkles,
  PhoneCall,
  UserCheck,
  FileText,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export default function VenousDiseasePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const faqs = [
    {
      question: "What is the root cause of chronic venous insufficiency?",
      answer:
        "Venous insufficiency occurs when tiny one-way valves inside lower limb veins become stretched or damaged. Instead of pumping blood upward back to the heart against gravity, blood leaks backward (venous reflux) and pools in the leg veins, causing elevated pressure, swelling, and vessel dilation.",
    },
    {
      question:
        "Are varicose veins just a cosmetic issue or a medical condition?",
      answer:
        "While mild spider veins may be purely aesthetic, bulging varicose veins are often a sign of underlying venous reflux and elevated venous hypertension. Left untreated, chronic reflux can progress to severe edema, skin hyperpigmentation, stasis dermatitis, and open venous stasis ulcers.",
    },
    {
      question: "What happens during a Duplex Ultrasound scan?",
      answer:
        "Duplex Doppler ultrasound is a pain-free, non-invasive imaging procedure. The vascular technologist uses high-frequency sound waves to visualize vein structures, assess blood flow direction, measure valve reflux duration in seconds, and rule out deep vein thrombosis (DVT).",
    },
    {
      question:
        "Are endovenous laser and radiofrequency ablation procedures painful?",
      answer:
        "No. Minimal invasive thermal ablation (RFA/EVLT) is performed right in our outpatient clinic using local tumescent anesthesia. Patients feel minimal discomfort during the 30-minute procedure and usually resume normal light walking immediately afterward.",
    },
    {
      question:
        "Will insurance cover treatment for varicose veins and venous disease?",
      answer:
        "Most medical insurance plans and Medicare cover vein procedures when patients exhibit documented clinical symptoms (pain, swelling, skin changes) and confirmed ultrasound evidence of venous reflux after trying conservative compression therapy.",
    },
  ];

  const symptomList = [
    {
      title: "Persistent Leg Swelling (Edema)",
      desc: "Fluid accumulation in lower legs and ankles that worsens after standing or towards the end of the day.",
      icon: Droplets,
    },
    {
      title: "Bulging & Twisted Varicose Veins",
      desc: "Enlarged, rope-like blue or purple surface veins visible along calves and thighs.",
      icon: Activity,
    },
    {
      title: "Aching, Heaviness & Fatigue",
      desc: "A dull, tired, or throbbing sensation in the lower extremities relieved by leg elevation.",
      icon: Clock,
    },
    {
      title: "Skin Hyperpigmentation & Eczema",
      desc: "Dark browning or rust-colored skin staining (hemosiderin) near the inner ankles due to red blood cell breakdown.",
      icon: Info,
    },
    {
      title: "Restless Legs & Night Cramps",
      desc: "Involuntary leg twitching or painful nocturnal calf spasms triggered by venous congestion.",
      icon: Zap,
    },
    {
      title: "Venous Stasis Ulcers",
      desc: "Slow-healing open sores above the inner ankle resulting from long-standing tissue breakdown and poor circulation.",
      icon: AlertTriangle,
    },
  ];

  const riskFactors = [
    {
      name: "Genetics & Family History",
      detail:
        "Over 70% of patients with venous reflux have a first-degree relative with vein disease.",
    },
    {
      name: "Prolonged Standing or Sitting",
      detail:
        "Occupations requiring hours of stillness prevent leg calf muscles from pumping blood.",
    },
    {
      name: "Pregnancy & Hormonal Shifts",
      detail:
        "Increased blood volume and pelvic pressure relax vein walls during pregnancy.",
    },
    {
      name: "Age & Obesity",
      detail:
        "Natural loss of vein wall elasticity combined with excess abdominal pressure on venous return.",
    },
    {
      name: "Prior Deep Vein Thrombosis (DVT)",
      detail:
        "Post-thrombotic syndrome damages vein valves following a major blood clot.",
    },
  ];

  const treatments = [
    {
      name: "Radiofrequency & Laser Ablation (RFA / EVLT)",
      desc: "A tiny catheter delivers targeted heat energy to seal diseased refluxing veins shut, re-routing blood to healthy veins.",
      duration: "30-45 Mins",
      recovery: "Immediate Walking",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "VenaSeal™ Medical Vein Adhesive",
      desc: "An innovative non-thermal procedure using tiny drops of medical adhesive to close diseased veins without tumescent anesthesia.",
      duration: "20-30 Mins",
      recovery: "No Hose Needed",
      image:
        "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ultrasound-Guided Foam Sclerotherapy",
      desc: "Targeted injection of a specialized sclerosant agent into deeper tributary veins to collapse smaller diseased vessels.",
      duration: "15-20 Mins",
      recovery: "Same-day Return",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Micro-Phlebectomy",
      desc: "Minimally invasive micro-incisions to gently remove large bulging surface varicose veins with virtually no scarring.",
      duration: "45 Mins",
      recovery: "1-2 Days",
      image:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Medical-Grade Compression Therapy",
      desc: "Graduated compression stockings (20-30 mmHg) that provide external pressure to assist calf muscle pump action.",
      duration: "Daily Wear",
      recovery: "Symptom Relief",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO SECTION WITH IMAGE & OVERLAY */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80"
            alt="Venous Disease Clinical Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center text-xs text-sky-300 font-bold mb-4 space-x-1.5 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <Link href="/blood-vessels" className="hover:underline">
              Vascular Conditions
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span>Venous Disease Library</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Venous Disease & <br />
                <span className="animated-gradient-text">
                  Chronic Insufficiency
                </span>
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Comprehensive patient guide to lower limb venous reflux,
                varicose veins, chronic leg swelling, stasis ulcerations, and
                state-of-the-art endovascular therapies by Dr. Mohamed Faher
                Almahmoud.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Schedule Vein Consultation
                </Link>
                <a
                  href="#diagnosis"
                  className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
                >
                  <Activity className="mr-2 h-4 w-4 text-sky-300" />
                  Ultrasound Diagnostic Mapping
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-950 group">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Vascular Laboratory Scanning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT LAYOUT WITH STICKY OUTLINE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Navigation Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 bg-white border border-blue-100 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider border-b border-blue-50 pb-3 flex items-center space-x-2">
                <FileText className="h-4 w-4 text-blue-600" />
                <span>Clinical Guide Contents</span>
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {[
                  ["#overview", "Disease Overview & Anatomy"],
                  ["#symptoms", "Symptoms & Progression"],
                  ["#causes", "Causes & Risk Factors"],
                  ["#diagnosis", "Vascular Duplex Ultrasound"],
                  ["#treatments", "Minimally Invasive Therapies"],
                  ["#prevention", "Lifestyle & Compression"],
                  ["#faqs", "Patient FAQs"],
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

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-100">
                  <p className="text-xs font-bold text-blue-900">
                    Need Immediate Evaluation?
                  </p>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Book an appointment at PulseCare Cardiology Clinic.
                  </p>
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

          {/* Main Article & Medical Sections */}
          <div className="lg:col-span-9 space-y-12">
            {/* OVERVIEW SECTION WITH ANATOMY IMAGE */}
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
                    Pathophysiology
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    What is Venous Disease?
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Venous disease encompasses a wide spectrum of vascular
                  conditions where the veins in the lower extremities struggle
                  to pump oxygen-depleted blood back to the heart against
                  gravity. Under normal conditions, tiny, delicate one-way
                  valves inside your leg veins close to prevent blood from
                  flowing backward.
                </p>
                <p>
                  When these vein valves become damaged, stretched, or
                  incompetent, blood begins to pool in the lower leg veins — a
                  condition known as <strong>venous reflux</strong> or{" "}
                  <strong>Chronic Venous Insufficiency (CVI)</strong>. Over
                  time, high blood pressure inside the veins causes vessel walls
                  to expand, leading to painful swelling, spider veins, bulging
                  varicose veins, and skin ulcerations.
                </p>
              </div>

              {/* Overview Medical Image Banner */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Doctor Examining Venous Circulation"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* SYMPTOMS GRID SECTION */}
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
                    Common Symptoms of Venous Insufficiency
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

            {/* CAUSES & RISK FACTORS */}
            <section
              id="causes"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    Risk Assessment
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    What Triggers Vein Valve Damage?
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                {riskFactors.map((r, i) => (
                  <div
                    key={r.name}
                    className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80"
                  >
                    <div className="bg-blue-600 text-white font-extrabold text-xs h-6 w-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                        {r.name}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                        {r.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* DIAGNOSIS WITH IMAGE & DUPLEX SCAN DETAILS */}
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
                    RPVI Certified Diagnostics
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Vascular Duplex Ultrasound Scan
                  </h2>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Accurate treatment begins with detailed vascular mapping. At
                PulseCare Cardiology Clinic, Dr. Almahmoud performs
                high-resolution <strong>Color Duplex Ultrasound scans</strong>{" "}
                to evaluate lower extremity venous anatomy:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                        alt="Duplex Reflux Mapping"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Duplex Reflux Mapping
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Measures valve reflux duration in seconds (&gt;0.5s
                      indicates valve failure).
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
                        alt="Saphenous Trunk Mapping"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Saphenous Trunk Mapping
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Maps exact anatomical course of Great & Small Saphenous
                      veins.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                        alt="Perforator Vein Inspection"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Perforator Vein Inspection
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Identifies incompetent calf perforator veins contributing
                      to ulcers.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                        alt="Deep Venous Assessment"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Deep Venous Assessment
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Rules out Deep Vein Thrombosis (DVT) and deep vein
                      compression.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* MINIMALLY INVASIVE TREATMENTS */}
            <section
              id="treatments"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Modern Clinical Therapies
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Minimally Invasive Endovenous Procedures
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

            {/* PREVENTION & LIFESTYLE */}
            <section
              id="prevention"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Self-Care & Management
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Lifestyle & Compression Protocol
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    Graduated Compression
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Wear 20-30 mmHg prescription compression stockings during
                    prolonged standing or travel.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    Leg Elevation Routine
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Elevate legs above heart level for 15-20 minutes 3 times
                    daily to assist gravity venous drain.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    Calf Muscle Flexing
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Engage in regular walking and ankle flex exercises to
                    activate calf muscle venous pumps.
                  </p>
                </div>
              </div>
            </section>

            {/* PATIENT FAQS */}
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

            {/* CALL TO ACTION CARD */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 text-white shadow-2xl border border-blue-800/40 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-2xl font-extrabold">
                  Ready for relief from leg swelling & vein pain?
                </h3>
                <p className="text-blue-100 text-sm">
                  Schedule a comprehensive vascular duplex evaluation with Dr.
                  Almahmoud.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-sm rounded-2xl shadow-xl transition-all shrink-0"
              >
                <Stethoscope className="mr-2 h-4 w-4" />
                Book Vein Scan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
