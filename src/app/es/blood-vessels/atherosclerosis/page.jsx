'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Layers,
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
  Heart,
} from 'lucide-react';
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from '@/components/FAQAccordion';

export default function AtherosclerosisPageEs() {
  const faqs = [
    {
      question: '¿Qué es la aterosclerosis?',
      answer:
        'La aterosclerosis es una afección inflamatoria crónica en la que el colesterol, el calcio y los restos celulares forman depósitos grasos (placas de ateroma) dentro de las paredes arteriales, estrechando los conductos y reduciendo el flujo sanguíneo rico en oxígeno.',
    },
    {
      question: '¿Se puede revertir o estabilizar la placa aterosclerótica?',
      answer:
        'Aunque la placa fuertemente calcificada no suele eliminarse por completo, el tratamiento intensivo con estatinas, los inhibidores de PCSK9 y una reducción estricta del colesterol LDL pueden frenar el avance de la placa y estabilizar las placas vulnerables para evitar roturas.',
    },
    {
      question: '¿Cuál es la diferencia entre una placa estable y una placa vulnerable?',
      answer:
        'Las placas estables cuentan con una capa fibrosa gruesa que las protege. Las placas vulnerables tienen una capa delgada sobre un núcleo lipídico abundante y son propensas a romperse repentinamente, lo que desencadena coágulos sanguíneos e infartos.',
    },
  ];

  const typesList = [
    {
      name: 'Aterosclerosis Coronaria',
      tag: 'Riesgo de Infarto',
      desc: 'Acumulación de placa en las arterias coronarias que irrigan el músculo cardíaco. Provoca angina de pecho e infarto agudo de miocardio.',
      color: 'text-blue-700',
      bg: 'bg-blue-50',
    },
    {
      name: 'Aterosclerosis Carotídea',
      tag: 'Riesgo de Derrame Cerebral',
      desc: 'Placa en las arterias carótidas que llevan sangre al cerebro. Puede causar accidentes isquémicos transitorios (AIT) y derrames cerebrales isquémicos.',
      color: 'text-purple-700',
      bg: 'bg-purple-50',
    },
    {
      name: 'Aterosclerosis Arterial Periférica',
      tag: 'Isquemia en Piernas',
      desc: 'Estrechamiento por placa en arterias femorales y poplíteas de las piernas, causando dolor al caminar (claudicación) y úlceras de difícil cicatrización.',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
    },
    {
      name: 'Aterosclerosis Aórtica y Renal',
      tag: 'Riesgo Renal y Aórtico',
      desc: 'Placas en la aorta abdominal y las arterias renales que ocasionan hipertensión renovascular y predisposición a aneurismas aórticos.',
      color: 'text-red-700',
      bg: 'bg-red-50',
    },
  ];

  const symptoms = [
    { title: 'Presión en el Pecho y Angina de Esfuerzo', desc: 'Dolor o sensación opresiva causada por el flujo arterial insuficiente al corazón.', icon: Heart },
    { title: 'Dolor en Piernas al Caminar (Claudicación)', desc: 'Calambres en pantorrillas durante el esfuerzo físico que ceden al descansar, por placa periférica.', icon: Activity },
    { title: 'Falta de Aire con el Esfuerzo', desc: 'Disnea durante actividades cotidianas debido al aporte deficiente de oxígeno al corazón.', icon: Clock },
    { title: 'Frialdad y Palidez en Pies o Piernas', desc: 'Disminución notable del flujo circulatorio arterial hacia las extremidades inferiores.', icon: AlertTriangle },
    { title: 'Picos Elevados de Presión Arterial', desc: 'Estenosis renovascular secundaria a la acumulación de placa en las arterias renales.', icon: HeartPulse },
  ];

  const treatments = [
    { name: 'Terapia con Estatinas de Alta Intensidad', desc: 'Atorvastatina o Rosuvastatina en dosis adecuadas. Reduce el c-LDL más del 50%, detiene el crecimiento de placa y estabiliza la capa fibrosa.', duration: 'Medicamento Diario', recovery: 'Protección Continua', image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80' },
    { name: 'Inhibidores de PCSK9 (Evolocumab / Alirocumab)', desc: 'Anticuerpos monoclonales inyectables que logran una reducción adicional del 50-60% del c-LDL en pacientes de alto riesgo.', duration: 'Inyección Quincenal', recovery: 'Regresión de Placa', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80' },
    { name: 'Terapia Antiplaquetaria (Aspirina / Clopidogrel)', desc: 'Inhibe la agregación de plaquetas sobre la superficie de placas vulnerables para prevenir trombosis arteriales agudas.', duration: 'Protocolo Diario', recovery: 'Prevención Activa', image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80' },
    { name: 'Angioplastia con Stent / Endarterectomía', desc: 'Reapertura intervencionista de arterias coronarias, carotídeas o periféricas gravemente ocluidas mediante stents liberadores de fármaco.', duration: 'Procedimiento', recovery: 'Revascularización Eficaz', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Aterosclerosis y <br />
            Placa Arterial
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Guía de Aterosclerosis"
              items={[
                ['#overview', 'Resumen General'],
                ['#types', 'Clasificaciones y Tipos'],
                ['#symptoms', 'Síntomas'],
                ['#diagnosis', 'Pruebas de Diagnóstico'],
                ['#treatment', 'Tratamiento y Procedimientos'],
                ['#living-with', 'Vivir con Aterosclerosis'],
                ['#faqs', 'Preguntas Frecuentes'],
              ]}
              cta={{
                title: "¿Experimenta opresión en el pecho o mala circulación?",
                href: "/es/contact",
                btnText: "Agendar Evaluación",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">

            {/* 1. OVERVIEW (USE IMAGE) */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">¿Qué es la Aterosclerosis?</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  La aterosclerosis es la causa fundamental de la enfermedad arterial coronaria, la estenosis carotídea y la enfermedad arterial periférica. Se origina cuando las partículas de colesterol LDL penetran en la pared arterial, desencadenando una respuesta inflamatoria celular y la formación progresiva de placa.
                </p>
                <p>
                  Con el tiempo, las células musculares lisas forman una cubierta fibrosa sobre el núcleo graso. Si esa cubierta se rompe o fisura, se produce un coágulo repentino que causa isquemia e infarto.
                </p>
              </div>

              {/* Banner Image */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiólogo Analizando Estudio Vascular"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Clasificaciones y Localizaciones Vasculares</h2>
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
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Síntomas de la Aterosclerosis</h2>
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
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnóstico y Detección de Placa</h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                La estratificación avanzada del riesgo vascular permite detectar la placa aterosclerótica antes de que ocurra un evento cardiovascular:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                        alt="Angiotomografía Coronaria (Angio-TC)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Angiotomografía Coronaria (Angio-TC)</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Visualiza la carga de placa blanda y calcificada en las arterias del corazón.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                        alt="Puntuación de Calcio Coronario (Score de Calcio)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Puntuación de Calcio Coronario</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Cuantifica de forma no invasiva la calcificación coronaria subclínica.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                        alt="Perfil Lipídico Avanzado"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Perfil Lipídico Avanzado</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Mide ApoB, Lp(a) y subfracciones de partículas aterogénicas de alta densidad.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                        alt="Ultrasonido Doppler Carotídeo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Ultrasonido Doppler Carotídeo</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Evalúa el grosor íntima-media y detecta placas en la bifurcación carotídea.</p>
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

            {/* 6. LIVING WITH ATHEROSCLEROSIS */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Vivir con Aterosclerosis</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">Modificaciones en la Dieta</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Dieta de estilo mediterráneo con fibra soluble y esteroles vegetales</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Eliminación de grasas trans y limitación de grasas saturadas a &lt;6% de calorías</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Aporte saludable de ácidos grasos omega-3 de pescado y linaza</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Ejercicio y Abandono del Tabaco</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>150 minutos semanales de actividad aeróbica moderada</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Dejar de fumar por completo (elimina la agresión directa al endotelio)</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Mantener presión arterial &lt;130/80 mmHg y HbA1c &lt;7.0%</span></li>
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
