import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ValidatePassword,
  validatePassword,
} from './validatePassword/validatePassword';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('validate-password')
  validatePassword(@Body('password') password: string): ValidatePassword {
    return validatePassword(password);
  }
}
