import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...require('../typeorm.config'),
      entities: [Account],
    }),
    AuthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
