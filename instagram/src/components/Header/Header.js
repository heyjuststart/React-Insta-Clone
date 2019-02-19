import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Instagram, Compass, Heart, User } from 'react-feather';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo-left">
        <Instagram size={24} />
        <div className="splitter-thing"></div>
        Instagram
      </a>
      <SearchBar />
      <div className="header-icons">
        <a href="#">
          <Compass />
        </a>
        <a href="#">
          <Heart />
        </a>
        <a href="#">
          <User />
        </a>
      </div>
    </header>
  );
};

export default Header;
