import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() name: string;

  @Column() password: string;

  @Column({default:false}) publish: boolean;

  @Column() createTime: Date;

  @Column() lastEditTime: Date;

  @Column() versionKey: number;
}
