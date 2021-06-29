import React from 'react';
import { NavLink } from 'react-router-dom';

function BlockAbout() {
  return (
    <NavLink to="/about" className="card card_color_green stub card__link-wrap">
      <div className="stub__upper-element">
        <img
          src="../images/svg/calendar_logo.svg"
          alt="Логотип Старшие Братья Старшие Сестры России"
          className="stub__logo"
        />
      </div>
      <div className="stub__content">
        <h2 className="section-title stub__text">
          Наставники.про – цифоровая информационная платформа огрганизации «Старшие Братья Старшие
          Сестры». Созданная для поддержки наставников программы.
        </h2>
      </div>
    </NavLink>
  );
}

export default BlockAbout;
