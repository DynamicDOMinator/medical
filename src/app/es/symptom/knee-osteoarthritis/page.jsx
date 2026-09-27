import { symptomsDataEs } from "@/data/symptomsDataEs";
import SymptomPageClientEs from "@/components/SymptomPageClientEs";

export const metadata = {
  title:
    "Osteoartritis de Rodilla y Tratamiento GAE — Causas, Pruebas y Orientación | Texas Cardiology Associates",
  description:
    "Conozca más sobre el dolor por osteoartritis de rodilla y la Embolización de Arterias Geniculares (GAE), un procedimiento ambulatorio comprobado que alivia la inflamación sin reemplazo articular.",
};

export default function KneeOsteoarthritisPageEs() {
  const symptom = symptomsDataEs["knee-osteoarthritis"];
  return <SymptomPageClientEs symptom={symptom} />;
}
