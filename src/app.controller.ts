import { Controller, Get, Headers, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { AuthGuard } from './auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Headers() headers, @Request() req ): Observable<any> {
    return of(this.appService.getApiVersion());
  }
}
