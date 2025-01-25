import type React from 'react';
import Image from 'next/image';
import styles from './MykolaSurgeon.module.css';

const MykolaSurgeon: React.FC = () => {
  return (
    <div className={styles.mykolaSurgeon}>
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.topContent}>
            <div className={styles.topText}>
              <h2 className={styles.title}>Про лікаря</h2>
              <p className={styles.description}>
                Вибір пластичного хірурга – важливе та складне питання. Кожному
                пацієнту хочеться більше дізнатися про спеціаліста, якому він чи
                вона довіряє своє життя та красу. Тому хочу поділитися з вами,
                яким був мій шлях до пластичної хірургії, де я навчалась та
                удосконалювала свої вміння та навички, аби сьогодні дарувати
                моїм пацієнткам здійснення їхньої мрії.
              </p>
            </div>
            <div className={styles.topImage}>
              <Image
                src="/images/doctor/chirurg10-removebg-preview.png"
                alt="Доктор Микола"
                width={400}
                height={500}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <div className={styles.bottomImage}>
              <Image
                src="/images/logo/logo5-removebg-preview2.png"
                alt="Доктор Микола в операційній"
                width={400}
                height={500}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className={styles.bottomText}>
              <h3 className={styles.subtitle}>Мій досвід</h3>
              <p className={styles.description}>
                За роки практики я провів тисячі успішних операцій, постійно
                вдосконалюючи свої навички та впроваджуючи найновіші технології
                в області пластичної хірургії. Моя мета - не просто змінити
                зовнішність, а допомогти кожному пацієнту відчути себе
                впевненіше та комфортніше у власному тілі.
              </p>
              <p className={styles.description}>
                Я вірю, що кожна людина унікальна, і тому підхід до кожного
                пацієнта повинен бути індивідуальним. У своїй роботі я завжди
                прагну досягти найкращого результату, враховуючи побажання та
                особливості кожного пацієнта.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MykolaSurgeon;
