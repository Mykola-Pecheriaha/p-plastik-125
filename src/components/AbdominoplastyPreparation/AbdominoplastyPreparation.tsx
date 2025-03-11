'use client';

import type React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PrimmaGallery from '../../components/PrimmaGallery/PrimmaGallery';
import ConsultationButton from '../../components/ConsultationButton/ConsultationButton';
import styles from './AbdominoplastyPreparation.module.css';

interface Section {
  title: string;
  content: string;
  images: string[];
}

const sections: Section[] = [
  {
    title: 'Види абдомінопластики',
    content: `Абдомінальна пластика має кілька видів:

Класична абдомінопластика. Вона застосовується для усунення шкірно-жирового «фартуха», що зайво провисає внизу живота, якому найчастіше супроводжують діастаз і грижа. Розріз робиться над пахвинною областю (горизонтально) та навколо пупка. Пластичний хірург видаляє надлишок шкірного покриву і жирової тканини, вшиває м'язи, що розійшлися, і формує нове пупкове кільце. Методика дозволяє працювати з великими обсягами фартуха. З її допомогою відновлюються властивості м'язового корсета, формується нова лінія талії та реконструюються контури тіла.

Абдомінопластика із вертикальним розрізом. Метод відрізняється від попереднього розташування розрізу. Його роблять вертикально – по середній лінії живота, а не над лобковою областю. Надлишок тканини усувається від боків до середини. Розріз розташовуватиметься вертикально. Перевага такого хірургічного втручання у меншій травматичності, оскільки спеціаліст працює з невеликою зоною.

Мініабдомінопластика. Малоінвазивне втручання, показане пацієнтам, які хочуть підкоригувати зовнішній вигляд тіла – надати естетичної форми нижньому відділу черевної порожнини. Хірург робить розріз у ділянці бікіні, відсікає частину шкіри та жирової тканини. Ця методика не передбачає перенесення пупка та зміни його форми, а також ушивання розтягнутих м'язів.

Абдомінопластика сполучена з ліпосакцією. Для отримання більш вираженого ефекту в деяких випадках пластика живота поєднується з ліпосакцією. Перевага полягає в тому, що разом із надлишком шкірно-жирового «фартуха» та зміцненням м'язів забирається надлишок жиру. Ліпосакцію проводять на фланках (боках) через невеликі проколи.`,
    images: [
      '/images/AbdominoplastyPreparation/preparation4.jpg',
      '/images/AbdominoplastyPreparation/preparation4.jpg',
      '/images/AbdominoplastyPreparation/preparation4.jpg',
    ],
  },
  {
    title: 'Етапи операції',
    content: `Хірургічний процес передбачає висічення надлишків шкіри, жиру, рубців, розтяжок, що знаходяться нижче пупка. За рахунок цього відбувається природний ліфтінг. Також зшивають м'язи, а також видаляють наявні грижі та нерівності. Проводиться зміцнення м'язового корсету. Методика проведення абдомінопластики підбирається для кожного пацієнта індивідуально, виходячи з характеру та ступеня вираженості дефекту. Найчастіше використовується нижній, горизонтальний доступ у шкірній складці над лобком. У деяких випадках виконується додатковий рубець навколо пупка.

У цьому корекція може проводитися двома способами: зі створенням нового пупкового кільця, або його формування. Новий пупок формується, коли було видалено великий фрагмент шкіри або підшкірної тканини.

Рана ушивається косметичними швами. Для цього використовуються нитки, що саморозсмоктуються. Це дуже зручно, тому що шви не знімаються, і за ними не потрібно спеціального догляду.

Також застосовується інноваційна технологія проклеювання післяопераційного шва. На зашиту рану спочатку накладається спеціальна сіточка, яка утримуватиме краї, і – безпосередньо проводиться обробка клеєм.

Переваги проклеювання швів:

післяопераційний шов захищений від проникнення бактерій та обвітрювання;
прискорюється процес загоєння;
отримуємо відмінні косметичні результати – шов через 2 тижні виглядає як через 6-8 місяців!`,
    images: [
      '/images/AbdominoplastyPreparation/preparation5.jpg',
      '/images/AbdominoplastyPreparation/preparation5.jpg',
      '/images/AbdominoplastyPreparation/preparation5.jpg',
    ],
  },
];

interface AbdominoplastyPreparationProps {
  backgroundColor?: string;
}

const AbdominoplastyPreparation: React.FC<AbdominoplastyPreparationProps> = ({
  backgroundColor = '#acc864',
}) => {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={styles.background} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Абдомінопластика: підготовка до операції
        </h2>

        <div className={styles.introSection}>
          <div className={styles.introText}>
            <p>
              Перший крок до ідеально плоского живота – індивідуальна
              консультація у пластичного хірурга Печеряги Миколи в місті
              Чернівці.
            </p>
            <p>
              На консультації в нашій клініці обговорюються побажання пацієнта,
              а також нюанси та тонкощі майбутньої пластики. Безпосередньо перед
              хірургічним втручанням пацієнт проходить загальне обстеження лише
              за 1 день!
            </p>
            <p>
              Іногороднім пацієнтам пропонується поєднати консультацію,
              обстеження (здачу аналізів) та операцію в 1 візит!
            </p>
            <p>
              Корекція живота на етапі підготовки вимагатиме припинення прийому
              будь-яких медичних препаратів, що розріджують кров, не менше ніж
              за 10 днів до операції. Варто утриматися від куріння не менше ніж
              за 10 днів до абдомінопластики – і на місяць-півтора після неї.
              Безпосередньо перед початком проведення пластики (за два дні)
              необхідно обмежити калорійність їжі та пити більше рідини. У день
              операції заборонено пити та їсти.
            </p>
            <p>
              Пластична операція живота фото результатів можна переглянути в
              розділі{' '}
              <Link href="/albums/abdominoplasty" className={styles.link}>
                до та після
              </Link>
              .
            </p>
          </div>
          <div className={styles.introImage}>
            <PrimmaGallery
              images={['/images/AbdominoplastyPreparation/preparation6.jpg']}
              galleryId="consultation"
            />
          </div>
        </div>

        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h3 className={styles.sectionTitle}>{section.title}</h3>
            <div className={styles.sectionContent}>
              <div className={styles.textContent}>
                <p>
                  {expandedSections.includes(index)
                    ? section.content
                    : `${section.content.slice(0, 100)}...`}
                </p>
                <button
                  onClick={() => toggleSection(index)}
                  className={styles.toggleButton}
                >
                  {expandedSections.includes(index) ? (
                    <>
                      <span>Показати менше</span>
                      <ChevronUp className={styles.icon} />
                    </>
                  ) : (
                    <>
                      <span>Показати більше</span>
                      <ChevronDown className={styles.icon} />
                    </>
                  )}
                </button>
              </div>
              <div className={styles.galleryContent}>
                <PrimmaGallery
                  images={section.images}
                  galleryId={`section-${index}`}
                />
              </div>
            </div>
          </div>
        ))}
        <ConsultationButton />
      </div>
    </div>
  );
};

export default AbdominoplastyPreparation;
