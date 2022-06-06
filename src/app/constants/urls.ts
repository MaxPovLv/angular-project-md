import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  films: `${API}/discover/movie`,
  genres: `${API}/genre/movie/list`,
  search: `${API}/search/keyword?query=`
}
