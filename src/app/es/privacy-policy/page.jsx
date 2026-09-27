import Link from "next/link";
import {
  ShieldCheck,
  AlertCircle,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Aviso de Prácticas de Privacidad | Texas Cardiology Associates of Houston",
  description:
    "Aviso de Prácticas de Privacidad para Lieber and Moore Cardiology Associates, dba Texas Cardiology Associates of Houston. Conozca cómo se utiliza, protege y divulga su información médica.",
};

export default function SpanishPrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Top Back Link */}
          <div>
            <Link
              href="/es"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Volver al Inicio</span>
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <span className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm border border-blue-400/20">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                <span>Aviso de Prácticas de Privacidad HIPAA</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Aviso de Prácticas de Privacidad
            </h1>

            <p className="text-blue-200 text-sm sm:text-base font-medium max-w-3xl">
              Lieber and Moore Cardiology Associates, dba Texas Cardiology Associates of Houston
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                Fecha de Entrada en Vigor: <strong>01/01/2023</strong>
              </span>
              <span className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                Aplica a: <strong>Todos los Médicos, Empleados y Clínicas</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Urgent Note / Summary Box */}
        <div className="bg-blue-50 border border-blue-200/90 rounded-3xl p-6 sm:p-8 space-y-3 shadow-xs">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-extrabold text-blue-950">
                Aviso Importante Respecto a su Información Médica
              </h2>
              <p className="text-blue-900/90 text-sm leading-relaxed font-semibold">
                ESTE AVISO DESCRIBE CÓMO PUEDE UTILIZARSE Y DIVULGARSE SU INFORMACIÓN MÉDICA Y CÓMO PUEDE OBTENER ACCESO A ESTA INFORMACIÓN. POR FAVOR REVÍSELO DETENIDAMENTE.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Este Aviso de Prácticas de Privacidad le informa sobre las maneras en que podemos utilizar y divulgar su información médica protegida y sus derechos y nuestras obligaciones con respecto al uso y divulgación de su información médica.
              </p>
            </div>
          </div>
        </div>

        {/* Section I: Our Obligations */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="h-8 w-8 rounded-xl bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center shrink-0">
              I
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Nuestras Obligaciones
            </h2>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            Estamos obligados por ley a:
          </p>

          <ul className="space-y-3 text-slate-700 text-sm">
            {[
              "Mantener la privacidad de su información médica, en la medida requerida por la ley estatal y federal;",
              "Entregarle este Aviso explicando nuestros deberes legales y prácticas de privacidad con respecto a su información médica;",
              "Notificar a los individuos afectados en caso de una vulneración de seguridad de su información médica bajo la ley federal; y",
              "Cumplir con los términos de la versión de este Aviso que esté vigente en este momento.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section II */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="h-8 w-8 rounded-xl bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center shrink-0">
              II
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Cómo Podemos Usar y Divulgar su Información Médica
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {[
              {
                letter: "A",
                title: "Para Tratamiento",
                text: "Podemos utilizar y divulgar su información médica para brindarle tratamiento de atención médica y servicios relacionados, incluida la coordinación y el manejo de su atención médica con otros especialistas o personal de enfermería.",
              },
              {
                letter: "B",
                title: "Para Pago y Facturación",
                text: "Podemos usar y divulgar su información médica para facturar y cobrar a usted, a una compañía de seguros o a un tercero por los servicios de salud prestados.",
              },
              {
                letter: "C",
                title: "Para Operaciones de Atención Médica",
                text: "Podemos utilizar y divulgar su información médica para nuestras operaciones internas, garantizando la calidad y la gestión óptima de nuestra práctica médica.",
              },
              {
                letter: "D",
                title: "Recordatorios de Citas y Servicios de Salud",
                text: "Podemos comunicarnos con usted para recordarle sus citas o brindarle información sobre alternativas de tratamiento y beneficios de salud disponibles.",
              },
            ].map((item) => (
              <div
                key={item.letter}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-blue-700 text-sm sm:text-base">
                    {item.letter}.
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-5">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section III: Contact */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="h-8 w-8 rounded-xl bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center shrink-0">
              III
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Contacto y Quejas de Privacidad
            </h2>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Si considera que se han infringido sus derechos de privacidad, puede comunicarse directamente con nuestro Oficial de Privacidad HIPAA.
          </p>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
              Oficial de Privacidad HIPAA de la Práctica
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <p className="font-bold text-slate-900">
                Lieber and Moore Cardiology Associates, dba Texas Cardiology Associates of Houston
              </p>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>2627 Chestnut Ridge Road, Ste 100, Kingwood, TX 77339</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                <a href="tel:2813581950" className="font-bold text-blue-700 hover:underline">
                  281-358-1950
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
