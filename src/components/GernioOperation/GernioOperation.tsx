'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './GernioOperation.module.css';

interface GernioOperationProps {
  backgroundColor?: string;
}

const GernioOperation: React.FC<GernioOperationProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const [isFirstTextExpanded, setIsFirstTextExpanded] = useState(false);
  const [isSecondTextExpanded, setIsSecondTextExpanded] = useState(false);

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  const firstText =
    "Герніопластика - це єдиний ефективний способом лікування грижі з застосуванням оперативного втручання. Враховуючи вид грижі та стан пацієнта, лікар обирає оптимальний спосіб оперативного лікування гриж живота. Ми проводимо операції на сучасному обладнанні, з використанням новітніх технологій та високоякісних аллогенних матеріалів. Стінка черевної порожнини, де розміщуються черевні органи, утворені м'язево-апоневротичними шаром, який є досить щільний, однак має також і слабкі місця. Через розширення цих слабких місць (пупкове кільце, пахові ділянки та розтягнутої білої лінії живота), а також через старі післяопераційні рубці і випинаються внутрішні органи при підвищенні внутрішньочегового тиску. Якщо орган, (частіше всього це кишкивник чи чепець) який випинається через грижеві ворота защемиться, то тоді виникає дуже небезпечне для життя ускладнення - защемлена грижа. Це ускладнення може привести до смертельної для хворого ситуації. Єдиною допомогою хворому в цій ситуації є невідкладне оперативне лікування.";

  const secondText =
    'Діастаз прямих мязів живота це розтягненнгя білої лінії живота, яке клінічно проявляється випинанням по серединній лінії живота вище пупка при напруженні черевного преса. Цей стан має декілька чинників які приводять до йогоу творення. І частіше, це поєднання їх. До таких чинників відносяться, це слабкість тканини самого апоневрозу та черезмірне, по часу, перенапруження черевного пресу. Ожиріння також сприяє розтягненню апоневрозу білої лінії живота. Клінічно, кроме появи випинання в ділянці білої лінії живота, часто буває біль. І практично цей стан є передвісником утворення гриж цієї ділянки і утворенню пупкових гриж.Єдиним методом лікуванню цього стану є оперативне. Методів оперативного лікування є декілька. Пацієнт звертається до хірурга і хірург визначає метод, який підходить для хворого';

  return (
    <div className={styles.gernioOperation} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Операція при грижах (gerniotomiya)</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <ul className={styles.operationsList}>
              <li>
                Лапароскопічна герніопластика із застосуванням сітчастого
                імплантанта
              </li>
              <li>
                Герніопластика місцевим доступом із застосуванням сітчастого
                імплантанта
              </li>
              <li>Усунення діастазу прямих мязів живота</li>
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="gernio-gallery-1"
            />
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.expandableText}>
              <p>
                {isFirstTextExpanded
                  ? firstText
                  : `${firstText.slice(0, 100)}...`}
              </p>
              <button
                className={styles.expandButton}
                onClick={() => setIsFirstTextExpanded(!isFirstTextExpanded)}
              >
                {isFirstTextExpanded ? 'Показати менше' : 'Показати більше'}
                <ChevronDown
                  className={`${styles.arrow} ${isFirstTextExpanded ? styles.rotated : ''}`}
                />
              </button>
            </div>
            <div className={styles.expandableText}>
              <p>
                {isSecondTextExpanded
                  ? secondText
                  : `${secondText.slice(0, 100)}...`}
              </p>
              <button
                className={styles.expandButton}
                onClick={() => setIsSecondTextExpanded(!isSecondTextExpanded)}
              >
                {isSecondTextExpanded ? 'Показати менше' : 'Показати більше'}
                <ChevronDown
                  className={`${styles.arrow} ${isSecondTextExpanded ? styles.rotated : ''}`}
                />
              </button>
            </div>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="gernio-gallery-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GernioOperation;
