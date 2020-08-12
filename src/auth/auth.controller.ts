import { Body, Controller, Get, Headers, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';
import { Observable, of } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @ApiOperation({ summary: 'Get JWT by user credentials' })
  @Post('login')
  async login(@Body() userData: LoginDto, @Request() req) {
    return this.authService.login(userData);
  }

  @ApiOperation({ summary: 'Get user object.' })
  @Get('me')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  me(@Headers() headers, @Request() req ): Observable<any> {
    return of(req.user);
  }
}
