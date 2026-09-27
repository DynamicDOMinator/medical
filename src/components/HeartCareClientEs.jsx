"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Search,
  ChevronDown,
  ChevronLeft,
  AlertTriangle,
  Stethoscope,
  Activity,
  HelpCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  PhoneCall,
  MoreVertical,
  X,
} from "lucide-react";

export default function HeartCareClientEs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState({});
  const [browseOpen, setBrowseOpen] = useState(false);

  const scrollToCategory = (catId) => {
    setActiveCategory("all");
    setSearchQuery("");
    setBrowseOpen(false);
    setTimeout(() => {
      if (catId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(catId);
      if (el) {
        const yOffset = -110;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };

  const toggleItem = (id) => {
    setOpenItems((prev) => (prev[id] ? {} : { [id]: true }));
  };

  const expandAll = () => {
    const all = {};
    faqCategories.forEach((cat) => {
      cat.items.forEach((item) => {
        all[item.id] = true;
      });
    });
    setOpenItems(all);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const faqCategories = [
    {
      id: "warning-signs",
      categoryTitle: "Señales de Alerta y Detección Temprana",
      icon: AlertTriangle,
      color: "amber",
      banner: {
        title: "No ignore un cambio en su bienestar",
        description:
          "Los síntomas nuevos, inexplicables, persistentes o que empeoran merecen atención. Si ha notado un cambio en su energía, respiración, resistencia al ejercicio u otras molestias, consulte con su médico o cardiólogo.",
        buttonText: "Consulte sus síntomas",
        buttonSubtext: "Reservar por Healow",
        link: "/es/contact",
      },
      items: [
        {
          id: "q1",
          question: "¿Cuáles síntomas cardíacos nunca se deben ignorar?",
          answer: (
            <div className="space-y-4">
              <p>
                Los problemas cardiovasculares no siempre inician con un dolor de
                pecho dramático. Las molestias nuevas, inexplicables o continuas
                no deben atribuirse simplemente a la edad, al estrés o a la falta
                de condición física.
              </p>
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5">
                <h4 className="font-bold text-amber-950 text-sm mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
                  Los síntomas que requieren atención médica incluyen:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-amber-900 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Falta de aire nueva o que empeora</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Menor capacidad o tolerancia al ejercicio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Fatiga y cansancio inexplicable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Hinchazón en piernas, tobillos o pies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Mareos o sensación de aturdimiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Palpitaciones o latidos irregulares</span>
                  </li>
                  <li className="flex items-start gap-2 col-span-1 sm:col-span-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>
                      Molestia o presión en pecho, mandíbula, cuello, hombro, espalda o brazo
                    </span>
                  </li>
                </ul>
              </div>
              <p className="font-semibold text-slate-700">
                Lo crucial es no pasar por alto un cambio notorio respecto a su
                estado habitual. Una evaluación temprana permite detectar
                enfermedades cardiovasculares o factores de riesgo antes de que
                surjan complicaciones graves.
              </p>
            </div>
          ),
        },
        {
          id: "q2",
          question:
            "¿Cuáles son las señales de enfermedad cardiovascular que más comúnmente se pasan por alto?",
          answer: (
            <div className="space-y-5">
              <p>
                Algunos problemas cardiovasculares se desarrollan paulatinamente y
                suelen confundirse con la edad, estrés o falta de acondicionamiento.
                Entre las señales omitidas con frecuencia se encuentran:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4">
                  <h5 className="font-extrabold text-xs text-blue-900 uppercase tracking-wider mb-2.5 pb-1 border-b border-blue-200/60">
                    Síntomas cardíacos
                  </h5>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>• Cansancio inexplicable o falta de energía</li>
                    <li>• Menor tolerancia a la actividad física</li>
                    <li>• Falta de aire con el esfuerzo</li>
                    <li>• Palpitaciones o ritmo cardíaco acelerado</li>
                    <li>• Presión o molestia en pecho, cuello, hombro o brazo</li>
                    <li>• Mareos o sensación de desvanecimiento</li>
                  </ul>
                </div>

                <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4">
                  <h5 className="font-extrabold text-xs text-blue-900 uppercase tracking-wider mb-2.5 pb-1 border-b border-blue-200/60">
                    Síntomas circulatorios
                  </h5>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>• Dolor, pesadez o debilidad en piernas al caminar</li>
                    <li>• Hinchazón en piernas, tobillos o pies</li>
                    <li>• Cambios en el color o apariencia de la piel</li>
                    <li>• Entumecimiento, hormigueo o frialdad en los pies</li>
                    <li>• Pérdida muscular inexplicable en piernas</li>
                  </ul>
                </div>

                <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4">
                  <h5 className="font-extrabold text-xs text-blue-900 uppercase tracking-wider mb-2.5 pb-1 border-b border-blue-200/60">
                    Otras manifestaciones
                  </h5>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>• Dolores de cabeza nuevos o inexplicables</li>
                    <li>• Alteraciones temporales en la visión</li>
                    <li>• Dificultad progresiva en actividades cotidianas</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-100 p-3 rounded-xl">
                Nota: No todos estos síntomas indican necesariamente una afección
                cardiovascular grave. Sin embargo, cualquier síntoma nuevo o que
                progresa debe ser comentado con su médico.
              </p>
            </div>
          ),
        },
        {
          id: "q3",
          question: "¿Puede la enfermedad cardíaca avanzar sin síntomas evidentes?",
          answer: (
            <div className="space-y-4">
              <p>
                <strong className="text-blue-900 font-bold text-base">
                  Sí.
                </strong>{" "}
                Uno de los desafíos principales en cardiología es que muchos
                pacientes retrasan su revisión hasta que la afección ya ha
                progresado.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
                <h5 className="font-bold text-slate-800 text-sm mb-2.5">
                  Esto ocurre habitualmente cuando las personas:
                </h5>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Normalizan síntomas iniciales como fatiga, falta de aire, menor tolerancia al ejercicio o hinchazón.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Atribuyen las molestias a la edad, al estrés o a la falta de ejercicio.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Postergan la consulta a pesar de tener factores de riesgo como presión alta, diabetes, colesterol alto o historial familiar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Suspenden medicamentos por efectos secundarios sin consultar al especialista.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Se adaptan de forma inconsciente a una menor capacidad física mientras la enfermedad continúa avanzando.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Buscan atención únicamente tras un evento grave como un infarto o insuficiencia cardíaca aguda.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
                <p className="font-bold text-blue-950 text-sm">
                  El mensaje clave es contundente: no espere a que los síntomas se vuelvan severos.
                </p>
                <p className="text-sm text-blue-800 mt-1">
                  Una evaluación a tiempo permite intervenir antes, prevenir daños y tener muchas más opciones de tratamiento. Detectar a tiempo es la mejor protección para su corazón.
                </p>
              </div>
            </div>
          ),
        },
        {
          id: "q4",
          question: "¿Por qué muchas personas tardan en acudir al cardiólogo?",
          answer: (
            <div className="space-y-4">
              <p>
                Con frecuencia, las personas retrasan la consulta no por descuido,
                sino porque las afecciones cardíacas pueden ser sutiles o intermitentes.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
                <h5 className="font-bold text-slate-800 text-sm mb-3">
                  Entre los motivos frecuentes están:
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Sentirse “bien” a pesar de padecer hipertensión o colesterol alto</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Síntomas leves atribuidos al cansancio o a la edad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Molestias que aparecen y desaparecen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Temor a un diagnóstico delicado o a cirugías</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Malas experiencias médicas previas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Pensar que “no hay nada que se pueda hacer”</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Adaptación gradual a la falta de energía</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Falta de tiempo y horarios apretados</span>
                  </li>
                </ul>
              </div>
              <p className="font-bold text-blue-900 text-sm bg-blue-50 p-3 rounded-xl border border-blue-100">
                La evaluación médica temprana tiene un valor enorme, incluso con síntomas leves, ya que brinda tranquilidad, detecta riesgos a tiempo y previene eventos mayores.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      id: "checkups-diagnosis",
      categoryTitle: "Revisiones y Diagnóstico",
      icon: Stethoscope,
      color: "blue",
      banner: {
        title: "Conozca con certeza su estado cardiovascular",
        description:
          "Una evaluación integral permite aclarar resultados dudosos, medir su riesgo y determinar si requiere seguimiento. Evaluar a tiempo aporta tranquilidad y previene complicaciones graves.",
        buttonText: "Agendar evaluación cardiovascular",
        buttonSubtext: "Reservar por Healow",
        link: "/es/contact",
      },
      items: [
        {
          id: "q5",
          question: "¿Quiénes deben realizarse una revisión cardiovascular?",
          answer: (
            <div className="space-y-4">
              <p>
                Un chequeo del corazón no es únicamente para quienes ya tienen una
                enfermedad diagnosticada; muchas afecciones se desarrollan sin dar
                señales evidentes al inicio.
              </p>
              <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 sm:p-5">
                <h5 className="font-bold text-blue-950 text-sm mb-3">
                  Se recomienda una valoración si usted presenta:
                </h5>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>Factores como presión alta, colesterol alto, diabetes, sobrepeso o tabaquismo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>Antecedentes familiares de infartos prematuros, derrames cerebrales o muerte súbita.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>Enfermedad arterial o vascular conocida (coronaria, carotídea o periférica).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>Síntomas como opresión en el pecho, falta de aire, fatiga inusual, palpitaciones o mareos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>Disminución en la tolerancia al ejercicio o a sus actividades de rutina.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>Hallazgos previos como soplos, electrocardiogramas anormales o válvulas con escape.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-red-900 font-semibold">
                  Aviso de Urgencia: Si presenta dolor o presión intensa en el pecho, dificultad respiratoria severa, pérdida de conciencia o debilidad repentina en un lado del cuerpo, acuda a emergencias o llame al 911 de inmediato.
                </p>
              </div>
            </div>
          ),
        },
        {
          id: "q6",
          question: "¿A qué edad se debe considerar una revisión cardiológica?",
          answer: (
            <div className="space-y-4">
              <p>
                Atendemos a pacientes adultos a partir de los 18 años, basándonos
                en el nivel de riesgo individual más que únicamente en la edad cronológica.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
                <h5 className="font-bold text-slate-800 text-sm mb-3">
                  Atendemos habitualmente a:
                </h5>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>Adultos jóvenes con historial familiar fuerte de afecciones cardíacas tempranas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>Adultos de mediana edad enfocados en prevención activa y control de lípidos y presión.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>Adultos mayores con sospecha o diagnóstico de problemas valvulares, arritmias o insuficiencia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>Cualquier persona que desee una evaluación completa del estado de su corazón.</span>
                  </li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          id: "q7",
          question: "¿Cuánto tiempo toma diagnosticar una condición cardíaca?",
          answer: (
            <div className="space-y-4">
              <p>
                No existe un tiempo único, pues cada caso es particular. Muchos
                diagnósticos se obtienen desde la primera consulta o con las
                pruebas iniciales, mientras que otros requieren monitoreo o
                estudios de imagen adicionales.
              </p>
              <div className="bg-sky-50 border-l-4 border-sky-600 p-4 rounded-r-xl text-sky-950 font-bold text-sm">
                Nuestro compromiso es lograr el diagnóstico más certero con la mayor eficiencia posible, evitando retrasos innecesarios y pruebas redundantes.
              </div>
            </div>
          ),
        },
        {
          id: "q8",
          question: "¿Qué ocurre si los resultados de mis estudios salen limítrofes?",
          answer: (
            <div className="space-y-4">
              <p>
                Un resultado limítrofe (borderline) no significa necesariamente
                enfermedad grave ni que deba someterse a cirugía. Se interpreta
                en el contexto completo de sus síntomas, historial y estilo de vida.
              </p>
              <div className="p-4 bg-slate-900 text-white rounded-2xl">
                <p className="font-bold text-sm text-sky-300">
                  Principio Fundamental: Ningún estudio se analiza de forma aislada.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Un hallazgo limítrofe es una valiosa oportunidad para afinar la prevención, ajustar hábitos y dar seguimiento cuidadoso sin alarmas innecesarias.
                </p>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: "treatment-intervention",
      categoryTitle: "Tratamiento e Intervención",
      icon: Activity,
      color: "emerald",
      banner: {
        title: "Conozca todas sus alternativas de tratamiento",
        description:
          "Cada persona y cada corazón son distintos. Si le han recomendado un procedimiento o su tratamiento actual no ha dado los resultados esperados, conversar con su cardiólogo le ayudará a tomar la mejor decisión con seguridad.",
        buttonText: "Analice sus opciones de tratamiento",
        buttonSubtext: "Reservar por Healow",
        link: "/es/contact",
      },
      items: [
        {
          id: "q9",
          question: "¿Cómo deciden cuándo es necesario un tratamiento o procedimiento?",
          answer: (
            <div className="space-y-4">
              <p>
                Recomendamos una intervención únicamente cuando los beneficios
                esperados superan con claridad los riesgos, no simplemente por un
                resultado anormal en una prueba.
              </p>
              <p>
                En muchas ocasiones, los medicamentos adecuados, ajustes en hábitos
                y el monitoreo riguroso son la mejor primera línea. Siempre
                priorizamos las alternativas mínimamente invasivas cuando están indicadas.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-emerald-950 font-bold text-sm">
                Nuestra meta es evitar tanto el sobretratamiento como el retraso terapéutico: el procedimiento correcto, para el paciente indicado, en el momento preciso.
              </div>
            </div>
          ),
        },
        {
          id: "q10",
          question: "¿Cuándo requiere una afección cardíaca una intervención por catéter o quirúrgica?",
          answer: (
            <div className="space-y-4">
              <p>
                La gran mayoría de las afecciones cardiovasculares se manejan
                exitosamente sin necesidad de cirugía.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
                <p className="font-bold text-slate-800 text-sm">
                  Sin embargo, una intervención se vuelve necesaria cuando la enfermedad es avanzada, progresa con rapidez o existe riesgo de complicaciones como:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Síntomas que empeoran a pesar de la medicación</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Obstrucciones arteriales coronarias críticas</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Estenosis o insuficiencia valvular severa</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Insuficiencia cardíaca no controlada</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Arritmias ventriculares de riesgo</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Aneurismas aórticos de alto riesgo</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: "concerns-misconceptions",
      categoryTitle: "Dudas y Mitos Comunes",
      icon: ShieldCheck,
      color: "purple",
      banner: {
        title: "Tome un rol activo en la salud de su corazón",
        description:
          "La mayoría de los factores de riesgo cardiovascular se pueden controlar con atención médica experta y cambios sostenibles en el estilo de vida. Conocer su riesgo individual es el primer paso.",
        buttonText: "Aprenda a reducir su riesgo cardiovascular",
        buttonSubtext: "Reservar por Healow",
        link: "/es/contact",
      },
      items: [
        {
          id: "q11",
          question:
            "¿Cuáles son los mitos más frecuentes sobre la enfermedad cardíaca y sus tratamientos?",
          answer: (
            <div className="space-y-4">
              <p>
                Muchos pacientes retrasan su atención debido a ideas erróneas muy extendidas, tales como:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-red-50/70 border border-red-100 p-3.5 rounded-xl text-xs sm:text-sm text-red-950 font-medium">
                  • Creer que si se sienten bien no necesitan revisión ni medicamentos
                </div>
                <div className="bg-red-50/70 border border-red-100 p-3.5 rounded-xl text-xs sm:text-sm text-red-950 font-medium">
                  • Pensar que tomar medicamentos significa una enfermedad terminal
                </div>
                <div className="bg-red-50/70 border border-red-100 p-3.5 rounded-xl text-xs sm:text-sm text-red-950 font-medium">
                  • Creer que toda arteria con placa requiere forzosamente un stent
                </div>
                <div className="bg-red-50/70 border border-red-100 p-3.5 rounded-xl text-xs sm:text-sm text-red-950 font-medium">
                  • Confiar exclusivamente en remedios caseros cuando se requiere fármacos guiados
                </div>
              </div>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 text-sm font-bold">
                El error más riesgoso es esperar a que los síntomas se vuelvan insoportables para consultar.
              </div>
              <p className="text-slate-700">
                La cardiología moderna ofrece soluciones preventivas, personalizadas y seguras para cuidar su corazón y mantener su calidad de vida.
              </p>
            </div>
          ),
        },
        {
          id: "q12",
          question:
            "¿Cuáles cambios en el estilo de vida generan el mayor beneficio en el corazón?",
          answer: (
            <div className="space-y-5">
              <p>
                Los cambios más efectivos son hábitos consistentes y sostenibles a
                largo plazo, más que medidas extremas de corta duración.
              </p>
              <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 sm:p-5">
                <h5 className="font-extrabold text-xs text-indigo-900 uppercase tracking-wider mb-3">
                  Prioridades Clave:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-800">
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Dejar el tabaco y cigarrillos electrónicos</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Ejercicio aeróbico regular (caminar 30 min diarios)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Alimentación cardiosaludable (baja en sodio y azúcares)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Mantener un peso adecuado</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Controlar presión, colesterol y glucosa en sangre</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Dormir bien (7 a 8 horas de sueño reparador)</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  const filteredCategories = faqCategories
    .map((cat) => {
      if (activeCategory !== "all" && cat.id !== activeCategory) {
        return null;
      }
      const matchingItems = cat.items.filter((item) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        const questionText = item.question.toLowerCase();
        return questionText.includes(q);
      });
      if (matchingItems.length === 0) return null;
      return {
        ...cat,
        items: matchingItems,
      };
    })
    .filter(Boolean);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="Preguntas frecuentes sobre salud cardíaca"
            fill
            className="object-cover object-center opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Su Salud Cardíaca: Preguntas que los Pacientes Hacen Frecuentemente
          </h1>
          <p className="mt-4 sm:mt-6 text-blue-100/90 text-base sm:text-xl max-w-3xl mx-auto font-normal leading-relaxed">
            Comprender cuándo consultar al cardiólogo, a qué síntomas prestar atención y cuándo puede ser necesario un tratamiento le ayuda a tomar decisiones informadas sobre su salud.
          </p>
        </div>
      </div>

      {/* Side-Docked Button */}
      <div className="fixed top-28 sm:top-32 right-0 z-40">
        <button
          onClick={() => setBrowseOpen(true)}
          className="flex items-center space-x-2 pl-4 pr-3 py-3 bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs sm:text-sm rounded-l-2xl border-l border-t border-b border-blue-500/40 transition-all hover:-translate-x-1 active:translate-x-0 cursor-pointer"
          aria-label="Explorar esta página"
        >
          <span className="tracking-tight">Explorar esta página</span>
          <MoreVertical className="h-4 w-4 text-white shrink-0" />
        </button>
      </div>

      {/* Browse Drawer */}
      {browseOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setBrowseOpen(false)}
          />

          <div className="absolute inset-x-3 top-16 sm:top-24 max-w-xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-950/20 overflow-hidden z-10 transition-all transform animate-slide-down">
            <div className="bg-blue-700 text-white px-5 py-4 flex items-center justify-between border-b border-blue-800">
              <button
                onClick={() => setBrowseOpen(false)}
                className="flex items-center space-x-2 font-bold text-sm sm:text-base text-white hover:text-sky-100 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
                <span>Explorar esta página</span>
              </button>
              <button
                onClick={() => setBrowseOpen(false)}
                className="p-1.5 rounded-full hover:bg-blue-800 text-blue-100 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="divide-y divide-slate-100 max-h-[70vh] overflow-y-auto bg-white">
              <button
                onClick={() => scrollToCategory("top")}
                className="w-full text-left px-6 py-4 font-bold text-[#001c4c] text-sm sm:text-base hover:bg-blue-50/80 transition-colors flex items-center justify-between border-b border-slate-100"
              >
                <span>Resumen General</span>
                <span className="text-xs font-semibold text-blue-600">Inicio ↑</span>
              </button>

              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className="w-full text-left px-6 py-4 font-bold text-[#001c4c] text-sm sm:text-base hover:bg-blue-50/80 transition-colors flex items-center justify-between group border-b border-slate-100"
                >
                  <span>{cat.categoryTitle}</span>
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-blue-600">
                    {cat.items.length} Preguntas →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        <div className="hidden md:flex flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Todos los Temas
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.categoryTitle}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0 self-end md:self-auto text-xs font-semibold text-slate-500">
            <button
              onClick={expandAll}
              className="hover:text-blue-600 underline transition-colors"
            >
              Expandir Todo
            </button>
            <span>•</span>
            <button
              onClick={collapseAll}
              className="hover:text-blue-600 underline transition-colors"
            >
              Colapsar Todo
            </button>
          </div>
        </div>

        {/* Categories */}
        {filteredCategories.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-4">
            <HelpCircle className="h-12 w-12 text-slate-300 mx-auto" />
            <h3 className="text-xl font-bold text-slate-800">
              No se encontraron preguntas coincidentes
            </h3>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-md hover:bg-blue-700 transition-colors"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          filteredCategories.map((category) => {
            const CatIcon = category.icon;
            return (
              <div key={category.id} id={category.id} className="space-y-6 scroll-mt-28">
                <div className="flex items-center space-x-3 pt-4">
                  <div className="p-2.5 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                    <CatIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {category.categoryTitle}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.items.map((item) => {
                    const isOpen = !!openItems[item.id];
                    return (
                      <div
                        key={item.id}
                        className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                          isOpen
                            ? "border-blue-300 shadow-lg shadow-blue-900/5 ring-1 ring-blue-200"
                            : "border-slate-200 hover:border-blue-200 hover:shadow-md"
                        }`}
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center h-7 w-7 rounded-lg bg-blue-50 text-blue-700 font-extrabold text-xs shrink-0">
                              {item.id.toUpperCase()}
                            </span>
                            <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                              {item.question}
                            </span>
                          </div>
                          <div
                            className={`p-1.5 rounded-full bg-slate-100 text-slate-500 transition-transform duration-200 shrink-0 ${
                              isOpen ? "rotate-180 bg-blue-100 text-blue-700" : ""
                            }`}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 sm:px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base border-t border-slate-100 leading-relaxed">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {category.banner && (
                  <div className="mt-8 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-blue-800">
                    <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div className="space-y-2 max-w-2xl">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {category.banner.title}
                        </h3>
                        <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                          {category.banner.description}
                        </p>
                      </div>

                      <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-3">
                        <Link
                          href={category.banner.link}
                          className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
                        >
                          <span>{category.banner.buttonText}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                          href="https://healow.com/apps/provider/mohamed-almahmoud-2103459"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3.5 rounded-2xl font-bold text-sm backdrop-blur-sm transition-all hover:scale-[1.02]"
                        >
                          <Calendar className="h-4 w-4 text-sky-300" />
                          <span>Reservar por Healow</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
