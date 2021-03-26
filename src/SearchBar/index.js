import React, { useState } from 'react';
import searchImgs from './../utils/flickrAPI';
import './SearchBar.css';

function SearchBar({setImgs, setError, setIsLoading}) {
const [searchTags, setSearchTags] = useState({tags: ''})



  const handleChange = evt => {
    const { name, value } = evt.target;
    setSearchTags(fData => ({
      ...fData,
      [name]: value
    }));
  }

  async function handleSubmit(evt){
    evt.preventDefault();
    console.log("handling Submit")
    setIsLoading(true)
    const result = await searchImgs(searchTags.tags.replaceAll(' ', ','))
    console.log(result)
    if(result.imgs) setImgs(result.imgs)
    if (result.error) setError(result.error)
    setIsLoading(false)
    console.log("handled submit")
  }



  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="tags">tags</label>
        <input
          name="tags"
          type="text"
          placeholder="search flickr by tag"
          onChange={handleChange}
        />
        <button>Search</button>
    </form>
    </div>
  );
}

export default SearchBar;
