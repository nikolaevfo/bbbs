/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import ImageUploading from 'react-images-uploading';

import { useFormWithValidation } from '../hooks/useForm';

import { setIsPopupWhereToGoOpenRedux } from '../redux/actions';

function PopupWhereToGo({ setIsPopupWhereToGoOpenRedux }) {
  const { values, handleChange, isValid, resetForm, setIsValid, errors } = useFormWithValidation();
  const [popupWhereToGoImage, setPopupWhereToGoImage] = React.useState([]);

  function onChange(image) {
    setPopupWhereToGoImage(image);
    // setBtnInvisible(true);
  }

  React.useEffect(() => {
    resetForm();
    setIsValid(false);
  }, []);

  function handlerSubmitForm(e) {
    e.preventDefault();
    // todo Запрос к апи
    console.log({
      text: values.text,
      website: values.website,
      address: values.address,
      sex: values.sex,
      age: values.age,
      type: values.type,
      comment: values.comment,
      image: popupWhereToGoImage,
    });
    setIsPopupWhereToGoOpenRedux(false);
  }

  return (
    <form
      className="popup__container popup__container_type_recommendation"
      noValidate
      onSubmit={handlerSubmitForm}
    >
      <button
        className="popup__close popup__cancel"
        type="button"
        onClick={() => setIsPopupWhereToGoOpenRedux(false)}
      />
      <legend className="section-title recommendation__popup-title">
        Если вы были в интересном месте и хотите порекомендовать его другим наставникам – заполните
        форму, и мы добавим вашу рекомендацию.
      </legend>
      <div className="popup__box-inputs">
        <input
          type="text"
          name="place"
          className={
            errors.place
              ? 'popup__input popup__input_type_middle popup__input_type_error'
              : 'popup__input popup__input_type_middle'
          }
          required
          placeholder="Название*"
          onChange={handleChange}
          minLength={2}
        />
        <input
          type="text"
          name="website"
          className={
            errors.website
              ? 'popup__input popup__input_type_middle popup__input_type_error'
              : 'popup__input popup__input_type_middle'
          }
          placeholder="Сайт"
          onChange={handleChange}
          minLength={2}
        />
      </div>
      <input
        type="text"
        name="address"
        className={errors.address ? 'popup__input popup__input_type_error' : 'popup__input'}
        required
        onChange={handleChange}
        minLength={2}
        placeholder="Адрес*"
      />
      <div className="popup__box-inputs radio">
        <label
          htmlFor="boy"
          className="popup__input popup__input_type_low popup__input_type_radio form__input recommendation__input recommendation__input_type_radio"
        >
          <input
            type="radio"
            id="boy"
            name="sex"
            value="boy"
            className="popup__input-label"
            required
            onChange={handleChange}
          />
          <span className="popup__input-visible-label" />
          Мальчик
        </label>
        <label
          htmlFor="girl"
          className="popup__input popup__input_type_low popup__input_type_radio form__input recommendation__input recommendation__input_type_radio"
        >
          <input
            type="radio"
            id="girl"
            name="sex"
            value="girl"
            className="popup__input-label"
            required
            onChange={handleChange}
          />
          <span className="popup__input-visible-label" />
          Девочка
        </label>
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
        className={errors.type ? 'popup__input popup__input_type_error' : 'popup__input'}
        required
        placeholder="Тип отдыха*"
        onChange={handleChange}
        minLength={2}
      />
      <textarea
        name="comment"
        className={errors.comment ? 'popup__textarea popup__input_type_error' : 'popup__textarea'}
        required
        placeholder="Комментарий* Поделитесь впечатлениями о проведенном времени"
        onChange={handleChange}
        minLength={2}
      />
      <div className="popup__box-inputs">
        <ImageUploading
          // multiple
          value={popupWhereToGoImage}
          onChange={onChange}
          // maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({ onImageUpload }) => (
            <>
              <button
                className="button button_theme_light recommendation__add-button"
                type="button"
                onClick={onImageUpload}
              />
              <p className="recommendation__add-place">Добавить фото</p>
            </>
          )}
        </ImageUploading>

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
  // onCloseClick: undefined,
  // onSubmit: undefined,
};

PopupWhereToGo.propTypes = {
  // onCloseClick: PropTypes.func,
  // onSubmit: PropTypes.func,
};

const mapDispatchToProps = {
  setIsPopupWhereToGoOpenRedux,
};

export default connect(null, mapDispatchToProps)(PopupWhereToGo);
