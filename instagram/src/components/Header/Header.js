import React, { useContext } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Instagram, Compass, Heart, LogOut } from 'react-feather';
import { PostContext } from '../../App';
import './Header.scss';

const Header = () => {
  const { dispatch } = useContext(PostContext);
  return (
    <div className="header-wrapper">
      <header className="header">
        <a href="#" className="logo-left">
          <Instagram size={24} />
          <div className="splitter-thing" />
          Instagram
        </a>
        <SearchBar />
        <div className="header-icons">
          <a href="#">
            <Compass size={24} />
          </a>
          <a href="#">
            <Heart size={24} />
          </a>
          <a href="#" onClick={e => {
            e.preventDefault();
            localStorage.clear();
            dispatch({ type: 'logged-out' });
          }}>
            <LogOut size={24} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
