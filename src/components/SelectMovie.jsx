import React from 'react';
import { useSelector } from 'react-redux';
import ratingIcon from '../assets/img/ant-design_star-filled.svg';

function SelectMovie() {
  const item = useSelector((state) => state.item);
  console.log('item -> ', item);

  return (
    <div className="movie_page">
      <img width={300} src={item.posterUrl} alt="img" />
      <div className="flex">
        <div className="movie_page-info">
          <h1>
            {item.nameRu} <span>{item.year}</span>
          </h1>
          {item.nameEn && <h2>"{item.nameEn}"</h2>}
          <div>
            <h3>Страна: {item.countries[0].country}</h3>
            <h3>
              Жанры:
              {item.genres.map((obj) => (
                <p>&nbsp;{obj.genre} |</p>
              ))}
            </h3>
            {item.filmLength && <h3>Длительность: {item.filmLength}</h3>}
          </div>
        </div>
        <div className="rating_btn">
          <h2 className="rating">
            <img src={ratingIcon} alt="" />
            {item.rating}
          </h2>
          <button>Play Trailer</button>
        </div>
      </div>
    </div>
  );
}

export default SelectMovie;
