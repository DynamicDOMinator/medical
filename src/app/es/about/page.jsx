import Link from "next/link";
import Image from "next/image";
import ReviewsSlider from "@/components/ReviewsSlider";
import PatientGuidanceAccordion from "@/components/PatientGuidanceAccordion";
import BrowseThisPageDrawer from "@/components/BrowseThisPageDrawer";
import ClinicLocationsViewEs from "@/components/ClinicLocationsViewEs";
import {
  Award,
  ArrowRight,
  GraduationCap,
  Building2,
  CheckCircle2,
  ExternalLink,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Sobre el Dr. Mohamed Faher Almahmoud | Texas Cardiology Associates of The Woodlands",
  description:
    "Conozca al Dr. Mohamed Faher Almahmoud MD, MS, RPVI, CBCCT, FACC, FSCAI — Cardiólogo certificado especializado en cardiología general e intervencionista, intervenciones coronarias y enfermedad vascular periférica.",
};

const approachPointsEs = [
  {
    title: "Evaluamos el panorama completo.",
    desc: "Tomamos en cuenta sus síntomas, historial médico, estilo de vida, factores de riesgo y resultados de pruebas, no solo un hallazgo aislado.",
  },
  {
    title: "Nos enfocamos en la prevención.",
    desc: "Identificar el riesgo cardiovascular a tiempo ayuda a prevenir complicaciones antes de que se conviertan en un problema mayor.",
  },
  {
    title: "Realizamos estudios con propósito.",
    desc: "Utilizamos pruebas específicas e individualizadas, evitando procedimientos innecesarios siempre que sea posible.",
  },
  {
    title: "Elegimos opciones mínimamente invasivas.",
    desc: "Cuando se requiere una intervención, consideramos enfoques mínimamente invasivos siempre que sean adecuados para usted.",
  },
  {
    title: "Acompañamiento a largo plazo.",
    desc: "Sus necesidades cardiovasculares pueden cambiar, por lo que monitoreamos su salud continuamente y ajustamos su tratamiento.",
  },
  {
    title: "Escuchamos y explicamos con claridad.",
    desc: "Sus dudas, preferencias y metas son una parte fundamental en cada decisión médica.",
  },
  {
    title: "Estamos ahí cuando nos necesita.",
    desc: "Los síntomas preocupantes o urgentes merecen una evaluación oportuna y la atención que le corresponde.",
  },
];

const patientGuidancePointsEs = [
  {
    title: "Ninguna inquietud es insignificante.",
    desc: "Si algo le preocupa sobre su salud, queremos escucharlo con atención.",
  },
  {
    title: "Los pequeños cambios importan.",
    desc: "Cansancio nuevo, falta de aire, palpitaciones o cambios en su capacidad física son motivos importantes para consultar.",
  },
  {
    title: "Hable con confianza con nosotros.",
    desc: "Compartir sus medicamentos, efectos secundarios o retos diarios nos permite crear un plan que realmente funcione para su vida.",
  },
  {
    title: "Traiga sus estudios previos.",
    desc: "Pruebas e informes anteriores nos ayudan a entender su evolución y evitan repetir estudios innecesarios.",
  },
  {
    title: "Un resultado anormal no siempre requiere un procedimiento.",
    desc: "Muchas afecciones cardíacas se controlan eficazmente con medicamentos, cambios saludables de hábitos y seguimiento.",
  },
  {
    title: "Un estudio normal no significa descuidar la prevención.",
    desc: "Cuidar su corazón es un proceso constante, incluso cuando los estudios de hoy sean tranquilizadores.",
  },
  {
    title: "Sus metas personales son prioritarias.",
    desc: "Su atención médica debe alinearse con lo que es valioso para usted y su familia.",
  },
];

