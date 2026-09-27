'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  GitBranch,
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
  FileText,
} from 'lucide-react';
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from '@/components/FAQAccordion';

export default function PADPageEs() {
  const faqs = [
    {
      question: '¿Qué es la Enfermedad Arterial Periférica (EAP)?',
      answer:
        'La EAP es una condición circulatoria en la que se acumula placa aterosclerótica en las arterias que irrigan las piernas y los brazos. El estrechamiento arterial reduce el flujo sanguíneo, provocando dolor o calambres en los músculos de las piernas al caminar (claudicación).',
    },
    {
      question: '¿Qué es la prueba del Índice Tobillo-Brazo (ITB)?',
      answer:
        'El ITB es un estudio diagnóstico simple, rápido y no invasivo que compara la presión arterial tomada en el tobillo con la tomada en el brazo. Un cociente menor a 0.90 es indicativo de obstrucción arterial y presencia de enfermedad arterial periférica.',
    },
    {
      question: '¿Puede la EAP causar isquemia crítica si no se trata a tiempo?',
      answer:
        'Sí. La EAP avanzada no tratada puede evolucionar a Isquemia Crítica de Extremidades (ICE), caracterizada por dolor intenso en reposo, úlceras en pies que no cicatrizan, riesgo de gangrena y amputación. El diagnóstico oportuno y el tratamiento endovascular son vitales.',
    },
    {
      question: '¿Cómo trata la EAP un cardiólogo intervencionista?',
      answer:
        'El tratamiento combina el control riguroso de factores de riesgo (estatinas, antiplaquetarios, programa de caminata guiada) con procedimientos endovasculares mínimamente invasivos, tales como angioplastia con balón, aterectomía, litotricia intravascular y colocación de stents arteriales.',
    },
  ];

  const symptomList = [
    {
      title: 'Claudicación Intermitente',
      desc: 'Calambres o dolor muscular punzante en pantorrillas o muslos al caminar o subir escaleras que ceden tras breves minutos de reposo.',
      icon: Clock,
    },
    {
      title: 'Frialdad en la Pierna o el Pie',
      desc: 'Diferencia evidente de temperatura donde una extremidad se percibe notablemente más fría que la otra por riego arterial deficiente.',
      icon: Info,
    },
    {
      title: 'Úlceras en Pies de Difícil Cicatrización',
      desc: 'Llagas o heridas en dedos, empeine o tobillos que cicatrizan muy despacio o permanecen abiertas durante semanas.',
      icon: AlertTriangle,
    },
    {
      title: 'Pérdida de Vello y Piel Tersa o Brillante',
      desc: 'Caída de vello en piernas y dedos, acompañada de adelgazamiento de la piel o tonalidad pálida o azulada.',
      icon: Activity,
    },
    {
      title: 'Pulsos Débiles o Ausentes en Extremidades',
      desc: 'Disminución o falta de pulso en arterias femorales, poplíteas o pedias detectada por el cardiólogo durante la exploración física.',
      icon: HeartPulse,
    },
    {
      title: 'Dolor Isquémico en Reposo',
      desc: 'Dolor quemante intenso en el pie que despierta durante la noche al estar acostado y que suele aliviarse al colgar la pierna al borde de la cama.',
      icon: Zap,
    },
  ];

  const diagnosticTests = [
    {
      name: "Índice Tobillo-Brazo (ITB)",
      desc: "Compara los registros de presión arterial entre tobillos y brazos; un valor por debajo de 0.9 confirma la presencia de EAP.",
    },
    {
      name: "Prueba de ITB con Esfuerzo",
      desc: "Mide las variaciones de la presión arterial antes y después de caminar en una banda de esfuerzo continuo.",
    },
    {
      name: "Ultrasonido Doppler Arterial",
      desc: "Utiliza ondas sonoras de alta definición para observar el flujo sanguíneo y localizar con precisión las zonas con estenosis.",
    },
    {
      name: "Angiografía",
      desc: "Emplea imágenes radiológicas especializadas y medio de contraste para trazar un mapa anatómico exacto de las obstrucciones arteriales.",
    },
  ];

  const treatments = [
    {
      name: 'Terapia de Ejercicio Supervisado (TES)',
      badgeType: 'Tratamiento',
      desc: 'Programa guiado de caminata en banda para estimular la circulación colateral y aumentar las distancias recorridas sin dolor.',
    },
    {
      name: 'Angioplastia Endovascular con Balón',
      badgeType: 'Procedimiento',
      desc: 'Un catéter con un balón microscópico en la punta se navega hasta la arteria ocluida y se infla para comprimir la placa contra la pared arterial.',
    },
    {
      name: 'Aterectomía',
      badgeType: 'Procedimiento',
      desc: 'Dispositivos de cateterismo avanzados que afeitan, desbastan o vaporizan la placa calcificada directamente del interior de la arteria.',
    },
    {
      name: 'Litotricia Intravascular',
      badgeType: 'Procedimiento',
      desc: 'Aplica ondas sónicas pulsadas de presión para fracturar de forma segura la calcificación profunda antes de expandir balones o stents.',
    },
    {
      name: 'Colocación de Stent Arterial Periférico',
      badgeType: 'Procedimiento',
      desc: 'Inserción de una malla metálica expandible para apuntalar la arteria tratada y asegurar un flujo sanguíneo duradero a largo plazo.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Enfermedad Arterial <br />
            Periférica (EAP)
          </h1>
        </div>
      </div>

      {/* 2. MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Guía de EAP"
              items={[
                ['#overview', 'Resumen General'],
                ['#symptoms', 'Síntomas'],
                ['#diagnosis', 'Diagnóstico'],
                ['#treatment', 'Tratamiento'],
                ['#faqs', 'Preguntas Frecuentes'],
              ]}
              cta={{
                title: "¿Experimenta dolor en las piernas o calambres al caminar?",
                href: "/es/contact",
                btnText: "Agendar Evaluación",
              }}
            />
          </div>

          {/* Main Sections */}
          <div className="lg:col-span-9 space-y-12">

            {/* OVERVIEW */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Entendiendo la Enfermedad Arterial Periférica</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  La enfermedad arterial periférica (EAP) es mucho más que un problema de circulación en las piernas: es una manifestación clara de aterosclerosis sistémica. El mismo proceso de placa que afecta las arterias de las piernas puede comprometer el corazón y el cerebro, razón por la cual la EAP es un marcador crítico de riesgo cardiovascular global.
                </p>
                <p>
                  Conforme la EAP avanza, puede mermar la capacidad de caminar, la resistencia física y la movilidad habitual, ocasionando una pérdida importante de autonomía.
                </p>
                <p>
                  En etapas avanzadas, la EAP pone en riesgo la extremidad. Puede ocasionar dolor constante en reposo, llagas que no cierran, úlceras o gangrena, llegando en casos severos a requerir amputación si no se revasculariza a tiempo.
                </p>
              </div>

              {/* Overview Medical Infographic Banner */}
              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/images/pad-overview-illustration.png"
                  alt="Ilustración Médica de Enfermedad Arterial Periférica (EAP)"
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Síntomas de la EAP</h2>
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

            {/* DIAGNOSIS */}
            <section
              id="diagnosis"
              className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24 overflow-hidden"
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Diagnóstico
                </h2>
              </div>

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

              {/* Diagnostic Testing Infographic Banner */}
              <div className="mt-8 -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 border-t border-slate-100 bg-white">
                <Image
                  src="/content4.png"
                  alt="Infografía de Pruebas Diagnósticas para EAP"
                  width={1400}
                  height={900}
                  className="w-full h-auto block"
                />
              </div>
            </section>

            {/* TREATMENT */}
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
                El tratamiento de la enfermedad arterial periférica (EAP) se centra en restablecer el flujo sanguíneo, aliviar los síntomas, proteger la extremidad y reducir el riesgo de infarto y derrame cerebral. El enfoque idóneo se adapta a la severidad de las obstrucciones, sus síntomas y su salud global.
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
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border shrink-0 ${t.badgeType === "Tratamiento"
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
                  Nuestro objetivo es seleccionar el tratamiento menos invasivo y más seguro para optimizar su circulación y mantenerlo activo y en movimiento.
                </p>
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
