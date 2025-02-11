'use client';

import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './LegPlasticIndications.module.css';
import type React from 'react';

interface LegPlasticIndicationsProps {
  backgroundColor?: string;
}

const LegPlasticIndications: React.FC<LegPlasticIndicationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div className={styles.legPlasticIndications} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Пластика ніг: показання</h2>

        <div className={styles.introText}>
          <p>
            Насамперед, хірургічна корекція спрямована на виправлення кривизни
            ніг. Існує два види кривизни. Один з них призводить до того, що
            кістки ніг повторюють силует у формі о, коли коліна розходяться в
            сторони, а ікри трохи вивернуті. Інший варіант – кривий силует у
            формі х, коли коліна близько розташовані, зате в литках ноги
            спрямовані в сторони.
          </p>
          <p>
            Круропластика передбачає вирівнювання кривизни ніг за рахунок
            корекції їхнього мякого рельєфу. Вона дозволяє професійно
            замаскувати недолік, надавши нижнім кінцівкам гарну форму та
            витонченість.
          </p>
        </div>

        <h4 className={styles.subtitle}>
          Круропластика має медичні та естетичні показання для проведення:
        </h4>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <ul>
              <li>
                худі ноги без опуклого рельєфу (таз при цьому може бути як
                вузьким, так і широким і навіть пишним), що спричиняють
                естетичний дискомфорт;
              </li>
              <li>асиметричні порушення форми гомілок;</li>
              <li>викривлення ніг по «о» та «х» силуетах;</li>
              <li>«валики» на бічній або задній поверхні гомілок;</li>
              <li>
                вроджена, постопераційна, посттравматична або атрофія/гіпотрофія
                литкових мязів.
              </li>
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="leg-indications-gallery"
            />
          </div>
        </div>

        <div className={styles.consultationSection}>
          <h2>Консультація перед пластичною операцією ніг</h2>
          <p>
            Індивідуальна консультація – крок до змін та перший етап планування
            оперативного втручання! На першій консультації з пластичним хірургом
            у клініці Vidnova у Львові ви зможете визначити, яка корекція форми
            ніг для вас актуальна, а також обговорити всі нюанси майбутнього
            втручання.
          </p>
          <p>
            Світлана Работенко вже понад 15 років практикує сучасні методи
            пластичної хірургії, допомагаючи пацієнтам здобути впевненість у
            собі! Спеціаліст приймає пацієнтів із Запоріжжя, Дніпра, Києва,
            Харкова, а також з інших міст України.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegPlasticIndications;
