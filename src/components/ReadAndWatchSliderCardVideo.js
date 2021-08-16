/* eslint-disable react/prop-types */
import React from 'react';

function ReadAndWatchSliderCardVideo({ data }) {
  return (
    <article className="preview__card card card_content_video">
      <div className="video">
        <img src={data.img} alt={data.altImg} className="video__img" />
        <p className="video__duration paragraph">{data.duration}</p>
      </div>
      <div className="card__video-info">
        <div className="card__title-wrap">
          <h2 className="section-title card__title">{data.title}</h2>
          <p className="caption card__title-caption">{data.caption}</p>
        </div>
        <a href="/" className="link card__link link_action_open-video">
          смотреть видео
        </a>
      </div>
    </article>
  );
}

export default ReadAndWatchSliderCardVideo;
