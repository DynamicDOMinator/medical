"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Activity,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
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
      "Chest pain",
      "Shortness of breath",
      "Palpitations",
      "Dizziness",
      "Fatigue",
    ],
    symptomText:
      "can be caused by several different cardiovascular conditions. Our role is to identify the underlying cause through a careful clinical assessment and targeted diagnostic testing, then recommend the treatment that's most appropriate for your specific condition.",
    conditions: [
      {
        name: "Coronary Artery Disease (CAD)",
        link: "/heart/cad",
        desc: "Complex coronary artery interventions and plaque management.",
        image:
          "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Arrhythmias & Rhythm Disorders",
        link: "/heart/arrhythmias",
        desc: "Atrial fibrillation, electrical disturbances, and Holter monitoring.",
        image:
          "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Valvular & Structural Disease",
        link: "/heart/valvular-heart-disease",
        desc: "Aortic stenosis (TAVR), MitraClip, ASD & PFO closure.",
        image:
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Congestive Heart Failure (CHF)",
        link: "/heart/chf",
        desc: "Advanced heart failure care & mechanical circulatory support.",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
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
      "Lower Limb Swelling",
      "Cold Feet / Numbness",
      "Cramping while Walking",
      "Skin Discoloration",
    ],
    symptomText:
      "can signal underlying arterial blockages or venous reflux disease. Early vascular evaluation and ultrasound screening can prevent major complications.",
    conditions: [
      {
        name: "Venous Insufficiency & Varicose",
        link: "/blood-vessels/venous-disease",
        desc: "Lower limb venous valve management and duplex ultrasound.",
        image:
          "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Peripheral Artery Disease (PAD)",
        link: "/blood-vessels/peripheral-artery-disease",
        desc: "Endovascular intervention for leg arterial blockages.",
        image:
          "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Thromboembolic & DVT Care",
        link: "/blood-vessels/thromboembolic-disease",
        desc: "Minimally invasive catheter procedures for DVT & Pulmonary Embolism.",
        image:
          "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Hypertension & Lipidology",
        link: "/blood-vessels/hypertension",
        desc: "Atherosclerosis prevention, cholesterol & blood pressure control.",
        image:
          "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
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
      "Headaches",
      "Chest Tightness",
      "Shortness of Breath",
      "Visual Changes",
      "Dizziness",
    ],
    symptomText:
      "are common warning indicators of uncontrolled high blood pressure. Precise diagnosis and multi-agent GDMT medication protocols protect long-term cardiovascular health.",
    conditions: [
      {
        name: "Essential & High Blood Pressure",
        link: "/blood-vessels/hypertension",
        desc: "Individualized lifestyle and medical therapies to achieve optimal target blood pressure.",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Resistant & Complex Hypertension",
        link: "/blood-vessels/hypertension",
        desc: "Advanced diagnostic workup and multi-drug regimen optimization for hard-to-control blood pressure.",
        image:
          "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Hyperlipidemia & Lipid Control",
        link: "/blood-vessels/hypertension",
        desc: "Targeted cholesterol management, PCSK9 inhibitors, and cardiovascular risk reduction.",
        image:
          "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Secondary Hypertension Screening",
        link: "/blood-vessels/hypertension",
        desc: "Specialized screening for renovascular, endocrine, and metabolic causes of high blood pressure.",
        image:
          "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      },
    ],
    hubLink: "/blood-vessels/hypertension",
    hubText: "Read Full Hypertension Guide →",
  },
];

const diagnosticTests = [
  {
    name: "ECG",
    desc: "12-lead electrical rhythm tracing & arrhythmia detection.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Echocardiography",
    desc: "3D valve motion, ejection fraction & wall ultrasound.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Stress Testing",
    desc: "Treadmill & nuclear myocardial perfusion evaluation.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Holter Monitoring",
    desc: "Continuous 24–48 hr wearable ECG pulse recording.",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ambulatory Blood Pressure Monitoring",
    desc: "24-hour continuous BP trend & nocturnal profiling.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "CT Coronary Angiography",
    desc: "High-resolution non-invasive coronary calcium & plaque CT.",
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Cardiac MRI",
    desc: "Detailed tissue characterization for cardiomyopathy & scar.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vascular Ultrasound",
    desc: "Arterial & venous duplex color Doppler flow imaging.",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Blood Tests",
    desc: "Cardio-metabolic biomarkers, lipids, troponin & renal profile.",
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80",
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
    items: [
      "Lifestyle changes",
      "Risk factor management",
      "Smoking cessation",
      "Cholesterol control",
    ],
  },
  {
    step: "02",
    icon: Pill,
    iconColor: "text-sky-400",
    title: "Medical Therapy",
    color: "bg-blue-500/10 border-blue-200 text-blue-950",
    badgeColor: "bg-blue-600 text-white",
    items: [
      "Blood pressure treatment",
      "Heart failure medications",
      "Antiarrhythmics",
      "Anticoagulation",
      "Lipid-lowering therapy",
    ],
  },
  {
    step: "03",
    icon: Stethoscope,
    iconColor: "text-indigo-400",
    title: "Minimally Invasive Procedures",
    color: "bg-indigo-500/10 border-indigo-200 text-indigo-950",
    badgeColor: "bg-indigo-600 text-white",
    items: [
      "Coronary angiography",
      "Coronary stenting (PCI)",
      "Pacemaker implantation",
      "Catheter ablation",
    ],
  },
  {
    step: "04",
    icon: Heart,
    iconColor: "text-rose-400",
    title: "Advanced Cardiac Interventions",
    color: "bg-rose-500/10 border-rose-200 text-rose-950",
    badgeColor: "bg-rose-600 text-white",
    items: [
      "Structural heart interventions",
      "Complex coronary interventions",
      "Device therapy",
      "Other specialized procedures",
    ],
  },
];

const boardCertificationsList = [
  "Internal Medicine",
  "Cardiovascular Disease",
  "Nuclear Cardiology",
  "Echocardiography",
  "Cardiac Computed Tomography",
  "Registered Physician in Vascular Interpretation (RPVI)",
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

const faqData = [
  {
    question: "What should I expect during my first cardiology consultation?",
    answer:
      "During your initial visit, Dr. Almahmoud conducts a comprehensive clinical assessment including a thorough review of your medical history, current symptoms, medication list, and lifestyle risk factors. A targeted physical examination will be performed, followed by recommended diagnostic testing tailored specifically to your condition.",
    category: "Consultation & Visits",
  },
  {
    question: "Do I need a physician referral to schedule an appointment?",
    answer:
      "While many insurance plans allow direct booking without a referral, certain HMO or specific networks require a primary care doctor's referral. Our clinic staff will assist in verifying your insurance requirements prior to your visit.",
    category: "Appointments & Insurance",
  },
  {
    question: "What diagnostic tests are performed directly at the clinic?",
    answer:
      "Our practice offers complete in-office diagnostic capabilities, including 12-lead ECG, 3D Echocardiography, Treadmill & Nuclear Stress Testing, 24–48h Holter Monitoring, Ambulatory BP Monitoring, and Peripheral Vascular Duplex Ultrasound.",
    category: "Diagnostic Testing",
  },
  {
    question:
      "How long does recovery take after a minimally invasive procedure like stenting?",
    answer:
      "Most minimally invasive procedures (such as coronary angiography or stenting) are performed via radial artery access (wrist). Patients typically return home the same day or following overnight observation, returning to normal light activities within 48 to 72 hours.",
    category: "Procedures & Interventions",
  },
  {
    question:
      "Can I get a second opinion on a recommended heart procedure or surgery?",
    answer:
      "Yes. Dr. Almahmoud frequently provides expert second opinions for complex coronary artery disease, structural valve decisions (such as TAVR vs surgical replacement), and vascular conditions to ensure patients have total clarity on all conservative and interventional options.",
    category: "Second Opinions",
  },
  {
    question:
      "What should I do if I experience sudden severe chest pain or shortness of breath?",
    answer:
      "If you experience sudden, severe crushing chest pain, pain radiating to your jaw or left arm, severe fainting, or acute shortness of breath, please call 911 or seek immediate emergency hospital emergency care.",
    category: "Emergency Guidance",
  },
];

export default function HomeClient() {
  const [activeTab, setActiveTab] = useState("heart");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const currentCategory = doctorSpecialties.find((c) => c.id === activeTab);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 overflow-hidden">
      {/* 1. HERO SECTION: DR. ALMAHMOUD & CLINIC PORTAL */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            {/* Hero Main Headline */}
            <div className="space-y-6 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Comprehensive <br className="hidden sm:inline" />
                <span className="animated-gradient-text font-black">
                  Heart & Vascular Care
                </span>
              </h1>

              <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
                From prevention and diagnosis to advanced cardiac interventions,
                we provide personalized care for every stage of your
                cardiovascular health.
              </p>

              {/* Action Buttons & Underline Link */}
              <div className="flex flex-col items-center justify-center space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-7 py-4 font-bold rounded-2xl text-blue-950 bg-gradient-to-r from-sky-300 via-sky-200 to-blue-200 hover:from-sky-200 hover:to-white transition-all duration-300 shadow-lg shadow-sky-400/20 hover-lift text-sm sm:text-base"
                  >
                    <Calendar className="mr-2 h-5 w-5 text-blue-950" />
                    Request Appointment
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-7 py-4 font-bold rounded-2xl text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 shadow-md hover-lift text-sm sm:text-base"
                  >
                    Book online
                  </Link>
                </div>

                <a
                  href="#doctor-specialties"
                  className="inline-flex items-center text-sm sm:text-base text-sky-300 hover:text-white font-semibold underline underline-offset-4 transition-colors pt-1"
                >
                  Learn about your Symptoms
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DOCTOR PROFILE, BOARD CERTIFICATIONS, EDUCATION & BIO */}
      <section
        id="doctor-profile"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-12 shadow-xl shadow-blue-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Photo on Left & Board Certifications */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-blue-100 via-sky-50 to-slate-100 p-2 border border-blue-200/80 shadow-lg">
                <div className="relative h-96 sm:h-[480px] w-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/doc-img.png"
                    alt="Dr. Mohamed Faher Almahmoud, M.D., F.A.C.C."
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-blue-100 shadow-lg text-center">
                    <h3 className="font-extrabold text-slate-900 text-base">
                      Dr. Mohamed Faher Almahmoud
                    </h3>
                    <p className="text-blue-600 text-xs font-bold mt-0.5">
                      M.D., F.A.C.C.
                    </p>
                    <p className="text-slate-500 text-[11px] mt-1">
                      Specialist in General & Interventional Cardiology
                    </p>
                  </div>
                </div>
              </div>

              {/* Board Certification Badges (6 Items) */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span>Board Certifications (6)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {boardCertificationsList.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 bg-white px-3 py-2 rounded-xl border border-blue-100 text-xs text-slate-700 font-semibold shadow-2xs"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Full Doctor Biography, Education, Fellowship */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 text-blue-600 text-xs font-extrabold uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 mb-3">
                  <GraduationCap className="h-4 w-4" />
                  <span>Meet Your Cardiologist</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Dr. Mohamed Faher Almahmoud,{" "}
                  <span className="text-blue-600">M.D., F.A.C.C.</span>
                </h2>
                <p className="text-blue-600 font-bold text-sm mt-1">
                  Board-Certified Cardiologist & Interventional Specialist
                </p>
              </div>

              {/* Personal Philosophy Quote */}
              <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border-l-4 border-blue-600 p-4 sm:p-5 rounded-r-2xl text-slate-800 shadow-xs">
                <p className="text-xs font-extrabold text-blue-700 uppercase tracking-wider mb-1">
                  Personal Philosophy
                </p>
                <p className="italic text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                  &ldquo;I believe every patient deserves a clear diagnosis, an
                  understandable treatment plan, and enough time to ask
                  questions.&rdquo;
                </p>
              </div>

              {/* Full Biography Text */}
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Dr. Almahmoud is a board-certified cardiologist specialized in
                  general and interventional cardiology with interest in
                  coronary artery disease, peripheral vascular disease and
                  valvular/structural heart disease.
                </p>
                <p>
                  Dr. Almahmoud has expertise in clinical research with
                  interests in weight loss, atrial fibrillation, heart failure,
                  valvular heart disease, atherosclerosis and hyperlipidemia
                  (high cholesterol). He completed two years of NIH sponsored
                  clinical research fellowship and participated in several
                  landmark clinical trials targeting atherosclerosis and
                  ischemic heart disease.
                </p>
                <p>
                  His expertise includes advanced coronary interventions,
                  peripheral vascular disease and structural/valvular heart
                  disease. Including a variety of minimally invasive
                  trans-catheter procedures for patients with deep venous
                  thrombosis, pulmonary embolism, aortic stenosis (TAVR and
                  aortic valvuloplasty), mitral regurgitation (MitraClip),
                  atrial septal defect (ASD), patent foramen ovale (PFO), and
                  hypertrophic cardiomyopathy (HOCM).
                </p>
                <p>
                  He is also trained on advanced mechanical support devices for
                  patients with acute heart failure and cardiogenic shock.{" "}
                </p>
              </div>

              {/* Education & Fellowships Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Medical Education */}
                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                    <span>Medical Education</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-2 font-medium">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>University of Aleppo</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>American University of Beirut</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>SUNY Downstate Medical Center</span>
                    </li>
                  </ul>
                </div>

                {/* Fellowship */}
                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <Building2 className="h-4 w-4 text-blue-600" />
                    <span>Fellowships</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-2 font-medium">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>
                        University of Texas Medical Branch (UTMB), Galveston
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>
                        Medical University of South Carolina (MUSC), Charleston
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DOCTOR'S SPECIALTIES & CONDITIONS HUB */}
      <section
        id="doctor-specialties"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cardiovascular Care & Specializations
          </h2>
        </div>

        {/* Specialty Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {doctorSpecialties.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center space-x-2 px-5 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-600/25 scale-105"
                    : "bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/80"
                }`}
              >
                <Icon
                  className={`h-4 w-4 ${isActive ? "text-white" : "text-blue-600"}`}
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {currentCategory && (
          <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xl shadow-blue-900/5 transition-all duration-300 animate-fade-in-up">
            {/* Symptoms Intro Section */}
            <div className="bg-gradient-to-br from-blue-50/80 via-sky-50/50 to-slate-50 border border-blue-100 rounded-2xl p-6 mb-8 space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {currentCategory.id === "heart"
                    ? "Many heart conditions share similar symptoms."
                    : currentCategory.id === "vascular"
                      ? "Many vascular conditions share similar symptoms."
                      : "Many blood pressure disorders share similar symptoms."}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium">
                  Common warning indicators include:
                </p>

                {/* Symptom Tags (Stacked under text) */}
                {currentCategory.symptoms && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentCategory.symptoms.map((sym, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1.5 bg-white border border-blue-200 text-blue-800 text-xs font-bold rounded-full shadow-2xs"
                      >
                        <Heart className="mr-1.5 h-3.5 w-3.5 text-blue-600 shrink-0" />
                        {sym}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-slate-700 text-sm leading-relaxed border-t border-blue-100/80 pt-3 font-normal">
                {currentCategory.symptomText}
              </p>
            </div>

            {/* Condition Grid inside Active Specialty */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentCategory.conditions.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:border-blue-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover-lift"
                >
                  <div>
                    {/* Condition Card Image */}
                    {item.image && (
                      <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold rounded-lg">
                          0{idx + 1}
                        </span>
                      </div>
                    )}

                    <div className="p-5 space-y-2">
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      href={item.link}
                      className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-slate-100 group-hover:bg-blue-600 text-slate-700 group-hover:text-white font-bold text-xs rounded-xl transition-all duration-300 shadow-2xs"
                    >
                      <span>Learn more</span>
                      <ChevronRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 4. DIAGNOSIS TO PERSONALIZED TREATMENT PLAN SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white py-20 overflow-hidden relative border-t border-blue-900/60">
        {/* Background glow effects */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Main Title & Overview */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Finding the{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent font-black">
                Right Treatment
              </span>{" "}
              Starts with the{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-300 bg-clip-text text-transparent font-black">
                Right Diagnosis
              </span>
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-normal pt-2">
              Many cardiovascular conditions can cause similar symptoms. Rather
              than using a one-size-fits-all approach, we perform a thorough
              evaluation and recommend only the tests that are appropriate for
              your symptoms and medical history. This allows us to identify the
              underlying cause and create a treatment plan tailored to your
              individual needs.
            </p>
          </div>

          {/* Sub-section 1: Clinical Assessment */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md space-y-6 shadow-xl">
            <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-blue-950 font-black text-lg shadow-md shadow-sky-400/20 shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Clinical Assessment
                </h3>
                <p className="text-xs text-sky-300">
                  Comprehensive initial evaluation & risk factor analysis
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center space-x-2 text-sky-300 font-bold text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-400" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-blue-200 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-section 2: Targeted Diagnostic Testing (With Images Grid) */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-blue-900/80 pb-4 gap-2">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-blue-950 font-black text-lg shadow-md shadow-sky-400/20 shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Targeted Diagnostic Testing
                  </h3>
                  <p className="text-xs text-sky-300">
                    Depending on your condition, this may include:
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {diagnosticTests.map((test, idx) => (
                <div
                  key={idx}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-400/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover-lift flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
                      <Image
                        src={test.image}
                        alt={test.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-sky-500/90 text-blue-950 text-[11px] font-bold rounded-lg shadow-md">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <h4 className="font-bold text-white text-base group-hover:text-sky-300 transition-colors">
                        {test.name}
                      </h4>
                      <p className="text-blue-200 text-xs leading-relaxed">
                        {test.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-section 3: Personalized Treatment Plan (Horizontal Progression Flow) */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 border-b border-blue-900/80 pb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-blue-950 font-black text-lg shadow-md shadow-sky-400/20 shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Personalized Treatment Plan
                </h3>
              </div>
            </div>

            {/* Horizontal Progression Flow Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {treatmentProgressionStages.map((stage, idx) => {
                const StageIcon = stage.icon;
                return (
                  <div key={idx} className="relative flex flex-col h-full">
                    <div
                      className={`h-full bg-white/5 border border-white/10 hover:border-sky-400/50 p-6 rounded-3xl backdrop-blur-md transition-all duration-300 space-y-4 hover-lift flex flex-col justify-between ${stage.color}`}
                    >
                      <div className="space-y-3">
                        <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 w-fit">
                          <StageIcon className={`h-6 w-6 ${stage.iconColor}`} />
                        </div>
                        <h4 className="font-extrabold text-lg text-white">
                          {stage.title}
                        </h4>

                        <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-blue-100">
                          {stage.items.map((item, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Closing Philosophical Callout */}
            <div className="bg-gradient-to-br from-slate-900/90 via-blue-950/90 to-sky-950/90 border border-sky-400/40 p-6 sm:p-8 rounded-3xl mt-8 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 backdrop-blur-xl shadow-2xl">
              <div className="bg-gradient-to-br from-sky-400/20 to-blue-600/20 p-3.5 rounded-2xl shrink-0 border border-sky-400/40 text-sky-300 shadow-md">
                <ShieldCheck className="h-8 w-8 text-sky-400" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-extrabold text-white tracking-wide">
                  Patient-Centered Treatment Philosophy
                </h4>
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed font-normal">
                  &ldquo;Not every patient needs advanced procedures. Our goal
                  is to recommend the{" "}
                  <span className="bg-gradient-to-r from-sky-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent font-bold">
                    least invasive treatment
                  </span>{" "}
                  that will provide the{" "}
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-200 bg-clip-text text-transparent font-bold">
                    best possible outcome
                  </span>{" "}
                  for your specific condition. When more advanced interventions
                  are appropriate, we&apos;ll discuss all available options and
                  help you make an informed decision.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GOOGLE MAPS PATIENT REVIEWS & TESTIMONIALS SECTION */}
      <section className="bg-slate-100/90 py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden">
            {/* Left Summary Box */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest">
                WHAT OUR PATIENTS ARE SAYING?
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
                  Get Immediate Info
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
                        "{review.quote}"
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
                        "{review.quote}"
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

      {/* 6. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Have Clear Answers.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about clinic visits, diagnostic testing,
            treatment options, and patient care with Dr. Almahmoud.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-xs ${
                  isOpen
                    ? "border-blue-500 shadow-md ring-2 ring-blue-500/10"
                    : "border-slate-200/80 hover:border-blue-300"
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between space-x-4 bg-white hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 shrink-0">
                      0{idx + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
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

        {/* FAQ Contact Footer Callout */}
        <div className="mt-12 text-center bg-slate-50 border border-slate-200/80 rounded-2xl p-6 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-extrabold text-slate-900 text-sm">
              Still have questions about your care?
            </h4>
            <p className="text-xs text-slate-500">
              Our clinical desk is ready to answer your specific medical
              questions.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shrink-0 hover-lift"
          >
            <Stethoscope className="h-4 w-4" />
            <span>Ask Dr. Almahmoud</span>
          </Link>
        </div>
      </section>

      {/* 7. APPOINTMENT BOOKING CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Schedule Consultation with Dr. Almahmoud
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                For expert evaluation of coronary artery disease, peripheral
                vascular disease, structural valve conditions, or atrial
                fibrillation.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-sky-300 hover:bg-white text-blue-950 font-extrabold rounded-2xl transition-all shadow-xl shadow-sky-400/20 text-center hover-lift"
              >
                <Stethoscope className="h-5 w-5" />
                <span>Book Appointment</span>
              </Link>
              <a
                href="tel:+18005557857"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all text-center"
              >
                <PhoneCall className="h-5 w-5 text-sky-300" />
                <span>Call Clinic Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
