import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {IsString, IsInt, IsDate,IsBoolean,IsDateString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

@Entity()
export class UserEntity {
    @ApiModelProperty({type:Number,required:false})
    @PrimaryGeneratedColumn()
    @IsInt()
    readonly id?: number;

    @ApiModelProperty({type:String,description:'姓名',example:'张三'})
    @IsString()
    @Column()
    readonly name?: string;


    @ApiModelProperty({type:String,description:'Email',example:'q@q.c'})
    @IsString()
    @Column()
    readonly email?: string;

    @ApiModelProperty({type:String,description:'密码',example:'asdfads'})
    @IsString()
    @Column()
    readonly password?: string;

    @ApiModelProperty({type:Boolean,description:'是否激活',default:'true'})
    @IsBoolean()
    @Column({default: true})
    readonly publish?: boolean;

    @ApiModelProperty({type:String,description:'创建时间'})
    @IsDateString()
    @Column()
    readonly createTime?: String;

    @ApiModelProperty({type:String,description:'修改时间'})
    @IsDateString()
    @Column()
    readonly lastEditTime?: String;

    @ApiModelProperty({type:Number,description:'版本'})
    @IsInt()
    @Column()
    readonly versionKey?: number;
}
