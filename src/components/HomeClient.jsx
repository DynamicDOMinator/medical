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
    label: "Heart conditions",
    icon: Heart,
    color: "from-blue-600 to-indigo-600",
    title: "Advanced Cardiac Care & Structural Heart Interventions",
    description:
      "Expert medical diagnosis, interventional consultation, and management for coronary artery disease, valvular heart disease (TAVR, MitraClip), and electrical heart disorders.",
    symptoms: [
      "Chest Pain",
      "Shortness of Breath",
      "Palpitations",
      "Dizziness & Fainting",
      "Fatigue",
    ],
    symptomText:
      "can be caused by several different cardiovascular conditions. Our role is to identify the underlying cause through a careful clinical assessment and targeted diagnostic testing, then recommend the treatment that's most appropriate for your specific condition.",
    conditions: [
      {
        name: "Coronary Artery Disease (CAD)",
        link: "/heart/cad",
        desc: "Complex coronary artery interventions and plaque management.",
        image: "/heart-2.png",
      },
      {
        name: "Arrhythmias & Rhythm Disorders",
        link: "/heart/arrhythmias",
        desc: "Atrial fibrillation, electrical disturbances, and Holter monitoring.",
        image: "/content.png",
      },
      {
        name: "Valvular & Structural Disease",
        link: "/heart/valvular-heart-disease",
        desc: "Aortic stenosis (TAVR), MitraClip, ASD & PFO closure.",
        image: "/content7.png",
      },
      {
        name: "Congestive Heart Failure (CHF)",
        link: "/heart/chf",
        desc: "Advanced heart failure care & mechanical circulatory support.",
        image: "/content2.png",
      },
    ],
    hubLink: "/heart",
    hubText: "View All Heart Care Guides →",
  },
  {
    id: "vascular",
    label: "Vascular conditions",
    icon: Activity,
    color: "from-sky-600 to-blue-700",
    title: "Peripheral Vascular & Endovascular Center",
    description:
      "Specialized interventional diagnosis for peripheral artery disease (PAD), deep vein thrombosis (DVT), pulmonary embolism, and hyperlipidemia.",
    symptoms: [
      "Leg Pain",
      "Leg Swelling",
      "Leg Heaviness & Aching",
      "Varicose Veins",
      "Cold or Discolored Feet",
    ],
    symptomText:
      "can signal underlying arterial blockages or venous reflux disease. Early vascular evaluation and ultrasound screening can prevent major complications.",
    conditions: [
      {
        name: "Venous Insufficiency & Varicose",
        link: "/blood-vessels/venous-disease",
        desc: "Lower limb venous valve management and duplex ultrasound.",
        image: "/images/venous-types-visual-white.jpg",
      },
      {
        name: "Peripheral Artery Disease (PAD)",
        link: "/blood-vessels/peripheral-artery-disease",
        desc: "Endovascular intervention for leg arterial blockages.",
        image: "/images/pad-overview-illustration.png",
      },
      {
        name: "Thromboembolic & DVT Care",
        link: "/blood-vessels/thromboembolic-disease",
        desc: "Minimally invasive catheter procedures for DVT & Pulmonary Embolism.",
        image: "/content5.png",
      },
    ],
    hubLink: "/blood-vessels",
    hubText: "View All Vascular Care Guides →",
  },
  {
    id: "hypertension",
    label: "Hypertension",
    icon: ShieldCheck,
    color: "from-indigo-600 to-blue-600",
    title: "Comprehensive Hypertension & Blood Pressure Management",
    description:
      "Expert evaluation, continuous monitoring, and tailored treatments for essential, secondary, and resistant hypertension to protect target organs and arterial health.",
    symptoms: [
      "High Blood Pressure",
      "Headaches",
      "Dizziness",
    ],
    symptomText:
      "are common warning indicators of uncontrolled high blood pressure. Precise diagnosis and multi-agent GDMT medication protocols protect long-term cardiovascular health.",
    conditions: [
      {
        name: "Essential & High Blood Pressure",
        link: "/blood-vessels/hypertension",
        desc: "Individualized lifestyle and medical therapies to achieve optimal target blood pressure.",
        image: "/content8.jpg",
      },
      {
        name: "Secondary Hypertension Screening",
        link: "/blood-vessels/hypertension",
        desc: "Specialized screening for renovascular, endocrine, and metabolic causes of high blood pressure.",
        image: "/content6.png",
      },
    ],
    hubLink: "/blood-vessels/hypertension",
    hubText: "Read Full Hypertension Guide →",
  },
];

const diagnosticTests = [
  {
    name: "ECG",
    desc: "Heart rhythm and electrical activity.",
    image: "/ECG.png",
  },
  {
    name: "Echocardiography",
    desc: "Heart structure, function, and blood flow.",
    image: "/Echocardiography.png",
  },
  {
    name: "Stress Testing",
    desc: "How your heart responds to physical stress.",
    image: "/Stress Testing.png",
  },
  {
    name: "Holter Monitoring",
    desc: "Extended monitoring to detect intermittent rhythm changes.",
    image: "/Holter Monitoring.png",
  },
  {
    name: "CT Coronary Angiography",
    desc: "Detailed imaging of the coronary arteries when appropriate.",
    image: "/CT Coronary Angiography.png",
  },
];

