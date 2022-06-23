const API_KEY = "71fa9975aabfb397c43736b2e166c8cb";

const requests = {
  fetchTrending: `/trending/all/week?api_key=71fa9975aabfb397c43736b2e166c8cb&lamguage=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=71fa9975aabfb397c43736b2e166c8cb&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=71fa9975aabfb397c43736b2e166c8cb&with_genres=28`,
  fetchHorroMovies: `/discover/movie?api_key=71fa9975aabfb397c43736b2e166c8cb&with_genres=27`,
  fetchComedyMovies: `/discover/movie?api_key=71fa9975aabfb397c43736b2e166c8cb&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=71fa9975aabfb397c43736b2e166c8cb&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=71fa9975aabfb397c43736b2e166c8cb&with_genres=99`,
};
export default requests;
