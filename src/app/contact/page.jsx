import Image from "next/image";
import { Calendar, ExternalLink, MapPin, Printer, Phone, Mail } from "lucide-react";
import ClinicLocationsView from "@/components/ClinicLocationsView";
import AppointmentContactForm from "@/components/AppointmentContactForm";
import { clinics } from "@/data/clinics";

export const metadata = {
  title: "Contact & Appointments | Dr. Mohamed Faher Almahmoud",
  description:
    "We Provide care for patients in (The Woodlands, Huntsville, Walker County, New Waverly and nearby communities) across different practice locations.",
};

const HEALOW_BOOKING_URL =
  "https://healow.com/apps/provider/mohamed-almahmoud-2103459";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-20 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=2000&q=80"
            alt="Contact Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-blue-950/60 to-slate-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact &amp; Appointments
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            We Provide care for patients in (The Woodlands, Huntsville, Walker County, New Waverly and nearby communities) across different practice locations
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        {/* Top: Appointment Form Section */}
        <div className="max-w-3xl mx-auto space-y-4">
          <AppointmentContactForm />

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
                  Main Line
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
                  Email
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
                  Prefer direct scheduling?
                </p>
                <p className="text-xs text-slate-500">
                  Select a time slot and book online instantly via Healow.
                </p>
              </div>
            </div>
            <a
              href={HEALOW_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all text-xs sm:text-sm shadow-md shadow-blue-600/20 active:scale-95 text-center cursor-pointer"
            >
              <span>Book through Healow</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Dedicated Full-Width Clinic Locations Section */}
        <div id="locations" className="pt-8 border-t border-slate-200/80 space-y-6 scroll-mt-24">
          <div className="flex items-center space-x-2.5 text-blue-700">
            <MapPin className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Clinic Locations &amp; Google Maps
            </h2>
          </div>
          <ClinicLocationsView initialClinicId="woodlands" />
        </div>
      </div>
    </div>
  );
}