const treatmentProgressionStages = [
  {
    step: "01",
    icon: ShieldCheck,
    iconColor: "text-emerald-400",
    title: "Prevention",
    color: "bg-emerald-500/10 border-emerald-200 text-emerald-950",
    badgeColor: "bg-emerald-600 text-white",
    desc: "Reduce risk & protect your heart",
  },
  {
    step: "02",
    icon: Pill,
    iconColor: "text-sky-400",
    title: "Medical Therapy",
    color: "bg-blue-500/10 border-blue-200 text-blue-950",
    badgeColor: "bg-blue-600 text-white",
    desc: "Control your condition",
  },
  {
    step: "03",
    icon: Stethoscope,
    iconColor: "text-indigo-400",
    title: "Minimally Invasive Procedures",
    color: "bg-indigo-500/10 border-indigo-200 text-indigo-950",
    badgeColor: "bg-indigo-600 text-white",
    desc: "When needed to treat underlying condition",
  },
  {
    step: "04",
    icon: Heart,
    iconColor: "text-rose-400",
    title: "Advanced Cardiac Interventions",
    color: "bg-rose-500/10 border-rose-200 text-rose-950",
    badgeColor: "bg-rose-600 text-white",
    desc: "For complex conditions, when specialized treatment is appropriate",
  },
];

const boardCertificationsList = [
  "Internal Medicine",
  "Cardiovascular Disease",
  "Interventional Cardiology",
  "Nuclear Cardiology",
  "Echocardiography",
];

