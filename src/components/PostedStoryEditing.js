import React from 'react';
import PropTypes from 'prop-types';
import PostedStory from './PostedStory';
import StoryFormOnEdit from './StoryFormOnEdit';

function PostedStoryEditing({ card }) {
  const [isEditClicked, setEditClicked] = React.useState(false);

  if (isEditClicked) {
    return <StoryFormOnEdit card={card} setEditClicked={setEditClicked} />;
  }
  return <PostedStory isEditClicked={isEditClicked} setEditClicked={setEditClicked} card={card} />;
}

export default PostedStoryEditing;

PostedStoryEditing.defaultProps = {
  card: {},
};

PostedStoryEditing.propTypes = {
  card: PropTypes.instanceOf(Object),
};
