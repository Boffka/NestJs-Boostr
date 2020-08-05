import { Injectable, HttpService, Logger } from '@nestjs/common';
import { CoreConfig } from './config.const';


@Injectable()
export class AppService {

  constructor (private httpService: HttpService) {

  }
  getApiVersion(){
    return {api: 'Boostr UI API', apiVersion: 'v2'}
  }
  getHello(): string {
    return 'Hello World!';
  }

  getCurrentUser(headers) {
    return this.httpService.get(`${CoreConfig.coreAPI.host}${CoreConfig.coreAPI.path}/users/signed_in_user`, {headers});
  }
}
