import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Exercise {
  id: number;
  title: string;
  duration: string;
  description: string;
  benefits: string[];
  videoUrl: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: 'Кошка-Корова',
    duration: '3-5 минут',
    description: 'Мягкое упражнение для разминки позвоночника, улучшает подвижность и снимает напряжение в спине.',
    benefits: [
      'Улучшает гибкость позвоночника',
      'Снимает напряжение в мышцах спины',
      'Массирует органы брюшной полости',
      'Улучшает осанку'
    ],
    videoUrl: 'https://www.youtube.com/embed/kqnua4rHVVA'
  },
  {
    id: 2,
    title: 'Поза ребенка',
    duration: '2-3 минуты',
    description: 'Расслабляющая поза для восстановления и растяжки спины, идеально подходит для снятия стресса.',
    benefits: [
      'Растягивает мышцы спины и бедер',
      'Успокаивает нервную систему',
      'Снимает усталость',
      'Улучшает кровообращение'
    ],
    videoUrl: 'https://www.youtube.com/embed/2MTbkRD905w'
  },
  {
    id: 3,
    title: 'Мостик на лопатках',
    duration: '4-5 минут',
    description: 'Укрепляющее упражнение для мышц спины, ягодиц и задней поверхности бедра.',
    benefits: [
      'Укрепляет мышцы кора',
      'Раскрывает грудную клетку',
      'Улучшает баланс',
      'Снимает боль в пояснице'
    ],
    videoUrl: 'https://www.youtube.com/embed/wPM8icPu6H8'
  },
  {
    id: 4,
    title: 'Скручивания лежа',
    duration: '3-4 минуты',
    description: 'Мягкое скручивание позвоночника для улучшения подвижности и массажа внутренних органов.',
    benefits: [
      'Улучшает подвижность позвоночника',
      'Массирует внутренние органы',
      'Снимает напряжение в спине',
      'Улучшает пищеварение'
    ],
    videoUrl: 'https://www.youtube.com/embed/4pKly2JojMw'
  }
];

const faqs = [
  {
    question: 'Как часто нужно делать эти упражнения?',
    answer: 'Рекомендуется выполнять комплекс упражнений 3-4 раза в неделю. Для профилактики достаточно 15-20 минут в день. При наличии проблем со спиной консультируйтесь с врачом перед началом занятий.'
  },
  {
    question: 'Можно ли делать упражнения при острой боли в спине?',
    answer: 'При острой боли в спине необходимо обратиться к врачу. Эти упражнения предназначены для профилактики сколиоза и общего укрепления спины, а не для лечения острых состояний.'
  },
  {
    question: 'Какие противопоказания есть у этих упражнений?',
    answer: 'Основные противопоказания: острые травмы позвоночника, грыжи межпозвоночных дисков в стадии обострения, высокое артериальное давление, беременность (без консультации врача). Всегда консультируйтесь со специалистом перед началом занятий.'
  },
  {
    question: 'Когда появятся первые результаты?',
    answer: 'При регулярных занятиях первые улучшения вы почувствуете через 2-3 недели: уменьшится напряжение в спине, улучшится осанку. Стойкий эффект формируется через 2-3 месяца регулярной практики.'
  },
  {
    question: 'Нужно ли специальное оборудование?',
    answer: 'Нет, для выполнения этих упражнений достаточно коврика для йоги или просто мягкой поверхности. Удобная одежда, которая не стесняет движений — это всё, что вам нужно.'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-secondary py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Здоровая спина
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Комплекс упражнений для профилактики сколиоза и укрепления позвоночника
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-20">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Видео-упражнения
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {exercises.map((exercise) => (
              <Card key={exercise.id} className="overflow-hidden hover-scale transition-all duration-300 bg-white border-border shadow-sm">
                <div className="aspect-video bg-muted relative">
                  <iframe
                    src={exercise.videoUrl}
                    title={exercise.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {exercise.title}
                    </h3>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {exercise.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exercise.description}
                  </p>
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-2">Польза:</p>
                    <ul className="space-y-1">
                      {exercise.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20 bg-secondary rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="bg-accent text-accent-foreground rounded-3xl p-12 text-center shadow-lg">
          <Icon name="Play" size={48} className="mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-4">
            Углубленный курс по здоровью спины
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Хотите узнать больше? Получите доступ к полной видео-лекции с детальным разбором техники, персональными рекомендациями и комплексом упражнений для разных уровней подготовки.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-accent hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold shadow-md"
          >
            Перейти к платной видео-лекции
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </section>
      </main>

      <footer className="bg-secondary py-8 px-6 mt-20">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Здоровая спина. Консультируйтесь с врачом перед началом занятий.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;