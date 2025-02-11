'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './LegPlasticFAQ.module.css';
import type React from 'react';

interface LegPlasticFAQProps {
  backgroundColor?: string;
  collapsedColor?: string;
  expandedColor?: string;
  hoverColor?: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const LegPlasticFAQ: React.FC<LegPlasticFAQProps> = ({
  backgroundColor = '#f0f4f8',
  collapsedColor = '#ffffff',
  expandedColor = '#f8f9fa',
  hoverColor = '#f3f4f6',
}) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 'duration',
      question: 'Скільки триває операція',
      answer:
        'Вирівнювання ніг проводиться під загальним наркозом і триває близько 1-1,5 години, залежно від обсягу. Для всіх пацієнтів за замовчуванням застосовують інгаляційний наркоз на Севофлурані (по-народному «газовий»). Його перевага у швидкому входженні у глибокий медикаментозний сон та вихід із нього без галюцинацій.',
    },
    {
      id: 'process',
      question: 'Як відбувається операція з вирівнюванні ніг?',
      answer: `Найчастіше отопластика проводиться під місцевою анестезією – амбулаторно. Госпіталізація не потрібна – через 1 годину пацієнт їде додому з рекомендаціями.

У деяких випадках, за бажанням пацієнта, втручання може проводитися під загальним наркозом. У клініці за замовчуванням використовується інгаляційний наркоз (народний «газовий»).

Пластичний хірург формує правильну позицію хряща, січе його частину, і стабільно фіксує вушну раковину в цьому положенні, закріплюючи ділянку внутрішніми швами і спеціальним косметичним. Післяопераційний рубець розташований ззаду на вушній раковині. Він прихований від сторонніх очей, а з часом стає непомітним, приймаючи колір шкіри.`,
    },
    {
      id: 'results',
      question: 'Які результати після проведення операції?',
      answer:
        'Завдяки застосуванню сучасних методик операція зменшення вух займає всього 30-40 хвилин залежно від індивідуальних особливостей людини.',
    },
  ];

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
    <div className={styles.legPlasticFAQ} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Поширені запитання</h2>

        <div className={styles.faqList}>
          {faqItems.map((item) => {
            const isOpen = openItemId === item.id;

            return (
              <div
                key={item.id}
                className={styles.faqItem}
                style={
                  {
                    backgroundColor: isOpen ? expandedColor : collapsedColor,
                    '--hover-color': hoverColor,
                  } as React.CSSProperties
                }
              >
                <button
                  className={`${styles.faqButton} ${isOpen ? styles.expanded : ''}`}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className={styles.faqContent}>
                    <div className={styles.textContent}>
                      {item.answer.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LegPlasticFAQ;
