import axios from "axios";
import { User } from "../interfaces/User";

// Export request handlers as service so it can be reused;
export class GitHubUserService {
  static api = process.env.NEXT_PUBLIC_GITHUB_API;

  static getUsers(page = 1, perPage = 20) {
    return axios.get<User[]>(`${this.api}/users`, {
      params: {
        page,
        per_page: perPage,
      },
    });
  }

  static find(username: any) {
    return axios.get<User>(`${this.api}/users/${username}`);
  }

  static getFollowers(username: any) {
    return axios.get<User>(`${this.api}/users/${username}/followers`);
  }
}
