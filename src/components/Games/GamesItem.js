import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './gameItem.module.scss';

const GamesItem = (props) => {
  const {
    id, title, released, image, gener,
  } = props;
  return (
    <NavLink to={`/details/${id}`} className={classes.card}>
      <img src={image} alt={title} />
      <div className={classes.back} />
      <div className={classes.card_info}>
        <ul key={id}>
          <li>{title}</li>
          <li>{gener}</li>
          <li>{released}</li>
        </ul>
      </div>
    </NavLink>
  );
};

export default GamesItem;

GamesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  released: PropTypes.string.isRequired,
  gener: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
