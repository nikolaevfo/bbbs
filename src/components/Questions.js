/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import scrollToUp from '../hooks/scrollToUp';
import { useFormWithValidation } from '../hooks/useForm';

import QuestionCard from './QuestionCard';

import { setQuestionsDataRedux, setQuestionsTagsDataRedux } from '../redux/actions';

import api from '../utils/api/api';

function Questions({
  questionsDataRedux,
  questionsTagsDataRedux,
  setQuestionsDataRedux,
  setQuestionsTagsDataRedux,
  isLoggedInRedux,
}) {
  // перемотка в начало страницы
  scrollToUp();

  const { values, handleChange, isValid, resetForm, setIsValid } = useFormWithValidation();

  // загрузка данных
  React.useEffect(() => {
    api
      .getQuestionsCards()
      .then((res) => {
        setQuestionsDataRedux(res.data.questionsCards);
      })
      .catch((err) => console.log(err));

    api
      .getQuestionsTags()
      .then((res) => {
        setQuestionsTagsDataRedux(res.data.questionsTags);
      })
      .catch((err) => console.log(err));
  }, []);

  // const context = React.useContext(CurrentContext);
  const [tagChecked, setTagChecked] = useState('Все');
  const [questionsFitered, setQuestionsFiltered] = useState([]);

  React.useEffect(() => {
    setQuestionsFiltered(questionsDataRedux);
    setTagChecked('Все');
  }, [questionsDataRedux]);

  function handleTagClick(e) {
    setTagChecked(e.target.id);
    if (e.target.id === 'Все') {
      setQuestionsFiltered(questionsDataRedux);
    } else {
      const newArray = questionsDataRedux.filter((item) =>
        item.tag.toLowerCase().includes(e.target.id.toLowerCase()),
      );
      setQuestionsFiltered(newArray);
    }
  }

  React.useEffect(() => {
    resetForm();
    setIsValid(false);
  }, []);

  function onSubmit(data) {
    // todo запрос к апи
    console.log(data);
  }

  function handlerSubmit(e) {
    e.preventDefault();
    onSubmit({
      question: values.question,
    });
    resetForm();
    setIsValid(false);
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
            {questionsTagsDataRedux.map((item) => (
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

      {isLoggedInRedux && tagChecked === 'Все' && (
        <section className="add-question page__section">
          <h2 className="section-title add-question__title">
            Если вы не нашли ответ на свой вопрос — напишите нам, и мы включим его в список
          </h2>
          <form className="question-form" name="add-question" onSubmit={handlerSubmit}>
            <fieldset className="question-form__add-question">
              <input
                className="question-form__input"
                type="text"
                name="question"
                placeholder="Введите вопрос"
                required
                minLength={2}
                onChange={handleChange}
                value={values.question || ''}
              />
              <button
                className="button button_theme_light question-form__button"
                type="submit"
                disabled={!isValid}
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

Questions.defaultProps = {};

Questions.propTypes = {};

const mapStateToProps = (state) => ({
  questionsDataRedux: state.questions.questionsData,
  questionsTagsDataRedux: state.questions.questionsTagsData,
  isLoggedInRedux: state.app.isLoggedIn,
});

const mapDispatchToProps = {
  setQuestionsDataRedux,
  setQuestionsTagsDataRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
