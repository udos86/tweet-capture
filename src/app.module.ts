import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CaptureService } from './capture.service';
import { HealthController } from './health.controller';

@Module({
  imports: [],
  controllers: [AppController, HealthController],
  providers: [CaptureService],
})
export class AppModule {}
