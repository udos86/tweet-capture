import { Injectable } from '@nestjs/common';
import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';
import { PassThrough } from 'stream';

export interface ConvertedMeta {
  path: string;
  size: number;
}

@Injectable()
export class YtService {

  convertVideo(id: string, format = 'mp3'): PassThrough{
    const url = `https://www.youtube.com/watch?v=${id}`;

    const input = ytdl(url, { filter: 'audioonly' });
    return ffmpeg(input).format(format).pipe() as PassThrough;
    /*
    const buffer = await new Promise<Buffer>(async (resolve, reject) => {
      const stream = ffmpeg(input)
        .format(format)
        .on('error', reject)
        //.on('end', resolve)
        .pipe() as PassThrough;
      
      const chunks = [];
      for await (const chunk of stream) {
        chunks.push(chunk);
      }
      resolve(Buffer.concat(chunks));
    });

    // const stat = await promises.stat(path);
    // const buffer = await promises.readFile(path);

    return buffer;
    */
  }
}
