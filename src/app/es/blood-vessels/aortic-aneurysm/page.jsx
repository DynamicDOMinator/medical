'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  AlertTriangle,
  CheckCircle,
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

export default function SpanishAorticAneurysmPage() {
  const faqs = [
    {
      question: '¿Qué tamaño debe tener un aneurisma para recomendar cirugía o reparación?',
      answer:
        'En los Aneurismas de la Aorta Abdominal (AAA), la reparación se recomienda habitualmente cuando el diámetro alcanza 5.5 cm en hombres o 5.0 cm en mujeres, o si se expande más rápido de 0.5 cm en 6 meses.',
    },
    {
      question: '¿Qué se siente cuando un aneurisma de aorta se rompe?',
      answer:
        'La rotura de un aneurisma aórtico provoca un dolor repentino, desgarrador e insoportable en el abdomen, el pecho o la espalda, acompañado rápidamente de mareo extremo y signos de choque hipovolémico. Es una emergencia quirúrgica inmediata.',
    },
    {
      question: '¿Qué es la Reparación Endovascular de Aneurisma (EVAR / TEVAR)?',
      answer:
        'EVAR es un procedimiento mínimamente invasivo donde se introduce una endoprótesis vascular (stent graft) a través de pequeñas punciones en la arteria femoral de la ingle para reforzar la pared aórtica debilitada desde el interior, evitando una cirugía abierta invasiva.',
    },
  ];

  const typesList = [
    {
      name: 'Aneurisma de la Aorta Abdominal (AAA)',
      tag: 'Más Común',
      desc: 'El ensanchamiento ocurre en el segmento abdominal de la aorta, debajo de las arterias renales. Muy prevalente en hombres mayores con antecedentes de tabaquismo.',
      color: 'text-blue-700',
      bg: 'bg-blue-50',
    },
    {
      name: 'Aneurisma de la Aorta Torácica (TAA)',
      tag: 'Aorta en el Pecho',
      desc: 'Dilatación en la aorta ascendente, cayado aórtico o aorta torácica descendente. Se asocia al síndrome de Marfan y válvula aórtica bicúspide.',
      color: 'text-purple-700',
      bg: 'bg-purple-50',
    },
    {
      name: 'Aneurisma Toracoabdominal (TAAA)',
      tag: 'Anatomía Compleja',
      desc: 'Aneurisma extenso que compromete tanto segmentos torácicos como abdominales, requiriendo endoprótesis fenestradas o ramificadas.',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
    },
    {
      name: 'Disección Aórtica Aguda',
      tag: 'Urgencia Médica',
      desc: 'Desgarro en la capa interna de la pared aórtica (íntima) que crea una falsa luz. Provoca un dolor torácico o de espalda lacerante y desgarrador súbito.',
      color: 'text-red-700',
      bg: 'bg-red-50',
    },
  ];

  const symptoms = [
    { title: 'Masa Abdominal Pulsátil', desc: 'Sensación de un latido pronunciado o palpitante en la zona central del abdomen cerca del ombligo.', icon: HeartPulse },
    { title: 'Dolor Profundo en Espalda o Costado', desc: 'Malestar sordo y persistente en la espalda, abdomen o ingle conforme el aneurisma se expande.', icon: Activity },
    { title: 'Dolor Desgarrador Repentino', desc: 'Signo característico de una disección aórtica en curso o rotura inminente que requiere llamar al 911.', icon: AlertTriangle },
    { title: 'Falta de Aire y Ronquera', desc: 'El aneurisma torácico comprime la tráquea o el nervio laríngeo recurrente alterando la voz.', icon: Clock },
    { title: 'Mareos y Aturdimiento', desc: 'Caídas transitorias de la presión arterial durante expansiones agudas o fugas de sangre.', icon: Zap },
    { title: 'Dificultad para Deglutir (Disfagia)', desc: 'Un aneurisma grande en el cayado aórtico ejerce compresión mecánica contra el esófago.', icon: Info },
  ];

  const treatments = [
    { name: 'Reparación Endovascular de Aneurisma (EVAR / TEVAR)', desc: 'Endoprótesis colocada mediante cateterismo por la ingle para sellar y reforzar el saco aneurismático sin cirugía abierta.', duration: '1–2 Horas', recovery: '1–2 Días', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80' },
    { name: 'Cirugía Aórtica Abierta', desc: 'Reparación quirúrgica directa donde el segmento aórtico debilitado se reemplaza por un injerto sintético de Dacron duradero.', duration: 'Quirúrgico', recovery: 'Rehabilitación Hospitalaria', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80' },
    { name: 'Vigilancia con Ultrasonido o TAC', desc: 'Seguimiento periódico con ecografía Doppler o tomografía cada 6 a 12 meses para aneurismas pequeños (<5.0 cm).', duration: 'Estudio Periódico', recovery: 'No Invasivo', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80' },
    { name: 'Optimización Estricta de la Presión Arterial', desc: 'Control tensional riguroso (<120/80 mmHg) con betabloqueadores y ARA-II para reducir el estrés mecánico sobre la pared de la aorta.', duration: 'Protocolo Diario', recovery: 'Protección Continua', image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Aneurisma Aórtico y <br />
            Salud de la Pared Aórtica
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Guía de Aneurisma"
              items={[
                ['#overview', 'Resumen General'],
                ['#types', 'Clasificaciones y Tipos'],
                ['#symptoms', 'Síntomas'],
                ['#diagnosis', 'Pruebas Diagnósticas'],
                ['#treatment', 'Tratamiento y Procedimientos'],
                ['#living-with', 'Vivir con Afección Aórtica'],
                ['#faqs', 'Preguntas Frecuentes'],
              ]}
              cta={{
                title: "¿Dolor Profundo en Pecho, Espalda o Abdomen?",
                href: "/es/contact",
                btnText: "Agendar Evaluación",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">
            {/* 1. OVERVIEW */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">¿Qué es un Aneurisma Aórtico?</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Un aneurisma aórtico es una dilatación localizada y permanente de la aorta que supera en al menos un 50% el diámetro normal esperado del vaso.
                </p>
                <p>
                  Debido a que la presión de la sangre ejerce tensión constante sobre la pared arterial debilitada, los aneurismas no tratados tienden a crecer progresivamente, poniendo al paciente en riesgo de una rotura o disección potencialmente fatal.
                </p>
              </div>

              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80"
                  alt="Quirófano Quirúrgico Endovascular EVAR"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Clasificaciones y Tipos de Aneurismas</h2>
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

            {/* 3. SYMPTOMS */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Síntomas de los Aneurismas Aórticos</h2>
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

            {/* 4. DIAGNOSIS */}
            <section id="diagnosis" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnóstico y Vigilancia</h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Los estudios de imagen no invasivos miden con exactitud el diámetro aórtico y vigilan la velocidad de expansión:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                        alt="Ultrasonido Doppler Abdominal"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Ultrasonido Doppler Abdominal</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Tamizaje no invasivo rápido y seguro para el AAA.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                        alt="Angiotomografía Computarizada (CTA)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Angiotomografía Computarizada (CTA)</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Reconstrucción arterial en 3D para planificar la endoprótesis EVAR.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                        alt="Angiorresonancia Magnética (MRA)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Angiorresonancia Magnética (MRA)</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Mapeo longitudinal de la aorta libre de radiación.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
                        alt="Ecocardiografía (TTE/TEE)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Ecocardiografía (TTE/TEE)</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Evalúa la raíz aórtica ascendente y el estado de la válvula aórtica.</p>
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

            {/* 6. LIVING WITH AORTIC ANEURYSM */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Vivir con un Aneurisma Aórtico</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Control de Presión y Esfuerzos</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Mantener la presión estrictamente en cifras menores a 120/80 mmHg</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Evitar levantar cargas pesadas o realizar maniobras de pujo intensas</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Dejar el tabaco por completo (fumar duplica la velocidad de crecimiento)</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">Calendario de Vigilancia</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Ultrasonido cada 12 meses para aneurismas de 3.0 a 4.0 cm</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Ultrasonido o TAC cada 6 meses para diámetros de 4.0 a 5.4 cm</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Buscar atención de urgencia inmediata ante dolor repentino en espalda o abdomen</span></li>
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
