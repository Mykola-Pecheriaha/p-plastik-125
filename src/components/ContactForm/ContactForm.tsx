'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { User2, Phone } from 'lucide-react';
import styles from './ContactForm.module.css';

interface ContactFormProps {
  backgroundColor?: string;
  borderColor?: string;
  shadowColor?: string;
}

interface FormData {
  name: string;
  phone: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  backgroundColor = '#ffffff',
  borderColor = '#e2e8f0',
  shadowColor = 'rgba(0, 0, 0, 0.1)',
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save form data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const newErrors: { [key: string]: boolean } = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.phone.trim()) newErrors.phone = true;

    setErrors(newErrors);
    setIsSubmitted(true);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission here
      console.log('Form submitted:', formData);
    }
  };

  const getInputClassName = (fieldName: keyof FormData) => {
    return `${styles.input} ${isSubmitted && errors[fieldName] ? styles.error : ''}`;
  };

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>
            Залиште заявку на безкоштовну консультацію пластичного хірурга
          </h1>
        </div>

        <div className={styles.rightSection}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div
              className={styles.inputWrapper}
              style={{ borderColor, boxShadow: `0 2px 4px ${shadowColor}` }}
            >
              <label className={styles.label}>
                Ваше імя <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={getInputClassName('name')}
                  placeholder="Введіть ваше ім'я"
                />
                <User2 className={styles.icon} />
              </div>
            </div>

            <div
              className={styles.inputWrapper}
              style={{ borderColor, boxShadow: `0 2px 4px ${shadowColor}` }}
            >
              <label className={styles.label}>
                Ваш телефон <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputContainer}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={getInputClassName('phone')}
                  placeholder="Введіть ваш телефон"
                />
                <Phone className={styles.icon} />
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              Чекаю дзвінка!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
