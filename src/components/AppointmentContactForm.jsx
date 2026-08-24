"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, AlertCircle, Loader2 } from "lucide-react";
import { clinics } from "@/data/clinics";

export default function AppointmentContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    clinicLocation: "woodlands",
    reason: "",
    contactMethod: "Phone",
    patientType: "New Patient",
    agreement: true,
    notes: "",
    _honeypot: "",
  });

  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert("Please agree to the communication consent before submitting.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          clinicLocation: formData.clinicLocation,
          reason: formData.reason.trim(),
          contactMethod: formData.contactMethod,
          patientType: formData.patientType,
          agreement: formData.agreement,
          notes: formData.notes.trim(),
          honeypot: formData._honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit appointment request.");
      }

      const selectedClinic = clinics.find((c) => c.id === formData.clinicLocation) || clinics[0];
      const params = new URLSearchParams({
        name: formData.firstName.trim(),
        location: selectedClinic ? selectedClinic.name : "The Woodlands",
        method: formData.contactMethod,
        phone: formData.phone.trim(),
      });

      // Redirect to Thank You page
      router.push(`/thank-you?${params.toString()}`);
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage(
        err.message || "An unexpected error occurred. Please call our office directly at +1 (281) 358-1950."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Request an Appointment
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Our patient coordinators will reach out within 1 business day to confirm your appointment at your preferred location.
        </p>
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start space-x-3 text-red-800 text-sm">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-bold">Unable to send request</p>
            <p className="text-xs text-red-700 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Honeypot hidden input to catch bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Don’t fill this out if you're human:
          <input
            type="text"
            name="_honeypot"
            value={formData._honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-xs font-semibold text-slate-700 mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Phone and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Preferred Clinic Location Dropdown */}
      <div>
        <label htmlFor="clinicLocation" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Preferred Clinic Location <span className="text-red-500">*</span>
        </label>
        <select
          id="clinicLocation"
          name="clinicLocation"
          value={formData.clinicLocation}
          onChange={handleChange}
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
        <label htmlFor="reason" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Reason for Appointment <span className="text-red-500">*</span>
        </label>
        <input
          id="reason"
          type="text"
          name="reason"
          required
          value={formData.reason}
          onChange={handleChange}
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
              name="contactMethod"
              value="Phone"
              checked={formData.contactMethod === "Phone"}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
            />
            <span>Phone</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="radio"
              name="contactMethod"
              value="Email"
              checked={formData.contactMethod === "Email"}
              onChange={handleChange}
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
              type="radio"
              name="patientType"
              value="New Patient"
              checked={formData.patientType === "New Patient"}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
            />
            <span>A New Patient</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="radio"
              name="patientType"
              value="Existing Patient"
              checked={formData.patientType === "Existing Patient"}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
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
            name="agreement"
            required
            checked={formData.agreement}
            onChange={handleChange}
            className="h-4 w-4 mt-0.5 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            I consent to communicate with me for treatment and scheduling purposes.
          </span>
        </label>
      </div>

      {/* Additional Notes */}
      <div>
        <label htmlFor="notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Please share any relevant medical history, preferred day, or questions..."
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-md shadow-blue-600/20 text-sm cursor-pointer disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Sending Request...</span>
          </>
        ) : (
          <>
            <Heart className="h-4 w-4" fill="currentColor" />
            <span>Request My Appointment</span>
          </>
        )}
      </button>
    </form>
  );
}
