import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import FilmCardList from '../../components/film-list/film-list';
import VisuallyHidden from '../../components/visually-hidden/visually-hidden';
import GenreList from '../../components/genre-list/genre-list';
import Footer from '../../components/footer/footer';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {increaseCountShownFilms} from '../../store/action';
import {Films, FilmOne} from '../../types/film';

type FilmType = {
  films: Films;
  film: FilmOne;
}

function ChiefScreen ({films, film}: FilmType): JSX.Element {
  const dispatch = useAppDispatch();
  const {countShownFilms, countFilms} = useAppSelector((state) => state);
  return (
    <>

      <VisuallyHidden />

      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">

          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to="/" className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src= {film.src} alt={film.alt}width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{film.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList filmsList={films}/>

          <div className="catalog__films-list">

            <FilmCardList filmsList = {films}/>

          </div>

          <div className="catalog__more">
            <button
              className={countShownFilms >= countFilms ? 'catalog__button visually-hidden' : 'catalog__button'}
              type="button"
              onClick={() => {
                dispatch(increaseCountShownFilms());
              }}
            >
              Show more
            </button>
          </div>
        </section>

        <Footer />

      </div>
    </>
  );
}

export default ChiefScreen;

