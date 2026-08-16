import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Heart, Navigation, ExternalLink, Printer, Calendar } from "lucide-react";

export const metadata = {
  title: "Contact PulseCare Cardiology | Book a Consultation",
  description:
    "Get in touch with PulseCare Cardiology Clinic — book an appointment, request a consultation, or reach our 24/7 emergency cardiac line.",
};

const GOOGLE_MAPS_LOCATION_URL =
  "https://www.google.com/maps/search/?api=1&query=150+Pine+Forest+Drive+%23+102,+The+Woodlands,+TX+77384";

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
            Get in Touch
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Reach our clinical team for appointment booking, second opinions, or
            general cardiac health inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form Column - ORDER 1 ON PHONE (Mobile), ORDER 2 ON DESKTOP */}
          <div className="order-1 lg:order-2 space-y-4">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Request an Appointment
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Our patient coordinators will reach out within 1 business day to confirm your appointment.
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

              {/* Reason for Visit / Appointment (TEXT INPUT as requested) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Reason for Appointment <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Type the reason for your appointment (e.g. Chest pain, arrhythmia, second opinion...)"
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
                    className="h-4 w-4 mt-0.5 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I consent to communicate with me for treatment purposes.
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
                  placeholder="Please share any relevant medical history or symptoms..."
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-md shadow-blue-600/20 text-sm cursor-pointer">
                <Heart className="h-4 w-4" fill="currentColor" />
                <span>Request My Appointment</span>
              </button>
            </div>

            {/* Direct Book Online Banner outside the form container */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
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

          {/* Clinic Information & Google Map with Hours - ORDER 2 ON PHONE (Mobile), ORDER 1 ON DESKTOP */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* Contact details */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 space-y-5 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                Clinic Information
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "150 Pine Forest Drive # 102\nThe Woodlands, TX 77384, United States",
                  },
                  {
                    icon: Phone,
                    label: "Main Line",
                    value: "+1 (281) 358-1950",
                    isTel: true,
                  },
                  {
                    icon: Printer,
                    label: "Fax Number",
                    value: "+1 (281) 358-1923",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@pulsecarecardiology.com",
                    isMail: true,
                  },
                ].map(({ icon: Icon, label, value, isTel, isMail }) => (
                  <div key={label} className="flex items-start space-x-3.5">
                    <div className="bg-blue-50 border border-blue-100 p-2.5 rounded-xl shrink-0 text-blue-600 mt-0.5">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        {label}
                      </p>
                      {isTel ? (
                        <a
                          href={`tel:${value.replace(/[^0-9+]/g, "")}`}
                          className="text-slate-800 hover:text-blue-600 font-semibold text-sm mt-0.5 block transition-colors"
                        >
                          {value}
                        </a>
                      ) : isMail ? (
                        <a
                          href={`mailto:${value}`}
                          className="text-slate-800 hover:text-blue-600 font-semibold text-sm mt-0.5 block transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-800 font-medium text-sm mt-0.5 whitespace-pre-line leading-relaxed">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinic Hours */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="flex items-center space-x-2.5 text-blue-700">
                <Clock className="h-5 w-5 text-blue-600 shrink-0" />
                <h3 className="font-bold text-slate-900 text-base">Clinic Hours</h3>
              </div>
              <div className="space-y-2.5 text-sm divide-y divide-slate-100 pt-1">
                {[
                  ["Monday – Thursday", "8:00 AM – 6:00 PM"],
                  ["Friday", "8:00 AM – 1:00 PM"],
                  ["Saturday", "9:00 AM – 2:00 PM"],
                  ["Sunday", "Closed (Emergency Line Open)"],
                ].map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex justify-between items-center text-slate-600 pt-2 first:pt-0"
                  >
                    <span className="font-medium text-slate-700">{day}</span>
                    <span className="font-bold text-slate-900">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map View Location with Directions Button */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center space-x-2 text-slate-900 font-bold text-base">
                  <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                  <span>Google Map View Location</span>
                </div>
                <a
                  href={GOOGLE_MAPS_LOCATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-lg border border-blue-200 transition-all shrink-0"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </a>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                <iframe
                  title="PulseCare Clinic Google Map Location"
                  src="https://maps.google.com/maps?q=150+Pine+Forest+Drive+%23+102,+The+Woodlands,+TX+77384&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
