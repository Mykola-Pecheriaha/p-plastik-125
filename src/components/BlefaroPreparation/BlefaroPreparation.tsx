'use client';

import type React from 'react';
import { useState } from 'react';
import Image from 'next/legacy/image';
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

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
          <button onClick={handlePrevImage} className={styles.imageNavButton}>
            ←
          </button>
          <Image
            src={images[currentImageIndex] || '/placeholder.svg'}
            alt={`${title} ${currentImageIndex + 1}`}
            width={400}
            height={300}
            objectFit="cover"
          />
          <button onClick={handleNextImage} className={styles.imageNavButton}>
            →
          </button>
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
          content="
          Хірургія повік — це вид мистецтва, який вимагає ретельного планування перед першим розрізом. Позначення шкіри повік для видалення є, мабуть, найважливішим кроком у косметичній хірургії повік і блефаропластиці, особливо тому, що все вираховуються в міліметрах і тому  кожний міліметр є важливі  в цій області.
          
          Блефаропластика проводиться під місцевою анестезією, знаходження у стаціонарі не потрібно – через кілька годин після операції пацієнт може їхати додому із рекомендаціями від пластичного хірурга. Після операції пацієнти повинні утримуватися від фізичних навантажень протягом 24-48 годин і застосовувати холодні компреси, щоб зменшити набряк і синці. Через 2 тижні пацієнти повертаються в клініку для зняття тонких нейлонових швів. Після зняття швів можна наносити макіяж. Пацієнти повертаються в клініку через місяць після операції, щоб оцінити загоєння та зробити фотографії після операції. Пластичний хірург Микола Печеряга в Чернівцях проводить такі види блефаропластики: пластику верхніх та нижніх повік. "
          images={[
            '/images/blefaroPreparation/blefaroplastic2-removebg-preview.png',

            '/images/blefaroPreparation/blefaroplastic3.jpg',
          ]}
        />

        <ExpandableSection
          title="Пластика верхніх повік"
          content="Показання для пластики верхніх повік: надлишок шкіри зверху (нависання над війним краєм); підшкірна жирова грижа (надає похмурого та втомленого погляду). Надлишок шкірного покриву в цій галузі може погіршити зір і призвести до швидкої втоми очей, стати на заваді якісному нанесенню макіяжу. Деякі верхні повіки можуть бути настільки опущеними, що закривають поле зору пацієнта , який може змінити лише хірургічне втручання. Пластична операція «розплющує» око, робить погляд більш молодим, прибирає вікові зморшки. Блефаропластика верхніх повік передбачає хірургічний доступ через верхню повіку, шов від розрізу лягає в природну складку і, заживши, стає непомітним. 
          
          Операція проводиться амбулаторно з використанням місцевої анестезії та сучасних внутрішньошкірних косметичних ниток. Через кілька годин після втручання пацієнт може залишити клініку. Знаходження у стаціонарі не потрібне. Період реабілітації протікає комфортно, а шви знімаються на 6-7 день."
          images={[
            '/images/blefaroPreparation/blefaroplastic5-removebg-preview.png',
            '/images/blefaroPreparation/blefaroplastic6.jpg',
            '/images/blefaroPreparation/blefaroplastic10.jpg',
          ]}
        />

        <ExpandableSection
          title="Пластика нижніх повік"
          content="Нижня блефаропластика – делікатне хірургічне втручання щодо видалення жирових гриж («мішків» під очима) та відсікання надлишку в'ялої шкіри. Воно передбачає розріз безпосередньо під лінією вій, тобто рубець буде захований у природній складці тканини. Використовується місцева анестезія. Проведення відбувається амбулаторно. Операція допомагає позбутися жирової грижі та мішків під очима. Однак поки що не вдається повністю гарантувати результат при видаленні зморшок у районі «гусячих лапок». В нашій клініці нижня блефаропластика практично завжди виконується тільки в комплексі підтяжки верхньо-серединної ділянки обличча і практично в виключних випадках самостійно.
          "
          images={[
            '/images/blefaroPreparation/blefaroplastic12.jpg',
            '/images/blefaroPreparation/blefaroplastic13.jpg',
            '/images/blefaroPreparation/blefaroplastic14.jpg',
            '/images/blefaroPreparation/blefaroplastic15-removebg-preview.png',
          ]}
        />

        <ExpandableSection
          title="Транскон'юнктивальна пластика повік"
          content="Блефаропластика нижніх повік транскон'юнктивального типу вважається однією з найбільш делікатних корекцій. Вона відрізняється від інших методів тим, що при видаленні грижових мішків не потрібно робити зовнішній розріз. Він проходить по кон'юнктиві (на внутрішній поверхні ока), не залишаючи видимих ​​слідів на шкірі. Методику часто називають «безшовною». Транскон'юнктивальна пластика підходить молодим пацієнтам, які мають досить пружну шкіру без зморшок та складок у ділянці очей. Виконується вона за рекомендацією спеціаліста."
          images={[
            '/images/blefaroPreparation/blefaroplastic16.jpg',
            '/images/blefaroPreparation/blefaroplastic17.jpg',
            '/images/blefaroPreparation/blefaroplastic18.jpg',
          ]}
        />
      </div>
    </div>
  );
};

export default BlefaroPreparation;
