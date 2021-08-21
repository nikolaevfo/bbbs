/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import scrollToUp from '../hooks/scrollToUp';

import api from '../utils/api/api';

import { setDictionaryDataRedux } from '../redux/actions';
import ReadAndWatchSliderCardDictionary from './ReadAndWatchSliderCardDictionary';

function CommentList({ data }) {
  // const commentNodes = data.map((data, index) => (
  //   <ReadAndWatchSliderCardDictionary data={data} key={index} />
  // ));
  // console.log(commentNodes);

  return (
    <div id="project-comments" className="commentList rights page__section">
      {data.map((data, index) => (
        <ReadAndWatchSliderCardDictionary data={data} key={index} />
      ))}
      <div className="rights__line rights__line_stage_first" />
      <div className="rights__line rights__line_stage_second" />
      <div className="rights__line rights__line_stage_third" />
    </div>
  );
}

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

  const [data, setData] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const [pageCount, setPageCount] = React.useState(0);
  function handlePageClick() {
    //  let selected = data.selected;
    //  let offset = Math.ceil(selected * this.props.perPage);
    //  this.setState({ offset: offset }, () => {
    //    this.loadCommentsFromServer();
    //  });
  }

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

      <div className="commentBox">
        <CommentList data={dictionaryDataRedux} />
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>

      {/* <section className="rights page__section">
        {dictionaryDataRedux.map((item) => (
          <ReadAndWatchSliderCardDictionary data={item} key={item.id} />
        ))} 

        <div className="rights__line rights__line_stage_first" />
        <div className="rights__line rights__line_stage_second" />
        <div className="rights__line rights__line_stage_third" />

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_form_square rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-hulk-boys.jpg"
                alt="Психологические особенности детей-сирот"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">
            Психологические особенности детей-сирот
          </h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_green card_form_circle rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-coffee.jpg"
                alt="Привязанность"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">Привязанность</h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_yellow card_form_arch rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-beach.jpg"
                alt="Особенности социально дезадаптивных детей"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">
            Особенности социально дезадаптивных детей
          </h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_pink card_form_circle rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-coffee.jpg"
                alt="Социальная адаптация"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">Социальная адаптация</h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_blue card_form_arch rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-blue-hand.jpg"
                alt="Социально дезадаптивные дети"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">Социально дезадаптивные дети</h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_pink card_form_square rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-spear.jpg"
                alt="Проявление агрессии у детей-сирот"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">Проявление агрессии у детей-сирот</h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_green card_form_arch rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-beach.jpg"
                alt="Психологические особенности детей-сирот"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">
            Психологические особенности детей-сирот
          </h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_yellow card_form_square rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-hulk-boys.jpg"
                alt="Социальная адаптация"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">Социальная адаптация</h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_green card_form_circle rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-hulk-boys.jpg"
                alt="Психологические особенности детей-сирот"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">
            Психологические особенности детей-сирот
          </h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_blue card_form_square rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-coffee.jpg"
                alt="Привязанность"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">Привязанность</h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_pink card_form_circle rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-beach.jpg"
                alt="Особенности социально дезадаптивных детей"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">
            Особенности социально дезадаптивных детей
          </h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_blue card_form_arch rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-coffee.jpg"
                alt="Социальная адаптация"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">Социальная адаптация</h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_yellow card_form_circle rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-blue-hand.jpg"
                alt="Социально дезадаптивные дети"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">Социально дезадаптивные дети</h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_green card_form_arch rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-spear.jpg"
                alt="Проявление агрессии у детей-сирот"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">Проявление агрессии у детей-сирот</h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_yellow card_form_square rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-coffee.jpg"
                alt="Привязанность"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">Привязанность</h2>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_pink card_form_arch rights__card">
            <a href="./article.html" className="rights__link">
              <img
                src="./images/catalog/catalog-coffee.jpg"
                alt="Социальная адаптация"
                className="catalog-card__image"
              />
            </a>
          </div>
          <h2 className="section-title catalog-card__title">Социальная адаптация</h2>
        </div>
      </section> */}

      <section className="pagination page__section">
        <nav className="pagination__nav" aria-label="Навигация по страницам">
          <ul className="pagination__list">
            <li className="pagination__list-item section-title">
              <a href="/" className="pagination__link pagination__link_active">
                1
              </a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="/" className="pagination__link">
                2
              </a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="/" className="pagination__link">
                3
              </a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="/" className="pagination__link">
                4
              </a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="/" className="pagination__link">
                5
              </a>
            </li>
            <li className="pagination__list-item section-title">...</li>
            <li className="pagination__list-item section-title">
              <a href="/" className="pagination__link">
                18
              </a>
            </li>
          </ul>
          <img
            src="./images/svg/arrow-right-grey.svg"
            alt="стрелка вправо"
            className="pagination__arrow"
          />
        </nav>
      </section>
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
