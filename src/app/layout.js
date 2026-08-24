import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://tcathewoodlands.com"),
  title: {
    default: "Texas Cardiology Associates of The Woodlands | tcathewoodlands.com",
    template: "%s | Texas Cardiology Associates of The Woodlands",
  },
  description:
    "Comprehensive patient guides on Coronary Artery Disease (CAD), Palpitations, Arrhythmias, and advanced cardiac diagnostics by Dr. Mohamed Faher Almahmoud at Texas Cardiology Associates of The Woodlands.",
  openGraph: {
    title: "Texas Cardiology Associates of The Woodlands | tcathewoodlands.com",
    description:
      "Comprehensive patient resources and clinical care guides for heart conditions, arrhythmias, vascular health, PAD, venous disease, and preventive cardiology.",
    url: "https://tcathewoodlands.com",
    siteName: "Texas Cardiology Associates of The Woodlands",
    images: [
      {
        url: "/TCA40weblogo.png",
        width: 800,
        height: 600,
        alt: "Texas Cardiology Associates Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Cardiology Associates of The Woodlands | tcathewoodlands.com",
    description:
      "Comprehensive patient resources and clinical care guides for heart conditions, arrhythmias, vascular health, PAD, venous disease, and preventive cardiology.",
    images: ["/TCA40weblogo.png"],
  },
  icons: {
    icon: "/TCA40weblogo.png",
    shortcut: "/TCA40weblogo.png",
    apple: "/TCA40weblogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M55QLDTJ');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M55QLDTJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
