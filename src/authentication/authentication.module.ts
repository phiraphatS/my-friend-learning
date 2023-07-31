import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { Account } from 'src/entities/account.entity';
import { personal } from 'src/entities/personal.entity';

@Module({
  imports:[
    ttypeOrmModole.forFeature([
      Account,
      personal,
    ]),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService]
})
export class AuthenticationModule {}
