import type React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './LiposuctionIndications.module.css';

interface LiposuctionIndicationsProps {
  backgroundColor?: string;
}

const LiposuctionIndications: React.FC<LiposuctionIndicationsProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ліпосакція: показання до проведення</h2>
        <h3 className={styles.subtitle}>
          Хірургічне втручання рекомендується у таких випадках:
        </h3>

        <div className={styles.content}>
          <div className={styles.listSection}>
            <ul className={styles.indicationsList}>
              <li>
                <ArrowRight size={16} className={styles.arrowIcon} />
                за наявності «жирових пасток» – локальних жирових скупчень на
                животі, спині (фланках), стегнах, зоні «галіфе», з якими пацієнт
                не може впоратися самостійно (масажем, спортом, дієтами).
                Найчастіше дівчатам після схуднення потрібна ліпосакція стегон,
              </li>
              <li>
                <ArrowRight size={16} className={styles.arrowIcon} />
                коли надлишок жирових відкладень зосереджений у нижній частині
                живота,
              </li>
              <li>
                <ArrowRight size={16} className={styles.arrowIcon} />
                для вирішення таких естетичних проблем, як гінекомастія,
                клімактеричний горб (холка бухгалтера, вдовиний горб).
              </li>
            </ul>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/liposuction/indication1.jpg"
                alt="Ліпосакція показання 1"
                width={300}
                height={200}
                layout="responsive"
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/liposuction/liposuction20.jpg"
                alt="Ліпосакція показання 2"
                width={300}
                height={200}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiposuctionIndications;
