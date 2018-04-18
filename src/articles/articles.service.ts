import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { articles } from './articles.entity';
import {CreateArtclesDto} from '../dto/create-articles.dto'

@Component()
export class ArticlesService {
  constructor(
    @InjectRepository(articles)
    private readonly articleRepository: Repository<articles>,
  ) {}

  async findAll(): Promise<articles[]> {
    return await this.articleRepository.find();
  }
  async create(articles:articles){
      return await this.articleRepository.persist(articles);
  }
}
