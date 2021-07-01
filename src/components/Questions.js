import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CurrentContext } from '../contexts/CurrentContext';
import scrollToUp from '../hooks/scrollToUp';

import QuestionCard from './QuestionCard';

function Questions({ onQuestionsInit, questionsData, questionsTagsData }) {
  // перемотка в начало страницы
  scrollToUp();

  // загрузка данных
  React.useEffect(() => {
    onQuestionsInit();
  }, []);

  const context = React.useContext(CurrentContext);
  const [tagChecked, setTagChecked] = useState('Все');
  const [questionsFitered, setQuestionsFitered] = useState([]);

  React.useEffect(() => {
    setQuestionsFitered(questionsData);
    setTagChecked('Все');
  }, [questionsData]);

  function handleTagClick(e) {
    setTagChecked(e.target.id);
    if (e.target.id === 'Все') {
      setQuestionsFitered(questionsData);
    } else {
      const newArray = questionsData.filter((item) =>
        item.tag.toLowerCase().includes(e.target.id.toLowerCase()),
      );
      setQuestionsFitered(newArray);
    }
  }

  return (
    <div className="main">
      <section className="lead page__section">
        <h1 className="main-title">Ответы на вопросы</h1>
        <div className="tags tags_content_long-list">
          <ul className="tags__list tags__list_type_long">
            <li className="tags__list-item">
              <button
                className={`button tags__button ${tagChecked === 'Все' && 'tags__button_active'}`}
                type="button"
                onClick={handleTagClick}
                id="Все"
              >
                Все
              </button>
            </li>
            {questionsTagsData.map((item) => (
              <li className="tags__list-item" key={item}>
                <button
                  className={`button tags__button ${item === tagChecked && 'tags__button_active'}`}
                  type="button"
                  onClick={handleTagClick}
                  id={item}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="questions page__section">
        {questionsFitered.map((item) => (
          <QuestionCard key={item.id} id={item.id} card={item} />
        ))}
      </section>

      {context.isLoggedIn && tagChecked === 'Все' && (
        <section className="add-question page__section">
          <h2 className="section-title add-question__title">
            Если вы не нашли ответ на свой вопрос — напишите нам, и мы включим его в список
          </h2>
          <form className="question-form" name="add-question">
            <fieldset className="question-form__add-question">
              <input
                className="question-form__input"
                type="text"
                name="question"
                placeholder="Введите вопрос"
                required
              />
              <button
                className="button button_theme_light question-form__button"
                type="submit"
                name="submit"
                disabled
              >
                Отправить
              </button>
            </fieldset>
          </form>
        </section>
      )}
    </div>
  );
}

Questions.defaultProps = {
  onQuestionsInit: undefined,
  questionsData: [],
  questionsTagsData: [],
};

Questions.propTypes = {
  onQuestionsInit: PropTypes.func,
  questionsData: PropTypes.instanceOf(Array),
  questionsTagsData: PropTypes.instanceOf(Array),
};

export default Questions;
