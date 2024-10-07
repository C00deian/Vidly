import http from "./httpService";
import { apiUrl } from "../config/config.json";

export async function getMovies() {
    return await http.get(`${apiUrl}/movies`);
}
export async function deleteMovie(movieId) {
  await http.delete(`${apiUrl}/movies/${movieId}`);

}
