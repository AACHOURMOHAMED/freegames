import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGames } from '../../store/actions';
import Header from '../Header/header';
import classes from './gameDetail.module.scss';

const GameDetail = () => {
  const [loading, setLoading] = useState(true);
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
    setLoading(false);
  }, []);

  const { id } = useParams();
  const game = games.find((game) => game.id === +id);
  if (!game) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className={classes.card}>
      { !loading ? (
        <>

          <div className={classes.detailsCard}>
            <Header />
            <div className={classes.card_info}>
              <ul key={game.id}>
                <li>{game.title}</li>
                <li>{game.gener}</li>
                <li>{game.released}</li>
              </ul>
            </div>
            <img src={game.image} alt={game.title} />
            <div className={classes.back} />
          </div>
          <div className={classes.card_info__details}>
            <ul key={game.id}>
              <li className={classes.item}>
                PLATHPHORMS:
                {' '}
                {game.platphorm}
              </li>
              <li className={classes.item}>
                GENRE:
                {' '}
                {game.gener}
              </li>
              <li className={classes.item}>
                RELEASE DATE:
                {' '}
                {game.released}
              </li>
              <li className={classes.item}>
                YEAR START:
                {' '}
                {game.year_start}
              </li>
              <li className={classes.item}>
                UPDATED:
                {' '}
                {game.updated}
              </li>
              <li className={classes.item}>
                RATING:
                {' '}
                {game.rating}
              </li>
              <li className={classes.item}>
                SUGGESTIONS COUNT:
                {' '}
                {game.suggestions_count}
              </li>
              <li className={classes.item}>
                PLAYSTIME:
                {' '}
                {game.playtime}
              </li>
              <li className={classes.item}>
                STORES:
                {' '}
                {game.stores}
              </li>
              <li className={classes.item}>
                TAGS:
                {' '}
                {game.tags}
              </li>
            </ul>
          </div>
        </>

      ) : (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>

  );
};

export default GameDetail;
