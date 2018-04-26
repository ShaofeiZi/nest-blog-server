import {IsString, IsInt, IsDate,IsBoolean,IsDateString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';
export class CreateArtclesDto {
    @IsString()
    @ApiModelProperty({type:String,description:'标题',example:'标题'})
    readonly title: string;

    @IsString()
    @ApiModelProperty({type:String,description:'内容',example:'内容'})
    readonly content: string;

    @IsString()
    @ApiModelProperty({type:Array,description:'标签',example:'标签'})
    readonly tag: string;

    @IsBoolean()
    @ApiModelProperty({type:Boolean,description:'是否显示',example:'是否显示'})
    readonly publish: boolean;

    @IsDateString()
    @ApiModelProperty({type:String,description:'创建时间',example:'创建时间'})
    readonly createTime: Date;

    @IsDateString()
    @ApiModelProperty({type:String,description:'修改时间',example:'修改时间'})
    readonly lastEditTime: Date;
    @ApiModelProperty({type:Number,description:'版本',example:'1.0'})
    readonly versionKey: number;
}