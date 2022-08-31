import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import classes from './header.module.scss';

const Header = () => (
  <header>
    <NavLink to="/">
      <div className={classes.back}>
        <BiArrowBack />
      </div>
    </NavLink>
  </header>
);

export default Header;
