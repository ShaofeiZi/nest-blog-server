import {Controller, Get, Body, Param} from '@nestjs/common';
import {Post, Put} from '@nestjs/common/utils/decorators/request-mapping.decorator';
import {HttpCode} from "@nestjs/common/utils/decorators/http-code.decorator";
import {
    ApiUseTags,
    ApiBearerAuth,
    ApiResponse,
    ApiOperation,
} from '@nestjs/swagger';

import {UserService} from './user.service';
import {UserEntity} from './user.entity';
import {UserClass} from "../dto/create-user.dto";

@ApiBearerAuth()
@ApiUseTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }
    @ApiOperation({ title: '创建用户' })
    @Post()
    async create(@Body() User: UserClass) {
        let defaults: UserEntity = {
            createTime: new Date().toUTCString(),
            lastEditTime: new Date().toUTCString(),
            versionKey: 1.0,
            publish:true
        };
        let userEntity: UserEntity = Object.assign({}, defaults, User)
        return this.userService.create(userEntity).then(
            (data) => {
                return data
            }
        )
    }
    @ApiOperation({ title: '修改用户' })
    @ApiResponse({
        status: 201,
        description: '修改用户成功.',
    })
    @ApiResponse({ status: 403, description: '修改失败.' })
    @Put()
    @HttpCode(200)
    async put(@Body() User: UserClass) {
        let defaults: UserEntity = {
            lastEditTime: new Date().toUTCString(),
            versionKey: 1.0
        };
        let userEntity: UserEntity = Object.assign({}, defaults, User)
        return this.userService.create(userEntity).then(
            (data) => {
                return data
            }
        )
    }
}
