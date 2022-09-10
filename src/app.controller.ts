import { Controller, Get, Param, Response, StreamableFile } from '@nestjs/common';
import { Response as ExpressResponse } from 'express';
import { CaptureService } from './capture.service';
import { YtService } from './youtube-dl.service';

export interface GetParams {
  id: string;
}

@Controller('tweets')
export class AppController {
  constructor(private readonly captureService: CaptureService) { }

  @Get(':id')
  async getTweetCapture(@Param() params: GetParams): Promise<StreamableFile> {
    const format = 'jpeg';
    const buffer = await this.captureService.captureTweet(params.id, {type: format});

    const type = `image/${format}`;
    const disposition = `inline; filename="tweet.${type}"`;

    return new StreamableFile(buffer, {disposition, type});
  }
}

@Controller('yt')
export class YtController {
  constructor(private readonly ytService: YtService) { }

  @Get(':id')
  async convertVideo(@Param() params: GetParams, @Response() response: ExpressResponse) {
    const format = 'mp3';
    //const buffer = await this.ytService.convertVideo(params.id, format);
    const type = `audio/${format}`;
    //const length = Buffer.byteLength(buffer);
    const disposition = `inline; filename="yt.${format}"`;
    //return new StreamableFile(pass, {disposition, /*length*/ type});

    // Real Streaming
    response.setHeader('Content-Type', type);
    response.setHeader('Content-Disposition', disposition);

    this.ytService.convertVideo(params.id, format).pipe(response);
  }
}
