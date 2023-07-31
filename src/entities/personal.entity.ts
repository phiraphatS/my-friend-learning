import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Personal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title_name: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

}