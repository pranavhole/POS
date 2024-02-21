// pages/index.tsx
"use client"
import React, { useState } from 'react';
import MenuItems from '@/components/menu';
import OrderedItems from '@/components/order';
import Tables from '@/components/tabel';
import { Table, MenuItem, OrderedItem } from '../types';

// Mock data
const tables: Table[] = [
  { id: 1, name: 'Table 1' },
  { id: 2, name: 'Table 2' },
  { id: 3, name: 'Table 3' },
];

const menuItems: MenuItem[] = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 15 },
  { id: 3, name: 'Item 3', price: 20 },
];

const POSoftware: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(
    null
  );
  const [orderedItems, setOrderedItems] = useState<OrderedItem[]>([]);

  const handleTableSelect = (table: Table) => {
    setSelectedTable(table);
    setSelectedMenuItem(null); // Reset selected menu item when selecting a table
  };

  const handleMenuItemSelect = (menuItem: MenuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const handleAddToOrder = () => {
    if (selectedMenuItem) {
      const existingItemIndex = orderedItems.findIndex(
        (item) => item.menuItem.id === selectedMenuItem.id
      );
      if (existingItemIndex !== -1) {
        const updatedOrderedItems = [...orderedItems];
        updatedOrderedItems[existingItemIndex].quantity++;
        setOrderedItems(updatedOrderedItems);
      } else {
        setOrderedItems([
          ...orderedItems,
          { menuItem: selectedMenuItem, quantity: 1 },
        ]);
      }
    }
  };

  const handleRemoveFromOrder = (index: number) => {
    const updatedOrderedItems = [...orderedItems];
    updatedOrderedItems.splice(index, 1);
    setOrderedItems(updatedOrderedItems);
  };

  return (
    <div className='flex'>
      {!selectedTable ? (
        <Tables tables={tables} onTableSelect={handleTableSelect} />
      ) : (
        <React.Fragment>
          <MenuItems
            menuItems={menuItems}
            onMenuItemSelect={handleMenuItemSelect}
            onOrder={handleAddToOrder}
          />
          {/* {selectedMenuItem && (
            <div>
              <button onClick={handleAddToOrder}>Add to Order</button>
            </div>
          )} */}
        </React.Fragment>
      )}
      <OrderedItems
        orderedItems={orderedItems}
        onRemoveFromOrder={handleRemoveFromOrder}
      />
    </div>
  );
};

export default POSoftware;
