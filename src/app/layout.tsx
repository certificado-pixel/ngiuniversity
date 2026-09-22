import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bodoni-moda";
import "@fontsource-variable/bodoni-moda/wght-italic.css";
import "@fontsource-variable/manrope";
import "./globals.css";
import { site } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Plano de Carreira para educadores de nail design`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "NGI University",
    "AGRINGA",
    "Gizelle Silva",
    "Tande Carlos",
    "nail design",
    "curso de unhas",
    "Núcleo Global de Instrutores",
    "Educador Oficial",
    "Educador Elite",
    "curso para educador de unhas",
    "formação de instrutora de unhas",
    "Metodologia NGI",
    "FABRANI",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · Plano de Carreira para educadores de nail design`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#081026",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
