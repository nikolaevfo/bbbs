import React from 'react';

function Rights() {
  // перемотка в начало страницы
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Права детей</h1>
        <div className="tags">
          <ul className="tags__list">
            <li className="tags__list-item">
              <button className="button tags__button tags__button_active" type="button">
                Все
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Жильё
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Образование
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Транспорт
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Трудоустройство
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Пенсии
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Медицина
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="rights page__section">
        <div className="rights__line rights__line_stage_first" />
        <div className="rights__line rights__line_stage_second" />
        <div className="rights__line rights__line_stage_third" />

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_yellow card_form_square rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Сплав на байдарках в 2 строки</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_green card_form_circle rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Льготы детей на жильё</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_yellow card_form_arch rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Трудоустройство для детей инвалидов</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_pink card_form_circle rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Пенсионное обеспечение для детей-сирот</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_blue card_form_arch rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Жилье для выпускников детских домов</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_pink card_form_square rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Трудоустройство для выпускников детских домов</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_green card_form_arch rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Трудоустройство для детей инвалидов</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_yellow card_form_square rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Льготы детей на жильё</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_green card_form_circle rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Пенсионное обеспечение для детей-сирот</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_blue card_form_square rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Льготы детей на жильё</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_pink card_form_circle rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Трудоустройство для детей инвалидов</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_blue card_form_arch rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Пенсионное обеспечение для детей-сирот</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_yellow card_form_circle rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Льготы детей на жильё</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_green card_form_arch rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Пенсионное обеспечение для детей-сирот</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_yellow card_form_square rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Льготы детей на жильё</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>

        <div className="catalog-card card-pagination card-pagination_type_shapes">
          <div className="card card_color_pink card_form_arch rights__card">
            <a href="./rights-article.html" className="rights__link">
              <h2 className="section-title">Пенсионное обеспечение для детей-сирот</h2>
              <p className="rubric rights__rubric">рубрика</p>
            </a>
          </div>
        </div>
      </section>

      <section className="pagination page__section">
        <nav className="pagination__nav" aria-label="Навигация по страницам">
          <ul className="pagination__list">
            <li className="pagination__list-item section-title">
              <a href="/rights" className="pagination__link pagination__link_active">
                1
              </a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="/rights" className="pagination__link">
                2
              </a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="/rights" className="pagination__link">
                3
              </a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="/rights" className="pagination__link">
                4
              </a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="/rights" className="pagination__link">
                5
              </a>
            </li>
            <li className="pagination__list-item section-title">...</li>
            <li className="pagination__list-item section-title">
              <a href="/rights" className="pagination__link">
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

export default Rights;
