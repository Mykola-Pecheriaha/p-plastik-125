'use client';

import { useState } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';
import FlapFAQGallery from '../FlapFAQGallery/FlapFAQGallery';
import type { ImageType } from '../GalleryFlapOperation/GalleryFlapOperation';
import styles from './FlapFAQ.module.css';
import type React from 'react';

interface FlapFAQProps {
  backgroundColor?: string;
}

interface FAQItemType {
  id: string;
  question: string;
  answer: string;
  images: ImageType[];
}

const FlapFAQ: React.FC<FlapFAQProps> = ({ backgroundColor = '#f0f4f8' }) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const faqItems: FAQItemType[] = [
    {
      id: 'problems',
      question: 'Які проблеми вирішує пластика вух?',
      answer: `Отопластика переважно естетичне втручання, яке усуває вроджені та набуті дефекти. Воно допомагає:
скоригувати клаповухість;
асиметрія — якщо вуха мають явну асиметрію, наприклад, значні відмінності форми, розміру чи розташування на голові, за допомогою отопластики це можна виправити;
Особисте бажання — якщо пацієнт свідомо хоче покращити форму вух.
деформації після попередньої операції чи інфекційних захворювань;
Змінити форму та відновити цілісність мочки;
Посттравматичні зміни — пацієнти, які пережили травму або нещасний випадок, внаслідок якого постраждали вуха, також іноді потребують отопластики;

Реконструктивна пластика вуха полягає в корекції вушних дефектів, відновленні втрачених або пошкоджених ділянок вух та відтворення їх природного вигляду.

Отопластика немає вікових обмежень. Проте особливу увагу слід приділяти її проведенню у дитячому віці. Вона рекомендована дітям, які досягли 6-ти річного віку, тому що до цього часу формування вушних раковин практично завершено і можна оцінити ступінь клаповухості.

Важливий нюанс: дитина повинна сама розуміти те, що відбувається, і бути націленою на зміну своєї зовнішності. Тоді процес пройде комфортно і не обернеться стресом для малюка.`,

      images: [
        {
          src: '/images/flapFAQ/ottoplastic34.jpg',
          width: 350,
          height: 500,
        },
        {
          src: '/images/flapFAQ/ottoplastic35.jpg',
          width: 450,
          height: 620,
        },
        {
          src: '/images/flapFAQ/ottoplastic37.jpg',
          width: 400,
          height: 600,
        },
        {
          src: '/images/flapFAQ/ottoplastic38.jpg',
          width: 400,
          height: 580,
        },
        {
          src: '/images/flapFAQ/ottoplastic39.jpg',
          width: 380,
          height: 580,
        },
      ],
    },
    {
      id: 'process',
      question: 'Як відбувається операція з отопластики (пластики вух)?',
      answer: `Найчастіше отопластика проводиться під місцевою анестезією – амбулаторно. Госпіталізація не потрібна – через 1 годину пацієнт їде додому з рекомендаціями.

У деяких випадках, за бажанням пацієнта, втручання може проводитися під загальним наркозом. У клініці за замовчуванням використовується інгаляційний наркоз (народний «газовий»).

Пластичний хірург формує правильну позицію хряща, січе його частину, і стабільно фіксує вушну раковину в цьому положенні, закріплюючи ділянку внутрішніми швами і спеціальним косметичним. Післяопераційний рубець розташований ззаду на вушній раковині. Він прихований від сторонніх очей, а з часом стає непомітним, приймаючи колір шкіри.`,
      images: [
        {
          src: '/images/flapFAQ/ottoplastic29.jpg',
          width: 450,
          height: 600,
        },
        {
          src: '/images/flapFAQ/ottoplastic30.jpg',
          width: 450,
          height: 600,
        },
        {
          src: '/images/flapFAQ/ottoplastic31.jpg',
          width: 450,
          height: 600,
        },
        {
          src: '/images/flapFAQ/ottoplastic32.jpg',
          width: 450,
          height: 565,
        },
        {
          src: '/images/flapFAQ/ottoplastic33.jpg',
          width: 450,
          height: 600,
        },
      ],
    },
    {
      id: 'duration',
      question:
        'Скільки триває операція пластики вух, як довго потрібно носити повязку та коли видно результат операції?',
      answer:
        "Завдяки застосуванню сучасних методик операція зменшення вух займає всього 30-40 хвилин залежно від індивідуальних особливостей людини. Період носіння пов'язки після отопластики залежить від рекомендацій хірурга. Зазвичай, пацієнтам рекомендується носити вушну пов'язку протягом перших 1-2 тижнів після операції. Пов'язка допомагає фіксувати вуха у правильному положенні та сприяє загоєнню. Підсумковий результат отопластики стає видимим після повного загоєння тканин, на що потрібно кілька тижнів. Однак покращення форми та положення вух помітно вже перші тижні після операції. Результат отопластики є стабільним та довгостроковим.",
      images: [
        {
          src: '/images/flapFAQ/ottoplastic40.jpg',
          width: 350,
          height: 350,
        },
        {
          src: '/images/flapFAQ/ottoplastic42.jpg',
          width: 400,
          height: 380,
        },
        {
          src: '/images/flapFAQ/ottoplastic41.jpg',
          width: 420,
          height: 300,
        },
        {
          src: '/images/flapFAQ/ottoplastic43.jpg',
          width: 480,
          height: 80,
        },
      ],
    },
  ];

  const toggleItem = (itemId: string) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  // Функція для форматування тексту відповіді
  const formatAnswer = (answer: string) => {
    // Розділяємо текст на абзаци
    const paragraphs = answer.split('\n\n');

    return paragraphs.map((paragraph, pIndex) => {
      // Перевіряємо, чи абзац містить список (рядки, що починаються з певних маркерів)
      if (paragraph.includes(';\n')) {
        // Це може бути список
        const lines = paragraph.split('\n');
        const title = lines[0].endsWith(':') ? lines[0] : null;

        // Створюємо елементи списку
        const listItems = lines
          .filter((line) => line !== title && line.trim() !== '')
          .map((line) => {
            // Видаляємо крапку з кінця, якщо вона є
            let cleanLine = line.trim();
            if (cleanLine.endsWith(';')) {
              cleanLine = cleanLine.slice(0, -1);
            }

            // Перевіряємо, чи є в рядку виділений термін
            const parts = cleanLine.split(' — ');
            if (parts.length > 1) {
              return (
                <li key={cleanLine}>
                  <span className={styles.term}>{parts[0]}</span> —{' '}
                  {parts.slice(1).join(' — ')}
                </li>
              );
            }

            return <li key={cleanLine}>{cleanLine}</li>;
          });

        return (
          <div key={`p-${pIndex}`} className={styles.listSection}>
            {title && <h3 className={styles.listTitle}>{title}</h3>}
            <ul className={styles.bulletList}>{listItems}</ul>
          </div>
        );
      }
      // Перевіряємо, чи абзац починається з "Важливий нюанс:" або подібного
      else if (
        paragraph.startsWith('Важливий нюанс:') ||
        paragraph.startsWith('Важливо:')
      ) {
        return (
          <div key={`p-${pIndex}`} className={styles.importantNote}>
            <AlertCircle className={styles.alertIcon} />
            <p>{paragraph}</p>
          </div>
        );
      }
      // Перевіряємо, чи абзац виглядає як заголовок (короткий і закінчується двокрапкою)
      else if (paragraph.length < 100 && paragraph.includes(':')) {
        return (
          <h3 key={`p-${pIndex}`} className={styles.sectionTitle}>
            {paragraph}
          </h3>
        );
      }
      // Звичайний абзац
      else {
        return (
          <p key={`p-${pIndex}`} className={styles.paragraph}>
            {paragraph}
          </p>
        );
      }
    });
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
                    {formatAnswer(item.answer)}
                  </div>
                  <div className={styles.galleryContent}>
                    <FlapFAQGallery
                      images={item.images}
                      galleryId={`faq-gallery-${item.id}`}
                      initialZoom={1}
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
