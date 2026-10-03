"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Activity,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  Phone,
  PhoneCall,
  Award,
  CheckCircle2,
  Zap,
  Clock,
  Sparkles,
  UserCheck,
  Microscope,
  GraduationCap,
  Calendar,
  Building2,
  AlertCircle,
  BookOpen,
  Pill,
  ChevronDown,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

const doctorSpecialties = [
  {
    id: "heart",
    label: "Condiciones del corazón",
    icon: Heart,
    color: "from-blue-600 to-indigo-600",
    title: "Atención Cardíaca Avanzada e Intervenciones Estructurales",
    description:
      "Diagnóstico médico especializado, consulta intervencionista y manejo integral para enfermedad arterial coronaria, afecciones valvulares (TAVR, MitraClip) y trastornos eléctricos del corazón.",
    symptoms: [
      "Dolor de Pecho",
      "Falta de Aire",
      "Palpitaciones",
      "Mareos y Desmayos",
      "Fatiga y Cansancio",
    ],
    symptomText:
      "pueden deberse a diversas afecciones cardiovasculares. Nuestra función es identificar la causa exacta mediante una evaluación clínica minuciosa y estudios diagnósticos dirigidos, recomendando el tratamiento más adecuado para su salud.",
    conditions: [
      {
        name: "Enfermedad Arterial Coronaria (CAD)",
        link: "/es/heart/cad",
        desc: "Intervenciones coronarias complejas y manejo de placa aterosclerótica.",
        image: "/heart-2.png",
      },
      {
        name: "Arritmias y Trastornos del Ritmo",
        link: "/es/heart/arrhythmias",
        desc: "Fibrilación auricular, alteraciones eléctricas y monitoreo Holter.",
        image: "/content.png",
      },
      {
        name: "Enfermedad Valvular y Estructural",
        link: "/es/heart/valvular-heart-disease",
        desc: "Estenosis aórtica (TAVR), MitraClip y cierre de defectos CIA / FOP.",
        image: "/content7.png",
      },
      {
        name: "Insuficiencia Cardíaca Congestiva (CHF)",
        link: "/es/heart/chf",
        desc: "Cuidado avanzado de la función de bombeo cardíaco y soporte circulatorio.",
        image: "/content2.png",
      },
    ],
    hubLink: "/es/heart",
    hubText: "Ver Todas las Guías del Corazón →",
  },
  {
    id: "vascular",
    label: "Condiciones vasculares",
    icon: Activity,
    color: "from-sky-600 to-blue-700",
    title: "Centro Vascular Periférico y Endovascular",
    description:
      "Diagnóstico intervencionista especializado en enfermedad arterial periférica (PAD), trombosis venosa profunda (DVT), embolia pulmonar e insuficiencia venosa.",
    symptoms: [
      "Dolor de Piernas",
      "Hinchazón en las Piernas",
      "Pesadez y Cansancio en Piernas",
      "Venas Varicosas",
      "Pies Fríos o Descoloridos",
    ],
    symptomText:
      "pueden alertar sobre obstrucciones arteriales o reflujo venoso. Una evaluación vascular oportuna con ultrasonido Doppler previene complicaciones mayores.",
    conditions: [
      {
        name: "Insuficiencia Venosa y Várices",
        link: "/es/blood-vessels/venous-disease",
        desc: "Manejo de válvulas venosas en miembros inferiores y ecografía dúplex.",
        image: "/images/venous-types-visual-white.jpg",
      },
      {
        name: "Enfermedad Arterial Periférica (PAD)",
        link: "/es/blood-vessels/peripheral-artery-disease",
        desc: "Intervención endovascular para desbloquear la circulación en las piernas.",
        image: "/images/pad-overview-illustration.png",
      },
      {
        name: "Atención Tromboembólica y TVP",
        link: "/es/blood-vessels/thromboembolic-disease",
        desc: "Procedimientos por catéter mínimamente invasivos para TVP y embolia.",
        image: "/content5.png",
      },
    ],
    hubLink: "/es/blood-vessels",
    hubText: "Ver Todas las Guías Vasculares →",
  },
  {
    id: "hypertension",
    label: "Hipertensión",
    icon: ShieldCheck,
    color: "from-indigo-600 to-blue-600",
    title: "Control Integral de Hipertensión y Presión Arterial",
    description:
      "Evaluación experta, monitoreo continuo y tratamientos personalizados para hipertensión esencial, secundaria y resistente, protegiendo sus órganos vitales y arterias.",
    symptoms: [
      "Presión Arterial Alta",
      "Dolores de Cabeza",
      "Mareos Frecuentes",
    ],
    symptomText:
      "son señales comunes de presión arterial alta no controlada. Un diagnóstico preciso y protocolos médicos guiados protegen su salud cardiovascular a largo plazo.",
    conditions: [
      {
        name: "Hipertensión Arterial Esencial",
        link: "/es/blood-vessels/hypertension",
        desc: "Cambios en el estilo de vida y tratamientos médicos para alcanzar metas de presión óptimas.",
        image: "/content8.jpg",
      },
      {
        name: "Detección de Hipertensión Secundaria",
        link: "/es/blood-vessels/hypertension",
        desc: "Estudios especializados para causas renovasculares, endocrinas y metabólicas de hipertensión.",
        image: "/content6.png",
      },
    ],
    hubLink: "/es/blood-vessels/hypertension",
    hubText: "Leer Guía Completa de Hipertensión →",
  },
];

const diagnosticTests = [
  {
    name: "Electrocardiograma (ECG)",
    desc: "Ritmo cardíaco y actividad eléctrica del corazón.",
    image: "/ECG.png",
  },
  {
    name: "Ecocardiograma",
    desc: "Estructura, función y flujo sanguíneo del corazón.",
    image: "/Echocardiography.png",
  },
  {
    name: "Prueba de Esfuerzo",
    desc: "Evaluación de la respuesta cardíaca ante la actividad física.",
    image: "/Stress Testing.png",
  },
  {
    name: "Monitoreo Holter",
    desc: "Monitoreo prolongado para detectar arritmias intermitentes.",
    image: "/Holter Monitoring.png",
  },
  {
    name: "Angiografía Coronaria por TC",
    desc: "Imágenes de alta resolución para visualizar las arterias coronarias.",
    image: "/CT Coronary Angiography.png",
  },
];

