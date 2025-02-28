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
  images: string[];
}

const FlapFAQ: React.FC<FlapFAQProps> = ({ backgroundColor = '#f0f4f8' }) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const faqItems: FAQItemType[] = [
    {
      id: 'problems',
      question: 'Які проблеми вирішує пластика вух?',
      answer: `Отопластика переважно естетичне втручання, яке усуває вроджені та набуті дефекти. Воно допомагає:
• скоригувати клаповухість;
. асиметрія — якщо вуха мають явну асиметрію, наприклад, значні відмінності форми, розміру чи розташування на голові, за допомогою отопластики це можна виправити;
. особисте бажання — якщо пацієнт свідомо хоче покращити форму вух.
. деформації після попередньої операції чи інфекційних захворювань;
• змінити форму та відновити цілісність мочки;
• посттравматичні зміни — пацієнти, які пережили травму або нещасний випадок, внаслідок якого постраждали вуха, також іноді потребують отопластики;

Реконструктивна пластика вуха полягає в корекції вушних дефектів, відновленні втрачених або пошкоджених ділянок вух та відтворення їх природного вигляду.

Отопластика немає вікових обмежень. Проте особливу увагу слід приділяти її проведенню у дитячому віці. Вона рекомендована дітям, які досягли 6-ти річного віку, тому що до цього часу формування вушних раковин практично завершено і можна оцінити ступінь клаповухості.

Важливий нюанс: дитина повинна сама розуміти те, що відбувається, і бути націленою на зміну своєї зовнішності. Тоді процес пройде комфортно і не обернеться стресом для малюка.`,

      images: [
        '/images/flapFAQ/ottoplastic34.jpg',
        '/images/flapFAQ/ottoplastic35.jpg',

        '/images/flapFAQ/ottoplastic37.jpg',
        '/images/flapFAQ/ottoplastic38.jpg',
        '/images/flapFAQ/ottoplastic39.jpg',
      ],
    },
    {
      id: 'process',
      question: 'Як відбувається операція з отопластики (пластики вух)?',
      answer: `Найчастіше отопластика проводиться під місцевою анестезією – амбулаторно. Госпіталізація не потрібна – через 1 годину пацієнт їде додому з рекомендаціями.

У деяких випадках, за бажанням пацієнта, втручання може проводитися під загальним наркозом. У клініці за замовчуванням використовується інгаляційний наркоз (народний «газовий»).

Пластичний хірург формує правильну позицію хряща, січе його частину, і стабільно фіксує вушну раковину в цьому положенні, закріплюючи ділянку внутрішніми швами і спеціальним косметичним. Післяопераційний рубець розташований ззаду на вушній раковині. Він прихований від сторонніх очей, а з часом стає непомітним, приймаючи колір шкіри.`,
      images: [
        '/images/flapFAQ/ottoplastic29.jpg',
        '/images/flapFAQ/ottoplastic30.jpg',
        '/images/flapFAQ/ottoplastic31.jpg',
        '/images/flapFAQ/ottoplastic32.jpg',
        '/images/flapFAQ/ottoplastic33.jpg',
      ],
    },
    {
      id: 'duration',
      question:
        'Скільки триває операція пластики вух, як довго потрібно носити повязку та коли видно результат операції?',
      answer:
        "Завдяки застосуванню сучасних методик операція зменшення вух займає всього 30-40 хвилин залежно від індивідуальних особливостей людини. Період носіння пов'язки після отопластики залежить від рекомендацій хірурга. Зазвичай, пацієнтам рекомендується носити вушну пов'язку протягом перших 1-2 тижнів після операції. Пов'язка допомагає фіксувати вуха у правильному положенні та сприяє загоєнню. Підсумковий результат отопластики стає видимим після повного загоєння тканин, на що потрібно кілька тижнів. Однак покращення форми та положення вух помітно вже перші тижні після операції. Результат отопластики є стабільним та довгостроковим.",
      images: [
        '/images/flapFAQ/ottoplastic40.jpg',
        '/images/flapFAQ/ottoplastic42.jpg',
        '/images/flapFAQ/ottoplastic41.jpg',
        '/images/flapFAQ/ottoplastic43.jpg',
      ],
    },
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
                      images={item.images}
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
