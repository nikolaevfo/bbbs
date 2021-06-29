import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CurrentContext } from '../contexts/CurrentContext';

import WhereToGoCard from './WhereToGoCard';

function WhereToGo({ onWhereToGoInit, whereToGoCardsData, whereToGoTagsData }) {
  // перемотка в начало страницы
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    onWhereToGoInit();
  }, []);

  const context = React.useContext(CurrentContext);

  const [tagChecked, setTagChecked] = useState('Все');
  const [whereToGoCardsWithoutMainCard, setWhereToGoCardsWithoutMainCard] = useState([]);
  const [whereToGoCardsFitered, setWhereToGoCardsFitered] = useState([]);
  const [mainCard, setMainCard] = useState([]);

  // установка главной карточки
  React.useEffect(() => {
    setMainCard(whereToGoCardsData.find((item) => item.choosingByMentor));
  }, [whereToGoCardsData]);

  React.useEffect(() => {
    const newArray = whereToGoCardsData.filter((item) => item.id !== mainCard.id);
    setWhereToGoCardsWithoutMainCard(newArray);
  }, [mainCard]);

  React.useEffect(() => {
    setWhereToGoCardsFitered(whereToGoCardsWithoutMainCard);
    setTagChecked('Все');
  }, [whereToGoCardsWithoutMainCard]);

  function handleTagClick(e) {
    setTagChecked(e.target.id);
    if (e.target.id === 'Все') {
      setWhereToGoCardsFitered(whereToGoCardsWithoutMainCard);
    } else {
      const newArray = whereToGoCardsWithoutMainCard.filter((item) =>
        item.tag.toLowerCase().includes(e.target.id.toLowerCase()),
      );
      setWhereToGoCardsFitered(newArray);
    }
  }

  return (
    <div className="main">
      <section className="lead page__section">
        <h1 className="main-title">Куда пойти</h1>
        <div className="tags">
          <ul className="tags__list tags__list_type_long">
            <li className="tags__list-item">
              <button
                className={`button tags__button ${tagChecked === 'Все' && 'tags__button_active'}`}
                type="button"
                onClick={handleTagClick}
                id="Все"
              >
                Все
              </button>
            </li>
            {whereToGoTagsData.map((item) => (
              <li className="tags__list-item" key={item}>
                <button
                  className={`button tags__button ${item === tagChecked && 'tags__button_active'}`}
                  type="button"
                  onClick={handleTagClick}
                  id={item}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {context.isLoggedIn && (
          <div className="card place-card">
            <h2 className="section-title place-card__text">
              Если вы были в интересном месте и хотите порекомендовать его другим наставникам –
              <button type="button" className="place-card__span-accent">
                заполните форму
              </button>
              , и мы добавим вашу рекомендацию.
            </h2>
          </div>
        )}
      </section>

      {mainCard && (
        <section className="main-card page__section">
          <article className="card-container card-container_type_main-article">
            <div className="card card_type_main card_color_yellow">
              <p className="rubric card__rubric">Выбор наставника</p>
              <div className="card__title-wrap">
                <Link to="/place" className="card__link-wrap">
                  <h2 className="section-title card__title">{mainCard.title}</h2>
                </Link>
                <p className="caption card__title-caption">{mainCard.place}</p>
              </div>
              <Link to="/place" className="card__link-wrap card__link-wrap_content_article-img">
                <img src={mainCard.image} alt="Сплав на байдарках" className="card__img" />
              </Link>
              <Link to={mainCard.url} className="link card__link">
                перейти на сайт
              </Link>
            </div>
            <div className="card card_content_annotation card_type_main">
              <div className="card__content">
                <p className="caption card__annotation-caption">{mainCard.annotation}</p>
                <div className="card__annotation card__annotation_position_main-card">
                  <p className="paragraph card__paragraph">{mainCard.description}</p>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      <section className="cards-grid page__section">
        {whereToGoCardsFitered.map((item) => (
          <WhereToGoCard key={item.id} id={item.id} card={item} />
        ))}
      </section>
    </div>
  );
}

WhereToGo.defaultProps = {
  onWhereToGoInit: undefined,
  whereToGoCardsData: [],
  whereToGoTagsData: [],
};

WhereToGo.propTypes = {
  onWhereToGoInit: PropTypes.func,
  whereToGoCardsData: PropTypes.instanceOf(Array),
  whereToGoTagsData: PropTypes.instanceOf(Array),
};

export default WhereToGo;
