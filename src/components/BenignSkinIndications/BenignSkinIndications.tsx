'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BenignSkinIndications.module.css';

interface BenignSkinIndicationsProps {
  backgroundColor?: string;
}

interface FormationType {
  id: string;
  title: string;
  description: string;
}

const formations: FormationType[] = [
  {
    id: 'nevus',
    title: 'НЕВУС',
    description:
      'Новоутворення доброякісного характеру, що виникає на шкірі у вигляді пігментації. Рекомендовано видаляти їх, якщо вони локалізовані у незручних місцях на тілі, або у разі загрози переродження у злоякісне новоутворення.',
  },
  {
    id: 'papilloma',
    title: 'ПАПІЛОМА',
    description:
      'Доброякісне пухлиноподібне новоутворення на шкірі або на слизовій оболонці. Основна причина виникнення цих пухлин – вірус папіломи.',
  },
  {
    id: 'atheroma',
    title: 'АТЕРОМА',
    description:
      'Eпітеліальна кіста – це доброякісне новоутворення сальної залози, яке виникає в результаті її закупорки.',
  },
  {
    id: 'hemangioma',
    title: 'ГЕМАНГІОМА',
    description:
      'Доброякісні судинні утворення, які можуть бути наслідком порушення розвитку судин в ембріональний період.',
  },
  {
    id: 'lipoma',
    title: 'ЛІПОМА',
    description:
      'Доброякісна жирова пухлина. Це новоутворення, яке формується з жирового прошарку, тому його друга назва – «жировик».',
  },
  {
    id: 'fibroma',
    title: 'ФІБРОМА',
    description:
      "Доброякісна пухлина з волокнистої сполучної тканини. Часто поєднується з розростанням інших тканин – зокрема м'язової (фіброміома), судинної (ангіофіброма), залізистої (фіброаденома). Дуже часто її діагностують у молодому віці, переважно у жіночої статі. Вона може бути різного кольору : від сірого до чорного. Поверхня зазвичай гладка, зростає повільно.",
  },
];

const BenignSkinIndications: React.FC<BenignSkinIndicationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  const toggleItem = (itemId: string) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className={styles.benignSkinIndications} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>
          Доброякісні новоутворення шкіри і підшкірної клітковини
        </h1>

        <div className={styles.formationsList}>
          {formations.map((formation) => (
            <div
              key={formation.id}
              className={`${styles.formationItem} ${openItemId === formation.id ? styles.expanded : ''}`}
            >
              <button
                className={styles.formationButton}
                onClick={() => toggleItem(formation.id)}
                aria-expanded={openItemId === formation.id}
              >
                <span>{formation.title}</span>
                <ChevronDown
                  className={`${styles.arrow} ${openItemId === formation.id ? styles.rotated : ''}`}
                />
              </button>

              {openItemId === formation.id && (
                <div className={styles.formationContent}>
                  <div className={styles.textContent}>
                    <p>{formation.description}</p>
                  </div>
                  <div className={styles.galleryContent}>
                    <PrimmaGallery
                      images={galleryImages}
                      galleryId={`formation-gallery-${formation.id}`}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenignSkinIndications;
