"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle2, User, Phone, MapPin, Mail, Clock } from "lucide-react";

export default function ThankYouDetails() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const location = searchParams.get("location") || "The Woodlands (Main Clinic)";
  const method = searchParams.get("method") || "phone";
  const phone = searchParams.get("phone") || "";

  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
      <div className="text-center space-y-2 border-b border-slate-100 pb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {name ? `Thank You, ${name}!` : "Thank You for Contacting Us!"}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          We have received your appointment request. Dr. Almahmoud&apos;s team has been notified at{" "}
          <strong className="text-blue-700">almahmoud@tcathewoodlands.com</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">
              Preferred Location
            </p>
            <p className="font-bold text-slate-800 text-sm mt-0.5">{location}</p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-start space-x-3">
          <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">
              Response Time
            </p>
            <p className="font-bold text-slate-800 text-sm mt-0.5">Within 1 Business Day</p>
          </div>
        </div>

        {phone && (
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-start space-x-3">
            <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">
                Contact Phone
              </p>
              <p className="font-bold text-slate-800 text-sm mt-0.5">{phone}</p>
            </div>
          </div>
        )}

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-start space-x-3">
          <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-slate-500 font-semibold text-xs uppercase tracking-wider">
              Preferred Contact Channel
            </p>
            <p className="font-bold text-slate-800 text-sm mt-0.5 capitalize">{method}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
