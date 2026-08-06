import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

export const metadata = {
  title: "Contact PulseCare Cardiology | Book a Consultation",
  description:
    "Get in touch with PulseCare Cardiology Clinic — book an appointment, request a consultation, or reach our 24/7 emergency cardiac line.",
};

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Clinic Information
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "120 Heart Health Way, Suite 400\nChicago, IL 60601",
                  },
                  {
                    icon: Phone,
                    label: "Main Line",
                    value: "+1 (800) 555-7857",
                  },
                  {
                    icon: Phone,
                    label: "24/7 Cardiac Emergency",
                    value: "+1 (800) 555-STAT",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@pulsecarecardiology.com",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start space-x-4">
                    <div className="bg-brand-50 p-2.5 rounded-xl shrink-0">
                      <Icon className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {label}
                      </p>
                      <p className="text-slate-800 font-medium text-sm mt-0.5 whitespace-pre-line">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-brand-600" />
                <h3 className="font-bold text-slate-800">Clinic Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  ["Monday – Friday", "8:00 AM – 6:00 PM"],
                  ["Saturday", "9:00 AM – 2:00 PM"],
                  ["Sunday", "Closed (Emergency Line Open)"],
                ].map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex justify-between text-slate-600"
                  >
                    <span>{day}</span>
                    <span className="font-semibold text-slate-800">
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-3 text-xs text-brand-700 font-medium">
                💓 Cardiac emergency? Our specialists are reachable{" "}
                <strong>24 / 7</strong> at <strong>+1 (800) 555-STAT</strong>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-7 space-y-5 shadow-xs">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Request an Appointment & Book Online
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

            {/* Preferred Location */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-2">
                Preferred Location <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap items-center gap-6">
                <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    value="Houston"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Houston</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    value="Tomball"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Tomball</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    value="Cypress"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>Cypress</span>
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
                <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    name="patient_type"
                    value="Emergency Appointment"
                    className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span>I need an Emergency Appointment</span>
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

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-md shadow-blue-600/20 text-sm">
              <Heart className="h-4 w-4" fill="currentColor" />
              <span>Request My Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
