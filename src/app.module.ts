import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ArticlesModule],
})
export class ApplicationModule {}
