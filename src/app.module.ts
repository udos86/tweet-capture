import { Module } from '@nestjs/common';
import { AppController, YtController } from './app.controller';
import { CaptureService } from './capture.service';
import { HealthController } from './health.controller';
import { YtService } from './youtube-dl.service';

@Module({
  imports: [],
  controllers: [AppController, YtController, HealthController],
  providers: [CaptureService, YtService],
})
export class AppModule {}
