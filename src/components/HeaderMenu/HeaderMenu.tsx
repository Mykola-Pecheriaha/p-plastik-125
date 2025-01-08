'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
            src="/images/logo/logo2.png"
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
                <div className={`${styles.subMenu} ${styles.columnSubMenu}`}>
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
                <div className={`${styles.subMenu} ${styles.columnSubMenu}`}>
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
                      href="/services/face-lift"
                      onClick={handleMenuItemClick}
                    >
                      Підтяжка обличчя та шиї
                    </Link>
                    <Link
                      href="/services/blefaro-plastic"
                      onClick={handleMenuItemClick}
                    >
                      Блефаропластика
                    </Link>
                    <Link
                      href="/services/chino-plasty"
                      onClick={handleMenuItemClick}
                    >
                      Пластика підборіддя
                    </Link>
                    <Link
                      href="/services/breast-augmentation"
                      onClick={handleMenuItemClick}
                    >
                      Збільшення грудей
                    </Link>
                    <Link
                      href="/services/breast-reduction"
                      onClick={handleMenuItemClick}
                    >
                      Зменшення грудей
                    </Link>
                    <Link
                      href="/services/abdominoplasty"
                      onClick={handleMenuItemClick}
                    >
                      Абдомінопластика
                    </Link>
                    <Link
                      href="/services/liposuction"
                      onClick={handleMenuItemClick}
                    >
                      Ліпосакція
                    </Link>
                  </div>
                )}
              </div>
              <div className={styles.burgerMenuItem}>
                <span onClick={() => handleSubMenuToggle('aboutDoctor')}>
                  Про лікаря ↓
                </span>
                {activeSubMenu === 'aboutDoctor' && (
                  <div className={styles.burgerSubMenu}>
                    <Link
                      href="/aboutDoctor/team"
                      onClick={handleMenuItemClick}
                    >
                      Команда
                    </Link>
                    <Link
                      href="/aboutDoctor/reviews"
                      onClick={handleMenuItemClick}
                    >
                      Відгуки
                    </Link>
                    <Link
                      href="/aboutDoctor/askDoctor"
                      onClick={handleMenuItemClick}
                    >
                      Запитати лікаря
                    </Link>
                    <Link
                      href="/aboutDoctor/usefulInformation"
                      onClick={handleMenuItemClick}
                    >
                      Корисна інформація
                    </Link>
                    <Link
                      href="/aboutDoctor/brieflyAbout"
                      onClick={handleMenuItemClick}
                    >
                      Коротко про нас
                    </Link>
                    <Link
                      href="/aboutDoctor/Contacts"
                      onClick={handleMenuItemClick}
                    >
                      Контакти
                    </Link>
                  </div>
                )}
              </div>
              <div className={styles.burgerMenuItem}>
                <span onClick={() => handleSubMenuToggle('operating')}>
                  Відділення ↓
                </span>
                {activeSubMenu === 'operating' && (
                  <div className={styles.burgerSubMenu}>
                    <Link
                      href="/operating/operatingRoom"
                      onClick={handleMenuItemClick}
                    >
                      Операційна
                    </Link>
                    <Link
                      href="/operating/reviews"
                      onClick={handleMenuItemClick}
                    >
                      Підготовка до операції
                    </Link>
                    <Link
                      href="/operating/preparation"
                      onClick={handleMenuItemClick}
                    >
                      Операційні моменти
                    </Link>
                    <Link
                      href="/operating/postoperative"
                      onClick={handleMenuItemClick}
                    >
                      Післяопераційні моменти
                    </Link>
                    <Link
                      href="/operating/rehabilitation"
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
