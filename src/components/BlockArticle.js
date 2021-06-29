import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function BlockArticle({ article }) {
  return (
    <section className="main-section page__section">
      <article
        className="card card_color_blue card_content_quote"
        style={{ backgroundColor: article.color }}
      >
        <NavLink to="/articles" className="card__link-wrap">
          <h3 className="chapter-title card__quote">{article.title}</h3>
        </NavLink>
        <NavLink to="/articles" className="link card__link">
          читать статью
        </NavLink>
      </article>
    </section>
  );
}

BlockArticle.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    color: PropTypes.string,
    title: PropTypes.string,
  }),
};

BlockArticle.defaultProps = {
  article: {
    id: 41,
    color: '#C8D1FF',
    title:
      'Развитие детей-сирот отличается от развития детей, живущих в семьях. Все  этапы развития у детей-сирот проходят с искажениями и имеют ряд негативных  особенностей. ',
  },
};

export default BlockArticle;
