import React from 'react';

function Video() {
  // перемотка в начало страницы
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main">
      <section className="lead page__section">
        <h1 className="main-title">Видео</h1>
        <div className="tags">
          <ul className="tags__list">
            <li className="tags__list-item">
              <button className="button tags__button tags__button_active" type="button">
                Все
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Ресурсная группа
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Эксперт
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Пары
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                События
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Медиа о нас
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="main-card page__section">
        <article className="card-container card-container_type_main-video">
          <div className="card card_color_yellow card_content_video-preview">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Эфир с выпускником нашей программы</h2>
              <p className="caption card__title-caption">Иван Рустаев, выпускник программы</p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
          <div className="card card_content_video video">
            <img
              src="./images/video/video-main.jpg"
              alt="Превью видео"
              className="video__img video__img_position_main-video"
            />
          </div>
        </article>
      </section>

      <section className="cards-grid cards-grid_content_small-cards page__section">
        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-1.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Меняется смысл – меняется жизнь</h2>
              <p className="caption card__title-caption">
                Прямой эфир с актрисой театра и кино Эмилией Спивак
              </p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-2.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Что в силах волонтера-наставника?</h2>
              <p className="caption card__title-caption">Иван Рустаев, волонтер-наставник</p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-3.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Творчество, наставничество, дети</h2>
              <p className="caption card__title-caption">
                Виктория Ямина, Виктория Ямина, волонтеры
              </p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-4.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Дружба – меняет мир</h2>
              <p className="caption card__title-caption">
                Прямой эфир с актрисой театра и кино Эмилией Спивак
              </p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-1.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Меняется смысл – меняется жизнь</h2>
              <p className="caption card__title-caption">
                Прямой эфир с актрисой театра и кино Эмилией Спивак
              </p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-2.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Что в силах волонтера-наставника?</h2>
              <p className="caption card__title-caption">Иван Рустаев, волонтер-наставник</p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-3.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Творчество, наставничество, дети</h2>
              <p className="caption card__title-caption">
                Виктория Ямина, Виктория Ямина, волонтеры
              </p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-4.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Дружба – меняет мир</h2>
              <p className="caption card__title-caption">
                Прямой эфир с актрисой театра и кино Эмилией Спивак
              </p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-1.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Меняется смысл – меняется жизнь</h2>
              <p className="caption card__title-caption">
                Прямой эфир с актрисой театра и кино Эмилией Спивак
              </p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-2.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Что в силах волонтера-наставника?</h2>
              <p className="caption card__title-caption">Иван Рустаев, волонтер-наставник</p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-3.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Творчество, наставничество, дети</h2>
              <p className="caption card__title-caption">
                Виктория Ямина, Виктория Ямина, волонтеры
              </p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-4.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Дружба – меняет мир</h2>
              <p className="caption card__title-caption">
                Прямой эфир с актрисой театра и кино Эмилией Спивак
              </p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-1.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Меняется смысл – меняется жизнь</h2>
              <p className="caption card__title-caption">
                Прямой эфир с актрисой театра и кино Эмилией Спивак
              </p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-2.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Что в силах волонтера-наставника?</h2>
              <p className="caption card__title-caption">Иван Рустаев, волонтер-наставник</p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-3.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Творчество, наставничество, дети</h2>
              <p className="caption card__title-caption">
                Виктория Ямина, Виктория Ямина, волонтеры
              </p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>

        <article className="card card_content_video card-pagination">
          <div className="video">
            <img src="./images/video/video-ex-4.png" alt="Превью видео" className="video__img" />
          </div>
          <div className="card__video-info">
            <div className="card__title-wrap">
              <h2 className="section-title card__title">Дружба – меняет мир</h2>
              <p className="caption card__title-caption">
                Прямой эфир с актрисой театра и кино Эмилией Спивак
              </p>
            </div>
            <a href="/" className="link card__link link_action_open-video">
              смотреть видео
            </a>
          </div>
        </article>
      </section>

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

export default Video;
