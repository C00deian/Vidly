import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint = `${apiUrl}/movies`;

const movieUrl = (id) => {
return `${apiEndpoint}/${id}`
}

export async function getMovies() {
  return await http.get(apiEndpoint);
}


export async function deleteMovie(movieId) {
  return await http.delete(movieUrl(movieId));
}


export async function getMovie(movieId) {
  return await http.get(movieUrl(movieId));
}


export async function saveMovie(movie) {

  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return await http.put((movieUrl(movie._id)), body);
  }

  return await http.post(`${apiEndpoint}/add-movie`, movie);
}
