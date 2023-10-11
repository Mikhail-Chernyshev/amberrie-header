import React, { MouseEvent, useState } from 'react';
import styles from '../burgerMenu.module.css';
interface ElementProps {
  key: number;
  name: string;
}
interface ElementSearch {
  name: string;
  logo: string;
}

export default function BurgerMenu({
  open,
  handleOpenBurger,
}: {
  open: boolean;
  handleOpenBurger: () => void;
}) {
  const [isFocusOnInput, setisFocusOnInput] = useState(false);
  const [isOpenListOptions, setisOpenListOptions] = useState({
    active: false,
    number: 0,
  });
  function handleFocus() {
    setisFocusOnInput(!isFocusOnInput);
  }
  const handleOpenListOptions = (
    event: MouseEvent<HTMLDivElement>,
    elementProps: ElementProps
  ) => {
    const { key, name } = elementProps;
    if (isOpenListOptions.active === true) {
      setisOpenListOptions({ active: false, number: 0 });
    } else {
      setisOpenListOptions({ active: true, number: key });
    }
  };

  const elementsMenu: ElementProps[] = [
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
  const itemsForSearch: ElementSearch[] = [
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
  return (
    <div
      className={
        open ? styles.burgerMenu__wrapperOpened : styles.burgerMenu__wrapper
      }
    >
      <div className={styles.burgerMenu__content}>
        <div className={styles.burgerMenu__header}>
          <div
            className={styles.burgerMenu__close}
            onClick={handleOpenBurger}
          ></div>
          <button
            className={
              isFocusOnInput
                ? styles.burgerMenu__cancelSearchActive
                : styles.burgerMenu__cancelSearch
            }
          >
            Отмена поиска
          </button>
        </div>
        <form action='1' className={styles.burgerMenu__search}>
          <div className={styles.burgerMenu__searchIcon}></div>
          <input
            type='text'
            onFocus={handleFocus}
            onBlur={handleFocus}
            className={styles.burgerMenu__input}
          ></input>
          <div
            className={
              isFocusOnInput
                ? styles.burgerMenu__searchResultsItemCloseActive
                : styles.burgerMenu__searchResultsItemClose
            }
          ></div>

          <div></div>
          <button
            type='submit'
            className={
              isFocusOnInput
                ? styles.burgerMenu__submitActive
                : styles.burgerMenu__submit
            }
          >
            Найти
          </button>
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
                    onClick={(event) => handleOpenListOptions(event, el)}
                    className={
                      isOpenListOptions.active === true &&
                      isOpenListOptions.number === el.key
                        ? styles.burgerMenu__itemArrowUp
                        : styles.burgerMenu__itemArrowDown
                    }
                  ></div>
                </div>
              </div>
              <div
                className={
                  isOpenListOptions.active === true &&
                  isOpenListOptions.number === el.key
                    ? styles.burgerMenu__listOptionsOpened
                    : styles.burgerMenu__listOptions
                }
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
