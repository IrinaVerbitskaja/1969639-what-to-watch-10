import {useAppSelector} from '../../hooks/index';
import {Films, Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmList = {
  filmsList: Films;
}

function FilmCardList ({filmsList}: FilmList): JSX.Element {

  const [id, setId] = useState<number>(-1);
  const {genre} = useAppSelector((state) => state);
  const films = filmsList.filter((film) => film.genre === genre || genre === 'All genres');

  return (
    <>
      {
        films.map((film: Film) => (
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
