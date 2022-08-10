export type Film = {
id: number
name: string
posterImage: string
previewImage: string
backgroundImage: string
backgroundColor: string
videoLink: string
previewVideoLink: string
description: string
rating: number
scoresCount: number
director: string
starring: [string]
runTime: number
genre: string
released: number
isFavorite: boolean
};

export type Comment = {
  id: number;
  text: string[];
};

export type Films = Film[];

export type Comments = Comment[];

export type FilmOne = {
  title: string;
  genre: string;
  year: number;
  src: string;
  href: string;
  alt: string;
  hrefPage: string;
};
