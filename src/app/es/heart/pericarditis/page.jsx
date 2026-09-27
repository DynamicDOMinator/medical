'use client';

import Image from 'next/image';
import Link from 'next/link';
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
} from 'lucide-react';
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from '@/components/FAQAccordion';

export default function SpanishPericarditisPage() {
  const faqs = [
    {
      question: '¿En qué se diferencia la pericarditis de un infarto al corazón?',
      answer:
        'Ambas causan dolor torácico, pero la pericarditis produce un dolor punzante y agudo que empeora al acostarse boca arriba o al respirar hondo, y se alivia notablemente al inclinarse hacia adelante. En cambio, el dolor de un infarto suele ser opresivo y aplastante, se irradia y no varía según la postura corporal.',
    },
    {
      question: '¿La pericarditis puede volver a presentarse (recurrencia)?',
      answer:
        'Sí. La pericarditis recurrente se presenta en un 15% a 30% de los pacientes tras el primer episodio. Agregar colchicina al tratamiento con antiinflamatorios (AINEs) durante 3 a 6 meses reduce a más de la mitad la probabilidad de recaída.',
    },
    {
      question: '¿Qué es el taponamiento cardíaco?',
      answer:
        'El taponamiento cardíaco es una emergencia médica donde el líquido se acumula rápidamente en el saco pericárdico, comprimiendo el corazón e impidiendo que los ventrículos se llenen de sangre de manera adecuada.',
    },
  ];

  const typesList = [
    {
      name: 'Pericarditis Aguda Viral / Idiopática',
      desc: 'Inflamación súbita del pericardio posterior a infecciones por enterovirus, adenovirus, Coxsackie o SARS-CoV-2.',
    },
    {
      name: 'Pericarditis Recurrente',
      desc: 'Episodios repetidos de inflamación que surgen tras un período sin molestias, mediada con frecuencia por el sistema inmunitario.',
    },
    {
      name: 'Pericarditis Constrictiva',
      desc: 'La inflamación crónica hace que el pericardio se vuelva grueso, rígido y calcificado, aprisionando el corazón.',
    },
    {
      name: 'Taponamiento Cardíaco',
      desc: 'Acumulación acelerada de derrame pericárdico que colapsa la circulación y requiere una pericardiocentesis de urgencia.',
    },
  ];

  const symptomList = [
    {
      title: 'Dolor de Pecho Punzante y Posicional',
      desc: 'Dolor punzante clásico detrás del esternón que empeora al acostarse plano o inhalar hondo, y mejora al inclinarse al frente.',
      icon: Heart,
    },
    {
      title: 'Frote Pericárdico a la Auscultación',
      desc: 'Sonido áspero y característico detectado con el estetoscopio por el roce entre las capas inflamadas del pericardio.',
      icon: Stethoscope,
    },
    {
      title: 'Febrícula y Malestar General',
      desc: 'Respuesta inflamatoria sistémica acompañada de dolores musculares, cansancio y ligera elevación de la temperatura.',
      icon: Info,
    },
    {
      title: 'Falta de Aire al Respirar',
      desc: 'Dificultad provocada por respiraciones superficiales que el paciente adopta para evitar el dolor agudo en el pecho.',
      icon: Clock,
    },
    {
      title: 'Palpitaciones Cardíacas',
      desc: 'Latidos acelerados o saltones causados por irritación inflamatoria auricular o acumulación de líquido pericárdico.',
      icon: HeartPulse,
    },
    {
      title: 'Presión Baja y Venas del Cuello Marcadas',
      desc: 'Señales clínicas de taponamiento cardíaco que exigen evaluación médica y tratamiento inmediato.',
      icon: AlertTriangle,
    },
  ];

  const treatments = [
    {
      name: 'AINEs en Dosis Altas + Colchicina',
      desc: 'Tratamiento antiinflamatorio de primera línea (Ibuprofeno/Aspirina) asociado con Colchicina por 3 meses para evitar recaídas.',
      duration: '3–6 Meses',
      recovery: 'Manejo Ambulatorio',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Pericardiocentesis',
      desc: 'Evacuación de líquido pericárdico con aguja guiada por ecocardiograma para aliviar el taponamiento cardíaco de urgencia.',
      duration: '30 Minutos',
      recovery: 'Alivio Inmediato',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Inhibidores de Interleucina-1 (Anakinra / Rilonacept)',
      desc: 'Terapia biológica de precisión para pericarditis recurrente refractaria y dependiente de corticosteroides.',
      duration: 'Inyecciones Subcutáneas',
      recovery: 'Protección Duradera',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Pericardiectomía',
      desc: 'Extirpación quirúrgica del pericardio fibrótico y calcificado en casos severos de pericarditis constrictiva.',
      duration: 'Quirúrgico',
      recovery: 'Recuperación Hospitalaria',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Pericarditis y Cuidado <br />
            del Saco Pericárdico
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Guía de Pericarditis"
              items={[
                ['#overview', 'Resumen General'],
                ['#types', 'Clasificaciones y Tipos'],
                ['#symptoms', 'Síntomas'],
                ['#diagnosis', 'Pruebas Diagnósticas'],
                ['#treatment', 'Tratamiento y Procedimientos'],
                ['#living-with', 'Vivir con Pericarditis'],
                ['#faqs', 'Preguntas Frecuentes'],
              ]}
              cta={{
                title: "¿Siente Dolor Punzante al Acostarse?",
                href: "/es/contact",
                btnText: "Agendar Evaluación",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">
            {/* 1. OVERVIEW */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">¿Qué es la Pericarditis?</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  La pericarditis es la inflamación del pericardio, la membrana de dos capas que envuelve y protege el corazón conteniendo una pequeña cantidad de líquido lubricante.
                </p>
                <p>
                  Al inflamarse, ambas capas rozan entre sí provocando un dolor de pecho intenso y punzante que característicamente empeora al acostarse o al respirar hondo, y se alivia al sentarse e inclinarse hacia adelante.
                </p>
              </div>

              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Imagen Diagnóstica de Pericardio"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Clasificaciones y Tipos de Pericarditis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {typesList.map((t) => (
                  <div key={t.name} className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2">
                    <h3 className="font-bold text-slate-900 text-base">{t.name}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Síntomas de la Pericarditis</h2>
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
            <section id="diagnosis" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnóstico y Pruebas</h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                El diagnóstico se confirma al cumplir al menos 2 de los 4 criterios clínicos (dolor punzante posicional, frote pericárdico, elevación del ST en ECG y derrame pericárdico en ecografía):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                        alt="Electrocardiograma de 12 Derivaciones"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Electrocardiograma de 12 Derivaciones</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Muestra elevación difusa del segmento ST con concavidad superior y descenso del PR.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
                        alt="Ecocardiograma Transtorácico"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Ecocardiograma Transtorácico</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Verifica la presencia y la cantidad de líquido acumulado (derrame pericárdico).</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                        alt="Resonancia Cardíaca (RMC)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Resonancia Cardíaca (RMC)</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Evalúa el grado activo de inflamación, edema y engrosamiento pericárdico.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                        alt="Biomarcadores Inflamatorios (PCR-us / VSG)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Biomarcadores Inflamatorios (PCR / VSG)</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Mide cuantitativamente el nivel de inflamación en el organismo y guía el tratamiento.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. TREATMENT */}
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

            {/* 6. LIVING WITH PERICARDITIS */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Vivir con Pericarditis</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Reposo y Restricción de Ejercicio</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Restricción rigurosa del esfuerzo físico hasta normalizar síntomas y PCR</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Los atletas deben abstenerse de competir por al menos 3 meses</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Evitar levantar cargas pesadas durante la fase activa</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">Adherencia al Tratamiento</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Completar los 3 meses de Colchicina aunque ya no sienta dolor</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Tomar protectores gástricos junto con los antiinflamatorios</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Monitorear los análisis de sangre antes de reducir dosis</span></li>
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
