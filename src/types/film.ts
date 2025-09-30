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
  review?: string;
  title: string;
  video_url: string;
}
