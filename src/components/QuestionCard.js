import React, { useState } from 'react';
import PropTypes from 'prop-types';

function QuestionCard({ card, id }) {
  const [isButtonActive, setIsButtonActive] = useState(false);
  // const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  function handleQuestionBtnClick() {
    setIsButtonActive(!isButtonActive);
  }
  return (
    <article className="question" id={id}>
      <h2 className="section-title question__title">{card.title}</h2>
      <div className="question__wrap">
        <p className="rubric question__rubric">рубрика</p>
        <button
          className={`question__show-button ${isButtonActive && 'question__show-button_active'}`}
          type="button"
          aria-label="Показать ответ"
          title="Показать ответ"
          onClick={handleQuestionBtnClick}
        />
      </div>
      <div className={`question__answer ${isButtonActive && 'question__answer_visible'}`}>
        <p className="paragraph question__paragraph">{card.description}</p>
      </div>
    </article>
  );
}

QuestionCard.defaultProps = {
  card: [],
  id: undefined,
};

QuestionCard.propTypes = {
  card: PropTypes.instanceOf(Object),
  id: PropTypes.number,
};

export default QuestionCard;
