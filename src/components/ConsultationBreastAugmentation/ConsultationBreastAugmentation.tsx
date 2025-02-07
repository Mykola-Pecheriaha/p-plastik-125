'use client';

import type React from 'react';
import { useState } from 'react';
import Image from "next/legacy/image";
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './ConsultationBreastAugmentation.module.css';
import ConsultationButton from '../../components/ConsultationButton/ConsultationButton';

interface Section {
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    title: 'Перша зустріч з пацієнтом',
    content:
      'Для мене перша зустріч з майбутнім пацієнтом досить відповідальна. По суті вона визначає чи буду я займатися вашою проблемою, чи ця консультація (розмова) і буде останньою в нас. На першій консультації ми обговорюємо ваші побажання та очікування від операції. Я уважно вислуховую ваші думки, проводжу огляд та вимірювання, щоб визначити оптимальний розмір та форму імплантів. Ми також обговорюємо можливі ризики та процес реабілітації. Дуже важливо дати пацієнту надію на те, що її проблема може бути вирішена . Але ця "надія" має бути конкретна і обоснована. Пацієнт після нашої розмови не повинен будувати в свої уяві "радужні замки" . Все має бути реально і конкретно',
  },
  {
    title: 'Підготовка до операції',
    content:
      'Перед операцією ви отримаєте детальні інструкції щодо підготовки. Це включає рекомендації щодо харчування, прийому медикаментів та інших важливих аспектів. Ми також проведемо необхідні аналізи та обстеження, щоб переконатися, що ви готові до операції. Необхідно ще раз уточнити розміри і форми імплантів. Також обговорити операційні доступи. З практика відомо що для кожного окремого пацієнта самий кращий "його" доступ, доступ який для нього найоптимальніший. Слід познайомити пацієнтку з анастезіологом, щоб він її оглянув і визначив метод знеболення (в/в, інтубаційний, епідуральний або комбінований). Перед операцією неповинно бути ніяких "невирішених" питань, тому що після операції виникають зовсім другі питання і очікування. Бажанно щоб вони не дуже різнилися з попередніми',
  },
  {
    title: 'Процес операції',
    content:
      'Операція зі збільшення грудей зазвичай триває 1,5-2 години. Вона проводиться під визначиним (загальним наркозом, епідуральною  чи комбінованим анастезією)знеболенням. Ми використовую загальнопринятні методики оперативного втручання та імпланти високої якості, щоб забезпечити найкращий результат та мінімізувати ризики. Під час операції в операційні царить спокійна і злагоджена робота. Кожни знає свої дії. Після операції на операційному столі хворій фіксуються молочні залози еластичеими повязками у вигляді "корсета". Пацієнтка переводиться в палату інтенсивної терапії. Ведеться догляд за дренажами. Проводиться всі медикаментозні призначення для покрашення самопочуття пацієнтки і профілактики можливих післяопераційних ускладнень',
  },
  {
    title: 'Післяопераційний період',
    content:
      'Після операції ви отримаєте детальні інструкції щодо догляду за грудьми та загального режиму. Ми регулярно проводимо контрольні огляди, щоб переконатися, що ваше відновлення проходить добре. Повне відновлення зазвичай займає кілька тижнів, але ви зможете повернутися до більшості повсякденних активностей вже через 1-2 тижні.',
  },
];

const images = [
  '/images/consultati/consukmnftion10.jpg',
  '/images/consultati/consukmnftion18.jpg',
  '/images/consultati/consukmnftion27.jpg',
  '/images/consultati/consultati3.jpg',
];

const ConsultationBreastAugmentation: React.FC = () => {
  const [openSections, setOpenSections] = useState<boolean[]>(
    new Array(sections.length).fill(false)
  );

  const toggleSection = (index: number) => {
    const newOpenSections = [...openSections];
    newOpenSections[index] = !newOpenSections[index];
    setOpenSections(newOpenSections);
  };

  return (
    <div className={styles.consultationBreastAugmentation}>
      <div className={styles.textSection}>
        <h2 className={styles.mainTitle}>
          Консультація щодо збільшення грудей
        </h2>
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h3 className={styles.sectionTitle}>{section.title}</h3>
            <p className={styles.sectionContent}>
              {openSections[index]
                ? section.content
                : `${section.content.slice(0, 100)}...`}
            </p>
            <button
              className={styles.toggleButton}
              onClick={() => toggleSection(index)}
            >
              {openSections[index] ? (
                <>
                  <ChevronUp size={20} />
                  <span>Згорнути</span>
                </>
              ) : (
                <>
                  <ChevronDown size={20} />
                  <span>Подивитися все</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.imageSection}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={image || '/placeholder.svg'}
              alt={`Консультація з пластичним хірургом ${index + 1}`}
              width={300}
              height={200}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        ))}
        <ConsultationButton />
      </div>
    </div>
  );
};

export default ConsultationBreastAugmentation;
