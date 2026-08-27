import { symptomsData } from "../symptomsData";
import SymptomPageClient from "@/components/SymptomPageClient";

export const metadata = {
  title:
    "Knee Osteoarthritis & GAE Treatment — Causes, Targeted Tests & Guidance | Texas Cardiology Associates",
  description:
    "Learn about knee osteoarthritis pain and Genicular Artery Embolization (GAE), a proven non-surgical outpatient procedure that relieves chronic knee inflammation without joint replacement.",
};

export default function KneeOsteoarthritisPage() {
  const symptom = symptomsData["knee-osteoarthritis"];
  return <SymptomPageClient symptom={symptom} />;
}
