import React from 'react';
import styles from '../popupSecondLevel.module.scss';
import PopupSmall from './popupSmall';
import classNames from 'classnames';

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
    name: 'Подписчики',
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
const itemsSmallPopup: elementMenu[] = [
  {
    name: 'На один пост',
    key: 1,
  },
  { name: 'На будущие посты', key: 2 },
];
export default function PopupSecondLevel({
  secondLevel,
}: {
  secondLevel: boolean;
}) {
  return (
    <>
      <div className={styles.popupSecondLevelContainer}>
        {elementsMenu.map((element) => (
          <div
            key={element.key}
            className={classNames({
              [styles.popupSecondLevel__itemSecondLevel]: secondLevel,
              [styles.popupSecondLevel__item]: !secondLevel,
            })}
          >
            <div className={styles.popupSecondLevel__itemIcon}></div>
            <div className={styles.popupSecondLevel__itemWrapper}>
              <p className={styles.popupSecondLevel__itemName}>
                {element.name}
              </p>
              {element.key === 1 && (
                <div className={styles.popupSecondLevel__itemArrow}>
                  <div className={styles.popupSecondLevel__popupSmallContainer}>
                    <PopupSmall
                      items={itemsSmallPopup}
                      withArrow={false}
                      thirdLevel={true}
                    />
                  </div>
                </div>
              )}
              {element.key === 4 && (
                <div className={styles.popupSecondLevel__itemArrow}>
                  <div className={styles.popupSecondLevel__popupSmallContainer}>
                    <PopupSmall
                      items={itemsSmallPopup}
                      withArrow={false}
                      thirdLevel={true}
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
