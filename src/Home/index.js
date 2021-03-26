import React, { useState } from 'react';
import SearchBar from './../SearchBar';
import Card from './../Card';
import CardList from './../CardList';
import './Home.css';

function Home() {

  const [isLoading, setIsLoading] = useState(false)
  const [imgs, setImgs] = useState([])
  const [error, setError] = useState(undefined)

  // const cardTest = {
  //   src: "https:www.flickr.comphotoswhitebutton51072149317",
  //   title: "Banana Blues",
  //   alt: "Banana Blues"
  // }

  return (
    <div className="Home">
      <SearchBar
        setIsLoading={setIsLoading}
        setImgs={setImgs}
        setError={setError}
      />
      <CardList imgs={imgs}/>
    </div>
  );
}

export default Home;
