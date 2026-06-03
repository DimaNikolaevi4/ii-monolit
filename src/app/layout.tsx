import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ИИ-Монолит — Решения на базе искусственного интеллекта",
  description:
    "ИИ-Монолит — комплексные решения на базе искусственного интеллекта: создание датасетов, развёртывание моделей, дообучение ИИ. Профессиональные услуги для вашего бизнеса.",
  keywords: [
    "ИИ",
    "искусственный интеллект",
    "датасеты",
    "машинное обучение",
    "fine-tuning",
    "разработка ИИ",
    "дообучение моделей",
    "развёртывание ИИ",
  ],
  authors: [{ name: "ИИ-Монолит" }],
  openGraph: {
    title: "ИИ-Монолит — Решения на базе искусственного интеллекта",
    description:
      "Комплексные решения на базе искусственного интеллекта: создание датасетов, развёртывание моделей, дообучение ИИ.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
