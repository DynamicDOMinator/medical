"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ShieldCheck,
  Activity,
  Info,
  ChevronRight,
  Plus,
} from "lucide-react";
import SymptomIllustration from "@/components/SymptomIllustration";
import StickyDiagnosisBar from "@/components/StickyDiagnosisBar";

export default function SymptomPageClient({ symptom }) {
  // Causes accordion state
  const [openCauses, setOpenCauses] = useState({});

  const toggleCause = (key) => {
    setOpenCauses((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
          <div>
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
                    className="text-xs sm:text-sm text-slate-700 py-1"
                  >
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
          <div>
            <h2
              id="section-causes"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              What Could Be Causing It?
            </h2>
          </div>

          {/* Reassurance Callout Box */}
          <div className="bg-sky-50/80 border border-sky-200/80 rounded-2xl p-5 sm:p-6 space-y-2">
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="h-5 w-5 text-sky-600 shrink-0" />
              <h3 className="font-extrabold text-sky-950 text-sm sm:text-base">
                A Reassuring Note for Patients
              </h3>
            </div>
            <p className="text-sky-900/90 text-xs sm:text-sm leading-relaxed">
              {symptom.causes.reassuranceNote}
            </p>
          </div>

          {/* Side-by-side Cause Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Everyday / Common Causes */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
              <div className="border-b border-slate-200/70 pb-3">
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  Everyday & Non-Cardiac Factors
                </h3>
              </div>
              <div className="divide-y divide-slate-200/70">
                {symptom.causes.commonCauses.map((item, idx) => {
                  const key = `common-${idx}`;
                  const isOpen = !!openCauses[key];
                  return (
                    <div key={idx} className="py-3 first:pt-0 last:pb-0">
                      <button
                        type="button"
                        onClick={() => toggleCause(key)}
                        className="w-full flex items-center justify-between text-left gap-3 group focus:outline-none cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        <div className={`p-1 rounded-lg shrink-0 transition-colors ${
                          isOpen ? "bg-blue-100 text-blue-700" : "text-slate-400 group-hover:text-slate-600"
                        }`}>
                          <Plus
                            className={`h-3.5 w-3.5 transition-transform duration-200 ${
                              isOpen ? "rotate-45 text-blue-600" : ""
                            }`}
                          />
                        </div>
                      </button>
                      {isOpen && (
                        <p className="text-slate-600 text-xs leading-relaxed pt-2">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cardiovascular & Vascular Considerations */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
              <div className="border-b border-slate-200/70 pb-3">
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  Cardiovascular & Vascular Conditions
                </h3>
              </div>
              <div className="divide-y divide-slate-200/70">
                {symptom.causes.cardiovascularCauses.map((item, idx) => {
                  const key = `cardio-${idx}`;
                  const isOpen = !!openCauses[key];
                  return (
                    <div key={idx} className="py-3 first:pt-0 last:pb-0">
                      <button
                        type="button"
                        onClick={() => toggleCause(key)}
                        className="w-full flex items-center justify-between text-left gap-3 group focus:outline-none cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        <div className={`p-1 rounded-lg shrink-0 transition-colors ${
                          isOpen ? "bg-blue-100 text-blue-700" : "text-slate-400 group-hover:text-slate-600"
                        }`}>
                          <Plus
                            className={`h-3.5 w-3.5 transition-transform duration-200 ${
                              isOpen ? "rotate-45 text-blue-600" : ""
                            }`}
                          />
                        </div>
                      </button>
                      {isOpen && (
                        <p className="text-slate-600 text-xs leading-relaxed pt-2">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  );
                })}
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
          <div>
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

          {/* Exactly 3 Tailored Tests + 4th 'And more' Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {symptom.findingTheCause.tests.slice(0, 3).map((test, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/20 transition-all flex flex-col justify-center"
              >
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                    {test.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {test.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* 4th Card: And more, when clinically appropriate */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 via-slate-50 to-sky-50/60 border border-blue-200/90 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex flex-col justify-center">
              <div className="space-y-2">
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">
                  And more, when clinically appropriate
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We use additional diagnostic tools based on your symptoms, clinical findings, and individual risk profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WHEN SHOULD YOU SEEK URGENT CARE? (High Visibility & Reassuring Emergency Card) */}
        {/* ========================================================================= */}
        <section
          id="urgent-care"
          aria-labelledby="section-urgent-care"
          className="bg-gradient-to-br from-rose-50/50 via-slate-50/80 to-amber-50/30 rounded-3xl border border-rose-200/70 shadow-sm p-6 sm:p-10 space-y-8"
        >
          <div>
            <h2
              id="section-urgent-care"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              When Should You Seek Urgent Care?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1">
              Clear guidance distinguishing immediate medical red flags from symptoms suitable for routine clinic assessment.
            </p>
          </div>

          {/* Routine Assessment Symptoms (Non-Emergency) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-emerald-600" />
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                When to Schedule a Standard Clinic Consultation:
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {symptom.urgentCare.routineAssessment.map((routine, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 py-1.5"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                    {routine}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Urgent Warning Signs (Immediate Action Required) */}
          <div className="pt-6 border-t border-slate-200/70 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-rose-600 animate-pulse" />
              <h3 className="font-extrabold text-rose-950 text-sm sm:text-base">
                Immediate Emergency Warning Signs (Call 911 / 999):
              </h3>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm">
              {symptom.urgentCare.emergencyIntro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {symptom.urgentCare.warningSigns.map((sign, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 py-1.5"
                >
                  <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                  <span className="text-slate-900 text-xs sm:text-sm font-bold leading-snug">
                    {sign}
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
          className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-6"
        >
          <div>
            <h2
              id="section-what-can-help"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              What Can Help?
            </h2>
          </div>

          <div className="divide-y divide-slate-200/80">
            {/* Practical Daily Measures */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1">
              <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0">
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  Practical Daily Measures
                </h3>
              </div>
              <div className="flex-1 space-y-2">
                {symptom.whatCanHelp.practicalGuidance.map((item, idx) => (
                  <p key={idx} className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* What You Should Monitor */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors">
              <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0">
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  What You Should Monitor
                </h3>
              </div>
              <div className="flex-1 space-y-2">
                {symptom.whatCanHelp.whatToMonitor.map((item, idx) => (
                  <p key={idx} className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* When to Arrange Assessment */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors last:pb-1">
              <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0">
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  When to Arrange Assessment
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {symptom.whatCanHelp.whenToArrangeAssessment}
                </p>
              </div>
            </div>
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
          <div>
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
                    <span>{faq.question}</span>
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
