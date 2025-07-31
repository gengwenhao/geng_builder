import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchemeMarkdownModule } from './scheme-markdown/scheme-markdown.module';

@Module({
  imports: [SchemeMarkdownModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
