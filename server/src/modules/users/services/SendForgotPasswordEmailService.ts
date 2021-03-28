import { injectable, inject } from "tsyringe";

import AppError from "@shared/errors/AppError";

import IUsersRepository from "../repositories/IUsersRepository";

import IUserTokensRepository from "../repositories/IUserTokensRepository";

interface Request {
  email: string;
  body: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("UserTokensRepository")
    private userTokensRepository: IUserTokensRepository
  ) {}

  public async execute({ email }: Request): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User does not exists.");
    }

    const userToken = await this.userTokensRepository.generate(user.id);

    console.log('userToken', userToken);
  }
}
export default SendForgotPasswordEmailService;
