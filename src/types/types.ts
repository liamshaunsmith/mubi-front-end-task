export interface Film {
  cast: {
    credits: string[];
    id: string;
    name: string;
  }[];
  id: string;
  image_url: string;
  genres: string[];
  release_year: number;
  title: string;
  video_url: string;
}

export interface FilmReview {
  contents: string;
  filmId: Film['id'];
}
