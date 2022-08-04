import {useAppDispatch} from '../../hooks/index';
import {changeGenre} from '../../store/action';
import {Films} from '../../types/film';

type FilmList = {
  filmsList: Films;
}

function GenreList ({filmsList}: FilmList): JSX.Element {
  const dispatch = useAppDispatch();
  const genreSet = new Set();
  filmsList.forEach((film) => genreSet.add(film.genre));
  const genreList = Array.from(genreSet) as string[];

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active" onClick={() => dispatch(changeGenre('All genres'))}>
        All genres
      </li>
      {genreList.map((value) =>
        (
          <li className="catalog__genres-item" key={value} onClick={() => dispatch(changeGenre(`${value}`))}>
            {value}
          </li>
        ))}
    </ul>
  );
}

export default GenreList;
