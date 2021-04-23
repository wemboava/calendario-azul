import { getRepository, Repository, MoreThanOrEqual, LessThanOrEqual } from "typeorm";
import Routine, { TimeCourse } from "@modules/routines/infra/typeorm/entities/Routine";
import IRoutinesRepository from "@modules/routines/repositories/IRoutinesRepository";
import ICreateRoutineDTO from "@modules/routines/dtos/ICreateRoutineDTO";
import IUpdateRoutineDTO from "@modules/routines/dtos/IUpdateRoutineDTO";
import IFindAllInMonthDTO from "@modules/routines/dtos/IFindAllInMonthDTO";
import { eachDayOfInterval, format, formatDistanceToNow, getDate, getDay, isFriday, isMonday, isSaturday, isSunday, isThursday, isTuesday, isWednesday, lastDayOfMonth, set } from "date-fns";
import { convertToTimeZone, formatToTimeZone } from 'date-fns-timezone';
import IFindRoutineByIdDTO from "@modules/routines/dtos/IFindRoutineByIdDTO";

class RoutinesRepository implements IRoutinesRepository {
  private ormRepository: Repository<Routine>;

  constructor() {
    this.ormRepository = getRepository(Routine);
  }

  public async create(routineData: ICreateRoutineDTO): Promise<Routine> {
    const routine = this.ormRepository.create({...routineData, date: formatToTimeZone(routineData.date, 'YYYY-MM-DD', { timeZone: 'America/Sao_Paulo' })});

    await this.ormRepository.save(routine);

    return routine;
  }

  public async update(routineData: IUpdateRoutineDTO): Promise<Routine> {
    const routine = await this.ormRepository.findOne(routineData.id);

    if (routine) {
      await this.ormRepository.merge(routine, routineData)
      await this.ormRepository.save(routine);
    }

    return routine as unknown as Routine;
  }

  public async save(routine: Routine): Promise<Routine> {
    return this.ormRepository.save(routine);
  }

  public async delete(routineId: number): Promise<undefined> {
    await this.ormRepository.update({ id: routineId }, {
      deleted_at: new Date()
    })

    return undefined
  }

  public async find({ user_id, id }: IFindRoutineByIdDTO): Promise<Routine | undefined> {
    return this.ormRepository.findOne({
      where: {
        user_id,
        id
      }
    });
  }

  public async findAllInMonth({
    user_id,
    year,
    month,
  }: IFindAllInMonthDTO): Promise<Routine[]> {
    const _firstDayOfMonth = new Date(Number(year), Number(month), 1)
    const _lastDayOfMonth = lastDayOfMonth(_firstDayOfMonth)
    const monthArrayMap = eachDayOfInterval({
      start: _firstDayOfMonth,
      end: _lastDayOfMonth
    })
    const getHours = (time: string) => Number(time.split(':')[0]);
    const getMinutes = (time: string) => Number(time.split(':')[1]);

    const dayOfWeekMap = {
      0: isSunday,
      1: isMonday,
      2: isTuesday,
      3: isWednesday,
      4: isThursday,
      5: isFriday,
      6: isSaturday,
    };

    const routines = await this.ormRepository.find({
      where: {
        user_id,
        date: LessThanOrEqual(_lastDayOfMonth),
        end_date: MoreThanOrEqual(_firstDayOfMonth)
      },
    });

    const createDate = (currentDate: Date) => {
      const parsedDate = set(new Date(), {
        year: Number(year),
        month: Number(month),
        date: getDate(currentDate)
      })

      return convertToTimeZone(parsedDate, { timeZone: 'America/Sao_Paulo' });
    }

    const createDateWithTime = (date: Date, time: string) => {
      const parsedDate = set(date, {
        hours: getHours(time),
        minutes: getMinutes(time)
      })

      return formatToTimeZone(parsedDate, 'YYYY-MM-DDTHH:mm:ss', { timeZone: 'America/Sao_Paulo' });
    }

    const generateColor = () => {
      return "#000000".replace(/0/g,() => (~~(Math.random()*16)).toString(16))
    }

    const newRotines = routines.reduce((acc, curr) => {
      let dates = [] as any[]
      const color = generateColor()

      if (curr.time_course === TimeCourse.DAILY) {
        dates = monthArrayMap.map(date => ({
          ...curr,
          date: format(date, 'yyyy-MM-dd'),
          text: curr.name,
          start: createDateWithTime(date, curr.start_time),
          end:  createDateWithTime(date, curr.end_time),
          color
        })
      )}
      if (curr.time_course === TimeCourse.WEEKLY) {
        const weekDay = getDay(curr.date)
        dates = monthArrayMap
          .filter(item => dayOfWeekMap[weekDay](item))
          .map(date => ({
            ...curr,
            date: format(date, 'yyyy-MM-dd'),
            text: curr.name,
            start: createDateWithTime(new Date(date), curr.start_time),
            end:  createDateWithTime(new Date(date), curr.end_time),
          })
        )
      }
      if (curr.time_course === TimeCourse.MONTHLY || curr.time_course === TimeCourse.YEARLY) {
        const date = createDate(curr.date)
        dates = [{
          ...curr,
          date: format(date, 'yyyy-MM-dd'),
          text: curr.name,
          start: createDateWithTime(date, curr.start_time),
          end:  createDateWithTime(date, curr.end_time),
        }]
      }

      return [...acc, ...dates];
    }, [] as Routine[])

    return newRotines;
  }
}

export default RoutinesRepository;
