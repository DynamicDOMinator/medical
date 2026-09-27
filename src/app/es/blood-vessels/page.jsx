import Link from 'next/link';
import Image from 'next/image';
import { Droplets, ArrowRight, Zap, GitBranch } from 'lucide-react';

export const metadata = {
  title: 'Condiciones de los Vasos Sanguíneos | Texas Cardiology Associates of The Woodlands',
  description: 'Explore las guías médicas para pacientes sobre Enfermedad Venosa, Enfermedad Arterial Periférica (PAD) y Enfermedad Tromboembólica.',
};

const bloodVesselDiseasesEs = [
  {
    slug: 'venous-disease',
    name: 'Enfermedad Venosa',
    description: 'El mal funcionamiento de las válvulas venosas impide el retorno sanguíneo adecuado desde las piernas, causando insuficiencia venosa crónica, várices e hinchazón.',
    image: '/images/venous-types-visual-white.jpg',
    icon: Droplets,
  },
  {
    slug: 'peripheral-artery-disease',
    name: 'Enfermedad Arterial Periférica (PAD)',
    description: 'La placa aterosclerótica estrecha las arterias periféricas de las piernas, disminuyendo el flujo sanguíneo y provocando dolor al caminar (claudicación).',
    image: '/images/pad-overview-illustration.png',
    icon: GitBranch,
  },
  {
    slug: 'thromboembolic-disease',
    name: 'Enfermedad Tromboembólica',
    description: 'Formación de coágulos en venas profundas (trombosis venosa profunda) con riesgo de desprendimiento hacia las arterias pulmonares (embolia pulmonar).',
    image: '/content5.png',
    icon: Zap,
  },
];

export default function SpanishBloodVesselsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-20 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-0.5">
                Condiciones de los Vasos Sanguíneos
              </h1>
            </div>
          </div>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl">
            Explore nuestras guías médicas sobre las principales afecciones vasculares: Enfermedad Venosa, Enfermedad Arterial Periférica (PAD) y Enfermedad Tromboembólica.
          </p>
        </div>
      </div>

      {/* Disease Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bloodVesselDiseasesEs.map((disease) => {
            return (
              <Link
                key={disease.slug}
                href={`/es/blood-vessels/${disease.slug}`}
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
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {disease.name}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">{disease.description}</p>
                  </div>
                </div>
                <div className="px-7 pb-7 flex items-center text-sm font-bold text-blue-600 group-hover:gap-2 transition-all">
                  <span>Leer Guía Vascular Completa</span>
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
