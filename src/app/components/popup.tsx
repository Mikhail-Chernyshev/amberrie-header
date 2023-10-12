import React, { useState } from 'react';
import styles from '../popup.module.css';
import PopupSmall from './popupSmall';
import { MouseEvent, ReactElement } from 'react';
import Head from 'next/head';

interface ElementProps {
  key: number;
  name: string;
}

export default function Popup({
  name,
  screenWidth,
}: {
  name: string;
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
  ];
  const itemsSmallPopup: ElementProps[] = [
    {
      name: 'На один пост',
      key: 1,
    },
    { name: 'На будущие посты', key: 2 },
    { name: 'На последние посты', key: 3 },
  ];
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/amberrie-test/src/app/globals.css' />
      </Head>
      <div className={styles.popupContainer}>
        <h3 className={styles.popup__title}>{name}</h3>
        {elementsMenu.map((element) => (
          <div
            key={element.key}
            onMouseEnter={(event) => handleMouseEnter(event, element)}
            onMouseLeave={handleMouseLeave}
            className={styles.popup__item}
          >
            <div className={styles.popup__itemIcon}></div>
            <div className={styles.popup__itemWrapper}>
              <p className={styles.popup__itemName}>{element.name}</p>
              {element.key === 1 && (
                <div className={styles.popup__itemArrow}>
                  {hovered.active === true &&
                    hovered.number === element.key && (
                      <PopupSmall
                        items={itemsSmallPopup}
                        withArrow={false}
                        screenWidth={screenWidth}
                        thirdLevel={false}
                      />
                    )}
                </div>
              )}
              {element.key === 4 && (
                <div className={styles.popup__itemArrow}>
                  {/* {hovered.active === true && */}
                    {/* hovered.number === element.key && ( */}
                      <PopupSmall
                        items={itemsSmallPopup}
                        withArrow={false}
                        screenWidth={screenWidth}
                        thirdLevel={false}
                      />
                    {/* )} */}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
