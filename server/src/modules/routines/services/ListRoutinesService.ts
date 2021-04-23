import { injectable, inject } from "tsyringe";

import Routine from "@modules/routines/infra/typeorm/entities/Routine";
import IRoutinesRepository from "../repositories/IRoutinesRepository";

interface Request {
  user_id: number;
  month: number;
  year: number;
}

@injectable()
class ListRoutinesService {
  constructor(
    @inject("RoutinesRepository")
    private routinesRepository: IRoutinesRepository,
  ) {}

  public async execute({
    user_id,
    month,
    year,
  }: Request): Promise<Routine[]> {
    const appointments = await this.routinesRepository.findAllInMonth(
      {
        user_id,
        month,
        year,
      }
    );

    return appointments;
  }
}

export default ListRoutinesService;
