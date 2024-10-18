import ApiClient from "./apiBase";

const MovieApi = {
  getMovieData: (id) => {
    return ApiClient.get(`/anime/${id}/full`); // Pass the ID dynamically here
  },
};

export default MovieApi;
