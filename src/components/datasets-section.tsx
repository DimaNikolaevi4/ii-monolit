"use client";

import { motion } from "framer-motion";
import {
  Database,
  Search,
  Tag,
  CheckCircle,
  FileOutput,
  ClipboardList,
  Users,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaqSection, type FaqItem } from "@/components/faq-section";
import { ContactBlock } from "@/components/contact-block";

const processSteps = [
  {
    icon: ClipboardList,
    title: "Анализ требований",
    description:
      "Определяем структуру данных, требования к качеству, объём и форматы. Составляем техническое задание и оцениваем сроки.",
  },
  {
    icon: Search,
    title: "Сбор данных",
    description:
      "Находим и собираем данные из открытых источников, предоставленных вами баз, парсим сайты, работаем с API. При необходимости организуем краудсорсинг.",
  },
  {
    icon: Tag,
    title: "Разметка и аннотирование",
    description:
      "Размечаем данные по вашим спецификациям: классификация, сегментация, NER, выделение сущностей, оценка релевантности и другие типы аннотаций.",
  },
  {
    icon: CheckCircle,
    title: "Валидация и контроль качества",
    description:
      "Автоматическая проверка форматов, ручная валидация выборки, расчёт межаннотаторского согласия, итеративная доработка до требуемого уровня качества.",
  },
  {
    icon: FileOutput,
    title: "Форматирование и передача",
    description:
      "Конвертируем в нужный формат, документируем схему данных, передаём датасет с полным описанием и инструкциями по использованию.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Конфиденциальность",
    description: "Подписываем NDA, работаем на выделенной инфраструктуре, гарантируем защиту ваших данных.",
  },
  {
    icon: Users,
    title: "Экспертная команда",
    description: "Специалисты с опытом в NLP, CV, рекомендательных системах — понимаем специфику каждой задачи.",
  },
  {
    icon: Database,
    title: "Масштабируемость",
    description: "От сотен до миллионов записей — адаптируем процесс под любой объём без потери качества.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Сколько стоит создание датасета?",
    answer:
      "Стоимость зависит от объёма данных, сложности разметки и требований к качеству. Свяжитесь с нами для бесплатной оценки вашего проекта.",
  },
  {
    question: "Какие форматы данных вы поддерживаете?",
    answer:
      "Мы работаем со всеми популярными форматами: CSV, JSON, JSONL, Parquet, TFRecord, а также кастомными форматами по вашим требованиям.",
  },
  {
    question: "Как обеспечивается качество данных?",
    answer:
      "Многоуровневый контроль: автоматическая валидация, ручная проверка выборки, межаннотаторское согласие, итеративная доработка.",
  },
  {
    question: "Работаете ли вы под NDA?",
    answer:
      "Да, мы подписываем NDA перед началом работы и гарантируем конфиденциальность ваших данных на всех этапах.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function DatasetsSection() {
  return (
    <section id="datasets" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="mb-16">
          <Badge variant="secondary" className="mb-4">
            <Database className="h-3.5 w-3.5 mr-1" />
            Коммерческое предложение
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Создание датасетов
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Качественный датасет — основа любого ИИ-решения. Мы обеспечиваем полный цикл подготовки данных: от сбора и разметки до валидации и форматирования. Каждый этап контролируется экспертами, а результат — готовый к обучению датасет, соответствующий вашим требованиям и стандартам качества.
          </p>
          <p className="text-muted-foreground max-w-3xl mt-3 leading-relaxed">
            Работаем с текстовыми, визуальными, аудио и мультимодальными данными. Поддерживаем любые схемы аннотирования — от простой классификации до сложных иерархических структур и связей между сущностями. Наш опыт позволяет создавать датасеты, на которых модели показывают стабильно высокие результаты.
          </p>
        </motion.div>

        {/* What's included */}
        <motion.div {...fadeInUp} className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Что входит в услугу
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Search, title: "Сбор данных", desc: "Парсинг, API, краудсорсинг, открытые источники" },
              { icon: Tag, title: "Аннотирование", desc: "Разметка по спецификации: NER, сегментация, классификация" },
              { icon: CheckCircle, title: "Валидация", desc: "Автоматическая и ручная проверка качества" },
              { icon: FileOutput, title: "Конвертация", desc: "Любые форматы: JSONL, Parquet, TFRecord, кастом" },
            ].map((item) => (
              <Card key={item.title} className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <item.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
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
            Почему выбирают нас
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
