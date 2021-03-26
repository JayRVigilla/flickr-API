import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className="Loading">
      <iframe
      src="https://giphy.com/embed/jtcChrl9ER2dC2rL7b"
      width="480"
      height="362"
      frameBorder="0"
      className="giphy-embed"
      allowFullScreen
      title="Loading GIF"
    >
      </iframe>
    <p>
      <a href="https://giphy.com/gifs/moodman-jtcChrl9ER2dC2rL7b">via GIPHY</a>
    </p>
  </div>
  );
}

export default Loading;
