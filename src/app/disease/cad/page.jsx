import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  Info,
  Activity,
  Shield,
  Stethoscope,
  ChevronRight,
  UserCheck,
  Calendar,
  Sparkles,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function CADPage() {
  const faqs = [
    {
      question: 'What is Coronary Artery Disease (CAD)?',
      answer:
        'Coronary Artery Disease (CAD) is a cardiovascular condition caused by atherosclerosis—the gradual buildup of fatty plaque within the epicardial coronary arteries. Over time, these plaques narrow the arterial lumen, restricting oxygen-rich blood flow to the heart muscle.',
    },
    {
      question: 'What are the main warning signs of CAD?',
      answer:
        'Common symptoms include exertional chest pressure or tightness (angina), shortness of breath during routine activities, fatigue, and pain radiating to the neck, jaw, shoulder, or left arm.',
    },
    {
      question: 'What is the difference between Angina and a Heart Attack?',
      answer:
        'Angina is temporary chest pressure occurring during exertion when heart muscle demand exceeds blood supply. A heart attack (Myocardial Infarction) occurs when a plaque ruptures and completely blocks a coronary artery, causing permanent heart muscle damage.',
    },
    {
      question: 'How does Coronary Angioplasty & Stenting work?',
      answer:
        'Percutaneous Coronary Intervention (PCI) involves threading a fine catheter through a wrist or groin artery into the blocked heart artery. A balloon inflates the blockage and a drug-eluting stent is placed to keep the artery permanently open.',
    },
    {
      question: 'Can coronary plaque be reversed?',
      answer:
        'While advanced calcified plaque cannot be fully reversed, high-intensity statin therapy, PCSK9 inhibitors, and lifestyle modifications can stabilize vulnerable plaques and significantly reduce the risk of future heart attacks.',
    },
  ];

  const typesList = [
    {
      name: 'Stable Angina',
      desc: 'Predictable chest pressure occurring during physical activity or emotional stress that resolves within minutes of rest or sublingual nitroglycerin.',
    },
    {
      name: 'Unstable Angina',
      desc: 'Unpredictable chest discomfort occurring at rest or with minimal exertion. Indicates plaque disruption and high immediate risk of heart attack.',
    },
    {
      name: 'Acute Myocardial Infarction (NSTEMI / STEMI)',
      desc: 'Complete or subtotal occlusion of a coronary artery causing cardiac cell death. Requires urgent catheterization and stent revascularization.',
    },
    {
      name: 'Coronary Microvascular Disease (MVD)',
      desc: 'Damage to the walls of tiny coronary blood vessels that branch off from major arteries, causing angina despite open main arteries.',
    },
  ];

  const symptomList = [
    {
      title: 'Chest Pain or Discomfort (Angina)',
      desc: 'Pressure, squeezing, fullness, or burning sensation in the center of chest during exertion or emotional stress.',
      icon: Heart,
    },
    {
      title: 'Shortness of Breath (Dyspnea)',
      desc: 'Inability to catch breath during routine physical activities or when lying flat.',
      icon: Activity,
    },
    {
      title: 'Radiation of Pain',
      desc: 'Discomfort radiating outward into shoulders, left arm, neck, jaw, or upper back.',
      icon: Shield,
    },
    {
      title: 'Fatigue & Lightheadedness',
      desc: 'Unusual exhaustion, dizziness, cold sweats, or nausea during exertion.',
      icon: Stethoscope,
    },
  ];

  const diagnosisTests = [
    {
      title: '12-Lead Electrocardiogram (ECG)',
      desc: 'Records cardiac electrical signals to detect ischemic ST-segment changes, T-wave inversions, or prior myocardial scars.',
    },
    {
      title: 'Coronary CT Angiography (CCTA)',
      desc: 'Non-invasive high-resolution 3D CT imaging quantifying coronary artery calcium score and luminal plaque narrowing.',
    },
    {
      title: 'Stress Echocardiography / Nuclear SPECT',
      desc: 'Evaluates myocardial wall motion abnormalities and perfusion deficits under exercise or pharmacological stress.',
    },
    {
      title: 'Invasive Coronary Angiography (Gold Standard)',
      desc: 'Direct fluoroscopic visualization of coronary lumen geometry and fractional flow reserve (FFR/iFR) via arterial catheterization.',
    },
  ];

  const treatments = [
    {
      title: 'Guideline-Directed Medical Therapy (GDMT)',
      desc: 'Antiplatelets (Aspirin, Clopidogrel), high-intensity statins (Atorvastatin, Rosuvastatin), Beta-Blockers, and ACE inhibitors/ARBs to stabilize plaque.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Percutaneous Coronary Intervention (PCI / Stenting)',
      desc: 'Catheter-based balloon dilation and drug-eluting stent placement to restore vessel patency during acute or chronic ischemia.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Coronary Artery Bypass Grafting (CABG)',
      desc: 'Surgical revascularization utilizing arterial/venous grafts to bypass complex multi-vessel or left main coronary disease.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Cardiac Rehabilitation & Risk Control',
      desc: 'Structured exercise training, Mediterranean diet guidance, strict BP (<130/80) and HbA1c (<7.0%) optimization.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-sky-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/heart" className="hover:underline">Heart Conditions</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Coronary Artery Disease</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
              Coronary Artery Disease <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">(CAD)</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              A comprehensive clinical overview of coronary atherosclerosis, myocardial ischemia, diagnostic imaging, and evidence-based revascularization therapies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-600/30"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Consultation</span>
              </Link>
              <a
                href="#overview"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl backdrop-blur-sm transition-all border border-white/10"
              >
                <Sparkles className="h-5 w-5 text-sky-400" />
                <span>Explore Overview</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sticky Sidebar Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">On This Page</h3>
              <nav className="space-y-1 text-sm">
                {[
                  ['#overview', 'Overview'],
                  ['#types', 'Classifications & Types'],
                  ['#symptoms', 'Symptoms & Signs'],
                  ['#diagnosis', 'Diagnosis & Testing'],
                  ['#treatment', 'Treatment Procedures'],
                  ['#living-with', 'Living with CAD'],
                  ['#faqs', 'Patient FAQs'],
                ].map(([id, label]) => (
                  <a
                    key={id}
                    href={id}
                    className="hover:text-blue-600 text-slate-600 font-medium transition-colors flex items-center py-1 group"
                  >
                    <ChevronRight className="h-4 w-4 mr-1.5 text-blue-400 group-hover:translate-x-1 transition-transform shrink-0" />
                    <span>{label}</span>
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-100">
                  <p className="text-xs font-bold text-blue-900">Need Expert Heart Care?</p>
                  <p className="text-[11px] text-slate-600 mt-1">Consult with Dr. Almahmoud at PulseCare Clinic.</p>
                  <Link
                    href="/contact"
                    className="mt-3 block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-md shadow-blue-600/20"
                  >
                    Book Evaluation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Article Content */}
          <div className="lg:col-span-9 space-y-12">

            {/* 1. OVERVIEW (USE IMAGE) */}
            <section id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Coronary Circulation</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What is Coronary Artery Disease?</h2>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Coronary Artery Disease (CAD) is the leading cause of heart attacks and cardiovascular mortality worldwide. It develops when cholesterol, fats, calcium, and inflammatory cells accumulate within the inner lining of the major epicardial coronary arteries — the vessel channels that deliver blood, oxygen, and nutrients to your continuously pumping heart muscle.
                </p>
                <p>
                  As atherosclerotic plaque grows, it restricts blood flow to the myocardium during physical exertion or stress (causing <strong>Angina Pectoris</strong>). If a plaque ruptures, a blood clot forms instantly, completely occluding coronary blood flow and triggering an acute <strong>Myocardial Infarction (Heart Attack)</strong>.
                </p>
              </div>

              {/* Overview Medical Banner Image */}
              <div className="mt-8 relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiologist Examining Coronary Angiogram"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 2. TYPES */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Classifications & Types of CAD</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {typesList.map((t) => (
                  <div key={t.name} className="bg-white border border-slate-200/80 rounded-2xl p-5 space-y-2">
                    <h3 className="font-bold text-slate-900 text-base">{t.name}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. SYMPTOMS (USE ICONS) */}
            <section id="symptoms" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Clinical Warning Signs</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Symptoms & Indicators</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {symptomList.map((s) => {
                  const IconComp = s.icon;
                  return (
                    <div key={s.title} className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100/80 space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl border border-blue-100 text-blue-600">
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
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Stethoscope className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Diagnostic Workup</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Diagnosis & Clinical Tests</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {diagnosisTests.map((test) => (
                  <div key={test.title} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <h3 className="font-bold text-slate-900 text-base">{test.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{test.desc}</p>
                  </div>
                ))}
              </div>

              {/* Diagnosis Image */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80"
                  alt="Cardiologist Reviewing Cardiac CT & Angiography"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </section>

            {/* 5. TREATMENT (PROCEDURES) (USE IMAGE) */}
            <section id="treatment" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Revascularization & Medical Care</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Treatment & Procedures</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {treatments.map((t) => (
                  <div key={t.title} className="rounded-2xl bg-blue-50/40 border border-blue-100/80 overflow-hidden hover:border-blue-200 transition-all">
                    <div className="relative h-48 w-full">
                      <Image src={t.image} alt={t.title} fill className="object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 text-base mb-1">{t.title}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. LIVING WITH CAD */}
            <section id="living-with" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-10 shadow-xs scroll-mt-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100">
                  <UserCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Long-Term Management</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Living with CAD</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">Heart-Healthy Nutrition</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Adopt a Mediterranean diet rich in extra virgin olive oil, whole grains, vegetables, and lean fish. Limit saturated fats and sodium.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">Regular Aerobic Activity</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Aim for 150 minutes per week of moderate-intensity exercise (brisk walking, cycling) approved by your cardiologist.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h3 className="font-bold text-slate-900 text-base">Medication Adherence</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Never stop antiplatelet or statin therapy without consulting your cardiologist. Consistent dosing prevents acute stent thrombosis.
                  </p>
                </div>
              </div>
            </section>

            {/* 7. FAQS */}
            <section id="faqs" className="scroll-mt-24 space-y-6">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Patient Queries</span>
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
