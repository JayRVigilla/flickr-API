import React, { useState } from 'react';
import SearchBar from './../SearchBar';
import './Home.css';

function Home() {

  const [isLoading, setIsLoading] = useState(false)
  const [imgs, setImgs] = useState([])
  const [error, setError] = useState(undefined)

  return (
    <div className="Home">
      <SearchBar
        setIsLoading={setIsLoading}
        setImgs={setImgs}
        setError={setError}
      />
      <h2>isLoading: {isLoading}</h2>
      <h2>imgs: {imgs}</h2>
      <h2>error: {error}</h2>
    </div>
  );
}

export default Home;
