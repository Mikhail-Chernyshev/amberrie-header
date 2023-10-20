import React from 'react';
import styles from '../popup.module.scss';
import PopupSmall from './popupSmall';

interface elementMenu {
  key: number;
  name: string;
}
const elementsMenu: elementMenu[] = [
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
const itemsSmallPopup: elementMenu[] = [
  {
    name: 'На один пост',
    key: 1,
  },
  { name: 'На будущие посты', key: 2 },
  { name: 'На последние посты', key: 3 },
];

export default function Popup({
  name,
}: {
  name: string;
}) {
  return (
    <>
      <div className={styles.popupContainer}>
        <h3 className={styles.popup__title}>{name}</h3>
        {elementsMenu.map((element) => (
          <div key={element.key} className={styles.popup__item}>
            <div className={styles.popup__itemIcon}></div>
            <div className={styles.popup__itemWrapper}>
              <p className={styles.popup__itemName}>{element.name}</p>
              {element.key === 1 && (
                <div className={styles.popup__itemArrow}>
                  <div className={styles.popup__popupSmallContainer}>
                    <PopupSmall
                      items={itemsSmallPopup}
                      withArrow={false}
                      thirdLevel={false}
                    />
                  </div>
                </div>
              )}
              {element.key === 4 && (
                <div className={styles.popup__itemArrow}>
                  <div className={styles.popup__popupSmallContainer}>
                    <PopupSmall
                      items={itemsSmallPopup}
                      withArrow={false}
                      thirdLevel={false}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
