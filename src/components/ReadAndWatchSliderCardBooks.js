/* eslint-disable react/prop-types */
import React from 'react';

function ReadAndWatchSliderCardBooks({ data }) {
  return (
    <article className="preview__card card-container card-container_type_books">
      <div className="card card_content_book">
        <div className="book book_color">
          <h2 className="section-title book__title">{data.title}</h2>
          <div className="book__info">
            <p className="caption book__author">{data.author}</p>
            <p className="caption book__year">{data.year}</p>
          </div>
        </div>
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

export default ReadAndWatchSliderCardBooks;
