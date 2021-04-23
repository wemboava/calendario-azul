import { container } from "tsyringe";

import "@modules/users/providers";
import "./providers";

import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";

import IUserTokensRepository from "@modules/users/repositories/IUserTokensRepository";
import UserTokensRepository from "@modules/users/infra/typeorm/repositories/UserTokensRepository";

import IRoutinesRepository from "@modules/routines/repositories/IRoutinesRepository";
import RoutinesRepository from "@modules/routines/infra/typeorm/repositories/RoutinesRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUserTokensRepository>(
  "UserTokensRepository",
  UserTokensRepository
);

container.registerSingleton<IRoutinesRepository>(
  "RoutinesRepository",
  RoutinesRepository
);
