import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coming Soon | Inopsio - Unified Cybersecurity Platform",
  description:
    "Inopsio is launching soon. The unified platform for IT security, OT protection, and compliance management. Sign up to be notified.",
  keywords: [
    "cybersecurity",
    "IT security",
    "OT security",
    "compliance",
    "SIEM",
    "vulnerability management",
    "threat intelligence",
    "MSSP",
    "white-label security",
    "ICS security",
    "NIS2",
    "GDPR",
  ],
  authors: [{ name: "Inopsio" }],
  creator: "Inopsio",
  publisher: "Inopsio",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inopsio.com",
    title: "Inopsio - Coming Soon",
    description:
      "The future of unified cybersecurity. Sign up for early access.",
    siteName: "Inopsio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inopsio - Coming Soon",
    description: "The future of unified cybersecurity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
