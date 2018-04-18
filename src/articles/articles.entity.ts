import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class articles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text') content: string;

  @Column('text') tag: string;

  @Column({default:false}) publish: boolean;

  @Column() createTime: Date;

  @Column() lastEditTime: Date;

  @Column() versionKey: number;
}
