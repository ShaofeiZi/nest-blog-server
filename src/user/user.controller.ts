import {Controller, Get, Body,Param} from '@nestjs/common';
import {Post} from '@nestjs/common/utils/decorators/request-mapping.decorator';
import {HttpCode} from "@nestjs/common/utils/decorators/http-code.decorator";


import {UserService} from './user.service';
import {UserEntity} from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post()
    @HttpCode(200)
    async create(@Body() User: UserEntity) {
        console.log(User)
       return  this.userService.create(User).then(
            (data)=>{
                return data
            }
        )
    }
}
