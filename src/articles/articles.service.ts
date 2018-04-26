import {Component} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {articles} from './articles.entity';
import {CreateArtclesDto} from '../dto/create-articles.dto'
import {Artcles} from "../interfaces/articles.interface";

@Component()
export class ArticlesService {
    constructor(@InjectRepository(articles)
    private readonly articleRepository: Repository<articles>,) {
    }

    async findAll(): Promise<articles[]> {
        return await this.articleRepository.find();
    }

    async create(articles: articles) {
        return await this.articleRepository.persist(articles);
    }

    async findOne(id: string): Promise<articles> {
        return await this.articleRepository.findOneById(id)
    }
}
