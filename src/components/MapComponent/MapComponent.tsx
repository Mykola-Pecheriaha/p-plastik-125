'use client';

import styles from './MapComponent.module.css';

const MapComponent = () => {
  return (
    <div className={styles.mapContainer}>
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
  );
};

export default MapComponent;
