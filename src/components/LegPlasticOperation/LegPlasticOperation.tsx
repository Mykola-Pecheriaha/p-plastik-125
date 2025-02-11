'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './LegPlasticOperation.module.css';
import type React from 'react';

interface LegPlasticOperationProps {
  backgroundColor?: string;
}

interface ExpandableSection {
  id: string;
  title: string;
  content: string;
}

const LegPlasticOperation: React.FC<LegPlasticOperationProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  const expandableSections: ExpandableSection[] = [
    {
      id: 'operation',
      title: 'Корекція ніг: проведення пластичної операції',
      content: `Корекція ніг проводиться за допомогою хірургічного розрізу (3-4 см), у підколінній складці формується кишеня. Силіконовий імплантат розміщується під фасцію (сполучнотканину оболонку для м'язів), щоб він не відчувався ні носієм, ні при дотику. Потім рана ушивається косметичним швом. Післяопераційні рубці ховаються у складках шкіри, тому зовсім непомітні. Згодом вони перетворюються на смужку, приймаючи колір шкіри.

Ендопротези наповнені когезивним гелем, який повторює структуру м'язової тканини та зберігає форму навіть у разі пошкодження поверхні. Вони мають довічну гарантію, стійкі до зовнішніх пошкоджень і надалі не потребують заміни.`,
    },
    {
      id: 'rehabilitation',
      title: 'Пластика ніг: реабілітація',
      content: `Через 1 добу після операції пацієнт їде додому із рекомендаціями. Перші кілька днів раннього післяопераційного періоду можуть зберігатися: набряклість, відчуття оніміння шкіри, синці. Шви після операції не знімаються.

Для фіксації розташування імплантату потрібно носити спеціальну компресійну білизну протягом 2-4 тижнів.

У період реабілітації не рекомендується носіння взуття на підборах, сидіння навпочіпки та різкі присідання. Фізична активність обмежена 2 місяці. Утриматися слід від відвідування саун, лазень, басейнів. Потім можна поступово повертатися до активних занять спортом.

Результат круропластики зберігається протягом усього життя.`,
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className={styles.legPlasticOperation} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Пластика ніг: підготовка до операції
        </h2>

        <div className={styles.fullWidthSection}>
          <p>
            У клініці Vidnova пацієнт за 1 добу до операції проходить комплексне
            обстеження та здає аналізи. На підставі одержаних результатів
            приймається рішення щодо проведення втручання.
          </p>
          <p>
            Круропластика, як будь-яка операція, вимагатиме відмови від куріння
            та припинення вживання алкогольних напоїв за 2 тижні. Також
            необхідно повідомити спеціаліста про прийом лікарських препаратів,
            навіть вітамінів.
          </p>
          <p>
            Пластика ніг виконується за допомогою спеціальних силіконових
            імплантатів від провідного виробника POLYTECH (Німеччина). Тобто, в
            гомілки встановлюються силіконові імплантати, які допомагають
            зробити рельєф близьким до ідеалу (практично рівні по зовнішній
            частині та симетрично опуклі – по внутрішній поверхні). Зазначимо,
            що подібні імплантати, тільки більші за обсяг, використовуються для{' '}
            <Link href="/breast-augmentation" className={styles.link}>
              збільшення грудей
            </Link>
            .
          </p>
          <p>
            Силіконові імплантати мають різні форми: симетричні та анатомічні.
            Необхідні форму та обєм, оптимальне місце розміщення підбирає
            пластичний хірург, враховуючи анатомічні дані людини.
          </p>
        </div>

        {expandableSections.map((section) => {
          const isExpanded = expandedSections.includes(section.id);
          const previewText = section.content.slice(0, 100) + '...';

          return (
            <div key={section.id} className={styles.expandableSection}>
              <h3>{section.title}</h3>
              <div className={styles.sectionContent}>
                <div className={styles.textContent}>
                  {isExpanded ? (
                    section.content
                      .split('\n\n')
                      .map((paragraph, index) => <p key={index}>{paragraph}</p>)
                  ) : (
                    <p>{previewText}</p>
                  )}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={styles.toggleButton}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Показати менше' : 'Показати більше'}
                    <ChevronDown
                      className={`${styles.arrow} ${isExpanded ? styles.rotated : ''}`}
                    />
                  </button>
                </div>
                <div className={styles.galleryContent}>
                  <PrimmaGallery
                    images={galleryImages}
                    galleryId={`leg-operation-gallery-${section.id}`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LegPlasticOperation;
