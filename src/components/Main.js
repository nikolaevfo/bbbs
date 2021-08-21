/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// import { CurrentContext } from '../contexts/CurrentContext';
import BlockAbout from './BlockAbout';
// import BlockCalendar from './BlockCalendar';
import BlockStory from './BlockStory';
import BlockPlace from './BlockPlace';
import BlockArticle from './BlockArticle';
import BlockMovie from './BlockMovie';
import BlockVideo from './BlockVideo';
import BlockFacebook from './BlockFacebook';
import BlockQuestion from './BlockQuestion';
import BlockLead from './BlockLead';
import CalendarCard from './CalendarCard';

import api from '../utils/api/api';

import { setMainPageDataRedux, setMainPageCalendarCardRedux } from '../redux/actions';

function Main({
  onOpenCalendarDescriptionPopup,
  onAppointCalendarCardClick,
  mainPageDataRedux,
  mainPageCalendarCardRedux,
  isLoggedInRedux,
  setMainPageDataRedux,
  setMainPageCalendarCardRedux,
}) {
  // const context = React.useContext(CurrentContext);
  React.useEffect(() => {
    const access = localStorage.getItem('access');
    api
      .getMainPageInfo(access)
      .then((response) => {
        setMainPageDataRedux(response.data);
        setMainPageCalendarCardRedux(response.data.event);
      })
      .catch((err) => {
        console.log(`Ошибка при получении данных с сервера: ${err}`);
      });
  }, []);

  const mainPageData = mainPageDataRedux;
  const mainPageCalendarCard = mainPageCalendarCardRedux;

  return (
    <main className="main">
      <BlockLead>
        {isLoggedInRedux ? (
          mainPageCalendarCard.id && (
            <CalendarCard
              key={mainPageCalendarCard.id}
              id={mainPageCalendarCard.id}
              card={mainPageCalendarCard}
              onOpenCalendarDescriptionPopup={onOpenCalendarDescriptionPopup}
              onAppointCalendarCardClick={onAppointCalendarCardClick}
            />
          )
        ) : (
          <BlockAbout />
        )}
        <BlockStory history={mainPageData.history} />
      </BlockLead>
      <BlockPlace place={mainPageData.place} />
      <BlockArticle article={mainPageData.articles && mainPageData.articles[0]} />
      <section className="main-section page__section cards-grid cards-grid_content_small-cards">
        <BlockMovie movie={mainPageData.movies && mainPageData.movies[0]} />
        <BlockMovie movie={mainPageData.movies && mainPageData.movies[1]} />
        <BlockMovie movie={mainPageData.movies && mainPageData.movies[2]} />
        <BlockMovie movie={mainPageData.movies && mainPageData.movies[3]} />
      </section>
      <BlockVideo video={mainPageData.video} />
      <section className="main-section page__section">
        <article className="card-container card-container_type_iframe">
          <BlockFacebook />
          <div className="main-questions">
            <BlockQuestion question={mainPageData.questions && mainPageData.questions[0]} />
            <BlockQuestion question={mainPageData.questions && mainPageData.questions[1]} />
            <BlockQuestion question={mainPageData.questions && mainPageData.questions[2]} />
          </div>
        </article>
      </section>
      <BlockArticle article={mainPageData.articles && mainPageData.articles[1]} />
    </main>
  );
}

Main.propTypes = {
  onOpenCalendarDescriptionPopup: PropTypes.func,
  onAppointCalendarCardClick: PropTypes.func,
};

Main.defaultProps = {
  onOpenCalendarDescriptionPopup: () => {},
  onAppointCalendarCardClick: () => {},
};

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    mainPageDataRedux: state.mainPage.mainPageData,
    mainPageCalendarCardRedux: state.mainPage.mainPageCalendarCard,
    isLoggedInRedux: state.app.isLoggedIn,
  };
};

const mapDispatchToProps = {
  setMainPageDataRedux,
  setMainPageCalendarCardRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
