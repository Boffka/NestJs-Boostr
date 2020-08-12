import { Injectable } from '@nestjs/common';
import { InMemoryDBEntityController, InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { GridEntity } from './entity/grid.entity';

@Injectable()
export class GridService extends InMemoryDBEntityController<GridEntity> {
  constructor(protected dbService: InMemoryDBService<GridEntity>) {
    super(dbService);
  }
}
