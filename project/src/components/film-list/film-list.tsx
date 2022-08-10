import {useAppSelector} from '../../hooks/index';
import {Films, Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmList = {
  filmsList: Films;
}

function FilmCardList ({filmsList}: FilmList): JSX.Element {

  const [id, setId] = useState<number>(-1);
  const {genre} = useAppSelector((state) => state);
  const films = filmsList.filter((film) => film.genre === genre || genre === 'All genres');

  return (
    <>
      {
        films.map((film: Film) => (
          <FilmCard id={film.id}
            key={film.id}
            previewVideoLink={film.previewVideoLink}
            posterImage={film.posterImage}
            videoLink={film.videoLink}
            name={film.name}
            genre={film.genre}
            setId={setId}
            idState={id}
            previewImage={film.previewImage}
            backgroundImage={film.backgroundImage}
            backgroundColor={film.backgroundColor}
            description={film.description}
            rating={film.rating}
            scoresCount={film.scoresCount}
            director={film.director}
            starring={film.starring}
            runTime={film.runTime}
            released={film.released}
            isFavorite={film.isFavorite}
          />)
        )
      }
    </>
  );
}


export default FilmCardList;
