"use client";

import React from "react";

export default function SymptomIllustration({ slug, name }) {
  // Return tailored SVG illustration based on symptom slug
  switch (slug) {
    case "chest-pain":
      return (
        <div className="w-full h-full min-h-[260px] flex items-center justify-center p-6 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 rounded-2xl border border-blue-100/80 shadow-xs relative overflow-hidden">
          <svg
            viewBox="0 0 360 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[320px] h-auto drop-shadow-sm"
          >
            {/* Background glowing glow */}
            <circle cx="180" cy="130" r="90" fill="#0284c7" fillOpacity="0.06" />
            <circle cx="180" cy="130" r="60" fill="#38bdf8" fillOpacity="0.08" />

            {/* Thorax / Rib cage subtle background outline */}
            <path
              d="M120 70 Q180 55 240 70 M100 100 Q180 85 260 100 M95 135 Q180 120 265 135 M105 170 Q180 155 255 170"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
            {/* Sternum outline */}
            <rect x="175" y="60" width="10" height="130" rx="5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Heart Muscle Base */}
            <path
              d="M180 100 C155 65 110 80 115 125 C120 160 180 205 180 205 C180 205 240 160 245 125 C250 80 205 65 180 100 Z"
              fill="url(#heartGradientChest)"
              stroke="#0369a1"
              strokeWidth="2.5"
            />

            {/* Aorta and Vena Cava */}
            <path
              d="M165 95 V55 C165 48 195 48 195 55 V92"
              stroke="#dc2626"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M145 90 V65"
              stroke="#2563eb"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Coronary Arteries (Showing oxygen delivery pathways) */}
            <path
              d="M180 105 Q160 130 150 165 M160 130 Q140 145 132 155"
              stroke="#ef4444"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M188 105 Q205 130 215 160 M202 128 Q220 142 226 150"
              stroke="#ef4444"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Sensation / Tension Rings (Visual explanation of chest tightness) */}
            <circle cx="180" cy="140" r="28" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" opacity="0.85" />
            <circle cx="180" cy="140" r="38" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.7" />

            {/* Gentle Indicator Badges */}
            <g transform="translate(40, 45)">
              <rect width="90" height="26" rx="13" fill="#ffffff" stroke="#e0f2fe" strokeWidth="1.5" />
              <circle cx="12" cy="13" r="4" fill="#0284c7" />
              <text x="24" y="17" fill="#0369a1" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Coronary Flow
              </text>
            </g>

            <g transform="translate(230, 195)">
              <rect width="95" height="26" rx="13" fill="#ffffff" stroke="#fef3c7" strokeWidth="1.5" />
              <circle cx="12" cy="13" r="4" fill="#f59e0b" />
              <text x="24" y="17" fill="#92400e" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Oxygen Demand
              </text>
            </g>

            <defs>
              <linearGradient id="heartGradientChest" x1="115" y1="70" x2="245" y2="205" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f87171" />
                <stop offset="0.6" stopColor="#dc2626" />
                <stop offset="1" stopColor="#991b1b" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "shortness-of-breath":
      return (
        <div className="w-full h-full min-h-[260px] flex items-center justify-center p-6 bg-gradient-to-br from-sky-50/80 via-white to-blue-50/60 rounded-2xl border border-sky-100 shadow-xs relative overflow-hidden">
          <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] h-auto">
            <circle cx="180" cy="130" r="95" fill="#38bdf8" fillOpacity="0.08" />
            
            {/* Trachea */}
            <path d="M180 40 V95" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
            <path d="M176 52 H184 M176 64 H184 M176 76 H184 M176 88 H184" stroke="#ffffff" strokeWidth="2" />

            {/* Bronchial Tree */}
            <path d="M180 95 Q150 115 130 145 M150 115 Q125 125 110 140" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
            <path d="M180 95 Q210 115 230 145 M210 115 Q235 125 250 140" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />

            {/* Left & Right Lung Soft Silhouettes */}
            <path
              d="M125 105 C100 110 85 140 85 175 C85 205 115 210 145 200 C155 195 155 160 155 130 C155 105 145 100 125 105 Z"
              fill="#e0f2fe"
              stroke="#38bdf8"
              strokeWidth="2"
              fillOpacity="0.85"
            />
            <path
              d="M235 105 C260 110 275 140 275 175 C275 205 245 210 215 200 C205 195 205 160 205 130 C205 105 215 100 235 105 Z"
              fill="#e0f2fe"
              stroke="#38bdf8"
              strokeWidth="2"
              fillOpacity="0.85"
            />

            {/* Central Heart (Cardiopulmonary Connection) */}
            <path
              d="M180 135 C170 120 152 125 155 142 C158 158 180 178 180 178 C180 178 202 158 205 142 C208 125 190 120 180 135 Z"
              fill="#ef4444"
              stroke="#b91c1c"
              strokeWidth="1.5"
            />

            {/* Oxygen Flow Indicators */}
            <circle cx="115" cy="165" r="5" fill="#0284c7" />
            <circle cx="130" cy="180" r="4" fill="#38bdf8" />
            <circle cx="245" cy="165" r="5" fill="#0284c7" />
            <circle cx="230" cy="180" r="4" fill="#38bdf8" />

            {/* Air exchange arrows */}
            <path d="M180 30 V18 M176 24 L180 18 L184 24" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            
            <g transform="translate(35, 195)">
              <rect width="90" height="24" rx="12" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" />
              <text x="45" y="16" fill="#0369a1" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                O₂ Gas Exchange
              </text>
            </g>
            <g transform="translate(235, 195)">
              <rect width="90" height="24" rx="12" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" />
              <text x="45" y="16" fill="#0369a1" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                Cardiac Output
              </text>
            </g>
          </svg>
        </div>
      );

    case "palpitations":
      return (
        <div className="w-full h-full min-h-[260px] flex items-center justify-center p-6 bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/60 rounded-2xl border border-indigo-100 shadow-xs relative overflow-hidden">
          <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] h-auto">
            <circle cx="180" cy="115" r="80" fill="#6366f1" fillOpacity="0.06" />

            {/* Heart Anatomy Outline */}
            <path
              d="M180 80 C155 45 110 60 115 105 C120 140 180 185 180 185 C180 185 240 140 245 105 C250 60 205 45 180 80 Z"
              fill="#f8fafc"
              stroke="#64748b"
              strokeWidth="2"
            />

            {/* Electrical Conduction System (SA Node, AV Node, Purkinje Fibers) */}
            {/* SA Node */}
            <circle cx="140" cy="85" r="8" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
            <circle cx="140" cy="85" r="14" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.8" />
            
            {/* AV Node */}
            <circle cx="175" cy="115" r="6" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
            
            {/* Conduction pathways */}
            <path d="M144 89 Q160 100 173 113" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2" />
            <path d="M175 121 V140 M175 140 Q160 155 145 165 M175 140 Q190 155 210 165" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />

            {/* ECG Rhythm Waveform with noticeable extra premature beat */}
            <g transform="translate(30, 190)">
              <rect x="0" y="0" width="300" height="50" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
              {/* Grid lines */}
              <line x1="10" y1="25" x2="290" y2="25" stroke="#f1f5f9" strokeWidth="1" />
              {/* Baseline rhythm + Premature contraction wave */}
              <path
                d="M15 25 H50 L55 20 L60 30 L65 5 L70 38 L75 25 H105 L110 20 L115 30 L120 5 L125 38 L130 25 H155 L160 12 L166 42 L172 25 H200 L205 20 L210 30 L215 5 L220 38 L225 25 H285"
                stroke="#0284c7"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Highlight badge on the premature ectopic beat */}
              <circle cx="166" cy="27" r="18" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" fill="#fee2e2" fillOpacity="0.3" />
            </g>

            {/* Legend Labels */}
            <g transform="translate(35, 30)">
              <rect width="80" height="22" rx="11" fill="#ffffff" stroke="#fde68a" strokeWidth="1" />
              <text x="40" y="15" fill="#b45309" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                SA Node Pulse
              </text>
            </g>
            <g transform="translate(235, 30)">
              <rect width="90" height="22" rx="11" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1" />
              <text x="45" y="15" fill="#1d4ed8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                Electrical Rhythm
              </text>
            </g>
          </svg>
        </div>
      );

    case "dizziness-and-fainting":
    case "dizziness":
      return (
        <div className="w-full h-full min-h-[260px] flex items-center justify-center p-6 bg-gradient-to-br from-teal-50/80 via-white to-blue-50/60 rounded-2xl border border-teal-100 shadow-xs relative overflow-hidden">
          <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] h-auto">
            <circle cx="180" cy="130" r="90" fill="#0d9488" fillOpacity="0.05" />

            {/* Cranial / Head Profile Silhouette */}
            <path
              d="M130 160 C130 90 150 60 200 60 C240 60 260 85 260 120 C260 145 245 160 245 175 C245 190 230 205 210 205 H175"
              stroke="#94a3b8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Cerebral Blood Perfusion / Carotid Artery Tree */}
            <path d="M165 220 V160 Q165 130 185 110 M185 110 Q170 95 180 80 M185 110 Q205 95 215 85" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
            
            {/* Equilibrium / Inner Ear & Autonomic Balance rings */}
            <circle cx="215" cy="120" r="16" stroke="#0d9488" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="215" cy="120" r="8" fill="#14b8a6" fillOpacity="0.2" />

            {/* Hemodynamic Pressure Balance arrows */}
            <path d="M90 120 Q110 90 140 100" stroke="#0284c7" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M90 140 Q110 170 140 160" stroke="#0284c7" strokeWidth="2" strokeDasharray="3 3" />

            {/* Floating Info Pills */}
            <g transform="translate(30, 45)">
              <rect width="110" height="26" rx="13" fill="#ffffff" stroke="#99f6e4" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#0d9488" />
              <text x="26" y="17" fill="#0f766e" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Cerebral Perfusion
              </text>
            </g>

            <g transform="translate(225, 195)">
              <rect width="105" height="26" rx="13" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#0284c7" />
              <text x="26" y="17" fill="#0369a1" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Autonomic Reflex
              </text>
            </g>
          </svg>
        </div>
      );

    case "fatigue":
      return (
        <div className="w-full h-full min-h-[260px] flex items-center justify-center p-6 bg-gradient-to-br from-amber-50/70 via-white to-blue-50/60 rounded-2xl border border-amber-100 shadow-xs relative overflow-hidden">
          <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] h-auto">
            <circle cx="180" cy="130" r="85" fill="#f59e0b" fillOpacity="0.06" />

            {/* Energy Meter Gauge Background */}
            <path
              d="M100 160 A90 90 0 0 1 260 160"
              stroke="#e2e8f0"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Active Output Arc */}
            <path
              d="M100 160 A90 90 0 0 1 200 82"
              stroke="url(#energyGrad)"
              strokeWidth="16"
              strokeLinecap="round"
            />

            {/* Central Heart & Cellular Oxygen symbol */}
            <g transform="translate(180, 150)">
              <circle cx="0" cy="0" r="32" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
              <path
                d="M0 -12 C-8 -22 -22 -17 -20 -3 C-18 8 0 20 0 20 C0 20 18 8 20 -3 C22 -17 8 -22 0 -12 Z"
                fill="#ef4444"
              />
            </g>

            {/* Oxygen / Cellular Energy Particles */}
            <circle cx="130" cy="115" r="4" fill="#0284c7" />
            <circle cx="230" cy="115" r="4" fill="#f59e0b" />
            <circle cx="180" cy="65" r="5" fill="#38bdf8" />

            {/* Dynamic Labels */}
            <g transform="translate(35, 190)">
              <rect width="115" height="26" rx="13" fill="#ffffff" stroke="#fde68a" strokeWidth="1.5" />
              <text x="57" y="17" fill="#b45309" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                Systemic Oxygenation
              </text>
            </g>
            <g transform="translate(210, 190)">
              <rect width="115" height="26" rx="13" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1.5" />
              <text x="57" y="17" fill="#1d4ed8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                Cardiac Pump Output
              </text>
            </g>

            <defs>
              <linearGradient id="energyGrad" x1="100" y1="160" x2="200" y2="82" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ef4444" />
                <stop offset="0.5" stopColor="#f59e0b" />
                <stop offset="1" stopColor="#0284c7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "leg-pain-when-walking":
    case "leg-pain":
    case "cramping-while-walking":
      return (
        <div className="w-full h-full min-h-[260px] flex items-center justify-center p-6 bg-gradient-to-br from-rose-50/70 via-white to-blue-50/60 rounded-2xl border border-rose-100 shadow-xs relative overflow-hidden">
          <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] h-auto">
            <circle cx="180" cy="130" r="90" fill="#e11d48" fillOpacity="0.05" />

            {/* Leg & Calf Anatomy Silhouette */}
            <path
              d="M150 40 C150 80 145 120 140 160 C135 185 140 215 145 235 H185 C190 215 195 185 190 160 C185 120 180 80 180 40"
              fill="#f8fafc"
              stroke="#94a3b8"
              strokeWidth="2"
            />
            {/* Calf muscle bulge */}
            <path d="M140 130 C125 150 128 180 140 200" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />

            {/* Femoral & Popliteal Arteries with Flow Vectors */}
            <path d="M165 45 V125 Q165 145 160 170 T162 225" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
            <path d="M165 125 Q175 150 178 185" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />

            {/* Exercise Exertion Pulse / Muscle Demand Indicators in calf */}
            <circle cx="145" cy="165" r="16" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="145" cy="165" r="8" fill="#fef3c7" />

            {/* Walking Movement subtle motion lines */}
            <path d="M195 170 Q215 165 230 175" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
            <path d="M198 185 Q220 180 235 190" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />

            <g transform="translate(30, 45)">
              <rect width="115" height="26" rx="13" fill="#ffffff" stroke="#fecdd3" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#e11d48" />
              <text x="26" y="17" fill="#9f1239" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Arterial Perfusion
              </text>
            </g>

            <g transform="translate(210, 195)">
              <rect width="120" height="26" rx="13" fill="#ffffff" stroke="#fef3c7" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#d97706" />
              <text x="26" y="17" fill="#92400e" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Exertional Claudication
              </text>
            </g>
          </svg>
        </div>
      );

    case "leg-swelling":
    case "lower-limb-swelling":
      return (
        <div className="w-full h-full min-h-[260px] flex items-center justify-center p-6 bg-gradient-to-br from-cyan-50/80 via-white to-blue-50/60 rounded-2xl border border-cyan-100 shadow-xs relative overflow-hidden">
          <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] h-auto">
            <circle cx="180" cy="130" r="90" fill="#0891b2" fillOpacity="0.06" />

            {/* Lower Leg & Ankle Contour (Showing fluid retention profile) */}
            <path
              d="M135 50 C135 90 120 130 115 170 C110 195 120 220 130 235 H200 C210 220 220 195 215 170 C210 130 195 90 195 50"
              fill="#f0fdfa"
              stroke="#0891b2"
              strokeWidth="2"
            />

            {/* Deep & Superficial Vein Network */}
            <path d="M165 55 V150 Q165 180 160 215" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M165 110 Q145 140 140 180" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            <path d="M165 130 Q185 160 190 195" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

            {/* Interstitial Fluid / Edema Droplet Icons */}
            <g transform="translate(130, 180)">
              <circle cx="0" cy="0" r="6" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
              <circle cx="20" cy="15" r="5" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
              <circle cx="45" cy="5" r="7" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
              <circle cx="65" cy="18" r="5" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
            </g>

            {/* Gravity & Venous Return arrows */}
            <path d="M165 210 V175 M161 183 L165 175 L169 183" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            <g transform="translate(30, 45)">
              <rect width="115" height="26" rx="13" fill="#ffffff" stroke="#a5f3fc" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#0891b2" />
              <text x="26" y="17" fill="#0e7490" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Venous Circulation
              </text>
            </g>

            <g transform="translate(210, 195)">
              <rect width="120" height="26" rx="13" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#0284c7" />
              <text x="26" y="17" fill="#0369a1" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Interstitial Fluid
              </text>
            </g>
          </svg>
        </div>
      );

    case "leg-heaviness-and-aching":
      return (
        <div className="w-full h-full min-h-[260px] flex items-center justify-center p-6 bg-gradient-to-br from-blue-50/80 via-white to-slate-50/60 rounded-2xl border border-blue-100 shadow-xs relative overflow-hidden">
          <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] h-auto">
            <circle cx="180" cy="130" r="90" fill="#2563eb" fillOpacity="0.05" />

            {/* Vein Valve Mechanics (Valvular Reflux diagram) */}
            <rect x="145" y="45" width="70" height="170" rx="35" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
            <path d="M150 45 V215 M210 45 V215" stroke="#60a5fa" strokeWidth="4" />

            {/* Venous Valves inside the lumen */}
            {/* Upper Valve */}
            <path d="M152 90 Q170 105 178 92" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
            <path d="M208 90 Q190 105 182 92" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />

            {/* Lower Valve showing subtle retrograde pressure */}
            <path d="M152 160 Q170 175 178 162" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
            <path d="M208 160 Q190 175 182 162" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />

            {/* Downward Pressure / Heaviness indicators */}
            <path d="M180 110 V145 M176 137 L180 145 L184 137" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            <g transform="translate(30, 45)">
              <rect width="105" height="26" rx="13" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#2563eb" />
              <text x="26" y="17" fill="#1d4ed8" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                One-Way Valves
              </text>
            </g>

            <g transform="translate(225, 195)">
              <rect width="105" height="26" rx="13" fill="#ffffff" stroke="#fef3c7" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#d97706" />
              <text x="26" y="17" fill="#92400e" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Venous Pressure
              </text>
            </g>
          </svg>
        </div>
      );

    case "varicose-veins":
      return (
        <div className="w-full h-full min-h-[260px] flex items-center justify-center p-6 bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/60 rounded-2xl border border-indigo-100 shadow-xs relative overflow-hidden">
          <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] h-auto">
            <circle cx="180" cy="130" r="90" fill="#4f46e5" fillOpacity="0.05" />

            {/* Comparison of Straight Healthy Vein vs Tortuous Varicose Vein */}
            {/* Healthy Vein (Left) */}
            <path d="M125 50 V210" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
            <path d="M120 100 L125 90 L130 100 M120 160 L125 150 L130 160" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

            {/* Tortuous Superficial Vein (Right) */}
            <path
              d="M225 50 Q245 75 220 100 Q195 125 240 155 Q260 175 225 210"
              stroke="#6366f1"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* Venous distension highlights */}
            <circle cx="232" cy="150" r="14" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 2" fill="#e0e7ff" fillOpacity="0.3" />

            <g transform="translate(45, 195)">
              <rect width="90" height="24" rx="12" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" />
              <text x="45" y="16" fill="#0369a1" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                Healthy Valve
              </text>
            </g>

            <g transform="translate(210, 195)">
              <rect width="115" height="24" rx="12" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.5" />
              <text x="57" y="16" fill="#3730a3" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                Superficial Dilatation
              </text>
            </g>
          </svg>
        </div>
      );

    case "cold-or-discolored-feet":
    case "cold-feet-numbness":
    case "skin-discoloration":
      return (
        <div className="w-full h-full min-h-[260px] flex items-center justify-center p-6 bg-gradient-to-br from-sky-50/80 via-white to-blue-50/60 rounded-2xl border border-sky-100 shadow-xs relative overflow-hidden">
          <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] h-auto">
            <circle cx="180" cy="130" r="90" fill="#0284c7" fillOpacity="0.05" />

            {/* Foot Contour Silhouette */}
            <path
              d="M150 40 V140 C150 160 135 180 120 190 C100 205 105 225 130 225 H230 C250 225 255 205 235 190 C220 180 200 170 200 140 V40"
              fill="#f8fafc"
              stroke="#94a3b8"
              strokeWidth="2"
            />

            {/* Distal Microvascular Capillary Bed (Perfusion Gradient) */}
            <path d="M175 45 V140 Q175 170 150 195" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
            <path d="M175 140 Q190 170 205 195" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />

            {/* Microcirculation Web at Toes */}
            <path d="M135 200 Q145 210 155 205 M165 205 Q175 212 185 205 M195 205 Q205 212 215 205" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

            {/* Temperature & Flow indicators */}
            <circle cx="140" cy="205" r="6" fill="#bae6fd" stroke="#0284c7" strokeWidth="1" />
            <circle cx="175" cy="208" r="6" fill="#bae6fd" stroke="#0284c7" strokeWidth="1" />
            <circle cx="210" cy="205" r="6" fill="#bae6fd" stroke="#0284c7" strokeWidth="1" />

            <g transform="translate(30, 45)">
              <rect width="115" height="26" rx="13" fill="#ffffff" stroke="#fecdd3" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#dc2626" />
              <text x="26" y="17" fill="#991b1b" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Arterial Inflow
              </text>
            </g>

            <g transform="translate(210, 195)">
              <rect width="120" height="26" rx="13" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#0284c7" />
              <text x="26" y="17" fill="#0369a1" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Distal Microvasculature
              </text>
            </g>
          </svg>
        </div>
      );

    case "high-blood-pressure":
      return (
        <div className="w-full h-full min-h-[260px] flex items-center justify-center p-6 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 rounded-2xl border border-blue-100 shadow-xs relative overflow-hidden">
          <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] h-auto">
            <circle cx="180" cy="130" r="90" fill="#0284c7" fillOpacity="0.05" />

            {/* Arterial Vessel Cross-Section (Demonstrating lateral wall tension) */}
            <ellipse cx="180" cy="130" rx="90" ry="55" fill="#f8fafc" stroke="#0284c7" strokeWidth="3" />
            <ellipse cx="180" cy="130" rx="65" ry="38" fill="#ffffff" stroke="#e0f2fe" strokeWidth="2" />

            {/* Blood Flow Stream with Outward Wall Resistance Arrows */}
            <ellipse cx="180" cy="130" rx="40" ry="22" fill="#fee2e2" />
            <path d="M180 108 V90 M176 96 L180 90 L184 96" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M180 152 V170 M176 164 L180 170 L184 164" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M115 130 H95 M101 126 L95 130 L101 134" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M245 130 H265 M259 126 L265 130 L259 134" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Sphygmomanometer Digital Gauge */}
            <g transform="translate(140, 112)">
              <text x="40" y="16" fill="#0f172a" fontSize="16" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
                120/80
              </text>
              <text x="40" y="28" fill="#64748b" fontSize="8" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
                mmHg
              </text>
            </g>

            <g transform="translate(30, 40)">
              <rect width="115" height="26" rx="13" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#0284c7" />
              <text x="26" y="17" fill="#0369a1" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Arterial Elasticity
              </text>
            </g>

            <g transform="translate(215, 195)">
              <rect width="115" height="26" rx="13" fill="#ffffff" stroke="#fecdd3" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#dc2626" />
              <text x="26" y="17" fill="#991b1b" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Vascular Resistance
              </text>
            </g>
          </svg>
        </div>
      );

    case "headaches":
      return (
        <div className="w-full h-full min-h-[260px] flex items-center justify-center p-6 bg-gradient-to-br from-violet-50/70 via-white to-blue-50/60 rounded-2xl border border-violet-100 shadow-xs relative overflow-hidden">
          <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] h-auto">
            <circle cx="180" cy="130" r="90" fill="#7c3aed" fillOpacity="0.05" />

            {/* Cranial Contour */}
            <path
              d="M130 160 C130 85 150 55 200 55 C245 55 260 85 260 125 C260 150 245 165 245 180 C245 195 230 210 210 210 H175"
              stroke="#94a3b8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Cranial Microvascular System & Tension Radii */}
            <path d="M190 75 Q210 85 225 105 M200 95 Q180 105 170 120" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="210" cy="90" r="22" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
            <circle cx="210" cy="90" r="10" fill="#ffe4e6" />

            <g transform="translate(30, 45)">
              <rect width="115" height="26" rx="13" fill="#ffffff" stroke="#ddd6fe" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#7c3aed" />
              <text x="26" y="17" fill="#5b21b6" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Cranial Vasculature
              </text>
            </g>

            <g transform="translate(210, 195)">
              <rect width="120" height="26" rx="13" fill="#ffffff" stroke="#fecdd3" strokeWidth="1.5" />
              <circle cx="14" cy="13" r="4" fill="#f43f5e" />
              <text x="26" y="17" fill="#9f1239" fontSize="9" fontWeight="700" fontFamily="sans-serif">
                Hemodynamic Pressure
              </text>
            </g>
          </svg>
        </div>
      );

    default:
      return (
        <div className="w-full h-full min-h-[260px] flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 via-white to-sky-50 rounded-2xl border border-blue-100 shadow-xs relative overflow-hidden">
          <svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[320px] h-auto">
            <circle cx="180" cy="130" r="85" fill="#0284c7" fillOpacity="0.07" />
            <path
              d="M180 90 C155 55 110 70 115 115 C120 150 180 195 180 195 C180 195 240 150 245 115 C250 70 205 55 180 90 Z"
              fill="#e0f2fe"
              stroke="#0284c7"
              strokeWidth="2.5"
            />
            <path d="M120 135 H150 L160 110 L175 160 L190 120 L200 135 H240" stroke="#0369a1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
  }
}
