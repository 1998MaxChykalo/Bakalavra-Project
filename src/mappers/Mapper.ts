import Answer from "../models/Answer";
import User from "../models/User";

export type MapFunction<T> = (res: any) => (T)[];
export default class Mapper {

  static toAnswer({ to, from, weight }: any): Answer | null {
    return (to && from && weight) ? 
      <Answer>{ to, from, weight }
      : null;
  }

  static toAnswers(values: any[]): Answer[] {
    const res: Answer[] = [];
    values.map(Mapper.toAnswer).forEach(answer => answer && res.push(answer));
    return res;
  }

  static toUser({ id, name }: any): User | null {
    return id && name ? <User>{ id, name } : null
  }

  static toUsers(values: any[]): User[] {
    const res: User[] = [];
    values.map(Mapper.toUser).forEach(user => user && res.push(user));
    return res;
  }
}