import {Component} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {ArticlesEntity} from './articles.entity';
import {CreateArtclesDto} from '../dto/create-articles.dto'
import {Artcles} from "../interfaces/articles.interface";
import {FindAllArticlesDto} from "../dto/findAll-articles.dto";

@Component()
export class ArticlesService {
    constructor(@InjectRepository(ArticlesEntity)
                private readonly articleRepository: Repository<ArticlesEntity>,) {
    }

    async findAll(findAllArticlesDto: FindAllArticlesDto): Promise<ArticlesEntity[]> {

        return await this.articleRepository.find({
            skip: 5,
            take: 10,
        });
    }

    async create(articles: ArticlesEntity) {
        return await this.articleRepository.persist(articles);
    }

    async findOne(id: string): Promise<ArticlesEntity> {
        return await this.articleRepository.findOneById(id)
    }
}
