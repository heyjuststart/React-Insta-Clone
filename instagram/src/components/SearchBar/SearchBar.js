import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => (
  <input
    className="search-bar"
    value={props.value}
    placeholder="&#x1F50D; Search"
  />
);

export default SearchBar;
