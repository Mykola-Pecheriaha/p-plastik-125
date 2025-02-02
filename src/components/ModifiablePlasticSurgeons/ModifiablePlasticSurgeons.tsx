import type React from 'react';
import Link from 'next/link';
import GallerySurgeons from '../GallerySurgeons/GallerySurgeons';
import styles from './ModifiablePlasticSurgeons.module.css';

interface ModifiablePlasticSurgeonsProps {
  backgroundColor?: string;
}

const surgeonImages = [
  '/images/gallerysurgeons/chirurg10.jpg',
  '/images/gallerysurgeons/chirurg50.JPG',
  '/images/gallerysurgeons/chirurg51.jpg',
  '/images/sertificats/Sertificat4.jpg',
  '/images/sertificats/Sertificat10.jpg',
  '/images/sertificats/Sertificat6.jpg',
  '/images/sertificats/Sertificat5.jpg',
  '/images/sertificats/Sertificat8.jpg',
  '/images/sertificats/Sertificat9.jpg',
  '/images/sertificats/Sertificat3.jpg',
  '/images/sertificats/Sertificat2.jpg',
  '/images/sertificats/Sertificat12.jpg',
];

const ModifiablePlasticSurgeons: React.FC<ModifiablePlasticSurgeonsProps> = ({
  backgroundColor = '#b7d9f8',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.plasticSurgeons}>
        <div className={styles.container}>
          <h2 className={styles.plasticSurgeonsTitle}>Пластичні хірурги</h2>
        </div>
        <div className={styles.containerplasticSurgeons}>
          <div className={styles.plasticSurgeonsImage}>
            <GallerySurgeons
              images={surgeonImages}
              galleryId="surgeons-gallery"
            />
          </div>
          <div className={styles.plasticSurgeonsText}>
            <h1>Печеряга Микола Миколайович</h1>
            <div className={styles.subTitle}>
              <div className={styles.subTitleTopp}>
                <div className={styles.subTitleToppText}>
                  <p>Член Європейської асоціації пластичних хірургів</p>
                </div>
              </div>
              <p>
                Я пластичний хірург з досвідом 25 років. Навчався у найкращих
                пластичних хірургів світу та виконую всі види пластичних
                операцій. Уже більше ніж 2600 пацієнтів з різних країн довірили
                мені свою красу. Ми різні, а значить хтось бажає зменшити обєми,
                а хтось навпаки збільшити їх — кожна жінка мріє про самобутню
                красу. Прямий маленький носик, гладенька підтягнута шкіра,
                привабливі пружні дівочі груди, струнка талія, відкритий погляд,
                маленька мочка вуха. Від цих деталей залежить самопочуття,
                гарний настрій, а іноді й щаслива доля! Ми з командою втілюємо
                бажання жінок та створюємо досконалу красу, зберігаючи
                індивідуальність.
              </p>
              <Link href="/about-doctor">
                <button className={styles.contactButton}>
                  Детальніше про клініку та лікаря
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifiablePlasticSurgeons;
