/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function TagsFiltering({ tags, handleFilteredState, cardsWithoutMainCard }) {
  const [tagChecked, setTagChecked] = useState('Все');

  // установка главной карточки

  React.useEffect(() => {
    setTagChecked('Все');
  }, []);

  function handleTagClick(e) {
    setTagChecked(e.target.id);
    if (e.target.id === 'Все') {
      handleFilteredState(cardsWithoutMainCard);
    } else {
      const newArray = cardsWithoutMainCard.filter((item) =>
        item.tag.toLowerCase().includes(e.target.id.toLowerCase()),
      );
      handleFilteredState(newArray);
    }
  }

  return (
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
      {tags &&
        tags.map((item) => (
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
  );
}

export default TagsFiltering;
