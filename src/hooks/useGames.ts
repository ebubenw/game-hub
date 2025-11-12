import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.slug, page_size: 60 } },
    [selectedGenre?.slug, console.log(selectedGenre?.name)]
  );

export default useGames;
