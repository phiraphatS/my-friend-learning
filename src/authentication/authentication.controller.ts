import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthenticationService } from './authentication.service'; 
import { count } from 'console';

@Controller('authenticationa')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('login')
  create(@Body() req: any) {
    const username = req.username;
    const password = req.password;
    
    return 'pong'
}
}