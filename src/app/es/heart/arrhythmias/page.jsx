'use client';

import { useState } from 'react';
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

export default function SpanishArrhythmiasPage() {
  const faqs = [
    {
      question: '¿Qué es la Fibrilación Auricular (AFib)?',
      answer:
        'La Fibrilación Auricular es la arritmia cardíaca más común, caracterizada por impulsos eléctricos rápidos y desorganizados en las cámaras superiores del corazón (aurículas). La AFib quintuplica el riesgo de sufrir un derrame cerebral (embolia) y requiere tratamiento de prevención con anticoagulantes.',
    },
    {
      question: '¿Cómo se diagnostican las palpitaciones cardíacas?',
      answer:
        'Las palpitaciones se evalúan mediante electrocardiograma de 12 derivaciones, monitoreo Holter de 24 a 48 horas, monitores de parche prolongado (como el parche Zio) o grabadores de bucle implantables para capturar arritmias transitorias mientras ocurren los síntomas.',
    },
    {
      question: '¿Cuándo se necesita un marcapasos o un DAI (desfibrilador)?',
      answer:
        'Los marcapasos se implantan para tratar la bradicardia sintomática (ritmo cardíaco excesivamente lento, por debajo de 40 lpm). Los Desfibriladores Automáticos Implantables (DAI) se recomiendan a pacientes en riesgo de taquicardia ventricular grave o paro cardíaco repentino.',
    },
    {
      question: '¿Qué es la ablación por catéter y qué tan efectiva resulta?',
      answer:
        'La ablación con catéter utiliza energía de radiofrecuencia o frío extremo (crioablación) aplicada mediante un catéter fino para cicatrizar pequeñas áreas de tejido cardíaco que emiten señales anómalas. Para la fibrilación auricular paroxística, el aislamiento de venas pulmonares logra mantener un ritmo normal en el 70-80% de los pacientes al cabo de un año.',
    },
  ];

  const symptomList = [
    {
      title: 'Desmayos y Mareos Severos (Síncope)',
      desc: 'Pérdida temporal y repentina del conocimiento debido a pausas eléctricas prolongadas (bloqueo cardíaco) o frecuencias muy rápidas.',
      icon: AlertTriangle,
    },
    {
      title: 'Falta de Aire y Asfixia',
      desc: 'Disnea que se presenta durante ritmos rápidos e irregulares cuando la eficiencia de bombeo del corazón disminuye marcadamente.',
      icon: Clock,
    },
    {
      title: 'Opresión o Molestia en el Pecho',
      desc: 'Presión en el pecho originada durante ritmos ventriculares rápidos por un menor tiempo de llenado arterial coronario.',
      icon: HeartPulse,
    },
    {
      title: 'Fatiga e Intolerancia al Ejercicio',
      desc: 'Cansancio profundo durante la actividad física como consecuencia del gasto cardíaco irregular e insuficiente por arritmias sostenidas.',
      icon: Activity,
    },
  ];

  const arrhythmiaCategories = [
    {
      title: 'Ritmos Cardíacos Rápidos',
      category: 'Taquiarritmias',
      items: 'Taquicardia supraventricular (TSV) · Taquicardia auricular · Flutter auricular · Taquicardia ventricular',
    },
    {
      title: 'Ritmos Cardíacos Lentos',
      category: 'Bradiarritmias',
      items: 'Bradicardia sinusal · Disfunción del nodo sinusal · Bloqueo auriculoventricular',
    },
    {
      title: 'Ritmos Cardíacos Irregulares',
      category: 'Ritmos irregulares',
      items: 'Fibrilación auricular · Contracciones auriculares prematuras (CAP) · Contracciones ventriculares prematuras (CVP)',
    },
  ];

  const diagnosticTests = [
    {
      name: 'Monitor Holter',
      desc: 'Dispositivo de ECG portátil que se lleva puesto durante 24 a 48 horas durante sus actividades normales.',
    },
    {
      name: 'Grabadora de Eventos',
      desc: 'Monitor portátil utilizado hasta por 30 días, que se activa cuando usted siente palpitaciones.',
    },
    {
      name: 'Ecocardiograma',
      desc: 'Prueba de ultrasonido que utiliza ondas sonoras para examinar la estructura, las válvulas y el flujo del corazón.',
    },
    {
      name: 'Monitor de Eventos Implantable (ILR)',
      desc: 'Dispositivo miniatura colocado bajo la piel para monitorear y registrar el ritmo cardíaco continuamente hasta por 3 años.',
    },
    {
      name: 'Estudio Electrofisiológico (EEF)',
      desc: 'Procedimiento hospitalario por catéter para cartografiar con exactitud los circuitos eléctricos anómalos del corazón.',
    },
  ];

  const treatments = [
    {
      name: 'Terapia con Medicamentos Antiarrítmicos',
      badgeType: 'Tratamiento',
      desc: 'Fármacos para control de frecuencia (betabloqueadores, antagonistas de calcio) o de ritmo (flecainida, amiodarona, sotalol) para estabilizar las señales eléctricas.',
    },
    {
      name: 'Ablación por Catéter',
      badgeType: 'Procedimiento',
      desc: 'Procedimiento mínimamente invasivo que aplica calor o frío para eliminar diminutas zonas generadoras de arritmias. Es el estándar de oro para TSV y fibrilación auricular.',
    },
    {
      name: 'Cierre de la Orejuela Auricular Izquierda (LAAC / Watchman)',
      badgeType: 'Procedimiento',
      desc: 'Intervención endovascular que ocluye la orejuela izquierda para reducir el riesgo de embolia y derrame cerebral en pacientes con fibrilación auricular.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Arritmias y <br />
            Fibrilación Auricular
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Guía de Arritmias"
              items={[
                ['#overview', '¿Qué son las Arritmias?'],
                ['#types', 'Tipos de Arritmias'],
                ['#symptoms', 'Síntomas'],
                ['#diagnosis', 'Pruebas Diagnósticas'],
                ['#treatment', 'Tratamiento'],
                ['#faqs', 'Preguntas Frecuentes'],
              ]}
              cta={{
                title: "¿Siente Palpitaciones o Latidos Irregulares?",
                href: "/es/contact",
                btnText: "Agendar Evaluación",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">
            {/* OVERVIEW */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">¿Qué son las Arritmias Cardíacas?</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Las arritmias son trastornos del sistema eléctrico del corazón que pueden hacer que lata demasiado lento, rápido o de manera irregular. Abarcan desde variantes inofensivas hasta condiciones de cuidado médico.
                </p>
                <p>
                  Es importante destacar que la intensidad de los síntomas no siempre refleja la gravedad: una arritmia delicada puede provocar síntomas leves, mientras que una alteración benigna puede percibirse con mucha intensidad.
                </p>
              </div>

              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/content.png"
                  alt="Sistema Eléctrico Cardíaco y Resumen de Arritmias"
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* TYPES */}
            <section
              id="types"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Tipos de Arritmias Cardíacas
                </h2>
              </div>

              <div className="divide-y divide-slate-200/80">
                {arrhythmiaCategories.map((t) => (
                  <div
                    key={t.title}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1 last:pb-1"
                  >
                    <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0 space-y-0.5">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        {t.title}
                      </h3>
                      <p className="italic text-blue-600 font-medium text-xs sm:text-sm">
                        {t.category}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {t.items}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Algunas arritmias, como la fibrilación auricular, incrementan notablemente el riesgo de accidente cerebrovascular y requieren prevención anticoagulante además del control del ritmo.
                </p>
              </div>

              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/types.png"
                  alt="Tipos de Arritmias: Rápidas, Lentas e Irregulares"
                  width={1400}
                  height={800}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">¿Qué síntomas podría notar?</h2>
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

              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p>
                    Las arritmias pueden ser intermitentes y difíciles de detectar en un ECG rápido, requiriendo monitoreo más prolongado.
                  </p>
                  <p>
                    Los síntomas no siempre guardan relación con la gravedad: arritmias serias pueden pasar desapercibidas y palpitaciones benignas sentirse intensas.
                  </p>
                </div>
              </div>
            </section>

            {/* DIAGNOSIS */}
            <section id="diagnosis" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Pruebas Diagnósticas</h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                De acuerdo con sus síntomas y la alteración sospechada, puede requerirse monitoreo continuo del ritmo cardíaco.
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

              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start space-x-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p>
                  Los relojes inteligentes y tecnología vestible pueden ayudar a sospechar una arritmia, pero deben confirmarse siempre con estudios clínicos.
                </p>
              </div>
            </section>

            {/* TREATMENT */}
            <section id="treatment" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Tratamiento</h2>
              </div>

              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  El tratamiento es personalizado y depende del tipo de arritmia, su causa, síntomas, enfermedades acompañantes y nivel de riesgo.
                </p>
                <p>
                  El manejo abarca desde observación cuidadosa hasta tratamientos avanzados:
                </p>
                <p>
                  Muchos casos mejoran de manera notable con procedimientos por catéter, reduciendo o eliminando la necesidad de medicamentos prolongados.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
                  Las opciones de tratamiento incluyen:
                </h3>

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
