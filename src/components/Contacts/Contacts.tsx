'use client';
import GallerySurgeons from '@/components/GallerySurgeons/GallerySurgeons';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './Contacts.module.css';

interface ContactsProps {
  backgroundColor?: string;
}

export default function Contacts({
  backgroundColor = '#ffffff',
}: ContactsProps) {
  // Масиви зображень для кожної галереї
  const locationImages = [
    '/images/gallerysurgeons/oper24.jpg',
    '/images/location2.jpg',
    '/images/location3.jpg',
  ];
  const transferImages = [
    '/images/gallerysurgeons/oper24.jpg',
    '/images/transfer2.jpg',
    '/images/transfer3.jpg',
  ];
  const operatingRoomImages = [
    '/images/gallerysurgeons/oper24.jpg',
    '/images/operating-room2.jpg',
    '/images/operating-room3.jpg',
  ];
  const wardImages = [
    '/images/gallerysurgeons/oper24.jpg',
    '/images/ward2.jpg',
    '/images/ward3.jpg',
  ];

  return (
    <div className={styles.contactsContainer} style={{ backgroundColor }}>
      <div className={`${styles.contentWrapper} container mx-auto px-4 py-12`}>
        <h1
          className={`${styles.mainTitle} text-4xl font-bold text-center mb-12`}
        >
          Контактна інформація
        </h1>

        {/* Контактна інформація */}
        <div className={`${styles.section} ${styles.twoColumn}`}>
          <div className={styles.leftColumn}>
            <GallerySurgeons images={locationImages} galleryId="location" />
          </div>
          <div className={`${styles.rightColumn} ${styles.contactDetails}`}>
            <h2 className="text-3xl font-bold">Чернівці</h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                м. Чернівці, вул. Героїв Майдану 226, (вхід з вул.Рівенська)
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+380962140333" className="hover:underline">
                  +38 (096)-214-03-33
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:Pecheryag@gmail.com"
                  className="hover:underline"
                >
                  Pecheryag@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Безкоштовний трансфер */}
        <div className={`${styles.section} ${styles.twoColumn}`}>
          <div className={styles.leftColumn}>
            <h2 className="text-3xl font-bold mb-4">Безкоштовний трансфер</h2>
            <p className="text-lg">
              Ви живете в іншому місті, але хочете потрапити на консультацію чи
              операцію? Скористайтеся послугою трансферу до клініки. Ми будемо
              раді вас бачити!
            </p>
          </div>
          <div className={styles.rightColumn}>
            <GallerySurgeons images={transferImages} galleryId="transfer" />
          </div>
        </div>

        {/* Сучасна обладнана операційна */}
        <div className={`${styles.section} ${styles.twoColumn}`}>
          <div className={styles.leftColumn}>
            <GallerySurgeons
              images={operatingRoomImages}
              galleryId="operating-room"
            />
          </div>
          <div className={styles.rightColumn}>
            <h2 className="text-3xl font-bold mb-4">
              Сучасна обладнана операційна
            </h2>
            <p className="mb-4">
              Для вдалої операції потрібні не тільки високі навички пластичного
              хірурга, злагоджена медична команда, а й операційна кімната, яка
              буде оснащена найсучаснішою медичною технікою:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Наркозно-дихальний апарат Leon plus з можливістю вентиляції з
                повторним використанням повітря на рівні реанімаційного апарату
                ШВЛ
              </li>
              <li>Бактерицидний опромінювач BactoSfera</li>
              <li>Операційна галогенова лампа Maquet Hanaulux</li>
            </ul>
          </div>
        </div>

        {/* Затишна палата */}
        <div className={`${styles.section} ${styles.twoColumn}`}>
          <div className={styles.leftColumn}>
            <h2 className="text-3xl font-bold mb-4">Затишна палата</h2>
            <p className="mb-4">
              Ми знаємо, що приїхавши до клініки, хочеться почувати себе як
              вдома. Саме тому для наших пацієнток ми підготували палати із
              затишним інтерєром, де можна відпочити після операції.
            </p>
            <p>
              У Vidnova Clinic ви відчуєте зручність та комфорт, а приємний
              медичний персонал і затишна атмосфера додадуть вам приємного
              настрою після хірургічного втручання.
            </p>
          </div>
          <div className={styles.rightColumn}>
            <GallerySurgeons images={wardImages} galleryId="ward" />
          </div>
        </div>

        {/* Карта */}
        <div
          className={`${styles.mapContainer} w-full h-[400px] rounded-lg overflow-hidden mt-12`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.7758533494897!2d25.935555776332074!3d48.29229047125136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734087fe2f6cd77%3A0xd54ff9c8e96b6dba!2z0LLRg9C70LjRhtGPINCT0LXRgNC-0ZfQsiDQnNCw0LnQtNCw0L3RgywgMjI2LCDQp9C10YDQvdGW0LLRhtGWLCDQp9C10YDQvdGW0LLQtdGG0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA1ODAwMA!5e0!3m2!1suk!2sua!4v1709913049407!5m2!1suk!2sua"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