const googleReviewsList = [
  {
    quote:
      "Dr. Almahmoud is great! I believe he is by far the best doctor that I have ever seen. He is easy to talk to and very thorough in discussing any symptoms I am experiencing. He gives me excellent care and direction for my health and overall wellbeing. The staff is amazing, caring, compassionate and thoughtful as well.",
    author: "Tina Riley",
    badge: "Local Guide · 15 reviews",
    stars: 5,
    tag: "clear explanations",
  },
  {
    quote:
      "Absolutely love Dr Almahmoud! He listens to everything you say, addresses all your concerns, isn’t pushy with procedures, and follows up with you when you do have procedures. Was just hospitalized last week and he personally called me.",
    author: "Jamie Barnett",
    badge: "5 reviews",
    stars: 5,
    tag: "attentive to patients",
  },
  {
    quote:
      "Dr. Almahmoud has a unique manner in care that upon first meeting you feel like you are with a physician that is willing to adapt his expertise to the patient rather than a physician who demands the patient to adapt.",
    author: "Lee Turfe",
    badge: "2 reviews",
    stars: 5,
    tag: "bedside manner",
  },
  {
    quote:
      "Dr. Almahmoud has been a source of reassurance during some difficult moments. He has a rare combination of expertise and genuine compassion. He takes the time to listen, never makes you feel rushed, and creates an environment where patients feel safe and supported.",
    author: "Jasmin V",
    badge: "Verified Patient",
    stars: 5,
    tag: "genuine care",
  },
  {
    quote:
      "Great staff, friendly and no waiting a long time. Dr. Almahmoud is friendly and really listens and answers questions. He calmed my fears and ordered all necessary tests.. very thorough. Thank you Dr. Almahmoud.",
    author: "CA R",
    badge: "4 reviews",
    stars: 5,
    tag: "thoroughness",
  },
  {
    quote:
      "Dr. Almahmoud has always showed concern about my health. I appreciate him for caring. He has a good staff as well. I salute you for all you’ve done and continue to do. Thanks and God bless you.",
    author: "Julia Montgomery",
    badge: "6 reviews",
    stars: 5,
    tag: "answering questions",
  },
  {
    quote:
      "Greatest, kindness, knowledgeable doctor. He is committed to assist his patients with good results. Recommended 100%.",
    author: "Sylvia Simmons",
    badge: "13 reviews · 1 photo",
    stars: 5,
    tag: "listening doctor",
  },
  {
    quote:
      "He is a personal Dr. I love how he takes a personal interest in me.. He found the problem in my brain and referred me to another great Brain doctor. My husband and I both choose Dr Almahmoud for our cardiologist!",
    author: "Joyce Aylor",
    badge: "6 reviews",
    stars: 5,
    tag: "addressing concerns",
  },
  {
    quote:
      "Dr. Mohamed Almahmoud is by far the best cardiologist I’ve seen, and I’ve seen so many I can’t count. He actually listens to me, and I get a sense that he actually cares about my health. He changed my medications, and now I have become stable in my condition.",
    author: "Hilton James",
    badge: "Local Guide · 12 reviews",
    stars: 5,
    tag: "explaining procedures",
  },
  {
    quote:
      "Dr. Almahmoud was caring, calm, and professional. I appreciated his thorough note-taking and active listening. He is the best cardiologist I've seen so far!",
    author: "Monica S.",
    badge: "Local Guide · 84 reviews",
    stars: 5,
    tag: "listening doctor",
  },
  {
    quote:
      "Dr. Almahmoud is a very knowledgeable, caring, honest and empathetic doctor. I was so impressed with him when I was admitted to Hermann on an emergency basis and he took total care of me.",
    author: "Francis Haggerty",
    badge: "9 reviews · 1 photo",
    stars: 5,
    tag: "genuine care",
  },
  {
    quote:
      "OMG!! Dr. Almahmoud is the epitome of excellence and greatness. He is a wonderful cardiologist. I absolutely love how thorough he is, how he takes time to listen to my concerns and addresses them confidently.",
    author: "Nyrah Taylor",
    badge: "4 reviews",
    stars: 5,
    tag: "thoroughness",
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
    question: "What symptoms present differently in men vs women?",
    answer:
      "There is no single symptom pattern that reliably distinguishes cardiovascular disease in men from women. The absence of classic chest pain does not mean the heart is not the cause. For this reason, we encourage patients—particularly those with cardiovascular risk factors—not to dismiss a new, unexplained, persistent, or concerning symptom, even if it does not sound like a typical heart problem.",
    category: "Symptoms & Presentation",
  },
  {
    question: "What heart symptoms should patients never ignore?",
    answer:
      "Patients should never ignore unexplained chest tightness, pressure, or burning; shortness of breath with mild exertion or when lying flat; sudden unexplained fainting, dizziness, or near-blackouts; rapid or fluttering heartbeats accompanied by weakness; and swelling in both legs or feet. Any new, worsening, or exertional discomfort warrants prompt evaluation.",
    category: "Clinical Warning Signs",
  },
  {
    question: "Why do people delay seeing a cardiologist?",
    answer:
      "Many patients delay evaluation because cardiovascular symptoms can be subtle, intermittent, or easily mistaken for aging, stress, indigestion, or lack of fitness. Others hesitate out of fear of undergoing invasive procedures. At our practice, evaluation is individualized and often managed conservatively with lifestyle and targeted medical therapy.",
    category: "Cardiology Consultation",
  },
  {
    question: "What happens if my test results are borderline?",
    answer:
      "Borderline test results are evaluated in the context of your overall cardiovascular risk profile, personal symptoms, and medical history. Rather than ordering unnecessary invasive tests, we may recommend advanced functional imaging, lifestyle optimization, or close interval monitoring to ensure your heart health remains secure.",
    category: "Diagnostic Results",
  },
  {
    question: "How do you determine which tests I need?",
    answer:
      "Individualized approach depending on complaints. Patients usually get a screening ECG on their first visit then testing is based on symptoms, age, risk factors, physical ability, and prior cardiac history.",
    category: "Personalized Testing",
  },
  {
    question: "Do you provide long-term follow-up?",
    answer:
      "Yes. Cardiovascular disease and risk management are lifelong journeys. We provide comprehensive long-term follow-up care to monitor your treatment response, track biomarker and imaging progress, manage medications, and adapt your care plan as your health needs evolve.",
    category: "Ongoing Care",
  },
];

const conditionsWeTreatList = [
  {
    title: "Coronary Artery Disease",
    description: "Blocked or narrowed arteries that reduce blood flow to the heart.",
    image: "/heart-2.png",
    link: "/heart/cad",
  },
  {
    title: "Heart Rhythm Disorders",
    description: "Conditions that cause the heart to beat too fast, too slow, or irregularly.",
    image: "/content.png",
    link: "/heart/arrhythmias",
  },
  {
    title: "Heart Failure",
    description: "When the heart has difficulty pumping enough blood for the body's needs.",
    image: "/content2.png",
    link: "/heart/chf",
  },
  {
    title: "Peripheral Artery Disease",
    description: "Reduced blood flow through arteries supplying the legs and other parts of the body.",
    image: "/images/pad-overview-illustration.png",
    link: "/blood-vessels/peripheral-artery-disease",
  },
  {
    title: "Valvular & Structural Disease",
    description: "Conditions affecting the heart valves and structural chambers.",
    image: "/content7.png",
    link: "/heart/valvular-heart-disease",
  },
  {
    title: "Hypertension & Blood Pressure",
    description: "High blood pressure screening, target organ protection and therapy.",
    image: "/content8.jpg",
    link: "/blood-vessels/hypertension",
  },
];

const conditionPairs = [
  [conditionsWeTreatList[0], conditionsWeTreatList[1]],
  [conditionsWeTreatList[2], conditionsWeTreatList[3]],
  [conditionsWeTreatList[4], conditionsWeTreatList[5]],
];

