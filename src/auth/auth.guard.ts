import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }
  validateRequest(request){
    if((Object.keys(request.headers).includes('authorization') || Object.keys(request.headers).includes('Authorization')) && request.headers['authorization']){
      return this.authService.checkSignedIn(request.headers['authorization']).pipe(tap(user=>{
        request.user = user;
      }));
    } else return false;
  }
}


