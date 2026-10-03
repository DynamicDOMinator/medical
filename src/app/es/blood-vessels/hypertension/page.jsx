'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Info,
  Stethoscope,
  Activity,
  ShieldCheck,
  HeartPulse,
  FileText,
  Heart,
  Brain,
  Eye,
  Zap,
  Apple,
} from 'lucide-react';
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from '@/components/FAQAccordion';

export default function SpanishHypertensionPage() {
  const faqs = [
    {
      question: '¿Por qué se conoce a la Hipertensión como el Asesino Silencioso?',
      answer:
        'La hipertensión (presión arterial alta) habitualmente no produce ningún síntoma evidente durante años, mientras deteriora de manera silenciosa las paredes arteriales, el músculo cardíaco, los riñones y la circulación del cerebro. Gran parte de los pacientes se sienten perfectamente bien hasta que sobreviene un evento mayor como un infarto o un derrame cerebral.',
    },
    {
      question: '¿Cuál es la diferencia entre Hipertensión Primaria y Secundaria?',
      answer:
        'La hipertensión primaria (esencial) representa entre el 90% y 95% de los casos y se instaura gradualmente por factores genéticos, alimentación y estilo de vida. La hipertensión secundaria es provocada directamente por otra afección médica subyacente, como estenosis de las arterias renales, apnea del sueño o alteraciones de las glándulas suprarrenales.',
    },
    {
      question: '¿Cuáles cifras de presión arterial definen la Etapa 1 y la Etapa 2?',
      answer:
        'La presión normal está por debajo de 120/80 mmHg. Presión elevada: 120–129 de sistólica y menos de 80 de diastólica. Hipertensión Etapa 1: sistólica de 130–139 o diastólica de 80–89 mmHg. Hipertensión Etapa 2: sistólica de 140 o más, o diastólica de 90 o más mmHg. Una crisis hipertensiva ocurre con valores superiores a 180 de sistólica o 120 de diastólica.',
    },
    {
      question: '¿Qué es la dieta DASH y de qué manera ayuda a controlar la presión?',
      answer:
        'La dieta DASH (Enfoques Dietéticos para Detener la Hipertensión) da prioridad a frutas, verduras, granos enteros, proteínas magras y lácteos bajos en grasa, restringiendo el sodio, las grasas saturadas y las carnes rojas. La evidencia clínica demuestra que adoptar la dieta DASH logra disminuir la presión sistólica entre 8 y 14 mmHg.',
    },
  ];

  const mainTypes = [
    {
      name: 'Hipertensión Primaria (Esencial)',
      desc: 'Se desarrolla lentamente a lo largo de los años sin una causa única aislada; relacionada con la edad, predisposición genética y estilo de vida.',
    },
    {
      name: 'Hipertensión Secundaria',
      desc: 'Originada por otra afección médica previa, como enfermedad renal, apnea obstructiva del sueño o desequilibrios hormonales y tiroideos.',
    },
  ];

  const specificSubtypes = [
    {
      name: 'Hipertensión Resistente',
      desc: 'La presión arterial se mantiene por encima de las metas incluso cuando se toman tres o más medicamentos antihipertensivos de familias distintas.',
    },
    {
      name: 'Hipertensión Sistólica Aislada',
      desc: 'Únicamente el número superior (presión sistólica) está elevado mientras el inferior permanece normal; muy común en adultos mayores.',
    },
  ];

  const symptomList = [
    {
      title: 'Dolores de Cabeza Intensos',
      desc: 'Cefaleas occipitales que aparecen al despertar por la mañana, coincidiendo con el pico matutino de elevación tensional.',
      icon: Brain,
    },
    {
      title: 'Falta de Aire con el Esfuerzo',
      desc: 'Dificultad respiratoria al realizar actividad física debido al aumento de resistencia en el ventrículo izquierdo y presiones pulmonares elevadas.',
      icon: Activity,
    },
    {
      title: 'Presión u Opresión Torácica',
      desc: 'Dolor anginoso provocado por la hipertrofia ventricular izquierda y el incremento de demanda de oxígeno por parte del corazón.',
      icon: Heart,
    },
    {
      title: 'Visión Borrosa o Manchas',
      desc: 'Daño en los microvasos de la retina, pequeñas hemorragias o edema papilar durante picos tensionales agudos.',
      icon: Eye,
    },
    {
      title: 'Mareos y Vértigo',
      desc: 'Desequilibrio o sensación de inestabilidad provocada por fluctuaciones bruscas en el flujo sanguíneo cerebral.',
      icon: Zap,
    },
    {
      title: 'Palpitaciones y Pulso Fuerte',
      desc: 'Sensación de latidos cardíacos acelerados o golpes rítmicos en el pecho, cuello o los oídos.',
      icon: HeartPulse,
    },
  ];

  const diagnosticTests = [
    {
      name: 'Monitoreo Ambulatorio de Presión de 24 Horas (MAPA)',
      desc: 'Elimina el efecto de bata blanca y registra los patrones de descenso nocturno para conocer la verdadera carga vascular durante todo el día.',
    },
    {
      name: 'Ecocardiograma',
      desc: 'Evalúa el grosor de las paredes del ventrículo izquierdo (hipertrofia ventricular) y la relajación miocárdica afectada por la presión alta.',
    },
    {
      name: 'Ultrasonido Doppler de Arterias Renales',
      desc: 'Ecografía vascular de alta resolución que analiza el flujo sanguíneo hacia los riñones para descartar estenosis de la arteria renal.',
    },
    {
      name: 'Biomarcadores Renales y Endocrinos',
      desc: 'Análisis de sangre y orina (filtrado glomerular eGFR, creatinina, microalbúmina, relación aldosterona-renina) para vigilar la función de órganos vitales.',
    },
  ];

  const treatments = [
    {
      name: 'Tratamiento Médico',
      badgeType: 'Tratamiento',
      desc: 'Medicamentos antihipertensivos guiados por directrices (como inhibidores de la ECA, ARA-II, antagonistas de calcio y diuréticos) adaptados para reducir la presión y proteger corazón, riñones y cerebro.',
    },
    {
      name: 'Terapia Intervencionista / Procedimiento por Catéter',
      badgeType: 'Procedimiento',
      desc: 'Procedimientos por catéter mínimamente invasivos (como la denervación renal) diseñados para tratar la hipertensión resistente actuando sobre los nervios simpáticos renales hiperactivos.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            <span className="block sm:inline">Hipertensión</span>{" "}
            <br className="hidden sm:inline" />
            <span className="inline-block">y&nbsp;Estrés Arterial</span>
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Guía de Hipertensión"
              items={[
                ['#overview', 'Resumen General'],
                ['#types', 'Clasificaciones y Tipos'],
                ['#symptoms', 'Síntomas'],
                ['#diagnosis', 'Pruebas Diagnósticas'],
                ['#treatment', 'Tratamiento'],
                ['#living-with', 'Vivir con Hipertensión'],
                ['#faqs', 'Preguntas Frecuentes'],
              ]}
              cta={{
                title: "¿Padece Presión Alta o Dolores de Cabeza?",
                href: "/es/contact",
                btnText: "Agendar Evaluación",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">
            {/* 1. OVERVIEW */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">¿Qué es la Hipertensión?</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  La hipertensión ocurre cuando la sangre ejerce una fuerza crónicamente elevada contra las paredes arteriales al circular por el organismo. Con el tiempo, esta sobrepresión debilita las arterias, acelera el depósito de placa (aterosclerosis) y obliga al músculo cardíaco a esforzarse mucho más.
                </p>
                <p>
                  En todo el mundo, la hipertensión afecta a más de 1,280 millones de adultos, pero solo cerca del 42% cuenta con un control adecuado. Sigue siendo el factor de riesgo modificable más importante para infartos, accidentes cerebrovasculares e insuficiencia renal.
                </p>
              </div>

              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/content8.jpg"
                  alt="Hipertensión y Presión Arterial Alta - Infografía Médica"
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
                  Clasificaciones y Tipos de Hipertensión
                </h2>
              </div>

              <div className="divide-y divide-slate-200/80">
                {mainTypes.map((t) => (
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

              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                  Subtipos y Situaciones Específicas
                </h3>
                <div className="divide-y divide-slate-200/80">
                  {specificSubtypes.map((t) => (
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
              </div>

              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  El riesgo cardiovascular depende de más factores que solo la cifra de presión: el colesterol, diabetes, tabaquismo, función renal, edad y antecedentes familiares influyen de forma decisiva.
                </p>
              </div>
            </section>

            {/* 3. SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Síntomas de Presión Arterial Alta</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptomList.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <div key={s.title} className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100/80 hover:bg-blue-50 transition-colors space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl border border-blue-100 text-blue-600 shadow-2xs">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base">{s.title}</h3>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-1">{s.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 4. DIAGNOSIS */}
            <section id="diagnosis" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pruebas Diagnósticas</h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                La presión cambia continuamente y una sola toma no refleja el panorama completo. Combinamos monitoreo riguroso con estudios dirigidos para identificar causas de origen y medir el impacto cardiovascular.
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
                  src="/images/es-Images/Diagnostic Testing-hypertantion-es.png"
                  alt="Pruebas Diagnósticas de Hipertensión"
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* 5. TREATMENT */}
            <section id="treatment" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Tratamiento</h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                El control de la hipertensión se enfoca en comprender su riesgo general y mantener metas de presión de manera duradera, protegiendo corazón, cerebro, riñones y arterias.
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
            </section>

            {/* 6. LIVING WITH HYPERTENSION */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Vivir con Hipertensión</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Alimentación y Estilo de Vida</h4>
                  </div>
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    <li className="flex items-start space-x-2.5"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Alimentación rica en vegetales, frutas frescas y granos integrales</span></li>
                    <li className="flex items-start space-x-2.5"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Reducir el consumo de sodio y alimentos ultraprocesados</span></li>
                    <li className="flex items-start space-x-2.5"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Actividad física periódica como caminata rápida o natación</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Control Diario y Monitoreo</h4>
                  </div>
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    <li className="flex items-start space-x-2.5"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Llevar un registro diario de lecturas de presión en el hogar</span></li>
                    <li className="flex items-start space-x-2.5"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Tomar puntualmente todos los medicamentos indicados</span></li>
                    <li className="flex items-start space-x-2.5"><CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" /><span>Manejar el estrés, dormir bien y acudir a revisiones periódicas</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. FAQS */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Preguntas Frecuentes</h2>
              </div>
              <FAQAccordion items={faqs} />
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
