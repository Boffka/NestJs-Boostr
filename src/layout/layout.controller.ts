import {
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { InjectInMemoryDBService, InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { LayoutEntity } from './layout.entity';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { IUserModel } from '../shared/models/user.model';
import { Observable, of } from 'rxjs';

@Controller('layout')
export class LayoutController {
  constructor(@InjectInMemoryDBService('layout') private layoutService: InMemoryDBService<LayoutEntity>) {
  }

  @ApiOperation({ summary: 'Update Layout object' })
  @Put()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  update(@Request() req): Observable<IUserModel> {
    return of(req.user);
  }

  @ApiOperation({ summary: 'Create Layout object' })
  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  create(@Request() req): Observable<IUserModel> {
    return of(req.user);
  }

  @ApiOperation({ summary: 'Remove Layout object' })
  @Delete()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  delete(@Request() req): Observable<IUserModel> {
    return of(req.user);
  }

  @ApiOperation({ summary: 'Get Layout object by UserId' })
  @ApiParam({ name: 'id', type: 'string', required: false })
  @Get(':id')
  getbyId(@Param('id') id, @Request() req): LayoutEntity {
    let ID = parseInt(id);
    if (!ID) throw new HttpException('UserID has a wrong format.', HttpStatus.BAD_REQUEST);
    let result = this.layoutService.query(record => record.ownerID === ID).shift();
    if (result) {
      return result;
    } else {
      const newEntity = new LayoutEntity();
      newEntity.ownerID = ID;
      return this.layoutService.create(newEntity);
    }

  }
}
