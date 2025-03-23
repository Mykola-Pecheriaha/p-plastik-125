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
    'коригування мочки вуха – відновлення при розривах та утворення тунелів',
  ];

  const galleryImages: ImageType[] = [
    {
      src: '/images/FlapIndications/ottoplastic8.jpg',
      width: 400,
      height: 700,
    },
    {
      src: '/images/FlapIndications/ottoplastic6.jpg',
      width: 400,
      height: 427,
    },
    {
      src: '/images/FlapIndications/ottoplastic22.jpg',
      width: 300,
      height: 340,
    },
    {
      src: '/images/FlapIndications/ottoplastic20.jpg',
      width: 300,
      height: 426,
    },
    {
      src: '/images/FlapIndications/flap1.bmp',
      width: 300,
      height: 345,
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
          <p>
            Мочка вуха, як для чоловіків, так і для жінок - не тільки місце для
            прикрас. У деяких культурах вона відображає соціальний статус, є
            синонімом процвітання.
            <p>
              Вушна мочка більш схильна до розриву або деформації, ніж інші
              частини вуха, тому що вона складається зі шкіри та жирової
              клітковини, а не з хряща.
              <p>
                Існують деформації мочки, викликані добровільним введенням
                «тунелів» - розширювачів, що збільшують розмір проколу.
              </p>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlapIndications;
