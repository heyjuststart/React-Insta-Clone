import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => (
  <input
    className="search-bar"
    value={props.filterTerms}
    placeholder="&#x1F50D; Search"
    onChange={props.onSearchChange}
  />
);

export default SearchBar;
