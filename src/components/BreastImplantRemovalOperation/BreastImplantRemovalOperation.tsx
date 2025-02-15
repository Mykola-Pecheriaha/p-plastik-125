'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BreastImplantRemovalOperation.module.css';
import type React from 'react';

interface BreastImplantRemovalOperationProps {
  backgroundColor?: string;
}

const BreastImplantRemovalOperation: React.FC<
  BreastImplantRemovalOperationProps
> = ({ backgroundColor = '#f0f4f8' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div
      className={styles.breastImplantRemovalOperation}
      style={{ backgroundColor }}
    >
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Проведення операції</h2>

        <div className={styles.topText}>
          <p>
            Щоб прибрати грудні імпланти, пластичний хірург часто робить розріз
            у субмамарній складці. Якщо було встановлено імплантати великого
            розміру, після їх видалення може залишитися розтягнута шкіра.
            Важливо розуміти, що повернути бюсту початкову форму та розмір буде
            складно.
          </p>
          <p>
            Завдання фахівця – надати тканинам максимально естетичного вигляду.
            Для цього миттєво виконується підтяжка молочної залози.
          </p>
          <p>
            Хірургічне втручання проводиться під загальним наркозом. Для
            пацієнтів клініки використовується сучасний інгаляційний наркоз на
            Севофлурані. Сьогодні це найбільш якісний наркоз, який
            застосовується в європейських клініках. Він забезпечує швидкий вхід
            у глибокий медикаментозний сон та легкий вихід.
          </p>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.textContent}>
            <button
              className={`${styles.expandButton} ${isExpanded ? styles.expanded : ''}`}
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
            >
              <h3 className={styles.expandTitle}>
                Реабілітаційний період після видалення імплантів молочних залоз
              </h3>
              <ChevronDown
                className={`${styles.arrow} ${isExpanded ? styles.rotated : ''}`}
              />
            </button>

            {isExpanded && (
              <div className={styles.expandedContent}>
                <p>
                  Через 1 добу після операції пацієнтка їде додому з
                  рекомендаціями. Накладаються шви, що саморозсмоктуються, які
                  не потрібно знімати.
                </p>
                <p>
                  Період реабілітації після повторного хірургічного втручання
                  значно легший! Перші кілька днів спостерігаються набряклість,
                  присутні синці. Всі дискомфортні відчуття легко купуються
                  знеболюючими.
                </p>
                <p>
                  Післяопераційний період передбачає носіння спеціальної щільної
                  білизни. Оцінити отриманий результат можна за 1 місяць.
                </p>
                <p>
                  Повернутися до активного способу життя – занять спортом,
                  відвідування саун, лазень, басейнів рекомендується через 2
                  місяці.
                </p>
              </div>
            )}
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="implant-removal-operation-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastImplantRemovalOperation;
