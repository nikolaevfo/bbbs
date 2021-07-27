import React from 'react';
import PropTypes from 'prop-types';
import PostedStory from './PostedStory';
import StoryFormOnEdit from './StoryFormOnEdit';

function PostedStoryEditing({
  // onDeleteClick,
  card,
  // onChangeNarrative,
}) {
  const [isEditClicked, setEditClicked] = React.useState(false);

  if (isEditClicked) {
    return (
      <StoryFormOnEdit
        card={card}
        // onChangeNarrative={onChangeNarrative}
        setEditClicked={setEditClicked}
        // mainText={mainText}
        // setMainText={setMainText}
        // place={place}
        // setPlace={setPlace}
      />
    );
  }
  return (
    <PostedStory
      // onDeleteClick={onDeleteClick}
      isEditClicked={isEditClicked}
      setEditClicked={setEditClicked}
      card={card}
      // mainText={card}
      // place={place}
    />
  );
}

export default PostedStoryEditing;

PostedStoryEditing.defaultProps = {
  // onDeleteClick: undefined,
  // onChangeNarrative: undefined,
  card: {},
};

PostedStoryEditing.propTypes = {
  // onDeleteClick: PropTypes.func,
  // onChangeNarrative: PropTypes.func,
  card: PropTypes.instanceOf(Object),
};
