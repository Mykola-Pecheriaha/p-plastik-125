'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './CarpalFAQ.module.css';

interface CarpalFAQProps {
  backgroundColor?: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'duration',
    question: 'Скільки триває операція при карпальному синдромі',
    answer: 'Хірургічне втручання займає до 30 хв залежно від обсягу.',
  },
  {
    id: 'anesthesia',
    question: 'Яке знеболення при операції',
    answer:
      'Використовується місцеве знеболення, яке забезпечує сто відсоткое знеболення та комфортні умови для операції як для пацієнта так і для хірурга',
  },
  {
    id: 'methods',
    question: 'Які методи операцій поширені',
    answer:
      'Є два метода це звичайний доступ так і мелоінвазивний доступ. У нас використовується звичайний доступ з невеликою модифікацією так як на нашу думку від забеспечує гарні умови для проведення операції і скриває післяопераційний рубець.',
  },
];

const CarpalFAQ: React.FC<CarpalFAQProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  const toggleItem = (itemId: string) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className={styles.carpalFAQ} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Поширені запитання</h1>

        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.faqItem} ${openItemId === item.id ? styles.expanded : ''}`}
            >
              <button
                className={styles.faqButton}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItemId === item.id}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`${styles.arrow} ${openItemId === item.id ? styles.rotated : ''}`}
                />
              </button>

              {openItemId === item.id && (
                <div className={styles.faqContent}>
                  <div className={styles.textContent}>
                    <p>{item.answer}</p>
                  </div>
                  <div className={styles.galleryContent}>
                    <PrimmaGallery
                      images={galleryImages}
                      galleryId={`faq-gallery-${item.id}`}
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

export default CarpalFAQ;
