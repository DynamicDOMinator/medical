'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Menu, X, PhoneCall } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'CAD Center (Disease)', href: '/disease/cad' },
    { name: 'Palpitations (Symptom)', href: '/symptom/palpitations' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-slate-200/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-brand-500/10 p-2 rounded-lg group-hover:bg-brand-500/20 transition-colors">
                <Heart className="h-6 w-6 text-brand-600 animate-pulse" />
              </div>
              <span className="font-bold text-lg sm:text-xl text-slate-800 tracking-tight">
                Pulse<span className="text-brand-600 font-extrabold">Care</span> Cardiology
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all relative py-1 ${
                    isActive
                      ? 'text-brand-700 font-semibold'
                      : 'text-slate-600 hover:text-brand-600'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full" />
                  )}
                </Link>
              );
            })}
            <a
              href="tel:+18005557857"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-full transition-all shadow-sm hover:shadow shadow-brand-500/20 space-x-1.5"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Contact Clinic</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-600 p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-semibold border-l-4 border-brand-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-brand-600'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href="tel:+18005557857"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full mt-4 px-4 py-3 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-all space-x-2"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call PulseCare Clinic</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
