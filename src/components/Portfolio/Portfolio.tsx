'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Portfolio.module.css';

type Section = {
  id: string;
  title: string;
  content: string[];
};

type ProfSkill = {
  id: string;
  title: string;
  subSkills: {
    id: string;
    title: string;
    details: string[];
  }[];
};

export default function Portfolio() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [expandedProfSkills, setExpandedProfSkills] = useState<string | null>(
    null
  );
  const [expandedSubProfSkills, setExpandedSubProfSkills] = useState<
    string | null
  >(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleProfSkill = (skillId: string) => {
    setExpandedProfSkills(expandedProfSkills === skillId ? null : skillId);
    setExpandedSubProfSkills(null);
  };

  const toggleSubProfSkill = (subSkillId: string) => {
    setExpandedSubProfSkills(
      expandedSubProfSkills === subSkillId ? null : subSkillId
    );
  };

  const sections: Section[] = [
    {
      id: 'education',
      title: 'Освіта',
      content: [
        'Середня освіта: - середня школа',
        'Вища освіта: - Одеський державний медичний університет',
        'Інтернатура: - Буковинська державна медична академія, Хірургія',
        'Клінічна ординатура - Буковинська державна медична академія, Хірургія',
      ],
    },
    {
      id: 'certificates',
      title: 'Сертифікати',
      content: [
        'Загальна хірургія',
        'Лапароскопічна хірургія',
        'Пластична, естетична та реконструктивна хірургія',
        'Онкологія',
        'Бариатрична хірургія',
      ],
    },
    {
      id: 'positions',
      title: 'Посади за час роботи',
      content: [
        'Лікар - хірург Торакального відділення ОКЛ',
        'Лікар-хірург хірургічного відділення. Чернівецький військовий Базовий госпіталь',
        'Лікар хірург хірургічного відділення. Лікар Онколог. Вузлової клінічної лікарні ст.Чернівці',
        'Завідувач відділенням хірургії. Районний хірург. Снятинська ЦРЛ Івано-Франківська обл.',
        'Завідувач міським центром хірургії. Міська лікарня №1 м.Чернівці',
        'Завідувач відділенням хірургії. ЦМКЛ м. Чернівці',
      ],
    },
    {
      id: 'qualifications',
      title: 'Навчання з підвищенням кваліфікації',
      content: [
        '1995р.-1997р. – первинна спеціалізація по хірургії, Буковинська державна медична академія.',
        '1997-1999р. – Клінічна ординатура по хірургії, Буковинська державна медична академія.',
        '2001р – інтенсивний курс по пластичні і реконструктивні хірургії. Росія. Ярославль',
        '2001р. - Інтенсивний курс по пластичні, естетичні та реконструктивні хірургії. Росія . Москва.',
        '2001р. - тематичний курс удосконалення по ендоскопічні хірургії',
        '2002р. – тематичне удосконалення по пластичні, естетичні, та реконструктивні хірургії, Росія Ярославль.',
        '2003р. - Лапараскопічна хірургія .Тематичне удосконалення. Одеса',
        '2004р. - Тематичне удосконалення по пластичні хірургії Росія, Іваново',
        '2004р. - Міжнародний інтенсивний курс по пластичні і реконструктивні хірургії. Росія Єкатеринбург',
        "2006р. - Міжнародний дев'ятий інтенсивний курс по пластичній та реконструктивній хірургії. Росія Москва.",
        '2008р. - спеціалізації по онкології при Національній медичні академії після діпломної освіти ім. П.Л. Шупика.( Київ)',
        '2008р. - Передатестаційний цикл за фахом «Хірургія» при Буковинському державному медичному університеті м.Чернівці.',
        '2010р. - Цикл тематичного удосконалення «Актуальні питання малоінвазивної хірургії». Чернівці',
        '2011р. - Цикл тематичного удосконалення « Пластична та реконструктивна хірургія». Київ.',
        '2013р. - Цикл тематичного удосконалення « Непухлинні захворювання прямої кишки» Чернівці.',
        '2017р. - Навчання на циклі тематичного удосконалення «Актуальні питання гемотрансфузійної терапії в практиці хірурга» - – ВДНЗУ БДМУ,',
        '2017р. - Навчання на циклі тематичного удосконалення «Актуальні питання опікової та холодової травми » – ВДНЗУ БДМУ, 2017р.',
        '2018р. - Навчання на циклі тематичного удосконалення «Невідкладна та малоінвазивна проктологія» - 2 тижні – ВДНЗУ БДМУ, 2018р.',
        '2019р. - Передатестаційний цикл за фахом «Хірургія», ВДНЗУ БДМУ, 2019р',
        '2020р. - Навчання на циклі тематичного удосконалення «Нове в методиці лікування септичних станів» - 2 тижні – ВДНЗУ БДМУ, 2020р.',
      ],
    },
  ];

  const profSkills: ProfSkill[] = [
    {
      id: 'hernias',
      title: 'Операції при грижах',
      subSkills: [
        {
          id: 'herniaDetails',
          title: 'Види операцій при грижах',
          details: [
            'З використанням сітчастих імплантів при пахових грижах',
            'Операції без сітчастих імплантів для вентральних гриж',
          ],
        },
      ],
    },
    {
      id: 'hstomach',
      title: 'Операції на шлунку',
      subSkills: [
        {
          id: 'stomachDetails',
          title: 'Види операцій на шлунку',
          details: [
            'Резекції шлунку',
            'Гастротомії',
            'Гастростомії',
            'Зашивання перфоративних виразок',
            'Ваготомії',
            'Рукавна резекція шлунку при ожирінні',
            'Фундоплікації при грижах стравохідного отвору діафрагми',
          ],
        },
      ],
    },
    {
      id: 'duodenum',
      title: 'Операції на ДПК',
      subSkills: [
        {
          id: 'duodenumDetails',
          title: 'Види операцій на ДПК',
          details: [
            'Зашивання з дренуючими операціями при перфоративні виразці',
          ],
        },
      ],
    },
    {
      id: 'bowel',
      title: 'Операції на кишці',
      subSkills: [
        {
          id: 'bowelDetails',
          title: 'Види Операції на кишці',
          details: [
            'Роз’єднання злук',
            'Резекція кишки з накладанням різних анастомозів',
            'Геміколектомії правобічна, лівобічна (з анастомозом та операцією Гартмана',
            'Накладання кишкових стом',
          ],
        },
      ],
    },
    {
      id: 'liver',
      title: 'Операції на печінці ',
      subSkills: [
        {
          id: 'liverDetails',
          title: 'Види Операції на печінці',
          details: ['Видалення кіст печінки', 'Дренування абсцесу печінки'],
        },
      ],
    },
    {
      id: 'gallbladder',
      title: 'Операції на жовчеві системі',
      subSkills: [
        {
          id: 'gallbladderDetails',
          title: 'Види операцій на жовчеві системі',
          details: [
            'Холецистектомія',
            'Холецистостомія',
            'Холецистоєюностомія',
            'Холедохотомія та дренування холедоха',
            'Холедохостомія -дуодено, - єюно',
          ],
        },
      ],
    },
    {
      id: 'abdominal',
      title: 'Операції на органах черевної порожнини',
      subSkills: [
        {
          id: 'abdominalDetails',
          title: 'Види операцій на органах черевної порожнини.',
          details: [
            'Спленектомія',
            'Апендектомія',
            'Сиквестектомії і дренування при деструктивних панкреатитах',
            'Видалення різних пухлин черевної порожнини',
            'Дренування різних абсцесів скупчень рідин в черевні порожнині',
            'Видалення кіст яєчників',
            'Над піхвова ампутація матки',
          ],
        },
      ],
    },
    {
      id: 'laparoscopi',
      title: ' Малоінвазивна хірургія',
      subSkills: [
        {
          id: 'laparoscopiDetails',
          title: ' Види лапараскопічних операцій',
          details: [
            'Діагностична лапараскопія та торакоскопія',
            'Холецистостомія',
            'Дренування холедоха',
            'Зашивання перфоративної виразки шлунку',
            'Апендектомія',
            'Операція при варикоцеле',
            'Видалення кіст яєчника',
            'Перев’язування труб маточних',
            'Дрилінг при склерокистозі яєчників',
            'Трансперітоніальні герніотомії з пластикою сітчастими імплантами',
          ],
        },
      ],
    },
    {
      id: 'vein',
      title: 'Операції на венах',
      subSkills: [
        {
          id: 'veinDetails',
          title: 'Види операцій на венах',
          details: [
            'Видалення підшкірних варикознорозширених вен',
            'Операції при венозних виразках гомілок з дермопластикою',
            'Операції при ПТФХ з утворенням трофічних виразок',
          ],
        },
      ],
    },
    {
      id: 'genital',
      title: 'Oперація на статевих органах',
      subSkills: [
        {
          id: 'genitalDetails',
          title: 'Види операцій на статевих органах',
          details: [
            'Операції при водянках оболонок яєчка',
            'Операції при фімозах',
            'Потовщені статевого органу',
            'Подовження статевого органу ',
            'Корекція статевих губ жінок ',
          ],
        },
      ],
    },
    {
      id: 'face',
      title: 'Омоложуючі операції на обличчі ',
      subSkills: [
        {
          id: 'faceDetails',
          title: 'Види операції на обличчі',
          details: [
            'Підтяжки обличчя (верхньо - середній СМАС, круговий)',
            'Блефаропластика',
            'Пластика губ',
            'Оттопластика',
            'Ліпосакція шиї',
            'Видалення утворень',
          ],
        },
      ],
    },
    {
      id: 'mammary',
      title: 'Операції на молочних залозах',
      subSkills: [
        {
          id: 'mammaryDetails',
          title: ' Види операцій на молочних залозах',
          details: [
            '-Збільшення молочних залоз за допомогою імплантів',
            '-заміна імплантів молочних залозів',
            '-видалення імплантів молочних залоз',
            '-Усунення птозу молочних залоз',
            '-Зменшення молочних залоз',
          ],
        },
      ],
    },
    {
      id: 'abdominals',
      title: 'Операції на передній черевній стінці',
      subSkills: [
        {
          id: 'abdominalsDetails',
          title: 'Види операцій для омоложення торса',
          details: [
            '-Абдомінопластика (велика, мала)',
            '-Усунення діастазу прямих мязів живота малоінвазивним методом',
            '-Ліпосакція',
            'пластика пупка',
            'Холедохостомія -дуодено, - єюно',
          ],
        },
      ],
    },
    {
      id: 'purulent',
      title: 'Гнійна-септична  хірургія',
      subSkills: [
        {
          id: 'purulentDetails',
          title: 'Види операцій при гнійносептичних захворювань',
          details: [
            'Розкриття і дренування абсцесів та флегмон',
            'Розкриття парапроктитів',
            'Операції при кістах куприка',
            'Ампутація нижніх кінцівок при гангренах судинного ґенезу',
            'Лікування "Діабетичної ступні"',
          ],
        },
      ],
    },
    {
      id: 'proctology',
      title: 'Операції на прямій кишці',
      subSkills: [
        {
          id: 'proctologyDetails',
          title: 'Види операцій на прямій кишці',
          details: [
            'Геморой ектомія',
            'Видалення тріщин прямої кишки ',
            'Видалення нориць прясої кишки',
          ],
        },
      ],
    },
    // Add other professional skills here...
  ];

  return (
    <div className={styles.portfolioBackground}>
      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioTitle}>
          <div className={styles.portfolioText}>
            <h3 className={styles.portfolioName}>
              Печеряга Микола Миколайович
            </h3>
            <div className={styles.portfolioBirth}>
              Дата народження: 18.02.1968
            </div>
            <div className={styles.portfolioAddress}>Україна, м. Чернівці</div>
            <div className={styles.portfolioMobile}>Телефон: +380507575411</div>
            <div className={styles.portfolioEmail}>
              Email: pecheryag@gmail.com
            </div>
            <div className={styles.citizenship}>Сімейний стан: Одружений</div>
            <div className={styles.children}>
              <h4>Діти:</h4>
              <p>Старший син - Дмитро</p>
              <p>Молодший син - Артем</p>
            </div>
            <div className={styles.desiredPosition}>
              Займана посада: Лікар-хірург
            </div>
          </div>
          <div className={styles.portfolioImage}>
            <Image
              src="/images/portfolio/portfolio1.jpg"
              alt="Доктор Печеряга Микола Миколайович"
              width={500}
              height={500}
            />
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.id} className={styles.portfolioSection}>
            <h3 onClick={() => toggleSection(section.id)}>
              {section.title}
              {expandedSections.includes(section.id) ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </h3>
            {expandedSections.includes(section.id) && (
              <ul>
                {section.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <h2>Професійні навички. Список операцій які я виконую</h2>

        <div className={styles.skillsContainer}>
          {profSkills.map((skill) => (
            <div key={skill.id}>
              <h3 onClick={() => toggleProfSkill(skill.id)}>
                {skill.title}
                {expandedProfSkills === skill.id ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </h3>
              {expandedProfSkills === skill.id && (
                <ul className={styles.open}>
                  {skill.subSkills.map((subSkill) => (
                    <li key={subSkill.id}>
                      <h4 onClick={() => toggleSubProfSkill(subSkill.id)}>
                        {subSkill.title}
                        {expandedSubProfSkills === subSkill.id ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </h4>
                      {expandedSubProfSkills === subSkill.id && (
                        <ul className={styles.open}>
                          {subSkill.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
