import Mapper, { MapFunction } from "../mappers/Mapper";
import Answer from "../models/Answer";
import User from "../models/User";

const API_URL = 'http://localhost:3000';


export const fetch = <T>(endpoint: string) => (cb: MapFunction<T>) => () => window.fetch(`${API_URL}/${endpoint}`).then(res => res.json()).then(cb);
export const fetchAnswers = fetch<Answer>('answers.1.json')(Mapper.toAnswers);
export const fetchUsers = fetch<User>('users.json')(Mapper.toUsers);

