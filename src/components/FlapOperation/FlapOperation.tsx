'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './FlapOperation.module.css';

interface FlapOperationProps {
  backgroundColor?: string;
}

interface SectionType {
  id: string;
  title: string;
  content: string;
}

const FlapOperation: React.FC<FlapOperationProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const sections: SectionType[] = [
    {
      id: 'consultation',
      title: 'Пластика вух: консультація',
      content:
        'Перший крок на шляху вирішення проблеми – консультація у пластичного хірурга Світлани Работенко у Львові. Фахівець приймає пацієнтів із Дніпра, Запоріжжя, Харкова, Києва, а також з інших міст України. У клініці Vidnova на індивідуальній зустрічі пацієнт та пластичний хірург обговорюють побажання щодо корекції вушної раковини',
    },
    {
      id: 'preparation',
      title: 'Отопластика (пластика вух): підготовка до операції',
      content:
        'Для зручності пацієнтів та економії їх часу у клініці Vidnova у Львові передбачена «��ірургія одного дня» – консультація, обстеження та операція проводяться за 1 день! За таким форматом також проходять: блефаропластика (пластика повік), ліпосакція, інтимна пластика.\n\nОтопластика не потребує ретельної підготовки. Перед оперативним втручанням рекомендується припинити прийом гормональних та аспірин-вмісних препаратів, а також повідомити спеціаліста про прийом усіх препаратів. Варто відмовитись від тютюнопаління або зменшити кількість сигарет. Виключити алкоголь.',
    },
    {
      id: 'rehabilitation',
      title: 'Реабілітація після отопластики',
      content:
        "Перші три дні можуть супроводжуватися дискомфортними відчуттями – набряклістю, онімінням, появою синців. Все це легко усувається знеболюючими і з часом сходить нанівець. У післяопераційний період для стабілізації результату та захисту оперованого вуха необхідно носити спеціальну фіксуючу пов'язку протягом 14 днів постійно. А в наступні 14 днів пов'язка накладається лише на ніч. Її можна замінити на цупку бандану.\n\nШви після корекції не знімаються. Працюємо з ниткою, що саморозсмоктується.\n\nЛюдині не треба відмовлятися від соціального життя. Одне з найчастіших питань про реабілітаційний період – чи можна мити голову? Так, це не протипоказано. Пацієнт активний і веде звичний спосіб життя. Контрольний огляд за 1 місяць.\n\nОтопластика не становить будь-якої небезпеки для здоров'я та життя пацієнта, а також не впливає на функцію слуху.",
    },
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const formatContent = (content: string, isExpanded: boolean) => {
    if (!isExpanded) {
      return content.slice(0, 100) + '...';
    }
    return content
      .split('\n\n')
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  return (
    <div className={styles.flapOperation} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Пластика вух: консультація</h1>

        {sections.map((section) => {
          const isExpanded = expandedSections.includes(section.id);

          return (
            <div key={section.id} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>

              <div className={styles.sectionContent}>
                <div className={styles.textContent}>
                  <div className={styles.text}>
                    {formatContent(section.content, isExpanded)}
                  </div>
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
                    galleryId={`operation-gallery-${section.id}`}
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

export default FlapOperation;
