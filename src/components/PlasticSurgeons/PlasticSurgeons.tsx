import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GallerySurgeons from '../GallerySurgeons/GallerySurgeons';
import styles from './PlasticSurgeons.module.css';

const PlasticSurgeons: React.FC = () => {
  return (
    <div className={styles.plasticSurgeons}>
      {/* Заголовок */}
      <div>
        <h2 className={styles.plasticSurgeonsTitle}>Пластичні хірурги</h2>
      </div>

      {/* Контейнер для галереї та тексту */}
      <div className={styles.containerplasticSurgeons}>
        {/* Галерея зліва */}
        <div className={styles.plasticSurgeonsImage}>
          <GallerySurgeons />
        </div>

        {/* Текстовий блок справа */}
        <div className={styles.plasticSurgeonsText}>
          <h1>Печеряга Микола Миколайович</h1>
          <div className={styles.subTitle}>
            <div className={styles.subTitleTopp}>
              <div className={styles.subTitleToppText}>
                <p>Член Європейської асоціації пластичних хірургів</p>
              </div>

              <div className={styles.subTitleToppImage}>
                <Image
                  src="/images/bodi/conturBoda1-removebg-preview.png"
                  alt="Bodi"
                  width={250}
                  height={330}
                  priority={true}
                />
              </div>
            </div>

            <p>
              Я пластичний хірург з досвідом 25 років. Навчався у найкращих
              пластичних хірургів світу та виконую всі види пластичних операцій
              . Уже більше ніж 2600 пацієнтів з різних країн довірили мені свою
              красу. Ми різні, а значить хтось бажає зменшити обєми, а хтось
              навпаки збільшити їх — кожна жінка мріє про самобутню красу.
              Прямий маленький носик, гладенька підтягнута шкіра, привабливі
              пружні дівочі груди, струнка талія, відкритий погляд, маленька
              мочка вуха. Від цих деталей залежить самопочуття, гарний настрій,
              а іноді й щаслива доля! Ми з командою втілюємо бажання жінок та
              створюємо досконалу красу, зберігаючи індивідуальність. Відгуки
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
  );
};

export default PlasticSurgeons;
