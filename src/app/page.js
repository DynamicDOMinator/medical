import HomeClient from '@/components/HomeClient';

export const metadata = {
  title: 'Texas Cardiology Associates of The Woodlands | tcathewoodlands.com',
  description: 'Comprehensive patient resources and clinical care guides for heart conditions, arrhythmias, vascular health, PAD, venous disease, and preventive cardiology at tcathewoodlands.com.',
  openGraph: {
    title: 'Texas Cardiology Associates of The Woodlands | tcathewoodlands.com',
    description: 'Comprehensive patient resources and clinical care guides for heart conditions, arrhythmias, vascular health, PAD, venous disease, and preventive cardiology at tcathewoodlands.com.',
    url: 'https://tcathewoodlands.com',
    siteName: 'Texas Cardiology Associates of The Woodlands',
    images: [
      {
        url: '/TCA40weblogo.png',
        width: 800,
        height: 600,
        alt: 'Texas Cardiology Associates of The Woodlands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas Cardiology Associates of The Woodlands | tcathewoodlands.com',
    description: 'Comprehensive patient resources and clinical care guides for heart conditions, arrhythmias, vascular health, PAD, venous disease, and preventive cardiology at tcathewoodlands.com.',
    images: ['/TCA40weblogo.png'],
  },
};

export default function Home() {
  return <HomeClient />;
}
