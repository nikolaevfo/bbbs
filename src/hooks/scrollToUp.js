import React from 'react';

export default function scrollToUp() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
