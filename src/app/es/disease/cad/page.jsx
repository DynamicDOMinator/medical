import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Info,
  Activity,
  Shield,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  Stethoscope,
  ChevronRight,
  UserCheck,
  Calendar,
  Sparkles,
} from "lucide-react";
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from "@/components/FAQAccordion";

export default function CADPageEs() {
  const faqs = [
    {
      question: "¿Qué es la Enfermedad Arterial Coronaria (EAC)?",
      answer:
        "La Enfermedad Arterial Coronaria (EAC) es una condición cardiovascular causada por la aterosclerosis: la acumulación gradual de placas de colesterol y grasa dentro de las arterias coronarias epicárdicas. Con el tiempo, estas placas estrechan el calibre de los vasos y restringen el flujo de sangre oxigenada hacia el músculo cardíaco.",
    },
    {
      question: "¿Cuáles son las principales señales de advertencia de la EAC?",
      answer:
        "Los síntomas más comunes incluyen opresión o pesadez en el pecho al hacer esfuerzo (angina), falta de aire con actividades cotidianas, cansancio inusual y dolor que se irradia hacia el cuello, la mandíbula, los hombros o el brazo izquierdo.",
    },
    {
      question: "¿Cuál es la diferencia entre angina de pecho y un infarto?",
      answer:
        "La angina es una molestia o presión pasajera que aparece durante el esfuerzo físico cuando el corazón demanda más oxígeno del que recibe. Un infarto (ataque cardíaco) ocurre cuando una placa se rompe y obstruye por completo la arteria coronaria, causando daño permanente al tejido del corazón si no se desobstruye de inmediato.",
    },
    {
      question: "¿Cómo funciona la angioplastia coronaria con colocación de stent?",
      answer:
        "La intervención coronaria percutánea (ICP) consiste en guiar un catéter muy delgado desde la muñeca o la ingle hasta la arteria coronaria afectada. Un balón microscópico dilata la zona estrecha y se implanta un stent liberador de medicamento para mantener la arteria abierta y permeable permanentemente.",
    },
    {
      question: "¿Se puede revertir la placa coronaria?",
      answer:
        "Aunque la placa fuertemente calcificada no suele eliminarse por completo, el tratamiento intensivo con estatinas, los inhibidores de PCSK9 y las modificaciones saludables en el estilo de vida pueden estabilizar las placas vulnerables y reducir significativamente el riesgo de infartos futuros.",
    },
  ];

  const typesList = [
    {
      name: "EAC Obstructiva",
      desc: "La placa estrecha de forma significativa la arteria coronaria y restringe el flujo sanguíneo durante el esfuerzo.",
    },
    {
      name: "EAC No Obstructiva",
      desc: "Pueden presentarse síntomas o disfunción microvascular aun sin bloqueos anatómicos mayores en las arterias grandes.",
    },
    {
      name: "EAC Crónica Estable",
      desc: "Enfermedad de larga evolución que produce síntomas previsibles, principalmente durante la actividad física.",
    },
    {
      name: "Síndrome Coronario Agudo",
      desc: "Disminución repentina y crítica del flujo coronario, que abarca la angina inestable y los infartos de miocardio.",
    },
  ];

  const symptomList = [
    {
      title: "Dolor u Opresión en el Pecho (Angina)",
      desc: "Presión, pesadez, ardor o sensación de constricción en el centro del pecho provocada por esfuerzo físico o estrés emocional.",
      icon: Heart,
    },
    {
      title: "Falta de Aire (Disnea)",
      desc: "Dificultad para respirar al realizar actividades habituales o al acostarse boca arriba.",
      icon: Activity,
    },
    {
      title: "Irradiación del Dolor",
      desc: "Molestia que se extiende hacia los hombros, el brazo izquierdo, el cuello, la mandíbula o la parte alta de la espalda.",
      icon: Shield,
    },
    {
      title: "Fatiga y Mareo",
      desc: "Agotamiento desproporcionado, sensación de desvanecimiento, sudoración fría o náuseas al realizar esfuerzos.",
      icon: Stethoscope,
    },
  ];

  const diagnosisTests = [
    {
      title: "Prueba de esfuerzo en banda",
      desc: "Evalúa el ritmo cardíaco, la tolerancia al esfuerzo y la respuesta del flujo coronario bajo demanda física.",
    },
    {
      title: "Prueba de esfuerzo nuclear",
      desc: "Utiliza radiotrazadores seguros para analizar la perfusión del miocardio y detectar zonas con riego sanguíneo deficiente.",
    },
    {
      title: "Tomografía por emisión de positrones (PET-CT)",
      desc: "Estudio de alta precisión metabólica para valorar a fondo el flujo sanguíneo y la viabilidad del tejido cardíaco.",
    },
    {
      title: "Angiotomografía Coronaria (Angio-TC / CCTA)",
      desc: "Estudio tomográfico tridimensional no invasivo que visualiza con gran detalle la anatomía coronaria y el grado de placa.",
    },
  ];

  const treatments = [
    {
      title: "Terapia Médica Óptima (TMO / GDMT)",
      badgeType: "Tratamiento",
      desc: "Manejo farmacológico guiado por directrices clínicas con doble antiagregación, estatinas de alta potencia, betabloqueadores e inhibidores del eje renina para estabilizar la placa.",
    },
    {
      title: "Intervención Coronaria Percutánea (ICP / Stent)",
      badgeType: "Procedimiento",
      desc: "Dilatación por cateterismo con balón y colocación de stent liberador de fármaco para restablecer el flujo coronario en isquemia aguda o crónica.",
    },
    {
      title: "Cirugía de Bypass Coronario (CABG)",
      badgeType: "Procedimiento",
      desc: "Revascularización quirúrgica mediante puentes arteriales o venosos para tratar afecciones complejas multivaso o del tronco coronario izquierdo.",
    },
    {
      title: "Angiografía Coronaria Diagnóstica",
      badgeType: "Procedimiento",
      desc: "Estudio invasivo mediante cateterismo y medio de contraste para ubicar con exactitud milimétrica la severidad de las obstrucciones.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Enfermedad Arterial Coronaria (EAC)
          </h1>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sticky Sidebar Navigation */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="En Esta Página"
              items={[
                ["#overview", "Resumen General"],
                ["#types", "Clasificaciones y Tipos"],
                ["#symptoms", "Síntomas y Señales"],
                ["#risk-factors", "Factores de Riesgo y Prevención"],
                ["#diagnosis", "Diagnóstico y Pruebas"],
                ["#treatment", "Procedimientos y Tratamiento"],
                ["#faqs", "Preguntas Frecuentes"],
              ]}
              cta={{
                title: "¿Siente dolor u opresión en el pecho?",
                href: "/es/contact",
                btnText: "Agendar Evaluación",
              }}
            />
          </div>

          {/* Main Article Content */}
          <div className="lg:col-span-9 space-y-12">
            {/* 1. OVERVIEW (USE IMAGE) */}
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
                  La enfermedad arterial coronaria es una afección que acompaña al paciente a lo largo de su vida, ocasionada por la aterosclerosis: la acumulación de placa en las arterias del corazón. No se trata únicamente de un &ldquo;bloqueo mecánico&rdquo;, sino de un proceso inflamatorio activo que puede progresar o romperse de improviso y desencadenar un ataque cardíaco.
                </p>
                <p>
                  El porcentaje de obstrucción por sí solo no define todo el peligro, ya que los infartos pueden ocurrir incluso a partir de placas moderadas que sufren una rotura súbita.
                </p>
              </div>

              {/* Overview Medical Banner Image */}
              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/heart-2.png"
                  alt="¿Qué es la Enfermedad Arterial Coronaria? - Infografía del Corazón y Placa"
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
                  Clasificaciones y Tipos de EAC
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

              {/* CAD Progression Medical Infographic */}
              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/images/es-Images/Types of CAD-es.png"
                  alt="Cómo se Desarrolla la Enfermedad Arterial Coronaria - Infografía de Progresión"
                  width={1400}
                  height={800}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* 3. SYMPTOMS (USE ICONS) */}
            <section
              id="symptoms"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Síntomas y Señales de Alerta
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
                  Comprender los factores que aceleran la acumulación de placa y adoptar medidas proactivas permite reducir de manera drástica los riesgos y proteger su salud cardiovascular a largo plazo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Risk Factors Box */}
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
                      "Antecedentes familiares",
                      "Diabetes",
                      "Tabaquismo",
                      "Colesterol elevado",
                      "Sobrepeso u obesidad",
                      "Inactividad física",
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

                {/* Prevention Box */}
                <div className="bg-emerald-50/40 border border-emerald-200/80 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-2.5 text-emerald-950 font-bold text-base">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-200 shrink-0">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span>Prevención</span>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {[
                      "No fumar",
                      "Seguir una dieta cardiosaludable",
                      "Realizar ejercicio con regularidad",
                      "Mantener un peso corporal adecuado",
                      "Tomar puntualmente los medicamentos indicados",
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

            {/* 4. DIAGNOSIS/TEST (USE IMAGE) */}
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Diagnóstico y Pruebas Clínicas
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {diagnosisTests.map((test) => (
                  <div
                    key={test.title}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2"
                  >
                    <h3 className="font-bold text-slate-900 text-base">
                      {test.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {test.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Diagnosis Image */}
              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/Cad-diagnos.png"
                  alt="Pruebas Diagnósticas y Estudios de Imagen para Enfermedad Coronaria"
                  width={1400}
                  height={600}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* 5. TREATMENT (PROCEDURES) (USE IMAGE) */}
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
                    El tratamiento no siempre requiere un stent o cirugía; gran cantidad de pacientes se benefician primordialmente del tratamiento farmacológico y el control riguroso de factores de riesgo: colesterol, presión arterial, diabetes, cese del tabaco y hábitos de vida. Los procedimientos invasivos se reservan para casos específicos según síntomas, anatomía y riesgo coronario.
                  </p>
                  <p>
                    Obtener el plan adecuado comienza comprendiendo el funcionamiento de su corazón. Realizamos diversos estudios y procedimientos para evaluar la perfusión del miocardio y detectar problemas en sus arterias coronarias, explicándole cada etapa con claridad.
                  </p>
                </div>
              </div>

              <div className="divide-y divide-slate-200/80">
                {treatments.map((t) => (
                  <div
                    key={t.title}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[34%] lg:w-[30%] shrink-0 space-y-1.5">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                        {t.title}
                      </h3>
                      <div className="flex items-center gap-2">
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
                  De manera crucial, la EAC exige prevención continua incluso después de una intervención, pues el proceso aterosclerótico puede afectar otros vasos con el paso de los años.
                </p>
                <p className="font-semibold text-blue-950">
                  La meta principal no es solo abrir arterias, sino prevenir infartos, preservar la fuerza del corazón y asegurar una óptima calidad de vida a largo plazo.
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
