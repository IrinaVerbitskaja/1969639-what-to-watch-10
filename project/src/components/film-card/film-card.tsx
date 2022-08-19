import {Link, generatePath} from 'react-router-dom';
import {FilmCardProps} from './types';
import VideoPlayer from '../video-player/video-player';
import {AppRoute} from '../const';

function FilmCard (props: FilmCardProps): JSX.Element {

  const setIdHandle = () => {
    props.setId(props.film.id);
  };

  const resetIdHandle = () => {
    props.setId(-1);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={setIdHandle} onMouseLeave={resetIdHandle}>
      <div className="small-film-card__image">
        <VideoPlayer
          src={props.film.previewVideoLink}
          poster={props.film.posterImage}
          activeCard={props.film.id === props.idState}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.FilmList, {id: `${props.film.id}`})}>{props.film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