const heartSymptomsCol1 = [
  { name: "Chest pain or pressure", link: "/symptom/chest-pain" },
  { name: "Shortness of breath", link: "/symptom/shortness-of-breath" },
  { name: "Heart palpitations", link: "/symptom/palpitations" },
  { name: "Constant headaches", link: "/symptom/headaches" },
];

const heartSymptomsCol2 = [
  { name: "Dizziness", link: "/symptom/dizziness" },
  { name: "Fainting", link: "/symptom/dizziness-and-fainting" },
  { name: "Unusual fatigue", link: "/symptom/fatigue" },
  { name: "High blood pressure", link: "/blood-vessels/hypertension" },
];

const allHeartSymptoms = [...heartSymptomsCol1, ...heartSymptomsCol2];

const vascularSymptomsCol1 = [
  { name: "Leg pain when walking", link: "/symptom/leg-pain-when-walking" },
  { name: "Leg swelling", link: "/symptom/leg-swelling" },
  { name: "Cold feet or hands", link: "/symptom/cold-feet-or-hands" },
];

const vascularSymptomsCol2 = [
  { name: "Numbness or weakness", link: "/symptom/numbness-or-weakness" },
  { name: "Changes in skin color", link: "/symptom/changes-in-skin-color" },
  { name: "Leg heaviness", link: "/symptom/leg-heaviness-and-aching" },
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

export default function HomeClient() {
  const [activeTab, setActiveTab] = useState("heart");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [desktopSlide, setDesktopSlide] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState("heart");
  const desktopCarouselRef = useRef(null);
  const mobileCarouselRef = useRef(null);
  const heroRef = useRef(null);
  const [showBottomBar, setShowBottomBar] = useState(false);

  // Show bottom action bar only after scrolling past the Hero section
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroRect = heroRef.current.getBoundingClientRect();
      // Show bottom bar when bottom of hero section scrolls past top of viewport
      setShowBottomBar(heroRect.bottom <= 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop 1-Row Carousel Handlers
  const scrollDesktopToIndex = (index) => {
    if (!desktopCarouselRef.current) return;
    const container = desktopCarouselRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;
    const targetScroll = (index / (conditionsWeTreatList.length - 1)) * maxScroll;
    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
    setDesktopSlide(index);
  };

  const handleDesktopPrev = () => {
    const newIndex = Math.max(0, desktopSlide - 1);
    scrollDesktopToIndex(newIndex);
  };

  const handleDesktopNext = () => {
    const newIndex = Math.min(conditionsWeTreatList.length - 1, desktopSlide + 1);
    scrollDesktopToIndex(newIndex);
  };

  const handleDesktopScroll = () => {
    if (!desktopCarouselRef.current) return;
    const container = desktopCarouselRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;
    const progress = Math.min(1, Math.max(0, scrollLeft / maxScroll));
    const index = Math.round(progress * (conditionsWeTreatList.length - 1));
    setDesktopSlide(index);
  };

  // Mobile 2-Row Slider Handlers
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
      {/* 1. HERO SECTION: CINEMATIC SPLIT (DESKTOP) & SEAMLESS SHADOW OVERLAY (MOBILE) */}
      <section
        ref={heroRef}
        className="relative bg-slate-950 lg:bg-gradient-to-br lg:from-slate-900 lg:via-blue-950 lg:to-sky-950 text-white pt-12 sm:pt-16 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden"
      >
        {/* Ambient Glows */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Full-bleed video background on mobile with seamless shadow & opacity (aimshealthcare style) */}
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
          {/* Base darkening overlay across mobile video */}
          <div className="absolute inset-0 bg-slate-950/30 pointer-events-none" />
          {/* Top vignette for navbar */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/60 to-transparent pointer-events-none" />
          {/* Bottom gradient: smoothly darkens behind headline and buttons */}
          <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Desktop Left Column: Video Card (hidden on mobile, uses full-bleed mobile video above) */}
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

            {/* Content: Overlaid directly on mobile shadow gradient, Right Column on Desktop */}
            <div className="relative z-10 pt-40 sm:pt-48 lg:pt-0 lg:col-span-6 flex flex-col items-center text-center w-full">
              {/* Hero Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight text-white text-center drop-shadow-md">
                Expert Heart Care, Centered Around You
              </h1>

              {/* Subtitle / Approach */}
              <p className="mt-4 sm:mt-6 text-slate-200 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed text-center mx-auto drop-shadow-sm">
                we deliver comprehensive care through{" "}
                <span className="font-bold text-sky-300">early detection</span>,{" "}
                <span className="font-bold text-sky-300">prevention</span>,{" "}
                <span className="font-bold text-sky-300">minimally invasive treatment</span>, and{" "}
                <span className="font-bold text-sky-300">specialist second opinion</span>.
              </p>

              {/* Action CTA Buttons */}
              <div className="w-full pt-7 sm:pt-9">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 font-bold rounded-2xl text-slate-900 bg-sky-200 hover:bg-sky-100 transition-all duration-300 shadow-lg shadow-sky-500/20 hover:scale-105 text-sm sm:text-base cursor-pointer text-center whitespace-nowrap shrink-0"
                  >
                    <Calendar className="mr-2.5 h-5 w-5 text-slate-900 shrink-0" />
                    <span>Request Appointment</span>
                  </Link>

                  {/* Inline on phone: Book through Healow & Call Us */}
                  <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
                    <a
                      href="https://healow.com/apps/provider/mohamed-almahmoud-2103459"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-6 py-3.5 sm:py-4 font-bold rounded-2xl text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 shadow-md hover:scale-105 text-xs sm:text-sm md:text-base cursor-pointer text-center whitespace-nowrap shrink-0"
                    >
                      <span>Book through Healow</span>
                    </a>

                    <a
                      href="tel:+12813581950"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-3 sm:px-6 py-3.5 sm:py-4 font-bold rounded-2xl text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 shadow-md hover:scale-105 text-xs sm:text-sm md:text-base cursor-pointer text-center whitespace-nowrap shrink-0"
                    >
                      <Phone className="mr-1.5 sm:mr-2.5 h-4 sm:h-5 w-4 sm:w-5 text-sky-300 shrink-0" />
                      <span>Call Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TREATMENT: DIAGNOSIS TO PERSONALIZED TREATMENT PLAN SECTION */}
      <section className="bg-white text-slate-900 py-20 overflow-hidden relative border-t border-slate-200/80">
        {/* Soft subtle ambient background glow */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-sky-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Main Title & Overview */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2240] tracking-tight leading-tight">
              Finding the{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 bg-clip-text text-transparent font-black">
                Right Treatment
              </span>{" "}
              Starts with the{" "}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 bg-clip-text text-transparent font-black">
                Right Diagnosis
              </span>
            </h2>

            {/* Contrasting Approach: Stacked on Mobile, Inline (2 Columns) on PC */}
            <div className="max-w-xl sm:max-w-3xl mx-auto space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 pt-3 sm:pt-4 text-left">
              {/* Card 1: We focus on (outside box) -> [ Personal Evaluation ✓ ] */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-xs sm:text-sm mb-8 font-extrabold uppercase tracking-wider text-blue-600 shrink-0">
                  We focus on
                </span>
                <div className="flex-1 bg-blue-50/70 border border-blue-200/80 rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-xs flex items-center justify-between gap-3 transition-colors hover:border-blue-300">
                  <span className="text-blue-950 font-bold text-xs sm:text-sm md:text-base tracking-tight">
                    Personal Evaluation
                  </span>
                  <span className="text-base sm:text-lg text-emerald-600 shrink-0 font-black">
                    ✓
                  </span>
                </div>
              </div>

              {/* Card 2: Rather than (outside box) -> [ One-Size-Fits-All ❌ ] */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="text-xs sm:text-sm mb-8 font-extrabold uppercase tracking-wider text-slate-500 shrink-0">
                  Rather than
                </span>
                <div className="flex-1 bg-rose-50/70 border border-rose-200/80 rounded-2xl px-3.5 sm:px-4 py-2.5 sm:py-3 shadow-xs flex items-center justify-between gap-3 transition-colors hover:border-rose-300">
                  <span className="text-rose-950 font-bold text-xs sm:text-sm md:text-base tracking-tight">
                    One-Size-Fits-All
                  </span>
                  <span className="text-base sm:text-lg text-rose-600 shrink-0 font-bold">
                    ❌
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 1: Clinical Assessment */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 border-b border-slate-200 pb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-600/20 shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2240]">
                  You&apos;re heard
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1">
                  Your Symptoms, concerns, and health history come first
                </p>
              </div>
            </div>

            {/* Single Border Container */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {[
                {
                  title: "Medical history",
                  desc: "Detailed review of personal and family cardiac conditions.",
                },
                {
                  title: "Physical examination",
                  desc: "Targeted cardiovascular & vascular clinical exam.",
                },
                {
                  title: "Review of previous investigations",
                  desc: "In-depth review of past ECGs, labs, and imaging.",
                },
                {
                  title: "Assessment of risk factors",
                  desc: "Cardiovascular risk profiling and preventative analysis.",
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

          {/* Sub-section 2: Targeted Diagnostic Testing */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-2">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-600/20 shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B2240]">
                    We evaluate
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-1">
                    A focused cardiovascular assessment helps identify the cause
                  </p>
                </div>
              </div>
            </div>

            {/* Diagnostic Tests: Image on top, Title only in bottom area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {diagnosticTests.map((test, idx) => (
                <div
                  key={idx}
                  className={`group bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-blue-400/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md flex-col justify-between ${
                    idx >= 3 ? "hidden sm:flex" : "flex"
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

              {/* 6th Card: And more, when clinically appropriate (visible on phone and PC) */}
              <div className="group bg-gradient-to-br from-blue-50 via-sky-50 to-slate-50 border border-blue-200/80 hover:border-blue-400/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-center text-center sm:text-left transition-all duration-300 shadow-xs hover:shadow-md">
                <div className="space-y-2">
                  <h4 className="font-bold text-[#0B2240] text-base sm:text-lg leading-snug group-hover:text-blue-600 transition-colors">
                    And more, when clinically appropriate
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    We use additional diagnostic tools based on your symptoms, clinical findings, and individual risk profile.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section 3: Personalized Treatment Plan */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 border-b border-slate-200 pb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-600/20 shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2240]">
                  Personalized plan
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1">
                  Your treatment plan is tailored to your long-term health
                </p>
              </div>
            </div>

            {/* Progression Stages without boxes */}
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

            {/* Quote Box: Title removed, quote only */}
            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50 border border-blue-100 p-6 sm:p-8 rounded-3xl mt-8 shadow-xs text-center sm:text-left">
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                &ldquo;Not every patient needs advanced procedures. Our goal is to recommend the{" "}
                <span className="bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent font-bold not-italic">
                  least invasive treatment
                </span>{" "}
                that can provide the{" "}
                <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent font-bold not-italic">
                  best possible outcome
                </span>{" "}
                for your specific condition.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* 4. DOCTOR: DOCTOR PROFILE, BOARD CERTIFICATIONS, EDUCATION & BIO */}
      <section
        id="doctor-profile"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-12 shadow-xl shadow-blue-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Photo on Left */}
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
                  {/* Doctor Title Overlay (ON THE IMAGE ONLY ON PHONE VIEW) */}
                  <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="sm:hidden absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/20 shadow-xl text-center">
                    <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight">
                      <div>Dr. Mohamed Faher Almahmoud</div>
                      <div className="text-blue-600 text-[11px] font-bold mt-0.5 tracking-tight">
                        MD, MS, RPVI, CBCCT, FACC, FSCAI
                      </div>
                    </h3>
                    <p className="text-blue-600 text-[11px] font-bold mt-1">
                      Interventional &amp; Structural Cardiologist
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Doctor Title, Board Certifications, Education & Fellowships */}
            <div className="lg:col-span-7 space-y-6">
              <div className="hidden sm:block">
                <div className="inline-flex items-center space-x-2 text-blue-600 text-xs font-extrabold uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 mb-3">
                  <GraduationCap className="h-4 w-4" />
                  <span>Meet Your Cardiologist</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  <div>Dr. Mohamed Faher Almahmoud</div>
                  <div className="text-blue-600 text-xl lg:text-2xl font-bold mt-1 tracking-tight">
                    MD, MS, RPVI, CBCCT, FACC, FSCAI
                  </div>
                </h2>
                <p className="text-blue-600 font-bold text-sm mt-1">
                  Interventional &amp; Structural Cardiologist
                </p>
              </div>

              {/* Board Certification Badges (7 Items) */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span>Board Certifications</span>
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

              {/* Hospital Privileges Card */}
              <div className="pt-2">
                {/* Hospital Privileges */}
                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <Building2 className="h-4 w-4 text-blue-600" />
                    <span>Hospital Privileges</span>
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

              {/* Action Buttons: Learn More & Google Scholar */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md shadow-blue-600/25 transition-all duration-300 hover:scale-[1.02] active:scale-100 text-center"
                >
                  <span>Learn more about Dr. Almahmoud</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>

                <a
                  href="https://scholar.google.com/citations?hl=en&user=Zz9JBy4AAAAJ&view_op=list_works&sortby=pubdate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02] active:scale-100 text-center group"
                >
                  <BookOpen className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>Google Scholar Publications</span>
                  <ExternalLink className="h-3.5 w-3.5 text-blue-500 opacity-75" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* 3. REVIEWS: GOOGLE MAPS PATIENT REVIEWS & TESTIMONIALS SECTION */}
      <section className="bg-slate-200/50 py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden">
            {/* Left Summary Box */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest">
               what patients say about dr.almahmoud

              </span>

              {/* View on Google Maps Pill Button */}
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
                  <span>View on Google Maps</span>
                  <span className="text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              </div>

              {/* Score Display */}
              <div className="space-y-1">
                <h3 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
                  5.0 / 5
                </h3>
                <p className="text-sm font-bold text-slate-700">
                  Google Maps Verified Rating
                </p>
                <p className="text-xs text-blue-600 font-semibold">
                  178+ verified patient reviews
                </p>
              </div>

              {/* Get Immediate Info / Book Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 hover:from-blue-700 hover:to-sky-500 text-white font-extrabold text-sm sm:text-base rounded-2xl transition-all shadow-lg shadow-blue-600/30 hover-lift"
                >
                  Contact page
                </Link>
              </div>
            </div>

            {/* Right Side: Animated Dual-Column Auto-Scrolling Vertical Marquee */}
            <div className="lg:col-span-7 relative h-[480px] overflow-hidden pause-on-hover rounded-2xl bg-slate-50/60 p-4 border border-slate-100">
              {/* Fade Gradients top & bottom for smooth infinite scroll effect */}
              <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                {/* Column 1 Scrolling UP */}
                <div className="flex flex-col space-y-4 animate-marquee-vertical">
                  {[
                    ...googleReviewsList.slice(0, 6),
                    ...googleReviewsList.slice(0, 6),
                  ].map((review, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-xs space-y-3 shrink-0"
                    >
                      <div className="flex text-amber-400 text-sm">
                        {[...Array(review.stars)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <p className="text-slate-700 text-xs leading-relaxed font-normal">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-xs">
                            {review.author}
                          </h4>
                          <p className="text-[10px] text-slate-400 font-medium">
                            {review.badge}
                          </p>
                        </div>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 2 Scrolling DOWN */}
                <div className="hidden sm:flex flex-col space-y-4 animate-marquee-vertical-reverse">
                  {[
                    ...googleReviewsList.slice(6, 12),
                    ...googleReviewsList.slice(6, 12),
                  ].map((review, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-xs space-y-3 shrink-0"
                    >
                      <div className="flex text-amber-400 text-sm">
                        {[...Array(review.stars)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <p className="text-slate-700 text-xs leading-relaxed font-normal">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-xs">
                            {review.author}
                          </h4>
                          <p className="text-[10px] text-slate-400 font-medium">
                            {review.badge}
                          </p>
                        </div>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 5. INSURANCE: ACCEPTED INSURANCE & COVERAGE SECTION - FULL WIDTH AUTOPLAY SLIDER */}
      <section
        id="insurance"
        className="w-full py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white scroll-mt-24 relative overflow-hidden border-y border-blue-900/40"
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-10 sm:mb-14 space-y-3">
         
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Insurance Plans We Accept
          </h2>
         
        </div>

        {/* Full-Width Autoplay Marquee Slider */}
        <div className="w-full relative overflow-hidden pause-on-hover py-4 space-y-4 sm:space-y-6">
          {/* Row 1: Running Left */}
          <div className="flex w-max space-x-4 sm:space-x-6 animate-marquee-horizontal">
            {[
              ...insurancePartners.slice(0, 7),
              ...insurancePartners.slice(0, 7),
              ...insurancePartners.slice(0, 7),
              ...insurancePartners.slice(0, 7),
            ].map((partner, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex items-center justify-center bg-white/95 hover:bg-white rounded-2xl px-6 py-3 h-20 sm:h-24 w-48 sm:w-56 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-sky-500/20 hover:scale-105 border border-white/40 group shrink-0 cursor-default"
                title={partner.name}
              >
                <div className="relative w-full h-full flex items-center justify-center p-2">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={70}
                    unoptimized
                    className="max-h-12 sm:max-h-14 max-w-full w-auto object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Running Right (Reverse) */}
          <div className="flex w-max space-x-4 sm:space-x-6 animate-marquee-horizontal-reverse">
            {[
              ...insurancePartners.slice(7),
              ...insurancePartners.slice(7),
              ...insurancePartners.slice(7),
              ...insurancePartners.slice(7),
            ].map((partner, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex items-center justify-center bg-white/95 hover:bg-white rounded-2xl px-6 py-3 h-20 sm:h-24 w-48 sm:w-56 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-sky-500/20 hover:scale-105 border border-white/40 group shrink-0 cursor-default"
                title={partner.name}
              >
                <div className="relative w-full h-full flex items-center justify-center p-2">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={70}
                    unoptimized
                    className="max-h-12 sm:max-h-14 max-w-full w-auto object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10 sm:mt-12">
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">
                Don&apos;t see your specific plan listed?
              </h4>
            </div>

            <a
              href="tel:+12813581950"
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-sky-300 hover:bg-white text-blue-950 font-extrabold text-sm rounded-2xl transition-all shadow-lg shadow-sky-400/20 hover:scale-105 shrink-0 cursor-pointer"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Verify Your Insurance</span>
            </a>
          </div>
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
            Conditions We Treat
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
              disabled={desktopSlide === 0}
              aria-label="Previous condition"
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-300 disabled:opacity-25 disabled:pointer-events-none transition-all cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Desktop Right Arrow Button */}
            <button
              type="button"
              onClick={handleDesktopNext}
              disabled={desktopSlide >= conditionsWeTreatList.length - 1}
              aria-label="Next condition"
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
                <div
                  key={idx}
                  className="snap-start shrink-0 w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
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

                  {/* Circular Action Arrow Button */}
                  <div className="flex items-center justify-start mt-5 pt-1">
                    <Link
                      href={item.link}
                      aria-label={`Learn more about ${item.title}`}
                      className="w-9 h-9 rounded-full border border-sky-300 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition-all duration-300 shadow-2xs"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Pagination Dots (6 dots) */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {conditionsWeTreatList.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollDesktopToIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
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
                    <div
                      key={itemIdx}
                      className="bg-white border border-slate-100 rounded-3xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group"
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

                      <div className="flex items-center justify-end mt-3 pt-1">
                        <Link
                          href={item.link}
                          aria-label={`Learn more about ${item.title}`}
                          className="w-8 h-8 rounded-full border border-sky-300 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition-all duration-300 shadow-2xs"
                        >
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
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
                  aria-label={`Go to slide ${idx + 1}`}
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

      {/* 7. SYMPTOMS: SYMPTOMS YOU SHOULDN'T IGNORE */}
      <section
        id="symptoms-overview"
        className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
          <div className="mb-6 sm:mb-8 text-center sm:text-left">
           
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2240] tracking-tight">
             EXPERIENCING SOMETHING CONCERNING?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Find the symptoms that match what you&apos;re experiencing and learn more about your next steps.
            </p>
          </div>

          {/* DESKTOP VIEW (Two side-by-side cards with 2-column pill grids) */}
          <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8">
            {/* 1. Heart & Blood Pressure Symptoms Card */}
            <div className="bg-[#FFF6F4]/90 border border-rose-100/90 rounded-3xl p-6 lg:p-7 shadow-xs">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-transparent text-rose-500 flex items-center justify-center shrink-0">
                  <HeartPulseIcon className="w-6 h-6" />
                </div>
                <h4 className="text-base lg:text-lg font-bold text-[#0B2240]">
                  Heart & Blood Pressure Symptoms
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Column 1 */}
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

                {/* Column 2 */}
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

            {/* 2. Vascular Symptoms Card */}
            <div className="bg-[#F0F9FF]/90 border border-sky-100/90 rounded-3xl p-6 lg:p-7 shadow-xs">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-transparent text-sky-600 flex items-center justify-center shrink-0">
                  <VascularTreeIcon className="w-6 h-6" />
                </div>
                <h4 className="text-base lg:text-lg font-bold text-[#0B2240]">
                  Vascular Symptoms
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Column 1 */}
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

                {/* Column 2 */}
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

          {/* MOBILE VIEW (Accordion with collapsible sections matching phone screenshot) */}
          <div className="block md:hidden space-y-3.5">
            {/* Mobile Accordion 1: Heart & Blood Pressure */}
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
                    Heart & Blood Pressure Symptoms
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

            {/* Mobile Accordion 2: Vascular Symptoms */}
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
                    Vascular Symptoms
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

      {/* 8. FAQS: FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
           Your heart health: Questions often asked
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

        {/* FAQ Heart Care Link */}
        <div className="mt-12 text-center">
          <Link
            href="/heart-care"
            className="inline-flex items-center space-x-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-2xl transition-all shadow-md hover:scale-[1.02]"
          >
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Fixed Bottom Action Bar: Call Us (Left 30%) + 2 Appointment Buttons in flex-col (Right 70%) - Mobile Only */}
      <aside
        aria-label="Quick appointment and contact actions"
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/80 shadow-[0_-10px_30px_rgba(0,0,0,0.6)] px-3 py-2 sm:py-2.5 transition-all duration-300 ease-in-out ${
          showBottomBar
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-xl mx-auto flex items-stretch gap-2 sm:gap-3">
          {/* Left Side: Call Us (30% width, Brand Blue, 1 inline button spanning full height) */}
          <a
            href="tel:+12813581950"
            className="w-[30%] flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-md shadow-blue-600/30 border border-blue-400/30 text-center active:scale-95 hover:scale-[1.01]"
          >
            <PhoneCall className="h-5 w-5 text-white shrink-0" />
            <span className="text-xs sm:text-sm font-extrabold tracking-tight text-white">Call Us</span>
          </a>

          {/* Right Side: 2 Buttons in Flex Column (70% width) */}
          <div className="w-[70%] flex flex-col gap-1.5 justify-center">
            {/* 1. Request Appointment (Website Royal Blue Gradient CTA) */}
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 hover:from-blue-700 hover:to-sky-500 text-white font-black rounded-xl transition-all shadow-md shadow-blue-600/25 text-center text-xs sm:text-sm active:scale-95 hover:scale-[1.01]"
            >
              <Stethoscope className="h-4 w-4 text-sky-200 shrink-0" />
              <span className="truncate font-extrabold text-white">Request Appointment</span>
            </Link>

            {/* 2. Book through Healow (Complementary Glass Navy CTA) */}
            <a
              href="https://healow.com/apps/provider/mohamed-almahmoud-2103459"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-2 bg-slate-900/90 hover:bg-slate-800 border border-blue-400/30 text-sky-100 hover:text-white font-bold rounded-xl transition-all text-center text-[11px] sm:text-xs active:scale-95"
            >
              <Calendar className="h-3.5 w-3.5 text-sky-300 shrink-0" />
              <span className="truncate">Book through Healow</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
