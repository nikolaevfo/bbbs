import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useHistory, NavLink } from 'react-router-dom';
import isBackScroll from '../utils/isBackScroll';

function Header() {
  const [headerClasses, setHeaderClasses] = useState({
    header: '',
    menuBurger: '',
    menuListSWrap: 'menu__lists-wrap_hidden',
    menuListSocial: 'menu__list_hidden',
    headerOuted: '',
  });
  // переключение классов мобильной версии меню
  function handleMenuButton() {
    if (headerClasses.header === '') {
      setHeaderClasses({
        ...headerClasses,
        header: 'header_displayed',
        menuBurger: 'menu__burger_active',
        menuListSWrap: '',
        menuListSocial: '',
      });
    } else {
      setHeaderClasses({
        ...headerClasses,
        header: '',
        menuBurger: '',
        menuListSWrap: 'menu__lists-wrap_hidden',
        menuListSocial: 'menu__list_hidden',
      });
    }
  }
  function handleCloseBurgerMenu() {
    setHeaderClasses({
      ...headerClasses,
      header: '',
      menuBurger: '',
      menuListSWrap: 'menu__lists-wrap_hidden',
      menuListSocial: 'menu__list_hidden',
    });
  }
  // реализация появления меню при обратном скролле
  const handleScroll = () => {
    if (isBackScroll()) {
      setHeaderClasses({
        ...headerClasses,
        headerOuted: 'header_outed',
      });
    } else {
      setHeaderClasses({
        ...headerClasses,
        headerOuted: '',
      });
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const history = useHistory();

  function handleProfileButton() {
    handleCloseBurgerMenu();
    history.push('/profile');
  }
  return (
    <header className={`header page__section ${headerClasses.headerOuted} ${headerClasses.header}`}>
      <nav className="menu">
        <NavLink to="/" className="menu__logo" onClick={handleCloseBurgerMenu}>
          наставники.про
        </NavLink>
        <div className={`menu__lists-wrap ${headerClasses.menuListSWrap}`}>
          <ul className="menu__list">
            <li className="menu__list-item">
              <NavLink to="/calendar" className="menu__link" onClick={handleCloseBurgerMenu}>
                Календарь
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink to="/place" className="menu__link" onClick={handleCloseBurgerMenu}>
                Куда пойти
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink to="/questions" className="menu__link" onClick={handleCloseBurgerMenu}>
                Вопросы
              </NavLink>
            </li>
            <li className="menu__list-item menu__dropdown-item">
              <NavLink to="/read-and-watch" className="menu__link" onClick={handleCloseBurgerMenu}>
                Читать и смотреть
              </NavLink>
              <ul className="menu__dropdown-list">
                <li className="menu__dropdown-list-item">
                  <NavLink
                    to="/dictionary"
                    className="link menu__dropdown-link"
                    onClick={handleCloseBurgerMenu}
                  >
                    Справочник
                  </NavLink>
                </li>
                <li className="menu__dropdown-list-item">
                  <NavLink
                    to="/video"
                    className="link menu__dropdown-link"
                    onClick={handleCloseBurgerMenu}
                  >
                    Видео
                  </NavLink>
                </li>
                <li className="menu__dropdown-list-item">
                  <NavLink
                    to="/articles"
                    className="link menu__dropdown-link"
                    onClick={handleCloseBurgerMenu}
                  >
                    Статьи
                  </NavLink>
                </li>
                <li className="menu__dropdown-list-item">
                  <NavLink
                    to="/films"
                    className="link menu__dropdown-link"
                    onClick={handleCloseBurgerMenu}
                  >
                    Фильмы
                  </NavLink>
                </li>
                <li className="menu__dropdown-list-item">
                  <NavLink
                    to="/books"
                    className="link menu__dropdown-link"
                    onClick={handleCloseBurgerMenu}
                  >
                    Книги
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="menu__list-item">
              <NavLink to="/rights" className="menu__link" onClick={handleCloseBurgerMenu}>
                Права детей
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink to="/stories" className="menu__link" onClick={handleCloseBurgerMenu}>
                Истории
              </NavLink>
            </li>
          </ul>
          <ul className={`menu__list menu__list_type_social ${headerClasses.menuListSocial}`}>
            <li className="menu__list-item">
              <NavLink
                to="https://www.facebook.com/BigBrothers.BigSisters.Russia/"
                className="menu__link"
                target="_blank"
                rel="noreferrer"
                onClick={handleCloseBurgerMenu}
              >
                facebook
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink
                to="https://vk.com/big.brothers.big.sisters"
                className="menu__link"
                target="_blank"
                rel="noreferrer"
                onClick={handleCloseBurgerMenu}
              >
                vkontakte
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink
                to="https://www.instagram.com/nastavniki_org/"
                className="menu__link"
                target="_blank"
                rel="noreferrer"
                onClick={handleCloseBurgerMenu}
              >
                instagram
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink
                to="https://www.youtube.com/user/Nastavniki/"
                className="menu__link"
                target="_blank"
                rel="noreferrer"
                onClick={handleCloseBurgerMenu}
              >
                youtube
              </NavLink>
            </li>
          </ul>
        </div>
        <button
          className={`menu__burger ${headerClasses.menuBurger}`}
          type="button"
          onClick={handleMenuButton}
        >
          <span className="menu__burger-line" />
          <span className="menu__burger-line" />
          <span className="menu__burger-line" />
        </button>
        <ul className="menu__button-list">
          <li className="menu__button-item">
            <form className="search" name="search-form">
              <button
                className="menu__button menu__button_type_search search__button"
                type="submit"
                aria-label="Поиск"
                title="Поиск"
              />
              <div className="search__options menu__search-options">
                <input
                  type="text"
                  name="search"
                  placeholder="Поиск"
                  // value=""
                  className="search__input paragraph"
                />
                <ul className="search__option-list">
                  <li className="search__option-item">
                    <NavLink
                      to="/article"
                      className="search__title-link section-title section-title_clickable"
                      onClick={handleCloseBurgerMenu}
                    >
                      Причины подростковой агрессии
                    </NavLink>
                    <NavLink
                      to="/article"
                      className="link search__link"
                      onClick={handleCloseBurgerMenu}
                    >
                      статьи
                    </NavLink>
                  </li>
                  <li className="search__option-item">
                    <NavLink
                      to="/video"
                      className="search__title-link section-title section-title_clickable"
                      onClick={handleCloseBurgerMenu}
                    >
                      Агрессивное поведение детей-сирот
                    </NavLink>
                    <NavLink
                      to="/video"
                      className="link search__link"
                      onClick={handleCloseBurgerMenu}
                    >
                      видео
                    </NavLink>
                  </li>
                  <li className="search__option-item">
                    <NavLink
                      to="/questions"
                      className="search__title-link section-title section-title_clickable"
                      onClick={handleCloseBurgerMenu}
                    >
                      Что делать если ваш младший агрессивно себя ведет, решил закрыть пару?
                    </NavLink>
                    <NavLink
                      to="/questions"
                      className="link search__link"
                      onClick={handleCloseBurgerMenu}
                    >
                      вопросы
                    </NavLink>
                  </li>
                  <li className="search__option-item">
                    <NavLink
                      to="/books"
                      className="search__title-link section-title section-title_clickable"
                      onClick={handleCloseBurgerMenu}
                    >
                      Как реагировать на агрессивное поведения ребенка
                    </NavLink>
                    <NavLink
                      to="/books"
                      className="link search__link"
                      onClick={handleCloseBurgerMenu}
                    >
                      книги
                    </NavLink>
                  </li>
                </ul>
              </div>
            </form>
          </li>
          <li className="menu__button-item">
            <button
              className="menu__button menu__button_type_user"
              type="button"
              aria-label="Личный кабинет"
              title="Личный кабинет"
              onClick={handleProfileButton}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
