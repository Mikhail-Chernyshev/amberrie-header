'use client';
import styles from '../header.module.scss';
import { useEffect, useState } from 'react';
import Popup from './popup';
import PopupSmall from './popupSmall';
import BurgerMenu from './burgerMenu';
import classNames from 'classnames';

interface elementIcon {
  key: number;
  name: string;
}
interface elementSearch {
  name: string;
  logo: string;
}
const iconsFirstLine: elementIcon[] = [
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
];

const iconsSecondLine: elementIcon[] = [
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
const iconsSecondLineTable: elementIcon[] = [
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
    name: 'Одноклассники лайки на комментарии',
    logo: '../../public/vkIconForSearchResults.svg',
  },
  {
    name: 'Одноклассники лайки на комментарии',
    logo: '../../public/vkIconCircle.svg',
  },
  {
    name: 'Одноклассники лайки на комментарии',
    logo: '../../public/vkIconCircle.svg',
  },
  {
    name: 'Одноклассники лайки на комментарии',
    logo: '../../public/vkIconCircle.svg',
  },
  {
    name: 'Одноклассники лайки ',
    logo: '../../public/vkIconCircle.svg',
  },
  {
    name: 'Одноклассники лайки на комментарии',
    logo: '../../public/vkIconCircle.svg',
  },
  {
    name: 'Одноклассники лайки на комментарии',
    logo: '../../public/vkIconCircle.svg',
  },
  {
    name: 'Одноклассники лайки на комментарии',
    logo: '../../public/vkIconCircle.svg',
  },
];
export default function Header() {
  const [openAllSocials, setopenAllSocials] = useState(false);
  const [isFocusOnInput, setisFocusOnInput] = useState(false);
  const [inputValue, setinputValue] = useState('Лайки');
  const [isSearchMobile, setisSearchMobile] = useState(false);
  const [isOpenBurger, setisOpenBurger] = useState(false);

  function handleOpenBurger() {
    setisOpenBurger(!isOpenBurger);
  }
  function handleChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setinputValue(event.target.value);
  }
  function handleClearInput() {
    setinputValue('');
  }
  function clickOnSearchMobile() {
    setisSearchMobile(!isSearchMobile);
  }

  const handleFocus = () => {
    setisFocusOnInput(true);
  };
  const handleBlur = () => {
    setisFocusOnInput(false);
    setisSearchMobile(false);
  };
  function handleClickOnAllIcons() {
    setopenAllSocials(!openAllSocials);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__navContainer}>
          <nav className={styles.header__nav}>
            <li className={styles.header__item}>акции</li>
            <li className={styles.header__item}>цены</li>
            <li className={styles.header__item}>оплата</li>
            <li className={styles.header__item}>статьи</li>
            <li className={styles.header__item}>отзывы</li>
            <li className={styles.header__item}>контакты</li>
          </nav>
        </div>
        <div
          className={classNames({
            [styles.header__searchContainerActive]: openAllSocials,
            [styles.header__searchContainer]: !openAllSocials,
          })}
        >
          <div
            onClick={handleOpenBurger}
            className={styles.header__burgerButton}
          ></div>
          <BurgerMenu handleOpenBurger={handleOpenBurger} open={isOpenBurger} />
          <div className={styles.header__logo}></div>
          <div className={styles.header__icons}>
            {/* если это десктоп, то показываем такую первую линию */}
            <div className={styles.header__iconsFirstLine}>
              {iconsFirstLine.map((element) => (
                <div className={styles.header__social} key={element.key}>
                  <div className={styles.header__iconSocialPopup}>
                    <Popup name={element.name} />
                  </div>
                  <div className={styles.header__socialIcon}></div>
                  <p className={styles.header__socialName}>{element.name}</p>
                </div>
              ))}
            </div>
            {/* если это планшет, то показываем такую первую линию */}
            <div className={styles.header__iconsFirstLineTable}>
              {iconsFirstLine.slice(0, 4).map((element) => (
                <div className={styles.header__social} key={element.key}>
                  <div className={styles.header__socialIcon}></div>
                  <p
                    className={classNames({
                      [styles.header__socialNameVisible]: openAllSocials,
                      [styles.header__socialName]: !openAllSocials,
                    })}
                  >
                    {element.name}
                  </p>
                </div>
              ))}
            </div>
            {/* если открыты все иконки на декстопе, то показываем такую вторую линию */}
            {openAllSocials && (
              <div className={styles.header__iconsSecondLineDesktop}>
                {iconsSecondLine.map((element) => (
                  <div className={styles.header__social} key={element.key}>
                    <div className={styles.header__iconSocialPopup}>
                      <Popup name={element.name} />
                    </div>
                    <div className={styles.header__socialIcon}></div>
                    <p className={styles.header__socialName}>{element.name}</p>
                  </div>
                ))}
              </div>
            )}
            {/* если открыты все иконки на планшете, то показываем такую вторую линию */}
            {openAllSocials && (
              <div className={styles.header__iconsSecondLine}>
                {iconsSecondLineTable.map((element) => (
                  <div className={styles.header__social} key={element.key}>
                    <div className={styles.header__socialIcon}></div>
                    <p
                      className={classNames({
                        [styles.header__socialNameVisible]: openAllSocials,
                        [styles.header__socialName]: !openAllSocials,
                      })}
                    >
                      {element.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.header__wrapperButton}>
            <button
              onClick={handleClickOnAllIcons}
              className={classNames({
                [styles.header__iconsButtonActive]: openAllSocials,
                [styles.header__iconsButton]: !openAllSocials,
              })}
            >
              <div className={styles.header__popupSmallWrapper}>
                <PopupSmall
                  items={iconsSecondLine}
                  withArrow={true}
                  thirdLevel={false}
                />
              </div>
            </button>
            {!openAllSocials && (
              <p className={styles.header__socialMore}>Ещё...</p>
            )}
            {openAllSocials && (
              <p className={styles.header__buttonHide}>Скрыть</p>
            )}
          </div>
          <div className={styles.header__searchWrapper}></div>

          <form
            action='1'
            className={classNames({
              [styles.header__searchActive]: isFocusOnInput,
              [styles.header__search]: !isFocusOnInput,
            })}
          >
            <div className={styles.header__searchIcon}></div>
            <input
              onFocus={handleFocus}
              type='text'
              className={styles.header__input}
              value={inputValue}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            {inputValue === '' && (
              <span className={styles.header__placeholder}>
                Что накручиваем?
              </span>
            )}

            {isFocusOnInput && (
              <div
                onClick={handleClearInput}
                className={styles.header__inputIconClear}
              ></div>
            )}
            <div
              className={classNames({
                [styles.header__searchResultsVisible]: isFocusOnInput,
                [styles.header__searchResults]: !isFocusOnInput,
              })}
            >
              {itemsForSearch.map((el, index) => (
                <div key={index} className={styles.header__searchResultsItem}>
                  <div className={styles.header__searchResultsItemIcon}></div>
                  <div className={styles.header__searchResultsItemText}>
                    <h3 className={styles.header__searchResultsItemName}>
                      {el.name}
                    </h3>
                    <p className={styles.header__searchResultsItemPrice}>
                      11,
                      <p
                        className={
                          styles.header__searchResultsItemPriceDothSpan
                        }
                      >
                        30 -
                      </p>
                      14,
                      <p
                        className={
                          styles.header__searchResultsItemPriceDothSpan
                        }
                      >
                        24
                      </p>
                      ₽
                      <span
                        className={styles.header__searchResultsItemPriceSpan}
                      >
                        / 100 шт
                      </span>
                    </p>
                  </div>
                  <div className={styles.header__searchResultsItemClose}></div>
                </div>
              ))}
            </div>

            <button type='button' className={styles.header__submit}>
              Найти
            </button>
          </form>
          {isFocusOnInput && (
            <div
              onClick={handleBlur}
              className={styles.header__searchOverlay}
            ></div>
          )}
          <div
            className={classNames({
              [styles.header__notificationsActive]: isFocusOnInput,
              [styles.header__notifications]: !isFocusOnInput,
            })}
          >
            <div
              onClick={clickOnSearchMobile}
              className={classNames({
                [styles.header__searchIconActive]: isSearchMobile,
                [styles.header__searchIconMobile]: !isSearchMobile,
              })}
            ></div>
            <div className={styles.header__notificationItemBell}>
              <div className={styles.header__notificationItemBellCount}>3</div>
            </div>
            <div className={styles.header__notificationItemCart}>
              <div className={styles.header__notificationItemBellCount}>33</div>
            </div>
            <div className={styles.header__notificationItemUser}></div>
          </div>
        </div>
        {/* mobile icons first group */}
        {!isSearchMobile && (
          <div className={styles.header__iconsFirstLineMobile}>
            {iconsFirstLine.slice(0, 5).map((element) => (
              <div className={styles.header__social} key={element.key}>
                <div className={styles.header__socialIcon}></div>
                <p
                  className={classNames({
                    [styles.header__socialNameVisible]: openAllSocials,
                    [styles.header__socialName]: !openAllSocials,
                  })}
                >
                  {element.name}
                </p>
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button
                onClick={handleClickOnAllIcons}
                className={classNames({
                  [styles.header__iconsButtonActiveMobile]: openAllSocials,
                  [styles.header__iconsButtonMobile]: !openAllSocials,
                })}
              ></button>
              {openAllSocials && (
                <p
                  className={styles.header__buttonHide}
                  style={{ visibility: 'visible' }}
                >
                  Скрыть
                </p>
              )}
            </div>
          </div>
        )}
        {/* mobile icons second group */}
        {openAllSocials && (
          <div className={styles.header__iconsSecondLineTable}>
            {iconsSecondLineTable.slice(1).map((element) => (
              <div className={styles.header__social} key={element.key}>
                <div className={styles.header__socialIcon}></div>
                <p
                  className={classNames({
                    [styles.header__socialNameVisible]: openAllSocials,
                    [styles.header__socialName]: !openAllSocials,
                  })}
                >
                  {element.name}
                </p>
              </div>
            ))}
          </div>
        )}
        {/* при активном инпуте в мобильной версии открывается форма и список подсказок */}
        {isSearchMobile && (
          <form action='1' className={styles.header__searchActive}>
            <div className={styles.header__searchIcon}></div>
            <input
              type='text'
              className={styles.header__input}
              value={inputValue}
              onChange={handleChange}
            ></input>

            <div
              onClick={handleClearInput}
              className={styles.header__inputIconClear}
            ></div>
            <div className={styles.header__searchResultsVisible}>
              {itemsForSearch.map((el, index) => (
                <div key={index} className={styles.header__searchResultsItem}>
                  <div className={styles.header__searchResultsItemIcon}></div>
                  <div className={styles.header__searchResultsItemText}>
                    <h3 className={styles.header__searchResultsItemName}>
                      {el.name}
                    </h3>
                    <p className={styles.header__searchResultsItemPrice}>
                      11,
                      <p
                        className={
                          styles.header__searchResultsItemPriceDothSpan
                        }
                      >
                        30 -
                      </p>
                      14,
                      <p
                        className={
                          styles.header__searchResultsItemPriceDothSpan
                        }
                      >
                        24
                      </p>
                      ₽
                      <span
                        className={styles.header__searchResultsItemPriceSpan}
                      >
                        / 100 шт
                      </span>
                    </p>
                  </div>
                  <div className={styles.header__searchResultsItemClose}></div>
                </div>
              ))}
            </div>

            <button type='submit' className={styles.header__submit}>
              Найти
            </button>
          </form>
        )}
        {/* оверлэй во время поиска в мобильном */}
        {isSearchMobile && (
          <div
            onClick={handleBlur}
            className={styles.header__searchOverlayMobile}
          ></div>
        )}

        <div
          className={classNames({
            [styles.header__mainBlur]: isFocusOnInput,
            [styles.header__mainBlurMobile]: isSearchMobile,
            [styles.header__main]: !isSearchMobile,
          })}
        >
          <div className={styles.header__content}>
            <h1 className={styles.header__title}>
              Накрутка и продвижение в социальных сетях
            </h1>
            <h2 className={styles.header__subtitle}>
              СММ накрутка подписчиков, лайков, просмотров по приятной цене. В
              продвижении задействуется реалистичная аудитория. Здесь качество,
              гарантия и безопасность на всех этапах!
            </h2>
            <div className={styles.header__subtitleContainerMobile}>
              <h2 className={styles.header__subtitle}>
                СММ накрутка подписчиков, лайков, просмотров... В продвижении
                реалистичная аудитория.
              </h2>
              <h2 className={styles.header__subtitle}>
                Здесь безопасность на всех этапах!
              </h2>
            </div>

            <div className={styles.header__subtitleContainer}>
              <h2 className={styles.header__subtitle}>
                СММ накрутка подписчиков, лайков, просмотров по приятной цене.
              </h2>
              <h2 className={styles.header__subtitle}>
                В продвижении задействуется реалистичная аудитория.
              </h2>
              <h2 className={styles.header__subtitle}>
                Здесь качество, гарантия и безопасность на всех этапах!
              </h2>
            </div>
            {/* промокод десктоп и планшет */}
            <div className={styles.header__promoContainer}>
              <div className={styles.header__fire}>
                <p className={styles.header__fireText}>Ваш премиум промокод</p>
                <p className={styles.header__fireNumber}>001</p>
              </div>
              <button className={styles.headerStartButton}>
                Начать накрутку
              </button>
            </div>
          </div>
          <div className={styles.header__image}></div>
          {/* промокод мобильный */}
          <div className={styles.header__promoContainerMobile}>
            <div className={styles.header__fire}>
              <p className={styles.header__fireText}>Ваш премиум промокод</p>
              <p className={styles.header__fireNumber}>001</p>
            </div>
            <button className={styles.headerStartButton}>
              Начать накрутку
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
