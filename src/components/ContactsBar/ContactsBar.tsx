'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './ContactsBar.module.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactsBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isBurgerVisible, setIsBurgerVisible] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleResize = (): void => {
    if (headerRef.current) {
      const headerWidth = headerRef.current.offsetWidth;
      const contentWidth = headerRef.current.scrollWidth;
      setIsBurgerVisible(contentWidth > headerWidth);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.contactsBarContainer}>
      <div
        className={`${styles.contactsBar} ${
          isBurgerVisible ? styles.hidden : ''
        }`}
        ref={headerRef}
      >
        <div className={styles.contactInfo}>
          <p>
            Телефон: <a href="tel:+38(050) 7575411">+38(050) 75 75 411</a>
          </p>
          <p>
            Email: <a href="mailto:Pecheryag@gmail.com">Pecheryag@gmail.com</a>
          </p>
          <p>
            <a
              href="https://goo.gl/maps/youraddress"
              target="_blank"
              rel="noopener noreferrer"
            >
              корпус 1 вул.Героїв Майдану 226, (вхід з вул.Рівенська),
              Chernivtsi, Ukraine
            </a>
          </p>
        </div>
        <div className={styles.socialLinks}>
          <a
            href="https://www.facebook.com/profile.php?id=100003098763675"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>

      {isBurgerVisible && (
        <button
          className={styles.burgerButton}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      )}

      {isBurgerVisible && isMenuOpen && (
        <div
          className={`${styles.burgerMenu} ${isMenuOpen ? styles.show : ''}`}
        >
          <p>
            Телефон: <a href="tel:+38(050) 7575411">+38(050) 75 75 411</a>
          </p>
          <p>
            Email: <a href="mailto:Pecheryag@gmail.com">Pecheryag@gmail.com</a>
          </p>
          <p>
            <a
              href="https://goo.gl/maps/youraddress"
              target="_blank"
              rel="noopener noreferrer"
            >
              корпус 1 вул.Героїв Майдану 226, (вхід з вул.Рівенська),
              Chernivtsi, Ukraine
            </a>
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/profile.php?id=100003098763675"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <FaFacebook size={24} /> */}
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsBar;
