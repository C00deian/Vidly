import http from './httpService';

export function getGenres() {
 return http.get('http://localhost:3030/api/genres');
}
  
  