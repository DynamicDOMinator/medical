"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Info,
  Stethoscope,
  Activity,
  HeartPulse,
  Clock,
  Zap,
  FileText,
} from "lucide-react";
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from "@/components/FAQAccordion";

export default function ValvularHeartDiseasePage() {
  const faqs = [
    {
      question: "What is Valvular Heart Disease?",
      answer:
        "Valvular Heart Disease occurs when one or more of the heart four valves (aortic, mitral, tricuspid, pulmonary) do not function properly. Valves may fail to open fully (stenosis) or fail to close tightly, allowing blood to leak backward (regurgitation/insufficiency).",
    },
    {
      question: "What is TAVR (Transcatheter Aortic Valve Replacement)?",
      answer:
        "TAVR is a revolutionary minimally invasive procedure that replaces a diseased aortic valve through a catheter inserted in the femoral groin artery. TAVR avoids traditional open-heart surgery, offering faster recovery and less pain for patients with severe aortic stenosis.",
    },
    {
      question: "What are the main warning signs of heart valve failure?",
      answer:
        "Common symptoms include shortness of breath during exertion, unusual fatigue, chest tightness, heart palpitations, lightheadedness or fainting (syncope), and fluid swelling in lower ankles.",
    },
    {
      question: "How is valvular heart disease diagnosed?",
      answer:
        "Echocardiography (Transthoracic & Transesophageal 3D Echo) is the gold standard diagnostic tool. It uses ultrasound waves to visualize valve leaflet mobility, measure pressure gradients, and calculate effective valve orifice area.",
    },
  ];

  const symptomList = [
    
    {
      title: "Dizziness & Fainting (Syncope)",
      desc: "Sudden lightheadedness or fainting caused by temporary reduction of blood flow to the brain across a severe aortic valve stenosis.",
      icon: Zap,
    },
    {
      title: "Heart Palpitations & AFib",
      desc: "Fluttering or irregular heartbeats resulting from atrium stretching caused by valve regurgitation.",
      icon: HeartPulse,
    },
    {
      title: "Ankle & Foot Swelling (Edema)",
      desc: "Fluid retention in lower extremities due to right-sided heart congestion and elevated venous pressure.",
      icon: Activity,
    },
    {
      title: "Chronic Fatigue & Weakness",
      desc: "Overwhelming tiredness caused by reduced cardiac output delivered to body organs.",
      icon: Info,
    },
  ];

  const treatments = [
    {
      name: "Transcatheter Aortic Valve Replacement (TAVR)",
      desc: "A expandable artificial valve is deployed inside the diseased aortic valve via a small leg artery catheter puncture.",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "MitraClip™ Transcatheter Edge-to-Edge Repair",
      desc: "A small clip is guided into the heart to hold mitral valve leaflets together and reduce severe mitral regurgitation.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Balloon Aortic / Mitral Valvuloplasty",
      desc: "Catheter balloon inflation used to stretch open stiff, narrow heart valve openings in select symptomatic patients.",
      image:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Surgical Valve Repair or Replacement",
      desc: "Traditional or mini-thoracotomy surgical repair or replacement with mechanical or tissue prosthetic valves.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80"
            alt="Valvular Heart Disease Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Valvular Heart <br />
            Disease & TAVR
          </h1>
        </div>
      </div>

      {/* 2. MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Valvular Guide Contents"
              items={[
                ["#overview", "Valve Disease Overview"],
                ["#symptoms", "Symptoms"],
                ["#diagnosis", "Echocardiography Diagnostics"],
                ["#treatments", "TAVR & MitraClip Options"],
                ["#faqs", "Patient FAQs"],
              ]}
              cta={{
                title: "Experiencing Shortness of Breath or Murmur?",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">
            {/* OVERVIEW */}
            <section
              id="overview"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  What is Valvular Heart Disease?
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Your heart features four essential valves — Aortic, Mitral,
                  Tricuspid, and Pulmonary — that open and close with every
                  heartbeat to ensure blood flows strictly forward through the
                  heart chambers to the lungs and body.
                </p>
                <p>
                  Valvular heart disease develops when valves become calcified
                  and stiffened (<strong>Stenosis</strong>), preventing full
                  opening, or when valve leaflets fail to seal tightly (
                  <strong>Regurgitation / Insufficiency</strong>), allowing
                  blood to leak backward into the heart.
                </p>
              </div>

              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiologist Evaluating Heart Valves"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                Over time, untreated valve disease can strain the heart and lead to complications like heart enlargement, rhythm problems, or heart failure.
              </p>
            </section>

            {/* SYMPTOMS */}
            <section
              id="symptoms"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Symptoms of Valve Failure
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

            {/* DIAGNOSIS WITH IMAGE */}
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  3D Doppler Echocardiography
                </h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Echocardiography uses high-frequency sound waves to generate
                detailed moving pictures of your heart valves in motion. Doppler
                ultrasound measures blood flow velocity across valves to
                calculate exact pressure gradients and valve area.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
                        alt="Transthoracic Echocardiogram (TTE)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Transthoracic Echocardiogram (TTE)
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Standard 2D/3D non-invasive valve evaluation.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                        alt="Transesophageal Echocardiogram (TEE)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Transesophageal Echocardiogram (TEE)
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      High-resolution esophageal ultrasound probe.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                        alt="Color Doppler Velocity Mapping"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Color Doppler Velocity Mapping
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Measures pressure gradients and regurgitant volumes.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                        alt="Cardiac CT & Calcium Scoring"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Cardiac CT & Calcium Scoring
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Evaluates aortic valve calcification prior to TAVR.
                    </p>
                  </div>
                </div>
              </div>

              {/* Note Callout */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Not all valve disease needs immediate treatment; mild cases are often monitored. The key challenge is timing intervention correctly, since waiting too long can harm the heart, but not every abnormal valve requires a procedure.
                </p>
              </div>
            </section>

            {/* TREATMENTS */}
            <section
              id="treatments"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Transcatheter TAVR & MitraClip Procedures
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Modern treatments include both surgery and less invasive catheter-based options for selected patients.
              </p>

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

              {/* Note Callout */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  The main goal is to protect heart function and quality of life by monitoring carefully and treating at the right time—not too early or too late.
                </p>
              </div>
            </section>

            {/* FAQS */}
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
