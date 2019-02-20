import React, { useContext } from 'react';
import './SearchBar.scss';
import { PostContext, changeInputValue } from '../../App';

const SearchBar = () => {
  const {
    state: { filterTerms },
    dispatch
  } = useContext(PostContext);

  return (
    <input
      className="search-bar"
      value={filterTerms}
      placeholder="&#x1F50D; Search"
      onChange={e => {
        changeInputValue(e.target.value);
        dispatch({ type: 'filter-change', payload: e.target.value });
      }}
    />
  );
};

export default SearchBar;
