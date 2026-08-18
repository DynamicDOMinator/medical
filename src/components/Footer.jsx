import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Phone, MapPin, ShieldAlert } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand block */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center bg-white/95 px-3 py-1.5 rounded-xl transition-opacity hover:opacity-90 shadow-sm"
            >
              <Image
                src="/TCA40weblogo.png"
                alt="Texas Cardiology Associates Logo"
                width={150}
                height={38}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Dr. Almahmoud is committed to provide personalized care for every
              stage of your cardiovascular health. Your long-term health
              companion.
            </p>
            <div className="flex flex-col space-y-2.5 text-sm pt-2">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  4 TCA Locations: Northwest, Kingwood, Spring &amp; The Woodlands
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-400 shrink-0" />
                <a
                  href="tel:+12813581950"
                  className="hover:text-white transition-colors"
                >
                  +1 (281) 358-1950 / (281) 440-7373
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-400 shrink-0" />
                <a
                  href="mailto:info@pulsecarecardiology.com"
                  className="hover:text-white transition-colors"
                >
                  info@pulsecarecardiology.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Medical Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home &amp; Clinical Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Dr. Almahmoud
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Clinic Locations &amp; Maps
                </Link>
              </li>
              <li>
                <Link
                  href="/heart-care"
                  className="hover:text-white transition-colors"
                >
                  Heart Health Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Doctor Weekly Schedule */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Doctor Schedule
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex justify-between">
                <span>Mon (Northwest):</span>
                <span className="text-white font-medium">12:00 PM – 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Tue (Kingwood):</span>
                <span className="text-white font-medium">8:00 AM – 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Wed (Spring):</span>
                <span className="text-white font-medium">12:00 PM – 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Thu (Kingwood):</span>
                <span className="text-white font-medium">1:00 PM – 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri (Woodlands):</span>
                <span className="text-white font-medium">8:00 AM – 1:00 PM</span>
              </li>
              <li className="flex justify-between text-brand-400 pt-1 border-t border-slate-800">
                <span>Appointments:</span>
                <span className="font-semibold">Online via Healow</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 pt-2">
            <p>
              &copy; {currentYear} PulseCare Cardiology Clinic. All rights
              reserved.
            </p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <a href="#" className="hover:text-slate-300">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
