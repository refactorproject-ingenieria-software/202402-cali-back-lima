import { Body, Controller, Post } from '@nestjs/common';
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
}
