import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint = apiUrl + "/users/sign-in";

export function login(email, password) {
  return http.post(apiEndpoint, {
    email,
    password,
  });
}
