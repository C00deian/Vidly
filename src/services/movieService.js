import http from "./httpService";
const apiEndpoint = 'http://localhost:3030/api/movies'

export async function getMovies() {
  return await http.get(apiEndpoint)
}
export async function deleteMovie(movieId) {
   await http.delete(`${apiEndpoint}/${movieId}`)
}