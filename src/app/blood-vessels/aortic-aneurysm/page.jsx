'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  Info,
  Stethoscope,
  Activity,
  ShieldCheck,
  HeartPulse,
  FileText,
  Clock,
  Zap,
  Apple,
} from 'lucide-react';
import GuideSidebarNav from "@/components/GuideSidebarNav";
import FAQAccordion from '@/components/FAQAccordion';

export default function AorticAneurysmPage() {
  const faqs = [
    {
      question: 'How big does an aneurysm need to be before surgery is recommended?',
      answer:
        'For Abdominal Aortic Aneurysms (AAA), repair is typically recommended when diameter reaches 5.5 cm in men or 5.0 cm in women, or if expanding faster than 0.5 cm in 6 months.',
    },
    {
      question: 'What does an aortic aneurysm rupture feel like?',
      answer:
        'A ruptured aortic aneurysm causes sudden, severe, tearing or ripping pain in the abdomen, chest, or back, rapidly accompanied by signs of hypovolemic shock. It is an immediate surgical emergency.',
    },
    {
      question: 'What is Endovascular Aneurysm Repair (EVAR)?',
      answer:
        'EVAR is a minimally invasive procedure where a stent graft is inserted through small femoral artery punctures to reinforce the weak aortic wall from within, preventing rupture without open surgery.',
    },
  ];

  const typesList = [
    {
      name: 'Abdominal Aortic Aneurysm (AAA)',
      tag: 'Most Common',
      desc: 'Bulging occurs in the abdominal section of the aorta below the renal arteries. Highly prevalent in older male smokers.',
      color: 'text-blue-700',
      bg: 'bg-blue-50',
    },
    {
      name: 'Thoracic Aortic Aneurysm (TAA)',
      tag: 'Chest Aorta',
      desc: 'Bulging located in the ascending aorta, aortic arch, or descending thoracic aorta. Associated with Marfan syndrome and bicuspid aortic valve.',
      color: 'text-purple-700',
      bg: 'bg-purple-50',
    },
    {
      name: 'Thoracoabdominal Aortic Aneurysm (TAAA)',
      tag: 'Complex Anatomical',
      desc: 'Extensive aneurysm involving both thoracic and abdominal aortic segments, requiring complex branched fenestrated stent grafts.',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
    },
    {
      name: 'Acute Aortic Dissection',
      tag: 'Medical Emergency',
      desc: 'Tear in the inner layer of the aortic wall (intima) creating a false lumen. Causes sudden tearing chest or back pain.',
      color: 'text-red-700',
      bg: 'bg-red-50',
    },
  ];

  const symptoms = [
    { title: 'Pulsating Abdominal Mass', desc: 'Sensation of a prominent throbbing beat in the central abdomen near the navel.', icon: HeartPulse },
    { title: 'Deep Back or Flank Pain', desc: 'Persistent, dull aching in the back, abdomen, or groin as aneurysm expands.', icon: Activity },
    { title: 'Sudden Tearing Back Pain', desc: 'Hallmark indicator of impending or active aortic dissection or rupture.', icon: AlertTriangle },
    { title: 'Shortness of Breath & Hoarseness', desc: 'Thoracic aneurysm compressing the trachea or recurrent laryngeal nerve.', icon: Clock },
    { title: 'Dizziness & Lightheadedness', desc: 'Transient drops in blood pressure during acute expansion or blood leak.', icon: Zap },
    { title: 'Difficulty Swallowing (Dysphagia)', desc: 'Large thoracic arch aneurysm compressing the adjacent esophagus.', icon: Info },
  ];

  const treatments = [
    { name: 'Endovascular Aneurysm Repair (EVAR / TEVAR)', desc: 'Minimally invasive stent graft deployed through groin arteries to seal and reinforce the aneurysm sac.', duration: '1–2 Hours', recovery: '1–2 Days', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80' },
    { name: 'Open Surgical Aortic Repair', desc: 'Direct open repair where weakened aortic segment is replaced with a durable synthetic Dacron graft.', duration: 'Surgical', recovery: 'Hospital Rehabilitation', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80' },
    { name: 'Ultrasound / CT Surveillance', desc: 'Serial duplex ultrasound or CT imaging every 6–12 months for small asymptomatic aneurysms (<5.0 cm).', duration: 'Periodic Scan', recovery: 'Non-invasive', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80' },
    { name: 'Strict Blood Pressure Optimization', desc: 'Aggressive BP control (<120/80 mmHg) using Beta-blockers and ARBs to reduce stress on aortic wall.', duration: 'Daily Protocol', recovery: 'Long-term Protection', image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* HERO */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Aortic Aneurysm & <br />
            Aortic Wall Health
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <GuideSidebarNav
              title="Aortic Guide Outline"
              items={[
                ['#overview', 'Overview'],
                ['#types', 'Classifications & Types'],
                ['#symptoms', 'Symptoms'],
                ['#diagnosis', 'Diagnostic Testing'],
                ['#treatment', 'Treatment & Procedures'],
                ['#living-with', 'Living with Aortic Disease'],
                ['#faqs', 'FAQs'],
              ]}
              cta={{
                title: "Experiencing Deep Chest, Back, or Abdominal Pain?",
                href: "/contact",
                btnText: "Book Evaluation",
              }}
            />
          </div>

          <div className="lg:col-span-9 space-y-12">

            {/* 1. OVERVIEW (USE IMAGE) */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is an Aortic Aneurysm?</h2>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  An aortic aneurysm is a permanent, localized dilation of the aorta measuring at least 50% greater than its normal expected diameter.
                </p>
                <p>
                  Because systemic blood pressure constantly stresses the weakened arterial wall, untreated aneurysms enlarge progressively, placing patients at risk of catastrophic rupture or dissection.
                </p>
              </div>

              {/* Banner Image */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80"
                  alt="Aortic EVAR Operating Suite"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Classifications & Types of Aortic Aneurysms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {typesList.map((t) => (
                  <div key={t.name} className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 text-base">{t.name}</h3>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${t.bg} ${t.color}`}>{t.tag}</span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. SYMPTOMS (USE ICONS) */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms of Aortic Aneurysms</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptoms.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <div key={s.title} className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100/80 hover:bg-blue-50 transition-colors space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl border border-blue-100 text-blue-600 shadow-2xs">
                          <IconComp className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base">{s.title}</h3>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-1">{s.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 4. DIAGNOSIS/TEST (USE IMAGE) */}
            <section id="diagnosis" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnosis & Surveillance</h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Non-invasive imaging accurately measures aortic diameter and tracks expansion rate:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                        alt="Abdominal Duplex Ultrasound"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Abdominal Duplex Ultrasound</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Rapid non-invasive AAA screening.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                        alt="CT Angiography (CTA)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">CT Angiography (CTA)</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">3D arterial reconstruction for EVAR stent sizing.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                        alt="MRA (Magnetic Resonance Angiography)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">MRA (Magnetic Resonance Angiography)</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Radiation-free longitudinal aortic mapping.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-slate-200/60 shadow-xs">
                      <Image
                        src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
                        alt="Echocardiography (TTE/TEE)"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                      <h3 className="font-extrabold text-slate-900 text-base">Echocardiography (TTE/TEE)</h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Evaluates ascending aortic root and aortic valve involvement.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. TREATMENT (PROCEDURES) (USE IMAGE) */}
            <section id="treatment" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Treatment & Procedures</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {treatments.map((t) => (
                  <div key={t.name} className="rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-all overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image src={t.image} alt={t.name} fill className="object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-2">
                        <span className="bg-blue-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{t.duration}</span>
                        <span className="bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{t.recovery}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">{t.name}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. LIVING WITH AORTIC ANEURYSM */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Living with an Aortic Aneurysm</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-base">Blood Pressure & Lifting Rules</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Maintain BP strictly &lt;120/80 mmHg with antihypertensives</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Avoid heavy weightlifting (&gt;20 lbs) or intense Valsalva straining</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Complete smoking cessation (smoking doubles aneurysm growth rate)</span></li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-base">Regular Surveillance Schedule</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Ultrasound every 12 months for aneurysms 3.0–4.0 cm</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Ultrasound/CT every 6 months for aneurysms 4.0–5.4 cm</span></li>
                    <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /><span>Seek immediate ER care for sudden back or abdominal pain</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. FAQS */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
              </div>
              <FAQAccordion items={faqs} />
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
