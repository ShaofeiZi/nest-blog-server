import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ArticlesModule} from './articles/articles.module';
import {UserModule} from './user/user.module'

@Module({
    imports: [TypeOrmModule.forRoot(), ArticlesModule, UserModule],
})
export class ApplicationModule {
}
