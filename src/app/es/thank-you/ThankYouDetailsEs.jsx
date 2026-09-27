"use client";

import { useSearchParams } from "next/navigation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ThankYouDetailsEs() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const location = searchParams.get("location") || "The Woodlands (Sede Principal)";
  const method = searchParams.get("method") || "teléfono";
  const phone = searchParams.get("phone") || "";

  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
      <div className="text-center space-y-2 border-b border-slate-100 pb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {name ? `¡Muchas Gracias, ${name}!` : "¡Gracias por Comunicarse con Nosotros!"}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          Hemos recibido su solicitud de cita médica. El equipo del Dr. Almahmoud ha sido notificado en{" "}
          <strong className="text-blue-700">almahmoud@tcathewoodlands.com</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">
              Ubicación Preferida
            </p>
            <p className="font-bold text-slate-800 text-sm mt-0.5">{location}</p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-start space-x-3">
          <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">
              Tiempo de Respuesta
            </p>
            <p className="font-bold text-slate-800 text-sm mt-0.5">Dentro de 1 Día Hábil</p>
          </div>
        </div>

        {phone && (
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-start space-x-3">
            <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">
                Teléfono de Contacto
              </p>
              <p className="font-bold text-slate-800 text-sm mt-0.5">{phone}</p>
            </div>
          </div>
        )}

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-start space-x-3">
          <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">
              Canal de Contacto Preferido
            </p>
            <p className="font-bold text-slate-800 text-sm mt-0.5 capitalize">{method}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
