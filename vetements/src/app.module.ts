import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VetementsModule } from './vetements/vetements.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import dbConfig from './config/db.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VetementRepository } from './vetements/vetement.repository';
@Module({
  imports: [
  
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: dbConfig,

    }),
    VetementsModule,
  ],
 
  controllers: [],
  providers: []
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
