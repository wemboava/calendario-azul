import { injectable, inject } from "tsyringe";

import Routine from "@modules/routines/infra/typeorm/entities/Routine";
import IRoutinesRepository from "../repositories/IRoutinesRepository";

interface Request {
  id: number;
}

@injectable()
class DeleteRoutineService {
  constructor(
    @inject("RoutinesRepository")
    private routinesRepository: IRoutinesRepository,
  ) {}

  public async execute({
    id
  }: Request): Promise<Routine | undefined> {
    const routine = await this.routinesRepository.delete(id);

    return routine;
  }
}

export default DeleteRoutineService;
