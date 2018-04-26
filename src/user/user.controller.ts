import {Controller, Get, Body,Param} from '@nestjs/common';
import {Post} from '@nestjs/common/utils/decorators/request-mapping.decorator';
import {HttpCode} from "@nestjs/common/utils/decorators/http-code.decorator";


import {UserService} from './user.service';
import {UserEntity} from './user.entity';
import {UserClass} from "../dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post()
    @HttpCode(200)
    async create(@Body() User: UserClass) {
        let defaults:UserEntity={
            createTime:new Date().toUTCString(),
            lastEditTime: new Date().toUTCString(),
            versionKey:1.0
        }
        let userEntity:UserEntity = Object.assign({}, defaults, User)
       return  this.userService.create(userEntity).then(
            (data)=>{
                return data
            }
        )
    }
}
