import {Link} from 'react-router-dom';
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
      <li className="catalog__genres-item catalog__genres-item--active" onChange={() => dispatch(changeGenre('All genres'))}>
        <Link to= "/" className="catalog__genres-link">All genres</Link>
      </li>
      {genreList.map((value) =>
        (
          <li className="catalog__genres-item" key={value} onChange={() => dispatch(changeGenre({value}))}>
            <Link to= "/" className="catalog__genres-link">{value}</Link>
          </li>
        ))}
    </ul>
  );
}

export default GenreList;
