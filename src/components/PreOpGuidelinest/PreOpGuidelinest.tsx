'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './PreOpGuidelinest.module.css';
import type React from 'react';

interface PreOpGuidelinestProps {
  backgroundColor?: string;
}

const PreOpGuidelinest: React.FC<PreOpGuidelinestProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  // Окремі масиви зображень для кожної галереї
  const prepGallery1Images = [
    '/images/prep/prep1.jpg',
    '/images/prep/prep2.jpg',
    '/images/prep/prep3.jpg',
    '/images/prep/prep4.jpg',
  ];

  const consultationGalleryImages = [
    '/images/consultation/consult1.jpg',
    '/images/consultation/consult2.jpg',
    '/images/consultation/consult3.jpg',
    '/images/consultation/consult4.jpg',
  ];

  const questionsGalleryImages = [
    '/images/questions/question1.jpg',
    '/images/questions/question2.jpg',
    '/images/questions/question3.jpg',
    '/images/questions/question4.jpg',
  ];

  const analysisGalleryImages = [
    '/images/analysis/analysis1.jpg',
    '/images/analysis/analysis2.jpg',
    '/images/analysis/analysis3.jpg',
    '/images/analysis/analysis4.jpg',
  ];

  const preparationGalleryImages = [
    '/images/preparation/preparation1.jpg',
    '/images/preparation/preparation2.jpg',
    '/images/preparation/preparation3.jpg',
    '/images/preparation/preparation4.jpg',
  ];

  const beforeSurgeryGalleryImages = [
    '/images/before-surgery/before1.jpg',
    '/images/before-surgery/before2.jpg',
    '/images/before-surgery/before3.jpg',
    '/images/before-surgery/before4.jpg',
  ];

  const surgeryDayGalleryImages = [
    '/images/surgery-day/day1.jpg',
    '/images/surgery-day/day2.jpg',
    '/images/surgery-day/day3.jpg',
    '/images/surgery-day/day4.jpg',
  ];

  const thingsToTakeGalleryImages = [
    '/images/things-to-take/things1.jpg',
    '/images/things-to-take/things2.jpg',
    '/images/things-to-take/things3.jpg',
    '/images/things-to-take/things4.jpg',
  ];

  const finalGalleryImages = [
    '/images/final/final1.jpg',
    '/images/final/final2.jpg',
    '/images/final/final3.jpg',
    '/images/final/final4.jpg',
  ];

  // Якщо зображення ще не доступні, можна використовувати плейсхолдери
  const getPlaceholders = (count = 4) => {
    return Array(count)
      .fill(0)
      .map(
        (_, i) => `/placeholder.svg?height=300&width=300&text=Image${i + 1}`
      );
  };

  return (
    <div className={styles.preOpGuidelinest} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>
          Як підготуватись до пластичної операції?
        </h1>

        <p className={styles.fullWidthText}>
          Підготовка до пластичної операції – важливий етап на шляху до
          омріяного тіла, ідеальних форм та відновлення краси й молодості
          обличчя.
        </p>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <p>
              Такий досконалий результат можна отримати, якщо ретельно
              підготуватись. Адже будь-яке хірургічне втручання – це стрес для
              організму, тому важливо зменшити ризики. Саме тому перед
              операцією, корисно отримати максимально можливу кількість
              інформації під час консультацій з фахівцями клініки.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                prepGallery1Images.length
                  ? prepGallery1Images
                  : getPlaceholders()
              }
              galleryId="prep-gallery-1"
            />
          </div>
        </div>

        <p className={styles.fullWidthText}>
          Консультація з пластичним хірургом – це можливість дізнатися більше
          про процес, зрозуміти, як і чим вам можуть допомогти, і визначити, чи
          є пластична операція ефективним варіантом для вас.
        </p>

        <h2 className={styles.sectionTitle}>
          Консультація з пластичним хірургом
        </h2>

        <p className={styles.fullWidthText}>
          У Vidnova Clinic також активно практикують відеоконсультації. Цією
          опцією часто користуються пацієнти з-за кордону. Проте зустріч з
          лікарем віч-на-віч особливо важлива, бо саме на очній консультації
          формується враження про лікаря, налагоджується контакт з пластичним
          хірургом.
        </p>

        <p className={styles.fullWidthText}>
          На первинній консультації лікар детальне розгляне ваш анамнез,
          включаючи інформацію про будь-які хронічні захворювання, алергії та
          попередні оперативні втручання. Ви також обговорите очікування від
          пластичної операції. Це важливий момент, щоб лікар міг зрозуміти, як
          вам допомогти досягти бажаного результату і при цьому зберегти
          естетику та гармонію.
        </p>

        <p className={styles.fullWidthText}>
          На консультації лікар ретельно огляне ту ділянку тіла, яку ви хочете
          змінити або покращити. Для цього лікар зробить ряд фотознімків, щоб
          надалі з допомогою технології 3D змоделювати результат.
        </p>

        <p className={styles.fullWidthText}>
          Ви отримаєте повну інформацію про те, як буде проведена операція, які
          техніки та методики буде застосовувати лікар та наскільки тривалим
          буде період відновлення.
        </p>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <p>
              Вам можуть бути запропоновані різні варіанти лікування і лікар
              розгляне їх із вами, допомагаючи вибрати оптимальний варіант.
            </p>
            <p>
              Важлива частина консультації – це можливість задати всі свої
              питання та обговорити можливі сумніви чи страхи, що можуть
              виникнути. Будьте відверті та чесні з пластичним хірургом. Не
              соромтесь запитувати все, що вас хвилює. Якщо є сумніви,
              невпевненість у потребі пластичної операції, лікар може
              порекомендувати певний час почекати, щоб визначитись остаточно,
              адже ваше рішення має бути усвідомленим, зваженим та обдуманим.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                consultationGalleryImages.length
                  ? consultationGalleryImages
                  : getPlaceholders()
              }
              galleryId="consultation-gallery"
            />
          </div>
        </div>

        <p className={styles.fullWidthText}>
          До речі, у клініці Vidnova кожному пацієнту призначається медичний
          куратор, який буде комунікувати з пацієнтом до та після проведення
          операції, допоможе з вирішенням усіх організаційних питань.
        </p>

        <h2 className={styles.sectionTitle}>
          Запитання, які варто задати пластичному хірургу на консультації?
        </h2>

        <p className={styles.fullWidthText}>
          На консультації ви можете запитати лікаря про все, що вас хвилює.
          Показання до операції, терміни реабілітації, вартість операції та всі
          інші організаційні питання. Всі ці запитання можна і треба задавати
          лікарю.
        </p>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <ul className={styles.arrowList}>
              <li>
                <ChevronRight size={20} />
                Який результат у вашому випадку бачить лікар?
              </li>
              <li>
                <ChevronRight size={20} />
                Які протипоказання до операції та ризики?
              </li>
              <li>
                <ChevronRight size={20} />
                Які гарантії дає клініка при ймовірних ускладненнях?
              </li>
              <li>
                <ChevronRight size={20} />
                Чи можна в клініці здати аналізи та пройти обстеження перед
                операцією?
              </li>
              <li>
                <ChevronRight size={20} />
                Як підготуватися до пластичної операції?
              </li>
              <li>
                <ChevronRight size={20} />
                Який буде наркоз?
              </li>
              <li>
                <ChevronRight size={20} />
                Чи є в клініці цілодобовий звязок із хірургом та медперсоналом?
              </li>
              <li>
                <ChevronRight size={20} />
                Скільки часу займе період відновлення?
              </li>
              <li>
                <ChevronRight size={20} />
                Чи потрібно приїжджати на планові огляди і коли?
              </li>
              <li>
                <ChevronRight size={20} />
                Як юридично оформляються відносини сторін?
              </li>
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                questionsGalleryImages.length
                  ? questionsGalleryImages
                  : getPlaceholders()
              }
              galleryId="questions-gallery"
            />
          </div>
        </div>

        <h2 className={styles.sectionTitle}>Аналізи та обстеження</h2>

        <p className={styles.fullWidthText}>
          Напередодні операції, але не менше ніж за 10-14 днів до оперативного
          втручання, пацієнту треба пройти лабораторні та діагностичні
          дослідження, щоб виключити усі можливі протипоказання.
        </p>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <ul className={styles.arrowList}>
              <li>
                <ChevronRight size={20} />
                повний – для тих, кого оперуватимуть під загальним наркозом. У
                випадку більш складних та багатоетапних втручань, може
                знадобитись додатково УЗД молочних залоз.
              </li>
              <li>
                <ChevronRight size={20} />
                скорочений – для оперативних втручань під місцевою анестезією.
              </li>
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                analysisGalleryImages.length
                  ? analysisGalleryImages
                  : getPlaceholders()
              }
              galleryId="analysis-gallery"
            />
          </div>
        </div>

        <p className={styles.fullWidthText}>
          Якщо у пацієнта постковідний синдром та було серйозне ураження легень,
          може знадобитися додатковий пакет аналізів та обстеження. А у випадку
          хронічних захворювань остаточне рішення приймуть спільно з лікуючим
          лікарем.
        </p>

        <p className={styles.fullWidthText}>
          У разі виявлення серйозних протипоказань лікар може відмовити пацієнту
          в проведенні пластичної операції. Адже здоровя пацієнта – найвищий
          пріоритет клініки Vidnova.
        </p>

        <h2 className={styles.sectionTitle}>Самостійна підготовка пацієнта</h2>

        <p className={styles.fullWidthText}>
          За два тижні до оперативного втручання варто підготувати свій організм
          та тіло. Варто звернути увагу на такі моменти:
        </p>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <ul className={styles.arrowList}>
              <li>
                <ChevronRight size={20} />
                Вітаміни. За потреби лікар призначить прийом вітамінів та
                мікроелементів для зміцнення імунітету.
              </li>
              <li>
                <ChevronRight size={20} />
                Куріння та алкоголь. Будь-яке куріння впливає на систему
                згортання крові, тому за два тижні до операції варто відмовитись
                від цигарок. Алкоголь підвищує тиск, розширює судини та
                перешкоджає дії анестезії. Тож його прийом також варто виключити
                мінімум за 5 днів до операції.
              </li>
              <li>
                <ChevronRight size={20} />
                Медичні протизапальні препарати, БАДи, Омега 3. Їх варто
                припинити мінімум за 3 дні до операції.
              </li>
              <li>
                <ChevronRight size={20} />
                Збалансоване харчування. Лікарі рекомендують особливу увагу
                звернути на вміст солі, її кількість треба буде суттєво
                зменшити, щоб надалі уникнути набряків після операції.
              </li>
              <li>
                <ChevronRight size={20} />
                Засмага. За два тижні до операції не варто засмагати і за два
                тижні після оперативного втручання також варто утриматись від
                сонячного впливу.
              </li>
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                preparationGalleryImages.length
                  ? preparationGalleryImages
                  : getPlaceholders()
              }
              galleryId="preparation-gallery"
            />
          </div>
        </div>

        <p className={styles.fullWidthText}>
          Перед проведення планової операції, лікарі можуть порекомендувати
          нормалізувати вагу. Проте не варто одразу сідати на жорсткі дієти, а
          вдались до більш делікатних методів.
        </p>

        <p className={styles.fullWidthText}>
          Для лікарів нова вага пацієнта стане відправною точкою, тим полотном,
          на якому пластичний хірург зможе художньо створити досконалий
          результат.
        </p>

        <p className={styles.fullWidthText}>
          Якщо ви будете дотримуватись вищенаведених рекомендацій, цим ви
          допоможете лікарю, медичному персоналу клініки та насамперед собі, бо
          вам буде значно легше та простіше після анестезії повертатись до
          звичного ритму життя.
        </p>

        <h2 className={styles.sectionTitle}>Напередодні операції</h2>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <p>
              Рекомендують за 6 годин до операції не їсти, щоб шлунок не був
              обтяжений додатковими процесами травлення та переробки їжі.
            </p>
            <p>
              За день до операції краще перейти на легкозасвоювану їжу.
              Відмовтесь від злакових, молочних продуктів, фруктів. Вечерю
              заплануйте не пізніше 19-00.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                beforeSurgeryGalleryImages.length
                  ? beforeSurgeryGalleryImages
                  : getPlaceholders()
              }
              galleryId="before-surgery-gallery"
            />
          </div>
        </div>

        <h2 className={styles.sectionTitle}>День операції в клініці</h2>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <p>
              Якщо вас очікує операція під місцевою анестезією, дозволяється
              легкий сніданок або солодкий чай. Якщо напередодні операції ви
              почали погано себе почувати, повідомте завчасно лікаря.
            </p>
            <p>
              У день оперативного втручання шлунок повинен бути порожнім, тож не
              варто пити ні кави, ні води. Ця вимога стосується оперативних
              втручань під загальним наркозом.
            </p>
            <p>
              Операції зазвичай призначають на ранкові години. Тому старайтесь
              не спізнюватись, завчасно зберіть усі необхідні документи,
              аналізи, потрібні вам речі ще звечора. Зайвий стрес та метушня
              перед важливою операцією вам точно не потрібні. На операцію треба
              прийти у доброму самопочутті та хорошому настрої.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                surgeryDayGalleryImages.length
                  ? surgeryDayGalleryImages
                  : getPlaceholders()
              }
              galleryId="surgery-day-gallery"
            />
          </div>
        </div>

        <h2 className={styles.sectionTitle}>Що взяти з собою на операцію?</h2>
        <h4 className={styles.subsectionTitle}>
          Перед та після операцією вам може знадобитись:
        </h4>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <ul className={styles.arrowList}>
              <li>
                <ChevronRight size={20} />
                документи, аналізи
              </li>
              <li>
                <ChevronRight size={20} />
                зручний, змінний одяг
              </li>
              <li>
                <ChevronRight size={20} />
                змінна білизна
              </li>
              <li>
                <ChevronRight size={20} />
                предмети гігієни
              </li>
              <li>
                <ChevronRight size={20} />
                смартфон, планшет, книги, журнали
              </li>
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                thingsToTakeGalleryImages.length
                  ? thingsToTakeGalleryImages
                  : getPlaceholders()
              }
              galleryId="things-to-take-gallery"
            />
          </div>
        </div>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <p>
              Після проведення операції під загальним наркозом пацієнти впродовж
              дня залишаються у комфортному стаціонарі під цілодобовим наглядом
              медичного персоналу.
            </p>
            <p>
              Палати клініки Vidnova обладнані всім необхідним для найшвидшого
              відновлення. У палатах є окремий санвузол, душ, також Wi-Fi. Ми
              також подбали про триразове збалансоване ресторанне харчування
              наших пацієнтів.
            </p>
            <p>
              Забезпечити вдалу операцію – це не лише завдання хірурга, але й
              результат передопераційної підготовки. Будьте в курсі всіх
              аспектів, обговорюйте план з лікарем, і таким чином забезпечте
              собі найкращі умови для безпечного та ефективного втручання.
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={
                finalGalleryImages.length
                  ? finalGalleryImages
                  : getPlaceholders()
              }
              galleryId="final-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOpGuidelinest;
