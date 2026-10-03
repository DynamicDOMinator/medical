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

export default function SpanishValvularHeartDiseasePage() {
  const faqs = [
    {
      question: "¿Qué es la Enfermedad Cardíaca Valvular?",
      answer:
        "La Enfermedad Cardíaca Valvular ocurre cuando una o más de las cuatro válvulas del corazón (aórtica, mitral, tricúspide o pulmonar) no funcionan adecuadamente. Las válvulas pueden no abrirse por completo (estenosis) o no cerrar herméticamente, permitiendo que la sangre retroceda (regurgitación o insuficiencia).",
    },
    {
      question: "¿Qué es el TAVR (Reemplazo Valvular Aórtico Transcatéter)?",
      answer:
        "TAVR es un procedimiento mínimamente invasivo revolucionario que reemplaza la válvula aórtica dañada a través de un catéter insertado en la arteria femoral de la ingle. Evita la cirugía tradicional a corazón abierto, ofreciendo una recuperación mucho más rápida y menos dolor para pacientes con estenosis aórtica severa.",
    },
    {
      question: "¿Cuáles son las principales señales de alerta de un problema valvular?",
      answer:
        "Los síntomas frecuentes incluyen falta de aire durante el esfuerzo físico, cansancio inusual, opresión en el pecho, palpitaciones, mareos o desmayos (síncope) e hinchazón en tobillos y pies.",
    },
    {
      question: "¿Cómo se diagnostica la enfermedad valvular?",
      answer:
        "El ecocardiograma (transtorácico y transesofágico 3D) es el método de referencia. Utiliza ondas de ultrasonido para evaluar la movilidad de las valvas, medir las presiones y calcular el área efectiva de apertura de la válvula.",
    },
  ];

  const symptomList = [
    {
      title: "Mareos y Desmayos (Síncope)",
      desc: "Sensación repentina de aturdimiento o pérdida momentánea del conocimiento provocada por una reducción transitoria del flujo de sangre al cerebro por estenosis aórtica severa.",
      icon: Zap,
    },
    {
      title: "Palpitaciones y Fibrilación Auricular",
      desc: "Latidos acelerados o irregulares originados por el estiramiento y sobrecarga de las aurículas ante fugas valvulares crónicas.",
      icon: HeartPulse,
    },
    {
      title: "Hinchazón en Tobillos y Pies (Edema)",
      desc: "Retención de líquido en extremidades inferiores debido a congestión venosa y sobrecarga de presión en el lado derecho del corazón.",
      icon: Activity,
    },
    {
      title: "Fatiga Crónica y Debilidad",
      desc: "Agotamiento constante causado por la disminución del gasto cardíaco y del flujo de sangre oxigenada hacia los órganos del cuerpo.",
      icon: Info,
    },
  ];

  const treatments = [
    {
      name: "Reemplazo Valvular Aórtico Transcatéter (TAVR)",
      badgeType: "Procedimiento",
      desc: "Se implanta una válvula artificial expandible dentro de la válvula aórtica enferma a través de una pequeña punción en la arteria de la ingle.",
    },
    {
      name: "Reparación Borde a Borde MitraClip™",
      badgeType: "Procedimiento",
      desc: "Se guía un diminuto clip hacia el corazón para unir las valvas mitrales y reducir significativamente la insuficiencia mitral severa.",
    },
    {
      name: "Valvuloplastia Aórtica / Mitral con Balón",
      badgeType: "Procedimiento",
      desc: "Dilatación con balón por catéter para abrir válvulas cardíacas estrechas y rígidas en pacientes seleccionados.",
    },
    {
      name: "Cirugía de Reparación o Reemplazo Valvular",
      badgeType: "Procedimiento",
      desc: "Reparación o sustitución quirúrgica convencional o mínimamente invasiva mediante prótesis mecánicas o biológicas de tejido.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Enfermedad Cardíaca <br />
            Valvular y TAVR
          </h1>
        </div>
      </div>

      {/* 2. MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Guía Valvular"
              items={[
                ["#overview", "Resumen General"],
                ["#symptoms", "Síntomas"],
                ["#diagnosis", "Pruebas Diagnósticas"],
                ["#treatments", "Tratamiento"],
                ["#faqs", "Preguntas Frecuentes"],
              ]}
              cta={{
                title: "¿Presenta Falta de Aire o Soplo Cardíaco?",
                href: "/es/contact",
                btnText: "Agendar Evaluación",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">
            {/* 1. OVERVIEW */}
            <section
              id="overview"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  ¿Qué es la Enfermedad Cardíaca Valvular?
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Su corazón cuenta con cuatro válvulas fundamentales — Aórtica, Mitral, Tricúspide y Pulmonar — que abren y cierran con cada latido para asegurar que la sangre circule en una sola dirección hacia los pulmones y el resto del cuerpo.
                </p>
                <p>
                  La enfermedad valvular se origina cuando las válvulas se calcifican y endurecen (<strong>Estenosis</strong>), impidiendo su apertura completa, o cuando las valvas no sellan bien (<strong>Regurgitación / Insuficiencia</strong>), permitiendo que la sangre retroceda en el corazón.
                </p>
                <p>
                  Con el paso del tiempo, una afección valvular sin tratar sobrecarga el músculo cardíaco y puede provocar dilatación del corazón, arritmias o insuficiencia cardíaca.
                </p>
              </div>

              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/images/es-Images/valvular-heart-disease-es.png"
                  alt="Enfermedad Cardíaca Valvular - Infografía Médica"
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* SYMPTOMS */}
            <section
              id="symptoms"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Síntomas de Insuficiencia Valvular
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

            {/* DIAGNOSIS */}
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Pruebas Diagnósticas
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Llegar a la solución adecuada comienza con evaluar a fondo su corazón. Empleamos estudios de imagen suaves y no invasivos para analizar la apertura y cierre de sus válvulas, medir el flujo de sangre y definir el mejor plan médico para usted.
              </p>

              <div className="divide-y divide-slate-200/80">
                {[
                  {
                    name: "Ecocardiograma Transtorácico (TTE)",
                    desc: "Ultrasonido 2D/3D estándar no invasivo para evaluar la anatomía valvular, movilidad de valvas y dimensiones ventriculares.",
                  },
                  {
                    name: "Ecocardiograma Transesofágico (TEE)",
                    desc: "Ultrasonido especializado de alta definición mediante sonda esofágica, brindando vistas nítidas y detalladas de estructuras valvulares complejas.",
                  },
                  {
                    name: "Tomografía Cardíaca y Calcio Coronario",
                    desc: "Estudio tomográfico que mide el grado de calcificación aórtica y las dimensiones del anillo valvular previo al procedimiento TAVR.",
                  },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[34%] lg:w-[30%] shrink-0">
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

              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/content 2.png"
                  alt="Pruebas Diagnósticas de Enfermedad Cardíaca Valvular"
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* TREATMENTS */}
            <section
              id="treatments"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Tratamiento
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Las opciones modernas combinan cirugía tradicional y procedimientos por catéter mínimamente invasivos para pacientes seleccionados.
              </p>

              <div className="divide-y divide-slate-200/80">
                {treatments.map((t) => (
                  <div
                    key={t.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[34%] lg:w-[30%] shrink-0 space-y-1.5">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                        {t.name}
                      </h3>
                      <div>
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${
                            t.badgeType === "Tratamiento"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-blue-50 text-blue-700 border-blue-200"
                          }`}
                        >
                          {t.badgeType}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  El objetivo primordial es preservar la función cardíaca y la calidad de vida, vigilando cuidadosamente e interviniendo en el momento justo — ni antes de tiempo ni demasiado tarde.
                </p>
              </div>
            </section>

            {/* FAQS */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Preguntas Frecuentes
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
