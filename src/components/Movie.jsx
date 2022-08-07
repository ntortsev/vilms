import React from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMovie } from '../Redux/action';
//f
function Movie({ items }) {
  const dispatch = useDispatch();
  const onClickCart = (item) => {
    dispatch(selectMovie(item));
  };
  return (
    <section className="section__trending-movies">
      <h1>Trending Movies</h1>
      <div className="items">
        {items.map((item) => (
          <Link onClick={() => onClickCart(item)} key={item.filmId} to="/vlim/movie">
            <CartItem item={item} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Movie;
