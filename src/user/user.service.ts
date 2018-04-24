import {Component} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {UserEntity} from './user.entity';

@Component()
export class UserService {
    constructor(@InjectRepository(UserEntity)
                private readonly UserRepository: Repository<UserEntity>,) {
    }

    async create(user: UserEntity) {
        console.log(user)
        return await this.UserRepository.persist(user);
    }
}
