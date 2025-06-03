export interface CreateMovieDto {
  title: string;
  subtitle?: string;
  synopsis: string;
  moviePoster: string;
  backgroundPoster: string;
  popularity: number;
  totalVotes: number;
  approvalPercentage: number;
  releaseDate: string;
  duration: number;
  language: string;
  budget: number;
  revenue: number;
  profit: number;
  status: string;
  genres: string;
  trailerLink?: string;
}
