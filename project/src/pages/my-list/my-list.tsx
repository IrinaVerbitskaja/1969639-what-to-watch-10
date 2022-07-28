import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import VisuallyHidden from '../../components/visually-hidden/visually-hidden';
import Footer from '../../components/footer/footer';
import {Films} from '../../types/film';
import FilmCardList from '../../components/film-list/film-list';

type FilmType = {
  films: Films;
}

function MyList ({films}: FilmType): JSX.Element {
  return (
    <body>

      <VisuallyHidden />

      <div className="user-page">
        <header className="page-header user-page__head">

          <Logo />

          <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
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

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__films-list">

            <FilmCardList filmsList = {films}/>

          </div>
        </section>

        <Footer />

      </div>
    </body>
  );
}

export default MyList;
