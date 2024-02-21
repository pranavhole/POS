"use client"
import React, { useState } from 'react';
import MenuItems from '@/components/menu';
import OrderedItems from '@/components/order';
import Tables from '@/components/tabel';
import { Table, MenuItem, OrderedItem } from '../types';

const POSoftware: React.FC = () => {
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

  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(
    null
  );
  const [orderedItems, setOrderedItems] = useState<OrderedItem[]>([]);
  const [orderType, setOrderType] = useState<string | null>(null); // State for order type

  const handleTableSelect = (table: Table) => {
    setSelectedTable(table);
    setSelectedMenuItem(null);
    setOrderType(null); // Reset order type when table is selected
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

  const handlePrintBill = () => {
    const billContent = generateBillContent(); // Function to generate bill content

    const printWindow = window.open('', '_blank', 'width=700,height=700');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Print Bill</title></head><body>');
      printWindow.document.write('<pre>' + billContent + '</pre>');
      printWindow.document.write('</body></html>');

      printWindow.document.close(); // Close document to enable printing
      printWindow.print();
    } else {
      console.error('Failed to open print window.');
    }
  };

  const generateBillContent = () => {
    // You can customize the bill content as per your requirement
    let billContent = '';
    if (selectedTable) {
      billContent += `Table: ${selectedTable.name}\n\n`;
    }
    if (orderType) { // Include order type if it's selected
      billContent += `Order Type: ${orderType}\n\n`;
    }
    billContent += 'Ordered Items:\n';
    orderedItems.forEach((orderedItem, index) => {
      billContent += `${index + 1}. ${orderedItem.menuItem.name} - Quantity: ${orderedItem.quantity}, Price: $${orderedItem.menuItem.price}\n`;
    });
    billContent += '\n';
    const totalBillAmount = orderedItems.reduce((total, item) => total + item.menuItem.price * item.quantity, 0);
    billContent += `Total Bill Amount: $${totalBillAmount.toFixed(2)}`;

    return billContent;
  };

  const handleSelectOrderType = (type: string) => {
    setOrderType(type);
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
        </React.Fragment>
      )}
      {selectedTable && (
        <OrderedItems
          tableNumber={selectedTable.id} // Pass table number
          orderedItems={orderedItems}
          onRemoveFromOrder={handleRemoveFromOrder}
          onPrintBill={handlePrintBill} // Pass print bill function
          onSelectOrderType={handleSelectOrderType} // Pass select order type function
        />
      )}


    </div>
  );
};

export default POSoftware;
