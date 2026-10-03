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
  Clock,
  HeartPulse,
  FileText,
  Droplets,
} from "lucide-react";
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from "@/components/FAQAccordion";

export default function SpanishCHFPage() {
  const faqs = [
    {
      question: "¿Qué es la Insuficiencia Cardíaca Congestiva (CHF)?",
      answer:
        "La CHF es una afección crónica y progresiva en la que el músculo cardíaco no puede bombear suficiente sangre para satisfacer las demandas del cuerpo (HFrEF - fracción de eyección reducida) o no puede relajarse lo suficiente para llenarse de sangre adecuadamente (HFpEF - fracción de eyección preservada).",
    },
    {
      question: "¿Qué es la Fracción de Eyección del Ventrículo Izquierdo (FEVI)?",
      answer:
        "La FEVI mide el porcentaje de sangre que expulsa el ventrículo izquierdo con cada latido. Una FEVI normal oscila entre el 50% y el 70%. Un valor por debajo del 40% indica insuficiencia con fracción de eyección reducida, la cual responde muy favorablemente a medicamentos dirigidos por guías clínicas.",
    },
    {
      question: "¿Cuáles son las terapias médicas recomendadas por las guías para insuficiencia cardíaca?",
      answer:
        "La GDMT se compone de 4 pilares fundamentales de tratamiento farmacológico que mejoran radicalmente la supervivencia: ARNI/IECA/ARA-II, Betabloqueadores, ARM (antagonistas de receptores mineralocorticoides) e Inhibidores de SGLT2.",
    },
    {
      question: "¿Tiene cura la insuficiencia cardíaca?",
      answer:
        "Por lo general es una condición crónica, pero con los medicamentos modernos, dispositivos (resincronizador/desfibrilador) y ajustes en el estilo de vida, la gran mayoría de los pacientes logran una calidad de vida prácticamente normal.",
    },
  ];

  const typesList = [
    {
      name: "Insuficiencia Cardíaca Izquierda",
      desc: "El líquido se acumula retrógradamente en los pulmones, provocando falta de aire. Es la variante más común.",
    },
    {
      name: "Insuficiencia Cardíaca Derecha",
      desc: "El lado derecho tiene dificultad para enviar sangre a los pulmones, provocando acumulación de líquido en piernas, tobillos o abdomen.",
    },
    {
      name: "Insuficiencia Cardíaca Congestiva (CHF)",
      desc: "Término general utilizado cuando se retiene líquido en tejidos y órganos debido a que el corazón no bombea con la fuerza requerida.",
    },
  ];

  const symptomList = [
    {
      title: "Falta de Aire (Disnea)",
      desc: "Dificultad respiratoria durante el esfuerzo cotidiano, al acostarse horizontalmente (ortopnea) o despertarse asfixiado en la noche.",
      icon: Clock,
    },
    {
      title: "Retención de Líquido y Edema",
      desc: "Aumento rápido de peso corporal, hinchazón en piernas y tobillos, y distensión abdominal por acúmulo de líquidos.",
      icon: Droplets,
    },
    {
      title: "Fatiga Profunda y Debilidad",
      desc: "Cansancio continuo ocasionado por un menor gasto cardíaco y escasa oxigenación de los tejidos periféricos.",
      icon: Info,
    },
    {
      title: "Tos Persistente y Silbidos al Respirar",
      desc: "Tos con flema blanquecina o rosada provocada por congestión de líquido en los alvéolos pulmonares.",
      icon: AlertTriangle,
    },
  ];

  const diagnosticTests = [
    {
      name: "Ecocardiograma",
      desc: "Utiliza ultrasonido para visualizar las válvulas y calcular la fracción de eyección (porcentaje de bombeo).",
    },
    {
      name: "Radiografía de Tórax",
      desc: "Muestra si hay aumento de tamaño del corazón (cardiomegalia) o líquido en los pulmones.",
    },
    {
      name: "Pruebas de Imagen Avanzadas",
      desc: "Pruebas de esfuerzo, tomografía o resonancia cardíaca que brindan vistas detalladas de la estructura y flujo.",
    },
  ];

  const treatments = [
    {
      name: "GDMT (Terapia Médica Guiada por Guías)",
      badgeType: "Tratamiento",
      desc: "Terapia farmacológica basada en evidencia sólida (ARNIs, betabloqueadores, ARM e inhibidores de SGLT2) diseñada para mejorar la fuerza cardíaca, prevenir hospitalizaciones y prolongar la vida.",
    },
    {
      name: "Dispositivos de Monitoreo (CardioMEMS)",
      badgeType: "Procedimiento",
      desc: "Sensor inalámbrico miniatura implantado en la arteria pulmonar que mide las presiones diariamente desde casa, permitiendo ajustar medicamentos antes de que aparezcan síntomas.",
    },
    {
      name: "Modulación de Contractilidad Cardíaca (CCM)",
      badgeType: "Procedimiento",
      desc: "Dispositivo innovador que aplica pulsos eléctricos específicos durante el período refractario del músculo cardíaco para mejorar la fuerza de contracción.",
    },
    {
      name: "Marcapasos Biventricular (CRT) / DAI",
      badgeType: "Procedimiento",
      desc: "Dispositivos cardíacos implantables como la Terapia de Resincronización Cardíaca para coordinar el bombeo de ambos ventrículos y Desfibriladores para proteger contra arritmias fatales.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Insuficiencia Cardíaca <br />
            Congestiva (CHF)
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Guía de CHF"
              items={[
                ["#overview", "Resumen General"],
                ["#types", "Clasificaciones y Tipos"],
                ["#symptoms", "Síntomas"],
                ["#diagnosis", "Pruebas Diagnósticas"],
                ["#treatment", "Tratamiento"],
                ["#faqs", "Preguntas Frecuentes"],
              ]}
              cta={{
                title: "¿Presenta Falta de Aire o Hinchazón en Piernas?",
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
                  ¿Qué es la Insuficiencia Cardíaca Congestiva?
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  La insuficiencia cardíaca no significa simplemente un &ldquo;corazón débil&rdquo;. Es una condición clínica compleja en la que el corazón no logra cubrir adecuadamente las necesidades metabólicas del cuerpo, pudiendo ocurrir incluso cuando la fuerza aparente de contracción parece normal.
                </p>
                <p>
                  Puede comprometer el lado izquierdo, el derecho o ambos. Cuando el corazón no bombea o no se llena bien, la sangre retrocede hacia los pulmones o el resto del cuerpo, provocando acumulación de líquidos en pulmones y piernas, falta de aire y fatiga.
                </p>
              </div>

              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/images/es-Images/chf-es.png"
                  alt="Insuficiencia Cardíaca Congestiva - Infografía Médica"
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section
              id="types"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Tipos de Insuficiencia Cardíaca
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
            </section>

            {/* 3. SYMPTOMS */}
            <section
              id="symptoms"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Síntomas de la Insuficiencia Cardíaca
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

              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Las señales pueden ser progresivas. La fatiga, la menor capacidad para ejercitarse, la dificultad para respirar al acostarse o la hinchazón gradual suelen confundirse equivocadamente con la edad.
                </p>
              </div>
            </section>

            {/* 4. DIAGNOSIS */}
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
                Descubrir la causa subyacente es clave. La enfermedad coronaria, hipertensión, afecciones valvulares, arritmias y diabetes contribuyen a la falla cardíaca y deben abordarse directamente.
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

              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/content3.png"
                  alt="Pruebas Diagnósticas de Insuficiencia Cardíaca Congestiva"
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* 5. TREATMENT */}
            <section
              id="treatment"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Tratamiento
                </h2>
              </div>

              <div className="divide-y divide-slate-200/80 mb-8">
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

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed pt-6 border-t border-slate-100">
                <p>
                  <strong>La insuficiencia cardíaca es un camino a largo plazo</strong>, pero usted no está solo. Sus medicamentos, estilo de vida, monitoreo regular y seguimiento con nosotros se complementan para mantenerle estable, activo y saludable.
                </p>
                <p>
                  Nuestra meta no es únicamente aliviar la falta de aire o la hinchazón, sino <strong>entender por qué su corazón tiene dificultades, optimizar su tratamiento a tiempo, monitorear su evolución y ajustar el plan cuando sea necesario</strong>—para que <strong>se sienta mejor y disfrute de la mejor calidad de vida posible.</strong>
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