const googleReviewsEs = [
  {
    name: "Jasmin V.",
    badge: "Paciente Verificado",
    date: "Hace 2 meses",
    rating: 5,
    text: "El Dr. Almahmoud ha sido una fuente de tranquilidad durante momentos difíciles. Tiene una combinación excepcional de conocimiento y compasión genuina. Se toma el tiempo de escuchar y crea un ambiente seguro y de apoyo.",
  },
  {
    name: "Jamie Barnett",
    badge: "5 reseñas",
    date: "Hace 3 meses",
    rating: 5,
    text: "¡Adoro al Dr. Almahmoud! Escucha todo lo que dices, atiende cada inquietud y no presiona con procedimientos innecesarios. Me hospitalizaron la semana pasada y él me llamó personalmente para ver cómo estaba.",
  },
  {
    name: "Bonnie Drones",
    badge: "Guía Local · 17 reseñas",
    date: "Hace 1 mes",
    rating: 5,
    text: "El Dr. Mohamed es el MEJOR médico que hay. Me devolvió la calidad de vida con el procedimiento que me realizó. No puedo agradecerle lo suficiente. Es un doctor que realmente escucha.",
  },
  {
    name: "Kathy Savell",
    badge: "Paciente Verificado",
    date: "Hace 1 mes",
    rating: 5,
    text: "Tengo 73 años y es el médico más atento y considerado que he conocido. Cuando pasa visita en el hospital y ve mi nombre, siempre viene a ver si necesito algo o para brindarme su consejo.",
  },
  {
    name: "Reseña de Paciente",
    badge: "Reseña de Google",
    date: "Hace 3 meses",
    rating: 5,
    text: "El Dr. Almahmoud tiene una calidez única. Desde la primera consulta sientes que estás con un médico dispuesto a adaptar su experiencia al paciente y a sus necesidades.",
  },
];

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Mohamed+Faher+Almahmoud,+M.D.,+F.A.C.C/@30.0510449,-95.2432324,17z/data=!3m1!5s0x8640b2b3bb230983:0xd5d65ccbea669bd1!4m8!3m7!1s0x8640b30fdf4f3879:0x9c8238f6e7902f2b!8m2!3d30.0510449!4d-95.2406575!9m1!1b1!16s%2Fg%2F11qng1wk14";

const providerMenuItemsEs = [
  { id: "overview", title: "Dr. Almahmoud" },
  { id: "our-approach", title: "Nuestro Enfoque" },
  { id: "our-commitment", title: "Nuestro Compromiso" },
  { id: "hear-from-others", title: "Opiniones de Pacientes" },
  { id: "location", title: "Ubicaciones" },
];

