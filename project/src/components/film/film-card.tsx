import {Link, generatePath} from 'react-router-dom';
import {FilmCardProps} from './types';
import Player from '../../pages/player/player';
import {AppRoute} from '../const';

function FilmCard (props: FilmCardProps): JSX.Element {

  const setIdHandle = () => {
    props.setId(props.id);
  };

  const resetIdHandle = () => {
    props.setId(-1);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={setIdHandle} onMouseLeave={resetIdHandle}>
      <div className="small-film-card__image" id = {`${props.id}`}>
        <img src={props.src} alt={props.filmName} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.FilmList, {id: `${props.id}`})}>{props.filmName}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
