import http from "./httpService";
import { apiUrl } from "../config/config.json";

const apiEndpoint = `${apiUrl}/users/sign-up`;

export function register(user) {
return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
