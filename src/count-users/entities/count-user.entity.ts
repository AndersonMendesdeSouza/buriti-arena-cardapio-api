import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('access')
export class Access {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  visitorId: string;

  @CreateDateColumn()
  createdAt: Date;
}