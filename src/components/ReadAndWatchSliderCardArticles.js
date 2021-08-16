/* eslint-disable react/prop-types */
import React from 'react';

function ReadAndWatchSliderCardArticles({ data }) {
  return (
    <article className="preview__card card-container card-container_type_article">
      <div className="card card_color">
        <div className="card__title-wrap">
          <h2 className="section-title">{data.title}</h2>
          <p className="caption card__title-caption">{data.caption}</p>
        </div>
        <a href="article.html" className="link card__link">
          читать на сайте
        </a>
      </div>
      <div className="card card_content_annotation">
        <div className="card__content">
          <div className="card__annotation">
            <p className="paragraph card__paragraph">{data.paragraph1}</p>
            <p className="paragraph card__paragraph">{data.paragraph2}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ReadAndWatchSliderCardArticles;
