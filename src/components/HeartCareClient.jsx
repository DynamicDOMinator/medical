"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Search,
  ChevronDown,
  ChevronLeft,
  AlertTriangle,
  Stethoscope,
  Activity,
  HelpCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  PhoneCall,
  MoreVertical,
  X,
} from "lucide-react";

export default function HeartCareClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState({});
  const [browseOpen, setBrowseOpen] = useState(false);

  const scrollToCategory = (catId) => {
    setActiveCategory("all");
    setSearchQuery("");
    setBrowseOpen(false);
    setTimeout(() => {
      if (catId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(catId);
      if (el) {
        const yOffset = -110;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };

  const toggleItem = (id) => {
    setOpenItems((prev) => (prev[id] ? {} : { [id]: true }));
  };

  const expandAll = () => {
    const all = {};
    faqCategories.forEach((cat) => {
      cat.items.forEach((item) => {
        all[item.id] = true;
      });
    });
    setOpenItems(all);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const faqCategories = [
    {
      id: "warning-signs",
      categoryTitle: "Warning Signs & Early Detection",
      icon: AlertTriangle,
      color: "amber",
      banner: {
        title: "Don't ignore a change in your health",
        description:
          "New, unexplained, persistent, or worsening symptoms deserve attention. If you have noticed a change in your energy, breathing, exercise capacity, or other symptoms, discuss it with your physician or cardiologist.",
        buttonText: "Discuss your symptoms",
        buttonSubtext: "Book online",
        link: "/contact",
      },
      items: [
        {
          id: "q1",
          question: "What heart symptoms should patients never ignore?",
          answer: (
            <div className="space-y-4">
              <p>
                Cardiovascular problems do not always begin with dramatic chest
                pain. New, unexplained, persistent, or worsening symptoms should
                not simply be attributed to aging, stress, or being out of
                shape.
              </p>
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5">
                <h4 className="font-bold text-amber-950 text-sm mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
                  Symptoms that warrant medical attention can include:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-amber-900 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>New or worsening shortness of breath</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Reduced exercise capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Unexplained fatigue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Swelling of the legs or feet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Dizziness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Palpitations</span>
                  </li>
                  <li className="flex items-start gap-2 col-span-1 sm:col-span-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>
                      Chest, jaw, neck, shoulder, back, or arm discomfort
                    </span>
                  </li>
                </ul>
              </div>
              <p className="font-semibold text-slate-700">
                The important point is not to ignore a significant change from
                your normal baseline. Early evaluation can help identify
                cardiovascular disease or risk factors before they lead to more
                serious complications.
              </p>
            </div>
          ),
        },
        {
          id: "q2",
          question:
            "What are the most commonly missed signs of cardiovascular disease?",
          answer: (
            <div className="space-y-5">
              <p>
                Some cardiovascular problems develop gradually and may be
                mistaken for aging, stress, or simply being “out of shape.”
                Commonly missed signs can include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4">
                  <h5 className="font-extrabold text-xs text-blue-900 uppercase tracking-wider mb-2.5 pb-1 border-b border-blue-200/60">
                    Heart-related symptoms
                  </h5>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>• Unexplained fatigue or reduced energy</li>
                    <li>• Decreased exercise capacity</li>
                    <li>• Shortness of breath with exertion</li>
                    <li>• Palpitations</li>
                    <li>• Chest, jaw, neck, shoulder, back, or arm discomfort</li>
                    <li>• Dizziness or lightheadedness</li>
                  </ul>
                </div>

                <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-4">
                  <h5 className="font-extrabold text-xs text-sky-900 uppercase tracking-wider mb-2.5 pb-1 border-b border-sky-200/60">
                    Circulation-related symptoms
                  </h5>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>• Leg pain, heaviness, or weakness with walking</li>
                    <li>• Swelling of the legs, ankles, or feet</li>
                    <li>• Changes in leg or foot color or appearance</li>
                    <li>
                      • Numbness, tingling, or unusual coldness in the legs or
                      feet
                    </li>
                    <li>• Unexplained muscle loss or wasting</li>
                  </ul>
                </div>

                <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-4">
                  <h5 className="font-extrabold text-xs text-indigo-900 uppercase tracking-wider mb-2.5 pb-1 border-b border-indigo-200/60">
                    Other important symptoms
                  </h5>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    <li>• New or unexplained headaches</li>
                    <li>• Changes in vision</li>
                    <li>• Reduced ability to perform everyday activities</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 italic bg-slate-100 p-3 rounded-xl">
                Note: Not every one of these symptoms indicates heart or
                vascular disease. However, new, unexplained, persistent, or
                progressively worsening symptoms should be discussed with a
                physician.
              </p>
            </div>
          ),
        },
        {
          id: "q3",
          question: "Can heart disease progress without obvious symptoms?",
          answer: (
            <div className="space-y-4">
              <p>
                <strong className="text-blue-900 font-bold text-base">
                  Yes.
                </strong>{" "}
                A common challenge in cardiovascular care is that many patients
                delay evaluation until disease has already progressed.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
                <h5 className="font-bold text-slate-800 text-sm mb-2.5">
                  This often happens when people:
                </h5>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Overlook or normalize early symptoms like fatigue,
                      shortness of breath, reduced exercise tolerance, swelling,
                      or palpitations
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Attribute symptoms to aging, stress, or poor fitness
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Postpone care despite major risk factors such as high
                      blood pressure, diabetes, high cholesterol, smoking,
                      obesity, or family history
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Stop or avoid treatment due to side effects or frustration
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Gradually adjust their lifestyle to worsening symptoms
                      without realizing the underlying condition is progressing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Seek care only after a major event such as a heart attack,
                      stroke, or heart failure
                    </span>
                  </li>
                </ul>
              </div>
              <p>
                A key issue is that cardiovascular disease can progress silently,
                and serious events may occur without clear warning signs.
              </p>
              <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
                <p className="font-bold text-blue-950 text-sm">
                  The main message is simple: do not wait for symptoms to
                  become severe.
                </p>
                <p className="text-sm text-blue-800 mt-1">
                  Early evaluation of symptoms or risk factors can allow earlier
                  intervention, better prevention, and more treatment options.
                  Importantly, early assessment does not always lead to
                  treatment—it may also provide reassurance—but when disease is
                  present, earlier detection can provide an opportunity to manage
                  the condition before it causes more serious complications.
                </p>
              </div>
            </div>
          ),
        },
        {
          id: "q4",
          question: "Why do people delay seeing a cardiologist?",
          answer: (
            <div className="space-y-4">
              <p>
                People often delay cardiology care not out of neglect, but
                because heart disease can be subtle, intermittent, or easy to
                dismiss.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
                <h5 className="font-bold text-slate-800 text-sm mb-3">
                  Common reasons include:
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Feeling “fine” despite silent disease</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>
                      Mild or vague symptoms attributed to aging, stress, or
                      fitness
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Symptoms that come and go</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Fear of a serious diagnosis or procedures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Prior negative healthcare experiences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Belief that nothing can be done</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>
                      Gradual adaptation to declining physical capacity
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">●</span>
                    <span>Busy schedules and competing priorities</span>
                  </li>
                </ul>
              </div>
              <p className="text-slate-700">
                The concern is that cardiovascular disease can progress without
                clear warning signs, and delays may allow a treatable condition
                to become more serious.
              </p>
              <p className="font-bold text-blue-900 text-sm bg-blue-50 p-3 rounded-xl border border-blue-100">
                The key message is that early evaluation is valuable, even when
                symptoms are mild or uncertain, because it can provide
                reassurance, identify risk early, and allow timely prevention or
                treatment.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      id: "checkups-diagnosis",
      categoryTitle: "Check-Ups & Diagnosis",
      icon: Stethoscope,
      color: "blue",
      banner: {
        title: "Know where you stand",
        description:
          "A cardiovascular assessment can help identify risk factors, clarify uncertain results, and determine whether further evaluation is needed. Early assessment may provide reassurance—or help identify an issue before it becomes more serious.",
        buttonText: "Book a cardiovascular assessment",
        buttonSubtext: "Book online",
        link: "/contact",
      },
      items: [
        {
          id: "q5",
          question: "Who should have a cardiovascular check-up?",
          answer: (
            <div className="space-y-4">
              <p>
                A heart check-up is not only for people with known heart
                disease—many conditions develop silently, so early assessment
                can help prevent serious problems.
              </p>
              <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 sm:p-5">
                <h5 className="font-bold text-blue-950 text-sm mb-3">
                  You should consider a check-up if you have:
                </h5>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Risk factors like high blood pressure, high cholesterol,
                      diabetes, obesity, or smoking
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      A family history of early heart disease, stroke, aneurysm,
                      or sudden cardiac death
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Known heart or vascular disease (coronary, carotid,
                      peripheral, etc.)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Symptoms such as chest discomfort, shortness of breath,
                      fatigue, palpitations, dizziness, fainting, or swelling
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      A decline in exercise tolerance or daily activity level
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Previous findings like heart murmur, abnormal ECG, valve
                      disease, arrhythmia, or enlarged heart
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      A history of heart attack, stroke, blood clot, or heart
                      failure
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Ongoing treatment where blood pressure, cholesterol, or
                      symptoms are not well controlled
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      A desire to assess cardiovascular risk and focus on
                      prevention
                    </span>
                  </li>
                </ul>
              </div>
              <p>
                Importantly, you don’t need symptoms to justify a check-up—early
                evaluation can detect hidden risk. The goal is not excessive
                testing, but a personalized assessment of risk and a clear
                prevention or treatment plan.
              </p>
              <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-red-900 font-semibold">
                  Emergency Notice: If you develop severe symptoms such as chest
                  pressure, severe shortness of breath, fainting, or sudden
                  neurological changes, seek emergency care immediately.
                </p>
              </div>
            </div>
          ),
        },
        {
          id: "q6",
          question:
            "At what age should I consider a cardiovascular check-up?",
          answer: (
            <div className="space-y-4">
              <p>
                We care for adults 18 and older, focusing on individualized
                cardiovascular risk rather than age alone.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
                <h5 className="font-bold text-slate-800 text-sm mb-3">
                  We commonly see patients who have:
                </h5>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Risk factors such as high blood pressure, high cholesterol,
                      diabetes, obesity, smoking, or family history of heart
                      disease
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Younger adults seeking early risk assessment, especially
                      with strong family history
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Middle-aged adults where prevention and early detection
                      are key
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Older adults with known or suspected heart, vascular,
                      valve, or rhythm conditions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      New or unexplained symptoms like chest discomfort,
                      shortness of breath, fatigue, palpitations, dizziness, or
                      reduced exercise capacity
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Known cardiovascular disease requiring ongoing monitoring
                      and management
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">●</span>
                    <span>
                      Individuals seeking a comprehensive heart health
                      evaluation, even without symptoms
                    </span>
                  </li>
                </ul>
              </div>
              <p className="font-medium text-slate-700 leading-relaxed">
                Our approach is based on the principle that risk is individual,
                not age-based. We combine symptoms, history, risk factors, and
                diagnostic testing to create a personalized plan focused on
                early detection, prevention, and long-term cardiovascular health.
              </p>
            </div>
          ),
        },
        {
          id: "q7",
          question:
            "How long does it usually take to diagnose a heart condition?",
          answer: (
            <div className="space-y-4">
              <p>
                There is no fixed timeline, as every patient and condition is
                different. Some diagnoses can be made during the first visit or
                after initial testing, while others require additional imaging,
                monitoring, or follow-up.
              </p>
              <p>
                Our approach is to be efficient and focused without rushing,
                starting with a detailed history, exam, and targeted testing.
                The goal is not to order more tests, but the right tests for the
                specific question.
              </p>
              <p>
                In some cases, diagnosis is straightforward; in others, it
                requires putting together multiple pieces of information over
                time. When symptoms are concerning or urgent, we prioritize
                expedited evaluation, and emergency symptoms should always be
                assessed immediately.
              </p>
              <div className="bg-sky-50 border-l-4 border-sky-600 p-4 rounded-r-xl text-sky-950 font-bold text-sm">
                Overall, our goal is to reach the most accurate diagnosis as
                efficiently as possible, while avoiding both unnecessary delays
                and unnecessary testing.
              </div>
            </div>
          ),
        },
        {
          id: "q8",
          question: "What happens if my test results are borderline?",
          answer: (
            <div className="space-y-4">
              <p>
                A borderline result does not automatically indicate disease or the
                need for treatment. Instead, it is interpreted in the context of
                the patient’s symptoms, risk factors, history, and other test
                results.
              </p>
              <p>
                In many cases, the next step may involve reassurance, lifestyle
                changes, and routine follow-up. Sometimes repeat or additional
                testing is needed to better understand the finding, and in
                select cases, treatment may be recommended based on overall
                cardiovascular risk.
              </p>
              <div className="p-4 bg-slate-900 text-white rounded-2xl">
                <p className="font-bold text-sm text-sky-300">
                  Key Principle: No result is viewed in isolation.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  A borderline finding is an opportunity to refine risk
                  assessment and ensure appropriate care—balancing early
                  detection with avoiding unnecessary intervention.
                </p>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: "treatment-intervention",
      categoryTitle: "Treatment & Intervention",
      icon: Activity,
      color: "emerald",
      banner: {
        title: "Understand your treatment options",
        description:
          "Every patient and every cardiovascular condition is different. If treatment has been recommended, or if your current treatment isn't working as expected, discussing your options with your cardiologist can help you make an informed decision.",
        buttonText: "Discuss your treatment options",
        buttonSubtext: "Book online",
        link: "/contact",
      },
      items: [
        {
          id: "q9",
          question:
            "How do you decide when treatment or intervention is necessary?",
          answer: (
            <div className="space-y-4">
              <p>
                We recommend an intervention only when the expected benefits
                clearly outweigh the risks, not simply based on an abnormal test
                result.
              </p>
              <p>
                Our decision is based on the full clinical picture, including
                symptoms, disease severity, test results, overall health,
                response to medical therapy, and the patient’s goals and
                preferences.
              </p>
              <p>
                In many cases, medications, lifestyle changes, and careful
                monitoring are the best first steps, and not every finding
                requires a procedure. However, when treatment is needed, we
                also consider minimally invasive options whenever appropriate.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-emerald-950 font-bold text-sm">
                Our goal is to avoid both overtreatment and undertreatment by
                ensuring we perform the right procedure, for the right patient,
                at the right time, with the best possible impact on health and
                quality of life.
              </div>
            </div>
          ),
        },
        {
          id: "q10",
          question: "When does a heart condition require an intervention?",
          answer: (
            <div className="space-y-4">
              <p>
                Most cardiovascular conditions do not require procedures, and
                treatment is usually started with the least invasive options.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
                <p className="font-bold text-slate-800 text-sm">
                  However, intervention becomes necessary when disease is severe,
                  rapidly progressing, or poses a high risk of serious
                  complications such as:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Worsening symptoms despite treatment</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Critical arterial blockages</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Advanced valve disease</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Uncontrolled heart failure</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Dangerous arrhythmias</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>High-risk aneurysms</span>
                  </div>
                </div>
              </div>
              <p>
                Even when intervention is needed, the focus remains on choosing
                the safest and most effective approach—often minimally invasive
                when possible—and timing it appropriately. Overall, the goal is
                to intervene only when the benefits clearly outweigh the risks,
                ideally before irreversible damage occurs.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      id: "concerns-misconceptions",
      categoryTitle: "Concerns & Misconceptions",
      icon: ShieldCheck,
      color: "purple",
      banner: {
        title: "Take an active role in your heart health",
        description:
          "Many cardiovascular risk factors can be managed through a combination of medical care and sustainable lifestyle changes. Understanding your individual risk is an important first step.",
        buttonText: "Learn how to reduce your cardiovascular risk",
        buttonSubtext: "Book online",
        link: "/contact",
      },
      items: [
        {
          id: "q11",
          question:
            "What are the most common misconceptions about heart disease and its treatment?",
          answer: (
            <div className="space-y-4">
              <p>
                Many patients delay cardiovascular treatment due to common
                misconceptions. These include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-red-50/70 border border-red-100 p-3.5 rounded-xl text-xs sm:text-sm text-red-950 font-medium">
                  • Believing that no treatment is needed if they feel well
                </div>
                <div className="bg-red-50/70 border border-red-100 p-3.5 rounded-xl text-xs sm:text-sm text-red-950 font-medium">
                  • Assuming medication always means severe illness
                </div>
                <div className="bg-red-50/70 border border-red-100 p-3.5 rounded-xl text-xs sm:text-sm text-red-950 font-medium">
                  • Thinking treatment must be lifelong without adjustment
                </div>
                <div className="bg-red-50/70 border border-red-100 p-3.5 rounded-xl text-xs sm:text-sm text-red-950 font-medium">
                  • Believing side effects mean all medications are unsuitable
                </div>
                <div className="bg-red-50/70 border border-red-100 p-3.5 rounded-xl text-xs sm:text-sm text-red-950 font-medium">
                  • Assuming every blockage requires a stent or surgery
                </div>
                <div className="bg-red-50/70 border border-red-100 p-3.5 rounded-xl text-xs sm:text-sm text-red-950 font-medium">
                  • Believing procedures indicate a hopeless situation
                </div>
                <div className="bg-red-50/70 border border-red-100 p-3.5 rounded-xl text-xs sm:text-sm text-red-950 font-medium">
                  • Relying solely on lifestyle changes when medication is needed
                </div>
                <div className="bg-red-50/70 border border-red-100 p-3.5 rounded-xl text-xs sm:text-sm text-red-950 font-medium">
                  • Thinking prior medical opinions are permanent or final
                </div>
              </div>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 text-sm font-bold">
                A frequent and risky assumption is waiting for symptoms to
                worsen.
              </div>
              <p className="text-slate-700">
                In reality, many heart conditions progress silently, and
                treatment is often preventive, flexible, and individualized.
                Modern cardiology offers multiple options, and care decisions
                should be based on medical evidence and personal risk—not fear
                or assumptions.
              </p>
            </div>
          ),
        },
        {
          id: "q12",
          question:
            "What lifestyle changes make the biggest difference to heart health?",
          answer: (
            <div className="space-y-5">
              <p>
                The most important lifestyle changes for heart health are
                consistent, sustainable habits that reduce overall
                cardiovascular risk rather than perfect short-term efforts.
              </p>
              <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 sm:p-5">
                <h5 className="font-extrabold text-xs text-indigo-900 uppercase tracking-wider mb-3">
                  Key Priorities Include:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-800">
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Stop smoking</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Regular aerobic & strength exercise</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Heart-healthy diet (low salt/sugar)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Maintain a healthy weight</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Control BP, cholesterol & blood sugar</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Get adequate, restful sleep</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Limit alcohol & harmful substances</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-indigo-100 font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                    <span>Manage stress in a sustainable way</span>
                  </div>
                </div>
              </div>
              <p className="font-semibold text-slate-700">
                There is no single “magic” change—the biggest benefit comes from
                combining several improvements and maintaining them long term.
                The best plan is individualized, focusing on the few changes
                that will have the greatest impact for each patient’s specific
                risk profile.
              </p>
            </div>
          ),
        },
      ],
    },
  ];

  // Filter Categories / Items based on active tab and search query
  const filteredCategories = faqCategories
    .map((cat) => {
      if (activeCategory !== "all" && cat.id !== activeCategory) {
        return null;
      }
      const matchingItems = cat.items.filter((item) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        const questionText = item.question.toLowerCase();
        return questionText.includes(q);
      });
      if (matchingItems.length === 0) return null;
      return {
        ...cat,
        items: matchingItems,
      };
    })
    .filter(Boolean);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="Heart Care FAQs background"
            fill
            className="object-cover object-center opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Heart Care FAQs
          </h1>
          <p className="mt-4 sm:mt-6 text-blue-100/90 text-base sm:text-xl max-w-3xl mx-auto font-normal leading-relaxed">
            Understanding when to seek cardiovascular care, what symptoms to
            watch for, and when treatment may be necessary helps you make
            informed decisions about your heart health.
          </p>

          {/* Search Box */}

        </div>
      </div>

      {/* Side-Docked "Browse this page" Button (Stuck to Right Edge - Screenshot 1) */}
      <div className="fixed top-28 sm:top-32 right-0 z-40">
        <button
          onClick={() => setBrowseOpen(true)}
          className="flex items-center space-x-2 pl-4 pr-3 py-3 bg-[#001c4c] hover:bg-blue-900 text-white font-extrabold text-xs sm:text-sm rounded-l-2xl shadow-2xl shadow-blue-950/50 border-l border-t border-b border-blue-400/30 transition-all hover:-translate-x-1 active:translate-x-0 cursor-pointer"
          aria-label="Browse this page"
        >
          <span className="tracking-tight">Browse this page</span>
          <MoreVertical className="h-4 w-4 text-white shrink-0" />
        </button>
      </div>

      {/* "Browse this page" Drawer / Topic Menu Modal (Screenshot 2) */}
      {browseOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
          {/* Backdrop overlay */}
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setBrowseOpen(false)}
          />

          {/* Dropdown / Modal Panel */}
          <div className="absolute inset-x-3 top-16 sm:top-24 max-w-xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-950/20 overflow-hidden z-10 transition-all transform animate-slide-down">
            {/* Header bar matching Screenshot 2 */}
            <div className="bg-[#001c4c] text-white px-5 py-4 flex items-center justify-between border-b border-blue-900">
              <button
                onClick={() => setBrowseOpen(false)}
                className="flex items-center space-x-2 font-bold text-sm sm:text-base text-white hover:text-sky-300 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
                <span>Browse this page</span>
              </button>
              <button
                onClick={() => setBrowseOpen(false)}
                className="p-1 rounded-full hover:bg-blue-900 text-slate-300 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Menu Options List matching Screenshot 2 */}
            <div className="divide-y divide-slate-100 max-h-[70vh] overflow-y-auto bg-white">
              <button
                onClick={() => scrollToCategory("top")}
                className="w-full text-left px-6 py-4 font-bold text-[#001c4c] text-sm sm:text-base hover:bg-blue-50/80 transition-colors flex items-center justify-between border-b border-slate-100"
              >
                <span>Overview</span>
                <span className="text-xs font-semibold text-blue-600">Top ↑</span>
              </button>

              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className="w-full text-left px-6 py-4 font-bold text-[#001c4c] text-sm sm:text-base hover:bg-blue-50/80 transition-colors flex items-center justify-between group border-b border-slate-100"
                >
                  <span>{cat.categoryTitle}</span>
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-blue-600">
                    {cat.items.length} Questions →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Navigation / Filter Tabs & Actions (Hidden on phone/mobile, visible on desktop) */}
        <div className="hidden md:flex flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeCategory === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
            >
              All Topics
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                {cat.categoryTitle}
              </button>
            ))}
          </div>

          {/* Quick Expand / Collapse */}
          <div className="flex items-center gap-3 shrink-0 self-end md:self-auto text-xs font-semibold text-slate-500">
            <button
              onClick={expandAll}
              className="hover:text-blue-600 underline transition-colors"
            >
              Expand All
            </button>
            <span>•</span>
            <button
              onClick={collapseAll}
              className="hover:text-blue-600 underline transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQ Categories Render */}
        {filteredCategories.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-4">
            <HelpCircle className="h-12 w-12 text-slate-300 mx-auto" />
            <h3 className="text-xl font-bold text-slate-800">
              No matching questions found
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              We couldn't find any FAQs matching "{searchQuery}". Try searching
              for different terms like "symptoms", "check-up", or "treatment".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="inline-flex items-center px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-md hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredCategories.map((category) => {
            const CatIcon = category.icon;
            return (
              <div key={category.id} id={category.id} className="space-y-6 scroll-mt-28">
                {/* Category Header */}
                <div className="flex items-center space-x-3 pt-4">
                  <div className="p-2.5 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
                    <CatIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {category.categoryTitle}
                    </h2>
                  </div>
                </div>

                {/* Questions List */}
                <div className="space-y-4">
                  {category.items.map((item) => {
                    const isOpen = !!openItems[item.id];
                    return (
                      <div
                        key={item.id}
                        className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                            ? "border-blue-300 shadow-lg shadow-blue-900/5 ring-1 ring-blue-200"
                            : "border-slate-200 hover:border-blue-200 hover:shadow-md"
                          }`}
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center h-7 w-7 rounded-lg bg-blue-50 text-blue-700 font-extrabold text-xs shrink-0">
                              {item.id.toUpperCase()}
                            </span>
                            <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                              {item.question}
                            </span>
                          </div>
                          <div
                            className={`p-1.5 rounded-full bg-slate-100 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 bg-blue-100 text-blue-700" : ""
                              }`}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 sm:px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base border-t border-slate-100 leading-relaxed">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Section Banner CTA */}
                {category.banner && (
                  <div className="mt-8 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-blue-800">
                    <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div className="space-y-2 max-w-2xl">
                        <div className="inline-flex items-center space-x-1.5 text-xs font-extrabold uppercase tracking-wider text-sky-400 bg-sky-950/60 px-3 py-1 rounded-md border border-sky-800/50">
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>Actionable Advice</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {category.banner.title}
                        </h3>
                        <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                          {category.banner.description}
                        </p>
                      </div>

                      <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-3">
                        <Link
                          href={category.banner.link}
                          className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
                        >
                          <span>{category.banner.buttonText}</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                          href="/contact"
                          className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3.5 rounded-2xl font-bold text-sm backdrop-blur-sm transition-all hover:scale-[1.02]"
                        >
                          <Calendar className="h-4 w-4 text-sky-300" />
                          <span>Book Online</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}


      </div>
    </div>
  );
}
