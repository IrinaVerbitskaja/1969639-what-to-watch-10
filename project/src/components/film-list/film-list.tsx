import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {Films, Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';
import {countShowFilms} from '../../store/action';

type FilmList = {
  filmsList: Films;
}


function FilmCardList ({filmsList}: FilmList): JSX.Element {
  const [id, setId] = useState<number>(-1);
  const dispatch = useAppDispatch();
  const {genre, countShownFilms} = useAppSelector((state) => state);
  const films = filmsList.filter((film) => film.genre === genre || genre === 'All genres');
  dispatch(countShowFilms(films.length));
  const shownFilms = films.slice(0, countShownFilms);

  return (
    <>
      {
        shownFilms.map((film: Film) => (
          <FilmCard
            key={film.id}
            film={film}
            setId={setId}
            idState={id}
          />)
        )
      }
    </>
  );
}

export default FilmCardList;
