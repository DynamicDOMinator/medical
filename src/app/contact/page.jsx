import Image from "next/image";
import { Heart, Calendar, ExternalLink, MapPin, Printer, Phone, Mail } from "lucide-react";
import ClinicLocationsView from "@/components/ClinicLocationsView";
import { clinics } from "@/data/clinics";

export const metadata = {
  title: "Contact & Clinic Locations | Dr. Mohamed Faher Almahmoud",
  description:
    "Schedule an appointment with Dr. Mohamed Faher Almahmoud at our 4 Texas Cardiology Associates locations in Houston (Northwest), Kingwood, Spring, and The Woodlands.",
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
            Clinic Locations &amp; Contact
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Book an appointment with Dr. Mohamed Faher Almahmoud across our 4
            practice locations in Northwest Houston, Kingwood, Spring, and The
            Woodlands.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        {/* Top: Appointment Form Section */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Request an Appointment
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Our patient coordinators will reach out within 1 business day
                to confirm your appointment at your preferred location.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Preferred Clinic Location Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Preferred Clinic Location <span className="text-red-500">*</span>
              </label>
              <select
                defaultValue="kingwood"
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white"
              >
                {clinics.map((clinic) => (
                  <option key={clinic.id} value={clinic.id}>
                    {clinic.name} ({clinic.cityStateZip}) — {clinic.scheduleSummary}
                  </option>
                ))}
              </select>
            </div>

            {/* Reason for Visit / Appointment */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Reason for Appointment <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Chest pain, arrhythmia, general cardiology, second opinion..."
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Preferred contact method */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-2">
                Preferred contact method <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="contact_method"
                    value="Phone"
                    defaultChecked
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Phone</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="contact_method"
                    value="Email"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Email</span>
                </label>
              </div>
            </div>

            {/* Who are you? */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-2">
                Who are you? <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap items-center gap-6">
                <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    name="patient_type"
                    value="New Patient"
                    defaultChecked
                    className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>A New Patient</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    name="patient_type"
                    value="Existing Patient"
                    className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>An Existing Patient</span>
                </label>
              </div>
            </div>

            {/* Agreement */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-800 mb-2">
                Agreement <span className="text-red-500">*</span>
              </label>
              <label className="flex items-start space-x-2.5 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  defaultChecked
                  className="h-4 w-4 mt-0.5 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  I consent to communicate with me for treatment and
                  scheduling purposes.
                </span>
              </label>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Additional Notes
              </label>
              <textarea
                rows={3}
                placeholder="Please share any relevant medical history, preferred day, or questions..."
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-md shadow-blue-600/20 text-sm cursor-pointer">
              <Heart className="h-4 w-4" fill="currentColor" />
              <span>Request My Appointment</span>
            </button>
          </div>

          {/* Direct Contact Summary Info Bar */}
          <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="bg-blue-50 border border-blue-100 p-2.5 rounded-xl text-blue-600 shrink-0">
                <Printer className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Personal Fax
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
                  Main Practice Line
                </p>
                <a
                  href="tel:+12813581950"
                  className="text-sm font-extrabold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  +1 (281) 358-1950
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
              <span>Book Online</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Dedicated Full-Width Clinic Locations Section */}
        <div className="pt-8 border-t border-slate-200/80 space-y-6">
          <div className="flex items-center space-x-2.5 text-blue-700">
            <MapPin className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Clinic Locations &amp; Google Maps
            </h2>
          </div>
          <ClinicLocationsView initialClinicId="kingwood" />
        </div>
      </div>
    </div>
  );
}
