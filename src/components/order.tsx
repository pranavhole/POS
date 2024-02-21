// components/OrderedItems.tsx
import React from 'react';
import { OrderedItem } from '../types';

type Props = {
  orderedItems: OrderedItem[];
  onRemoveFromOrder: (index: number) => void;
};

const Order: React.FC<Props> = ({ orderedItems, onRemoveFromOrder }) => {
  return (
    <div className=' h-[90vh] w-[25vw] bg-gray-600 rounded-md flex flex-col mt-2'>
      <h2>Ordered Items</h2>
      <ul>
        {orderedItems.map((orderedItem, index) => (
          <li key={index}>
            {orderedItem.menuItem.name} - ${orderedItem.menuItem.price} x{' '}
            {orderedItem.quantity}{' '}
            <button onClick={() => onRemoveFromOrder(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
