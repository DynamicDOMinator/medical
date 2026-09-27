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

export default function VenousDiseasePageEs() {
  const faqs = [
    {
      question: "¿Cuál es la causa principal de la insuficiencia venosa crónica?",
      answer:
        "La insuficiencia venosa ocurre cuando las diminutas válvulas unidireccionales dentro de las venas de las piernas se debilitan o dañan. En lugar de impulsar la sangre hacia arriba en dirección al corazón contra la gravedad, la sangre se regresa (reflujo venoso) y se acumula en las piernas, provocando aumento de presión, hinchazón y dilatación de las venas.",
    },
    {
      question:
        "¿Las várices son solo un problema estético o una condición médica?",
      answer:
        "Aunque las pequeñas arañitas pueden ser predominantemente estéticas, las venas varicosas abultadas suelen ser manifestación de un reflujo venoso subyacente e hipertensión venosa. Si no se tratan, pueden avanzar hacia edema severo, manchas oscuras en la piel (dermatitis por estasis) e incluso úlceras venosas abiertas de difícil cicatrización.",
    },
    {
      question: "¿Qué ocurre durante un estudio de ultrasonido Doppler dúplex?",
      answer:
        "El ultrasonido dúplex es un estudio por imágenes completamente indoloro y no invasivo. El especialista utiliza ondas sonoras de alta frecuencia para visualizar la estructura de las venas, evaluar la dirección del flujo de la sangre, medir con precisión los tiempos de reflujo valvular y descartar coágulos o trombosis venosa profunda (TVP).",
    },
    {
      question:
        "¿Son dolorosos los procedimientos de ablación térmica con láser o radiofrecuencia?",
      answer:
        "No. La ablación térmica mínimamente invasiva (RFA/EVLT) se lleva a cabo en nuestra clínica ambulatoria bajo anestesia local tumescente. Las molestias durante el procedimiento (de unos 30 minutos) son mínimas y la mayoría de los pacientes retoman sus caminatas habituales de inmediato.",
    },
    {
      question:
        "¿Cubre el seguro médico los tratamientos para várices y enfermedad venosa?",
      answer:
        "La gran mayoría de los seguros médicos comerciales y Medicare cubren los procedimientos venosos cuando existen síntomas clínicos documentados (dolor, hinchazón, alteraciones de la piel) y evidencia por ultrasonido de reflujo venoso significativo tras un período de prueba con medidas conservadoras.",
    },
  ];

  const typesList = [
    {
      name: "Insuficiencia Venosa Crónica (IVC)",
      desc: "Las válvulas venosas debilitadas permiten que la sangre regrese y se estanque en las piernas, provocando hinchazón, pesadez y alteraciones en la piel.",
    },
    {
      name: "Venas Varicosas y Arañitas Vasculares",
      desc: "Las várices son venas dilatadas y tortuosas visibles; las arañitas vasculares son redes más delgadas y superficiales justo debajo de la piel.",
    },
    {
      name: "Trombosis Venosa Profunda (TVP)",
      desc: "Formación de un coágulo de sangre en una vena profunda, típicamente en la pierna, con riesgo de inflamación, dolor, calor y desprendimiento hacia los pulmones.",
    },
    {
      name: "Tromboflebitis Superficial",
      desc: "Inflamación de una vena superficial con formación de un pequeño coágulo local, produciendo enrojecimiento, induración y dolor al tacto.",
    },
    {
      name: "Úlceras Venosas por Estasis",
      desc: "Llagas o heridas abiertas de cicatrización lenta, usualmente cerca del tobillo, causadas por hipertensión venosa prolongada y mala oxigenación tisular.",
    },
  ];

  const symptomList = [
    {
      title: "Dolor Sordo, Pesadez y Cansancio",
      desc: "Sensación constante de fatiga, tensión o pulsaciones en las piernas que suele aliviarse al elevarlas.",
      icon: Clock,
    },
    {
      title: "Manchas Oscuras y Eccema en la Piel",
      desc: "Pigmentación marrón o cobriza (hemosiderina) en tobillos y pantorrillas por degradación de glóbulos rojos extravasados.",
      icon: Info,
    },
    {
      title: "Piernas Inquietas y Calambres Nocturnos",
      desc: "Espasmos dolorosos en pantorrillas y necesidad involuntaria de mover las piernas provocados por la congestión venosa.",
      icon: Zap,
    },
    {
      title: "Úlceras Venosas Abiertas",
      desc: "Heridas de lenta evolución localizadas generalmente sobre el maléolo interno debido al daño tisular crónico.",
      icon: AlertTriangle,
    },
  ];

  const riskFactors = [
    {
      name: "Factores Genéticos y Antecedentes Familiares",
      detail:
        "Más del 70% de las personas con insuficiencia venosa tienen familiares de primer grado con afecciones vasculares similares.",
    },
    {
      name: "Permanecer de Pie o Sentado por Largos Períodos",
      detail:
        "Actividades laborales que exigen muchas horas de inmovilidad impiden que la bomba muscular de la pantorrilla impulse la sangre.",
    },
    {
      name: "Embarazo y Cambios Hormonales",
      detail:
        "El mayor volumen sanguíneo y la compresión del útero en la pelvis distienden las paredes de las venas de las piernas.",
    },
    {
      name: "Edad Avanzada y Sobrepeso",
      detail:
        "Pérdida gradual de la elasticidad de los vasos combinada con mayor presión abdominal que dificulta el retorno venoso.",
    },
    {
      name: "Antecedente de Trombosis Venosa Profunda (TVP)",
      detail:
        "El síndrome postrombótico daña irreversiblemente las válvulas internas tras un coágulo previo de gran tamaño.",
    },
  ];

  const diagnosticTests = [
    {
      name: "Mapeo de Reflujo con Ultrasonido Dúplex",
      desc: "Mide con exactitud el reflujo valvular en segundos (>0.5 s indica fallo valvular) para ubicar los segmentos insuficientes.",
    },
    {
      name: "Mapeo del Tronco Safeno Mayor y Menor",
      desc: "Permite trazar el trayecto anatómico exacto y el diámetro de las venas safenas mayor y menor a lo largo de la pierna.",
    },
    {
      name: "Inspección de Venas Perforantes",
      desc: "Identifica venas comunicantes incompetentes entre los sistemas superficial y profundo que perpetúan el edema y daño cutáneo.",
    },
    {
      name: "Evaluación del Sistema Venoso Profundo",
      desc: "Confirma la permeabilidad del flujo profundo para descartar trombosis venosa profunda (TVP) o compresiones obstructivas.",
    },
  ];

  const treatments = [
    {
      name: "Ablación endovenosa térmica",
      badgeType: "Procedimiento",
      desc: "Aplica energía térmica dirigida mediante radiofrecuencia (RFA) o láser (EVLT) a través de un catéter fino para sellar la vena enferma y redirigir el flujo a venas sanas.",
    },
    {
      name: "Ablación con adhesivo médico no térmico",
      badgeType: "Procedimiento",
      desc: "Utiliza un adhesivo biológico especializado para cerrar la vena afectada sin requerir calor, anestesia tumescente ni uso obligatorio de medias de compresión posteriores.",
    },
    {
      name: "Ablación con microespuma",
      badgeType: "Procedimiento",
      desc: "Inyecta microespuma médica guiada por ultrasonido en segmentos venosos tortuosos o complejos, desplazando la sangre para ocluir suavemente la vena enferma.",
    },
    {
      name: "Escleroterapia",
      badgeType: "Procedimiento",
      desc: "Inyección de una solución específica directamente en arañitas vasculares y pequeñas venas nutricias para colapsarlas y desvanecerlas paulatinamente.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Enfermedad Venosa e <br />
            Insuficiencia Crónica
          </h1>
        </div>
      </div>

      {/* 2. MAIN CONTENT LAYOUT WITH STICKY OUTLINE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Navigation Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Guía Clínica de Venas"
              items={[
                ["#overview", "Resumen General"],
                ["#types", "Tipos de Enfermedad Venosa"],
                ["#symptoms", "Síntomas"],
                ["#causes", "Causas y Factores de Riesgo"],
                ["#diagnosis", "Pruebas de Diagnóstico"],
                ["#treatment", "Tratamiento"],
                ["#prevention", "Estilo de Vida y Prevención"],
                ["#faqs", "Preguntas Frecuentes"],
              ]}
              cta={{
                title: "¿Siente pesadez, dolor en piernas o várices?",
                href: "/es/contact",
                btnText: "Agendar Evaluación",
              }}
            />
          </div>

          {/* Main Article & Medical Sections */}
          <div className="lg:col-span-9 space-y-12">
            {/* OVERVIEW SECTION WITH ANATOMY IMAGE */}
            <section
              id="overview"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  ¿Qué es la Enfermedad Venosa?
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  La enfermedad venosa es muy frecuente y puede afectar notablemente su comodidad, movilidad y calidad de vida. Se origina cuando las venas de las piernas tienen dificultad para retornar la sangre adecuadamente hacia el corazón, causando estancamiento venoso en las extremidades inferiores.
                </p>
                <p>
                  Cuando las diminutas válvulas dentro de las venas se debilitan o se dañan, la sangre refluye y aumenta la presión en los vasos. Esto provoca inflamación, pesadez, hinchazón, várices, cambios en la coloración de la piel y, en etapas más avanzadas, úlceras en las piernas.
                </p>
              </div>

              {/* Overview Medical Infographic Banner */}
              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/images/venous-types-visual-white.jpg"
                  alt="Infografía Clínica de Tipos de Enfermedad Venosa e Insuficiencia Crónica"
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
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
                  Tipos de Enfermedad Venosa
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Las afecciones venosas abarcan desde <strong>arañitas y venas varicosas</strong> hasta <strong>insuficiencia venosa crónica</strong>, <strong>cambios tróficos de la piel</strong> y <strong>úlceras venosas</strong>. Identificar la causa anatómica precisa nos permite recomendarle el tratamiento más adecuado y efectivo.
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

              {/* Note Callout */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  La hinchazón en las piernas puede deberse a diversas causas. No todo edema es de origen venoso: siempre deben valorarse factores cardíacos, renales, linfáticos, farmacológicos o coágulos profundos.
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
                  Síntomas Frecuentes de Insuficiencia Venosa
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
                  ¿Qué Daña las Válvulas Venosas?
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

            {/* 5. DIAGNOSIS */}
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Pruebas de Diagnóstico
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                El diagnóstico preciso se apoya en un ultrasonido vascular detallado para examinar la anatomía venosa, medir la dirección del flujo e identificar los puntos exactos de incompetencia valvular.
              </p>

              <div className="divide-y divide-slate-200/80">
                {diagnosticTests.map((t) => (
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
            </section>

            {/* 6. TREATMENT */}
            <section
              id="treatment"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Tratamiento
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Los tratamientos modernos para venas son mínimamente invasivos, se realizan en consultorio con mínimas molestias y permiten una recuperación casi inmediata, restableciendo la circulación saludable de las piernas.
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
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${t.badgeType === "Treatment"
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

              {/* Note Callout */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Nuestro objetivo es recomendarle la opción más conservadora y eficaz adaptada a los hallazgos de su ultrasonido, sus síntomas y sus actividades cotidianas.
                </p>
              </div>
            </section>

            {/* PREVENTION & LIFESTYLE */}
            <section
              id="prevention"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Estilo de Vida y Prevención
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    Compresión Graduada
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Utilice medias de compresión graduada de 20-30 mmHg en jornadas prolongadas de pie o durante viajes.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    Rutina de Elevación de Piernas
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Eleve sus piernas por encima del nivel del corazón durante 15 a 20 minutos 3 veces al día para facilitar el drenaje venoso.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    Activación Muscular de Pantorrilla
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Camine regularmente y realice ejercicios de flexión de tobillo para activar la bomba muscular que impulsa el retorno venoso.
                  </p>
                </div>
              </div>
            </section>

            {/* PATIENT FAQS */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Preguntas Frecuentes
                </h2>
              </div>
              <FAQAccordion items={faqs} />
            </section>

            {/* CALL TO ACTION CARD */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 text-white shadow-2xl border border-blue-800/40 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-2xl font-extrabold">
                  ¿Listo para aliviar la pesadez y el dolor en sus piernas?
                </h3>
                <p className="text-blue-100 text-sm">
                  Programe una evaluación vascular completa con ultrasonido dúplex con el Dr. Almahmoud.
                </p>
              </div>
              <a
                href="https://healow.com/apps/provider/mohamed-almahmoud-2103459"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-sm rounded-2xl shadow-xl transition-all shrink-0"
              >
                <Stethoscope className="mr-2 h-4 w-4" />
                Agendar Estudio Vascular
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
