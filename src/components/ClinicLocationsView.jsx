"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Printer,
  Clock,
  Navigation,
  ExternalLink,
  Calendar,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { clinics } from "@/data/clinics";

const HEALOW_BOOKING_URL =
  "https://healow.com/apps/provider/mohamed-almahmoud-2103459";

export default function ClinicLocationsView({
  initialClinicId = null
}) {
  const [selectedClinicId, setSelectedClinicId] = useState(initialClinicId);

  const toggleClinic = (clinicId) => {
    setSelectedClinicId((prev) => (prev === clinicId ? null : clinicId));
  };

  return (
    <div className="space-y-4 w-full">
      {clinics.map((clinic) => {
        const isSelected = clinic.id === selectedClinicId;

        return (
          <div
            key={clinic.id}
            className={`rounded-2xl sm:rounded-3xl transition-all overflow-hidden ${
              isSelected
                ? "bg-white border-2 border-blue-600 shadow-md ring-4 ring-blue-600/10"
                : "bg-white border border-slate-200/90 hover:border-blue-300 shadow-xs"
            }`}
          >
            {/* Clinic Card Header (Always Clickable) */}
            <button
              type="button"
              onClick={() => toggleClinic(clinic.id)}
              className={`w-full p-5 sm:p-6 text-left cursor-pointer flex flex-col justify-between gap-3 transition-colors ${
                isSelected ? "bg-blue-50/70 hover:bg-blue-50/90" : "hover:bg-slate-50/80"
              }`}
            >
              <div className="space-y-1.5 w-full">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                    {clinic.subtitle}
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl leading-snug">
                  {clinic.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {clinic.fullAddress || clinic.address}
                </p>
              </div>

              <div
                className={`pt-3 border-t flex items-center justify-between gap-2 w-full text-xs ${
                  isSelected ? "border-blue-200/70" : "border-slate-100"
                }`}
              >
                <span className="font-bold text-blue-800 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-lg text-xs inline-flex items-center gap-1.5 shadow-2xs">
                  <Clock className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  <span>{clinic.scheduleSummary}</span>
                </span>
                <span
                  className={`text-xs font-bold inline-flex items-center gap-1.5 ${
                    isSelected ? "text-blue-700" : "text-slate-500 hover:text-blue-600"
                  }`}
                >
                  <span>{isSelected ? "Active View" : "View Location & Map"}</span>
                  {isSelected ? (
                    <ChevronUp className="h-4 w-4 shrink-0 text-blue-700" />
                  ) : (
                    <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />
                  )}
                </span>
              </div>
            </button>

            {/* Location Details Inside Same Unified Container */}
            {isSelected && (
              <div className="p-5 sm:p-7 lg:p-8 space-y-6 border-t border-blue-100 bg-white">
                {/* Action Buttons: Directions & Book Online */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full">
                  <a
                    href={clinic.mapUrl}
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
                    <span>Book through Healow</span>
                  </a>
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
                            {clinic.address}
                          </p>
                          <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                            {clinic.cityStateZip}
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
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
                            <a
                              href={`tel:${clinic.phone.replace(/[^0-9+]/g, "")}`}
                              className="text-blue-700 hover:text-blue-800 font-extrabold text-sm sm:text-base transition-colors"
                            >
                              {clinic.displayPhone}
                            </a>
                            {clinic.secondaryPhone && (
                              <>
                                <span className="text-slate-400 text-xs font-bold">/</span>
                                <a
                                  href={`tel:${clinic.secondaryPhone.replace(/[^0-9+]/g, "")}`}
                                  className="text-blue-700 hover:text-blue-800 font-extrabold text-sm sm:text-base transition-colors"
                                >
                                  {clinic.displaySecondaryPhone || clinic.secondaryPhone}
                                </a>
                              </>
                            )}
                          </div>
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
                            <div className="text-blue-700">Fax 1: <span className="font-extrabold">832-861-4762</span></div>
                            <div>Fax 2: <span className="font-bold">{clinic.displayFax}</span></div>
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
                        {clinic.schedule.map((s, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-blue-100 gap-2 shadow-2xs"
                          >
                            <span className="font-extrabold text-blue-950 flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                              {s.day}
                            </span>
                            <span className="font-extrabold text-blue-700 bg-blue-50/80 px-2.5 py-0.5 rounded-lg border border-blue-200/70 shrink-0">
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
                        key={clinic.id}
                        title={`${clinic.name} Google Map Location`}
                        src={clinic.embedMapUrl}
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
                      <span>Interactive Google Map view for {clinic.name}</span>
                      <a
                        href={clinic.mapUrl}
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
            )}
          </div>
        );
      })}
    </div>
  );
}
