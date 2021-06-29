import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function BlockQuestion({ question }) {
  function showTags(tags) {
    if (!tags) {
      return <></>;
    }
    return tags.map((tag) => (
      <li key={tag.id} className="tags__list-item">
        <p className="rubric question__rubric main-questions__rubric">{tag.name}</p>
      </li>
    ));
  }
  return (
    <article className="question main-questions__item">
      <NavLink to="/questions" className="main-questions__link">
        <h2 className="section-title question__title main-questions__title">{question.title}</h2>
      </NavLink>
      <ul className="tags__list">{showTags(question.tags)}</ul>
    </article>
  );
}

BlockQuestion.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        slug: PropTypes.string,
      }),
    ),
    title: PropTypes.string,
  }),
};

BlockQuestion.defaultProps = {
  question: {
    id: 71,
    tag: [
      {
        id: 771,
        name: 'рубрика',
        slug: 'rubric',
      },
    ],
    title: 'Я боюсь, что ребёнок ко мне слишком сильно привяжется. Что делать?',
  },
};

export default BlockQuestion;
