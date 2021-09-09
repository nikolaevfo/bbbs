/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import api from '../utils/api/api';
import { setArticlesDataRedux } from '../redux/actions';
import scrollToUp from '../hooks/scrollToUp';
import Pagination from './Pagination';
import ReadAndWatchSliderCardArticles from './ReadAndWatchSliderCardArticles';

function Articles({ articlesDataRedux, setArticlesDataRedux }) {
  const [mainCard, setMainCard] = useState({
    id: '',
    choosingByMentor: '',
    img: '',
    altImg: '',
    title: '',
    caption: '',
    paragraph1: '',
    paragraph2: '',
    link: '',
  });
  const [cardsWithoutMainCard, setCardsWithoutMainCard] = useState([]);

  // перемотка в начало страницы
  scrollToUp();

  // загрузка данных
  React.useEffect(() => {
    // const access = localStorage.getItem('access');
    api
      .getArticlesData()
      .then((res) => {
        setArticlesDataRedux(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    const mainCardFinded =
      articlesDataRedux && articlesDataRedux.find((item) => item.choosingByMentor);
    setMainCard(mainCardFinded);
  }, [articlesDataRedux]);

  React.useEffect(() => {
    const newArray =
      articlesDataRedux && articlesDataRedux.filter((item) => item.id !== mainCard.id);
    setCardsWithoutMainCard(newArray);
  }, [mainCard]);

  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Статьи</h1>
      </section>

      <section className="main-card page__section">
        <article className="card-container card-container_type_main-article">
          <div className="card card_type_main card_color_yellow">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">{mainCard && mainCard.title}</h2>
              <p className="caption card__title-caption">{mainCard && mainCard.caption}</p>
            </div>
            <img
              src={mainCard && mainCard.img}
              alt={mainCard && mainCard.altImg}
              className="card__img card__img_position_main-article"
            />
            <a href={mainCard && mainCard.link} className="link card__link">
              читать на сайте
            </a>
          </div>
          <div className="card card_content_annotation card_type_main">
            <div className="card__content">
              <div className="card__annotation card__annotation_position_main-card card__annotation_type_main-article">
                <p className="paragraph card__paragraph">{mainCard && mainCard.paragraph1}</p>
                <p className="paragraph card__paragraph">{mainCard && mainCard.paragraph2}</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <Pagination
        paginatorData={cardsWithoutMainCard}
        CardComponent={ReadAndWatchSliderCardArticles}
      />
    </main>
  );
}

const mapStateToProps = (state) => ({
  articlesDataRedux: state.articles.articlesData,
});

const mapDispatchToProps = {
  setArticlesDataRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
