"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, AlertCircle, Loader2 } from "lucide-react";
import { clinics } from "@/data/clinics";

export default function AppointmentContactFormEs() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    clinicLocation: "woodlands",
    reason: "",
    contactMethod: "Teléfono",
    patientType: "Paciente Nuevo",
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
      alert("Por favor acepte el consentimiento de comunicación antes de enviar.");
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
          contactMethod: formData.contactMethod === "Teléfono" ? "Phone" : "Email",
          patientType: formData.patientType === "Paciente Nuevo" ? "New Patient" : "Existing Patient",
          agreement: formData.agreement,
          notes: formData.notes.trim(),
          honeypot: formData._honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "No se pudo enviar la solicitud de cita.");
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
        err.message || "Ocurrió un error inesperado. Por favor llame directamente a nuestra oficina al +1 (281) 358-1950."
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
          Solicitar una Cita
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Nuestros coordinadores de pacientes se comunicarán con usted dentro de 1 día hábil para confirmar su cita en la ubicación de su preferencia.
        </p>
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start space-x-3 text-red-800 text-sm">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-bold">No se pudo enviar la solicitud</p>
            <p className="text-xs text-red-700 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Honeypot hidden input to catch bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          No llene esto si es humano:
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
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Juan"
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Apellido <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Pérez"
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Phone and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Número de Teléfono <span className="text-red-500">*</span>
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
            Correo Electrónico <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="juan@ejemplo.com"
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Preferred Clinic Location Dropdown */}
      <div>
        <label htmlFor="clinicLocation" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Ubicación Preferida de la Clínica <span className="text-red-500">*</span>
        </label>
        <select
          id="clinicLocation"
          name="clinicLocation"
          value={formData.clinicLocation}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white"
        >
          <option value="woodlands">TCA – The Woodlands (The Woodlands, TX 77384) — Viernes: 8:00 AM – 1:00 PM</option>
          <option value="spring">TCA – Spring (Spring / Houston, TX 77090) — Lun y Mié: 12:00 PM – 5:00 PM</option>
          <option value="kingwood">TCA – Kingwood (Kingwood, TX 77339) — Mar: 8:00 AM – 1:00 PM | Jue: 1:00 PM – 5:00 PM</option>
        </select>
      </div>

      {/* Reason for Visit / Appointment */}
      <div>
        <label htmlFor="reason" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Motivo de la Cita <span className="text-red-500">*</span>
        </label>
        <input
          id="reason"
          type="text"
          name="reason"
          required
          value={formData.reason}
          onChange={handleChange}
          placeholder="ej. Dolor de pecho, arritmia, cardiología general, segunda opinión..."
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
        />
      </div>

      {/* Preferred contact method */}
      <div>
        <label className="block text-xs font-bold text-slate-800 mb-2">
          Método preferido de contacto <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-6">
          <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="radio"
              name="contactMethod"
              value="Teléfono"
              checked={formData.contactMethod === "Teléfono"}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
            />
            <span>Teléfono</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="radio"
              name="contactMethod"
              value="Correo electrónico"
              checked={formData.contactMethod === "Correo electrónico"}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
            />
            <span>Correo electrónico</span>
          </label>
        </div>
      </div>

      {/* Who are you? */}
      <div>
        <label className="block text-xs font-bold text-slate-800 mb-2">
          ¿Quién es usted? <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="radio"
              name="patientType"
              value="Paciente Nuevo"
              checked={formData.patientType === "Paciente Nuevo"}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
            />
            <span>Un Paciente Nuevo</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
            <input
              type="radio"
              name="patientType"
              value="Paciente Existente"
              checked={formData.patientType === "Paciente Existente"}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
            />
            <span>Un Paciente Existente</span>
          </label>
        </div>
      </div>

      {/* Agreement */}
      <div className="pt-2 border-t border-slate-100">
        <label className="block text-xs font-bold text-slate-800 mb-2">
          Acuerdo <span className="text-red-500">*</span>
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
            Doy mi consentimiento para comunicarme con fines de tratamiento y programación de citas.
          </span>
        </label>
      </div>

      {/* Additional Notes */}
      <div>
        <label htmlFor="notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Notas Adicionales
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Comparta cualquier historial médico relevante, día preferido o preguntas..."
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
            <span>Enviando Solicitud...</span>
          </>
        ) : (
          <>
            <Heart className="h-4 w-4" fill="currentColor" />
            <span>Solicitar Mi Cita</span>
          </>
        )}
      </button>
    </form>
  );
}
