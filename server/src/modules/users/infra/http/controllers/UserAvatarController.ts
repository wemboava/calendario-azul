import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import UpdateUserAvatarService from "@modules/users/services/UpdateUserAvatarService";

export default class UserAvatarController {
  public async create(request: Request, response: Response): Promise<Response> {
    const UpdateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await UpdateUserAvatar.execute({
      user_id: Number(request.user.id),
      avatarFileName: request.file.filename,
    });

    return response.status(200).json(classToClass(user));
  }
}
