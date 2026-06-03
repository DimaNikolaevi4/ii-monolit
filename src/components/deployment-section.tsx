"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Container,
  Activity,
  Shield,
  Zap,
  BarChart3,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaqSection, type FaqItem } from "@/components/faq-section";
import { ContactBlock } from "@/components/contact-block";

const processSteps = [
  {
    icon: Server,
    title: "Анализ требований",
    description:
      "Изучаем вашу модель, прогнозируем нагрузку, определяем требования к задержке и доступности. Выбираем оптимальную архитектуру развёртывания.",
  },
  {
    icon: Container,
    title: "Контейнеризация и оркестрация",
    description:
      "Упаковываем модель в Docker-контейнер, настраиваем Kubernetes для автоматического масштабирования, управления ресурсами и отказоустойчивости.",
  },
  {
    icon: Activity,
    title: "Настройка мониторинга",
    description:
      "Развёртываем стек мониторинга: логирование, метрики производительности, алерты на аномалии, трекинг использования ресурсов и дрифт-детекцию.",
  },
  {
    icon: Cloud,
    title: "API и интеграция",
    description:
      "Создаём REST/gRPC API с документацией, настраиваем аутентификацию, rate limiting, версионирование моделей и CI/CD пайплайн для обновлений.",
  },
  {
    icon: Shield,
    title: "Запуск и сопровождение",
    description:
      "Плавный запуск с Canary-деплоем, нагрузочное тестирование, обучение вашей команды, настройка SLA и оперативная поддержка 24/7.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Высокая производительность",
    description:
      "Оптимизация инференса: квантование, ONNX Runtime, TensorRT — снижение задержки до 10 раз.",
  },
  {
    icon: BarChart3,
    title: "Масштабируемость",
    description:
      "Автоматическое масштабирование под нагрузку: от единичных запросов до тысяч в секунду.",
  },
  {
    icon: Shield,
    title: "Надёжность и SLA",
    description:
      "Отказоустойчивая архитектура, автоматический failover, гарантия доступности от 99.5%.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Какие облачные платформы вы поддерживаете?",
    answer:
      "AWS, Google Cloud, Azure, Yandex Cloud, Selectel, а также on-premise развёртывание на вашем оборудовании.",
  },
  {
    question: "Сколько времени занимает развёртывание?",
    answer:
      "От 1 дня для простых моделей до 2 недель для сложных распределённых систем. Точные сроки определяются после анализа требований.",
  },
  {
    question: "Предоставляете ли вы SLA?",
    answer:
      "Да, мы предлагаем SLA с гарантией доступности от 99.5% и регламентированным временем реакции на инциденты.",
  },
  {
    question: "Можно ли масштабировать решение?",
    answer:
      "Все наши решения проектируются с учётом горизонтального масштабирования и могут обрабатывать растущие нагрузки.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function DeploymentSection() {
  return (
    <section
      id="deployment"
      className="py-20 bg-gradient-to-b from-muted/50 to-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="mb-16">
          <Badge variant="secondary" className="mb-4">
            <Cloud className="h-3.5 w-3.5 mr-1" />
            Коммерческое предложение
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Развёртывание ИИ-моделей
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Модель готова, но как заставить её работать в продакшене? Мы берём на себя полный цикл развёртывания: от контейнеризации и настройки инфраструктуры до мониторинга и масштабирования. Ваша ИИ-модель будет стабильно работать под нагрузкой с минимальной задержкой и максимальной доступностью.
          </p>
          <p className="text-muted-foreground max-w-3xl mt-3 leading-relaxed">
            Работаем с любыми облачными провайдерами и on-premise решениями. Настраиваем CI/CD пайплайны для бесшовных обновлений, Canary-деплой для безопасных релизов и полный observability-стек для контроля за каждой моделью в продакшене. Вы получаете не просто запущенный сервис, а production-ready инфраструктуру.
          </p>
        </motion.div>

        {/* What's included */}
        <motion.div {...fadeInUp} className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Что входит в услугу
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Server,
                title: "Инфраструктура",
                desc: "Подбор и настройка серверов, GPU-кластеры, балансировка нагрузки",
              },
              {
                icon: Container,
                title: "Docker / Kubernetes",
                desc: "Контейнеризация, оркестрация, авто-скейлинг, rolling updates",
              },
              {
                icon: Activity,
                title: "API-эндпоинты",
                desc: "REST/gRPC API, аутентификация, rate limiting, документация",
              },
              {
                icon: BarChart3,
                title: "Мониторинг",
                desc: "Логи, метрики, алерты, дрифт-детекция, трекинг ресурсов",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="border-primary/10 hover:border-primary/30 transition-colors"
              >
                <CardContent className="p-5">
                  <item.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div {...fadeInUp} className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-8">
            Процесс работы
          </h3>
          <div className="relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-primary/20 hidden sm:block" />
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center relative z-10">
                    <span className="text-primary font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1 pb-2">
                    <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                      <step.icon className="h-4 w-4 text-primary" />
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div {...fadeInUp} className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Преимущества
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-primary/10">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div {...fadeInUp} className="mb-16">
          <FaqSection items={faqItems} />
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeInUp}>
          <ContactBlock variant="card" />
        </motion.div>
      </div>
    </section>
  );
}
