import {Controller, Get, Body, Param,Query} from '@nestjs/common';
import {ArticlesService} from './articles.service';
import {ArticlesEntity} from './articles.entity';
import {Post} from '@nestjs/common/utils/decorators/request-mapping.decorator';
import {ParseIntPipe} from '../common/pipes/parse-int.pipe';
import {
    ApiUseTags,
    ApiBearerAuth,
    ApiOperation,
} from '@nestjs/swagger';
import {CreateArtclesDto} from "../dto/create-articles.dto";
import {UserEntity} from "../user/user.entity";
import {FindAllArticlesDto} from "../dto/findAll-articles.dto";

@ApiBearerAuth()
@ApiUseTags('articles')
@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {
    }

    @ApiOperation({title: '获取所有文章'})
    @Get()
    findAll(@Query() findAllArticlesDto: FindAllArticlesDto): Promise<ArticlesEntity[]> {
        return this.articlesService.findAll(findAllArticlesDto);
    }

    @ApiOperation({title: '获取单个文章'})
    @Get(':id')
    findOne(@Param('id', new ParseIntPipe())id,) {
        return this.articlesService.findOne(id)
    }

    @ApiOperation({title: '创建文章'})
    @Post()
    async create(@Body() articles: CreateArtclesDto) {
        const defaults:ArticlesEntity={
            createTime: new Date().toUTCString(),
            lastEditTime: new Date().toUTCString(),
            versionKey: 1.0,
            publish:true
        };
        let articlesEntity: UserEntity = Object.assign({}, defaults, articles);

        return this.articlesService.create(articlesEntity).then(
            (data) => {
                return data
            }
        )
    }
}