const treatmentProgressionStages = [
  {
    step: "01",
    icon: ShieldCheck,
    iconColor: "text-emerald-400",
    title: "Prevención",
    color: "bg-emerald-500/10 border-emerald-200 text-emerald-950",
    badgeColor: "bg-emerald-600 text-white",
    desc: "Reduzca factores de riesgo y proteja su corazón.",
  },
  {
    step: "02",
    icon: Pill,
    iconColor: "text-sky-400",
    title: "Terapia Médica",
    color: "bg-blue-500/10 border-blue-200 text-blue-950",
    badgeColor: "bg-blue-600 text-white",
    desc: "Controle su condición con medicamentos guiados por expertos.",
  },
  {
    step: "03",
    icon: Stethoscope,
    iconColor: "text-indigo-400",
    title: "Procedimientos Mínimamente Invasivos",
    color: "bg-indigo-500/10 border-indigo-200 text-indigo-950",
    badgeColor: "bg-indigo-600 text-white",
    desc: "Cuando sean necesarios para tratar la causa de origen.",
  },
  {
    step: "04",
    icon: Heart,
    iconColor: "text-rose-400",
    title: "Intervenciones Cardíacas Avanzadas",
    color: "bg-rose-500/10 border-rose-200 text-rose-950",
    badgeColor: "bg-rose-600 text-white",
    desc: "Para condiciones complejas que requieren cuidados especializados.",
  },
];

const boardCertificationsList = [
  "Medicina Interna",
  "Enfermedades Cardiovasculares",
  "Cardiología Intervencionista",
  "Cardiología Nuclear",
  "Ecocardiografía",
];

const googleReviewsList = [
  {
    quote:
      "¡El Dr. Almahmoud es genial! Considero que es, por mucho, el mejor doctor que he consultado. Es muy accesible y sumamente detallado al hablar sobre mis síntomas. Me brinda una atención excelente para mi bienestar. El personal también es increíble, atento y compasivo.",
    author: "Tina Riley",
    badge: "Local Guide · 15 reseñas",
    stars: 5,
    tag: "explicaciones claras",
  },
  {
    quote:
      "¡Totalmente encantada con el Dr. Almahmoud! Escucha todo lo que dices, resuelve cada una de tus inquietudes, no te presiona para hacer procedimientos y te hace seguimiento cuando tienes uno. Estuve hospitalizada y me llamó personalmente para saber cómo seguía.",
    author: "Jamie Barnett",
    badge: "5 reseñas",
    stars: 5,
    tag: "atención al paciente",
  },
  {
    quote:
      "El Dr. Almahmoud tiene una forma de atender única: desde la primera cita sientes que estás con un médico dispuesto a adaptar sus conocimientos a las necesidades del paciente, en lugar de exigirte adaptarte a él.",
    author: "Lee Turfe",
    badge: "2 reseñas",
    stars: 5,
    tag: "trato humano",
  },
  {
    quote:
      "El Dr. Almahmoud ha sido un gran apoyo en momentos difíciles. Tiene una combinación extraordinaria de experiencia y compasión genuina. Se toma el tiempo para escuchar, nunca te hace sentir con prisa y crea un ambiente seguro y de confianza.",
    author: "Jasmin V",
    badge: "Paciente Verificada",
    stars: 5,
    tag: "cuidado genuino",
  },
  {
    quote:
      "Excelente personal, muy amables y sin largas esperas. El Dr. Almahmoud es muy atento, realmente escucha y contesta todas las preguntas. Calma tus temores y solicita todos los estudios necesarios con gran minuciosidad.",
    author: "CA R",
    badge: "4 reseñas",
    stars: 5,
    tag: "minuciosidad",
  },
  {
    quote:
      "El Dr. Almahmoud siempre ha mostrado una preocupación sincera por mi salud. Agradezco mucho su calidez y su excelente equipo. Dios lo bendiga por todo lo que hace.",
    author: "Julia Montgomery",
    badge: "6 reseñas",
    stars: 5,
    tag: "respuestas claras",
  },
  {
    quote:
      "El doctor más amable, dedicado y preparado. Está 100% comprometido en ayudar a sus pacientes con excelentes resultados. Recomendado sin dudarlo.",
    author: "Sylvia Simmons",
    badge: "13 reseñas · 1 foto",
    stars: 5,
    tag: "escucha activa",
  },
  {
    quote:
      "Es un médico sumamente cercano. Me encanta el interés personal que muestra en mi salud. Identificó un problema cerebral y me refirió con un especialista excelente. ¡Tanto mi esposo como yo lo elegimos como nuestro cardiólogo!",
    author: "Joyce Aylor",
    badge: "6 reseñas",
    stars: 5,
    tag: "atención integral",
  },
  {
    quote:
      "El Dr. Mohamed Almahmoud es, por mucho, el mejor cardiólogo con el que he estado. Realmente me escucha y se nota que le importa mi salud. Ajustó mis medicamentos y ahora mi condición está totalmente estable.",
    author: "Hilton James",
    badge: "Local Guide · 12 reseñas",
    stars: 5,
    tag: "control efectivo",
  },
  {
    quote:
      "El Dr. Almahmoud fue sumamente atento, tranquilo y profesional. Agradecí mucho su dedicación y cómo tomó notas detalladas. ¡Es el mejor cardiólogo que he consultado!",
    author: "Monica S.",
    badge: "Local Guide · 84 reseñas",
    stars: 5,
    tag: "profesionalismo",
  },
  {
    quote:
      "El Dr. Almahmoud es un médico sabio, honesto y muy empático. Me impresionó enormemente cuando fui admitido de urgencia en Memorial Hermann y se hizo cargo de mi caso de manera impecable.",
    author: "Francis Haggerty",
    badge: "9 reseñas · 1 foto",
    stars: 5,
    tag: "cuidado de urgencia",
  },
  {
    quote:
      "¡El Dr. Almahmoud es el ejemplo de la excelencia! Es un cardiólogo maravilloso. Me fascina lo minucioso que es y cómo se toma el tiempo de responder cada una de mis dudas con total seguridad.",
    author: "Nyrah Taylor",
    badge: "4 reseñas",
    stars: 5,
    tag: "excelencia médica",
  },
];

