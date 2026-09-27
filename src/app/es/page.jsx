import HomeClientEs from "@/components/HomeClientEs";

export const metadata = {
  title: "Texas Cardiology Associates of The Woodlands | Atención Cardíaca y Vascular Especializada",
  description:
    "Guías clínicas y atención médica especializada para afecciones cardíacas, arritmias, salud vascular, PAD, várices y cardiología preventiva en The Woodlands y el área metropolitana de Houston.",
  openGraph: {
    title: "Texas Cardiology Associates of The Woodlands | Cardiólogo Especialista",
    description:
      "Guías clínicas y atención médica especializada para afecciones cardíacas, arritmias, salud vascular y cardiología preventiva.",
    url: "https://tcathewoodlands.com/es",
    siteName: "Texas Cardiology Associates of The Woodlands",
    images: [
      {
        url: "/TCA40weblogo.png",
        width: 800,
        height: 600,
        alt: "Texas Cardiology Associates of The Woodlands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Cardiology Associates of The Woodlands | Cardiólogo Especialista",
    description:
      "Guías clínicas y atención médica especializada para afecciones cardíacas, arritmias, salud vascular y cardiología preventiva.",
    images: ["/TCA40weblogo.png"],
  },
};

export default function SpanishHomePage() {
  return <HomeClientEs />;
}
