import {IsString, IsInt, IsDate,IsBoolean,IsDateString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class FindAllArticlesDto {
    @ApiModelProperty({ type: Number, description:'Offset (paginated) where from entities should be taken.',example:''})
    @IsString()
    readonly skip: number;


    @ApiModelProperty({type:Number,description:'每次分页数',example:5})
    @IsString()
    readonly take: number;



}
