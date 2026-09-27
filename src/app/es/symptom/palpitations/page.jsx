import { symptomsDataEs } from "@/data/symptomsDataEs";
import SymptomPageClientEs from "@/components/SymptomPageClientEs";

export const metadata = {
  title: "Palpitaciones — Causas, Pruebas y Orientación Médica | Texas Cardiology Associates of The Woodlands",
  description:
    "Sensación de latidos acelerados, aleteos, pausas o pulsaciones en el pecho. Una evaluación tranquilizadora determina el ritmo eléctrico del corazón.",
};

export default function PalpitationsPageEs() {
  const symptom = symptomsDataEs["palpitations"];
  return <SymptomPageClientEs symptom={symptom} />;
}
