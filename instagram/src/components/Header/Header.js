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
          <Compass size={24}/>
        </a>
        <a href="#">
          <Heart size={24} />
        </a>
        <a href="#">
          <User size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;
