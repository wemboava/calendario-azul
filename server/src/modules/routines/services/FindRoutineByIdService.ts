import { injectable, inject } from "tsyringe";

import Routine from "@modules/routines/infra/typeorm/entities/Routine";
import IRoutinesRepository from "../repositories/IRoutinesRepository";

interface Request {
  user_id: number;
  id: number;
}

@injectable()
class FindRoutineByIdService {
  constructor(
    @inject("RoutinesRepository")
    private routinesRepository: IRoutinesRepository,
  ) {}

  public async execute({
    user_id,
    id
  }: Request): Promise<Routine | undefined> {
    const routine = await this.routinesRepository.find(
      {
        user_id,
        id
      }
    );

    return routine;
  }
}

export default FindRoutineByIdService;
