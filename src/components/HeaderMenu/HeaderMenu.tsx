'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeaderMenu.module.css';

const HeaderMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubMenuToggle = (menuName: string | null) => {
    setActiveSubMenu(menuName);
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image
            src="/images/logo/logo2.png"
            alt="Logo"
            width={50}
            height={50}
            className={styles.logoImage}
          />
          <strong>PlastikP</strong>
        </div>
        <div className={styles.headerRight}>
          <nav className={styles.nav}>
            <Link href="/">Головна</Link>

            <div
              className={styles.menuItem}
              onMouseEnter={() => handleSubMenuToggle('results')}
              onMouseLeave={() => handleSubMenuToggle(null)}
            >
              <Link href="/results">Результати ↓ </Link>
              {activeSubMenu === 'results' && (
                <div className={styles.subMenu}>
                  <div className={styles.subMenuSection}>
                    <div className={styles.subMenuColumn}>
                      <Link href="/results/face-plastic">Пластика обличчя</Link>
                      <Link href="/results/otto-plastic">
                        Пластика вушних раковин
                      </Link>
                    </div>
                  </div>
                  <div className={styles.subMenuSection}>
                    <div className={styles.subMenuColumn}>
                      <Link href="/results/breast-plastic">
                        Пластика грудей
                      </Link>
                    </div>
                  </div>
                  <div className={styles.subMenuSection}>
                    <div className={styles.subMenuColumn}>
                      <Link href="/results/bodi-plastic">Пластика тіла</Link>
                      <Link href="/results/tumors-skin">Пухлини шкіри</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className={styles.menuItem}
              onMouseEnter={() => handleSubMenuToggle('services')}
              onMouseLeave={() => handleSubMenuToggle(null)}
            >
              <Link href="/services">Послуги ↓</Link>
              {activeSubMenu === 'services' && (
                <div className={styles.subMenu}>
                  <div className={styles.subMenuSection}>
                    <p>Пластика обличчя</p>
                    <div className={styles.subMenuColumn}>
                      <Link href="/services/face-lift">
                        Підтяжка обличчя та шиї
                      </Link>
                      <Link href="/services/blefaro-plastic">
                        Блефаропластика
                      </Link>
                      <Link href="/services/chino-plasty">
                        Пластика підборіддя
                      </Link>
                      <Link href="/services/flap-correction">
                        Корекція клаповухості
                      </Link>
                      <Link href="/services/lapp-otto">
                        Пластика дольки вуха
                      </Link>
                    </div>
                  </div>
                  <div className={styles.subMenuSection}>
                    <p>Пластика грудей</p>
                    <div className={styles.subMenuColumn}>
                      <Link href="/services/breast-augmentation">
                        Збільшення грудей
                      </Link>
                      <Link href="/services/breast-reduction">
                        Зменшення грудей
                      </Link>
                      <Link href="/services/breast-lift">Підтяжка грудей</Link>
                      <Link href="/services/areola-correction">
                        Корекція соска та ареоли
                      </Link>
                      <Link href="/services/breast-asymmetry-correction">
                        Корекція асиметрії грудей
                      </Link>
                    </div>
                  </div>
                  <div className={styles.subMenuSection}>
                    <p>Пластика тіла</p>
                    <div className={styles.subMenuColumn}>
                      <Link href="/services/abdominoplasty">
                        Абдомінопластика
                      </Link>
                      <Link href="/services/liposuction">Ліпосакція</Link>
                      <Link href="/services/leg-plastic">Пластика ніг</Link>
                      <Link href="/services/cervical-hump">
                        Видалення шийного горба
                      </Link>
                      <Link href="/services/buttock-augmentation">
                        Збільшення сідниць
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className={styles.menuItem}
              onMouseEnter={() => handleSubMenuToggle('aboutDoctor')}
              onMouseLeave={() => handleSubMenuToggle(null)}
            >
              <Link href="/aboutDoctor">Про лікаря ↓</Link>
              {activeSubMenu === 'aboutDoctor' && (
                <div className={styles.subMenu}>
                  <Link href="/aboutDoctor/team">Команда</Link>
                  <Link href="/aboutDoctor/reviews">Відгуки</Link>
                  <Link href="/aboutDoctor/askDoctor">Запитати лікаря</Link>
                  <Link href="/aboutDoctor/usefulInformation">
                    Корисна інформація
                  </Link>
                  <Link href="/aboutDoctor/brieflyAbout">Коротко про нас</Link>
                  <Link href="/aboutDoctor/Contacts">Контакти</Link>
                </div>
              )}
            </div>

            <div
              className={styles.menuItem}
              onMouseEnter={() => handleSubMenuToggle('operating')}
              onMouseLeave={() => handleSubMenuToggle(null)}
            >
              <Link href="/operating">Відділення ↓</Link>
              {activeSubMenu === 'operating' && (
                <div className={styles.subMenu}>
                  <Link href="/operating/operatingRoom">Операційна</Link>
                  <Link href="/operating/reviews">Підготовка до операції</Link>
                  <Link href="/operating/preparation">Операційні моменти</Link>
                  <Link href="/operating/postoperative">
                    Післяопераційні моменти
                  </Link>
                  <Link href="/operating/rehabilitation">Реабілітація</Link>
                </div>
              )}
            </div>
          </nav>

          <div className={styles.burger} onClick={toggleMenu}>
            ☰ Menu
          </div>

          {isMenuOpen && (
            <div className={styles.burgerMenu}>
              <Link href="/" onClick={toggleMenu}>
                Головна
              </Link>
              <Link href="/results" onClick={toggleMenu}>
                Результати
              </Link>
              <Link href="/services" onClick={toggleMenu}>
                Послуги
              </Link>
              <Link href="/aboutDoctor" onClick={toggleMenu}>
                Про лікаря
              </Link>
              <Link href="/operating/" onClick={toggleMenu}>
                Відділення
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
