"use client";

import { motion } from "framer-motion";
import { ArrowDown, Brain, Database, Cloud, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Database,
    title: "Создание датасетов",
    description: "Сбор, разметка и валидация данных для обучения ИИ-моделей",
    href: "#datasets",
  },
  {
    icon: Cloud,
    title: "Развёртывание моделей",
    description: "Инфраструктура, API и мониторинг для ваших ИИ-решений",
    href: "#deployment",
  },
  {
    icon: Sparkles,
    title: "Дообучение ИИ",
    description: "Адаптация моделей под ваши задачи с помощью LoRA и полного дообучения",
    href: "#fine-tuning",
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ai_tutor.jpg"
          alt="ИИ-Монолит — решения на базе искусственного интеллекта"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            ИИ-Монолит
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4 leading-relaxed">
            Комплексные решения на базе искусственного интеллекта для вашего бизнеса
          </p>
          <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto mb-12">
            Создаём датасеты, развёртываем модели, дообучаем ИИ — полный цикл от идеи до продакшена
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-16"
        >
          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group bg-white/10 backdrop-blur-md rounded-xl p-6 text-left border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              <service.icon className="h-8 w-8 text-white mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-8"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 gap-2 text-base px-8 h-12 font-semibold"
          >
            <a href="#contact">
              Обсудить проект
              <ArrowDown className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        {/* Contact block - light variant for hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href="https://max.ru/join/iTRSfKXXbztLK4la5ITZTOpujwZKqXOOBZcsEJ03ioM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
          >
            Напишите нам в Макс →
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6 text-white/50" />
      </motion.div>
    </section>
  );
}
