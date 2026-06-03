"use client";

import { Brain, MessageCircle, ExternalLink } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Separator } from "@/components/ui/separator";

const MAX_CHAT_URL = "https://max.ru/join/iTRSfKXXbztLK4la5ITZTOpujwZKqXOOBZcsEJ03ioM";

const footerLinks = [
  { href: "#hero", label: "Главная" },
  { href: "#datasets", label: "Датасеты" },
  { href: "#deployment", label: "Развёртывание" },
  { href: "#fine-tuning", label: "Дообучение" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#legal", label: "Правовая информация" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">ИИ-Монолит</span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed mb-4">
              Комплексные решения на базе искусственного интеллекта. Создаём датасеты, развёртываем модели, дообучаем ИИ.
            </p>
            <p className="text-xs text-background/40">
              Самозанятый, НПД (4%/6%)
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-background/80">
              Навигация
            </h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-background/80">
              Связаться с нами
            </h3>
            <a
              href={MAX_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm mb-4 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Напишите нам в Макс
              <ExternalLink className="h-3 w-3" />
            </a>
            <div className="bg-white p-2 rounded-lg inline-block">
              <QRCodeSVG
                value={MAX_CHAT_URL}
                size={80}
                bgColor="#ffffff"
                fgColor="#0f8ec2"
                level="M"
              />
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/40">
          <p>&copy; {currentYear} ИИ-Монолит. Все права защищены.</p>
          <p>
            Специальный налоговый режим «Налог на профессиональный доход» (НПД)
          </p>
        </div>
      </div>
    </footer>
  );
}
