import React from 'react';
import PropTypes from 'prop-types';

function PopupDeleteStory({ isOpen, onClose, onDeleteProfileStory }) {
  return (
    <div className={`popup personal ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_type_lk">
        <h2 className="section-title personal__title">
          Удалить встречу в Парке Горького 5 декабря 2020?
        </h2>
        <div className="popup__buttons">
          <button className="button popup__delete" type="button" onClick={onDeleteProfileStory}>
            Удалить
          </button>
          <button className="button popup__delete" type="button" onClick={onClose}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupDeleteStory;

PopupDeleteStory.defaultProps = {
  isOpen: false,
  onClose: undefined,
  onDeleteProfileStory: undefined,
};

PopupDeleteStory.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onDeleteProfileStory: PropTypes.func,
};
