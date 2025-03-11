'use client';

import type React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './HealthIssuesSlider.module.css';

const healthIssues = [
  {
    title: 'Ожиріння',
    image: '/placeholder.svg?height=300&width=400&text=Obesity',
  },
  {
    title: 'Варикозне розширення вен нижніх кінцівок',
    image: '/placeholder.svg?height=300&width=400&text=Varicose+Veins',
  },
  {
    title: 'Куріння',
    image: '/placeholder.svg?height=300&width=400&text=Smoking',
  },
  {
    title: 'Прийом гормональних препаратів',
    image: '/placeholder.svg?height=300&width=400&text=Hormonal+Medications',
  },
  {
    title: 'Наявність свіжих рубців у зоні операції',
    image: '/placeholder.svg?height=300&width=400&text=Fresh+Scars',
  },
  {
    title: 'Запальні захворювання шкіри',
    image: '/placeholder.svg?height=300&width=400&text=Skin+Inflammation',
  },
];

const HealthIssuesSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % healthIssues.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + healthIssues.length) % healthIssues.length
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.sliderTitle}>Фактори ризику</h2>
      <div className={styles.slider}>
        <button
          className={`${styles.sliderButton} ${styles.prevButton}`}
          onClick={prevSlide}
          aria-label="Попереднє зображення"
        >
          <ChevronLeft />
        </button>
        <div className={styles.slideContent}>
          <Image
            src={healthIssues[currentSlide].image || '/placeholder.svg'}
            alt={healthIssues[currentSlide].title}
            width={400}
            height={300}
            layout="responsive"
          />
          <p className={styles.slideTitle}>
            {healthIssues[currentSlide].title}
          </p>
        </div>
        <button
          className={`${styles.sliderButton} ${styles.nextButton}`}
          onClick={nextSlide}
          aria-label="Наступне зображення"
        >
          <ChevronRight />
        </button>
      </div>
      <div className={styles.sliderDots}>
        {healthIssues.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Перейти до слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HealthIssuesSlider;