const insurancePartners = [
  { name: "Medicare", logo: "/images/insurance/medicare.svg" },
  { name: "Texas Medicaid", logo: "/images/insurance/medicaid.png" },
  { name: "Blue Cross Blue Shield of Texas", logo: "/images/insurance/bcbstx.svg" },
  { name: "Aetna", logo: "/images/insurance/aetna.svg" },
  { name: "UnitedHealthcare", logo: "/images/insurance/uhc.svg" },
  { name: "Cigna Healthcare", logo: "/images/insurance/cigna.svg" },
  { name: "Humana", logo: "/images/insurance/humana.svg" },
  { name: "Ambetter Health", logo: "/images/insurance/ambetter.png" },
  { name: "Memorial Hermann Health", logo: "/images/insurance/memorial_hermann.png" },
  { name: "Wellpoint", logo: "/images/insurance/wellpoint.svg" },
  { name: "Community Health Choice", logo: "/images/insurance/community_health_choice.svg" },
  { name: "Curative", logo: "/images/insurance/curative.svg" },
  { name: "MultiPlan", logo: "/images/insurance/multiplan.png" },
  { name: "First Health Network", logo: "/images/insurance/first_health.png" },
];

const faqData = [
  {
    question: "¿Los síntomas cardíacos se presentan de forma diferente en hombres y mujeres?",
    answer:
      "No existe un único patrón de síntomas que distinga con certeza la enfermedad cardiovascular entre hombres y mujeres. La falta del dolor de pecho clásico no descarta que el corazón sea el origen. Por ello, recomendamos a nuestros pacientes —en especial a quienes tienen factores de riesgo— no ignorar ningún síntoma nuevo, inexplicable o persistente, incluso si no parece el típico dolor cardíaco.",
    category: "Síntomas y Presentación",
  },
  {
    question: "¿Cuáles síntomas cardíacos nunca se deben ignorar?",
    answer:
      "Nunca se debe pasar por alto la opresión, ardor o presión inexplicable en el pecho; la falta de aire con esfuerzos leves o al acostarse boca arriba; desmayos o mareos repentinos; latidos acelerados con debilidad; o la hinchazón progresiva en piernas y tobillos. Cualquier molestia nueva amerita una revisión médica sin demora.",
    category: "Señales de Alerta",
  },
  {
    question: "¿Por qué muchas personas retrasan consultar a un cardiólogo?",
    answer:
      "Muchos pacientes posponen su consulta porque los síntomas suelen ser intermitentes o se confunden fácilmente con cansancio, estrés, gastritis o la edad. Otros temen someterse a procedimientos invasivos. En nuestro consultorio, la atención es personalizada y con frecuencia se controla eficazmente mediante ajustes en el estilo de vida y tratamientos médicos específicos.",
    category: "Consulta Cardiológica",
  },
  {
    question: "¿Qué ocurre si mis resultados están en el límite (borderline)?",
    answer:
      "Los resultados limítrofes se analizan tomando en cuenta su historial completo, síntomas y factores de riesgo. En lugar de indicar estudios invasivos innecesarios, solemos recomendar estudios funcionales avanzados, optimización de hábitos o un seguimiento periódico para asegurar su bienestar.",
    category: "Resultados Diagnósticos",
  },
  {
    question: "¿Cómo determinan cuáles estudios o pruebas necesito?",
    answer:
      "El enfoque es totalmente individualizado. Generalmente iniciamos con un electrocardiograma de detección en la primera visita; los estudios posteriores se determinan según sus síntomas específicos, edad, antecedentes cardíacos y condición física.",
    category: "Estudios Personalizados",
  },
  {
    question: "¿Brindan seguimiento médico a largo plazo?",
    answer:
      "Sí. El cuidado de la salud cardiovascular es un compromiso continuo. Ofrecemos seguimiento a largo plazo para evaluar la respuesta a los tratamientos, monitorear estudios e imágenes, ajustar medicamentos y acompañarle conforme cambien sus necesidades de salud.",
    category: "Cuidado Continuo",
  },
];

const conditionsWeTreatList = [
  {
    title: "Enfermedad Arterial Coronaria",
    description: "Arterias obstruidas o estrechas que reducen el flujo sanguíneo al corazón.",
    image: "/heart-2.png",
    link: "/es/heart/cad",
  },
  {
    title: "Trastornos del Ritmo Cardíaco",
    description: "Afecciones que provocan que el corazón lata demasiado rápido, lento o de forma irregular.",
    image: "/content.png",
    link: "/es/heart/arrhythmias",
  },
  {
    title: "Insuficiencia Cardíaca",
    description: "Cuando el corazón tiene dificultades para bombear suficiente sangre para las necesidades del cuerpo.",
    image: "/content2.png",
    link: "/es/heart/chf",
  },
  {
    title: "Enfermedad Arterial Periférica",
    description: "Flujo sanguíneo reducido a través de las arterias que irrigan las piernas y otras partes del cuerpo.",
    image: "/images/pad-overview-illustration.png",
    link: "/es/blood-vessels/peripheral-artery-disease",
  },
  {
    title: "Enfermedad Venosa",
    description: "Insuficiencia, venas varicosas e hinchazón.",
    image: "/images/venous-types-visual-white.jpg",
    link: "/es/blood-vessels/venous-disease",
  },
  {
    title: "Enfermedad Tromboembólica",
    description: "Trombosis venosa profunda y prevención de coágulos.",
    image: "/content5.png",
    link: "/es/blood-vessels/thromboembolic-disease",
  },
  {
    title: "Enfermedad Valvular y Estructural",
    description: "Afecciones que afectan las válvulas cardíacas y cavidades estructurales.",
    image: "/content7.png",
    link: "/es/heart/valvular-heart-disease",
  },
  {
    title: "Hipertensión y Presión Arterial",
    description: "Detección de presión arterial alta, protección de órganos diana y tratamiento.",
    image: "/content8.jpg",
    link: "/es/blood-vessels/hypertension",
  },
];

