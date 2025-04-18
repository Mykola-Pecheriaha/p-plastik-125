'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './PostOpRooms.module.css';
import type React from 'react';

interface PostOpRoomsProps {
  backgroundColor?: string;
}

const PostOpRooms: React.FC<PostOpRoomsProps> = ({
  backgroundColor = '#22DFE6FF',
}) => {
  // Окремий масив зображень для галереї "welcome-gallery"
  const welcomeGalleryImages = [
    '/images/post-op/welcome1.jpg',
    '/images/post-op/welcome2.jpg',
    '/images/post-op/welcome3.jpg',
    '/images/post-op/welcome4.jpg',
  ];

  // Окремий масив зображень для галереї "features-gallery"
  const featuresGalleryImages = [
    '/images/post-op/features1.jpg',
    '/images/post-op/features2.jpg',
    '/images/post-op/features3.jpg',
    '/images/post-op/features4.jpg',
  ];

  // Функція для створення плейсхолдерів, якщо зображення ще не доступні
  const getPlaceholders = (count = 4) => {
    return Array(count)
      .fill(0)
      .map(
        (_, i) => `/placeholder.svg?height=300&width=300&text=Image${i + 1}`
      );
  };

  const roomFeatures = [
    'В клініці передбачені просторі одномісні та двомісні кімнати з усім необхідним: доступом до Wi-Fi, телевізором, ванною кімнатою.',
    'Палата нагадує комфортний готельний номер з власним санвузлом.',
    'У післяопераційних палатах ми забезпечили цілодобовий нагляд медсестри.',
    'Ми подбали про ваше збалансоване та повноцінне триразове харчування, з урахуванням побажань та дієтичних обмежень.',
    'Зручне ліжко адаптоване для післяопераційного відновлення. Регульована підйомна спинка і ніжки дозволяють знаходити оптимальне положення для відпочинку та відновлення.',
    'Ми також подбали про зручний трансфер. На виході з клініки вас чекатиме пунктуальний водій на комфортному авто бізнес класу.',
  ];

  return (
    <div className={styles.postOpRooms} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Післяопераційні палати у клініці</h1>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <p>
              Відкриваючи двері клініки Vidnova у Львові, ви поринаєте в
              комфортний медичний простір, де Вас завжди раді бачити.
            </p>
            <p>
              На рецепції гостей зустрічають привітні та усміхнені
              адміністратори, які підкажуть, проведуть до кабінету та нададуть
              відповіді на ваші запитання. У клініці Vidnova вам призначать
              особистого медичного куратора, який буде комунікувати з вами
              впродовж всього процесу лікування.
            </p>
            <p>
              Для нас важливо, щоб усі, хто завітав у клініку Vidnova почувались
              як вдома, тому ми створили затишний, стильний інтерєр у світлих
              тонах, підібрали мяке освітлення, наповнили простір красивим
              фірмовим декором та зеленими рослинами.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                welcomeGalleryImages.length
                  ? welcomeGalleryImages
                  : getPlaceholders()
              }
              galleryId="welcome-gallery"
            />
          </div>
        </div>

        <p className={styles.fullWidthText}>
          У клініці Vidnova ми дбаємо про високий рівень медичного сервісу. Тому
          наші післяопераційні палати обладнані за сучасними медичними трендами:
        </p>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <ul className={styles.arrowList}>
              {roomFeatures.map((feature, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                featuresGalleryImages.length
                  ? featuresGalleryImages
                  : getPlaceholders()
              }
              galleryId="features-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostOpRooms;
