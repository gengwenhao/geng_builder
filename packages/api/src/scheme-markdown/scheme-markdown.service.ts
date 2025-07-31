import { Injectable } from '@nestjs/common';
import webpack from 'webpack';
import { promisify } from 'util';
import webpackConfig from '../../examples/webpack.config';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class SchemeMarkdownService {
  async compileToDisk(): Promise<string> {
    const compiler = webpack(webpackConfig);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const run = promisify(compiler.run.bind(compiler));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
    const stats = await run();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    if (stats.hasErrors()) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
      console.error('构建错误:', stats.toString('errors-only'));
      throw new Error('Webpack 构建失败');
    }

    const outputPath = join(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument
      webpackConfig.output.path,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
      webpackConfig.output.filename,
    );
    return readFileSync(outputPath, 'utf-8');
  }
}
