import { Module } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HealthModule } from '@/health/health.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:giftsmongodb@mongodb:27017/giftsdb_v1?authSource=admin',
      // 'mongodb://root:giftsmongodb@mongodb:27017/giftsdb_v1?authSource=admin',
    ),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'root_password',
      database: 'giftsdb_v1',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
