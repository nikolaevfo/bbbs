/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import scrollToUp from '../hooks/scrollToUp';
import ReadAndWatchSlider from './ReadAndWatchSlider';

import api from '../utils/api/api';

import { setReadAndWatchDataRedux } from '../redux/actions';

function ReadAndWatch({ readAndWatchDataRedux, setReadAndWatchDataRedux }) {
  // перемотка в начало страницы
  scrollToUp();

  // загрузка данных
  React.useEffect(() => {
    const access = localStorage.getItem('access');
    api
      .getReadAndWatchData(access)
      .then((res) => {
        setReadAndWatchDataRedux(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const guideData = readAndWatchDataRedux.guide;
  const videoData = readAndWatchDataRedux.video;
  const articlesData = readAndWatchDataRedux.articles;
  const filmsData = readAndWatchDataRedux.films;
  const booksData = readAndWatchDataRedux.books;

  return (
    <main className="main">
      <ReadAndWatchSlider data={guideData} link="/dictionary" />
      <ReadAndWatchSlider data={videoData} link="/video" />
      <ReadAndWatchSlider data={articlesData} link="/articles" />
      <ReadAndWatchSlider data={filmsData} link="/films" />
      <ReadAndWatchSlider data={booksData} link="/books" />
    </main>
  );
}

const mapStateToProps = (state) => ({
  readAndWatchDataRedux: state.readAndWatch.readAndWatchData,
});

const mapDispatchToProps = {
  setReadAndWatchDataRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadAndWatch);
