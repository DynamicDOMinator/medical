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

export default function SpanishCardiomyopathyPage() {
  const faqs = [
    {
      question: "¿Cuál es el tipo más común de miocardiopatía?",
      answer:
        "La miocardiopatía dilatada (MCD) es la más frecuente y representa cerca del 60% de los casos. En la MCD, el ventrículo izquierdo se agranda (se dilata) y se debilita, perdiendo fuerza para bombear sangre con eficacia.",
    },
    {
      question: "¿La miocardiopatía es hereditaria?",
      answer:
        "Sí, las formas genéticas son muy habituales — especialmente la miocardiopatía hipertrófica (MCH), que es la afección cardíaca hereditaria más común (afecta a 1 de cada 500 personas). Los familiares de primer grado deben recibir asesoramiento genético y pruebas de detección.",
    },
    {
      question: "¿Los atletas pueden padecer miocardiopatía?",
      answer:
        "La miocardiopatía hipertrófica es una de las causas principales de muerte súbita cardíaca en atletas jóvenes de alto rendimiento. Todo deportista con antecedentes familiares o síntomas debe someterse a una evaluación cardiovascular previa a la competencia.",
    },
  ];

  const typesList = [
    {
      name: "Miocardiopatía Dilatada (MCD)",
      desc: "El ventrículo izquierdo se dilata y debilita, afectando el bombeo sistólico. Puede originarse por genética, miocarditis viral o consumo de alcohol.",
    },
    {
      name: "Miocardiopatía Hipertrófica (MCH)",
      desc: "Engrosamiento anormal de las paredes ventriculares, obstruyendo en ocasiones la salida de sangre. Causa importante de paro cardíaco en atletas jóvenes.",
    },
    {
      name: "Miocardiopatía Restrictiva (MCR)",
      desc: "Las paredes del corazón se vuelven rígidas y poco elásticas, dificultando el llenado diastólico. Se asocia a amiloidosis, sarcoidosis y hemocromatosis.",
    },
    {
      name: "Displasia Arritmogénica del Ventrículo Derecho (DAVD)",
      desc: "Sustitución genética del miocardio del ventrículo derecho por tejido fibroadiposo, predisponiendo a arritmias ventriculares peligrosas.",
    },
  ];

  const symptomList = [
    {
      title: "Falta de Aire y Disnea con el Esfuerzo",
      desc: "Dificultad respiratoria al realizar esfuerzos leves o al acostarse en plano debido al aumento de presión en los ventrículos.",
      icon: Clock,
    },
    {
      title: "Dolor u Opresión Torácica",
      desc: "Angina de pecho durante el esfuerzo provocada por isquemia subendocárdica y obstrucción del tracto de salida.",
      icon: Heart,
    },
    {
      title: "Palpitaciones y Arritmias",
      desc: "Latidos acelerados o irregulares causados por fibrilación auricular o extrasístoles ventriculares.",
      icon: HeartPulse,
    },
    {
      title: "Desmayos Repentinos (Síncope)",
      desc: "Pérdida momentánea del conocimiento durante la actividad física — señal de alerta de obstrucción o taquicardia ventricular.",
      icon: Zap,
    },
    {
      title: "Hinchazón en Piernas y Abdomen",
      desc: "Retención de líquido que ocasiona hinchazón en tobillos y congestión hepática por presiones elevadas en el ventrículo derecho.",
      icon: AlertTriangle,
    },
    {
      title: "Riesgo Genético y Muerte Súbita",
      desc: "Posibilidad de fibrilación ventricular potencialmente fatal durante el ejercicio en jóvenes con alteraciones no diagnosticadas.",
      icon: Dna,
    },
  ];

  const treatments = [
    {
      name: "Terapia Médica Guiada por Guías",
      desc: "Betabloqueadores, ARNI/IECA, ARM e inhibidores de SGLT2 para aliviar síntomas y frenar la progresión.",
      duration: "Protocolo Diario",
      recovery: "Manejo Continuo",
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Desfibrilador Automático Implantable (DAI)",
      desc: "Dispositivo que monitorea el ritmo cardíaco y emite descargas que salvan vidas ante arritmias ventriculares mortales.",
      duration: "Procedimiento de 1 Hora",
      recovery: "1–2 Semanas",
      image:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Miectomía Septal / Ablación con Alcohol",
      desc: "Reducción quirúrgica o por catéter del tabique engrosado para liberar la obstrucción de salida en miocardiopatía hipertrófica.",
      duration: "Intervención Especializada",
      recovery: "Estancia Hospitalaria Requerida",
      image:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Trasplante Cardíaco",
      desc: "Opción terapéutica definitiva para miocardiopatías avanzadas y refractarias a la medicación y dispositivos.",
      duration: "Quirúrgico",
      recovery: "Rehabilitación Integral",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Miocardiopatía y <br />
            Salud del Músculo Cardíaco
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Guía de Miocardiopatía"
              items={[
                ["#overview", "Resumen General"],
                ["#types", "Clasificaciones y Tipos"],
                ["#symptoms", "Síntomas"],
                ["#diagnosis", "Pruebas Diagnósticas"],
                ["#treatment", "Tratamiento y Procedimientos"],
                ["#living-with", "Vivir con Miocardiopatía"],
                ["#faqs", "Preguntas Frecuentes"],
              ]}
              cta={{
                title: "¿Siente Fatiga o Falta de Aire Inusual?",
                href: "/es/contact",
                btnText: "Agendar Evaluación",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">
            {/* 1. OVERVIEW */}
            <section
              id="overview"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  ¿Qué es la Miocardiopatía?
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  La miocardiopatía es una afección primaria del músculo cardíaco (miocardio) en la que el tejido se agranda, engrosa, endurece o es sustituido por fibrosis de forma anormal.
                </p>
                <p>
                  A diferencia de la enfermedad coronaria causada por arterias tapadas, la miocardiopatía se origina directamente en mutaciones genéticas de los sarcómeros, miocarditis virales, depósitos metabólicos o sustancias tóxicas, pudiendo derivar en insuficiencia cardíaca y arritmias ventriculares.
                </p>
              </div>

              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Estructura del Músculo Cardíaco"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
                Clasificaciones y Tipos de Miocardiopatía
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

            {/* 3. SYMPTOMS */}
            <section
              id="symptoms"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Síntomas de la Miocardiopatía
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

            {/* 4. DIAGNOSIS */}
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Diagnóstico y Pruebas Médicas
                </h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Una evaluación completa identifica el subtipo exacto y orienta el tratamiento médico o el implante de dispositivos:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
                        alt="Ecocardiograma"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Ecocardiograma
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Estudio esencial para medir el grosor de las paredes y la fracción de eyección.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                        alt="Resonancia Magnética Cardíaca (RMC)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Resonancia Magnética Cardíaca (RMC)
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      El estudio de referencia para evaluar tejido fibroso y cicatrización en el miocardio.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                        alt="Panel Genético"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Pruebas de Panel Genético
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Identifica mutaciones hereditarias causantes de la enfermedad en el paciente y su familia.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                        alt="Monitor Holter de 24 Horas"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Monitor Holter de 24 Horas
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Detecta arritmias ventriculares asintomáticas o taquicardia ventricular no sostenida (TVNS).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. TREATMENT */}
            <section
              id="treatment"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Tratamiento y Procedimientos
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
                  Vivir con Miocardiopatía
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">
                      Dieta y Control de Peso
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Dieta baja en sodio para evitar la retención de líquidos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Evitar totalmente el consumo excesivo de alcohol</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Monitorear el peso diario y reportar aumentos rápidos</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">
                      Precauciones en el Ejercicio
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Evitar deportes competitivos extenuantes con diagnóstico de MCH</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Realizar actividad aeróbica moderada bajo autorización médica</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Tamizaje genético para familiares de primer grado</span>
                    </li>
                  </ul>
                </div>
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
