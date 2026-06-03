"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Eye,
  Star,
  Search,
  TrendingUp,
  Mic,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactBlock } from "@/components/contact-block";

const portfolioItems = [
  {
    icon: MessageSquare,
    title: "NLP-системы",
    description:
      "Разрабатываем чат-боты с пониманием контекста, системы анализа тональности и настроений, инструменты автоматической генерации контента. Наши решения работают с русским и другими языками, учитывают предметную область и поддерживают многоходовые диалоги.",
    tags: ["Чат-боты", "Анализ текста", "Генерация контента", "NER"],
  },
  {
    icon: Eye,
    title: "Компьютерное зрение",
    description:
      "Распознавание объектов и лиц на изображениях и видео, семантическая сегментация для медицинских и промышленных задач, OCR для автоматической обработки документов. Решения работают в реальном времени на edge-устройствах и в облаке.",
    tags: ["Распознавание объектов", "Сегментация", "OCR", "Детекция"],
  },
  {
    icon: Star,
    title: "Рекомендательные системы",
    description:
      "Персонализированные рекомендации для e-commerce, медиа и контент-платформ. Ранжирование и фильтрация с учётом пользовательского поведения, контекста и бизнес-правил. Повышаем конверсию и вовлечённость через интеллектуальные рекомендации.",
    tags: ["Персонализация", "Ранжирование", "Collaborative filtering"],
  },
  {
    icon: Search,
    title: "Поисковые системы",
    description:
      "Семантический поиск, понимающий смысл запроса, а не только ключевые слова. RAG-системы для работы с корпоративными базами знаний, гибридный поиск, объединяющий векторный и лексический подходы. Быстрый и точный поиск по миллионам документов.",
    tags: ["Семантический поиск", "RAG", "Векторные базы", "Гибридный поиск"],
  },
  {
    icon: TrendingUp,
    title: "Аналитика данных",
    description:
      "Предиктивная аналитика для прогнозирования трендов и поведения, обнаружение аномалий в финансовых транзакциях и производственных процессах, автоматическая генерация отчётов и дашбордов. Превращаем данные в решения.",
    tags: ["Предиктивная аналитика", "Аномалии", "Прогнозирование"],
  },
  {
    icon: Mic,
    title: "Голосовые технологии",
    description:
      "Системы синтеза речи (TTS) с естественным звучанием, распознавание речи (STT) для русского и других языков, голосовые ассистенты для колл-центров и сервисов. Интеграция с телефониями и платформами автоматизации.",
    tags: ["TTS", "STT", "Голосовые ассистенты"],
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-muted/50 to-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="mb-16">
          <Badge variant="secondary" className="mb-4">
            <Eye className="h-3.5 w-3.5 mr-1" />
            Экспертиза
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Разработка собственной ИИ
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Мы создаём ИИ-решения под ключ — от концепции до продакшена. Наш опыт охватывает ключевые направления искусственного интеллекта: от обработки естественного языка и компьютерного зрения до рекомендательных систем и голосовых технологий. Каждое решение — это не просто модель, а работающий продукт, решающий конкретную бизнес-задачу.
          </p>
          <p className="text-muted-foreground max-w-3xl mt-3 leading-relaxed">
            Ниже представлены направления, в которых мы обладаем глубокой экспертизой. Если вы не нашли нужную задачу — напишите нам, и мы обсудим, чем можем помочь. Наша экспертиза позволяет браться за нестандартные проекты и находить эффективные решения.
          </p>
        </motion.div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeInUp} className="text-center">
          <p className="text-muted-foreground mb-6">
            Не нашли нужное направление? Напишите нам — обсудим ваш проект и предложим решение.
          </p>
          <ContactBlock variant="card" />
        </motion.div>
      </div>
    </section>
  );
}
