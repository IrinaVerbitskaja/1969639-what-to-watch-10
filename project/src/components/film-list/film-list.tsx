import {Films, Film} from '../../types/film';
import FilmCard from '../film/film-card';
import {useState, MouseEvent} from 'react';

type FilmList = {
  filmsList: Films;
}

function FilmCardList ({filmsList}: FilmList): JSX.Element {

  const [id, setId] = useState<number>(film.id);

  const idChangeHandle = (evt: MouseEvent<HTMLDivElement>) => {
    setId(film.id);
  };

  return (
    <>
      {
        filmsList.map((film: Film) => (
          <FilmCard id = {film.id}
            key = {film.id}
            src = {film.src}
            href = {film.href}
            filmName = {film.filmName}
            onMouseMove = {idChangeHandle}
          />)
        )
      }
    </>
  );
}


export default FilmCardList;