const conditionPairs = [];
for (let i = 0; i < conditionsWeTreatList.length; i += 2) {
  conditionPairs.push(conditionsWeTreatList.slice(i, i + 2));
}

const heartSymptomsCol1 = [
  { name: "Dolor o presión en el pecho", link: "/es/symptom/chest-pain" },
  { name: "Falta de aire o disnea", link: "/es/symptom/shortness-of-breath" },
  { name: "Palpitaciones en el pecho", link: "/es/symptom/palpitations" },
  { name: "Dolores de cabeza constantes", link: "/es/symptom/headaches" },
];

const heartSymptomsCol2 = [
  { name: "Mareos y aturdimiento", link: "/es/symptom/dizziness" },
  { name: "Desmayos o síncope", link: "/es/symptom/dizziness-and-fainting" },
  { name: "Cansancio y fatiga inusual", link: "/es/symptom/fatigue" },
  { name: "Presión arterial elevada", link: "/es/blood-vessels/hypertension" },
];

const allHeartSymptoms = [...heartSymptomsCol1, ...heartSymptomsCol2];

const vascularSymptomsCol1 = [
  { name: "Dolor en piernas al caminar", link: "/es/symptom/leg-pain-when-walking" },
  { name: "Hinchazón en las piernas", link: "/es/symptom/leg-swelling" },
  { name: "Pies o manos frías", link: "/es/symptom/cold-feet-or-hands" },
];

const vascularSymptomsCol2 = [
  { name: "Entumecimiento o debilidad", link: "/es/symptom/numbness-or-weakness" },
  { name: "Cambios en color de la piel", link: "/es/symptom/changes-in-skin-color" },
  { name: "Sensación de pesadez en piernas", link: "/es/symptom/leg-heaviness-and-aching" },
];

const allVascularSymptoms = [...vascularSymptomsCol1, ...vascularSymptomsCol2];

function HeartPulseIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.2 12h5.3l1.5-3 2 6 1.5-3h5.3" />
    </svg>
  );
}

function VascularTreeIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2v7" />
      <path d="M12 9c-2 2.5-4 5.5-4.5 13" />
      <path d="M12 9c2 2.5 4 5.5 4.5 13" />
      <path d="M9.5 13.5c-2 1.5-3.5 4-4 8.5" />
      <path d="M14.5 13.5c2 1.5 3.5 4 4 8.5" />
      <path d="M8 7.5c-2.5 1.5-4.5 3.5-5.5 7.5" />
      <path d="M16 7.5c2.5 1.5 4.5 3.5 5.5 7.5" />
    </svg>
  );
}

