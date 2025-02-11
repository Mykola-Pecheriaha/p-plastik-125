'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './FlapFAQ.module.css';
import type React from 'react';

interface FlapFAQProps {
  backgroundColor?: string;
}

interface FAQItemType {
  id: string;
  question: string;
  answer: string;
}

const FlapFAQ: React.FC<FlapFAQProps> = ({ backgroundColor = '#f0f4f8' }) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const faqItems: FAQItemType[] = [
    {
      id: 'problems',
      question: 'Які проблеми вирішує пластика вух?',
      answer: `Отопластика переважно естетичне втручання, яке усуває вроджені та набуті дефекти. Воно допомагає:
• скоригувати клаповухість;
• змінити форму та відновити цілісність мочки;
• відновити природний рельєф вуха у разі його посттравматичних деформацій.

Отопластика немає вікових обмежень. Проте особливу увагу слід приділяти її проведенню у дитячому віці. Вона рекомендована дітям, які досягли 6-ти річного віку, тому що до цього часу формування вушних раковин практично завершено і можна оцінити ступінь клаповухості.

Важливий нюанс: дитина повинна сама розуміти те, що відбувається, і бути націленою на зміну своєї зовнішності. Тоді процес пройде комфортно і не обернеться стресом для малюка.`,
    },
    {
      id: 'process',
      question: 'Як відбувається операція з отопластики (пластики вух)?',
      answer: `Найчастіше отопластика проводиться під місцевою анестезією – амбулаторно. Госпіталізація не потрібна – через 1 годину пацієнт їде додому з рекомендаціями.

У деяких випадках, за бажанням пацієнта, втручання може проводитися під загальним наркозом. У клініці за замовчуванням використовується інгаляційний наркоз (народний «газовий»).

Пластичний хірург формує правильну позицію хряща, січе його частину, і стабільно фіксує вушну раковину в цьому положенні, закріплюючи ділянку внутрішніми швами і спеціальним косметичним. Післяопераційний рубець розташований ззаду на вушній раковині. Він прихований від сторонніх очей, а з часом стає непомітним, приймаючи колір шкіри.`,
    },
    {
      id: 'duration',
      question: 'Скільки триває операція пластики вух?',
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
    <div className={styles.flapFAQ} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Поширені запитання</h2>

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
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlapFAQ;
