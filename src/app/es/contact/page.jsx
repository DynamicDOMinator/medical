import Image from "next/image";
import { Calendar, ExternalLink, Printer, Phone, Mail } from "lucide-react";
import ClinicLocationsViewEs from "@/components/ClinicLocationsViewEs";
import AppointmentContactFormEs from "@/components/AppointmentContactFormEs";

export const metadata = {
  title: "Contacto y Citas | Dr. Mohamed Faher Almahmoud",
  description:
    "Brindamos atención médica a pacientes en (The Woodlands, Huntsville, Walker County, New Waverly y comunidades cercanas) en nuestras distintas ubicaciones.",
};

const HEALOW_BOOKING_URL =
  "https://healow.com/apps/provider/mohamed-almahmoud-2103459";

export default function SpanishContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-20 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=2000&q=80"
            alt="Contacto Fondo"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-blue-950/60 to-slate-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contacto y Citas
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Brindamos atención médica a pacientes en (The Woodlands, Huntsville, Walker County, New Waverly y comunidades cercanas) en nuestras distintas ubicaciones
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        {/* Top: Appointment Form Section */}
        <div className="max-w-3xl mx-auto space-y-4">
          <AppointmentContactFormEs />

          {/* Direct Contact Summary Info Bar */}
          <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="bg-blue-50 border border-blue-100 p-2.5 rounded-xl text-blue-600 shrink-0">
                <Printer className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Fax 1
                </p>
                <p className="text-sm font-extrabold text-blue-700">
                  832-861-4762
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="bg-blue-50 border border-blue-100 p-2.5 rounded-xl text-blue-600 shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Línea Principal
                </p>
                <a
                  href="tel:+12813581950"
                  className="text-sm font-extrabold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  +1 (281) 358-1950
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3.5">
              <div className="bg-blue-50 border border-blue-100 p-2.5 rounded-xl text-blue-600 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Correo Electrónico
                </p>
                <a
                  href="mailto:almahmoud@tcathewoodlands.com"
                  className="text-xs sm:text-sm font-extrabold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                >
                  almahmoud@tcathewoodlands.com
                </a>
              </div>
            </div>
          </div>

          {/* Direct Book Online Banner */}
          <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5 text-left w-full sm:w-auto">
              <div className="bg-blue-50 border border-blue-100 p-2.5 rounded-xl shrink-0 text-blue-600">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  ¿Prefiere agendar directamente?
                </p>
                <p className="text-xs text-slate-500">
                  Seleccione un horario y reserve en línea al instante a través de Healow.
                </p>
              </div>
            </div>
            <a
              href={HEALOW_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all text-xs sm:text-sm shadow-md shadow-blue-600/20 active:scale-95 text-center cursor-pointer"
            >
              <span>Reservar por Healow</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Dedicated Full-Width Clinic Locations Section */}
        <div id="locations" className="pt-6 border-t border-slate-200/80 scroll-mt-24">
          <ClinicLocationsViewEs />
        </div>
      </div>
    </div>
  );
}
