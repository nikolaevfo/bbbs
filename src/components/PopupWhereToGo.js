/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { useFormWithValidation } from '../hooks/useForm';

function PopupWhereToGo({ onCloseClick, onSubmit }) {
  const { values, handleChange, isValid, resetForm, setIsValid } = useFormWithValidation();

  React.useEffect(() => {
    resetForm();
    setIsValid(false);
  }, []);

  function handlerSubmitForm(e) {
    e.preventDefault();
    onSubmit({
      login: values.login,
      password: values.password,
    });
  }

  return (
    <form
      className="popup__container popup__container_type_recommendation"
      noValidate
      onSubmit={handlerSubmitForm}
    >
      <button className="popup__close popup__cancel" type="button" onClick={onCloseClick} />
      <legend className="section-title recommendation__popup-title">
        Если вы были в интересном месте и хотите порекомендовать его другим наставникам – заполните
        форму, и мы добавим вашу рекомендацию.
      </legend>
      <div className="popup__box-inputs">
        <input
          type="text"
          name="place"
          className="popup__input popup__input_type_middle"
          required
          placeholder="Название*"
          onChange={handleChange}
          minLength={2}
        />
        <input
          type="text"
          name="website"
          className="popup__input popup__input_type_middle"
          placeholder="Сайт"
          onChange={handleChange}
          minLength={2}
        />
      </div>
      <input type="text" name="address" className="popup__input" required placeholder="Адрес*" />
      <div className="popup__box-inputs radio">
        <input
          type="text"
          name="boy"
          id="boy"
          className="popup__input popup__input_type_low popup__input_type_radio"
          disabled
          placeholder="Мальчик"
          onChange={handleChange}
        />
        <input type="radio" className="radio__button-boy" name="sex" required />
        <input
          type="text"
          name="girl"
          id="girl"
          className="popup__input popup__input_type_low popup__input_type_radio"
          disabled
          placeholder="Девочка"
          onChange={handleChange}
        />
        <input type="radio" className="radio__button-girl" name="sex" required />
        <input
          type="number"
          name="age"
          className="popup__input popup__input_type_low"
          required
          placeholder="Возраст*"
          onChange={handleChange}
        />
      </div>
      <input
        type="text"
        name="type"
        className="popup__input"
        required
        placeholder="Тип отдыха*"
        onChange={handleChange}
        minLength={2}
      />
      <textarea
        className="popup__textarea"
        required
        placeholder="Комментарий* Поделитесь впечатлениями о проведенном времени"
        onChange={handleChange}
        minLength={2}
      />
      <div className="popup__box-inputs">
        <button className="button button_theme_light recommendation__add-button" type="button" />
        <p className="recommendation__add-place">Добавить фото</p>
        <button
          className="button button_theme_light recommendation__submit"
          type="submit"
          disabled={!isValid}
        >
          Отправить
        </button>
      </div>
    </form>
  );
}

PopupWhereToGo.defaultProps = {
  // clickedCalendarCard: {},
  onCloseClick: undefined,
  onSubmit: undefined,
};

PopupWhereToGo.propTypes = {
  // clickedCalendarCard: PropTypes.instanceOf(Object),
  onCloseClick: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default PopupWhereToGo;
