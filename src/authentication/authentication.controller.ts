import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService
  ) {}

  @Post('login')
  create(@Body() req: any) {
    try {
      const username = req.username;
      const password = req.password;

      const res = this.authenticationService.loginProcess(username, password)
      
      return res
    } catch (err) {
      return err
    }
  }
}
