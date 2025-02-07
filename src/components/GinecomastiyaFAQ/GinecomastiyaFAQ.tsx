'use client';

import type React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './GinecomastiyaFAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
  images: string[];
}

interface GinecomastiyaFAQProps {
  backgroundColor?: string;
}

const GinecomastiyaFAQ: React.FC<GinecomastiyaFAQProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'Скільки триває операція з видалення гінекомастії',
      answer:
        'Хірургічне втручання займає до 1 години залежно від обсягу. Використовується інгаляційний наркоз на Севофлурані. Він забезпечує комфортний вхід у медикаментозний сон та вихід без галюцинацій.\n\nЛіпосакція проводиться під місцевою анестезією (пацієнт свідомий) і займає 30-40 хвилин. За кілька годин пацієнт може їхати додому із рекомендаціями від фахівця. Госпіталізація не потрібна.',
      images: [
        '/images/GinecomastiyaFAQ/photoFAQ2 .jpg',
        '/images/GinecomastiyaFAQ/photoFAQ1.jpg',
      ],
    },
    // Додайте інші FAQ елементи тут
  ];

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.title}>Поширені запитання</h1>
        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.question}
                onClick={() => toggleItem(index)}
              >
                <h2>{item.question}</h2>
                {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              {expandedIndex === index && (
                <div className={styles.answer}>
                  <div className={styles.answerText}>
                    {item.answer.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  <div className={styles.answerGallery}>
                    <PrimmaGallery
                      images={item.images}
                      galleryId={`faq-gallery-${index}`}
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

export default GinecomastiyaFAQ;
