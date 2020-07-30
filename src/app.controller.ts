import { Controller, Get, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Headers() headers ): Observable<any> {
    return this.appService.getCurrentUser(headers).pipe(
      map(res => res.data)
    );
  }
}
