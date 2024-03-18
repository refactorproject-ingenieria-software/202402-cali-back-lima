import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import {
  ValidatePassword,
  validatePassword,
} from './validatePassword/validatePassword';
import validateCreditCard from './validateCreditCard/validateCreditCard';

@Controller()
export class AppController {
  constructor() {}

  @Post('validate-credit-card')
  validateCreditCard(
    @Body() body: { creditCardNumber: string; expiryDate: string },
  ) {
    return validateCreditCard(body.creditCardNumber, body.expiryDate);
  }

  @Post('validate-password')
  validatePassword(@Body() body: { password: string }): ValidatePassword {
    try {
      return validatePassword(body.password);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
