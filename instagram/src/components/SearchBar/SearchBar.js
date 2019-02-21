import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  flex: 0 1 auto;
  width: 215px;
  background-color: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  font-size: 1.4rem;
  height: 28px;
  padding: 3px;

  &:placeholder-shown {
    text-align: center;
  }
`;

const SearchBar = props => (
  <SearchInput
    value={props.filterTerms}
    placeholder="&#x1F50D; Search"
    onChange={props.onSearchChange}
  />
);

export default SearchBar;
