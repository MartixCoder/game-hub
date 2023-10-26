import {useInfiniteQuery} from "@tanstack/react-query";
import {GameQuery} from "../App";
import APIClient, {FetchResponce} from "../services/api-client";

const apiClient = new APIClient<Game>("/games");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponce<Game[]>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
  });

export default useGames;
