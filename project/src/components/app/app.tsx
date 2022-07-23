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
import {Films, Comments} from '../../types/film';


type Film = {
  filmList: Films;
  comments: Comments;
};

function App({filmList, comments}: Film): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<ChiefScreen {...filmList}/>}
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
