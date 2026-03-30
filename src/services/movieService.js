import { mockMovies } from "../data/movies";

export const getMovies = async () => {
  try {
    // future: replace with API call
    return { results: mockMovies };
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { results: [] };
  }
};