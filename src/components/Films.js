/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import scrollToUp from '../hooks/scrollToUp';

import api from '../utils/api/api';

import { setFilmsDataRedux } from '../redux/actions';
import TagsFiltering from './TagsFiltering';
import Pagination from './Pagination';

import ReadAndWatchSliderCardFilms from './ReadAndWatchSliderCardFilms';

function Films({ filmsDataRedux, setFilmsDataRedux }) {
  const [cardsFitered, setCardsFitered] = useState([]);
  // перемотка в начало страницы
  scrollToUp();

  // загрузка данных
  React.useEffect(() => {
    // const access = localStorage.getItem('access');
    api
      .getFilmsData()
      .then((res) => {
        setFilmsDataRedux(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleFilteredState(cards) {
    setCardsFitered(cards);
  }

  React.useEffect(() => {
    console.log(filmsDataRedux.cards);
    handleFilteredState(filmsDataRedux.cards);
  }, [filmsDataRedux]);

  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Фильмы</h1>
        <div className="tags">
          <TagsFiltering
            tags={filmsDataRedux.tags}
            handleFilteredState={handleFilteredState}
            cardsWithoutMainCard={filmsDataRedux.cards}
          />
        </div>
      </section>

      <Pagination paginatorData={cardsFitered} CardComponent={ReadAndWatchSliderCardFilms} />
    </main>
  );
}

const mapStateToProps = (state) => ({
  filmsDataRedux: state.films.filmsData,
});

const mapDispatchToProps = {
  setFilmsDataRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);
