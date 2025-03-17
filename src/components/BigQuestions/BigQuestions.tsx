'use client';

import React, { useState } from 'react';
import Image from 'next/legacy/image';
import styles from './BigQuestions.module.css';
import Link from 'next/link';

type Section = 'indication' | 'rehabilitation' | 'roadClinic';

const BigQuestions: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const toggleSection = (section: Section): void => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className={styles.bigQuestionsBackground}>
      <div className={styles.bigQuestionsContainer}>
        <div className={styles.bigQuestionsSection}>
          <h3 onClick={() => toggleSection('indication')}>
            Як підготовитися до мамопластики{' '}
            <span>{activeSection === 'indication' ? '▲' : '▼'}</span>
          </h3>
          <div
            className={`${styles.bigQuestionsContent} ${activeSection === 'indication' ? styles.active : ''}`}
          >
            <div className={styles.bigQuestionsTitle}>
              <div className={styles.bigQuestionsText}>
                <p>
                  За два тижні до хірургічного втручання рекомендовано
                  відмовитись від паління та прийому лікарських засобів.
                  Обов’язково повідомте спеціаліста, якщо ви регулярно приймаєте
                  будь-які ліки!
                </p>
                <p>
                  Варто враховувати, що вагітність і годування можуть вплинути
                  на форму молочної залози, після чого є ймовірність проведення
                  додаткової корекції. Тому втручання ефективніше проводити
                  через пів року після закінчення годування.
                </p>
                <p>
                  Перед проведенням операції необхідно пройти обстеження та
                  аналізи, з переліком яких вас ознайомить медичний координатор.
                </p>
              </div>
              <div className={styles.bigQuestionsImage}>
                <Image
                  src="/images/AbdominoplastyPreparation/preparation4.jpg"
                  alt="Liver1"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bigQuestionsSection}>
          <h3 onClick={() => toggleSection('rehabilitation')}>
            Яка реабілітація після блефаропластики{' '}
            <span>{activeSection === 'rehabilitation' ? '▲' : '▼'}</span>
          </h3>
          <div
            className={`${styles.bigQuestionsContent} ${activeSection === 'rehabilitation' ? styles.active : ''}`}
          >
            <div className={styles.bigQuestionsTitle}>
              <div className={styles.bigQuestionsText}>
                <p>
                  Відразу після хірургічного втручання на очі пацієнта
                  накладаються гелеві охолоджуючі подушечки. Це сприяє зниженню
                  набряклості у цій чутливій ділянці та забезпечує приємні
                  відчуття.
                </p>
                <p>
                  Після операції пацієнт перебуває в клініці близько години під
                  наглядом медичного персоналу. Далі надаються необхідні
                  рекомендації для комфортного відновлення та пацієнт може їхати
                  додому.
                </p>
                <p>
                  На ранніх етапах реабілітації після блефаропластики можуть
                  спостерігатися почервоніння очей, печіння, свербіж та
                  збільшена сльозотеча. У таких випадках рекомендовано
                  застосовувати спеціальні протизапальні краплі для очей, які
                  допоможуть вам впоратися з цими неприємними відчуттями.
                </p>
                <p>
                  Після пластики повік на деякий час пацієнтам рекомендується
                  обмежити фізичну активність і уникати тривалого впливу
                  сонячних променів на шкіру повік, аби забезпечити швидке
                  загоєння.
                </p>
                <p>
                  Засмаги та знаходитися на відкритому сонці слід уникати, щоб
                  мінімізувати ризики та забезпечити успішне загоєння.
                </p>
                <p>
                  Післяопераційний період, як правило, триває 10-14 днів, після
                  чого пацієнти повертаються до свого звичного формату життя.
                  Протягом цього періоду варто уникати інтенсивних спортивних
                  тренувань, а також відвідування саун та лазень, щоб не
                  викликати зайвого навантаження на область повік.
                </p>
                <p>
                  Хоча перші результати корекції видно відразу, остаточний ефект
                  буде помітним приблизно через місяць, а результат від бажаних
                  змін буде тривалим та стабільним.
                </p>
                <p>
                  Слід зазначити, що після транскон’юктивальної блефаропластики
                  реабілітація становить всього 3 дні, і проходить без синців і
                  набряків.
                </p>
                <p>
                  Необхідність повторної корекції може виникнути приблизно через
                  10-15 років, і це залежить від індивідуальних особливостей
                  організму кожного пацієнта. Ваша краса та комфорт – наш
                  пріоритет, тому ми завжди готові надати вам найкращі умови під
                  час проведення пластичних операцій.
                </p>
              </div>
              <div className={styles.bigQuestionsImage}>
                <Image
                  src="/images/blepharoplasty/facelifting19.jpg"
                  alt="Liver1"
                  width={400}
                  height={400}
                />
                <Image
                  src="/images/blepharoplasty/facelifting20.jpg"
                  alt="Liver1"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bigQuestionsSection}>
          <h3 onClick={() => toggleSection('roadClinic')}>
            Як дістатися клініки{' '}
            <span>{activeSection === 'roadClinic' ? '▲' : '▼'}</span>
          </h3>
          <div
            className={`${styles.bigQuestionsContent} ${activeSection === 'roadClinic' ? styles.active : ''}`}
          >
            <div className={styles.bigQuestionsTitle}>
              <div className={styles.bigQuestionsText}>
                <p>
                  Для пацієнтів з інших міст та країн у клініці передбачено
                  сервісну послугу трансферу. Для того, аби ним скористатися,
                  повідомте про це телефоном медичного куратора. Він підскаже
                  вам доїхати до клініки.
                </p>
                <p>
                  Завдяки злагодженій роботі нашого персоналу вам можна не
                  турбуватися про організаційні питання щодо проведення
                  операції. У разі потреби зверніться до медичного куратора,
                  який надасть кваліфіковану допомогу.
                </p>
              </div>
              <div className={styles.bigQuestionsImage}>
                <Image
                  src="/images/blepharoplasty/facelifting21.jpg"
                  alt="Liver1"
                  width={600}
                  height={300}
                />

                <Link href="/about-doctor/contacts">
                  <button className={styles.contactButton}>
                    Зв`язатися з нами
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigQuestions;
