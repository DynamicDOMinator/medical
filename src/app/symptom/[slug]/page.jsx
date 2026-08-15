import { notFound } from "next/navigation";
import { symptomsData } from "../symptomsData";
import SymptomPageClient from "@/components/SymptomPageClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const symptom = symptomsData[slug];
  if (!symptom) return {};

  return {
    title: `${symptom.name} — Causes, Targeted Tests & Guidance | PulseCare Clinic`,
    description: `${symptom.heroDesc} Learn about causes, what to expect during diagnostic workup, and when to seek urgent care.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(symptomsData).map((slug) => ({ slug }));
}

export default async function SymptomDetailPage({ params }) {
  const { slug } = await params;
  const symptom = symptomsData[slug];

  if (!symptom) {
    notFound();
  }

  return <SymptomPageClient symptom={symptom} />;
}
