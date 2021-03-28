import { Gender } from "../infra/typeorm/entities/User";

export default interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  gender: Gender;
}
