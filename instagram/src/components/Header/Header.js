import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Instagram, Compass, Heart, LogOut } from 'react-feather';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const HeaderDiv = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 500px) {
    width: 100%;
    max-width: 1000px;
    align-self: center;
    padding: 26px;
  }
`;

const LogoLeft = styled.a`
  flex: 1 9999 0%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 3rem;
  font-family: 'Oleo Script', cursive;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const SplitterThing = styled.div`
  width: 1px;
  background-color: black;
  height: 28px;
  margin: 0 16px;
`;

const HeaderIcons = styled.div`
  flex: 1 0 0%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: auto;

  a {
    color: #717171;

    &:not(:last-child) {
      margin: 0 20px;
    }

    &:last-child {
      margin-left: 20px;
    }
  }
`;

const Header = props => {
  return (
    <HeaderWrapper>
      <HeaderDiv>
        <LogoLeft href="#">
          <Instagram size={24} />
          <SplitterThing />
          Instagram
        </LogoLeft>
        <SearchBar
          filterTerms={props.filterTerms}
          onSearchChange={props.onSearchChange}
        />
        <HeaderIcons>
          <a href="#">
            <Compass size={24} />
          </a>
          <a href="#">
            <Heart size={24} />
          </a>
          <a href="#" onClick={props.logout}>
            <LogOut size={24} />
          </a>
        </HeaderIcons>
      </HeaderDiv>
    </HeaderWrapper>
  );
};

export default Header;
