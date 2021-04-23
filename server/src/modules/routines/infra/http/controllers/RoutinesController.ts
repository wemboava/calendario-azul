import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import CreateRoutineService from "@modules/routines/services/CreateRoutineService";
import ListRoutinesService from "@modules/routines/services/ListRoutinesService";
import findRoutineByIdService from '@modules/routines/services/FindRoutineByIdService';
import deleteRoutineService from '@modules/routines/services/DeleteRoutineService';
import UpdateRoutineService from '@modules/routines/services/UpdateRoutineService';

export default class RoutinesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = Number(request?.user?.id);
    const { month, year } = request.params;

    const listRoutinesInMonth = container.resolve(
      ListRoutinesService
    );

    const routines = await listRoutinesInMonth.execute({
      user_id,
      month: Number(month),
      year: Number(year),
    });

    return response.json(routines);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const user_id = Number(request?.user?.id);
    const { id } = request.params;

    const findRoutineById = container.resolve(
      findRoutineByIdService
    );

    const routine = await findRoutineById.execute({
      user_id,
      id: Number(id),
    });

    return response.json(routine);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteRoutine = container.resolve(
      deleteRoutineService
    );

    const routine = await deleteRoutine.execute({
      id: Number(id),
    });

    return response.json(routine);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = Number(request?.user?.id);

    const { name, date, start_time, end_time, end_date, time_course, image } = request.body;

    const createRoutineService = container.resolve(CreateRoutineService);

    const routine = await createRoutineService.execute({ user_id, name, date, start_time, end_time, end_date, time_course, image });

    return response.status(200).json(classToClass(routine));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    // const user_id = Number(request?.user?.id);

    const { id, user_id, name, date, start_time, end_time, end_date, time_course, image } = request.body;

    const updateRoutineService = container.resolve(UpdateRoutineService);

    const routine = await updateRoutineService.execute({ id, user_id, name, date, start_time, end_time, end_date, time_course, image });

    return response.status(200).json(classToClass(routine));
  }
}
