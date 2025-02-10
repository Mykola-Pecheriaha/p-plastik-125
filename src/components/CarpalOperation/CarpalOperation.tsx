'use client';

import { useState } from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './CarpalOperation.module.css';

interface CarpalOperationProps {
  backgroundColor?: string;
  sectionBackgroundColor?: string;
  sectionHoverColor?: string;
  sectionBorderColor?: string;
}

const CarpalOperation: React.FC<CarpalOperationProps> = ({
  backgroundColor = '#f0f4f8',
  sectionBackgroundColor = '#7FD1F1FF',
  sectionHoverColor = '#89BCEEFF',
  sectionBorderColor = '#308DEBFF',
}) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className={styles.carpalOperation} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Операція - найефективний спосіб</h2>

        <p className={styles.fullWidthText}>
          Це найбільш ефективний та останній спосіб лікування синдрому
          карпального каналу. Оскільки сутністю цієї хвороби є затискання нерва,
          мета операції – це звільнення нерва від затиснутого стану, що
          досягається шляхом перерізання карпальної звязки. Операція виконується
          в сучасні операційні з моніторним наглядом за станом пацієнта. триває
          недовго і легко переноситься., її роблять під місцевим (локальним)
          наркозом – як у стоматолога. Незабаром після операції пацієнт може
          вирушати додому.
        </p>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div
              className={styles.collapsibleSection}
              onClick={() => toggleSection('anesthesia')}
              style={{
                backgroundColor:
                  openSection === 'anesthesia'
                    ? sectionHoverColor
                    : sectionBackgroundColor,
                borderColor: sectionBorderColor,
              }}
            >
              <h3>Знеболення - місцеве</h3>
              {openSection === 'anesthesia' && (
                <p>
                  В ділянку операції вводиться місцевий анастетик (після
                  відповідних проб). При необхідності спосіб знеболення може
                  коригуватися анастезіологом
                </p>
              )}
            </div>

            <h2 className={styles.methodsTitle}>
              Методи оперативного лікування
            </h2>

            <div
              className={styles.collapsibleSection}
              onClick={() => toggleSection('traditional')}
              style={{
                backgroundColor:
                  openSection === 'traditional'
                    ? sectionHoverColor
                    : sectionBackgroundColor,
                borderColor: sectionBorderColor,
              }}
            >
              <h3>Традиційний метод</h3>
              {openSection === 'traditional' && (
                <p>
                  В ділянці запястка, по нижній складці робиться косий розріз
                  1,5 - 2,0 см через який знаходится карпальна зязка і
                  розсікається в поперечному до неї напрямку. Після контролю
                  зупинки кровотечі шви накладаються тільки на шкіру. Через
                  деякий час розрізу практично невидно
                </p>
              )}
            </div>

            <div
              className={styles.collapsibleSection}
              onClick={() => toggleSection('endoscopic')}
              style={{
                backgroundColor:
                  openSection === 'endoscopic'
                    ? sectionHoverColor
                    : sectionBackgroundColor,
                borderColor: sectionBorderColor,
              }}
            >
              <h3>Ендоскопічний метод</h3>
              {openSection === 'endoscopic' && (
                <p>
                  Ендоскопічний метод є набагато щаднішим для пацієнта. Через
                  маленький розріз в шкірі в карпальний канал вводиться
                  мініатюрний ендоскоп (медична відеокамера) і з застосуванням
                  маленьких хірургічних інструментів перерізається карпальна
                  звязка, звільняючи таким чином нерв.
                </p>
              )}
            </div>
          </div>

          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="carpal-operation-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarpalOperation;
