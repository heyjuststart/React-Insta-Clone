import React from 'react';

const SearchBar = (props) => (
  <input
    className="search-bar"
    value={props.value}
    placeholder="Search"
  />
);

export default SearchBar;
