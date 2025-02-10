'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './GernioFAQ.module.css';

interface GernioFAQProps {
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
    question: 'Скільки триває операція грижі',
    answer: 'Хірургічне втручання займає до 1 години залежно від обсягу.',
  },
  {
    id: 'anesthesia',
    question: 'Яке знеболення при операції',
    answer:
      'Використовується інгаляційний наркоз на Севофлурані. Він забезпечує комфортний вхід у медикаментозний сон та вихід без галюцинацій.',
  },
  {
    id: 'methods',
    question: 'Які методи операцій поширені',
    answer:
      'Є наступні методи: Лапароскопічна герніопластика із застосуванням сітчастого імплантанта. Герніопластика місцевим доступом із застосуванням сітчастого імплантанта',
  },
];

const GernioFAQ: React.FC<GernioFAQProps> = ({
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
    <div className={styles.gernioFAQ} style={{ backgroundColor }}>
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

export default GernioFAQ;
