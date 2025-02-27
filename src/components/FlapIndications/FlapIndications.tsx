'use client';

import { ChevronRight } from 'lucide-react';
import GalleryIndication from '../GalleryIndication/GalleryIndication';
import styles from './FlapIndications.module.css';
import type React from 'react';
import type { ImageType } from '../GalleryIndication/GalleryIndication';

interface FlapIndicationsProps {
  backgroundColor?: string;
}

const FlapIndications: React.FC<FlapIndicationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const indications = [
    'естетична незадоволеність зовнішнім виглядом вух',
    'вроджена деформація',
    'бажання змінити розмір вуха',
    'значна відстовбурченість, видима асиметрія вушної раковини',
    'повторна корекція клаповухості, якщо результат попереднього втручання був незадовільним',
    'коригування мочки вуха – відновлення при розривах',
  ];

  const galleryImages: ImageType[] = [
    {
      src: '/images/FlapIndications/ottoplastic8.jpg',
      width: 400,
      height: 500,
    },
    {
      src: '/images/FlapIndications/ottoplastic6.jpg',
      width: 400,
      height: 500,
    },
    {
      src: '/images/FlapIndications/ottoplastic22.jpg',
      width: 300,
      height: 400,
    },
    {
      src: '/images/FlapIndications/ottoplastic20.jpg',
      width: 300,
      height: 400,
    },
  ];

  return (
    <div className={styles.flapIndications} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Показання до пластики вух</h1>

        <p className={styles.introText}>
          Операція з видалення клаповухості і рекомендується у таких випадках:
        </p>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <ul>
              {indications.map((indication, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  {indication}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <GalleryIndication
              images={galleryImages}
              galleryId="flap-indications-gallery"
            />
          </div>
        </div>

        <div className={styles.bottomText}>
          <p>
            Надмірна клаповухість вушної раковини – одна з деформацій, що
            трапляються найчастіше. За статистикою, «родзинка» є у 5% людей. Це
            не лише естетична проблема, а й психологічна. Вона викликає
            психологічний дискомфорт, а також стає причиною зниженої самооцінки.
          </p>
          <p>
            Отопластика – пластика вуха – одна з популярних пластичних операцій,
            яка легко коригує асиметрію та форму вушних раковини, справляється з
            клаповухістю або відстовбурченістю. Виконується за показаннями як
            дорослим, так і дітям. Вона швидко усуває фізичні вади, розвіює
            комплекси, гармонізує риси обличчя та дарує впевненість у собі.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlapIndications;
