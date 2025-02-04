'use client';

import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import styles from './BlefaroPreparation.module.css';

interface ExpandableSectionProps {
  title: string;
  content: string;
  images: string[];
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  title,
  content,
  images,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.expandableSection}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div className={styles.sectionContent}>
        <div className={styles.textContent}>
          <p>{isExpanded ? content : `${content.slice(0, 100)}...`}</p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={styles.expandButton}
          >
            {isExpanded ? 'Показати менше' : 'Показати більше'}
          </button>
        </div>
        <div className={styles.imageContainer}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image || '/placeholder.svg'}
              alt={`${title} ${index + 1}`}
              width={300}
              height={200}
              objectFit="cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface BlefaroPreparationProps {
  backgroundColor?: string;
}

const BlefaroPreparation: React.FC<BlefaroPreparationProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Пластика повік (блефаропластика): підготовка до операції
        </h2>

        <p className={styles.description}>
          Перший крок до молодості та краси – консультація у пластичного хірурга
          Миколи Печеряги у Чернівцях. Спеціаліст приймає пацієнтів з усіх міст
          України. Можлива відеоконсультація.
        </p>
        <p className={styles.description}>
          На індивідуальній зустрічі в нашій клініці пацієнт та хірург
          обговорюють нюанси майбутнього процесу та особливості періоду
          реабілітації.
        </p>
        <p className={styles.description}>
          Корекція повік фото до і після дають повне уявлення про результат
          хірургічного втручання.
        </p>
        <p className={styles.description}>
          Обовязкова умова перед проведенням – складання медичних аналізів, що
          проводиться у власній лабораторії клініки.
        </p>
        <p className={styles.description}>
          Особливої ​​підготовки до блефаропластики не потрібно. За 2 тижні
          рекомендуємо обмеження в прийомі медичних препаратів, що впливають на
          згортання крові (за попередньою консультацією з фахівцем, що лікує).
        </p>

        <ExpandableSection
          title="Процес проведення операції"
          content="У клініці Vidnova передбачена «хірургія одного дня» – консультація, обстеження та операція виконуються за 1 день! За таким форматом проходять: отопластика (корекція вух), ліпосакція, інтимна пластика(лабіопластика). Блефаропластика проводиться під місцевою анестезією, знаходження у стаціонарі не потрібно – через кілька годин після операції пацієнт може їхати додому із рекомендаціями від пластичного хірурга. Блефаропластика часто поєднується з підтяжкою обличчя , ліпофілінгом для отримання максимально вираженого результату омолодження. Пластичний хірург Микола Печеряга в Чернівцях проводить такі види блефаропластики: пластику верхніх та нижніх повік."
          images={[
            '/images/blefaroPreparation/blefaro5.jpg',
            '/images/blefaroPreparation/operation-process-2.jpg',
            '/images/blefaroPreparation/operation-process-3.jpg',
          ]}
        />

        <ExpandableSection
          title="Пластика верхніх повік"
          content="Показання для пластики верхніх повік: надлишок шкіри зверху (нависання над війним краєм); підшкірна жирова грижа (надає похмурого та втомленого погляду). Надлишок шкірного покриву в цій галузі може погіршити зір і призвести до швидкої втоми очей, стати на заваді якісному нанесенню макіяжу. Пластична операція «розплющує» око, робить погляд більш молодим, прибирає вікові зморшки. Блефаропластика верхніх повік передбачає хірургічний доступ через верхню повіку, шов від розрізу лягає в природну складку і, заживши, стає непомітним. Операція проводиться амбулаторно з використанням місцевої анестезії та сучасних внутрішньошкірних косметичних ниток. Через кілька годин після втручання пацієнт може залишити клініку. Знаходження у стаціонарі не потрібне. Період реабілітації протікає комфортно, а шви знімаються на 6-7 день."
          images={[
            '/images/blefaroPreparation/upper-eyelid-1.jpg',
            '/images/blefaroPreparation/upper-eyelid-2.jpg',
            '/images/blefaroPreparation/upper-eyelid-3.jpg',
          ]}
        />

        <ExpandableSection
          title="Пластика нижніх повік"
          content="Нижня блефаропластика – делікатне хірургічне втручання щодо видалення жирових гриж («мішків» під очима) та відсікання надлишку в'ялої шкіри. Воно передбачає розріз безпосередньо під лінією вій, тобто рубець буде захований у природній складці тканини. Використовується місцева анестезія. Проведення відбувається амбулаторно. Операція допомагає позбутися жирової грижі та мішків під очима. Однак поки що не вдається повністю гарантувати результат при видаленні зморшок у районі «гусячих лапок». Для цього рекомендується застосовувати спеціальні косметологічні процедури: наприклад, ін'єкції ботулотоксину. Шви знімаються на 6-7 день. Підтяжка нижніх повік часто поєднується з верхньою блефаропластикою – суміщену корекцію прийнято називати круговою. Вона дозволяє миттєво омолодити та освіжити зону навколо очей."
          images={[
            '/images/blefaroPreparation/lower-eyelid-1.jpg',
            '/images/blefaroPreparation/lower-eyelid-2.jpg',
            '/images/blefaroPreparation/lower-eyelid-3.jpg',
          ]}
        />

        <ExpandableSection
          title="Транскон'юнктивальна пластика повік"
          content="Блефаропластика нижніх повік транскон'юнктивального типу вважається однією з найбільш делікатних корекцій. Вона відрізняється від інших методів тим, що при видаленні грижових мішків не потрібно робити зовнішній розріз. Він проходить по кон'юнктиві (на внутрішній поверхні ока), не залишаючи видимих ​​слідів на шкірі. Методику часто називають «безшовною». Транскон'юнктивальна пластика підходить молодим пацієнтам, які мають досить пружну шкіру без зморшок та складок у ділянці очей. Виконується вона за рекомендацією спеціаліста."
          images={[
            '/images/blefaroPreparation/transconjunctival-1.jpg',
            '/images/blefaroPreparation/transconjunctival-2.jpg',
            '/images/blefaroPreparation/transconjunctival-3.jpg',
          ]}
        />
      </div>
    </div>
  );
};

export default BlefaroPreparation;
