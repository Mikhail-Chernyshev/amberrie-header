'use client';
import styles from './header.module.scss';
import { useEffect, useRef, useState } from 'react';
import Popup from './popup';
import PopupSmall from './popupSmall';
import { MouseEvent, ReactElement } from 'react';
import { url } from 'inspector';
import Head from 'next/head';
import BurgerMenu from './burgerMenu';

interface ElementProps {
  key: number;
  name: string;
}
interface ElementSearch {
  name: string;
  logo: string;
}

export default function Header() {
  const [openAllSocials, setopenAllSocials] = useState(false);
  const [hovered, setHovered] = useState({ active: false, number: 0 });
  const [isFocusOnInput, setisFocusOnInput] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window?.innerWidth);
  const [inputValue, setinputValue] = useState('');
  const [isSearchMobile, setisSearchMobile] = useState(false);
  const [isOpenBurger, setisOpenBurger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  function handleOpenBurger() {
    setisOpenBurger(!isOpenBurger);
  }
  function handleChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setinputValue(event.target.value);
  }
  function clickOnSearchMobile() {
    setisSearchMobile(!isSearchMobile);
  }
  const handleMouseEnterOnButtonAllSocials = () => {
    setIsPopupVisible(true);
  };

  const handleMouseEnterOffPopupAllSocials = () => {
    setIsPopupVisible(false);
  };
  const handleFocus = () => {
    setisFocusOnInput(true);
  };
  const handleBlur = () => {
    setisFocusOnInput(false);
  };

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
  function handleClickOnAllIcons() {
    setopenAllSocials(!openAllSocials);
  }
  const elementsFirst: ElementProps[] = [
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

  const elementsSecond: ElementProps[] = [
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
  const elementsSecondTable: ElementProps[] = [
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
  console.log(inputValue);
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/amberrie-test/src/app/globals.css' />
      </Head>

      <header className={styles.header}>
        {screenWidth > 800 && (
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
        )}
        <div
          className={
            openAllSocials
              ? styles.header__searchContainer
              : styles.header__searchContainer
          }
          style={
            openAllSocials && screenWidth > 800
              ? { height: 210, marginBottom: 0 }
              : screenWidth < 800
              ? { height: 44 }
              : screenWidth && openAllSocials
              ? { height: 44 }
              : { height: 70 }
          }
        >
          <div
            onClick={handleOpenBurger}
            className={styles.header__burgerButton}
          ></div>
          <BurgerMenu handleOpenBurger={handleOpenBurger} open={isOpenBurger} />
          <div className={styles.header__logo}></div>

          {isFocusOnInput && screenWidth < 1023 ? (
            ''
          ) : (
            <div className={styles.header__icons}>
              {screenWidth > 1023 ? (
                <div className={styles.header__iconsFirstLine}>
                  {elementsFirst.map((element) => (
                    <div
                      onMouseEnter={(event) => handleMouseEnter(event, element)}
                      onMouseLeave={handleMouseLeave}
                      className={styles.header__social}
                      key={element.key}
                    >
                      {hovered.active === true &&
                        hovered.number === element.key && (
                          <Popup
                            screenWidth={screenWidth}
                            name={element.name}
                          />
                        )}
                      <div className={styles.header__socialIcon}></div>
                      <p className={styles.header__socialName}>
                        {element.name}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.header__iconsFirstLineTable}>
                  {elementsFirst.slice(0, 4).map((element) => (
                    <div
                      onMouseEnter={(event) => handleMouseEnter(event, element)}
                      onMouseLeave={handleMouseLeave}
                      className={styles.header__social}
                      key={element.key}
                    >
                      {hovered.active === true &&
                        hovered.number === element.key && (
                          <Popup
                            screenWidth={screenWidth}
                            name={element.name}
                          />
                        )}
                      <div className={styles.header__socialIcon}></div>
                      <p
                        style={openAllSocials ? { visibility: 'visible' } : {}}
                        className={styles.header__socialName}
                      >
                        {element.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {openAllSocials && screenWidth > 1023 ? (
                <div className={styles.header__iconsSecondLine}>
                  {elementsSecond.map((element) => (
                    <div
                      onMouseEnter={(event) => handleMouseEnter(event, element)}
                      onMouseLeave={handleMouseLeave}
                      className={styles.header__social}
                      key={element.key}
                    >
                      {hovered.active === true &&
                        hovered.number === element.key && (
                          <Popup
                            screenWidth={screenWidth}
                            name={element.name}
                          />
                        )}
                      <div className={styles.header__socialIcon}></div>
                      <p
                        className={
                          hovered.active === true &&
                          hovered.number === element.key
                            ? styles.header__socialNameDisabled
                            : styles.header__socialName
                        }
                      >
                        {element.name}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                openAllSocials &&
                screenWidth < 1023 && (
                  <div className={styles.header__iconsSecondLine}>
                    {elementsSecondTable.map((element) => (
                      <div
                        onMouseEnter={(event) =>
                          handleMouseEnter(event, element)
                        }
                        onMouseLeave={handleMouseLeave}
                        className={styles.header__social}
                        key={element.key}
                      >
                        {hovered.active === true &&
                          hovered.number === element.key && (
                            <Popup
                              screenWidth={screenWidth}
                              name={element.name}
                            />
                          )}
                        <div className={styles.header__socialIcon}></div>
                        <p
                          className={styles.header__socialName}
                          style={{ visibility: 'visible' }}
                        >
                          {element.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          )}
          {isFocusOnInput && screenWidth > 1023 ? (
            <button
              onMouseEnter={handleMouseEnterOnButtonAllSocials}
              onClick={handleClickOnAllIcons}
              className={
                openAllSocials
                  ? styles.header__iconsButtonActive
                  : styles.header__iconsButton
              }
            >
              {isPopupVisible && !openAllSocials && (
                <div
                  onMouseEnter={handleMouseEnterOnButtonAllSocials}
                  onMouseLeave={handleMouseEnterOffPopupAllSocials}
                >
                  <PopupSmall
                    items={elementsSecond}
                    withArrow={true}
                    screenWidth={screenWidth}
                    thirdLevel={false}
                  />
                </div>
              )}
            </button>
          ) : !isFocusOnInput ? (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button
                onMouseEnter={handleMouseEnterOnButtonAllSocials}
                onClick={handleClickOnAllIcons}
                className={
                  openAllSocials
                    ? styles.header__iconsButtonActive
                    : styles.header__iconsButton
                }
              >
                {isPopupVisible && !openAllSocials && (
                  <div
                    onMouseEnter={handleMouseEnterOnButtonAllSocials}
                    onMouseLeave={handleMouseEnterOffPopupAllSocials}
                  >
                    {screenWidth > 1023 && (
                      <PopupSmall
                        screenWidth={screenWidth}
                        items={elementsSecond}
                        withArrow={true}
                        thirdLevel={false}
                      />
                    )}
                  </div>
                )}
              </button>
              {openAllSocials && screenWidth > 1023 && (
                <p
                  className={styles.header__buttonHide}
                  style={{ visibility: 'visible' }}
                >
                  Скрыть
                </p>
              )}
            </div>
          ) : (
            ''
          )}
          <form
            action='1'
            className={
              isFocusOnInput
                ? styles.header__searchActive
                : styles.header__search
            }
          >
            {screenWidth < 1023 && screenWidth > 800 ? (
              <div
                onClick={handleFocus}
                className={styles.header__searchIcon}
              ></div>
            ) : (
              <div className={styles.header__searchIcon}></div>
            )}

            <input
              type='text'
              className={styles.header__input}
              value={inputValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></input>
            {isFocusOnInput && inputValue === '' && (
              <span className={styles.header__placeholder}>
                Что накручиваем?
              </span>
            )}

            {screenWidth < 1023 && isFocusOnInput && (
              <div
                onClick={handleBlur}
                className={styles.header__inputIconClear}
              ></div>
            )}
            <div
              className={
                isFocusOnInput
                  ? styles.header__searchResultsVisible
                  : styles.header__searchResults
              }
            >
              {itemsForSearch.map((el, index) => (
                <div key={index} className={styles.header__searchResultsItem}>
                  <div
                    className={styles.header__searchResultsItemIcon}
                    // style={{
                    //   backgroundImage: `url(${el.logo})`,
                    //   width: 28,
                    //   height: 28,
                    // }}
                  ></div>
                  <div className={styles.header__searchResultsItemText}>
                    <h3 className={styles.header__searchResultsItemName}>
                      {el.name}
                    </h3>
                    <p className={styles.header__searchResultsItemPrice}>
                      11,30 - 14,24 ₽
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
          <div
            className={styles.header__notifications}
            style={
              isSearchMobile && screenWidth < 800
                ? { marginLeft: 18, width: 176 }
                : !isSearchMobile && screenWidth > 800
                ? { marginLeft: 10.5 }
                : { marginLeft: 25 }
            }
          >
            {screenWidth < 800 && (
              <div
                onClick={clickOnSearchMobile}
                className={
                  isSearchMobile
                    ? styles.header__searchIconActive
                    : styles.header__searchIcon
                }
              ></div>
            )}
            <div className={styles.header__notificationItemBell}>
              <div className={styles.header__notificationItemBellCount}>3</div>
            </div>
            <div className={styles.header__notificationItemCart}>
              <div className={styles.header__notificationItemBellCount}>3</div>
            </div>
            <div className={styles.header__notificationItemUser}></div>
          </div>
        </div>
        {/* mobile icons */}
        {screenWidth < 800 && !isSearchMobile && (
          <div className={styles.header__iconsFirstLineTable}>
            {elementsFirst.slice(0, 5).map((element) => (
              <div
                onMouseEnter={(event) => handleMouseEnter(event, element)}
                onMouseLeave={handleMouseLeave}
                className={styles.header__social}
                key={element.key}
              >
                <div className={styles.header__socialIcon}></div>
                <p
                  className={styles.header__socialName}
                  style={
                    openAllSocials
                      ? { visibility: 'visible' }
                      : { visibility: 'hidden' }
                  }
                >
                  {element.name}
                </p>
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button
                onMouseEnter={handleMouseEnterOnButtonAllSocials}
                onClick={handleClickOnAllIcons}
                className={
                  openAllSocials
                    ? styles.header__iconsButtonActiveMobile
                    : styles.header__iconsButtonMobile
                }
              ></button>
              {openAllSocials && screenWidth < 800 && (
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
        {isSearchMobile && (
          <form action='1' className={styles.header__searchActive}>
            <div className={styles.header__searchIcon}></div>
            <input
              type='text'
              className={styles.header__input}
              value={inputValue}
              onChange={handleChange}
            ></input>

            {screenWidth < 1023 && isFocusOnInput && (
              <div className={styles.header__inputIconClear}></div>
            )}
            {screenWidth < 800 && isSearchMobile && (
              <div className={styles.header__inputIconClear}></div>
            )}
            <div
              className={
                isFocusOnInput || isSearchMobile
                  ? styles.header__searchResultsVisible
                  : styles.header__searchResults
              }
            >
              {itemsForSearch.map((el, index) => (
                <div key={index} className={styles.header__searchResultsItem}>
                  <div
                    className={styles.header__searchResultsItemIcon}
                    // style={{
                    //   backgroundImage: `url(${el.logo})`,
                    //   width: 28,
                    //   height: 28,
                    // }}
                  ></div>
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
        {screenWidth < 800 && openAllSocials && (
          <div className={styles.header__iconsSecondLineTable}>
            {elementsSecondTable.slice(1).map((element) => (
              <div
                onMouseEnter={(event) => handleMouseEnter(event, element)}
                onMouseLeave={handleMouseLeave}
                className={styles.header__social}
                key={element.key}
              >
                <div className={styles.header__socialIcon}></div>
                <p
                  className={styles.header__socialName}
                  style={
                    openAllSocials
                      ? { visibility: 'visible' }
                      : { visibility: 'hidden' }
                  }
                >
                  {element.name}
                </p>
              </div>
            ))}
          </div>
        )}
        <div
          className={
            isFocusOnInput === true
              ? styles.header__mainBlur
              : isSearchMobile === true
              ? styles.header__mainBlurMobile
              : styles.header__main
          }
        >
          <div className={styles.header__content}>
            <h1 className={styles.header__title}>
              Накрутка и продвижение в социальных сетях
            </h1>
            {screenWidth > 1023 ? (
              <h2 className={styles.header__subtitle}>
                СММ накрутка подписчиков, лайков, просмотров по приятной цене. В
                продвижении задействуется реалистичная аудитория. Здесь
                качество, гарантия и безопасность на всех этапах!
              </h2>
            ) : screenWidth < 800 ? (
              <div className={styles.header__subtitleContainer}>
                <h2 className={styles.header__subtitle}>
                  СММ накрутка подписчиков, лайков, просмотров... В продвижении
                  реалистичная аудитория.
                </h2>
                <h2 className={styles.header__subtitle}>
                  Здесь безопасность на всех этапах!
                </h2>
              </div>
            ) : (
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
            )}
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
          {screenWidth < 800 && (
            <div className={styles.header__promoContainerMobile}>
              <div className={styles.header__fire}>
                <p className={styles.header__fireText}>Ваш премиум промокод</p>
                <p className={styles.header__fireNumber}>001</p>
              </div>
              <button className={styles.headerStartButton}>
                Начать накрутку
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
