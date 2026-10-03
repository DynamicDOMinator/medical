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
  Zap,
  Clock,
  HeartPulse,
  FileText,
  Apple,
} from "lucide-react";
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from "@/components/FAQAccordion";

export default function SpanishHeartCADPage() {
  const faqs = [
    {
      question: "¿Qué es la Enfermedad Arterial Coronaria (CAD)?",
      answer:
        "La Enfermedad Arterial Coronaria ocurre cuando la placa de colesterol se acumula en las arterias que suministran sangre rica en oxígeno al músculo cardíaco. Con el tiempo, la placa estrecha las arterias coronarias, restringiendo el flujo sanguíneo y provocando angina o infartos.",
    },
    {
      question: "¿Cuál es la diferencia entre Angina y un Infarto?",
      answer:
        "La angina es una presión o dolor temporal en el pecho que se presenta durante el esfuerzo físico cuando la demanda del corazón supera el flujo de sangre disponible. Un infarto de miocardio ocurre cuando una placa se rompe y bloquea totalmente la arteria coronaria, causando daño irreversible al músculo cardíaco.",
    },
    {
      question: "¿Cómo funciona la Angioplastia Coronaria con Colocación de Stent?",
      answer:
        "La intervención coronaria percutánea (PCI) consiste en introducir un catéter fino a través de una arteria de la muñeca o la ingle hasta la arteria obstruida. Un globo dilata el bloqueo y se coloca un stent liberador de fármaco para mantener la arteria permanentemente abierta.",
    },
    {
      question: "¿Se puede revertir la placa coronaria?",
      answer:
        "Aunque la placa avanzada y calcificada no se elimina por completo, el tratamiento intensivo con estatinas, inhibidores de PCSK9 y cambios en el estilo de vida estabilizan las placas vulnerables y reducen drásticamente el riesgo de futuros infartos.",
    },
  ];

  const typesList = [
    {
      name: "CAD Obstructiva",
      desc: "La acumulación de placa estrecha significativamente la arteria coronaria y restringe el flujo sanguíneo.",
    },
    {
      name: "CAD No Obstructiva",
      desc: "Pueden presentarse síntomas o daño endotelial a pesar de no haber una obstrucción mayor en las arterias coronarias principales.",
    },
    {
      name: "CAD Crónica Estable",
      desc: "Afección de larga duración que suele provocar síntomas predecibles, especialmente durante la actividad física.",
    },
    {
      name: "Síndrome Coronario Agudo",
      desc: "Disminución repentina y crítica del flujo sanguíneo coronario, incluyendo angina inestable e infartos agudos.",
    },
  ];

  const symptomList = [
    {
      title: "Dolor u Opresión en el Pecho (Angina)",
      desc: "Sensación de presión, opresión, ardor o pesadez en el centro del pecho durante el esfuerzo o estrés emocional.",
      icon: Heart,
    },
    {
      title: "Falta de Aire (Disnea)",
      desc: "Dificultad para respirar con actividades cotidianas leves debido a la falta de oxígeno en el músculo cardíaco.",
      icon: Clock,
    },
    {
      title: "Dolor Irradiado a Brazo, Cuello o Mandíbula",
      desc: "Malestar que se extiende hacia el hombro izquierdo, brazo, cuello, mandíbula o la parte alta de la espalda.",
      icon: AlertTriangle,
    },
    {
      title: "Fatiga y Debilidad Extrema",
      desc: "Cansancio abrumador e inusual durante tareas de rutina debido a una menor eficiencia de bombeo del corazón.",
      icon: Info,
    },
    {
      title: "Sudoración Fría y Mareos",
      desc: "Sudores fríos repentinos (diaforesis), náuseas o mareos que acompañan la presión torácica.",
      icon: Zap,
    },
    {
      title: "Palpitaciones Cardíacas",
      desc: "Sensación de latidos rápidos, fuertes o irregulares desencadenados por falta de irrigación sanguínea (isquemia).",
      icon: HeartPulse,
    },
  ];

  const treatments = [
    {
      name: "Terapia Médica Óptima (OMT / GDMT)",
      badgeType: "Tratamiento",
      desc: "Tratamiento farmacológico guiado por directrices clínicas con doble antiagregación plaquetaria, estatinas de alta intensidad, betabloqueadores e inhibidores de la ECA.",
    },
    {
      name: "Intervención Coronaria Percutánea (PCI / Stent)",
      badgeType: "Procedimiento",
      desc: "Procedimiento mínimamente invasivo mediante cateterismo en el que un balón dilata la arteria y un stent liberador de fármaco la mantiene abierta de forma duradera.",
    },
    {
      name: "Cirugía de Bypass Coronario (CABG)",
      badgeType: "Procedimiento",
      desc: "Revascularización quirúrgica mediante injertos arteriales o venosos para desviar el flujo y superar bloqueos coronarios múltiples o del tronco principal.",
    },
    {
      name: "Angiografía Coronaria",
      badgeType: "Procedimiento",
      desc: "Procedimiento diagnóstico por catéter con medio de contraste y rayos X para ubicar y medir la gravedad exacta de las obstrucciones coronarias.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Enfermedad Arterial <br />
            Coronaria (CAD)
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Guía de CAD"
              items={[
                ["#overview", "Resumen General"],
                ["#types", "Clasificaciones y Tipos"],
                ["#symptoms", "Síntomas"],
                ["#risk-factors", "Factores de Riesgo y Prevención"],
                ["#diagnosis", "Pruebas de Diagnóstico"],
                ["#treatment", "Tratamiento y Procedimientos"],
                ["#faqs", "Preguntas Frecuentes"],
              ]}
              cta={{
                title: "¿Siente Dolor o Presión en el Pecho?",
                href: "/es/contact",
                btnText: "Agendar Evaluación",
              }}
            />
          </div>

          {/* Main Sections */}
          <div className="lg:col-span-9 space-y-12">
            {/* 1. OVERVIEW */}
            <section
              id="overview"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  ¿Qué es la Enfermedad Arterial Coronaria?
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  La enfermedad arterial coronaria es una afección crónica provocada por la aterosclerosis, proceso en el que se acumula placa en las arterias del corazón. No se trata simplemente de &ldquo;bloqueos&rdquo;, sino de un proceso patológico activo que puede evolucionar o romperse repentinamente provocando un infarto.
                </p>
                <p>
                  El porcentaje de obstrucción por sí solo no define por completo el nivel de peligro, ya que los infartos pueden ocurrir incluso a partir de placas moderadas pero inflamadas.
                </p>
              </div>

              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/heart-2.png"
                  alt="Qué es la Enfermedad Arterial Coronaria - Infografía Médica"
                  width={1400}
                  height={800}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section
              id="types"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Clasificaciones y Tipos de CAD
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

              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/images/es-Images/Types of CAD-es.png"
                  alt="Desarrollo de la Enfermedad Arterial Coronaria"
                  width={1400}
                  height={800}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* 3. SYMPTOMS */}
            <section
              id="symptoms"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Síntomas de la Enfermedad Coronaria
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

            {/* 4. RISK FACTORS & PREVENTION */}
            <section
              id="risk-factors"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 space-y-6"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  Factores de Riesgo y Prevención
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Conocer las causas que aceleran la progresión de la placa y tomar medidas preventivas permite reducir riesgos significativamente y preservar la salud del corazón.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50/40 border border-amber-200/80 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-2.5 text-amber-900 font-bold text-base">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-200 shrink-0">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <span>Factores de Riesgo</span>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {[
                      "Presión arterial alta",
                      "Historial familiar de infartos",
                      "Diabetes mellitus",
                      "Tabaquismo activo o pasivo",
                      "Colesterol y triglicéridos altos",
                      "Sobrepeso u obesidad",
                      "Sedentarismo y falta de ejercicio",
                      "Edad avanzada",
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

                <div className="bg-emerald-50/40 border border-emerald-200/80 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-2.5 text-emerald-950 font-bold text-base">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-200 shrink-0">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span>Prevención Activa</span>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {[
                      "Evitar el tabaco por completo",
                      "Llevar una dieta cardiosaludable",
                      "Hacer ejercicio regularmente",
                      "Mantener un peso saludable",
                      "Tomar los medicamentos recetados",
                      "Monitorear presión, colesterol y glucosa",
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

            {/* 4. DIAGNOSIS/TEST */}
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
                Llegar al diagnóstico certero comienza con entender su corazón. Empleamos una gama completa de pruebas para evaluar cómo funciona su corazón y descartar problemas en las arterias coronarias.
              </p>

              <div className="divide-y divide-slate-200/80">
                {[
                  {
                    name: "Prueba de esfuerzo en banda sin fin",
                    desc: "Evalúa el ritmo cardíaco, la tolerancia al esfuerzo y la respuesta del flujo sanguíneo bajo actividad física.",
                  },
                  {
                    name: "Prueba de esfuerzo nuclear (SPECT)",
                    desc: "Utiliza radiotrazadores especializados para evaluar la perfusión del miocardio y detectar áreas de isquemia.",
                  },
                  {
                    name: "Tomografía por Emisión de Positrones (PET-CT)",
                    desc: "Estudio metabólico avanzado de alta precisión para analizar el flujo sanguíneo y la viabilidad del tejido cardíaco.",
                  },
                  {
                    name: "Angiotomografía Coronaria (CCTA)",
                    desc: "Estudio de imagen 3D no invasivo y de alta resolución que visualiza la anatomía de las arterias coronarias y el nivel de placa.",
                  },
                ].map((t) => (
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

              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/Cad-diagnos.png"
                  alt="Pruebas Diagnósticas e Imágenes de Enfermedad Arterial Coronaria"
                  width={1400}
                  height={600}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* 5. TREATMENT */}
            <section
              id="treatment"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 space-y-6"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                  Tratamiento y Procedimientos
                </h2>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    El tratamiento no siempre requiere stent o cirugía; gran parte de los pacientes se benefician primordialmente del tratamiento médico y del control estricto de factores de riesgo como colesterol, presión arterial, diabetes y tabaquismo. Los procedimientos se reservan para casos seleccionados según los síntomas, la anatomía y el riesgo general.
                  </p>
                </div>
              </div>

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

              <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/70 border border-blue-100 text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  Es fundamental recordar que la CAD requiere prevención continua incluso después de un procedimiento, ya que la placa puede acumularse en otras arterias con el paso del tiempo.
                </p>
                <p className="font-semibold text-blue-950">
                  El objetivo primordial no es solo abrir vasos sanguíneos, sino prevenir infartos, preservar la fuerza del miocardio y asegurar su salud y calidad de vida.
                </p>
              </div>
            </section>

            {/* 7. FAQS */}
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
