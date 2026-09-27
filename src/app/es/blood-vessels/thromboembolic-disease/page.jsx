'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Zap,
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
} from 'lucide-react';
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from '@/components/FAQAccordion';

export default function ThromboembolicDiseasePageEs() {
  const faqs = [
    {
      question: '¿Qué es el Tromboembolismo Venoso (TEV o ETV)?',
      answer:
        'El Tromboembolismo Venoso (ETV) es un término médico que engloba dos afecciones estrechamente vinculadas: la Trombosis Venosa Profunda (TVP) —un coágulo que se forma en las venas profundas de las piernas— y la Embolia Pulmonar (EP) —cuando una parte del coágulo se desprende y viaja hasta las arterias pulmonares, bloqueando el flujo sanguíneo y la oxigenación.',
    },
    {
      question: '¿Cuáles son las señales de advertencia de una Embolia Pulmonar (EP)?',
      answer:
        'La embolia pulmonar es una emergencia médica que pone en riesgo la vida. Los síntomas clave incluyen falta de aire repentina, dolor torácico agudo y punzante al inhalar (dolor pleurítico), frecuencia cardíaca acelerada, tos con flema sanguinolenta (hemoptisis) y mareo intenso o desmayo (síncope). Si presenta estos síntomas, llame a los servicios de emergencia de inmediato.',
    },
    {
      question: '¿Cómo funcionan los medicamentos anticoagulantes?',
      answer:
        'Los anticoagulantes no disuelven instantáneamente los coágulos existentes; su función principal es evitar que sigan creciendo y prevenir la formación de coágulos nuevos. Con el tiempo, los mecanismos fibrinolíticos naturales del cuerpo van reabsorbiendo el coágulo. Los anticoagulantes orales directos (apixabán, rivaroxabán) suelen ser de primera elección frente a la warfarina para la mayoría de los pacientes.',
    },
    {
      question: '¿Qué es la trombólisis dirigida por catéter en casos de embolia pulmonar masiva?',
      answer:
        'En embolias pulmonares masivas o submasivas con inestabilidad hemodinámica, la trombólisis dirigida por catéter (TDC) administra dosis bajas de activador tisular del plasminógeno (tPA) directamente en el coágulo dentro de la arteria pulmonar mediante un catéter delgado, disolviéndolo con rapidez y aliviando la sobrecarga del ventrículo derecho con menor riesgo de sangrado que la trombólisis sistémica.',
    },
  ];

  const symptomList = [
    {
      title: 'Hinchazón Unilateral y Calor en la Pantorrilla',
      desc: 'Hinchazón repentina e inexplicable en una sola pierna acompañada de calor, enrojecimiento y dolor a la palpación a lo largo del trayecto venoso profundo: presentación clásica de TVP.',
      icon: Activity,
    },
    {
      title: 'Falta de Aire Repentina (Disnea)',
      desc: 'Dificultad respiratoria de inicio brusco e inexplicable en reposo o con esfuerzo mínimo: signo distintivo de embolia pulmonar que a veces es el único síntoma.',
      icon: Zap,
    },
    {
      title: 'Dolor Torácico Pleurítico Punzante',
      desc: 'Dolor punzante o agudo en el pecho que empeora marcadamente con cada inhalación profunda o al toser, secundario a irritación pleural o infarto pulmonar.',
      icon: AlertTriangle,
    },
    {
      title: 'Taquicardia y Pulso Rápido',
      desc: 'Frecuencia cardíaca acelerada superior a 100 latidos por minuto provocada por la obstrucción vascular pulmonar y la sobrecarga del ventrículo derecho.',
      icon: HeartPulse,
    },
    {
      title: 'Hemoptisis (Tos con Rastros de Sangre)',
      desc: 'Expectoración con estrías de sangre como resultado de infarto pulmonar y necrosis hemorrágica del tejido pulmonar distal a la arteria ocluida.',
      icon: Clock,
    },
    {
      title: 'Síncope o Desmayo Repentino',
      desc: 'Una embolia masiva puede causar un colapso cardiovascular abrupto cuando el ventrículo derecho falla de forma aguda por sobrecarga de presión extrema.',
      icon: Info,
    },
  ];

  const diagnosticTests = [
    {
      name: 'Angiografía Pulmonar por TC (Angio-TC Pulmonar)',
      desc: 'Visualiza directamente los trombos dentro de las arterias pulmonares con alta resolución y precisión para confirmar o descartar una embolia pulmonar.',
    },
    {
      name: 'Ultrasonido Doppler Dúplex de Extremidades Inferiores',
      desc: 'Ecografía vascular de alta resolución que evalúa las venas profundas de las piernas para detectar o descartar una trombosis venosa profunda (TVP).',
    },
    {
      name: 'Ensayo de Dímero D en Sangre',
      desc: 'Mide fragmentos proteicos de degradación de fibrina en sangre para descartar de forma segura la presencia de coágulos activos en pacientes seleccionados.',
    },
    {
      name: 'Ecocardiograma',
      desc: 'Evalúa la sobrecarga y contractilidad del ventrículo derecho, la función valvular y las presiones de la arteria pulmonar afectadas por la embolia.',
    },
  ];

  const treatments = [
    {
      name: 'Anticoagulantes Orales Directos (AOD / DOACs)',
      badgeType: 'Tratamiento',
      desc: 'Apixabán, rivaroxabán, dabigatrán. Terapia de primera línea para la mayoría de los casos de ETV. No requieren monitoreo rutinario de INR y presentan menor riesgo de sangrado grave.',
    },
    {
      name: 'Heparina de Bajo Peso Molecular (HBPM)',
      badgeType: 'Tratamiento',
      desc: 'Inyecciones subcutáneas de enoxaparina. De preferencia en casos de ETV asociados a cáncer o durante el embarazo (los AOD atraviesan la placenta).',
    },
    {
      name: 'Trombólisis Dirigida por Catéter (TDC)',
      badgeType: 'Procedimiento',
      desc: 'Dosis bajas de medicamento trombolítico aplicadas directamente sobre el coágulo pulmonar a través de un catéter, restaurando el flujo con menor riesgo de hemorragia.',
    },
    {
      name: 'Colocación de Filtro de Vena Cava Inferior (VCI)',
      badgeType: 'Procedimiento',
      desc: 'Filtro recuperable colocado en la vena cava cuando la anticoagulación está estrictamente contraindicada, impidiendo que coágulos de las piernas alcancen los pulmones.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Enfermedad Tromboembólica <br />
            y ETV
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Guía de Tromboembolismo"
              items={[
                ['#overview', 'Resumen General'],
                ['#patient-insights', 'Lo Que los Pacientes Deben Saber'],
                ['#symptoms', 'Síntomas'],
                ['#diagnosis', 'Pruebas de Diagnóstico'],
                ['#treatment', 'Tratamiento'],
                ['#prevention', 'Prevención'],
                ['#faqs', 'Preguntas Frecuentes'],
              ]}
              cta={{
                title: "¿Experimenta falta de aire repentina o síntomas de coágulos?",
                href: "/es/contact",
                btnText: "Agendar Evaluación",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">

            {/* OVERVIEW */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">¿Qué es la Enfermedad Tromboembólica?</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  La enfermedad tromboembólica ocurre cuando se forman coágulos de sangre (trombos) dentro de los vasos venosos. Si un coágulo se desprende de las venas profundas de las extremidades inferiores, viaja por la vena cava y las cavidades derechas del corazón hasta las arterias pulmonares, causando una Embolia Pulmonar (EP) potencialmente mortal.
                </p>
              </div>

              {/* Overview Medical Infographic Banner */}
              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/content5.png"
                  alt="Ilustración Médica de Enfermedad Tromboembólica y Trombo Venoso"
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* WHAT PATIENTS SHOULD KNOW */}
            <section
              id="patient-insights"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Lo Que los Pacientes Deben Saber
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Un coágulo suele ser una señal de advertencia, no solo un evento aislado. Cuando ocurre una TVP o una EP, es fundamental comprender por qué sucedió: cirugía reciente o inmovilización prolongada, ciertos medicamentos, cáncer, trastornos hereditarios o adquiridos de la coagulación, entre otros factores de riesgo.
                </p>
                <p>
                  La embolia pulmonar puede ser impredecible. Un coágulo relativamente pequeño puede causar síntomas muy marcados en algunos pacientes, mientras que otros pueden tener escasas señales de advertencia antes de un evento de gravedad.
                </p>
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Síntomas de TVP y Embolia Pulmonar</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptomList.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <div key={s.title} className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100/80 space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl border border-blue-100 text-blue-600">
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

            {/* DIAGNOSIS */}
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
                El diagnóstico de la enfermedad tromboembólica comienza evaluando sus síntomas, antecedentes médicos y factores de riesgo. Utilizamos valoración clínica y estudios de imagen dirigidos, como ecografía vascular y tomografía computarizada, para determinar si hay un coágulo, su ubicación exacta y cómo afecta la circulación sanguínea.
              </p>

              <div className="divide-y divide-slate-200/80">
                {diagnosticTests.map((d) => (
                  <div
                    key={d.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        {d.name}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TREATMENT */}
            <section id="treatment" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Tratamiento</h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                El tratamiento se enfoca en frenar el crecimiento del coágulo, evitar nuevos trombos y prevenir complicaciones graves. Dependiendo de la localización y severidad, el tratamiento puede abarcar medicamentos anticoagulantes, procedimientos endovasculares de extracción o terapias para disolver el coágulo en casos seleccionados.
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

            {/* PREVENTION */}
            <section id="prevention" className="scroll-mt-24">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-6 sm:p-10">
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Prevención de Coágulos Sanguíneos</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { tip: 'Manténgase Activo en Vuelos Largos', desc: 'Camine por el pasillo cada 1 o 2 horas. Realice ejercicios de flexión y rotación de tobillos al estar sentado. Manténgase bien hidratado.' },
                    { tip: 'Medias de Compresión Graduada', desc: 'Medias de 15–30 mmHg durante viajes o períodos prolongados de pie reducen el riesgo de TVP notablemente.' },
                    { tip: 'Anticoagulación Profiláctica', desc: 'Pacientes quirúrgicos de alto riesgo reciben profilaxis con HBPM antes y después de procedimientos quirúrgicos según indicación médica.' },
                    { tip: 'Movilización Temprana Tras Cirugía', desc: 'Levantarse y caminar dentro de las primeras 24 horas después de una cirugía disminuye significativamente la estasis venosa.' },
                  ].map(item => (
                    <div key={item.tip} className="bg-white border border-emerald-100 p-4 rounded-2xl space-y-1">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                        <h4 className="font-bold text-slate-800 text-sm">{item.tip}</h4>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed pl-6">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQS */}
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
