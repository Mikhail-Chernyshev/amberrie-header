import React from 'react';
import styles from '../popupSmall.module.scss';
import PopupSecondLevel from './popupSecondLevel';
import classNames from 'classnames';
type elementItem = {
  name: string;
  key: number;
};

export default function PopupSmall({
  items,
  withArrow,
  thirdLevel,
}: {
  items: elementItem[];
  withArrow: boolean;
  thirdLevel: boolean;
}) {
  return (
    <>
      <div
        className={classNames({
          [styles.popupSmallContainerArrowFull]: withArrow && !thirdLevel,
          [styles.popupSmallContainerThirdLevel]: thirdLevel,
          [styles.popupSmallContainer]: !withArrow && !thirdLevel,
        })}
      >
        {items.map((element, index) => (
          <div
            key={index}
            className={classNames({
              [styles.popupSmall__item_arrow]: withArrow,
              [styles.popupSmall__item]: !withArrow,
            })}
          >
            <p className={styles.popupSmall__itemName}>{element.name}</p>
            {withArrow && (
              <div className={styles.popupSmall__itemArrow}>
                <div className={styles.popupSmall__popupSecondLevelContainer}>
                  <PopupSecondLevel
                    secondLevel={true}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
