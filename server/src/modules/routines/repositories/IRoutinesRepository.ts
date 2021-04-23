import Routine from "../infra/typeorm/entities/Routine";
import ICreateRoutineDTO from "../dtos/ICreateRoutineDTO";
import IUpdateRoutineDTO from "../dtos/IUpdateRoutineDTO";
import IFindAllInMonthDTO from "../dtos/IFindAllInMonthDTO";
import IFindRoutineByIdDTO from "../dtos/IFindRoutineByIdDTO";

export default interface IRoutinesRepository {
  create(data: ICreateRoutineDTO): Promise<Routine>;
  update(data: IUpdateRoutineDTO): Promise<Routine>;
  find(data: IFindRoutineByIdDTO): Promise<Routine | undefined>;
  save(user: Routine): Promise<Routine>;
  findAllInMonth(data: IFindAllInMonthDTO): Promise<Routine[]>;
  delete(routineId: number): Promise<undefined>;
}
