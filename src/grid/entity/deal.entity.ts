import { GridEntity } from './grid.entity';

export class DealEntity extends GridEntity{
  type = 'deal'
  columns = [
    {
      name: 'Product',
      field: 'field1',
      cellClass: 'deal-cell-class'
    },
    {
      name: 'Budget',
      field: 'field2',
      cellClass: 'deal-cell-class'
    },
    {
      name: 'Stage',
      field: 'field3',
      cellClass: 'deal-cell-class'
    },
  ];
  styles = {
    'rag-green': 'x < 20',
    'rag-amber': 'x >= 20 && x < 25',
    'rag-red': 'x >= 25'
  };
  active: true;
}