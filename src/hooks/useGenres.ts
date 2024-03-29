import {useQuery} from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import genres from "../Data/genres";
import {Genre} from "../entites/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"), // 24h
    initialData: {count: genres.length, results: genres, next: null},
  });

export default useGenres;
