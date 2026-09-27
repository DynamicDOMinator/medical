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
  Sparkles,
  Clock,
  UserCheck,
  Award,
} from "lucide-react";
import StickyDiagnosisBar from "@/components/StickyDiagnosisBar";

export default function SymptomPageClientEs({ symptom }) {
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
            <Link href="/es" className="hover:text-white transition-colors">
              Inicio
            </Link>
            <ChevronRight className="h-3 w-3 text-sky-400/60" />
            <span className="text-sky-300">Síntomas</span>
            <ChevronRight className="h-3 w-3 text-sky-400/60" />
            <span className="text-white font-semibold">{symptom.name}</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Entendiendo {symptom.name}
            </h1>
          </div>
        </div>
      </section>

      {/* MAIN PATIENT-FOCUSED CONTENT CONTAINER */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        {/* ========================================================================= */}
        {/* 1. UNDERSTANDING YOUR [SYMPTOM] */}
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
              Entendiendo {symptom.name}
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
                <span>Cómo Suelen Describir la Sensación los Pacientes:</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {symptom.understanding.feelings.map((feeling, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 py-1"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                    <span className="leading-relaxed font-medium">{feeling}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How it develops and what it means */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="bg-slate-50 border border-slate-200/70 p-4 rounded-xl space-y-1">
                <h4 className="font-bold text-slate-900">Cómo se Desarrolla</h4>
                <p>{symptom.understanding.development}</p>
              </div>
              <div className="bg-slate-50 border border-slate-200/70 p-4 rounded-xl space-y-1">
                <h4 className="font-bold text-slate-900">Qué Significa</h4>
                <p>{symptom.understanding.meaning}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. WHAT COULD BE CAUSING IT? */}
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
              ¿Qué Podría Estar Causándolo?
            </h2>
          </div>

          {/* Reassurance Callout Box */}
          <div className="bg-sky-50/80 rounded-2xl p-5 sm:p-6 space-y-2">
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="h-5 w-5 text-sky-600 shrink-0" />
              <h3 className="font-extrabold text-sky-950 text-sm sm:text-base">
                Nota Tranquilizadora para los Pacientes
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
                  Factores Cotidianos y No Cardíacos
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
                        <div
                          className={`p-1 rounded-lg shrink-0 transition-colors ${
                            isOpen
                              ? "bg-blue-100 text-blue-700"
                              : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        >
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
                  Afecciones Cardiovasculares y Vasculares
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
                        <div
                          className={`p-1 rounded-lg shrink-0 transition-colors ${
                            isOpen
                              ? "bg-blue-100 text-blue-700"
                              : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        >
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
        {/* PATIENT ORIENTED GAE SECTIONS: HOW GAE WORKS, BENEFITS & RECOVERY */}
        {/* ========================================================================= */}
        {symptom.gaeDetails && (
          <>
            {/* Section A: How GAE Works & Recovery */}
            <section
              id="how-gae-works"
              aria-labelledby="section-how-gae-works"
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8"
            >
              <div>
                <h2
                  id="section-how-gae-works"
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  {symptom.gaeDetails.howItWorks.title}
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-3">
                  {symptom.gaeDetails.howItWorks.overview}
                </p>
              </div>

              {/* Side-by-side Cards matching exact UI */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Card: Patient Benefits */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
                  <div className="border-b border-slate-200/70 pb-3">
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                      Beneficios para el Paciente Frente a la Cirugía Tradicional de Rodilla
                    </h3>
                  </div>
                  <div className="divide-y divide-slate-200/70">
                    {symptom.gaeDetails.howItWorks.benefits.map((item, idx) => {
                      const key = `gae-benefit-${idx}`;
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
                            <div
                              className={`p-1 rounded-lg shrink-0 transition-colors ${
                                isOpen
                                  ? "bg-blue-100 text-blue-700"
                                  : "text-slate-400 group-hover:text-slate-600"
                              }`}
                            >
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

                {/* Right Card: Recovery Milestones (Timeline UI) */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-5">
                  <div className="border-b border-slate-200/70 pb-3">
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                      Línea de Tiempo y Etapas de Recuperación
                    </h3>
                  </div>

                  {/* Vertical Connected Timeline */}
                  <div className="relative pl-6 space-y-5 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-sky-400 before:to-emerald-500">
                    {symptom.gaeDetails.howItWorks.recovery.map((item, idx) => (
                      <div key={idx} className="relative group">
                        {/* Timeline Node Icon/Dot */}
                        <div className="absolute -left-[21px] top-1 w-5 h-5 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-blue-700 transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        </div>

                        {/* Timeline Content */}
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[11px] font-extrabold tracking-wide">
                              {item.timeframe}
                            </span>
                          </div>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section B: Who Is a Candidate for GAE? (Dark Blue Gradient Theme with Points) */}
            <section
              id="gae-candidacy"
              aria-labelledby="section-gae-candidacy"
              className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl border border-blue-900/40 p-6 sm:p-10 space-y-8"
            >
              <div className="space-y-2">
                <h2
                  id="section-gae-candidacy"
                  className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                >
                  {symptom.gaeDetails.candidacy.title}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                  {symptom.gaeDetails.candidacy.subtitle}
                </p>
              </div>

              {/* Patient Points Card in Dark Theme */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4">
                <h3 className="font-extrabold text-white text-sm sm:text-base flex items-center space-x-2">
                  <Info className="h-4 w-4 text-sky-400" />
                  <span>Criterios Clave de Evaluación para Candidatos:</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {symptom.gaeDetails.candidacy.criteria.map((c, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-200 py-1"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                      <span className="leading-relaxed font-medium">
                        <strong className="text-white font-bold">{c.title}:</strong>{" "}
                        <span className="text-slate-300 font-normal">{c.desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reassuring CTA footer in card */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
                  ¿Tiene dudas sobre si la EAP/GAE es la opción adecuada para su rodilla? Nuestro equipo clínico con gusto revisará sus estudios y antecedentes médicos.
                </p>
                <Link
                  href="/es/contact"
                  className="px-6 py-3 bg-sky-300 hover:bg-white text-blue-950 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0 text-center cursor-pointer"
                >
                  Agendar Valoración de Candidatura
                </Link>
              </div>
            </section>
          </>
        )}

        {/* ========================================================================= */}
        {/* 3. FINDING THE CAUSE (Medical History + Exactly 4 Tailored Tests) */}
        {/* ========================================================================= */}
        <section
          id="finding-the-cause"
          aria-labelledby="section-finding-the-cause"
          className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-10 scroll-mt-24"
        >
          <div className="mb-6">
            <h2
              id="section-finding-the-cause"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
            >
              Identificando la Causa
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
            {symptom.findingTheCause.intro}
          </p>

          <h3 className="text-blue-600 font-extrabold text-sm sm:text-base mb-3">
            Las pruebas diagnósticas incluyen:
          </h3>

          <div className="divide-y divide-slate-200/80">
            {symptom.findingTheCause.tests.slice(0, 3).map((test, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1"
              >
                <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0">
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {test.name}
                  </h3>
                </div>
                <div className="flex-1">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {test.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Highlighted 'And more, when clinically appropriate' Row */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 bg-gradient-to-r from-blue-50/90 via-sky-50/60 to-transparent -mx-3 px-4 rounded-2xl border border-blue-100/90 mt-2">
              <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0">
                <h3 className="font-extrabold text-blue-950 text-sm sm:text-base">
                  Y más estudios, según necesidad clínica
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-blue-900/85 text-xs sm:text-sm leading-relaxed font-medium">
                  Utilizamos herramientas diagnósticas adicionales adaptadas a sus síntomas, hallazgos clínicos y perfil individual de riesgo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WHEN SHOULD YOU SEEK URGENT CARE? */}
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
              ¿Cuándo Debe Buscar Atención de Urgencia?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1">
              Orientación clara para distinguir señales de alerta médica inmediata frente a síntomas aptos para consulta de rutina.
            </p>
          </div>

          {/* Routine Assessment Symptoms (Non-Emergency) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-emerald-600" />
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                Cuándo Programar una Consulta Clínica de Rutina:
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
                Señales de Alerta de Emergencia Inmediata (Llame al 911):
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
              ¿Qué Medidas Pueden Ayudar?
            </h2>
          </div>

          <div className="divide-y divide-slate-200/80">
            {/* Practical Daily Measures */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between py-4 sm:py-5 gap-2 sm:gap-8 hover:bg-slate-50/60 -mx-3 px-3 rounded-xl transition-colors first:pt-1">
              <div className="w-full sm:w-[32%] lg:w-[28%] shrink-0">
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  Medidas Prácticas Diarias
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
                  Qué Parámetros Debe Monitorear
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
                  Cuándo Programar una Evaluación Médica
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
        {/* 6. FREQUENTLY ASKED QUESTIONS */}
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
              Preguntas Frecuentes
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Haga clic en cualquier pregunta para ver la respuesta clínica detallada.
            </p>
          </div>

          {/* Accordion Group of FAQs */}
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

      {/* STICKY BOTTOM BAR */}
      <StickyDiagnosisBar
        title="¿Busca obtener un diagnóstico preciso?"
        btnText="Agendar Cita"
        href="/es/contact"
      />
    </div>
  );
}
