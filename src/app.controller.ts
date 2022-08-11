import { Body, Controller, Get, Param, Response, StreamableFile } from '@nestjs/common';
import console from 'console';
import { Response as ExpressResponse } from 'express';
import { CaptureService } from './capture.service';

export interface GetTweetParams {
  id: string;
}

@Controller('tweets')
export class AppController {
  constructor(private readonly captureService: CaptureService) { }

  @Get(':id')
  async getTweetCapture(@Param() params: GetTweetParams, @Response({passthrough: true}) response: ExpressResponse): Promise<StreamableFile> {
    const type = 'jpeg';
    const buffer = await this.captureService.captureTweet(params.id, {type});

    response.set({
      'Content-Type': `image/${type}`,
      'Content-Disposition': `inline; filename="tweet.${type}"`
    });

    return new StreamableFile(buffer);
  }
}
