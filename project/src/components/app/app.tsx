import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../const';
import {useAppSelector} from '../../hooks';
import PrivateRoute from '../private-route/private-route';
import ChiefScreen from '../../pages/chief-screen/chief-screen';
import AddReview from '../../pages/add-review/add-review';
import FilmList from '../../pages/film-list/film-list';
import MyList from '../../pages/my-list/my-list';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import {Comments, FilmOne} from '../../types/film';
import {isCheckedAuth} from '../app/isAuth';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type Film = {
  comments: Comments;
  film: FilmOne;
};

function App({comments, film}: Film): JSX.Element {

  const {authorizationStatus, isDataLoaded, films} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<ChiefScreen films = {films} film = {film}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview film = {film}/>}
        />
        <Route
          path={AppRoute.FilmList}
          element={<FilmList />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyList films = {films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player film = {film}/>}
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
    </HistoryRouter>
  );
}

export default App;
