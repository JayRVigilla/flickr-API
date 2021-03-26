import React, { useState } from 'react';
import SearchBar from './../SearchBar';
import CardList from './../CardList';
import Loading from './../Loading';
import SearchError from './../SearchError';
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
      {isLoading && <Loading />}
      {error && <SearchError/>}
      <CardList imgs={imgs}/>
    </div>
  );
}

export default Home;
