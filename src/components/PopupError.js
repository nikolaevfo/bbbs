/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { setIsPopupErrorOpenRedux } from '../redux/actions';

function PopupError({ popupErrorTextRedux, setIsPopupErrorOpenRedux }) {
  return (
    <form className="popup__container popup__container_type_error">
      <button
        className="popup__close popup__cancel"
        type="button"
        aria-label="Close"
        onClick={() => setIsPopupErrorOpenRedux(false)}
      />
      <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-error ">
        {popupErrorTextRedux}
      </h2>
      <button
        className="button calendar__back calendar__back_type_error popup__cancel"
        type="button"
        onClick={() => setIsPopupErrorOpenRedux(false)}
      >
        Вернуться к мероприятию
      </button>
    </form>
  );
}

PopupError.defaultProps = {
  // onCloseClick: undefined,
  // text: '',
};

PopupError.propTypes = {
  // onCloseClick: PropTypes.func,
  // text: PropTypes.string,
};

const mapStateToProps = (state) => ({
  popupErrorTextRedux: state.app.popupErrorText,
  // questionsTagsDataRedux: state.questions.questionsTagsData,
  // isLoggedInRedux: state.app.isLoggedIn,
});

const mapDispatchToProps = {
  setIsPopupErrorOpenRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupError);
