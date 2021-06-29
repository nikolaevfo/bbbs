import React from 'react';
/* eslint import/no-unresolved: [2, { ignore: ['react-images-uploading'] }] */
import ImageUploading from 'react-images-uploading';

function ImageUploader() {
  const [images, setImages] = React.useState([]);
  const [isBtnInvisible, setBtnInvisible] = React.useState(false);
  const maxNumber = 69;

  function onChange(imageList) {
    setImages(imageList);
    setBtnInvisible(true);
  }

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload }) => (
          <div>
            {!isBtnInvisible && (
              <button
                className="personal-area__add-photo-button"
                type="button"
                onClick={onImageUpload}
                aria-label="add photo"
              />
            )}
            {!isBtnInvisible && (
              <p className="caption personal-area__bottom-caption">Загрузить фото</p>
            )}
            {imageList.map((image) => (
              <img src={image.data_url} className="personal-area__photo" alt="Фото" />
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
export default ImageUploader;
