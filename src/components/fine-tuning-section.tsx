"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Brain,
  Layers,
  Target,
  TrendingUp,
  Cog,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaqSection, type FaqItem } from "@/components/faq-section";
import { ContactBlock } from "@/components/contact-block";

const processSteps = [
  {
    icon: Target,
    title: "Анализ задачи и подбор модели",
    description:
      "Изучаем вашу задачу, данные и требования. Подбираем базовую модель — open-source (Llama, Mistral, Qwen) или коммерческую — и определяем стратегию дообучения.",
  },
  {
    icon: Brain,
    title: "Подготовка обучающих данных",
    description:
      "Форматируем и очищаем данные, создаём instruction-наборы, разделяем на train/val/test. При необходимости генерируем синтетические данные для увеличения выборки.",
  },
  {
    icon: Layers,
    title: "Дообучение модели",
    description:
      "Проводим LoRA/QLoRA или полное дообучение на GPU-кластере. Настраиваем гиперпараметры, используем современные техники: DPO, RLHF, quantization-aware training.",
  },
  {
    icon: BarChart3,
    title: "Оценка и бенчмарки",
    description:
      "Замеряем метрики на тестовом наборе, сравниваем с базовой моделью, проводим экспертную оценку, A/B тестирование при необходимости. Итеративно улучшаем результат.",
  },
  {
    icon: Cog,
    title: "Оптимизация и передача",
    description:
      "Квантуем модель для эффективного инференса, оптимизируем размер, документируем результаты экспериментов и передаём веса с инструкциями по использованию.",
  },
];

const benefits = [
  {
    icon: Lightbulb,
    title: "Глубокая экспертиза",
    description:
      "Опыт дообучения десятков моделей для задач NLP, CV, рекомендаций. Знаем, что работает, а что нет.",
  },
  {
    icon: TrendingUp,
    title: "Эффективность",
    description:
      "LoRA позволяет получить результат быстрее и дешевле, а полное дообучение — максимальное качество для сложных задач.",
  },
  {
    icon: BarChart3,
    title: "Измеримый результат",
    description:
      "Метрики, бенчмарки, экспертная оценка — вы видите объективное улучшение модели после дообучения.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Какие модели вы дообучаете?",
    answer:
      "LLM (Llama, Mistral, Qwen и др.), модели компьютерного зрения, рекомендации, поиск. Работаем с open-source и коммерческими моделями.",
  },
  {
    question: "Сколько данных нужно для дообучения?",
    answer:
      "Для LoRA — от 100 примеров, для полного дообучения — от 10 000. Оптимальный объём зависит от задачи и модели.",
  },
  {
    question: "В чём разница между LoRA и полным дообучением?",
    answer:
      "LoRA быстрее и дешевле, адаптирует часть параметров. Полное дообучение — глубокая адаптация модели, требует больше данных и ресурсов, но даёт лучший результат для сложных задач.",
  },
  {
    question: "Как оценивается результат?",
    answer:
      "Автоматические метрики (accuracy, F1, BLEU и др.), экспертная оценка на тестовом наборе, A/B тестирование в продакшене.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function FineTuningSection() {
  return (
    <section id="fine-tuning" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-3.5 w-3.5 mr-1" />
            Коммерческое предложение
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Дообучение ИИ-моделей
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Готовая модель не решает вашу задачу «из коробки»? Дообучение — ключ к тому, чтобы ИИ работал именно так, как вам нужно. Мы адаптируем модели под вашу предметную область, стиль общения, специфичные задачи и требования к качеству. LoRA для быстрого старта или полное дообучение для максимального результата.
          </p>
          <p className="text-muted-foreground max-w-3xl mt-3 leading-relaxed">
            Используем передовые методы: LoRA, QLoRA, RLHF, DPO, quantization-aware training. Работаем с LLM, моделями компьютерного зрения, рекомендательными системами и поисковыми моделями. Каждый проект сопровождается детальной оценкой — вы увидите объективное улучшение по метрикам и результатам экспертной проверки.
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
                icon: Layers,
                title: "LoRA / QLoRA",
                desc: "Быстрая и эффективная адаптация с минимальными ресурсами",
              },
              {
                icon: Brain,
                title: "Полное дообучение",
                desc: "Глубокая адаптация всех параметров для сложных задач",
              },
              {
                icon: BarChart3,
                title: "Оценка качества",
                desc: "Автоматические метрики, бенчмарки, экспертная оценка",
              },
              {
                icon: Cog,
                title: "Оптимизация",
                desc: "Квантование, дистилляция, прунинг для эффективного инференса",
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
