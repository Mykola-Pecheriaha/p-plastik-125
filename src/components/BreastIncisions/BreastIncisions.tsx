'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BreastIncisions.module.css';
import type React from 'react';

interface BreastIncisionsProps {
  backgroundColor?: string;
}

interface SurgeryType {
  title: string;
  description: string;
}

const BreastIncisions: React.FC<BreastIncisionsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const surgeryTypes: SurgeryType[] = [
    {
      title: 'Субмамарний спосіб',
      description:
        "Найбільш популярний доступ для встановлення імплантатів – універсальний та надійний. Розріз розташовується в підгрудній складці – стику нижньої частини залози та грудної клітки на рівні 5-6 ребра. Головна перевага способу – можливість встановити імплантат будь-якої форми та об'єму. Розріз відкриває доступ до хірургічного поля. Грудні тканини не травмуються.",
    },
    {
      title: 'Періареолярний спосіб',
      description:
        'Доступ через розріз нижнього краю ареоли. Він дозволяє не лише скоригувати розмір залози, але також виконати підтяжку грудей при птозі, змінити розмір та форму ареоли. Розріз проходить по межі ареоли та шкіри. Післяопераційний рубець добре маскується і з часом стає непомітним.',
    },
    {
      title: 'Аксилярний спосіб',
      description:
        'Найбільш естетично привабливий доступ для мамопластики – установка через пахву. Його часто називають "безшовним", оскільки після втручання на залозі не залишається видимих слідів. Рубець розташовується в природній складці пахвової',
    },
  ];

  const liftTypes: SurgeryType[] = [
    {
      title: 'Періареолярна підтяжка',
      description:
        'Надлишок шкіри та тканини залози січуться та перерозподіляються через розріз по пігментованому краю ареоли. Цей вид підтяжки виконується за мінімального птоза, коли сосок знаходиться на рівні підгрудної складки.',
    },
    {
      title: 'Вертикальна підтяжка',
      description:
        'Розріз робиться навколо ареоли та проходить вертикально вниз від неї. Методика рекомендована, коли сосок знаходиться нижче за інфрамамарну складку на 1-3 см – помірний птоз.',
    },
    {
      title: 'Т-подібна («якірна») підтяжка',
      description:
        'Потрібно при вираженому птозі, коли сосок "дивиться" вниз і знаходиться нижче підгрудної складки. При Т-подібній підтяжці розріз проходить вертикально навколо ареоли і вниз від неї, а також горизонтально (3-4 см) під молочною залозою. Виходить перегорнута буква «Т».',
    },
  ];

  // Галерея для першої секції - види хірургічного доступу
  const surgeryGalleryImages = [
    '/placeholder.svg?height=300&width=300&text=Surgery1',
    '/placeholder.svg?height=300&width=300&text=Surgery2',
    '/placeholder.svg?height=300&width=300&text=Surgery3',
    '/placeholder.svg?height=300&width=300&text=Surgery4',
  ];

  // Галерея для другої секції - методики підтяжки
  const liftGalleryImages = [
    '/placeholder.svg?height=300&width=300&text=Lift1',
    '/placeholder.svg?height=300&width=300&text=Lift2',
    '/placeholder.svg?height=300&width=300&text=Lift3',
    '/placeholder.svg?height=300&width=300&text=Lift4',
  ];

  return (
    <div className={styles.breastIncisions} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Види розрізів при мамопластиці</h2>

        <h4 className={styles.subtitle}>
          Імплантація грудей проводиться за допомогою
          <br />
          трьох основних хірургічних видів доступу:
        </h4>

        <div className={styles.content}>
          <div className={styles.textContent}>
            {surgeryTypes.map((type, index) => (
              <div key={index} className={styles.surgeryType}>
                <div className={styles.typeTitle}>
                  <ArrowRight size={20} />
                  <span>{type.title}</span>
                </div>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={surgeryGalleryImages}
              galleryId="breast-surgery-gallery"
            />
          </div>
        </div>

        <div className={styles.imageRow}>
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Breast surgery technique 1"
            width={600}
            height={400}
            className={styles.rowImage}
          />
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Breast surgery technique 2"
            width={600}
            height={400}
            className={styles.rowImage}
          />
        </div>

        <h4 className={styles.subtitle}>
          Пластика молочних залоз, спрямована на підтяжку,
          <br />
          виконується за допомогою таких методик:
        </h4>

        <div className={styles.content}>
          <div className={styles.textContent}>
            {liftTypes.map((type, index) => (
              <div key={index} className={styles.surgeryType}>
                <div className={styles.typeTitle}>
                  <ArrowRight size={20} />
                  <span>{type.title}</span>
                </div>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={liftGalleryImages}
              galleryId="breast-lift-gallery"
            />
          </div>
        </div>

        <p className={styles.bottomText}>
          Корекція грудей з метою зменшення передбачає видалення надлишку
          жирової тканини та частини тканин залози, а також переміщення
          сосково-ареолярного комплексу. Операція виконується із застосуванням
          вертикального чи «якірного» розрізів.
        </p>
      </div>
    </div>
  );
};

export default BreastIncisions;
