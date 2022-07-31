import {Films, Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmList = {
  filmsList: Films;
}

function FilmCardList ({filmsList}: FilmList): JSX.Element {

  const [id, setId] = useState<number>(-1);

  return (
    <>
      {
        filmsList.map((film: Film) => (
          <FilmCard id = {film.id}
            key = {film.id}
            src = {film.src}
            hrefPage = {film.hrefPage}
            href = {film.href}
            filmName = {film.filmName}
            setId = {setId}
            idState = {id}
          />)
        )
      }
    </>
  );
}


export default FilmCardList;
