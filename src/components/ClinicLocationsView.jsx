"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Printer,
  Clock,
  Navigation,
  ExternalLink,
  Calendar
} from "lucide-react";
import { clinics } from "@/data/clinics";

const HEALOW_BOOKING_URL =
  "https://healow.com/apps/provider/mohamed-almahmoud-2103459";

export default function ClinicLocationsView({
  initialClinicId = "kingwood"
}) {
  const [selectedClinicId, setSelectedClinicId] = useState(initialClinicId);

  const selectedClinic =
    clinics.find((c) => c.id === selectedClinicId) || clinics[0];

  return (
    <div className="space-y-6 w-full">
      {/* Interactive Location Selector Tabs - Responsive 1/2/4 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {clinics.map((clinic) => {
          const isSelected = clinic.id === selectedClinicId;
          return (
            <button
              key={clinic.id}
              type="button"
              onClick={() => setSelectedClinicId(clinic.id)}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                isSelected
                  ? "bg-blue-50/95 border-blue-600 shadow-md ring-2 ring-blue-600/20"
                  : "bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50/80 shadow-xs"
              }`}
            >
              <div className="space-y-1 w-full">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                  {clinic.subtitle}
                </span>
                <h4 className="font-extrabold text-slate-900 text-base leading-snug">
                  {clinic.name}
                </h4>
                <p className="text-xs text-slate-500 font-medium truncate">
                  {clinic.cityStateZip}
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100/90 flex items-center justify-between gap-2 w-full text-xs">
                <span className="font-bold text-slate-700 truncate">
                  {clinic.schedule[0].day}
                  {clinic.schedule.length > 1 ? ` & ${clinic.schedule[1].day}` : ""}
                </span>
                <span
                  className={`text-[11px] font-bold shrink-0 ${
                    isSelected ? "text-blue-700" : "text-slate-400"
                  }`}
                >
                  {isSelected ? "Active View" : "View Map →"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Clinic Details & Embedded Map Card */}
      <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 shadow-sm space-y-6">
        {/* Header with Title & Action Buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {selectedClinic.name}
            </h3>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full md:w-auto">
            <a
              href={selectedClinic.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold rounded-xl border border-blue-200 transition-all cursor-pointer shadow-xs text-center"
            >
              <Navigation className="h-4 w-4 shrink-0" />
              <span>Google Maps Directions</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-70 shrink-0" />
            </a>

            <a
              href={HEALOW_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-blue-600/20 text-center"
            >
              <Calendar className="h-4 w-4 shrink-0" />
              <span>Book Online</span>
            </a>
          </div>
        </div>

        {/* Info Cards Grid & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Address Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
              <div className="flex items-start space-x-3.5">
                <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-xs shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Full Address
                  </p>
                  <p className="text-slate-900 font-bold text-sm sm:text-base mt-0.5 leading-snug">
                    {selectedClinic.address}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                    {selectedClinic.cityStateZip}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & Fax Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
              <div className="flex items-start space-x-3.5">
                <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-xs shrink-0 mt-0.5">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Phone &amp; Appointments
                  </p>
                  <a
                    href={`tel:${selectedClinic.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-blue-700 hover:text-blue-800 font-extrabold text-sm sm:text-base mt-0.5 block transition-colors"
                  >
                    P: {selectedClinic.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 pt-2 border-t border-slate-200/70">
                <div className="bg-slate-200 p-2.5 rounded-xl text-slate-700 shadow-xs shrink-0 mt-0.5">
                  <Printer className="h-4 w-4" />
                </div>
                <div className="min-w-0 space-y-0.5">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Fax Lines
                  </p>
                  <div className="text-xs sm:text-sm text-slate-800 font-semibold space-y-0.5">
                    <div>Clinic Fax: <span className="font-bold">{selectedClinic.displayFax}</span></div>
                    <div className="text-blue-700">Personal Fax: <span className="font-extrabold">832-861-4762</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4 sm:p-5 space-y-2.5">
              <div className="flex items-center space-x-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                <Clock className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Dr. Almahmoud&apos;s Consultation Hours</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm pt-1">
                {selectedClinic.schedule.map((s, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-blue-100 gap-2"
                  >
                    <span className="font-bold text-slate-900">{s.day}</span>
                    <span className="font-extrabold text-blue-700 shrink-0">
                      {s.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7 flex flex-col space-y-2 min-h-[320px]">
            <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[360px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
              <iframe
                title={`${selectedClinic.name} Google Map Location`}
                src={selectedClinic.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full rounded-2xl"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 px-1 pt-1">
              <span>Interactive Google Map view for {selectedClinic.name}</span>
              <a
                href={selectedClinic.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-1 shrink-0"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
