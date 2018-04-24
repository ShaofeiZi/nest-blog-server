import {Controller, Get, Body,Param} from '@nestjs/common';
import {ArticlesService} from './articles.service';
import {articles} from './articles.entity';
import {Post} from '@nestjs/common/utils/decorators/request-mapping.decorator';
import {HttpCode} from "@nestjs/common/utils/decorators/http-code.decorator";
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import {Artcles} from "../interfaces/articles.interface";
@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {
    }

    @Get()
    findAll(): Promise<CreateArtclesDto[]> {
        return this.articlesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe())id,) {
        return this.articlesService.findOne(id)
    }

    @Post()
    @HttpCode(200)
    async create(@Body() articles: Artcles) {
       return  this.articlesService.create(articles).then(
            (data)=>{
                return data
            }
        )
    }
}
