import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {changeGenre, resetCountShownFilms} from '../../store/action';
import {Films} from '../../types/film';

type FilmList = {
  filmsList: Films;
}

function GenreList ({filmsList}: FilmList): JSX.Element {
  const dispatch = useAppDispatch();
  const {genre} = useAppSelector((state) => state);
  const genreSet = new Set();
  filmsList.forEach((film) => genreSet.add(film.genre));
  const genreList = Array.from(genreSet) as string[];

  const handleGenreClick = (genreFilm: string) => {
    dispatch(changeGenre(genreFilm));
    dispatch(resetCountShownFilms());
  };

  return (
    <ul className="catalog__genres-list">
      <li className={genre === 'All genres' ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} onClick={() => handleGenreClick('All genres')}>
        <div className="catalog__genres-link">
          All genres
        </div>
      </li>
      {genreList.map((value) =>
        (
          <li className={genre === value ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'} key={value} onClick={() => handleGenreClick(`${value}`)}>
            <div className="catalog__genres-link">
              {value}
            </div>
          </li>
        ))}
    </ul>
  );
}

export default GenreList;
