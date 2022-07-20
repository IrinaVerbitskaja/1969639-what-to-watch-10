import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../const';
import PrivateRoute from '../private-route/private-route';
import ChiefScreen from '../../pages/chief-screen/chief-screen';
import AddReview from '../../pages/add-review/add-review';
import FilmList from '../../pages/film-list/film-list';
import MyList from '../../pages/my-list/my-list';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';

const film = {
  title: 'Fantastic Beasts: The Crimes of Grindelwald',
  genre: 'Fantastic',
  year: 2011,
  src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  alt: 'Fantastic Beasts: The Crimes of Grindelwald'
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<ChiefScreen {...film}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.FilmList}
          element={<FilmList />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
