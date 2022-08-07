import React from 'react';
import searchIcon from '../assets/img/eva_search-outline.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/vlims">
        <div className="header__logo">Vilm</div>
      </Link>
      <form className="header__search">
        <input type="text" />
        <input type="submit" hidden />
        <img src={searchIcon} alt="" />
      </form>
    </div>
  );
}

export default Header;
