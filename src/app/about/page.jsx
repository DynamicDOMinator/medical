import Link from "next/link";
import Image from "next/image";
import ReviewsSlider from "@/components/ReviewsSlider";
import PatientGuidanceAccordion from "@/components/PatientGuidanceAccordion";
import {
  Award,
  ArrowRight,
  GraduationCap,
  Building2,
  CheckCircle2,
  MapPin,
  Phone,
  Clock,
  Navigation,
  Star,
  ExternalLink,
  Quote,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export const metadata = {
  title: "About Dr. Mohamed Faher Almahmoud | PulseCare Cardiology",
  description:
    "Learn about Dr. Mohamed Faher Almahmoud M.D., F.A.C.C. — Board-certified cardiologist specializing in general & interventional cardiology, coronary interventions, structural heart care, and peripheral vascular disease.",
};

const approachPoints = [
  {
    title: "We look at the whole picture.",
    desc: "We consider your symptoms, medical history, lifestyle, risk factors, and test results—not just one finding.",
  },
  {
    title: "We focus on prevention.",
    desc: "Identifying cardiovascular risk early can help prevent disease before it becomes a major problem.",
  },
  {
    title: "We test with purpose.",
    desc: "We use targeted, individualized testing and avoid unnecessary procedures whenever possible.",
  },
  {
    title: "We choose less invasive options when appropriate.",
    desc: "When an intervention is needed, we consider minimally invasive approaches whenever they are suitable.",
  },
  {
    title: "We stay involved over time.",
    desc: "Your cardiovascular needs can change, so we continue to monitor your health and adjust your care when needed.",
  },
  {
    title: "We listen and explain.",
    desc: "Your questions, preferences, and goals are an important part of every decision.",
  },
  {
    title: "We are there when you need us.",
    desc: "Concerning or urgent symptoms deserve timely assessment and appropriate attention.",
  },
];

const patientGuidancePoints = [
  {
    title: "No concern is too small.",
    desc: "If something is worrying you, we want to hear about it.",
  },
  {
    title: "Small changes can matter.",
    desc: "New fatigue, shortness of breath, palpitations, or a change in your ability to exercise are worth discussing.",
  },
  {
    title: "Be open with us.",
    desc: "Sharing your medications, side effects, lifestyle challenges, and concerns helps us build a plan that works for your life.",
  },
  {
    title: "Bring your previous records.",
    desc: "Earlier tests and reports can help us understand the bigger picture and avoid unnecessary repetition.",
  },
  {
    title: "An abnormal test does not always mean a procedure.",
    desc: "Many cardiovascular conditions can be managed effectively with medication, lifestyle changes, and monitoring.",
  },
  {
    title: "A normal test is not the end of prevention.",
    desc: "Protecting your heart is an ongoing process, even when everything looks reassuring today.",
  },
  {
    title: "Your goals matter.",
    desc: "Your care should reflect what is important to you—not just what appears on a test result.",
  },
];

const googleReviews = [
  {
    name: "Jasmin V.",
    badge: "Verified Patient",
    date: "2 months ago",
    rating: 5,
    text: "Dr. Almahmoud has been a source of reassurance during some difficult moments. He has a rare combination of expertise and genuine compassion. He takes the time to listen, never makes you feel rushed, and creates an environment where patients feel safe and supported. I am incredibly grateful for his care. He is an exceptional physician.",
  },
  {
    name: "Jamie Barnett",
    badge: "5 reviews",
    date: "3 months ago",
    rating: 5,
    text: "Absolutely love Dr. Almahmoud! He listens to everything you say, addresses all your concerns, isn't pushy with procedures, and follows up with you when you do have procedures. Was just hospitalized last week and he personally called me to check in.",
  },
  {
    name: "Bonnie Drones",
    badge: "Local Guide · 17 reviews",
    date: "1 month ago",
    rating: 5,
    text: "Dr. Mohamed is the BEST Doctor around, he gave me my life back with the procedure he did. I can't thank him enough 😊 He's a doctor who listens to what your concerns are and comes to a conclusion.",
  },
  {
    name: "Kathy Savell",
    badge: "Verified Patient",
    date: "1 month ago",
    rating: 5,
    text: "I am 73, this is the most kind and considerate Dr. I have ever been associated with. When he makes his rounds at the hospital and sees my name as a patient he will come find me to see if there is anything I need or any advice he can offer.",
  },
  {
    name: "Patient Review",
    badge: "Google Review",
    date: "3 months ago",
    rating: 5,
    text: "Dr. Almahmoud has a unique manner in care that upon first meeting you feel like you are with a physician that is willing to adapt his expertise to the patient rather than a physician who demands the patient to adapt.",
  },
];

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Mohamed+Faher+Almahmoud,+M.D.,+F.A.C.C/@30.0510449,-95.2432324,17z/data=!3m1!5s0x8640b2b3bb230983:0xd5d65ccbea669bd1!4m8!3m7!1s0x8640b30fdf4f3879:0x9c8238f6e7902f2b!8m2!3d30.0510449!4d-95.2406575!9m1!1b1!16s%2Fg%2F11qng1wk14";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=2000&q=80"
            alt="Dr Almahmoud About Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-blue-950/60 to-slate-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            About Dr. Mohamed Faher Almahmoud
          </h1>
          <p className="mt-4 text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            M.D., F.A.C.C. — Board-Certified Specialist in General &
            Interventional Cardiology, Peripheral Vascular Disease, and
            Structural Heart Care.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {/* Profile Card */}
        <div className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Doctor Photo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-blue-100 via-sky-50 to-slate-100 p-2 border border-blue-200/80 shadow-lg">
                <div className="relative h-96 sm:h-[480px] w-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/doc-img.png"
                    alt="Dr. Mohamed Faher Almahmoud M.D., F.A.C.C."
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Doctor Title Overlay (ON THE IMAGE ONLY ON PHONE VIEW) */}
                  <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="sm:hidden absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/20 shadow-xl text-center">
                    <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight">
                      <div>Dr. Mohamed Faher Almahmoud</div>
                      <div className="text-blue-600 text-xs font-bold mt-0.5">
                        M.D., F.A.C.C.
                      </div>
                    </h3>
                    <p className="text-blue-600 text-[11px] font-bold mt-1">
                      Cardiologist & Interventional Vascular Specialist
                    </p>
                    <p className="text-slate-600 text-[10.5px] font-semibold mt-0.5">
                      Practicing at TCA
                    </p>
                  </div>
                </div>
              </div>

              {/* 6 Board Certifications */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span>Board Certifications</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    "Internal Medicine",
                    "Cardiovascular Disease",
                    "Nuclear Cardiology",
                    "Echocardiography",
                    "Cardiac CT",
                    "RPVI (Vascular)",
                  ].map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 bg-white px-3 py-2 rounded-xl border border-blue-100 font-semibold text-slate-700"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Full Biography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="hidden sm:block">
                <h2 className="text-3xl font-extrabold text-slate-900">
                  <div>Dr. Mohamed Faher Almahmoud</div>
                  <div className="text-blue-600 text-2xl font-bold mt-1">
                    M.D., F.A.C.C.
                  </div>
                </h2>
                <p className="text-blue-600 font-bold text-sm mt-1">
                  Cardiologist & Interventional Vascular Specialist
                </p>
                <p className="text-slate-600 font-semibold text-sm mt-0.5">
                  Practicing at TCA
                </p>
              </div>

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
                  patients with acute heart failure and cardiogenic shock.
                </p>
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="text-xs font-semibold text-blue-900">
                    Dr. Almahmoud loves to spend his free time playing sports
                    and spending time with his family.
                  </p>
                </div>
              </div>

              {/* Education & Fellowships */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                    <span>Medical Education</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li>• University of Aleppo</li>
                    <li>• American University of Beirut</li>
                    <li>• SUNY Downstate Medical Center</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <Building2 className="h-4 w-4 text-blue-600" />
                    <span>Fellowships</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li>• Univ. of Texas Medical Branch (UTMB), Galveston</li>
                    <li>• Med. Univ. of South Carolina (MUSC), Charleston</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1 Header Banner (Standalone with colored background, outside white parent container) */}
        <div className="bg-gradient-to-br from-blue-50/80 via-sky-50/40 to-slate-50 border border-blue-100/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-3">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-tight">
            We believe great cardiovascular care starts before a serious problem develops.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our approach is built around prevention, early detection, and personalized care—so you are not simply treated for a diagnosis, but cared for as a whole person.
          </p>
        </div>

        {/* Section 1: Philosophy / Care Approach ("What sets our approach apart") */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              What sets our approach apart:
            </h3>
            <PatientGuidanceAccordion points={approachPoints} />
          </div>

          {/* Long-term partnership callout */}
          <div className="space-y-2 pt-1">
            <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
              More than a visit. A long-term partnership.
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>Our goal is to be your cardiovascular partner—not simply a clinic you visit when something goes wrong.</strong> We are here to help you understand your heart health, make informed decisions, and protect your cardiovascular health for the years ahead.
            </p>
          </div>
        </div>

        {/* Section 2 Header Banner (Standalone with colored background, outside white parent container) */}
        <div className="bg-gradient-to-br from-blue-50/80 via-sky-50/40 to-slate-50 border border-blue-100/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-3">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-tight">
            You don&apos;t have to wait until something feels seriously wrong to take care of your heart.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Early evaluation, prevention, and regular follow-up can make a meaningful difference in protecting your cardiovascular health.
          </p>
        </div>

        {/* Section 2: Patient Guidance ("A few things we want every patient to know") */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              A few things we want every patient to know:
            </h3>
            <PatientGuidanceAccordion points={patientGuidancePoints} />
          </div>

          {/* Takeaway Callout */}
          <div className="space-y-2 pt-1">
            <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
              Most importantly, you don&apos;t need to have all the answers before you see us.
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>Our role is to listen, understand your concerns, explain what we find, and help you make informed decisions about your heart health.</strong> We are here to help you understand your risk, explore your options, and build a plan that supports your health over the long term.
            </p>
          </div>
        </div>

        {/* Section 3: Patient Reviews ("Hear it from them" Slider) */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8">
          <ReviewsSlider
            reviews={googleReviews}
            googleMapsUrl={GOOGLE_MAPS_URL}
          />
        </div>

        {/* Section 4: Clinic Location (Cleaned: No subtitle, No badge) */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Clinic Location
              </h2>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0"
            >
              <Navigation className="h-4 w-4" />
              <span>Get Driving Directions</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-start space-x-3.5">
                  <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-md shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Facility Address
                    </h3>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      150 Pine Forest Drive # 102
                      <br />
                      The Woodlands, TX 77384, United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-start space-x-3.5">
                  <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-md shrink-0 mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Contact Lines
                    </h3>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      Main Clinic:{" "}
                      <a href="tel:+12813581950" className="font-semibold text-slate-800 hover:text-blue-600">
                        +1 (281) 358-1950
                      </a>
                      <br />
                      Fax:{" "}
                      <span className="font-semibold text-slate-800">
                        +1 (281) 358-1923
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-start space-x-3.5">
                  <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-md shrink-0 mt-0.5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Hours of Operation
                    </h3>
                    <div className="text-slate-600 text-xs mt-1 space-y-1">
                      <div className="flex justify-between gap-4">
                        <span>Mon – Thu:</span>
                        <span className="font-semibold text-slate-800">
                          8:00 AM – 6:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Friday:</span>
                        <span className="font-semibold text-slate-800">
                          8:00 AM – 1:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Saturday:</span>
                        <span className="font-semibold text-slate-800">
                          9:00 AM – 2:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Sunday:</span>
                        <span className="font-semibold text-slate-800">
                          Closed (Emergency 24/7)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Embedded Google Map iframe */}
            <div className="lg:col-span-7">
              <div className="relative h-80 sm:h-[380px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                <iframe
                  title="Dr. Mohamed Faher Almahmoud Clinic Location Map"
                  src="https://maps.google.com/maps?q=Mohamed+Faher+Almahmoud,+M.D.,+F.A.C.C&ll=30.0510449,-95.2406575&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Request an Appointment
            </h3>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Request an appointment with Dr. Mohamed Faher Almahmoud online for general cardiology, interventional evaluation, or second opinions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-sky-300 hover:bg-white text-blue-950 font-bold rounded-xl transition-all shadow-md text-sm"
            >
              Request an Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://healow.com/apps/provider/mohamed-almahmoud-2103459"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
            >
              Book Online
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
