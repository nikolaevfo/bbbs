import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function WhereToGoCard({ card }) {
  return (
    <article className="card-container card-container_type_article">
      <div className="card card_color">
        {card.choosingByMentor && <p className="rubric card__rubric">Выбор наставника</p>}
        <div className="card__title-wrap">
          <h2 className="section-title card__title">{card.title}</h2>
          <p className="caption card__title-caption">{card.place}</p>
        </div>
        <Link to={card.url} className="link card__link">
          перейти на сайт
        </Link>
      </div>

      <div className="card card_content_annotation">
        <div className="card__content">
          {card.choosingByMentor && (
            <p className="caption card__annotation-caption">{card.annotation}</p>
          )}

          <div className="card__annotation">
            <p className="paragraph card__paragraph">{card.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

WhereToGoCard.defaultProps = {
  card: {},
};

WhereToGoCard.propTypes = {
  card: PropTypes.instanceOf(Object),
};

export default WhereToGoCard;
