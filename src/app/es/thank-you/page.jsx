import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Calendar, Home, Heart } from "lucide-react";
import ThankYouDetailsEs from "./ThankYouDetailsEs";

export const metadata = {
  title: "Gracias | Texas Cardiology Associates of The Woodlands",
  description:
    "Gracias por comunicarse con Texas Cardiology Associates. Nuestro equipo de atención al paciente se comunicará dentro de 1 día hábil para confirmar su cita.",
};

const HEALOW_BOOKING_URL =
  "https://healow.com/apps/provider/mohamed-almahmoud-2103459";

export default function SpanishThankYouPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=2000&q=80"
            alt="Medical Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/70 to-slate-900/50" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 border-2 border-emerald-400/60 rounded-3xl backdrop-blur-md shadow-xl mb-2 animate-fade-in-up">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            ¡Solicitud de Cita Recibida!
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Gracias por ponerse en contacto con el Dr. Mohamed Faher Almahmoud y Texas Cardiology Associates.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-20 space-y-8">
        {/* Dynamic Details Card */}
        <Suspense fallback={
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-lg text-center">
            <p className="text-slate-600">Cargando detalles de su solicitud...</p>
          </div>
        }>
          <ThankYouDetailsEs />
        </Suspense>

        {/* What Happens Next Timeline */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
            <Heart className="w-6 h-6 text-blue-600" fill="currentColor" />
            <span>¿Cuáles son los siguientes pasos?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-2">
              <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                1
              </span>
              <h3 className="font-bold text-slate-900 text-sm">Solicitud Registrada</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Su información ha sido entregada de forma segura a los coordinadores del Dr. Almahmoud.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-2">
              <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                2
              </span>
              <h3 className="font-bold text-slate-900 text-sm">Revisión y Horarios</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Revisamos su clínica de preferencia (The Woodlands, Spring o Kingwood) y disponibilidad.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-2">
              <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                3
              </span>
              <h3 className="font-bold text-slate-900 text-sm">Nos Comunicamos con Usted</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Un coordinador le llamará o enviará un correo dentro de <strong>1 día hábil</strong> para confirmar su horario.
              </p>
            </div>
          </div>
        </div>

        {/* Immediate Assistance & Direct Booking Card */}
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full uppercase tracking-wider">
              ¿Requiere Confirmación Inmediata?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Llame a Nuestra Clínica Directamente o Reserve por Healow
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg">
              Para dudas urgentes, hable con nuestra oficina en español al{" "}
              <a href="tel:+12813581950" className="underline font-bold text-white hover:text-blue-300">
                +1 (281) 358-1950
              </a>
              , o elija su propio horario en Healow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href="tel:+12813581950"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-white hover:bg-slate-100 text-blue-950 font-bold rounded-xl transition-all text-xs sm:text-sm cursor-pointer shadow-md"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Llamar al +1 (281) 358-1950</span>
            </a>
            <a
              href={HEALOW_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all text-xs sm:text-sm cursor-pointer shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Reservar por Healow</span>
            </a>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/es"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold rounded-xl text-sm transition-all shadow-sm"
          >
            <Home className="w-4 h-4 text-blue-600" />
            <span>Volver a la Página Principal</span>
          </Link>
          <Link
            href="/es/heart-care"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold rounded-xl text-sm transition-all shadow-sm"
          >
            <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            <span>Recursos de Salud del Corazón</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
