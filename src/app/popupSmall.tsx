import React, { useState } from 'react';
import styles from './popupSmall.module.css';
import PopupSecondLevel from './popupSecondLevel';
import { MouseEvent } from 'react';
import Head from 'next/head';
type Item = {
  name: string;
  key: number;
};
interface ElementProps {
  key: number;
  name: string;
}
export default function PopupSmall({
  items,
  withArrow,
  screenWidth,
  thirdLevel,
}: {
  items: Item[];
  withArrow: boolean;
  screenWidth: number;
  thirdLevel: boolean;
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
  const itemsMenu: ElementProps[] = [
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
  console.log(thirdLevel);
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/amberrie-test/src/app/globals.css' />
      </Head>
      <div
        className={
          withArrow === true && thirdLevel !== true
            ? styles.popupSmallContainerArrowFull
            : screenWidth < 1023
            ? styles.popupSmallContainerTable
            : thirdLevel === true
            ? styles.popupSmallContainerThirdLevel
            : styles.popupSmallContainer
        }
      >
        {items.map((element, index) => (
          <div
            onMouseEnter={(event) => handleMouseEnter(event, element)}
            onMouseLeave={handleMouseLeave}
            key={index}
            className={
              withArrow
                ? styles.popupSmall__item_arrow
                : styles.popupSmall__item
            }
          >
            <p className={styles.popupSmall__itemName}>{element.name}</p>
            {withArrow === true && (
              <div className={styles.popupSmall__itemArrow}>
                {hovered.active === true && hovered.number === element.key && (
                  <PopupSecondLevel
                    screenWidth={screenWidth}
                    secondLevel={true}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
