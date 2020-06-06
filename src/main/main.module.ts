import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MainService } from './main.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MainSchema } from './schemas/main.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Main',
        schema: MainSchema
      }
    ])
  ],
  controllers: [MainController],
  providers: [MainService]
})
export class MainModule {}
