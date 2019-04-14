
import Mapper, { MapFunction } from "../mappers/Mapper";
import Answer from "../models/Answer";
import User from "../models/User";

const API_URL = 'http://localhost:3000';

const toJson = (res: Response) => res.json();
const handleErrors = (res: Response) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
}
export const fetch = <T>(endpoint: string) =>
  (cb: MapFunction<T>) =>
    () => window.fetch(`${API_URL}/${endpoint}`)
            .then(handleErrors)
            .then(toJson)
            .then(cb);

export class ApiService {
  static fetchAnswers = fetch<Answer>("answers.1.json")(Mapper.toAnswers);
  static fetchUsers = fetch<User>("users.json")(Mapper.toUsers);
}