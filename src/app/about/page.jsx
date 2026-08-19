import Link from "next/link";
import Image from "next/image";
import ReviewsSlider from "@/components/ReviewsSlider";
import PatientGuidanceAccordion from "@/components/PatientGuidanceAccordion";
import BrowseThisPageDrawer from "@/components/BrowseThisPageDrawer";
import ClinicLocationsView from "@/components/ClinicLocationsView";
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
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "About Dr. Mohamed Faher Almahmoud | PulseCare Cardiology",
  description:
    "Learn about Dr. Mohamed Faher Almahmoud MD, MS, RPVI, CBCCT, FACC, FSCAI — Board-certified cardiologist specializing in general & interventional cardiology, coronary interventions, structural heart care, and peripheral vascular disease.",
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

const providerMenuItems = [
  { id: "overview", title: "Dr. Almahmoud" },
  { id: "our-approach", title: "Our Approach" },
  { id: "our-commitment", title: "Our Commitment to You" },
  { id: "hear-from-others", title: "Hear from others" },
  { id: "location", title: "Location" },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Side-Docked Browse this page Menu Drawer */}
      <BrowseThisPageDrawer menuItems={providerMenuItems} />
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
            MD, MS, RPVI, CBCCT, FACC, FSCAI — Board-Certified Specialist in General &amp;
            Interventional Cardiology, Peripheral Vascular Disease, and
            Structural Heart Care.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {/* Profile Card */}
        <div id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-12 shadow-xl scroll-mt-24 sm:scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Doctor Photo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden bg-white p-2 border border-slate-200/90 shadow-lg">
                <div className="relative h-96 sm:h-[480px] w-full rounded-2xl overflow-hidden bg-white">
                  <Image
                    src="/personal.png"
                    alt="Dr. Mohamed Faher Almahmoud MD, MS, RPVI, CBCCT, FACC, FSCAI"
                    fill
                    className="object-cover object-top"
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
                    <p className="text-slate-600 text-[10.5px] font-semibold mt-0.5">
                      Practicing at TCA
                    </p>
                  </div>
                </div>
              </div>

              {/* 7 Board Certifications */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span>Board Certifications (7)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    "Internal Medicine",
                    "Cardiovascular Disease",
                    "Interventional Cardiology",
                    "Nuclear Cardiology",
                    "Echocardiography",
                    "Cardiac CT (CBCCT)",
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

              {/* Hospital Privileges Card */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Building2 className="h-4 w-4 text-blue-600" />
                  <span>Hospital Privileges</span>
                </div>
                <ul className="text-xs text-slate-700 space-y-2 font-medium">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Houston Methodist The Woodlands</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Memorial Hermann The Woodlands</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>HCA Houston Healthcare Kingwood (Kingwood Medical Center)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Memorial Hermann Northeast Hospital</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>HCA Houston Healthcare Northwest (Houston Northwest Hospital)</span>
                  </li>
                </ul>
              </div>

              {/* Google Scholar Citations Button */}
              <a
                href="https://scholar.google.com/citations?hl=en&user=Zz9JBy4AAAAJ&view_op=list_works&sortby=pubdate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200/90 rounded-2xl font-bold text-xs transition-all shadow-xs group"
              >
                <BookOpen className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>Google Scholar Publications &amp; Citations</span>
                <ExternalLink className="h-3.5 w-3.5 text-blue-500 opacity-75" />
              </a>
            </div>

            {/* Right: Full Biography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="hidden sm:block">
                <h2 className="text-3xl font-extrabold text-slate-900">
                  <div>Dr. Mohamed Faher Almahmoud</div>
                  <div className="text-blue-600 text-xl lg:text-2xl font-bold mt-1 tracking-tight">
                    MD, MS, RPVI, CBCCT, FACC, FSCAI
                  </div>
                </h2>
                <p className="text-blue-600 font-bold text-sm mt-1">
                  Interventional &amp; Structural Cardiologist
                </p>
                <p className="text-slate-600 font-semibold text-sm mt-0.5">
                  Practicing at TCA
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Dr. Almahmoud is a board-certified cardiologist specializing in general and interventional cardiology, with a patient-centered approach focused on helping people achieve better heart health and live healthier, more active lives. His clinical interests include coronary artery disease, peripheral vascular disease, and valvular and structural heart disease.
                </p>
                <p>
                  Dr. Almahmoud currently serves as Cardiology Faculty at the University of Houston at Kingwood Medical Center. He also serves as Chair of Cardiology and Director of the Cardiac Catheterization Laboratory at Houston Northwest Hospital, where he is involved in the care of patients with complex cardiovascular conditions and advanced cardiac disease. Previously, he served for two years as Director of Cardiac Rehabilitation at Houston Northwest Hospital, helping patients recover from cardiac events and procedures while developing strategies to improve their long-term cardiovascular health.
                </p>
                <p>
                  With extensive training in both clinical care and cardiovascular research, Dr. Almahmoud brings an evidence-based approach to every patient. He completed two years of an NIH-sponsored clinical research fellowship and was awarded an NIH-sponsored T32 scholarship to complete a Master of Science degree in Clinical and Population Studies at Wake Forest University. His research experience includes participation in several landmark clinical trials focused on atherosclerosis and ischemic heart disease.
                </p>
                <p>
                  Dr. Almahmoud has expertise in advanced minimally invasive cardiovascular procedures, including the treatment of coronary artery disease, peripheral vascular disease, and complex structural and valvular heart conditions. His procedural experience includes transcatheter therapies for deep vein thrombosis and pulmonary embolism, as well as treatments for aortic stenosis (TAVR and aortic valvuloplasty), mitral regurgitation (MitraClip), atrial septal defect (ASD), patent foramen ovale (PFO), and hypertrophic obstructive cardiomyopathy (HOCM).
                </p>
                <p>
                  He is also trained in the use of advanced mechanical circulatory support devices for patients experiencing acute heart failure and cardiogenic shock, allowing him to care for patients with some of the most complex cardiovascular conditions.
                </p>
                <p>
                  In addition to his procedural expertise, Dr. Almahmoud has a strong interest in preventive cardiology and long-term cardiovascular health, including weight management, atrial fibrillation, heart failure, valvular heart disease, atherosclerosis, and high cholesterol. His goal is to combine the latest advances in cardiovascular medicine with individualized care to help each patient better understand their condition and make informed decisions about their health.
                </p>
                <p>
                  Dr. Almahmoud is committed to providing compassionate, comprehensive, and evidence-based cardiovascular care. He believes in taking the time to listen to his patients, explain their condition in understandable terms, and develop a treatment plan tailored to their individual needs and goals.
                </p>
              </div>

              {/* Education & Fellowships */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                    <span>Medical Education</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li>• Wake Forest University School of Medicine (MS)</li>
                    <li>• SUNY Downstate Medical Center</li>
                    <li>• American University of Beirut</li>
                    <li>• University of Aleppo</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <Building2 className="h-4 w-4 text-blue-600" />
                    <span>Fellowships &amp; Faculty</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li>• Univ. of Texas Medical Branch (UTMB), Galveston</li>
                    <li>• Med. Univ. of South Carolina (MUSC), Charleston</li>
                    <li>• Faculty, Univ. of Houston at Kingwood Medical Center</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1 Group (Our Approach) */}
        <div id="our-approach" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-32">
          {/* Section 1 Header Banner (Our Approach) */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white border border-blue-900/60 rounded-3xl p-6 sm:p-10 shadow-xl space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight relative z-10">
              We believe great cardiovascular care starts before a serious problem develops.
            </h2>
            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed relative z-10">
              Our approach is built around{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent font-black">
                prevention, early detection, and personalized care
              </span>
              —so you are not simply treated for a diagnosis, but cared for as a whole person.
            </p>
          </div>

          {/* Section 1: Philosophy / Care Approach (Prevention) */}
          <div id="prevention" className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8 scroll-mt-24 sm:scroll-mt-32">
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
        </div>

        {/* Section 2 Group (Our Commitment to You) */}
        <div id="our-commitment" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-32">
          {/* Section 2 Header Banner (Our Commitment) */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white border border-blue-900/60 rounded-3xl p-6 sm:p-10 shadow-xl space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight relative z-10">
              You don&apos;t have to wait until something feels seriously wrong to take care of your heart.
            </h2>
            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed relative z-10">
              <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent font-bold">
                Early evaluation, prevention, and regular follow-up
              </span>{" "}
              can make a meaningful difference in protecting your cardiovascular health.
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
        </div>

        {/* Section 3: Patient Reviews ("Hear from others" Slider) */}
        <div id="hear-from-others" className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8 scroll-mt-24 sm:scroll-mt-32">
          <ReviewsSlider
            reviews={googleReviews}
            googleMapsUrl={GOOGLE_MAPS_URL}
          />
        </div>

        {/* Section 4: Clinic Locations */}
        <div id="location" className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm space-y-6 scroll-mt-24 sm:scroll-mt-32">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Clinic Locations
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Select a clinic facility below to view address, contact details, consultation times, and Google Maps.
            </p>
          </div>
          <ClinicLocationsView initialClinicId="woodlands" />
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
