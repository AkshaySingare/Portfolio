import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo, socialLinks } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akshaysingare.dev"),
  title: `${personalInfo.name} | Java Developer & Backend Systems Engineer`,
  description: `${personalInfo.name} is a Java Developer specializing in Spring Boot, Spring Security, Hibernate JPA, MySQL, RESTful APIs, Linux VPS deployment, and Next.js frontend architecture.`,
  keywords: [
    "Akshay Singare",
    "Java Developer",
    "Spring Boot Developer",
    "Backend Engineer",
    "Java Backend Developer Pune",
    "Spring Security",
    "Hibernate JPA",
    "MySQL Database Optimization",
    "Linux VPS Nginx Deployment",
    "GitHub Actions CI/CD",
    "Next.js Full Stack",
    "Software Engineer Pune",
    "Veagle Space",
    "ValueXpert",
  ],
  authors: [{ name: personalInfo.name, url: "https://github.com/AkshaySingare" }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    type: "profile",
    firstName: "Akshay",
    lastName: "Singare",
    gender: "male",
    title: `${personalInfo.name} | Java Developer & Backend Systems Engineer`,
    description: "Specializing in scalable Spring Boot architectures, MySQL databases, Linux VPS infrastructure, and high-performance web systems.",
    url: "https://akshaysingare.dev",
    siteName: "Akshay Singare Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/Images/myImage.jpeg",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Java Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Java Developer & Backend Engineer`,
    description: "Java Developer specializing in Spring Boot, Spring Security, Linux VPS administration, and Next.js.",
    images: ["/Images/myImage.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: "Java Developer & Backend Engineer",
    url: "https://akshaysingare.dev",
    image: "https://akshaysingare.dev/Images/myImage.jpeg",
    sameAs: socialLinks.map((s) => s.url),
    worksFor: {
      "@type": "Organization",
      name: "Veagle Space Pvt. Ltd.",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    email: personalInfo.email,
    telephone: personalInfo.phone,
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate (JPA)",
      "MySQL",
      "RESTful API Design",
      "Linux Server Administration",
      "Nginx Reverse Proxy",
      "GitHub Actions CI/CD",
      "Next.js",
      "React.js",
      "TypeScript",
    ],
    description: personalInfo.bio,
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#080C14] text-slate-100 min-h-screen selection:bg-emerald-500/20 selection:text-emerald-300 relative overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
