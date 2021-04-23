import { injectable, inject } from "tsyringe";

import Routine, { TimeCourse } from "../infra/typeorm/entities/Routine";

import IRoutinesRepository from "../repositories/IRoutinesRepository";

interface Request {
  user_id: number;
  name: string;
  date: Date;
  start_time: string;
  end_time: string;
  end_date: Date;
  time_course: TimeCourse;
  image: string;
}

@injectable()
class CreateRoutineService {
  constructor(
    @inject("RoutinesRepository")
    private routinesRepository: IRoutinesRepository,
  ) {}

  public async execute({ user_id, name, date, start_time, end_time, end_date, time_course, image }: Request): Promise<Routine> {

    const routine = await this.routinesRepository.create({
      user_id, name, date, start_time, end_time, end_date, time_course, image
    });

    return routine;
  }
}

export default CreateRoutineService;
