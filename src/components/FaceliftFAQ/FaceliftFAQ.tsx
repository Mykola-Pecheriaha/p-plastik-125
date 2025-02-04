'use client';

import type React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './FaceliftFAQ.module.css';
import ConsultationButton from '../../components/ConsultationButton/ConsultationButton';

interface FAQItem {
  question: string;
  answer: string;
  images: string[];
}

interface FaceliftFAQProps {
  backgroundColor?: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Як проводиться підтяжка обличчя та шиї?',
    answer:
      "Підготовка до втручання розпочнеться з першої консультації у пластичного хірурга Світлани Работенко у Львові у клініці Vidnova. Фахівець приймає пацієнтів з усіх міст України. На індивідуальній зустрічі Світлана Работенко докладно розповість про те, якою буває пластика овалу обличчя. Разом ви визначите найбільш відповідний метод, виходячи з якості (товщини, пружності та еластичності) шкіри, яка піддається підтяжці, виду хірургічного розрізу, площі проведення операції.\n\nКонсультація у пластичного хірурга Світлани Работенко включає:\n\n- спілкування з пацієнтом та визначення очікувань від пластичної;\n- перегляд подібних випадків – фото до та після;\n- прогнозування результату.\n\nСвітлана Работенко перед операцією призначає обов'язкове комплексне обстеження, яке проводиться на базі клініки Vidnova лише за кілька годин. Потім, виходячи з отриманих даних та анатомічних особливостей пацієнта, підбирається методика проведення корекції. Також вона залежить від завдань, які мають бути досягнуті.\nХірургічне втручання проводиться під загальною анестезією. Із застосуванням сучасного та максимально безпечного інгаляційного наркозу. Тривалість операції – до 3 годин.",
    images: [
      '/images/face-plastic/face-lifting.jpg',
      '/images/face-plastic/procedure2.jpg',
      '/images/face-plastic/procedure3.jpg',
    ],
  },
  {
    question: 'Як довго зберігається результат після операції?',
    answer:
      'На тривалість результату операції впливають такі фактори:\n\n- вік пацієнта;\n- доопераційний стан шкірного покриву обличчя;\n- наявність шкідливих звичок;\n- суворе дотримання лікарських рекомендацій.\n\nПовторна підтяжка овалу може бути проведена через 15-20 років.',
    images: [
      '/images/face-plastic/face-lifting.jpg',
      '/images/face-plastic/result2.jpg',
      '/images/face-plastic/result3.jpg',
    ],
  },
];

const FaceliftFAQ: React.FC<FaceliftFAQProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Часті запитання про підтяжку обличчя та шиї
        </h2>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={`${styles.question} ${openIndex === index ? styles.open : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <h3>{item.question}</h3>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {openIndex === index && (
              <div className={styles.answer}>
                <div className={styles.answerText}>
                  {item.answer.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <div className={styles.answerGallery}>
                  <PrimmaGallery
                    images={item.images}
                    galleryId={`faq-${index}`}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
        <ConsultationButton />
      </div>
    </div>
  );
};

export default FaceliftFAQ;
