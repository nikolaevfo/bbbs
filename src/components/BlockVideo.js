import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function BlockVideo({ video }) {
  return (
    <section className="main-section page__section">
      <article className="card-container card-container_type_main-video">
        <div className="card card_color_yellow card_content_video-preview">
          <div className="card__title-wrap">
            <NavLink to="/video" className="card__link-wrap">
              <h2 className="section-title card__title">{video.title}</h2>
            </NavLink>
            <p className="caption card__title-caption">{video.info}</p>
          </div>
          <NavLink to={video.link} className="link card__link link_action_open-video">
            смотреть видео
          </NavLink>
        </div>
        <div className="card card_color_yellow card_content_video video">
          <NavLink to="./video" className="card__link-wrap">
            <img
              src={video.imageUrl}
              alt={`Превью видео ${video.title}`}
              className="video__img video__img_position_main-video"
            />
            <p className="video__duration video__duration_position_main-video paragraph">59:44</p>
          </NavLink>
        </div>
      </article>
    </section>
  );
}

BlockVideo.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    info: PropTypes.string,
    link: PropTypes.string,
    imageUrl: PropTypes.string,
    duration: PropTypes.number,
  }),
};

BlockVideo.defaultProps = {
  video: {
    id: 61,
    title: 'Эфир с выпускником нашей программы',
    info: 'Иван Рустаев, выпускник программы',
    link: 'https://youtu.be/H980rXfjdq4',
    imageUrl: 'https://picsum.photos/1199/675',
    duration: 134,
  },
};

export default BlockVideo;
