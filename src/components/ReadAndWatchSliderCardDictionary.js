/* eslint-disable react/prop-types */
import React from 'react';

function ReadAndWatchSliderCardDictionary({ data }) {
  return (
    <article className="preview__card preview__card_type_dictionary">
      <div className="card rights__card">
        <a href="article.html" className="rights__link">
          <img src={data.img} alt={data.altImg} className="catalog-card__image" />
        </a>
      </div>
      <h2 className="section-title catalog-card__title">{data.title}</h2>
    </article>
  );
}

export default ReadAndWatchSliderCardDictionary;
