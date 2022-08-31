import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getGames } from '../../store/actions';
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
              <li>
                PLATHPHORMS:
                {' '}
                {game.platphorm}
              </li>
              <hr />
              <li>
                GENRE:
                {' '}
                {game.gener}
              </li>
              <hr />
              <li>
                RELEASE DATE:
                {' '}
                {game.released}
              </li>
              <hr />
              <li>
                YEAR START:
                {' '}
                {game.year_start}
              </li>
              <hr />
              <li>
                UPDATED:
                {' '}
                {game.updated}
              </li>
              <hr />
              <li>
                RATING:
                {' '}
                {game.rating}
              </li>
              <hr />
              <li>
                SUGGESTIONS COUNT:
                {' '}
                {game.suggestions_count}
              </li>
              <hr />
              <li>
                PLAYSTIME:
                {' '}
                {game.playtime}
              </li>
              <hr />
              <li>
                STORES:
                {' '}
                {game.stores}
              </li>
              <hr />
              <li>
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
