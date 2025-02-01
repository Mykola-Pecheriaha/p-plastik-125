'use client';

import type React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PrimmaGallery from '../../components/PrimmaGallery/PrimmaGallery';
import styles from './AbdominoplastyQuestions.module.css';

interface Question {
  title: string;
  content: string;
  images: string[];
}

const questions: Question[] = [
  {
    title: 'Абдомінопластика: реабілітація після операції',
    content: `Після пластики живота пацієнт перебуває у клініці 1 добу під наглядом пластичного хірурга та медичного персоналу. Йому призначаються знеболювальні препарати та антибіотики. Протягом перших 24 годин післяопераційного періоду обов'язковим є делікатний режим. Наступного дня пацієнта виписують додому із рекомендаціями.

Перші дні можливими післяопераційними відчуттями вважаються: болі при рухах, набряклість тканини, які поступово мінімізуються та повністю пропадають через 2 тижні. Повний період реабілітації триває близько 1 місяця.

Пластика живота вимагатиме постійного носіння бандажу та використання компресійної білизни протягом перших 4-6 тижнів після операції. Спочатку змінює чутливість навколо пупка, яка потім відновлюється протягом 2 місяців.

Особливу увагу пацієнтки приділяють рубцю після абдомінопластики. Його розташування визначає обрана методика хірургічного втручання. Рубець добре маскується спідньою білизною і через 2-6 місяців виглядає тонкою смужкою («котячою подряпиною») у колір шкіри.

Через 2 місяці пацієнт оцінює кінцевий результат абдомінопластики.`,
    images: [
      '/images/abdominoplasty/rehabilitation1.jpg',
      '/images/abdominoplasty/rehabilitation2.jpg',
      '/images/abdominoplasty/rehabilitation3.jpg',
    ],
  },
  {
    title: 'Час проведення операції',
    content: `Пластика живота проводиться під загальною анестезією. У клініці застосовується інгаляційний наркоз на газі Севофлуран, який забезпечує легке входження та вихід. Тривалість операції – 1.5-2.5 години. Час визначається обсягом втручання.`,
    images: [
      '/images/abdominoplasty/operation1.jpg',
      '/images/abdominoplasty/operation2.jpg',
      '/images/abdominoplasty/operation3.jpg',
    ],
  },
];

interface AbdominoplastyQuestionsProps {
  backgroundColor?: string;
}

const AbdominoplastyQuestions: React.FC<AbdominoplastyQuestionsProps> = ({
  backgroundColor = '#f0f0f0',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.fullWidthBackground} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Поширені запитання про абдомінопластику
        </h2>
        {questions.map((question, index) => (
          <div key={index} className={styles.questionContainer}>
            <div
              className={`${styles.questionTitle} ${openIndex === index ? styles.open : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              {question.title}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {openIndex === index && (
              <div className={styles.questionContent}>
                <div className={styles.textContent}>
                  <p>{question.content}</p>
                </div>
                <div className={styles.galleryContent}>
                  <PrimmaGallery
                    images={question.images}
                    galleryId={`abdominoplasty-${index}`}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbdominoplastyQuestions;
