/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../store/actions';
import GamesItem from './GamesItem';
import classes from './games.module.scss';

const Games = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredGames = games.filter((game) => game.title.toLowerCase()
    .includes(search.toLowerCase()));

  return (
    <div className={classes.card}>
      <div className={classes.search}>
        <input type="text" placeholder="Search..." onChange={handleChange} value={search} />
      </div>
      {
        !loading ? (
          filteredGames.length > 0 ? (
            filteredGames.map((game) => (
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
            <div className={classes.notFound}>
              <h1>No games found</h1>
            </div>
          )

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
