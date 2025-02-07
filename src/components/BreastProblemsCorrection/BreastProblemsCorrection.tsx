'use client';

import type React from 'react';
import { useState } from 'react';
import Image from "next/legacy/image";
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './BreastProblemsCorrection.module.css';

interface ProblemItem {
  title: string;
  content: string;
  solution: string;
  image: string;
}

const problems: ProblemItem[] = [
  {
    title: 'Маленькі груди від природи',
    content:
      'Маленькі груди можуть бути джерелом дискомфорту для багатьох жінок. Це може впливати на самооцінку та впевненість у собі. Крім того, деякі жінки відчувають труднощі при виборі одягу або купальників.',
    solution:
      'Збільшення грудей за допомогою імплантів  може допомогти досягти бажаного розміру та форми. Сучасні методи дозволяють створити природний вигляд та відчуття. Ми підбираємо оптимальний розмір та форму імплантів, враховуючи індивідуальні особливості тіла та побажання пацієнтки. На сьогоднішній день спільнотою пластичних хірургів заборонено проводити збільшення грудей методом інєкції "різних" наповнювачів. Використовуються тільки імпланти з "оболочками". ',
    image: '/images/BreastProblemsCorrection/implant5.jpg',
  },
  {
    title: 'Асиметричність форми',
    content:
      'Асиметрія грудей - це поширена проблема, яка може бути помітною або незначною. Вона може виникнути через генетичні фактори, гормональні зміни або в результаті попередніх операцій. Асиметрія може викликати дискомфорт при носінні бюстгальтерів та одягу. Крайня форма асеметрії грудей, це синдром Поланда - різке зменшення однієї груді, або її відсутність. ',
    solution:
      'Корекція асиметрії може включати збільшення меншої груді, зменшення більшої, або комбінацію обох підходів для досягнення симетрії. Ми використовуємо індивідуальний підхід, який може включати використання імплантів різного розміру, ліпофілінг або підтяжку грудей для досягнення оптимального результату.',
    image: '/images/BreastProblemsCorrection/preparation9.jpg',
  },
  {
    title: 'Тубулярні груди (у формі конуса)',
    content:
      'Тубулярні груди характеризуються вузькою основою та видовженою формою. Ця проб��ема виникає через недостатній розвиток тканин грудей під час статевого дозрівання. Тубулярні груди можуть бути джерелом значного психологічного дискомфорту.',
    solution:
      'Корекція тубулярних грудей зазвичай включає розширення основи груді та покращення її форми. Ми використовуємо комплексний підхід, який може включати розширення тканин, встановлення імплантів та, за необхідності, корекцію ареоли. Результатом є більш природна та пропорційна форма грудей.',
    image: '/images/BreastProblemsCorrection/preparation11.jpg',
  },
  {
    title: 'Синдром «пустого мішка»',
    content:
      "Цей стан часто виникає після вагітності, годування груддю або значної втрати ваги. Груди втрачають об'єм та пружність, шкіра стає надлишковою, а форма грудей змінюється. Це може призвести до втрати впевненості у собі та незадоволення своїм зовнішнім виглядом.",
    solution:
      "Підтяжка грудей (мастопексія) з або без імплантів може відновити об'єм та покращити форму грудей. Ми видаляємо надлишкову шкіру, піднімаємо тканини грудей та, за необхідності, встановлюємо імпланти для додаткового об'єму. Результатом є більш молодий та підтягнутий вигляд грудей.",
    image: '/images/BreastProblemsCorrection/implant4.jpg',
  },
  {
    title:
      'Зменшення або обвисання грудей після годування чи вагітності, втрата ваги',
    content:
      "Після вагітності, годування груддю або значної втрати ваги груди можуть втратити об'єм та пружність. Шкіра розтягується, а тканини грудей опускаються, що призводить до обвисання. Це може викликати не тільки естетичний дискомфорт, але й фізичні незручності.",
    solution:
      "Мастопексія (підтяжка грудей) з можливим збільшенням може відновити молодіжний вигляд грудей. Ми видаляємо надлишкову шкіру, піднімаємо та формуємо тканини грудей. За бажанням пацієнтки, можемо встановити імпланти для додаткового об'єму. Результатом є підтягнуті, пружні груди з покращеною формою та розташуванням.",
    image: '/images/BreastProblemsCorrection/implant7.jpg',
  },
];

interface BreastProblemsCorrectionProps {
  backgroundColor?: string;
}

const BreastProblemsCorrection: React.FC<BreastProblemsCorrectionProps> = ({
  backgroundColor = '#f0f0f0',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleProblem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.fullWidthBackground} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Проблеми молочних залоз і їх вирішення
        </h2>
        {problems.map((problem, index) => (
          <div key={index} className={styles.problemContainer}>
            <div
              className={`${styles.problemTitle} ${openIndex === index ? styles.open : ''}`}
              onClick={() => toggleProblem(index)}
            >
              {problem.title}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {openIndex === index && (
              <div className={styles.problemContent}>
                <div className={styles.textContent}>
                  <h3>Проблема:</h3>
                  <p>{problem.content}</p>
                  <h3>Вирішення:</h3>
                  <p>{problem.solution}</p>
                </div>
                <div className={styles.imageContent}>
                  <Image
                    src={problem.image || '/placeholder.svg'}
                    alt={problem.title}
                    width={300}
                    height={200}
                    layout="responsive"
                    objectFit="cover"
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

export default BreastProblemsCorrection;
