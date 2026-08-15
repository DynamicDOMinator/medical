import { symptomsData } from "../symptomsData";
import SymptomPageClient from "@/components/SymptomPageClient";

export const metadata = {
  title: "Palpitations — Causes, Targeted Tests & Guidance | PulseCare Clinic",
  description:
    "Feelings of a fluttering, racing, pounding, or skipped heartbeat. Reassuring evaluation determines the underlying electrical rhythm.",
};

export default function PalpitationsPage() {
  const symptom = symptomsData["palpitations"];
  return <SymptomPageClient symptom={symptom} />;
}
