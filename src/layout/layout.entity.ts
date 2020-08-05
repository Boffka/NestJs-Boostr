export class LayoutEntity {
  id: number;
  ownerID: number | string;
  name: string = 'Default Layout';
  deal = {
    products: { visible: true, editable: false, background: 'white' },
    customFields: { visible: true, editable: false, background: 'white' },
  };
  account = {
    address: { visible: true, editable: false, background: 'white' },
    contacts: { visible: true, editable: false, background: 'white' },
  };
}