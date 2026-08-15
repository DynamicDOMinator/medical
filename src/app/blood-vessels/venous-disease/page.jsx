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
import GuideSidebarNav from "@/components/GuideSidebarNav";
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

  const typesList = [
    {
      name: "Chronic Venous Insufficiency (CVI)",
      desc: "Weak vein valves allow blood to flow backward and pool in the legs, causing swelling, heaviness, and skin changes.",
    },
    {
      name: "Varicose & Spider Veins",
      desc: "Varicose veins are enlarged, twisted veins; spider veins are smaller, web-like veins visible beneath the skin.",
    },
    {
      name: "Deep Vein Thrombosis (DVT)",
      desc: "A blood clot forms in a deep vein, usually in the leg, and may cause swelling, pain, and warmth.",
    },
    {
      name: "Superficial Thrombophlebitis",
      desc: "A vein close to the skin becomes inflamed and develops a small clot, causing tenderness, redness, or warmth.",
    },
    {
      name: "Venous Ulcers",
      desc: "Slow-healing sores, usually around the ankle, caused by long-term poor venous circulation.",
    },
  ];

  const symptomList = [
    
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
      name: "Endovenous Ablation",
      desc: "Uses heat from a laser (EVLT) or radiofrequency (RFA) delivered via a thin tube (catheter) to seal shut the faulty main vein.",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sclerotherapy",
      desc: "Injects a liquid or foam chemical agent into smaller varicose or spider veins to scar and close them so they fade away.",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Ambulatory Phlebectomy",
      desc: "Removes bulging surface varicose veins through tiny skin punctures that generally need no stitches.",
      image:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Nonthermal Glue Ablation",
      desc: "Uses a medical-grade adhesive delivered via catheter to close the vein without requiring heat or post-procedure compression stockings.",
      image:
        "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80",
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Venous Disease & <br />
            Chronic Insufficiency
          </h1>
        </div>
      </div>

      {/* 2. MAIN CONTENT LAYOUT WITH STICKY OUTLINE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Navigation Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Clinical Guide Contents"
              items={[
                ["#overview", "Overview"],
                ["#types", "Types of Venous Disease"],
                ["#symptoms", "Symptoms"],
                ["#causes", "Causes & Risk Factors"],
                ["#diagnosis", "Diagnostic Testing"],
                ["#treatment", "Treatment"],
                ["#prevention", "Lifestyle & Prevention"],
                ["#faqs", "Patient FAQs"],
              ]}
              cta={{
                title: "Experiencing Heavy, Aching Legs or Varicose Veins?",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          {/* Main Article & Medical Sections */}
          <div className="lg:col-span-9 space-y-12">
            {/* OVERVIEW SECTION WITH ANATOMY IMAGE */}
            <section
              id="overview"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What is Venous Disease?
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Venous disease is common and can affect your comfort, mobility, and quality of life. It occurs when the veins in your legs have difficulty returning blood to the heart, causing blood to pool in the lower legs.
                </p>
                <p>
                  When the small valves inside the veins become weak or damaged, blood can flow backward and increase pressure in the veins. This may cause swelling, aching, heaviness, varicose veins, skin changes, and, in advanced cases, leg ulcers.
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

            {/* TYPES */}
            <section
              id="types"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Types of Venous Disease
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Venous disease can range from <strong>spider and varicose veins</strong> to <strong>chronic venous insufficiency</strong>, <strong>skin changes</strong>, and <strong>venous ulcers</strong>. Identifying the type and underlying cause helps us choose the right treatment for you.
              </p>

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

              {/* Types of Venous Disease Visual Infographic */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-white">
                  <Image
                    src="/images/venous-types-visual-white.jpg"
                    alt="Types of Venous Disease Medical Illustration"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Note Callout */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Swelling has many causes. Not all leg swelling is due to veins—cardiac, renal, lymphatic, medication, and clot-related causes should be considered.
                </p>
              </div>
            </section>

            {/* SYMPTOMS GRID SECTION */}
            <section
              id="symptoms"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Common Symptoms of Venous Insufficiency
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

            {/* CAUSES & RISK FACTORS */}
            <section
              id="causes"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What Triggers Vein Valve Damage?
                </h2>
              </div>

              <div className="divide-y divide-slate-200/80">
                {riskFactors.map((r) => (
                  <div
                    key={r.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        {r.name}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Vascular Duplex Ultrasound Scan
                </h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                We combine a clinical examination with targeted tests when needed to identify the underlying problem, assess blood flow, and determine the most appropriate treatment for you.
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

            {/* TREATMENT */}
            <section
              id="treatment"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Treatment
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
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Lifestyle & Compression Protocol
                </h2>
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
