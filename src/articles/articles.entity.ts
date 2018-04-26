import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArticlesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 500 })
  title?: string;

  @Column('text') content?: string;

  @Column('text') tag?: string;

  @Column({default:false}) publish?: boolean;

  @Column() createTime?: String;

  @Column() lastEditTime?: String;

  @Column() versionKey?: number;
}
