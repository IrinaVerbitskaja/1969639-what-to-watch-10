import {Films, Film} from '../types/film';
import FilmCard from './film/film-card';

function FilmCardList (props: Films): JSX.Element {
    return {props.map((film) => (
    <FilmCard {...film}/>)
  };
}

export default FilmCardList;
