'use client';

import type React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BlefaroFAQ.module.css';

interface FAQItemProps {
  question: string;
  answer: string;
  images: string[];
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, images }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        {question}
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isOpen && (
        <div className={styles.faqAnswer}>
          <div className={styles.answerText}>{answer}</div>
          <div className={styles.answerGallery}>
            <PrimmaGallery images={images} galleryId={`faq-${question}`} />
          </div>
        </div>
      )}
    </div>
  );
};

interface BlefaroFAQProps {
  backgroundColor?: string;
}

const BlefaroFAQ: React.FC<BlefaroFAQProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const faqItems: FAQItemProps[] = [
    {
      question: 'Час проведення операції',
      answer:
        'Час проведення блефаропластики залежить від обсягу та складності хірургічного процесу. Найчастіше втручання на верхніх повіках триває близько 30 хвилин, на нижніх – 40 хвилин, транскон&#x27;юктивне займає 15 хвилин. Тривалість кругової блефаропластики 1-1,5 години.',
      images: [
        '/images/blepharoplasty/blefaro6.jpg',
        '/images/blepharoplasty/blefaro6.jpg',
        '/images/blepharoplasty/operation-time-3.jpg',
      ],
    },
    {
      question: 'Реабілітація та відновлення після підтяжки повік',
      answer:
        'Відразу після завершення процесу на очі накладаються гелеві охолоджені подушечки, що сприяють зменшенню набряклості. У клініці пацієнт проводить 1 годину під наглядом медичного персоналу, а потім їде додому, отримавши всі необхідні рекомендації. Блефаропластика може викликати такі симптоми, як почервоніння очей, печіння, свербіж, підвищена сльозогінність. Для усунення цих ефектів пластичний хірург призначає протизапальні краплі для очей. Пластика повік вимагатиме тимчасової відмови від фізичної активності в період відновлення. Крім того, не можна допускати тривалого впливу сонячних променів на шкіру повік – засмагати, знаходиться на відкритому сонці. Післяопераційний відновлювальний період після хірургічних методик триває 10-14 днів. Пацієнту рекомендується виходити працювати через 14 днів. На цей час варто виключити спортивні тренування, відвідування саун та лазень. Результат корекції можна оцінити одразу! Остаточний ефект пацієнт побачить за 1 місяць. Він довгостроковий та стабільний. Транскон&#x27;юктивальна методика передбачає швидке відновлення – 3 дні. Без синців та набряків. У виняткових випадках необхідність повторної корекції виникає не раніше ніж через 10-15 років, залежно від індивідуальних особливостей.',
      images: [
        '/images/blepharoplasty/blefaro4.jpg',
        '/images/blepharoplasty/blefaro6.jpg',
        '/images/blepharoplasty/rehabilitation-3.jpg',
      ],
    },
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Часті запитання про блефаропластику</h2>
        {faqItems.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BlefaroFAQ;
