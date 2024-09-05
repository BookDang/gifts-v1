import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HealthModule } from '@/health/health.module'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:giftsmongodb@mongodb:27017/giftsdb_v1?authSource=admin',
      // 'mongodb://root:giftsmongodb@mongodb:27017/giftsdb_v1?authSource=admin',
    ),
    HealthModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
