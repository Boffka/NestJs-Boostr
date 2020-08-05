import { GridEntity } from './grid.entity';

export class MediaPlanEntity extends GridEntity{
  type = 'mediaplan';
  columns = [
    {
      name: 'Start Date',
      field: 'start_date',
      cellClass: 'mp-cell-class'
    },
    {
      name: 'End Date',
      field: 'end_date',
      cellClass: 'mp-cell-class'
    },
    {
      name: 'Source',
      field: 'source_field',
      cellClass: 'mp-cell-class'
    },
  ];
  styles = {
    'mp-rag-green': 'x < 20',
    'mp-rag-amber': 'x >= 20 && x < 25',
    'mp-rag-red': 'x >= 25'
  };
  active: true;
}