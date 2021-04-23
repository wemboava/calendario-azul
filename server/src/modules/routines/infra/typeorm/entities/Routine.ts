import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Expose } from "class-transformer";
import User from "@modules/users/infra/typeorm/entities/User";

export enum TimeCourse {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

@Entity("routines")
class Routine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  start_time: string;

  @Column()
  end_time: string;

  @Column()
  end_date: Date;

  @Column({ type: 'enum', enum: TimeCourse })
  time_course: TimeCourse;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Expose({ name: "image_url" })
  get getImageUrl(): string | null {
    return this.image
      ? `${process.env.APP_API_URL}/files/${this.image}`
      : null;
  }
}

export default Routine;
