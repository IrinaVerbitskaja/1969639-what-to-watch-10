import {Films, Film} from '../types/film';
import FilmCard from './film/film-card';

type FilmList = {
  filmsList: Films;
}

function FilmCardList ({filmsList}: FilmList): JSX.Element {
  return (
    filmsList.map((film: Film) => (<FilmCard {...film}/>))
  );
}

export default FilmCardList;
