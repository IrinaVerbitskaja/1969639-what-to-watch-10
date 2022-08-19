import {Film} from '../../types/film';

export type FilmCardProps = {film: Film} & {
  setId: (id: number) => void;
  idState: number;
}