export default function HomeClientEs() {
  const [activeTab, setActiveTab] = useState("heart");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [desktopSlide, setDesktopSlide] = useState(0);
  const [maxDesktopSlide, setMaxDesktopSlide] = useState(3);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [mobileSlide, setMobileSlide] = useState(0);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState("heart");
  const desktopCarouselRef = useRef(null);
  const mobileCarouselRef = useRef(null);
  const heroRef = useRef(null);
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroRect = heroRef.current.getBoundingClientRect();
      setShowBottomBar(heroRect.bottom <= 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateDesktopCarouselState = () => {
    if (!desktopCarouselRef.current) return;
    const container = desktopCarouselRef.current;
    const card = container.children[0];
    const cardWidth = card ? card.offsetWidth : 280;
    const gap = 24;
    const step = cardWidth + gap;
    const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
    const scrollLeft = container.scrollLeft;

    const maxIdx = Math.max(1, Math.round(maxScroll / step));
    const currentIdx = Math.min(
      maxIdx,
      Math.max(0, Math.round(scrollLeft / step))
    );

    setDesktopSlide(currentIdx);
    setMaxDesktopSlide(maxIdx);
    setCanScrollPrev(scrollLeft > 5);
    setCanScrollNext(scrollLeft < maxScroll - 5);
  };

  useEffect(() => {
    const handleResize = () => {
      updateDesktopCarouselState();
    };
    updateDesktopCarouselState();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollDesktopToIndex = (index) => {
    if (!desktopCarouselRef.current) return;
    const container = desktopCarouselRef.current;
    const card = container.children[0];
    const cardWidth = card ? card.offsetWidth : 280;
    const gap = 24;
    const step = cardWidth + gap;
    const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
    const targetScroll = Math.min(maxScroll, Math.max(0, index * step));
    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
    setDesktopSlide(index);
  };

  const handleDesktopPrev = () => {
    if (!desktopCarouselRef.current) return;
    const container = desktopCarouselRef.current;
    const card = container.children[0];
    const cardWidth = card ? card.offsetWidth : 280;
    const gap = 24;
    const step = cardWidth + gap;
    const target = Math.max(0, container.scrollLeft - step);
    container.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  const handleDesktopNext = () => {
    if (!desktopCarouselRef.current) return;
    const container = desktopCarouselRef.current;
    const card = container.children[0];
    const cardWidth = card ? card.offsetWidth : 280;
    const gap = 24;
    const step = cardWidth + gap;
    const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
    const target = Math.min(maxScroll, container.scrollLeft + step);
    container.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  const handleDesktopScroll = () => {
    updateDesktopCarouselState();
  };

  const scrollMobileToIndex = (index) => {
    if (!mobileCarouselRef.current) return;
    const container = mobileCarouselRef.current;
    const firstChild = container.children[0];
    const cardWidth = firstChild?.offsetWidth || 280;
    const gap = 16;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    setMobileSlide(index);
  };

  const handleMobileScroll = () => {
    if (!mobileCarouselRef.current) return;
    const container = mobileCarouselRef.current;
    const scrollLeft = container.scrollLeft;
    const firstChild = container.children[0];
    const cardWidth = firstChild?.offsetWidth || 280;
    const gap = 16;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setMobileSlide(Math.min(conditionPairs.length - 1, Math.max(0, index)));
  };

  const toggleMobileAccordion = (key) => {
    setMobileAccordionOpen((prev) => (prev === key ? null : key));
  };

  const currentCategory = doctorSpecialties.find((c) => c.id === activeTab);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 overflow-hidden pb-20 md:pb-0">
      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        className="relative bg-slate-950 lg:bg-gradient-to-br lg:from-slate-900 lg:via-blue-950 lg:to-sky-950 text-white pt-12 sm:pt-16 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute inset-0 w-full h-full pointer-events-none lg:hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-top"
          >
            <source src="/phone.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-950/30 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Desktop Left Column: Video Card */}
            <div className="hidden lg:block lg:col-span-6 w-full">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/70 border border-slate-700/60 bg-slate-900 group">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full aspect-4/3 object-cover object-center"
                >
                  <source src="/bgvideo.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40 pointer-events-none" />
              </div>
            </div>

            {/* Content: Right Column */}
            <div className="relative z-10 pt-40 sm:pt-48 lg:pt-0 lg:col-span-6 flex flex-col items-center text-center w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight text-white text-center drop-shadow-md">
                Atención Cardíaca Experta, Centrada en Usted
              </h1>

              <p className="mt-4 sm:mt-6 text-slate-200 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed text-center mx-auto drop-shadow-sm">
                brindamos atención integral mediante{" "}
                <span className="font-bold text-sky-300">detección temprana</span>,{" "}
                <span className="font-bold text-sky-300">prevención</span>,{" "}
                <span className="font-bold text-sky-300">tratamiento mínimamente invasivo</span> y{" "}
                <span className="font-bold text-sky-300">segunda opinión de especialistas</span>.
              </p>

              {/* Action Buttons */}
              <div className="w-full pt-7 sm:pt-9">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <Link
                    href="/es/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 font-bold rounded-2xl text-slate-900 bg-sky-200 hover:bg-sky-100 transition-all duration-300 shadow-lg shadow-sky-500/20 hover:scale-105 text-sm sm:text-base cursor-pointer text-center whitespace-nowrap shrink-0"
                  >
                    <Calendar className="mr-2.5 h-5 w-5 text-slate-900 shrink-0" />
                    <span>Solicitar Cita</span>
                  </Link>

                  <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
                    <a
                      href="https://healow.com/apps/provider/mohamed-almahmoud-2103459"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-6 py-3.5 sm:py-4 font-bold rounded-2xl text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 shadow-md hover:scale-105 text-xs sm:text-sm md:text-base cursor-pointer text-center whitespace-nowrap shrink-0"
                    >
                      <span>Reservar por Healow</span>
                    </a>

                    <a
                      href="tel:+12813581950"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-6 py-3.5 sm:py-4 font-bold rounded-2xl text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 shadow-md hover:scale-105 text-xs sm:text-sm md:text-base cursor-pointer text-center whitespace-nowrap shrink-0"
                    >
                      <Phone className="mr-1.5 sm:mr-2.5 h-4 sm:h-5 w-4 sm:w-5 text-sky-300 shrink-0" />
                      <span>Llamar</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIAGNOSIS TO TREATMENT PLAN SECTION */}
      <section className="bg-white text-slate-900 py-20 overflow-hidden relative border-t border-slate-200/80">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-sky-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2240] tracking-tight leading-tight">
              Encontrar el{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 bg-clip-text text-transparent font-black">
                Tratamiento Correcto
              </span>{" "}
              Comienza con el{" "}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 bg-clip-text text-transparent font-black">
                Diagnóstico Preciso
              </span>
            </h2>

            <div className="max-w-xl sm:max-w-3xl mx-auto space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 pt-3 sm:pt-4 text-left">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-xs sm:text-sm mb-8 font-extrabold uppercase tracking-wider text-blue-600 shrink-0">
                  Nos enfocamos en
                </span>
                <div className="flex-1 bg-blue-50/70 border border-blue-200/80 rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-xs flex items-center justify-between gap-3 transition-colors hover:border-blue-300">
                  <span className="text-blue-950 font-bold text-xs sm:text-sm md:text-base tracking-tight">
                    Evaluación Personalizada
                  </span>
                  <span className="text-base sm:text-lg text-emerald-600 shrink-0 font-black">
                    ✓
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-xs sm:text-sm mb-8 font-extrabold uppercase tracking-wider text-slate-500 shrink-0">
                  En lugar de
                </span>
                <div className="flex-1 bg-rose-50/70 border border-rose-200/80 rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-xs flex items-center justify-between gap-3 transition-colors hover:border-rose-300">
                  <span className="text-rose-950 font-bold text-xs sm:text-sm md:text-base tracking-tight">
                    Un Enfoque Genérico
                  </span>
                  <span className="text-base sm:text-lg text-rose-600 shrink-0 font-bold">
                    ❌
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 1 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 border-b border-slate-200 pb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-600/20 shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2240]">
                  Lo escuchamos atentamente
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1">
                  Sus síntomas, inquietudes e historial de salud son la máxima prioridad
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {[
                {
                  title: "Historial médico",
                  desc: "Revisión detallada de antecedentes cardíacos personales y familiares.",
                },
                {
                  title: "Examen físico",
                  desc: "Examen clínico cardiovascular y vascular exhaustivo.",
                },
                {
                  title: "Estudios previos",
                  desc: "Revisión profunda de electrocardiogramas, laboratorios e imágenes anteriores.",
                },
                {
                  title: "Factores de riesgo",
                  desc: "Perfil de riesgo cardiovascular y análisis preventivo.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="space-y-2 pt-4 sm:pt-0 sm:px-4 first:pt-0 first:pl-0"
                >
                  <div className="flex items-center space-x-2 text-blue-900 font-bold text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-section 2 */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-2">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-600/20 shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B2240]">
                    Evaluamos con precisión
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-1">
                    Un diagnóstico cardiovascular específico identifica la causa exacta
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {diagnosticTests.map((test, idx) => (
                <div
                  key={idx}
                  className={`group bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-blue-400/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md flex-col justify-between ${idx >= 3 ? "hidden sm:flex" : "flex"
                    }`}
                >
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={test.image}
                      alt={test.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4 sm:p-5 text-center">
                    <h4 className="font-bold text-[#0B2240] text-base sm:text-lg group-hover:text-blue-600 transition-colors">
                      {test.name}
                    </h4>
                  </div>
                </div>
              ))}

              <div className="group bg-gradient-to-br from-blue-50 via-sky-50 to-slate-50 border border-blue-200/80 hover:border-blue-400/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-center text-center sm:text-left transition-all duration-300 shadow-xs hover:shadow-md">
                <div className="space-y-2">
                  <h4 className="font-bold text-[#0B2240] text-base sm:text-lg leading-snug group-hover:text-blue-600 transition-colors">
                    Y más herramientas diagnósticas
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Utilizamos estudios adicionales según sus síntomas, hallazgos clínicos y perfil individual.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 3 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 border-b border-slate-200 pb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-600/20 shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2240]">
                  Plan de tratamiento personalizado
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1">
                  Diseñado para proteger su calidad de vida y salud a largo plazo
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {treatmentProgressionStages.map((stage, idx) => {
                const StageIcon = stage.icon;
                return (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 shrink-0 mt-0.5">
                      <StageIcon className={`h-5 w-5 ${stage.iconColor}`} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[#0B2240] font-bold text-base leading-snug">
                        {stage.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50 border border-blue-100 p-6 sm:p-8 rounded-3xl mt-8 shadow-xs text-center sm:text-left">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                &ldquo;No todos los pacientes necesitan procedimientos invasivos. Nuestra meta es recomendar el{" "}
                <span className="bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent font-bold not-italic">
                  tratamiento menos invasivo
                </span>{" "}
                que proporcione el{" "}
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent font-bold not-italic">
                  mejor resultado posible
                </span>{" "}
                para su condición específica.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOCTOR PROFILE */}
      <section
        id="doctor-profile"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-12 shadow-xl shadow-blue-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden bg-white p-2 border border-slate-200/90 shadow-lg">
                <div className="relative h-96 sm:h-[480px] w-full rounded-2xl overflow-hidden bg-white">
                  <Image
                    src="/personal.png"
                    alt="Dr. Mohamed Faher Almahmoud MD, MS, RPVI, CBCCT, FACC, FSCAI"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="sm:hidden absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/20 shadow-xl text-center">
                    <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight">
                      <div>Dr. Mohamed Faher Almahmoud</div>
                      <div className="text-blue-600 text-[11px] font-bold mt-0.5 tracking-tight">
                        MD, MS, RPVI, CBCCT, FACC, FSCAI
                      </div>
                    </h3>
                    <p className="text-blue-600 text-[11px] font-bold mt-1">
                      Cardiólogo Intervencionista y Estructural
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="hidden sm:block">
                <div className="inline-flex items-center space-x-2 text-blue-600 text-xs font-extrabold uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 mb-3">
                  <GraduationCap className="h-4 w-4" />
                  <span>Conozca a su Cardiólogo</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  <div>Dr. Mohamed Faher Almahmoud</div>
                  <div className="text-blue-600 text-xl lg:text-2xl font-bold mt-1 tracking-tight">
                    MD, MS, RPVI, CBCCT, FACC, FSCAI
                  </div>
                </h2>
                <p className="text-blue-600 font-bold text-sm mt-1">
                  Cardiólogo Intervencionista y Estructural
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span>Certificaciones de la Junta Médica</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 sm:grid sm:grid-cols-2 sm:gap-2">
                  {boardCertificationsList.map((cert, idx) => (
                    <div
                      key={idx}
                      className="inline-flex items-center space-x-1.5 text-xs text-slate-700 font-semibold py-0.5 sm:py-2"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <Building2 className="h-4 w-4 text-blue-600" />
                    <span>Privilegios Hospitalarios</span>
                  </div>
                  <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5 sm:block sm:space-y-1.5 text-xs text-slate-700 font-medium">
                    <li className="inline-flex items-center space-x-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Houston Methodist The Woodlands</span>
                    </li>
                    <li className="inline-flex items-center space-x-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Memorial Hermann The Woodlands</span>
                    </li>
                    <li className="inline-flex items-center space-x-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>HCA Houston Healthcare Kingwood</span>
                    </li>
                    <li className="inline-flex items-center space-x-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Memorial Hermann Northeast Hospital</span>
                    </li>
                    <li className="inline-flex items-center space-x-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>HCA Houston Healthcare Northwest</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/es/about"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md shadow-blue-600/25 transition-all duration-300 hover:scale-[1.02] active:scale-100 text-center"
                >
                  <span>Conozca más sobre el Dr. Almahmoud</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>

                <a
                  href="https://scholar.google.com/citations?hl=en&user=Zz9JBy4AAAAJ&view_op=list_works&sortby=pubdate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02] active:scale-100 text-center group"
                >
                  <BookOpen className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>Publicaciones en Google Scholar</span>
                  <ExternalLink className="h-3.5 w-3.5 text-blue-500 opacity-75" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REVIEWS: GOOGLE MAPS */}
      <section className="bg-slate-200/50 py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest">
                opiniones de pacientes sobre el dr. almahmoud
              </span>

              <div>
                <a
                  href="https://www.google.com/maps/place/Mohamed+Faher+Almahmoud,+M.D.,+F.A.C.C/@30.0510449,-95.2432324,17z/data=!3m1!5s0x8640b2b3bb230983:0xd5d65ccbea669bd1!4m8!3m7!1s0x8640b30fdf4f3879:0x9c8238f6e7902f2b!8m2!3d30.0510449!4d-95.2406575!9m1!1b1!16s%2Fg%2F11qng1wk14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-2xs group"
                >
                  <svg
                    className="w-4 h-4 text-red-500 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>Ver en Google Maps</span>
                  <span className="text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              </div>

              <div className="space-y-1">
                <h3 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
                  5.0 / 5
                </h3>
                <p className="text-sm font-bold text-slate-700">
                  Calificación Verificada en Google Maps
                </p>
                <p className="text-xs text-blue-600 font-semibold">
                  Más de 178 reseñas de pacientes verificadas
                </p>
              </div>
            </div>

            {/* Right: Reviews Carousel Card */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{googleReviewsList[desktopSlide % googleReviewsList.length].quote}&rdquo;
                </p>
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900 text-sm">
                      {googleReviewsList[desktopSlide % googleReviewsList.length].author}
                    </p>
                    <p className="text-xs text-slate-500">
                      {googleReviewsList[desktopSlide % googleReviewsList.length].badge}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setDesktopSlide((prev) => (prev > 0 ? prev - 1 : googleReviewsList.length - 1))}
                      className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
                      aria-label="Reseña anterior"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setDesktopSlide((prev) => (prev + 1) % googleReviewsList.length)}
                      className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
                      aria-label="Siguiente reseña"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSURANCE PARTNERS */}
      <section id="insurance" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Planes de Seguro Aceptados
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Aceptamos Medicare, Texas Medicaid y la mayoría de los principales planes comerciales para brindarle atención accesible sin demoras.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {insurancePartners.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:shadow-md hover:border-blue-300 transition-all min-h-[110px]"
            >
              <div className="relative h-10 w-24 mb-2 flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] font-semibold text-slate-700 line-clamp-1">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONDITIONS: CONDITIONS WE TREAT */}
      <section
        id="doctor-specialties"
        className="scroll-mt-20 max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8"
      >
        {/* Section Main Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2240] tracking-tight">
            Condiciones que Tratamos
          </h2>
        </div>

        {/* 3A. CONDITIONS WE TREAT CAROUSEL */}
        <div className="mb-14 sm:mb-20">

          {/* DESKTOP (PC): 1-Row Carousel with Side Arrows & 4 visible cards */}
          <div className="hidden md:block relative">
            {/* Desktop Left Arrow Button */}
            <button
              type="button"
              onClick={handleDesktopPrev}
              disabled={!canScrollPrev}
              aria-label="Condición anterior"
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-300 disabled:opacity-25 disabled:pointer-events-none transition-all cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Desktop Right Arrow Button */}
            <button
              type="button"
              onClick={handleDesktopNext}
              disabled={!canScrollNext}
              aria-label="Siguiente condición"
              className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-300 disabled:opacity-25 disabled:pointer-events-none transition-all cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* 1-Row Track */}
            <div
              ref={desktopCarouselRef}
              onScroll={handleDesktopScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 pt-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {conditionsWeTreatList.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="snap-start shrink-0 w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer block"
                >
                  <div>
                    {/* Visual / Image */}
                    {item.image && (
                      <div className="relative h-40 sm:h-44 w-full rounded-2xl overflow-hidden bg-slate-50 mb-4 flex items-center justify-center border border-slate-100/80">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <h4 className="font-extrabold text-[#0B2240] text-base group-hover:text-blue-600 transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-[13px] text-slate-500 mt-2 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Desktop Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {Array.from({ length: maxDesktopSlide + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollDesktopToIndex(idx)}
                  aria-label={`Ir a la diapositiva ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    desktopSlide === idx
                      ? "w-6 bg-teal-700"
                      : "w-2 bg-teal-200 hover:bg-teal-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* MOBILE (Phone): 2-Row Slider (1 upper card, 1 lower card per slide) */}
          <div className="block md:hidden relative">
            <div
              ref={mobileCarouselRef}
              onScroll={handleMobileScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 pt-1 px-1 -mx-2 px-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {conditionPairs.map((pair, slideIdx) => (
                <div
                  key={slideIdx}
                  className="snap-start shrink-0 w-[84vw] xs:w-[78vw] flex flex-col gap-3.5"
                >
                  {pair.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      href={item.link}
                      className="bg-white border border-slate-100 rounded-3xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] active:scale-[0.99] transition-all duration-300 flex flex-col justify-between group cursor-pointer block"
                    >
                      <div>
                        {item.image && (
                          <div className="relative h-28 xs:h-32 w-full rounded-2xl overflow-hidden bg-slate-50 mb-3 flex items-center justify-center border border-slate-100/80">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="85vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}

                        <h4 className="font-extrabold text-[#0B2240] text-sm group-hover:text-blue-600 transition-colors leading-snug">
                          {item.title}
                        </h4>

                        <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Mobile Pagination Dots (3 dots) */}
            <div className="flex justify-center items-center gap-2 mt-5">
              {conditionPairs.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollMobileToIndex(idx)}
                  aria-label={`Ir a la diapositiva móvil ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    mobileSlide === idx
                      ? "w-6 bg-teal-700"
                      : "w-2 bg-teal-200 hover:bg-teal-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. EXPERIENCING SOMETHING CONCERNING? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2240] tracking-tight">
            ¿EXPERIMENTA ALGÚN SÍNTOMA QUE LE PREOCUPA?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            Encuentre los síntomas que coinciden con lo que siente y conozca los siguientes pasos recomendados.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-[#FFF6F4]/90 border border-rose-100/90 rounded-3xl p-6 lg:p-7 shadow-xs">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-transparent text-rose-500 flex items-center justify-center shrink-0">
                <HeartPulseIcon className="w-6 h-6" />
              </div>
              <h4 className="text-base lg:text-lg font-bold text-[#0B2240]">
                Síntomas del Corazón y Presión Arterial
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="space-y-2.5">
                {heartSymptomsCol1.map((sym, idx) => (
                  <Link
                    key={idx}
                    href={sym.link}
                    className="bg-transparent hover:bg-rose-100/40 rounded-2xl py-3 px-3.5 flex items-center justify-between transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span className="text-xs lg:text-[13px] font-medium text-slate-700 group-hover:text-slate-900 truncate">
                        {sym.name}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-rose-400 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>

              <div className="space-y-2.5">
                {heartSymptomsCol2.map((sym, idx) => (
                  <Link
                    key={idx}
                    href={sym.link}
                    className="bg-transparent hover:bg-rose-100/40 rounded-2xl py-3 px-3.5 flex items-center justify-between transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span className="text-xs lg:text-[13px] font-medium text-slate-700 group-hover:text-slate-900 truncate">
                        {sym.name}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-rose-400 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#F0F9FF]/90 border border-sky-100/90 rounded-3xl p-6 lg:p-7 shadow-xs">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-transparent text-sky-600 flex items-center justify-center shrink-0">
                <VascularTreeIcon className="w-6 h-6" />
              </div>
              <h4 className="text-base lg:text-lg font-bold text-[#0B2240]">
                Síntomas Vasculares y de Circulación
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="space-y-2.5">
                {vascularSymptomsCol1.map((sym, idx) => (
                  <Link
                    key={idx}
                    href={sym.link}
                    className="bg-transparent hover:bg-sky-100/40 rounded-2xl py-3 px-3.5 flex items-center justify-between transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      <span className="text-xs lg:text-[13px] font-medium text-slate-700 group-hover:text-slate-900 truncate">
                        {sym.name}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-sky-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>

              <div className="space-y-2.5">
                {vascularSymptomsCol2.map((sym, idx) => (
                  <Link
                    key={idx}
                    href={sym.link}
                    className="bg-transparent hover:bg-sky-100/40 rounded-2xl py-3 px-3.5 flex items-center justify-between transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      <span className="text-xs lg:text-[13px] font-medium text-slate-700 group-hover:text-slate-900 truncate">
                        {sym.name}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-sky-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="block md:hidden space-y-3.5">
          <div className="bg-[#FFF6F4] border border-rose-100 rounded-2xl p-4 transition-all duration-300">
            <button
              type="button"
              onClick={() => toggleMobileAccordion("heart")}
              className="w-full flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-transparent text-rose-500 flex items-center justify-center shrink-0">
                  <HeartPulseIcon className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-[#0B2240]">
                  Síntomas del Corazón y Presión Arterial
                </span>
              </div>
              {mobileAccordionOpen === "heart" ? (
                <ChevronUp className="w-5 h-5 text-rose-500 shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-rose-500 shrink-0" />
              )}
            </button>

            {mobileAccordionOpen === "heart" && (
              <div className="pt-3.5 space-y-2 animate-fade-in-up">
                {allHeartSymptoms.map((sym, idx) => (
                  <Link
                    key={idx}
                    href={sym.link}
                    className="bg-transparent hover:bg-rose-100/40 rounded-xl py-3 px-3.5 flex items-center justify-between transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span className="text-xs font-medium text-slate-700">
                        {sym.name}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-rose-400 group-hover:text-rose-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="bg-[#F0F9FF] border border-sky-100 rounded-2xl p-4 transition-all duration-300">
            <button
              type="button"
              onClick={() => toggleMobileAccordion("vascular")}
              className="w-full flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-transparent text-sky-600 flex items-center justify-center shrink-0">
                  <VascularTreeIcon className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-[#0B2240]">
                  Síntomas Vasculares y de Circulación
                </span>
              </div>
              {mobileAccordionOpen === "vascular" ? (
                <ChevronUp className="w-5 h-5 text-sky-500 shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-sky-500 shrink-0" />
              )}
            </button>

            {mobileAccordionOpen === "vascular" && (
              <div className="pt-3.5 space-y-2 animate-fade-in-up">
                {allVascularSymptoms.map((sym, idx) => (
                  <Link
                    key={idx}
                    href={sym.link}
                    className="bg-transparent hover:bg-sky-100/40 rounded-xl py-3 px-3.5 flex items-center justify-between transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      <span className="text-xs font-medium text-slate-700">
                        {sym.name}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-sky-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. FAQS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Su salud cardíaca: Preguntas frecuentes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-xs ${isOpen
                  ? "border-blue-500 shadow-md ring-2 ring-blue-500/10"
                  : "border-slate-200/80 hover:border-blue-300"
                  }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between space-x-4 bg-white hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen
                      ? "bg-blue-600 text-white rotate-180"
                      : "bg-slate-100 text-slate-600"
                      }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed animate-fade-in-up">
                    <p className="pt-4 text-slate-700 font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/es/heart-care"
            className="inline-flex items-center space-x-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-2xl transition-all shadow-md hover:scale-[1.02]"
          >
            <span>Más Respuestas y Guías</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Fixed Bottom Action Bar */}
      <aside
        aria-label="Acciones rápidas de contacto y citas"
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/80 shadow-[0_-10px_30px_rgba(0,0,0,0.6)] px-3 py-2 sm:py-2.5 transition-all duration-300 ease-in-out ${showBottomBar
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="max-w-xl mx-auto flex items-stretch gap-2 sm:gap-3">
          <a
            href="tel:+12813581950"
            className="w-[30%] flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-md shadow-blue-600/30 border border-blue-400/30 text-center active:scale-95 hover:scale-[1.01]"
          >
            <PhoneCall className="h-5 w-5 text-white shrink-0" />
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-white">Llamar</span>
          </a>

          <div className="w-[70%] flex flex-col gap-1.5 justify-center">
            <Link
              href="/es/contact"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 hover:from-blue-700 hover:to-sky-500 text-white font-black rounded-xl transition-all shadow-md shadow-blue-600/25 text-center text-xs sm:text-sm active:scale-95 hover:scale-[1.01]"
            >
              <Stethoscope className="h-4 w-4 text-sky-200 shrink-0" />
              <span className="truncate font-extrabold text-white">Solicitar Cita</span>
            </Link>

            <a
              href="https://healow.com/apps/provider/mohamed-almahmoud-2103459"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-2 bg-slate-900/90 hover:bg-slate-800 border border-blue-400/30 text-sky-100 hover:text-white font-bold rounded-xl transition-all text-center text-[11px] sm:text-xs active:scale-95"
            >
              <Calendar className="h-3.5 w-3.5 text-sky-300 shrink-0" />
              <span className="truncate">Reservar por Healow</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
