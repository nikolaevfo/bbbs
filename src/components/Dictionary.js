/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import scrollToUp from '../hooks/scrollToUp';

import api from '../utils/api/api';

import { setDictionaryDataRedux } from '../redux/actions';
import ReadAndWatchSliderCardDictionary from './ReadAndWatchSliderCardDictionary';
import Pagination from './Pagination';

function Dictionary({ dictionaryDataRedux, setDictionaryDataRedux }) {
  // перемотка в начало страницы
  scrollToUp();

  // загрузка данных
  React.useEffect(() => {
    // const access = localStorage.getItem('access');
    api
      .getDictionaryData()
      .then((res) => {
        setDictionaryDataRedux(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Справочник</h1>
        <p className="section-title lead__text">
          Памятка новичка&nbsp;&mdash; наши метариалы, где сможете найти всю базовую информацию,
          рассказанную на вводном тренинге. Если вы захотите освежить свои знания, и&nbsp;напомнить
          себе о&nbsp;чем-то.
        </p>
      </section>
      <Pagination
        paginatorData={dictionaryDataRedux}
        CardComponent={ReadAndWatchSliderCardDictionary}
      />
    </main>
  );
}

const mapStateToProps = (state) => ({
  dictionaryDataRedux: state.dictionary.dictionaryData,
});

const mapDispatchToProps = {
  setDictionaryDataRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dictionary);
