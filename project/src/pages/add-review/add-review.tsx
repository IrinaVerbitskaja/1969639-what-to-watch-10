import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import VisuallyHidden from '../../components/visually-hidden/visually-hidden';
import Comments from '../../components/comments/comments';
import {FilmOne} from '../../types/film';

type FilmType = {
  film: FilmOne;
}

function AddReview ({film}: FilmType): JSX.Element {
  return (
    <body>

      <VisuallyHidden />

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.src} alt={film.alt} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">

            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href={film.href} className="breadcrumbs__link">{film.title}</a>
                </li>
                <li className="breadcrumbs__item">
                  <Link to="/" className="breadcrumbs__link">Add review</Link>
                </li>
              </ul>
            </nav>

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

          <div className="film-card__poster film-card__poster--small">
            <img src={film.src} alt={film.alt} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <Comments />
        </div>

      </section>
    </body>
  );
}

export default AddReview;
