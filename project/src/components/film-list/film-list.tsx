import {Films, Film} from '../../types/film';
import FilmCard from '../film/film-card';
import {useState} from 'react';

type FilmList = {
  filmsList: Films;
}

function FilmCardList ({filmsList}: FilmList): JSX.Element {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          />)
        )
      }
    </>
  );
}


export default FilmCardList;
