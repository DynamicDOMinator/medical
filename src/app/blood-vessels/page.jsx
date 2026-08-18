import Link from 'next/link';
import Image from 'next/image';
import { Droplets, ArrowRight, Zap, GitBranch } from 'lucide-react';

export const metadata = {
  title: 'Blood Vessel Conditions | PulseCare Cardiology',
  description: 'Explore patient guides for Venous Disease, Peripheral Artery Disease (PAD), and Thromboembolic Disease.',
};

const bloodVesselDiseases = [
  {
    slug: 'venous-disease',
    name: 'Venous Disease',
    tagline: 'Vein valve insufficiency & leg swelling',
    description: 'Malfunctioning vein valves prevent normal upward blood flow from the legs, causing chronic venous insufficiency, varicose veins, and swelling.',
    image: '/images/venous.png',
    icon: Droplets,
  },
  {
    slug: 'peripheral-artery-disease',
    name: 'Peripheral Artery Disease (PAD)',
    tagline: 'Narrowed limb arteries reducing circulation',
    description: 'Atherosclerotic plaque narrows peripheral arteries in the legs, reducing blood flow and causing claudication pain during walking.',
    image: '/images/pad.png',
    icon: GitBranch,
  },
  {
    slug: 'thromboembolic-disease',
    name: 'Thromboembolic Disease',
    tagline: 'Blood clots, DVT & pulmonary embolism',
    description: 'Thrombus formation in deep veins (DVT) with risk of embolization to the pulmonary arteries (pulmonary embolism).',
    image: '/images/thromboembolic.png',
    icon: Zap,
  },
];

export default function BloodVesselsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-20 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white/10 p-3 rounded-2xl border border-white/20 backdrop-blur-md">
              <Droplets className="h-7 w-7 text-sky-300" />
            </div>
            <div>
              <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">Disease Library</span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-0.5">
                Blood Vessel Conditions
              </h1>
            </div>
          </div>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl">
            Explore our specialized patient guides for primary vascular conditions — Venous Disease, Peripheral Artery Disease (PAD), and Thromboembolic Disease.
          </p>
        </div>
      </div>

      {/* Disease Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bloodVesselDiseases.map((disease) => {
            return (
              <Link
                key={disease.slug}
                href={`/blood-vessels/${disease.slug}`}
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
                  <span>Read Complete Vascular Guide</span>
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
