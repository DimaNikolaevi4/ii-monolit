"use client";

import { QRCodeSVG } from "qrcode.react";
import { MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MAX_CHAT_URL = "https://max.ru/join/iTRSfKXXbztLK4la5ITZTOpujwZKqXOOBZcsEJ03ioM";

interface ContactBlockProps {
  variant?: "default" | "compact" | "card";
  className?: string;
}

export function ContactBlock({ variant = "default", className }: ContactBlockProps) {
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-4 ${className || ""}`}>
        <a
          href={MAX_CHAT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          Напишите нам в Макс
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <div className="bg-white p-2 rounded-lg shadow-sm border">
          <QRCodeSVG
            value={MAX_CHAT_URL}
            size={64}
            bgColor="#ffffff"
            fgColor="#0f8ec2"
            level="M"
          />
        </div>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <Card className={`border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 ${className || ""}`}>
        <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-foreground mb-2">
              Обсудим ваш проект?
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Напишите нам в приватный чат в Макс — ответим в течение часа в рабочее время
            </p>
            <Button asChild size="lg" className="gap-2">
              <a href={MAX_CHAT_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Напишите нам в Макс
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-md">
            <QRCodeSVG
              value={MAX_CHAT_URL}
              size={120}
              bgColor="#ffffff"
              fgColor="#0f8ec2"
              level="M"
            />
            <p className="text-xs text-center text-muted-foreground mt-2">
              Отсканируйте QR-код
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Default variant
  return (
    <div className={`flex flex-col items-center gap-6 ${className || ""}`} id="contact">
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-2xl font-bold text-foreground">
          Свяжитесь с нами
        </h3>
        <p className="text-muted-foreground text-center max-w-md">
          Напишите нам в приватный чат в Макс — обсудим ваш проект и подберём оптимальное решение
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <Button asChild size="lg" className="gap-2 text-base px-8">
          <a href={MAX_CHAT_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" />
            Напишите нам в Макс
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
        <div className="bg-white p-3 rounded-xl shadow-md border">
          <QRCodeSVG
            value={MAX_CHAT_URL}
            size={140}
            bgColor="#ffffff"
            fgColor="#0f8ec2"
            level="M"
          />
          <p className="text-xs text-center text-muted-foreground mt-2">
            Отсканируйте для перехода в чат
          </p>
        </div>
      </div>
    </div>
  );
}
