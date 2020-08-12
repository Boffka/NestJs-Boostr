import {
  Controller, Delete,
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
import { GridEntity } from './entity/grid.entity';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiProperty, ApiQuery } from '@nestjs/swagger';
import { DealEntity } from './entity/deal.entity';
import { MediaPlanEntity } from './entity/media-plan.entity';
import { AuthGuard } from '../auth/auth.guard';
import { Observable, of } from 'rxjs';
import { IUserModel } from '../shared/models/user.model';

@Controller('grid')
export class GridController {
  constructor(@InjectInMemoryDBService('grid') private gridService: InMemoryDBService<GridEntity>) {
  }

  @ApiOperation({ summary: 'Update AgGrid object' })
  @Put()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  update(@Request() req): Observable<IUserModel> {
    return of(req.user);
  }

  @ApiOperation({ summary: 'Create AgGrid object' })
  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  create(@Request() req): Observable<IUserModel> {
    return of(req.user);
  }

  @ApiOperation({ summary: 'Remove AgGrid object' })
  @Delete()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  delete(@Request() req): Observable<IUserModel> {
    return of(req.user);
  }

  @ApiOperation({ summary: 'Get AgGrid object by UserId & Entity Type' })
  @ApiParam({ name: 'id', type: 'string', required: false })
  @ApiQuery({ name: 'type', enum: ['deal', 'mediaplan'], required: false })
  @Get(':id')
  getbyId(@Param('id') id, @Query() query, @Request() req): GridEntity {
    let ID = parseInt(id);
    if (!ID) throw new HttpException('UserID has a wrong format.', HttpStatus.BAD_REQUEST);
    if (!query.type) throw new HttpException('Grid type required.', HttpStatus.BAD_REQUEST);
    let result = this.gridService.query(record => record.type === query.type && record.ownerID === ID).shift();
    if (result) {
      return result;
    } else {
      const newEntity = (query.type === 'deal') ? new DealEntity() : new MediaPlanEntity();
      newEntity.ownerID = ID;
      return this.gridService.create(newEntity);
    }

  }
}
