import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {ArticlesModule} from './articles/articles.module';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';

@Module({
    imports: [TypeOrmModule.forRoot(), ArticlesModule, UserModule, AuthModule],
})
export class ApplicationModule {
}
