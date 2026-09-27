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
  HeartPulse,
  FileText,
  Clock,
  Apple,
} from 'lucide-react';
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from '@/components/FAQAccordion';

export default function DVTPageEs() {
  const faqs = [
    {
      question: '¿Qué es la Trombosis Venosa Profunda (TVP)?',
      answer:
        'La TVP es una afección médica de consideración en la que se forma un coágulo de sangre (trombo) en una vena profunda, habitualmente en el muslo o la pantorrilla. Si un fragmento del coágulo se desprende, puede viajar hacia los pulmones y provocar una embolia pulmonar (EP) potencialmente mortal.',
    },
    {
      question: '¿Cuáles son los síntomas principales de una TVP en la pierna?',
      answer:
        'Los síntomas característicos incluyen hinchazón repentina en una sola pierna, dolor profundo o calambres en la pantorrilla, enrojecimiento o cambio de coloración en la piel y una notable sensación de calor a lo largo de la vena afectada.',
    },
    {
      question: '¿Por cuánto tiempo se deben tomar anticoagulantes para la TVP?',
      answer:
        'En casos de TVP provocada (por cirugía reciente o reposo prolongado), la anticoagulación suele indicarse por 3 meses. Para eventos no provocados o coágulos recurrentes, se puede recomendar tratamiento a largo plazo o indefinido.',
    },
  ];

  const typesList = [
    {
      name: 'TVP Distal (Venas de la Pantorrilla)',
      tag: 'Pierna Inferior',
      desc: 'Coágulos en venas tibiales posteriores o peroneas por debajo de la rodilla. Menor riesgo inmediato de embolia, pero requieren seguimiento médico.',
      color: 'text-blue-700',
      bg: 'bg-blue-50',
    },
    {
      name: 'TVP Proximal (Poplítea / Femoral)',
      tag: 'Alto Riesgo de Embolia',
      desc: 'Coágulos en venas ubicadas por encima de la rodilla. Elevada probabilidad de desprendimiento pulmonar, requiriendo anticoagulación urgente.',
      color: 'text-red-700',
      bg: 'bg-red-50',
    },
    {
      name: 'TVP Iliofemoral',
      tag: 'Coágulo Extenso',
      desc: 'Trombosis masiva que se extiende a las venas ilíacas y la vena cava inferior. Causa hinchazón severa en toda la extremidad y dolor intenso.',
      color: 'text-purple-700',
      bg: 'bg-purple-50',
    },
    {
      name: 'Flegmasia Cerúlea Dolens',
      tag: 'Urgencia Quirúrgica',
      desc: 'Obstrucción venosa casi total que compromete el flujo arterial secundario, provocando dolor agudo extremo, cianosis y riesgo de gangrena venosa.',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
    },
  ];

  const symptoms = [
    { title: 'Hinchazón Unilateral de Pierna', desc: 'Edema repentino e inexplicable en una sola pierna o pantorrilla que se intensifica en horas.', icon: Activity },
    { title: 'Dolor Profundo y Sensibilidad en Pantorrilla', desc: 'Dolor pulsátil, sordo o calambre fuerte en la pantorrilla o muslo que empeora al caminar.', icon: Zap },
    { title: 'Enrojecimiento y Calor en la Piel', desc: 'La piel sobre el trayecto venoso se percibe caliente al tacto, eritematosa o amoratada.', icon: AlertTriangle },
    { title: 'Venas Superficiales Dilatadas', desc: 'Venas superficiales visibles y distendidas conforme la sangre busca vías alternas ante la obstrucción.', icon: HeartPulse },
    { title: 'Signo de Homans Positivo', desc: 'Dolor agudo en la pantorrilla al realizar flexión dorsal pasiva del pie hacia arriba.', icon: Clock },
    { title: 'Signos de Embolia Pulmonar', desc: 'Falta de aire repentina, dolor punzante en el pecho o tos con sangre si el coágulo viaja a los pulmones.', icon: Info },
  ];

  const treatments = [
    { name: 'Anticoagulantes Orales Directos (AOD / DOACs)', desc: 'Eliquis (Apixabán), Xarelto (Rivaroxabán). Primera línea de tratamiento para detener el crecimiento del trombo y evitar recurrencias.', duration: '3–6 Meses', recovery: 'Protección Inmediata', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80' },
    { name: 'Heparina de Bajo Peso Molecular (HBPM)', desc: 'Inyecciones subcutáneas (Enoxaparina) de elección en pacientes con cáncer activo o durante el embarazo donde los AOD no se indican.', duration: 'Protocolo Clínico', recovery: 'Manejo Ambulatorio', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80' },
    { name: 'Trombólisis Dirigida por Catéter (TDC)', desc: 'Procedimiento mínimamente invasivo que aplica trombolíticos directamente en trombosis iliofemorales extensas para disolver el trombo.', duration: 'Procedimiento', recovery: 'Estancia Hospitalaria', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80' },
    { name: 'Colocación de Filtro de VCI', desc: 'Dispositivo insertado en la vena cava inferior para atrapar coágulos antes de que lleguen a los pulmones si los anticoagulantes no son seguros.', duration: '30 Minutos', recovery: 'Mismo Día', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Trombosis Venosa <br />
            Profunda (TVP)
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Guía de TVP"
              items={[
                ['#overview', 'Resumen General'],
                ['#types', 'Clasificaciones y Tipos'],
                ['#symptoms', 'Síntomas'],
                ['#diagnosis', 'Pruebas de Diagnóstico'],
                ['#treatment', 'Tratamiento y Procedimientos'],
                ['#living-with', 'Vivir con TVP'],
                ['#faqs', 'Preguntas Frecuentes'],
              ]}
              cta={{
                title: "¿Siente hinchazón repentina o dolor en la pantorrilla?",
                href: "/es/contact",
                btnText: "Agendar Evaluación",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">

            {/* 1. OVERVIEW (USE IMAGE) */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">¿Qué es la Trombosis Venosa Profunda?</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  La Trombosis Venosa Profunda (TVP) ocurre cuando se forma un coágulo de sangre (trombo) dentro de las venas profundas de las extremidades inferiores o de la pelvis (venas poplíteas, femorales o ilíacas).
                </p>
                <p>
                  Si una porción del trombo se fragmenta y desprende, viaja a través de la vena cava hacia las arterias de los pulmones, provocando una <strong>Embolia Pulmonar (EP)</strong> que requiere atención médica de emergencia.
                </p>
              </div>

              {/* Banner Image */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Ultrasonido Doppler Venoso"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Clasificaciones y Tipos de TVP</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {typesList.map((t) => (
                  <div key={t.name} className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 text-base">{t.name}</h3>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${t.bg} ${t.color}`}>{t.tag}</span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. SYMPTOMS (USE ICONS) */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Síntomas de Coágulos Venosos Profundos</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptoms.map((s) => {
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

            {/* 4. DIAGNOSIS/TEST (USE IMAGE) */}
            <section id="diagnosis" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnóstico y Pruebas Doppler</h2>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                La evaluación rápida integra escalas de riesgo clínico con ultrasonido venoso vascular de alta resolución:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                        alt="Ultrasonido Doppler Dúplex de Compresión"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Ultrasonido Dúplex con Compresión</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Estudio de elección prioritario para confirmar la presencia del trombo.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                        alt="Prueba de Dímero D de Alta Sensibilidad"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Prueba de Dímero D</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Permite descartar TVP de forma segura en pacientes de bajo riesgo clínico.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
                        alt="Escala Clínica de Wells para TVP"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Escala Clínica de Wells</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Estratifica la probabilidad clínica previa a la realización de estudios de imagen.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                        alt="Venografía por TC o RM"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Venografía por TC o RM</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Evalúa la extensión del trombo hacia vasos pélvicos e iliofemorales profundos.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. TREATMENT (PROCEDURES) (USE IMAGE) */}
            <section id="treatment" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Tratamiento y Procedimientos</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {treatments.map((t) => (
                  <div key={t.name} className="rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image src={t.image} alt={t.name} fill className="object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-2">
                        <span className="bg-blue-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{t.duration}</span>
                        <span className="bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{t.recovery}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">{t.name}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. LIVING WITH DVT */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Vivir con TVP y Cuidados Postrombóticos</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Medias de Compresión Graduada</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Uso diario de medias de compresión graduada de 30–40 mmHg</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Previenen y reducen el síndrome postrombótico (dolor crónico y pesadez)</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Elevar las piernas por encima del nivel del corazón durante los descansos</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">Recomendaciones de Viaje y Movilidad</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Ponerse de pie y caminar cada 1–2 horas en vuelos o trayectos largos en auto</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Mantener una buena hidratación y hacer ejercicios de flexión de tobillos</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Cumplir estrictamente con el horario indicado de sus anticoagulantes</span></li>
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
