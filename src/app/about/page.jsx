import Link from 'next/link';
import Image from 'next/image';
import { Heart, Award, Users, Clock, ArrowRight, GraduationCap, Building2, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Dr. Mohamed Faher Almahmoud | PulseCare Cardiology',
  description: 'Learn about Dr. Mohamed Faher Almahmoud, M.D., F.A.C.C. — Board-certified cardiologist specializing in general & interventional cardiology, coronary interventions, structural heart care, and peripheral vascular disease.',
};

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
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
              <Heart className="h-10 w-10 text-sky-400" fill="currentColor" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            About Dr. Mohamed Faher Almahmoud
          </h1>
          <p className="mt-4 text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            M.D., F.A.C.C. — Board-Certified Specialist in General & Interventional Cardiology, Peripheral Vascular Disease, and Structural Heart Care.
          </p>
        </div>
      </div>

      {/* Main Profile Section */}
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
                    alt="Dr. Mohamed Faher Almahmoud, M.D., F.A.C.C."
                    fill
                    className="object-cover object-top"
                    priority
                  />
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
                    'Internal Medicine',
                    'Cardiovascular Disease',
                    'Nuclear Cardiology',
                    'Echocardiography',
                    'Cardiac CT',
                    'RPVI (Vascular)'
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center space-x-2 bg-white px-3 py-2 rounded-xl border border-blue-100 font-semibold text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Full Biography */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Dr. Mohamed Faher Almahmoud, <span className="text-blue-600">M.D., F.A.C.C.</span>
                </h2>
                <p className="text-blue-600 font-bold text-sm mt-1">
                  Cardiologist & Interventional Vascular Specialist
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Dr. Almahmoud is a board-certified cardiologist specialized in general and interventional cardiology with interest in coronary artery disease, peripheral vascular disease and valvular/structural heart disease.
                </p>
                <p>
                  Dr. Almahmoud has expertise in clinical research with interests in weight loss, atrial fibrillation, heart failure, valvular heart disease, atherosclerosis and hyperlipidemia (high cholesterol). He completed two years of NIH sponsored clinical research fellowship and participated in several landmark clinical trials targeting atherosclerosis and ischemic heart disease.
                </p>
                <p>
                  His expertise includes advanced coronary interventions, peripheral vascular disease and structural/valvular heart disease. Including a variety of minimally invasive trans-catheter procedures for patients with deep venous thrombosis, pulmonary embolism, aortic stenosis (TAVR and aortic valvuloplasty), mitral regurgitation (MitraClip), atrial septal defect (ASD), patent foramen ovale (PFO), and hypertrophic cardiomyopathy (HOCM).
                </p>
                <p>
                  He is also trained on advanced mechanical support devices for patients with acute heart failure and cardiogenic shock.
                </p>
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="text-xs font-semibold text-blue-900">
                    Dr. Almahmoud loves to spend his free time playing sports and spending time with his family.
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

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl font-extrabold">Ready to Schedule a Consultation?</h3>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Book an appointment with Dr. Mohamed Faher Almahmoud for general cardiology, interventional consultation, or second opinions.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3.5 bg-sky-300 hover:bg-white text-blue-950 font-bold rounded-xl transition-all shadow-md">
            Book Consultation with Dr. Almahmoud
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