export default function SpanishAboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Side-Docked Browse this page Menu Drawer */}
      <BrowseThisPageDrawer menuItems={providerMenuItemsEs} />
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=2000&q=80"
            alt="Dr Almahmoud Acerca de Fondo"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-blue-950/60 to-slate-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Sobre el Dr. Mohamed Faher Almahmoud
          </h1>
          <p className="mt-4 text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            MD, MS, RPVI, CBCCT, FACC, FSCAI — Especialista certificado en cardiología general e intervencionista, enfermedad vascular periférica y cardiopatía estructural.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {/* Profile Card */}
        <div id="overview" className="bg-white border border-blue-100 rounded-3xl p-6 sm:p-12 shadow-xl scroll-mt-24 sm:scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Doctor Photo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden bg-white p-2 border border-slate-200/90 shadow-lg">
                <div className="relative h-96 sm:h-[480px] w-full rounded-2xl overflow-hidden bg-white">
                  <Image
                    src="/personal.png"
                    alt="Dr. Mohamed Faher Almahmoud MD, MS, RPVI, CBCCT, FACC, FSCAI"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Doctor Title Overlay (Mobile) */}
                  <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="sm:hidden absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/20 shadow-xl text-center">
                    <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight">
                      <div>Dr. Mohamed Faher Almahmoud</div>
                      <div className="text-blue-600 text-[11px] font-bold mt-0.5 tracking-tight">
                        MD, MS, RPVI, CBCCT, FACC, FSCAI
                      </div>
                    </h3>
                    <p className="text-blue-600 text-[11px] font-bold mt-1">
                      Cardiólogo Intervencionista y Estructural
                    </p>
                    <p className="text-slate-600 text-[10.5px] font-semibold mt-0.5">
                      Práctica en TCA
                    </p>
                  </div>
                </div>
              </div>

              {/* 7 Board Certifications */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span>Certificaciones del Consejo Médico (Board)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    "Medicina Interna",
                    "Enfermedad Cardiovascular",
                    "Cardiología Intervencionista",
                    "Cardiología Nuclear",
                    "Ecocardiografía",
                    "Tomografía Cardíaca (CBCCT)",
                    "RPVI (Vascular)",
                  ].map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 bg-white px-3 py-2 rounded-xl border border-blue-100 font-semibold text-slate-700"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hospital Privileges Card */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Building2 className="h-4 w-4 text-blue-600" />
                  <span>Privilegios Hospitalarios</span>
                </div>
                <ul className="text-xs text-slate-700 space-y-2 font-medium">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Houston Methodist The Woodlands</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Memorial Hermann The Woodlands</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>HCA Houston Healthcare Kingwood (Kingwood Medical Center)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Memorial Hermann Northeast Hospital</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>HCA Houston Healthcare Northwest (Houston Northwest Hospital)</span>
                  </li>
                </ul>
              </div>

              {/* Google Scholar Citations Button */}
              <a
                href="https://scholar.google.com/citations?hl=en&user=Zz9JBy4AAAAJ&view_op=list_works&sortby=pubdate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200/90 rounded-2xl font-bold text-xs transition-all shadow-xs group"
              >
                <BookOpen className="h-4 w-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <span>Publicaciones en Google Scholar</span>
                <ExternalLink className="h-3.5 w-3.5 text-blue-500 opacity-75" />
              </a>
            </div>

            {/* Right: Full Biography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="hidden sm:block">
                <h2 className="text-3xl font-extrabold text-slate-900">
                  <div>Dr. Mohamed Faher Almahmoud</div>
                  <div className="text-blue-600 text-xl lg:text-2xl font-bold mt-1 tracking-tight">
                    MD, MS, RPVI, CBCCT, FACC, FSCAI
                  </div>
                </h2>
                <p className="text-blue-600 font-bold text-sm mt-1">
                  Cardiólogo Intervencionista y Estructural
                </p>
                <p className="text-slate-600 font-semibold text-sm mt-0.5">
                  Práctica médica en TCA
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  El Dr. Almahmoud es un cardiólogo certificado especializado en cardiología general e intervencionista, con un enfoque centrado en el paciente para ayudar a las personas a alcanzar una mejor salud cardiovascular y llevar vidas plenas y activas. Sus áreas de interés clínico abarcan la enfermedad arterial coronaria, afecciones vasculares periféricas y cardiopatías estructurales y valvulares.
                </p>
                <p>
                  Actualmente se desempeña como Profesor de Cardiología en la Universidad de Houston en Kingwood Medical Center. También funge como Jefe de Cardiología y Director del Laboratorio de Cateterismo Cardíaco en Houston Northwest Hospital, donde atiende a pacientes con afecciones cardiovasculares complejas.
                </p>
                <p>
                  Con amplia capacitación tanto clínica como en investigación cardiovascular, aporta un enfoque basado en la evidencia. Completó dos años de investigación clínica patrocinada por los NIH y una maestría en Ciencias Clínicas y Poblacionales en Wake Forest University.
                </p>
                <p>
                  Tiene alta especialidad en procedimientos cardiovasculares mínimamente invasivos: tratamiento de la enfermedad coronaria, cateterismo vascular periférico, TAVR para estenosis aórtica, MitraClip para insuficiencia mitral y cierre de defectos congénitos como CIA y FOP.
                </p>
                <p>
                  Asimismo, cuenta con un profundo interés en la cardiología preventiva y el cuidado a largo plazo de la hipertensión, fibrilación auricular, insuficiencia cardíaca y colesterol elevado. Su prioridad es combinar la medicina cardiovascular de vanguardia con un trato cálido y personalizado.
                </p>
              </div>

              {/* Education & Fellowships */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                    <span>Educación Médica</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li>• Wake Forest University School of Medicine (MS)</li>
                    <li>• SUNY Downstate Medical Center</li>
                    <li>• American University of Beirut</li>
                    <li>• University of Aleppo</li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <Building2 className="h-4 w-4 text-blue-600" />
                    <span>Especializaciones y Docencia</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                    <li>• Univ. of Texas Medical Branch (UTMB), Galveston</li>
                    <li>• Med. Univ. of South Carolina (MUSC), Charleston</li>
                    <li>• Docente, Univ. of Houston en Kingwood Medical Center</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1 Group (Our Approach) */}
        <div id="our-approach" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-32">
          {/* Section 1 Header Banner */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white border border-blue-900/60 rounded-3xl p-6 sm:p-10 shadow-xl space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight relative z-10">
              Creemos que la mejor atención cardiovascular comienza antes de que surja un problema grave.
            </h2>
            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed relative z-10">
              Nuestro enfoque se fundamenta en la{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent font-black">
                prevención, detección oportuna y atención personalizada
              </span>
              —para que usted sea atendido como una persona completa, no solo como un diagnóstico.
            </p>
          </div>

          {/* Section 1: Philosophy / Care Approach */}
          <div id="prevention" className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8 scroll-mt-24 sm:scroll-mt-32">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Lo que distingue nuestro enfoque médico:
              </h3>
              <PatientGuidanceAccordion points={approachPointsEs} />
            </div>

            <div className="space-y-2 pt-1">
              <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
                Más que una consulta médica: un acompañamiento a largo plazo.
              </h4>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                <strong>Nuestra meta es ser su aliado en la salud del corazón.</strong> Estamos aquí para responder sus dudas, guiarlo con claridad y proteger su bienestar para los años venideros.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 Group (Our Commitment to You) */}
        <div id="our-commitment" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-32">
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white border border-blue-900/60 rounded-3xl p-6 sm:p-10 shadow-xl space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight relative z-10">
              No tiene que esperar a sentirse mal para cuidar su salud cardíaca.
            </h2>
            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed relative z-10">
              <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent font-bold">
                La evaluación preventiva y el control regular
              </span>{" "}
              marcan una diferencia decisiva en su bienestar cardiovascular.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Puntos clave que queremos que cada paciente conozca:
              </h3>
              <PatientGuidanceAccordion points={patientGuidancePointsEs} />
            </div>

            <div className="space-y-2 pt-1">
              <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
                No necesita tener todas las respuestas antes de acudir a consulta.
              </h4>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                <strong>Nuestra labor es escuchar sus dudas, explicarle detalladamente los hallazgos y ayudarle a tomar decisiones informadas sobre su corazón.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Patient Reviews Slider */}
        <div id="hear-from-others" className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8 scroll-mt-24 sm:scroll-mt-32">
          <ReviewsSlider
            reviews={googleReviewsEs}
            googleMapsUrl={GOOGLE_MAPS_URL}
          />
        </div>

        {/* Section 4: Clinic Locations */}
        <div id="location" className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-sm space-y-6 scroll-mt-24 sm:scroll-mt-32">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Ubicaciones de Nuestras Clínicas
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Seleccione una clínica para consultar su dirección, teléfonos de contacto, horarios y ubicación en Google Maps.
            </p>
          </div>
          <ClinicLocationsViewEs />
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Solicitar una Cita Médica
            </h3>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Agende su consulta con el Dr. Mohamed Faher Almahmoud en línea para cardiología general, evaluación intervencionista o segundas opiniones.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/es/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-sky-300 hover:bg-white text-blue-950 font-bold rounded-xl transition-all shadow-md text-sm"
            >
              Solicitar una Cita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://healow.com/apps/provider/mohamed-almahmoud-2103459"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all text-sm"
            >
              Reservar por Healow
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
