import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <NavLink to="/" className="footer__logo">
        <img
          className="footer__logo-image"
          src="../images/svg/footer-logo.svg"
          alt="Логотип Старшие Братья Старшие Сестры России"
        />
      </NavLink>
      <button className="button footer__button" type="button">
        Помочь деньгами
      </button>
      <div className="footer__column footer__column_content_concept">
        <p className="footer__brand">&copy; Старшие Братья Старшие Сестры</p>
        <div className="footer__copyright">
          <p className="footer__authors">
            {'Разработка – студенты '}
            <a
              href="https://praktikum.yandex.ru/"
              className="footer__production"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </p>
          <p className="footer__design">
            Концепция и дизайн –
            <a
              href="https://krkr.design/"
              className="footer__production"
              target="_blank"
              rel="noreferrer"
            >
              krkr.design
            </a>
          </p>
        </div>
      </div>
      <nav className="footer__column footer__column_content_info">
        <ul className="footer__column-list">
          <li className="footer__column-links">
            <NavLink to="/about" className="footer__column-link">
              о проекте
            </NavLink>
          </li>
          <li className="footer__column-links">
            <NavLink to="/calendar" className="footer__column-link">
              календарь
            </NavLink>
          </li>
          <li className="footer__column-links">
            <NavLink to="/place" className="footer__column-link">
              куда пойти
            </NavLink>
          </li>
          <li className="footer__column-links">
            <NavLink to="/questions" className="footer__column-link">
              вопросы
            </NavLink>
          </li>
          <li className="footer__column-links">
            <NavLink to="/read-watch-main" className="footer__column-link">
              читать и смотреть
            </NavLink>
          </li>
          <li className="footer__column-links">
            <NavLink to="/rights" className="footer__column-link">
              права детей
            </NavLink>
          </li>
          <li className="footer__column-links">
            <NavLink to="/stories" className="footer__column-link">
              истории
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="footer__column footer__column_content_social">
        <ul className="footer__column-list">
          <li className="footer__column-links">
            <a
              href="https://www.facebook.com/BigBrothers.BigSisters.Russia/"
              className="footer__column-link"
              target="_blank"
              rel="noreferrer"
            >
              facebook
            </a>
          </li>
          <li className="footer__column-links">
            <a
              href="https://vk.com/big.brothers.big.sisters"
              className="footer__column-link"
              target="_blank"
              rel="noreferrer"
            >
              vkontakte
            </a>
          </li>
          <li className="footer__column-links">
            <a
              href="https://www.instagram.com/nastavniki_org/"
              className="footer__column-link"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </li>
          <li className="footer__column-links">
            <a
              href="https://www.youtube.com/user/Nastavniki/"
              className="footer__column-link"
              target="_blank"
              rel="noreferrer"
            >
              youtube
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
