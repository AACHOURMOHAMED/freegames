/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../store/actions';
import GamesItem from './GamesItem';
import classes from './games.module.scss';

const Games = () => {
  const [loading, setLoading] = useState(true);
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
    setLoading(false);
  }, []);

  return (
    <div className={classes.card}>
      {
        !loading ? (
          // filter games by sart year 2013 2015 2018
          games.filter((game) => game.year_start === '2013' || game.year_start === '2015' || game.year_start === '2018').map((game) => (
            <GamesItem
              key={game.id}
              id={game.id}
              title={game.title}
              released={game.released}
              image={game.image}
              gener={game.gener}
            />
          ))
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>

        )
        }
    </div>

  );
};

export default Games;
