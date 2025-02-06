'use client';

import type React from 'react';
import { useState } from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './ImplantPreparationFAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
  images: string[];
}

interface ImplantPreparationFAQProps {
  backgroundColor?: string;
}

const ImplantPreparationFAQ: React.FC<ImplantPreparationFAQProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: 'Скільки триває операція',
      answer:
        'Залежно від обсягу хірургічне втручання триває 1-1,5 години. На індивідуальній очній консультації пластичний хірург зможе визначити потрібний час.',
      images: [
        '/images/implant-preparation-FAQ/preparation-FAQ1.jpg',
        '/images/implant-preparation-FAQ/preparation-FAQ2.jpg',
        '/images/implant-preparation-FAQ/preparation-FAQ3.jpg',
      ],
    },
    // Додайте інші FAQ елементи тут
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Часті запитання про підготовку до заміни імплантів
        </h2>
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
              </button>
              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  <div className={styles.answerText}>
                    <p>{item.answer}</p>
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
        </div>
      </div>
    </div>
  );
};

export default ImplantPreparationFAQ;
