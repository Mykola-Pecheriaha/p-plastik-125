'use client';

import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import styles from './BreastSizeProblem.module.css';
import ConsultationButton from '../../components/ConsultationButton/ConsultationButton';

const problems = [
  {
    title: 'Невеликий розмір грудей від природи',
    content:
      "Багато дівчат переживають через нульовий розмір. Відсутність жіночних форм викликає багато психологічних комплексів. Операція зі збільшення грудей вирішує проблему недостатнього об'єму та дарує бажані форми.",
  },
  {
    title: "Зміни об'єму та форми після пологів та грудного вигодовування",
    content:
      'Так звана постлактаційна інволюція молочної залози зустрічається у кожної другої жінки. Тканини спочатку розтягуються, а потім, коли кількість молока зменшується, провисають. У цьому випадку можна говорити про птозу. Імплантація дозволяє усунути всі прояви птозу, а також скоригувати положення соска.',
  },
  {
    title: 'Виражена асиметрія',
    content:
      'Різниця у розмірі молочних залоз більш ніж у ½ обсягу потребує хірургічної корекції. Для усунення асиметрії підбираються різні імплантати або корекція поєднується з додатковою підтяжкою.',
  },
  {
    title: 'Вікові зміни',
    content: 'Пластика дозволяє збільшити груди і повернути колишню пружність.',
  },
];

const knowledgeItems = [
  {
    title: 'Види грудних імплантів',
    shortContent:
      'Важливим етапом для пацієнтки є вибір імплантатів. Необхідно визначитися з їхньою формою та видом. Грудні імплантати можна розглядати за кількома критеріями:',
    fullContent: `Важливим етапом для пацієнтки є вибір імплантатів. Необхідно визначитися з їхньою формою та видом.
    Грудні імплантати можна розглядати за кількома критеріями:

    поверхня оболонки – буває мікротекстурованою, макротекстурованою та мікрополіуритановою;
    форма – кругла, анатомічна (краплеподібна);
    наповнювач – різні види силіконового гелю.
    Підбір силіконових імплантатів проводиться індивідуально, виходячи з особливостей організму та побажань пацієнтки, що дозволяє досягти абсолютно природної та красивої форми грудей.`,
  },
  {
    title: 'Обстеження перед імплантацією грудей',
    shortContent:
      'Імплантація потребує ретельної підготовки. Пластична операція щодо збільшення грудей, техніка проведення та ціна визначаються після комплексного обстеження пацієнтки. Воно включає: УЗД, мамографію (при необхідності), огляд профільних фахівців та здає аналізи.',
    fullContent: `Імплантація потребує ретельної підготовки. Пластична операція щодо збільшення грудей, техніка проведення та ціна визначаються після комплексного обстеження пацієнтки. Воно включає: УЗД, мамографію (при необхідності), огляд профільних фахівців та здає аналізи. Комплексне обстеження у клініці Vidnova у Львові можна пройти за 1 день!

    Іногороднім пацієнтам пропонується поєднати консультацію, обстеження (здачу аналізів) та операцію за 1 візит. Це значно економить час та комфортно для пацієнта.`,
  },
  {
    title: 'Розташування імпланту під час операції зі збільшення грудей',
    shortContent:
      "Залежно від вихідного стану молочної залози (опущення, недостатнього об'єму, товщини підшкірної клітковини та інших анатомічних особливостей), пластичним хірургом визначається місце розташування імплантату – під залозу, під м'яз або комбіноване.",
    fullContent: `Залежно від вихідного стану молочної залози (опущення, недостатнього об'єму, товщини підшкірної клітковини та інших анатомічних особливостей), пластичним хірургом визначається місце розташування імплантату – під залозу, під м'яз або комбіноване.

    під залозу (над м'язом). Розташування – між тканиною грудної залози та великим грудним м'язом. Цей спосіб має один недолік: у дівчат з тонкою шкірою, малою кількістю підшкірного жиру та/або недостатнім об'ємом молочної залози імплантат може легко промацуватися та контуруватися (мати видимі межі);
    під м'язом. Розташування – між великим та малим грудними м'язами. М'язи виступають додатковою підтримкою та стабілізують положення імплантату.
    Питання встановлення імплантату – над м'язом або під ним – це рішення пластичного хірурга. Рекомендуємо прислухатися до його думки. Пластичний хірург Світлана Работенко віддає перевагу способу встановлення імплантату під м'яз. Цей спосіб розташування дозволяє уникнути контурування імплантату в області верхнього полюса грудей і знижує ризик виникнення капсулярної контрактури.`,
  },
];

const BreastSizeProblem: React.FC = () => {
  const [expandedProblems, setExpandedProblems] = useState<number[]>([]);
  const [expandedKnowledge, setExpandedKnowledge] = useState<number[]>([]);

  const toggleProblem = (index: number) => {
    setExpandedProblems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleKnowledge = (index: number) => {
    setExpandedKnowledge((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={styles.backgroundWrapper}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Які проблеми вирішує збільшення грудей
        </h2>
        <div className={styles.problemsSection}>
          <div className={styles.problemsText}>
            {problems.map((problem, index) => (
              <div key={index} className={styles.problem}>
                <h3>{problem.title}</h3>
                <p>
                  {expandedProblems.includes(index)
                    ? problem.content
                    : `${problem.content.slice(0, 100)}...`}
                </p>
                <button onClick={() => toggleProblem(index)}>
                  {expandedProblems.includes(index)
                    ? 'Показати менше'
                    : 'Показати більше'}
                </button>
              </div>
            ))}
          </div>
          <div className={styles.problemsImages}>
            <Image
              src="/images/breast-problem-1.jpg"
              alt="Breast problem 1"
              width={300}
              height={200}
            />
            <Image
              src="/images/breast-problem-2.jpg"
              alt="Breast problem 2"
              width={300}
              height={200}
            />
            <Image
              src="/images/breast-problem-3.jpg"
              alt="Breast problem 3"
              width={300}
              height={200}
            />
            <Image
              src="/images/breast-problem-4.jpg"
              alt="Breast problem 4"
              width={300}
              height={200}
            />
          </div>
        </div>

        <h2 className={styles.mainTitle}>
          Що потрібно знати перед операцією з мамопластики
        </h2>
        <div className={styles.knowledgeSection}>
          <div className={styles.knowledgeText}>
            {knowledgeItems.map((item, index) => (
              <div key={index} className={styles.knowledgeItem}>
                <h3>{item.title}</h3>
                <p>
                  {expandedKnowledge.includes(index)
                    ? item.fullContent
                    : item.shortContent}
                </p>
                <button onClick={() => toggleKnowledge(index)}>
                  {expandedKnowledge.includes(index)
                    ? 'Показати менше'
                    : 'Показати більше'}
                </button>
              </div>
            ))}
            <ConsultationButton />
          </div>
          <div className={styles.knowledgeImage}>
            <Image
              src="/images/breast-knowledge.jpg"
              alt="Breast augmentation knowledge"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastSizeProblem;
