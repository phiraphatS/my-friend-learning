import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { Account } from 'src/entities/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personal } from 'src/entities/personal.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Account,
      Personal,
    ]),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService]
})
export class AuthenticationModule {}
