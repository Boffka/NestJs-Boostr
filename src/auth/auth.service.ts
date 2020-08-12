import { HttpService, Injectable } from '@nestjs/common';
import { CoreConfig } from '../config.const';
import { AxiosRequestConfig } from 'axios';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {
  }

  async login(credentials: any) {
    const url = `${CoreConfig.coreAPI.host}${CoreConfig.coreAPI.path}/user_token/extension`;
    const options: AxiosRequestConfig = {
      headers: {
        'Accept': 'application/vnd.boostr.v2',
      }
    };
    const payload = {
      auth: credentials,
    };

    return this.httpService.post(url, payload, options)
      .pipe(
        map(resp => {
          return resp.data;
        }),
      );
  }

  checkToken(token){
    const url = `${CoreConfig.coreAPI.host}${CoreConfig.coreAPI.path}/token_check`;
    const options: AxiosRequestConfig = {
      headers: {
        'authorization': token,
      }
    };
    return this.httpService.get(url, options)
      .pipe(
        map(resp => {
          return resp.data;
        }),
      );
  }

  checkSignedIn(token){
    const url = `${CoreConfig.coreAPI.host}${CoreConfig.coreAPI.path}/users/signed_in_user`;
    const options: AxiosRequestConfig = {
      headers: {
        'authorization': token,
      }
    };
    return this.httpService.get(url, options)
      .pipe(
        map(resp => {
          return resp.data;
        }),
      );
  }
}
