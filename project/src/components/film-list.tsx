import {Films, Film} from '../types/film';
import FilmCard from './film/film-card';

type FilmCardList = {
  filmsList: Films;
}

function FilmCardList ({filmsList}: FilmCardList): JSX.Element {
    return {
      filmsList.map((film: Film) => (<FilmCard {...film}/>))
    };
}

export default FilmCardList;
