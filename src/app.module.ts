import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainModule } from './main/main.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:QUr5yHLZWeq3mpVH@localhost:27017/admin?retryWrites=true', {
    useNewUrlParser: true
  }), MainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// MongooseModule.forRoot(process.env.DB_CONNECTION_STRING)
