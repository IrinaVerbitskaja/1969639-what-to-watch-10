import {Films, Film} from '../types/film';
import FilmCard from './film/film-card';

function FilmCardList (props: Films): JSX.Element {
    return {
      props.films.map((film: Film) => (<FilmCard {...film}/>))
    };
}

export default FilmCardList;
