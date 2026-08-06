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
  Heart,
  Calendar,
} from "lucide-react";
import { symptomsData } from "../symptomsData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const symptom = symptomsData[slug];
  if (!symptom) return {};

  return {
    title: `${symptom.name} — Evaluation & Diagnostic Testing | Dr. Almahmoud`,
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
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs font-semibold text-sky-300 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link href="/symptom/chest-pain" className="hover:text-white transition-colors">
              Symptoms
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-white">{symptom.name}</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
              <Activity className="h-4 w-4" />
              <span>{symptom.categoryBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {symptom.name} — Symptoms & Diagnostic Workup
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
        {/* 2. OVERVIEW & PHYSIOLOGY */}
        <section className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            Understanding {symptom.name}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            {symptom.overview}
          </p>

          <h3 className="text-lg font-bold text-slate-900 mb-3">
            Potential Underlying Conditions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {symptom.causes.map((cause, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70"
              >
                <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-800 text-xs sm:text-sm font-medium leading-snug">
                  {cause}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. RED FLAGS & WARNING SIGNS */}
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
                className="flex items-start space-x-2.5 p-3 rounded-xl bg-white/80 border border-amber-200/80"
              >
                <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                <span className="text-slate-800 text-xs sm:text-sm font-semibold leading-snug">
                  {flag}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. DIAGNOSTIC TESTS (PUSH PATIENTS TO TEST) */}
        <section id="diagnostics" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
              <Stethoscope className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Advanced Diagnostics
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Recommended Diagnostic Tests for {symptom.name}
              </h2>
            </div>
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

        {/* 5. BOTTOM CTA */}
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
      </div>
    </div>
  );
}
