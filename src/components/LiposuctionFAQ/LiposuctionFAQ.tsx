'use client';

import type React from 'react';
import { useState } from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './LiposuctionFAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
  images: string[];
}

interface LiposuctionFAQProps {
  backgroundColor?: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Які проблеми вирішує ліпосакція',
    answer:
      'Багато пацієнтів вважають, що ліпосакція допоможе їм позбутися зайвої ваги. Вони сприймають цю операцію як швидкий спосіб для схуднення. Важливо розуміти, що ліпосакція не замінює фізичні вправи та правильне харчування. Найчастіше вона виконується пацієнтам, які досягли своєї ідеальної ваги, але не задоволені контуром тіла або локальними жировими відкладеннями в пробемних зонах-«депо». Головна мета ліпосакції – створення нових ідеальних пропорцій та естетична корекція фігури. Найчастіше відкачування жиру виконується області живота, бічної, задньої, внутрішньої поверхні стегон, і навіть для корекції другого підборіддя, зони колін. Операцію роблять як чоловікам, і жінкам. До речі, ліпосакція живота у чоловіків сьогодні дуже затребувана. Проте потрібна попередня консультація, щоб визначити можливість проведення.',
    images: [
      '/images/liposuction/liposuction21.jpg',
      '/images/liposuction/faq1-2.jpg',
      '/images/liposuction/faq1-3.jpg',
    ],
  },
  {
    question: 'Скільки триває операція',
    answer:
      'Тривалість від 30 хвилин до 1,5 години, залежно від обсягу. На очній консультації пластичний хірург зможе визначити потрібний час.',
    images: [
      '/images/liposuction/liposuction14.jpg',
      '/images/liposuction/faq2-2.jpg',
    ],
  },
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        {item.question}
      </button>
      {isOpen && (
        <div className={styles.faqAnswer}>
          <div className={styles.answerText}>
            <p>{item.answer}</p>
          </div>
          <div className={styles.answerGallery}>
            <PrimmaGallery
              images={item.images}
              galleryId={`faq-${item.question}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const LiposuctionFAQ: React.FC<LiposuctionFAQProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.title}>Поширені запитання</h1>
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiposuctionFAQ;
