import {Controller, Get, Body} from '@nestjs/common';
import {ArticlesService} from './articles.service';
import {articles} from './articles.entity';
import {Post} from '@nestjs/common/utils/decorators/request-mapping.decorator';
import {HttpCode} from "@nestjs/common/utils/decorators/http-code.decorator";

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {
    }

    @Get()
    findAll(): Promise<articles[]> {
        return this.articlesService.findAll();
    }

    @Post()
    @HttpCode(200)
    async create(@Body() articles: articles) {
        //  this.articlesService.create(articles).then(
        //     (data)=>{
        //         return data
        //     }
        // )
        return articles
    }
}
