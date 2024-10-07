import http from "./httpService";
import { apiUrl } from "../config/config.json";

export async function getMovies() {
  return await http.get(`${apiUrl}/movies`);
}
export async function deleteMovie(movieId) {
  return await http.delete(`${apiUrl}/movies/${movieId}`);
}

export async function getMovie(movieId) {
  return await http.get(`${apiUrl}/movies/${movieId}`);
}

export async function saveMovie(movie) {}
