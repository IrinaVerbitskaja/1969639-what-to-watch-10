import {Film} from '../../types/film';

function FilmCard (props: Film): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.src} alt={props.filmName} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={props.href}>{props.filmName}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
