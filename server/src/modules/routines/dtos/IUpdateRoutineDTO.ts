import { TimeCourse } from "../infra/typeorm/entities/Routine";

export default interface IUpdateRoutineDTO {
  id: number;
  user_id: number;
  name: string;
  date: Date;
  start_time: string;
  end_time: string;
  end_date: Date;
  time_course: TimeCourse;
  image: string;
}
