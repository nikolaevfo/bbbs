/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setDeleteStoryPopupOpenRedux, setProfileNarrativesCardsRedux } from '../redux/actions';

function PopupDeleteStory({
  isOpen,
  setDeleteStoryPopupOpenRedux,
  setProfileNarrativesCardsRedux,
  profileNarrativesCardsRedux,
  checkedToDeleteProfileStoryRedux,
}) {
  function handleCloseDeleteStoryPopup() {
    setDeleteStoryPopupOpenRedux(false);
  }

  function handleDeleteProfileStory() {
    const newArray = [];
    profileNarrativesCardsRedux.forEach((item) => {
      console.log(checkedToDeleteProfileStoryRedux);
      if (item.id !== checkedToDeleteProfileStoryRedux.id) {
        newArray.push(item);
      }
    });
    setProfileNarrativesCardsRedux(newArray);
    handleCloseDeleteStoryPopup();
    // todo должно быть обращение к апи
  }

  return (
    <div className={`popup personal ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_type_lk">
        <h2 className="section-title personal__title">
          Удалить встречу в Парке Горького 5 декабря 2020?
        </h2>
        <div className="popup__buttons">
          <button className="button popup__delete" type="button" onClick={handleDeleteProfileStory}>
            Удалить
          </button>
          <button
            className="button popup__delete"
            type="button"
            onClick={handleCloseDeleteStoryPopup}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}

PopupDeleteStory.defaultProps = {
  isOpen: false,
  // onClose: undefined,
  // onDeleteProfileStory: undefined,
};

PopupDeleteStory.propTypes = {
  isOpen: PropTypes.bool,
  // onClose: PropTypes.func,
  // onDeleteProfileStory: PropTypes.func,
};

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    profileNarrativesCardsRedux: state.profile.profileNarrativesCards,
    checkedToDeleteProfileStoryRedux: state.profile.checkedToDeleteProfileStory,
  };
};

const mapDispatchToProps = {
  setDeleteStoryPopupOpenRedux,
  setProfileNarrativesCardsRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupDeleteStory);
