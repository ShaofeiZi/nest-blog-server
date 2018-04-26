import {IsString, IsInt, IsDate,IsBoolean,IsDateString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class UserClass {
    @ApiModelProperty({type:String,description:'姓名',example:'张三'})
    @IsString()
    readonly name: string;


    @ApiModelProperty({type:String,description:'Email',example:'q@q.c'})
    @IsString()
    readonly email: string;

    @ApiModelProperty({type:String,description:'密码',example:'asdfads'})
    @IsString()
    readonly password: string;

}
