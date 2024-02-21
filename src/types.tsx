export type Table = {
    id: number;
    name: string;
  };
  
  export type MenuItem = {
    id: number;
    name: string;
    price: number;
  };
  
  export type OrderedItem = {
    menuItem: MenuItem;
    quantity: number;
  };
  