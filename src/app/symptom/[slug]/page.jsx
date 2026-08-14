import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Stethoscope,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Activity,
  Calendar,
  ShieldCheck,
  HelpCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { symptomsData } from "../symptomsData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const symptom = symptomsData[slug];
  if (!symptom) return {};

  return {
    title: `${symptom.name} — Medical Causes, Diagnostic Testing & Treatment | Dr. Almahmoud`,
    description: symptom.heroDesc,
  };
}

export async function generateStaticParams() {
  return Object.keys(symptomsData).map((slug) => ({ slug }));
}

export default async function SymptomDetailPage({ params }) {
  const { slug } = await params;
  const symptom = symptomsData[slug];

  if (!symptom) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt={`${symptom.name} Evaluation`}
            fill
            className="object-cover object-center opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/75 to-slate-900/55" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {symptom.name} — Symptoms, Pathophysiology & Diagnostic Workup
            </h1>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-normal">
              {symptom.heroDesc}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-bold rounded-xl shadow-lg transition-all text-sm"
              >
                <Stethoscope className="mr-2 h-4 w-4" />
                Request an Appointment & Book Online
              </Link>
              <a
                href="#diagnostics"
                className="inline-flex items-center px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
              >
                <Activity className="mr-2 h-4 w-4 text-sky-300" />
                View Diagnostic Tests
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
        {/* 2. OVERVIEW & PATHOPHYSIOLOGY */}
        <section className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Understanding {symptom.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {symptom.overview}
              </p>
              {symptom.pathophysiology && (
                <div className="bg-slate-50 border-l-4 border-blue-600 p-4 rounded-r-2xl space-y-2 mt-4">
                  <h4 className="font-extrabold text-slate-900 text-sm flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                    <span>Cardiovascular Pathophysiology</span>
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {symptom.pathophysiology}
                  </p>
                </div>
              )}
            </div>

            {/* Key Clinical Characteristics */}
            {symptom.characteristics && (
              <div className="lg:col-span-5 bg-blue-50/70 border border-blue-100 rounded-2xl p-6 space-y-4">
                <h3 className="font-extrabold text-blue-950 text-base flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Common Symptoms & Triggers</span>
                </h3>
                <ul className="space-y-2.5">
                  {symptom.characteristics.map((char, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* 3. DIFFERENTIAL DIAGNOSIS / ASSOCIATED CONDITIONS */}
        {symptom.associatedConditions && (
          <section className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Associated Cardiovascular & Vascular Conditions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {symptom.associatedConditions.map((cond, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-slate-900 text-base">
                      {cond.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {cond.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. RED FLAGS & WARNING SIGNS */}
        <section className="bg-amber-50/80 border border-amber-200 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-amber-500 p-2.5 rounded-xl text-white shadow-sm shrink-0">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Red Flag Warning Indicators
              </h3>
              <p className="text-amber-800 text-xs sm:text-sm font-medium">
                Seek urgent emergency evaluation if {symptom.name.toLowerCase()} occurs with any of the following:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {symptom.redFlags.map((flag, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-2.5 p-3.5 rounded-xl bg-white/90 border border-amber-200/80 shadow-2xs"
              >
                <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                <span className="text-slate-800 text-xs sm:text-sm font-semibold leading-snug">
                  {flag}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. DIAGNOSTIC TESTS (PUSH PATIENTS TO TEST) */}
        <section id="diagnostics" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Recommended Diagnostic Tests for {symptom.name}
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            {symptom.diagnosticReasoning} Dr. Mohamed Faher Almahmoud utilizes state-of-the-art diagnostic modalities to pinpoint the exact root cause:
          </p>

          {/* 2-COLUMN GRID OF DIAGNOSTIC CARDS WITH INDIVIDUAL IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {symptom.diagnostics.map((diag, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                    <Image
                      src={diag.image}
                      alt={diag.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                    <h3 className="font-extrabold text-slate-900 text-base">
                      {diag.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {diag.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* HIGH IMPACT CTA BANNER FOR DIAGNOSTIC TESTING */}
          <div className="bg-gradient-to-r from-blue-900 to-sky-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 text-center sm:text-left">
              <h4 className="text-xl font-extrabold">
                Get an Accurate Diagnosis for {symptom.name}
              </h4>
              <p className="text-blue-100 text-xs sm:text-sm max-w-xl">
                {symptom.ctaMessage}
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-6 py-3.5 bg-sky-300 hover:bg-white text-blue-950 font-bold rounded-xl transition-all shadow-md text-sm flex items-center space-x-2"
            >
              <Calendar className="h-4 w-4" />
              <span>Schedule Diagnostic Test</span>
            </Link>
          </div>
        </section>

        {/* 6. PREVENTION & LIFESTYLE TIPS */}
        {symptom.preventionTips && (
          <section className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Management & Cardiovascular Health Guidelines
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {symptom.preventionTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80"
                >
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 text-xs sm:text-sm font-semibold leading-relaxed">
                    {tip}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) */}
        {symptom.faqs && (
          <section className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Frequently Asked Questions about {symptom.name}
              </h2>
            </div>

            <div className="space-y-4">
              {symptom.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2"
                >
                  <h3 className="font-extrabold text-slate-900 text-base flex items-center space-x-2">
                    <span className="text-blue-600 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. BOTTOM CTA */}
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Request an Appointment & Book Online
            </h3>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Request an appointment with Dr. Mohamed Faher Almahmoud online for comprehensive evaluation of {symptom.name.toLowerCase()} and advanced cardiac care.
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
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
            >
              Book Online
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Mobile Sticky Bottom CTA */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1 text-left">
            <p className="text-xs font-extrabold text-slate-900 truncate">
              Experiencing {symptom.name}?
            </p>
            <p className="text-[11px] text-slate-500 truncate mt-0.5">
              Consult Dr. Almahmoud for expert evaluation.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-blue-600 hover:bg-blue-700 shadow-blue-600/20 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md active:scale-95"
          >
            Book Evaluation
          </Link>
        </div>
      </div>
    </div>
  );
}
