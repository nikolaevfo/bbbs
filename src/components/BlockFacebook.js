import React from 'react';

function BlockFacebook() {
  return (
    <div className="card card_color_blue card_content_media">
      <iframe
        title="facebook"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=420&height=627&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="420"
        height="627"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
}

export default BlockFacebook;
