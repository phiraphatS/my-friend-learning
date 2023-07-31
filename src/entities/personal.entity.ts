import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class personal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Title_name: string;

  @Column()
  frist_name: string;

  @Column()
  passlast_name: string;
}