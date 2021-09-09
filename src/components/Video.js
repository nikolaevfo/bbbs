/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import scrollToUp from '../hooks/scrollToUp';

import api from '../utils/api/api';

import { setVideoDataRedux } from '../redux/actions';
import ReadAndWatchSliderCardVideo from './ReadAndWatchSliderCardVideo';
import Pagination from './Pagination';
import TagsFiltering from './TagsFiltering';

function Video({ videoDataRedux, setVideoDataRedux }) {
  const [mainCard, setMainCard] = useState([]);
  const [cardsWithoutMainCard, setCardsWithoutMainCard] = useState([]);
  const [cardsFitered, setCardsFitered] = useState([]);
  // перемотка в начало страницы
  scrollToUp();

  // загрузка данных
  React.useEffect(() => {
    // const access = localStorage.getItem('access');
    api
      .getVideoData()
      .then((res) => {
        setVideoDataRedux(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    setMainCard(videoDataRedux.cards && videoDataRedux.cards.find((item) => item.choosingByMentor));
  }, [videoDataRedux]);

  React.useEffect(() => {
    const newArray =
      videoDataRedux.cards && videoDataRedux.cards.filter((item) => item.id !== mainCard.id);
    setCardsWithoutMainCard(newArray);
  }, [mainCard]);

  function handleFilteredState(cards) {
    setCardsFitered(cards);
  }

  React.useEffect(() => {
    handleFilteredState(cardsWithoutMainCard);
  }, [cardsWithoutMainCard]);

  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Видео</h1>
        <div className="tags">
          <TagsFiltering
            tags={videoDataRedux.tags}
            handleFilteredState={handleFilteredState}
            cardsWithoutMainCard={cardsWithoutMainCard}
          />
        </div>
      </section>

      <section className="main-card page__section">
        <article className="card-container card-container_type_main-video">
          <div className="card card_color_yellow card_content_video-preview">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">{mainCard && mainCard.title}</h2>
              <p className="caption card__title-caption">{mainCard && mainCard.caption}</p>
            </div>
            <a href={mainCard && mainCard.link} className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
          <div className="card card_content_video video">
            <img
              src={mainCard && mainCard.img}
              alt={mainCard && mainCard.altImg}
              className="video__img video__img_position_main-video"
            />
          </div>
        </article>
      </section>

      <Pagination paginatorData={cardsFitered} CardComponent={ReadAndWatchSliderCardVideo} />
    </main>
  );
}

const mapStateToProps = (state) => ({
  videoDataRedux: state.video.videoData,
});

const mapDispatchToProps = {
  setVideoDataRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);
