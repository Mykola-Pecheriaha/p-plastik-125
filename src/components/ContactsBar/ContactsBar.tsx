'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './ContactsBar.module.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactsBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleResize = (): void => {
    setIsDesktop(window.innerWidth > 768);
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const contactInfo = (
    <>
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
          корпус 1 вул.Героїв Майдану 226, (вхід з вул.Рівенська), Chernivtsi,
          Ukraine
        </a>
      </p>
    </>
  );

  const socialLinks = (
    <div className={styles.socialLinks}>
      <a
        href="https://www.facebook.com/profile.php?id=100003098763675"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={24} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={24} />
      </a>
    </div>
  );

  return (
    <div className={styles.contactsBarContainer} ref={menuRef}>
      {isDesktop ? (
        <div className={styles.contactsBar}>
          <div className={styles.contactInfo}>{contactInfo}</div>
          {socialLinks}
        </div>
      ) : (
        <>
          <button
            className={styles.burgerButton}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
          {isMenuOpen && (
            <div className={styles.burgerMenu}>
              {contactInfo}
              {socialLinks}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ContactsBar;
