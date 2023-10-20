import React, { useState } from 'react';
import styles from '../burgerMenu.module.scss';
import classNames from 'classnames';
interface elementIcon {
  key: number;
  name: string;
}
interface elementSearch {
  name: string;
  logo: string;
}
const elementsMenu: elementIcon[] = [
  {
    key: 1,
    name: 'Вконт',
  },
  {
    key: 2,
    name: 'Вконт1',
  },
  {
    key: 3,
    name: 'Вконт2',
  },
  {
    key: 4,
    name: 'Вконт3',
  },
  {
    key: 5,
    name: 'Вконт4',
  },
  {
    key: 6,
    name: 'Вконт',
  },
  {
    key: 7,
    name: 'Вконт',
  },
  {
    key: 8,
    name: 'Вконт',
  },
  {
    key: 9,
    name: 'Вконт',
  },
  {
    key: 10,
    name: 'Вконт1',
  },
  {
    key: 11,
    name: 'Вконт2',
  },
  {
    key: 12,
    name: 'Вконт3',
  },
  {
    key: 13,
    name: 'Вконт4',
  },
  {
    key: 14,
    name: 'Вконт',
  },
  {
    key: 15,
    name: 'Вконт',
  },
  {
    key: 16,
    name: 'Вконт',
  },
];
const itemsForSearch: elementSearch[] = [
  {
    name: 'Лайки',
    logo: '../../public/vkIconForSearchResults.svg',
  },
  {
    name: 'Лайки',
    logo: '../../public/vkIconForSearchResults.svg',
  },
  {
    name: 'Лайки',
    logo: '../../public/vkIconForSearchResults.svg',
  },
  {
    name: 'Лайки',
    logo: '../../public/vkIconForSearchResults.svg',
  },
  {
    name: 'Лайки',
    logo: '../../public/vkIconForSearchResults.svg',
  },
  {
    name: 'Лайки',
    logo: '../../public/vkIconForSearchResults.svg',
  },
  {
    name: 'Лайки',
    logo: '../../public/vkIconForSearchResults.svg',
  },
  {
    name: 'Лайки',
    logo: '../../public/vkIconForSearchResults.svg',
  },
];
export default function BurgerMenu({
  open,
  handleOpenBurger,
}: {
  open: boolean;
  handleOpenBurger: () => void;
}) {
  const [inputValue, setinputValue] = useState('');
  const [isOpenListOptions, setisOpenListOptions] = useState({
    active: false,
    number: 0,
  });
  function handleChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setinputValue(event.target.value);
  }
  function handleClearInput() {
    setinputValue('');
  }

  const handleOpenListOptions = (elementProps: elementIcon) => {
    const { key } = elementProps;
    if (isOpenListOptions.active === true) {
      setisOpenListOptions({ active: false, number: 0 });
    } else {
      setisOpenListOptions({ active: true, number: key });
    }
  };

  return (
    <div
      className={classNames({
        [styles.burgerMenu__wrapperOpened]: open,
        [styles.burgerMenu__wrapper]: !open,
      })}
    >
      <div className={styles.burgerMenu__content}>
        <div className={styles.burgerMenu__header}>
          <div
            className={styles.burgerMenu__close}
            onClick={handleOpenBurger}
          ></div>
        </div>
        <form action='1' className={styles.burgerMenu__search}>
          <div className={styles.burgerMenu__searchIcon}></div>
          <input
            type='text'
            onChange={handleChange}
            value={inputValue}
            className={styles.burgerMenu__input}
          ></input>
          <button className={styles.burgerMenu__cancelSearch}>
            Отмена поиска
          </button>
          <div
            className={styles.burgerMenu__searchResultsItemClose}
            onClick={handleClearInput}
          ></div>

          <button type='submit' className={styles.burgerMenu__submit}>
            Найти
          </button>
          <div className={styles.burgerMenu__itemsSearchWrapper}>
            {itemsForSearch.map((el, index) => (
              <div key={index} className={styles.burgerMenu__searchResultsItem}>
                <div className={styles.burgerMenu__searchResultsItemIcon}></div>
                <div className={styles.burgerMenu__searchResultsItemText}>
                  <h3 className={styles.burgerMenu__searchResultsItemName}>
                    {el.name}
                  </h3>
                  <p className={styles.burgerMenu__searchResultsItemPrice}>
                    11,
                    <p
                      className={
                        styles.burgerMenu__searchResultsItemPriceDothSpan
                      }
                    >
                      30 -
                    </p>
                    14,
                    <p
                      className={
                        styles.burgerMenu__searchResultsItemPriceDothSpan
                      }
                    >
                      24
                    </p>
                    ₽
                    <span
                      className={styles.burgerMenu__searchResultsItemPriceSpan}
                    >
                      / 100 шт
                    </span>
                  </p>
                </div>
                <div
                  className={styles.burgerMenu__searchResultsItemCloseIcon}
                ></div>
              </div>
            ))}
          </div>
        </form>

        <nav className={styles.burgerMenu__nav}>
          <div className={styles.burgerMenu__navFirstLine}>
            <li className={styles.burgerMenu__nevItem}>Акции</li>
            <li className={styles.burgerMenu__nevItem}>Цены</li>
            <li className={styles.burgerMenu__nevItem}>Оплата</li>
          </div>
          <div className={styles.burgerMenu__navSecondLine}>
            <li className={styles.burgerMenu__nevItem}>Статьи</li>
            <li className={styles.burgerMenu__nevItem}>Отзывы</li>
            <li className={styles.burgerMenu__nevItem}>Контакты</li>
          </div>
        </nav>
        <div className={styles.burgerMenu__items}>
          {elementsMenu.map((el) => (
            <div key={el.key} className={styles.burgerMenu__itemContainer}>
              <div className={styles.burgerMenu__item}>
                <div className={styles.burgerMenu__itemLogo}></div>
                <div className={styles.burgerMenu__itemWrapper}>
                  <p className={styles.burgerMenu__itemName}>ВКонтакте</p>
                  <div
                    onClick={(event) => handleOpenListOptions(el)}
                    className={classNames({
                      [styles.burgerMenu__itemArrowUp]:
                        isOpenListOptions.active === true &&
                        isOpenListOptions.number === el.key,
                      [styles.burgerMenu__itemArrowDown]: !(
                        isOpenListOptions.active === true &&
                        isOpenListOptions.number === el.key
                      ),
                    })}
                  ></div>
                </div>
              </div>
              <div
                className={classNames({
                  [styles.burgerMenu__listOptionsOpened]:
                    isOpenListOptions.active === true &&
                    isOpenListOptions.number === el.key,
                  [styles.burgerMenu__listOptions]: !(
                    isOpenListOptions.active === true &&
                    isOpenListOptions.number === el.key
                  ),
                })}
              >
                {itemsForSearch.map((el, index) => (
                  <div key={index} className={styles.burgerMenu__option}>
                    <div className={styles.burgerMenu__optionIcon}></div>
                    <div className={styles.burgerMenu__optionText}>
                      <h3 className={styles.burgerMenu__optionName}>
                        {el.name}
                      </h3>
                      <p className={styles.burgerMenu__optionPrice}>
                        11,
                        <p className={styles.burgerMenu__optionPriceDothSpan}>
                          30 -
                        </p>
                        14,
                        <p className={styles.burgerMenu__optionPriceDothSpan}>
                          24
                        </p>
                        ₽
                        <span className={styles.burgerMenu__optionPriceSpan}>
                          / 100 шт
                        </span>
                      </p>
                    </div>
                    <div className={styles.burgerMenu__optionIconClose}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
