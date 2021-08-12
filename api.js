import axios from 'axios';

const TMDB_KEY = '660ff9f9a2520f19d1e514e28ea85b54';

const makeRequest = (path, params) => {
  return axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });
};

const getAnything = async (path, params = {}) => {
  try {
    const { data: { results }, data } = await makeRequest(path, params);
    console.log(results);
    return [results || data, null];
  } catch (err) {
    console.error(err);
    return [null, err];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything('/movie/now_playing'),
  popular: () => getAnything('/movie/popular'),
  topRated: () => getAnything('/movie/top_rated'),
  upcoming: () => getAnything('/movie/upcoming', { region: 'kr' }),
  discover: () => getAnything('/discover/movie'),
  movie: (id) => getAnything(`/movie/${id}`),
  search: (text) => getAnything('/search/movie', { query: text }),
};

export const tvApi = {
  today: () => getAnything('/tv/airing_today'),
  thisweek: () => getAnything('/tv/on_the_air'),
  popular: () => getAnything('/tv/popular'),
  topRated: () => getAnything('/tv/top_rated'),
  tv: (id) => getAnything(`/tv/${id}`),
  search: (text) => getAnything('/search/tv', { query: text }),
};
