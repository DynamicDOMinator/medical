import { notFound } from "next/navigation";
import { symptomsDataEs } from "@/data/symptomsDataEs";
import SymptomPageClientEs from "@/components/SymptomPageClientEs";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const symptom = symptomsDataEs[slug];
  if (!symptom) return {};

  return {
    title: `${symptom.name} — Causas, Pruebas y Orientación Médica | Texas Cardiology Associates of The Woodlands`,
    description: `${symptom.heroDesc} Conozca las causas, qué esperar durante la evaluación diagnóstica y cuándo buscar atención médica de urgencia.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(symptomsDataEs).map((slug) => ({ slug }));
}

export default async function SymptomDetailPageEs({ params }) {
  const { slug } = await params;
  const symptom = symptomsDataEs[slug];

  if (!symptom) {
    notFound();
  }

  return <SymptomPageClientEs symptom={symptom} />;
}
