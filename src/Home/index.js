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
    </div>
  );
}

export default Home;
