import Link from 'next/link';
import Image from 'next/image';
import { Heart, ArrowRight, Activity, Zap, Layers } from 'lucide-react';

export const metadata = {
  title: 'Heart Conditions | PulseCare Cardiology',
  description: 'Explore patient guides for Coronary Artery Disease (CAD), Arrhythmias, Valvular Heart Disease, and Congestive Heart Failure (CHF).',
};

const heartDiseases = [
  {
    slug: 'cad',
    name: 'Coronary Artery Disease (CAD)',
    tagline: 'Plaque accumulation in coronary arteries',
    description: 'Cholesterol plaque deposits narrow the coronary arteries, restricting oxygenated blood flow to the myocardium and causing angina or heart attacks.',
    image: '/images/cad.png',
    icon: Heart,
  },
  {
    slug: 'arrhythmias',
    name: 'Arrhythmias',
    tagline: 'Irregular heart rhythm & electrical disorders',
    description: 'Electrical disruptions cause the heart to beat too fast, too slow, or erratically — including Atrial Fibrillation, SVT, and Premature Ventricular Contractions.',
    image: '/images/arrhythmias.png',
    icon: Zap,
  },
  {
    slug: 'valvular-heart-disease',
    name: 'Valvular Heart Disease',
    tagline: 'Damaged or malfunctioning heart valves',
    description: 'One or more of the four heart valves fail to open completely (stenosis) or close properly (regurgitation), disrupting normal forward blood flow.',
    image: '/images/valvular.png',
    icon: Layers,
  },
  {
    slug: 'chf',
    name: 'Congestive Heart Failure (CHF)',
    tagline: 'Weakened or stiff heart muscle',
    description: 'A chronic condition where the myocardium is unable to pump sufficient oxygenated blood to meet the body\'s metabolic demands.',
    image: '/images/chf.png',
    icon: Activity,
  },
];

export default function HeartPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-20 sm:pb-24 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=2000&q=80"
            alt="Heart Conditions Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-blue-950/60 to-slate-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white/10 p-3 rounded-2xl border border-white/20 backdrop-blur-md">
              <Heart className="h-7 w-7 text-sky-300" fill="currentColor" />
            </div>
            <div>
              <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">Disease Library</span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-0.5">
                Heart Conditions
              </h1>
            </div>
          </div>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl">
            Explore our specialized patient guides for the primary heart conditions — CAD, Arrhythmias, Valvular Heart Disease, and Congestive Heart Failure.
          </p>
        </div>
      </div>

      {/* Disease Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {heartDiseases.map((disease) => {
            return (
              <Link
                key={disease.slug}
                href={`/heart/${disease.slug}`}
                className="group bg-white border border-blue-100 rounded-3xl overflow-hidden card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={disease.image}
                      alt={disease.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  </div>
                  <div className="p-7 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      {disease.tagline}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {disease.name}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">{disease.description}</p>
                  </div>
                </div>
                <div className="px-7 pb-7 flex items-center text-sm font-bold text-blue-600 group-hover:gap-2 transition-all">
                  <span>Read Complete Disease Guide</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
