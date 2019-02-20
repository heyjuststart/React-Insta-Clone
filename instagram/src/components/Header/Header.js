import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Instagram, Compass, Heart, LogOut } from 'react-feather';
import './Header.scss';

const Header = (props) => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <a href="#" className="logo-left">
          <Instagram size={24} />
          <div className="splitter-thing" />
          Instagram
        </a>
        <SearchBar filterTerms={props.filterTerms} onSearchChange={props.onSearchChange}/>
        <div className="header-icons">
          <a href="#">
            <Compass size={24} />
          </a>
          <a href="#">
            <Heart size={24} />
          </a>
          <a href="#" onClick={props.logout}>
            <LogOut size={24} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
