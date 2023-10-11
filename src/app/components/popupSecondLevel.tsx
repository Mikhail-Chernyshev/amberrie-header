import React, { useState } from 'react';
import styles from '../popupSecondLevel.module.css';
import PopupSmall from './popupSmall';
import { MouseEvent, ReactElement } from 'react';
import Head from 'next/head';

interface ElementProps {
  key: number;
  name: string;
}

export default function PopupSecondLevel({
  secondLevel,
  screenWidth,
}: {
  secondLevel: boolean;
  screenWidth: number;
}) {
  const [hovered, setHovered] = useState({ active: false, number: 0 });
  const handleMouseEnter = (
    event: MouseEvent<HTMLDivElement>,
    elementProps: ElementProps
  ) => {
    const { key, name } = elementProps;
    setHovered({ active: true, number: key });
  };
  const handleMouseLeave = () => {
    setHovered({ active: false, number: 0 });
  };
  const elementsMenu: ElementProps[] = [
    {
      key: 1,
      name: 'Лайки',
    },
    {
      key: 2,
      name: 'Голоса',
    },
    {
      key: 3,
      name: 'Подпосчики',
    },
    {
      key: 4,
      name: 'Просмотры',
    },
    {
      key: 5,
      name: 'Репосты',
    },
    {
      key: 6,
      name: 'Комментарии',
    },
  ];
  const itemsSmallPopup: ElementProps[] = [
    {
      name: 'На один пост',
      key: 1,
    },
    { name: 'На будущие посты', key: 2 },
  ];
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/amberrie-test/src/app/globals.css' />
      </Head>
      <div className={styles.popupSecondLevelContainer}>
        {elementsMenu.map((element) => (
          <div
            key={element.key}
            onMouseEnter={(event) => handleMouseEnter(event, element)}
            onMouseLeave={handleMouseLeave}
            className={
              secondLevel
                ? styles.popupSecondLevel__itemSecondLevel
                : styles.popupSecondLevel__item
            }
          >
            <div className={styles.popupSecondLevel__itemIcon}></div>
            <div className={styles.popupSecondLevel__itemWrapper}>
              <p className={styles.popupSecondLevel__itemName}>
                {element.name}
              </p>
              {element.key === 1 && (
                <div className={styles.popupSecondLevel__itemArrow}>
                  {hovered.active === true &&
                    hovered.number === element.key && (
                      <PopupSmall
                        screenWidth={screenWidth}
                        items={itemsSmallPopup}
                        withArrow={false}
                        thirdLevel={true}
                      />
                    )}
                </div>
              )}
              {element.key === 4 && (
                <div className={styles.popupSecondLevel__itemArrow}>
                  {hovered.active === true &&
                    hovered.number === element.key && (
                      <PopupSmall
                        screenWidth={screenWidth}
                        items={itemsSmallPopup}
                        withArrow={false}
                        thirdLevel={true}
                      />
                    )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
