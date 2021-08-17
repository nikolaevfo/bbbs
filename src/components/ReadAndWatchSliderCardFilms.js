/* eslint-disable react/prop-types */
import React from 'react';

function ReadAndWatchSliderCardFilms({ data }) {
  return (
    <article className="preview__card card-container">
      <div className="card card_content_video">
        <div className="video">
          <img src={data.img} alt={data.altImg} className="video__img" />
          <ul className="video__rubric-list">
            <li>
              <p className="rubric video__rubric">рубрика</p>
            </li>
          </ul>
        </div>
        <div className="card__video-info">
          <div className="card__title-wrap">
            <h2 className="section-title card__title">{data.title}</h2>
            <p className="caption card__title-caption">{data.caption}</p>
          </div>
          <a href="/" className="link card__link link_action_open-video">
            смотреть трейлер
          </a>
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

export default ReadAndWatchSliderCardFilms;
