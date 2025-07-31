import { Controller, Get, Res } from '@nestjs/common';
import { SchemeMarkdownService } from './scheme-markdown.service';
import { Response } from 'express';

@Controller('scheme_markdown')
export class SchemeMarkdownController {
  constructor(private readonly service: SchemeMarkdownService) {}

  @Get('/component.js')
  async getComponent(@Res() res: Response) {
    const jsContent = await this.service.compileToDisk();
    res.header('Content-Type', 'text/javascript');
    res.send(jsContent);
  }

  @Get('/data.json')
  getData() {
    return {
      version: 'beta1',
      time: '2025/07/31',
      title: '管家主应用重构',
      background:
        '管家主应用技术栈太旧，需要升级更新，因管家业务特殊性，不再主应用里直接更新， 采用新建应用作为基座主应用，原主应用作为qiankun子应用，最终通过修改域名解析的方式完成灰度，尽量减少影响。',
      goal: '新建应用采用最新技术栈webpack5、MF，支持最新语法、插件等辅助工具，原主应用作为不经常改动的qainkun子应用接入新基座，并且后续老应用里功能重构在对应的子应用里。',
    };
  }
}
