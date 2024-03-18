import { Controller, Get, Headers, Body, Post } from '@nestjs/common';
import axios from 'axios';
import validateCreditCard from './validateCreditCard/validateCreditCard';

@Controller()
export class AppController {
  constructor() {}

  @Get('obtain-metrics')
  async getMetrics(@Headers('authorization') authorizationHeader: string) {
    try {
      if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        throw new Error('Bearer token missing');
      }
      const token = authorizationHeader.split(' ')[1];

      const { data } = await axios.get(
        'https://sonarcloud.io/api/measures/component?&metricKeys=ncloc%2Ccode_smells%2Ccomplexity%2Cviolations&pullRequest=4&component=refactorproject-ingenieria-software_202402-cali-back-lima',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return data;
    } catch (error) {
      throw error;
    }
  }

  @Post('validate-credit-card')
  validateCreditCard(
    @Body() body: { creditCardNumber: string; expiryDate: string },
  ) {
    return validateCreditCard(body.creditCardNumber, body.expiryDate);
  }
}
