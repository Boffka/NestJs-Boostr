import { Injectable, HttpService, Logger } from '@nestjs/common';


@Injectable()
export class AppService {

  constructor (private httpService: HttpService) {

  }
  getHello(): string {
    return 'Hello World!';
  }

  getCurrentUser(headers) {
    return this.httpService.get('http://localhost:3000/api/users/signed_in_user', {headers});
  }
}
