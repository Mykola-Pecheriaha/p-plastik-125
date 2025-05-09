'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import styles from './HeaderMenu.module.css';
import ConsultationButton from '../ConsultationButton/ConsultationButton';

const HeaderMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSubMenuToggle = (menuName: string | null) => {
    setActiveSubMenu(menuName);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setActiveSubMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setActiveSubMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.paddingTop = '80px';
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image
            src="/images/logo/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className={styles.logoImage}
          />
          <strong>PlastikP</strong>
        </div>
        <div className={styles.headerRight} ref={menuRef}>
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
                      <Link href="/results/breast-plastic">
                        Пластика грудей
                      </Link>
                      <Link href="/results/body-plastic">Пластика тіла</Link>
                      <Link href="/results/tumors-skin">Пухлини шкіри</Link>
                      <Link href="/albums/">Альбоми</Link>
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
                      <Link href="/services/face-surgery/face-lift">
                        Підтяжка обличчя та шиї
                      </Link>
                      <Link href="/services/face-surgery/blefaro-plastic">
                        Блефаропластика
                      </Link>
                      <Link href="/services/face-surgery/chino-plasty">
                        Пластика підборіддя
                      </Link>
                      <Link href="/services/face-surgery/flap-correction">
                        Корекція клаповухості
                      </Link>
                      <Link href="/services/face-surgery/flap-correction">
                        Пластика дольки вуха
                      </Link>
                    </div>
                  </div>
                  <div className={styles.subMenuSection}>
                    <p>Пластика грудей</p>
                    <div className={styles.subMenuColumn}>
                      <Link href="/services/breast-surgery/breast-augmentation">
                        Збільшення грудей
                      </Link>
                      <Link href="/services/breast-surgery/breast-implant-removal">
                        Видалення імплантів
                      </Link>
                      <Link href="/services/breast-surgery/breast-lift">
                        Підтяжка грудей
                      </Link>
                      <Link href="/services/breast-surgery/areola-correction">
                        Корекція соска та ареоли
                      </Link>
                      <Link href="/services/breast-surgery/breast-implant-replacement-Page">
                        заміна імплантів груді з корекцією форми
                      </Link>
                      <Link href="/services/breast-surgery/ginecomastiya">
                        Гінекомастія
                      </Link>
                    </div>
                  </div>
                  <div className={styles.subMenuSection}>
                    <p>Пластика тіла</p>
                    <div className={styles.subMenuColumn}>
                      <Link href="/services/body-surgery/abdominoplasty">
                        Абдомінопластика
                      </Link>
                      <Link href="/services/body-surgery/liposuction">
                        Ліпосакція
                      </Link>
                      <Link href="/services/body-surgery/leg-plastic">
                        Пластика ніг
                      </Link>
                      <Link href="/services/body-surgery/liposuction">
                        Видалення шийного горба
                      </Link>
                      <Link href="/services/body-surgery/buttock-augmentation">
                        Збільшення сідниць
                      </Link>
                    </div>
                  </div>

                  <div className={styles.subMenuSection}>
                    <p>Загальна хірургія</p>
                    <div className={styles.subMenuColumn}>
                      <Link href="/services/general-surgery/tumor-removal">
                        Видалення пухлин
                      </Link>
                      <Link href="/services/general-surgery/carpal-tunnel">
                        Карпальний канал
                      </Link>
                      <Link href="/services/general-surgery/gerniotomiya">
                        Видалення гриж
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className={styles.menuItem}
              onMouseEnter={() => handleSubMenuToggle('about-doctor')}
              onMouseLeave={() => handleSubMenuToggle(null)}
            >
              <Link href="/about-doctor">Про лікаря ↓</Link>
              {activeSubMenu === 'about-doctor' && (
                <div className={`${styles.subMenu} ${styles.columnSubMenu}`}>
                  <Link href="/about-doctor/team">Команда</Link>
                  <Link href="/about-doctor/portfolio-pecheriaha">
                    Портфоліо-Печеряга
                  </Link>

                  <Link href="/about-doctor/reviews">Відгуки</Link>
                  <Link href="/about-doctor/ask-doctor">Запитати лікаря</Link>
                  <Link href="/about-doctor/useful-information">
                    Корисна інформація
                  </Link>
                  <Link href="/about-doctor/about-us">Коротко про нас</Link>
                  <Link href="/about-doctor/contacts">Контакти</Link>
                </div>
              )}
            </div>

            <div
              className={styles.menuItem}
              onMouseEnter={() => handleSubMenuToggle('operative')}
              onMouseLeave={() => handleSubMenuToggle(null)}
            >
              <Link href="/operative">Відділення ↓</Link>
              {activeSubMenu === 'operative' && (
                <div className={`${styles.subMenu} ${styles.columnSubMenu}`}>
                  <Link href="/operative/operative-room">Операційна</Link>
                  <Link href="/operative/preparation-surgery">
                    Підготовка до операції
                  </Link>
                  {/* <Link href="/operative/preparation">Операційні моменти</Link> */}
                  <Link href="/operative/postoperative-moments">
                    Післяопераційні моменти
                  </Link>
                  <Link href="/operative/rehabilitation">Реабілітація</Link>
                </div>
              )}
            </div>
          </nav>

          <div className={styles.consultationButtonWrapper}>
            <ConsultationButton />
          </div>

          <div className={styles.burger} onClick={toggleMenu}>
            ☰ Menu
          </div>

          {isMenuOpen && (
            <div className={styles.burgerMenu}>
              <Link href="/" onClick={handleMenuItemClick}>
                Головна
              </Link>
              <div className={styles.burgerMenuItem}>
                <span onClick={() => handleSubMenuToggle('results')}>
                  Результати ↓
                </span>
                {activeSubMenu === 'results' && (
                  <div className={styles.burgerSubMenu}>
                    <Link
                      href="/results/face-plastic"
                      onClick={handleMenuItemClick}
                    >
                      Пластика обличчя
                    </Link>
                    <Link
                      href="/results/otto-plastic"
                      onClick={handleMenuItemClick}
                    >
                      Пластика вушних раковин
                    </Link>
                    <Link
                      href="/results/breast-plastic"
                      onClick={handleMenuItemClick}
                    >
                      Пластика грудей
                    </Link>
                    <Link
                      href="/results/bodi-plastic"
                      onClick={handleMenuItemClick}
                    >
                      Пластика тіла
                    </Link>
                    <Link
                      href="/results/tumors-skin"
                      onClick={handleMenuItemClick}
                    >
                      Пухлини шкіри
                    </Link>
                  </div>
                )}
              </div>
              <div className={styles.burgerMenuItem}>
                <span onClick={() => handleSubMenuToggle('services')}>
                  Послуги ↓
                </span>
                {activeSubMenu === 'services' && (
                  <div className={styles.burgerSubMenu}>
                    <Link
                      href="/services/face-surgery/face-lift"
                      onClick={handleMenuItemClick}
                    >
                      Підтяжка обличчя та шиї
                    </Link>
                    <Link
                      href="/services/face-surgery/blefaro-plastic"
                      onClick={handleMenuItemClick}
                    >
                      Блефаропластика
                    </Link>
                    <Link
                      href="/services/face-surgery/chino-plasty"
                      onClick={handleMenuItemClick}
                    >
                      Пластика підборіддя
                    </Link>
                    <Link
                      href="/services/breast-surgery/breast-augmentation"
                      onClick={handleMenuItemClick}
                    >
                      Збільшення грудей
                    </Link>
                    <Link
                      href="/services/breast-surgery/breast-lift"
                      onClick={handleMenuItemClick}
                    >
                      Підтяжка грудей
                    </Link>
                    <Link
                      href="/services/breast-surgery/areolaCorrec"
                      onClick={handleMenuItemClick}
                    >
                      Корекція соска та ареоли
                    </Link>
                    <Link
                      href="/services/breast-surgery/breast-implant-replacement-Page"
                      onClick={handleMenuItemClick}
                    >
                      заміна імплантів груді з корекцією форми
                    </Link>

                    <Link
                      href="/services/breast-surgery/breast-implant-removal"
                      onClick={handleMenuItemClick}
                    >
                      Видалення імплантів
                    </Link>
                    <Link
                      href="/services/body-surgery/abdominoplasty"
                      onClick={handleMenuItemClick}
                    >
                      Абдомінопластика
                    </Link>
                    <Link
                      href="/services/body-surgery/liposuction"
                      onClick={handleMenuItemClick}
                    >
                      Ліпосакція
                    </Link>
                    <Link
                      href="/services/body-surgery/liposuction"
                      onClick={handleMenuItemClick}
                    >
                      Видалення шийного горба
                    </Link>
                    <Link
                      href="/services/body-surgery/buttock-augmentation"
                      onClick={handleMenuItemClick}
                    >
                      Збільшення сідниць
                    </Link>
                    <Link
                      href="/services/body-surgery/leg-plastic"
                      onClick={handleMenuItemClick}
                    >
                      Пластика ніг
                    </Link>
                    <Link
                      href="/services/general-surgery/carpal-tunnel"
                      onClick={handleMenuItemClick}
                    >
                      Видалення пухлин
                    </Link>
                    <Link
                      href="/services/general-surgery/carpal-tunnel"
                      onClick={handleMenuItemClick}
                    >
                      Карпальний канал
                    </Link>
                    <Link
                      href="/services/general-surgery/gerniotomiya"
                      onClick={handleMenuItemClick}
                    >
                      Видалення гриж
                    </Link>
                  </div>
                )}
              </div>
              <div className={styles.burgerMenuItem}>
                <span onClick={() => handleSubMenuToggle('about-doctor')}>
                  Про лікаря ↓
                </span>
                {activeSubMenu === 'about-doctor' && (
                  <div className={styles.burgerSubMenu}>
                    <Link
                      href="/about-doctor/team"
                      onClick={handleMenuItemClick}
                    >
                      Команда
                    </Link>
                    <Link
                      href="/about-doctor/portfolio-pecheriaha"
                      onClick={handleMenuItemClick}
                    >
                      Портфоліо Печеряга
                    </Link>

                    <Link
                      href="/about-doctor/reviews"
                      onClick={handleMenuItemClick}
                    >
                      Відгуки
                    </Link>
                    <Link
                      href="/about-doctor/ask-doctor"
                      onClick={handleMenuItemClick}
                    >
                      Запитати лікаря
                    </Link>
                    <Link
                      href="/about-doctor/useful-information"
                      onClick={handleMenuItemClick}
                    >
                      Корисна інформація
                    </Link>
                    <Link
                      href="/about-doctor/about-us"
                      onClick={handleMenuItemClick}
                    >
                      Коротко про нас
                    </Link>
                    <Link
                      href="/about-doctor/сontacts"
                      onClick={handleMenuItemClick}
                    >
                      Контакти
                    </Link>
                  </div>
                )}
              </div>
              <div className={styles.burgerMenuItem}>
                <span onClick={() => handleSubMenuToggle('operative')}>
                  Відділення ↓
                </span>
                {activeSubMenu === 'operative' && (
                  <div className={styles.burgerSubMenu}>
                    <Link
                      href="/operative/operative-room"
                      onClick={handleMenuItemClick}
                    >
                      Операційнa
                    </Link>
                    <Link
                      href="/operative/preparation-surgery"
                      onClick={handleMenuItemClick}
                    >
                      Підготовка до опер
                    </Link>
                    <Link
                      href="/operative/postoperative-moments"
                      onClick={handleMenuItemClick}
                    >
                      Післяопераційні моменти
                    </Link>

                    <Link
                      href="/operative/rehabilitation"
                      onClick={handleMenuItemClick}
                    >
                      Реабілітація
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
