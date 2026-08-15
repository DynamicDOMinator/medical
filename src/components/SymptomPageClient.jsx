"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Stethoscope,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  Calendar,
  ShieldCheck,
  HelpCircle,
  Clock,
  Activity,
  HeartPulse,
  TrendingUp,
  Info,
  ChevronRight,
  TestTube,
} from "lucide-react";
import SymptomIllustration from "@/components/SymptomIllustration";
import StickyDiagnosisBar from "@/components/StickyDiagnosisBar";

// Map test icon string to component
const testIconMap = {
  Activity: Activity,
  HeartPulse: HeartPulse,
  TrendingUp: TrendingUp,
  TestTube: TestTube,
  ShieldCheck: ShieldCheck,
};

export default function SymptomPageClient({ symptom }) {
  // Section 6: Interactive FAQ state (all closed by default)
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-28">
      {/* 1. REASSURING PATIENT HERO HEADER */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-32 sm:pt-40 pb-16 sm:pb-20 relative overflow-hidden border-b border-blue-900/40">
        {/* Subtle decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs text-sky-200/80 mb-4 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-sky-400/60" />
            <span className="text-sky-300">Symptoms</span>
            <ChevronRight className="h-3 w-3 text-sky-400/60" />
            <span className="text-white font-semibold">{symptom.name}</span>
          </nav>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Understanding {symptom.name}
            </h1>

            <p className="text-sky-100 text-base sm:text-lg leading-relaxed font-normal">
              {symptom.heroDesc}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-extrabold rounded-2xl shadow-lg shadow-sky-500/20 transition-all text-sm transform hover:scale-[1.02] active:scale-95"
              >
                <Stethoscope className="h-4 w-4" />
                <span>Book Clinical Consultation</span>
              </Link>
              <a
                href="#finding-the-cause"
                className="inline-flex items-center space-x-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl backdrop-blur-md transition-all text-sm"
              >
                <Activity className="h-4 w-4 text-sky-300" />
                <span>View Diagnostic Workup</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN PATIENT-FOCUSED CONTENT CONTAINER */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        {/* ========================================================================= */}
        {/* 1. UNDERSTANDING YOUR [SYMPTOM] (With Single Descriptive Medical Illustration) */}
        {/* ========================================================================= */}
        <section
          id="understanding"
          aria-labelledby="section-understanding"
          className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8"
        >
          <div className="border-b border-slate-100 pb-5">
            <h2
              id="section-understanding"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              Understanding Your {symptom.name}
            </h2>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {symptom.understanding.overview}
            </p>

            {/* What It Feels Like */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-3">
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center space-x-2">
                <Info className="h-4 w-4 text-blue-600" />
                <span>How Patients Commonly Describe the Sensation:</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {symptom.understanding.feelings.map((feeling, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs"
                  >
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{feeling}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How it develops and what it means */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="bg-slate-50 border border-slate-200/70 p-4 rounded-xl space-y-1">
                <h4 className="font-bold text-slate-900">How It Develops</h4>
                <p>{symptom.understanding.development}</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/70 p-4 rounded-xl space-y-1">
                <h4 className="font-bold text-slate-900">What It Means</h4>
                <p>{symptom.understanding.meaning}</p>
              </div>
            </div>
          </div>

          {/* Descriptive Medical Illustration placed under the text */}
          <div className="pt-4 border-t border-slate-100 flex flex-col items-center max-w-xl mx-auto">
            <div className="w-full">
              <SymptomIllustration slug={symptom.slug} name={symptom.name} />
            </div>
            <p className="text-[11px] text-slate-400 text-center mt-3 font-medium">
              Descriptive medical illustration of physiological pathways related to {symptom.name.toLowerCase()}.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. WHAT COULD BE CAUSING IT? (Balanced, Reassuring & Medically Responsible) */}
        {/* ========================================================================= */}
        <section
          id="causes"
          aria-labelledby="section-causes"
          className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8"
        >
          <div className="border-b border-slate-100 pb-5">
            <h2
              id="section-causes"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              What Could Be Causing It?
            </h2>
          </div>

          {/* Reassurance Callout Box */}
          <div className="bg-sky-50/80 border border-sky-200/80 rounded-2xl p-5 sm:p-6 flex items-start space-x-4">
            <div className="bg-sky-600 text-white p-2 rounded-xl shrink-0 mt-0.5 shadow-sm">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-sky-950 text-sm sm:text-base">
                A Reassuring Note for Patients
              </h3>
              <p className="text-sky-900/90 text-xs sm:text-sm leading-relaxed">
                {symptom.causes.reassuranceNote}
              </p>
            </div>
          </div>

          {/* Side-by-side Cause Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Everyday / Common Causes */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  Everyday & Non-Cardiac Factors
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-white border border-slate-200 rounded-full text-slate-600">
                  Common
                </span>
              </div>
              <div className="space-y-3">
                {symptom.causes.commonCauses.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-2xs space-y-1">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cardiovascular & Vascular Considerations */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  Cardiovascular & Vascular Conditions
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 border border-blue-200 rounded-full text-blue-800">
                  Clinical Workup
                </span>
              </div>
              <div className="space-y-3">
                {symptom.causes.cardiovascularCauses.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-2xs space-y-1">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. FINDING THE CAUSE (Medical History + Exactly 4 Tailored Tests) */}
        {/* ========================================================================= */}
        <section
          id="finding-the-cause"
          aria-labelledby="section-finding-the-cause"
          className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8 scroll-mt-24"
        >
          <div className="border-b border-slate-100 pb-5">
            <h2
              id="section-finding-the-cause"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              Finding the Cause
            </h2>
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {symptom.findingTheCause.intro}
          </p>

          {/* Exactly 4 Tailored Tests (Text Cards with Simple Medical Icons, No Stock Photos) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {symptom.findingTheCause.tests.map((test, idx) => {
              const IconComp = testIconMap[test.icon] || Activity;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-xs shrink-0">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-extrabold px-2.5 py-0.5 bg-blue-100/70 text-blue-800 rounded-full">
                        Test {idx + 1} of 4
                      </span>
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base">
                      {test.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {test.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WHEN SHOULD YOU SEEK URGENT CARE? (High Visibility & Reassuring Emergency Card) */}
        {/* ========================================================================= */}
        <section
          id="urgent-care"
          aria-labelledby="section-urgent-care"
          className="bg-amber-50/90 border-2 border-amber-300/80 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8"
        >
          <div className="border-b border-amber-200/80 pb-5">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-500 text-white p-2.5 rounded-xl shadow-sm shrink-0">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h2
                  id="section-urgent-care"
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  When Should You Seek Urgent Care?
                </h2>
                <p className="text-amber-900 text-xs sm:text-sm font-medium mt-0.5">
                  Clear guidance distinguishing immediate medical red flags from symptoms suitable for routine clinic assessment.
                </p>
              </div>
            </div>
          </div>

          {/* Urgent Warning Signs (Immediate Action Required) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-rose-600 animate-pulse" />
              <h3 className="font-extrabold text-rose-950 text-sm sm:text-base">
                Immediate Emergency Warning Signs (Call 911 / 999):
              </h3>
            </div>
            <p className="text-amber-950 text-xs sm:text-sm">
              {symptom.urgentCare.emergencyIntro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {symptom.urgentCare.warningSigns.map((sign, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-rose-200 shadow-2xs"
                >
                  <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                  <span className="text-slate-900 text-xs sm:text-sm font-bold leading-snug">
                    {sign}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Routine Assessment Symptoms (Non-Emergency) */}
          <div className="pt-4 border-t border-amber-200/80 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-emerald-600" />
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                When to Schedule a Standard Clinic Consultation:
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {symptom.urgentCare.routineAssessment.map((routine, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-white/80 border border-slate-200/80"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                    {routine}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. WHAT CAN HELP? (Practical Guidance & What to Monitor) */}
        {/* ========================================================================= */}
        <section
          id="what-can-help"
          aria-labelledby="section-what-can-help"
          className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8"
        >
          <div className="border-b border-slate-100 pb-5">
            <h2
              id="section-what-can-help"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              What Can Help?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Practical Daily Guidance */}
            <div className="space-y-4">
              <h3 className="font-extrabold text-slate-900 text-base flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <span>Practical Daily Measures</span>
              </h3>
              <div className="space-y-3">
                {symptom.whatCanHelp.practicalGuidance.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0 mt-2" />
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Should Monitor */}
            <div className="space-y-4">
              <h3 className="font-extrabold text-slate-900 text-base flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>What You Should Track & Monitor</span>
              </h3>
              <div className="space-y-3">
                {symptom.whatCanHelp.whatToMonitor.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-sky-500 shrink-0 mt-2" />
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* When to Arrange Assessment Banner */}
          <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200/80 space-y-2">
            <h3 className="font-extrabold text-blue-950 text-sm sm:text-base flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span>When to Arrange a Professional Assessment</span>
            </h3>
            <p className="text-blue-900 text-xs sm:text-sm leading-relaxed">
              {symptom.whatCanHelp.whenToArrangeAssessment}
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. FREQUENTLY ASKED QUESTIONS (Exactly 3 Accordions, Hidden by Default) */}
        {/* ========================================================================= */}
        <section
          id="faqs"
          aria-labelledby="section-faqs"
          className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8"
        >
          <div className="border-b border-slate-100 pb-5">
            <h2
              id="section-faqs"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Click any question below to expand the clinical answer.
            </p>
          </div>

          {/* Accordion Group of Exactly 3 FAQs */}
          <div className="space-y-4">
            {symptom.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-blue-400 bg-blue-50/30 shadow-sm"
                      : "border-slate-200/90 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle
                        className={`h-5 w-5 shrink-0 transition-colors ${
                          isOpen ? "text-blue-600" : "text-slate-400"
                        }`}
                      />
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* STICKY BOTTOM BAR: "Looking to get a diagnosis? [Book Now]" */}
      <StickyDiagnosisBar />
    </div>
  );
}
