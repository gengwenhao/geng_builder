import { Module } from '@nestjs/common';
import { SchemeMarkdownService } from './scheme-markdown.service';
import { SchemeMarkdownController } from './scheme-markdown.controller';

@Module({
  controllers: [SchemeMarkdownController],
  providers: [SchemeMarkdownService],
})
export class SchemeMarkdownModule {}
