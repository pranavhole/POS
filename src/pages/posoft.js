// pages/posoftware.tsx
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItems from '@/components/menu';
import Tables from '@/components/tabel';
import OrderedItems from '@/components/order';
import User from '../models/User';
import connectDb from '../middleware/connectDb';
import mongoose  from 'mongoose';

const POSoftware = ( users ) => {
  console.log(users);
  // const [tables, setTables] = useState([]);
  // const [menuItems, setMenuItems] = useState([]);
  // const [selectedTable, setSelectedTable] = useState(null);
  // const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  // const [orderedItems, setOrderedItems] = useState([]);
  // const [orderType, setOrderType] = useState(null);


  // const handleTableSelect = (table) => {
  //   setSelectedTable(table);
  //   setSelectedMenuItem(null);
  //   setOrderType(null); // Reset order type when table is selected
  // };

  // const handleMenuItemSelect = (menuItem) => {
  //   setSelectedMenuItem(menuItem);
  // };

  // const handleAddToOrder = () => {
  //   if (selectedMenuItem) {
  //     const existingItemIndex = orderedItems.findIndex(
  //       (item) => item.menuItem.id === selectedMenuItem.id
  //     );
  //     if (existingItemIndex !== -1) {
  //       const updatedOrderedItems = [...orderedItems];
  //       updatedOrderedItems[existingItemIndex].quantity++;
  //       setOrderedItems(updatedOrderedItems);
  //     } else {
  //       setOrderedItems([
  //         ...orderedItems,
  //         { menuItem: selectedMenuItem, quantity: 1 },
  //       ]);
  //     }
  //   }
  // };
  // const handleBilling = async () => {
  //   try {
  //     const response = await axios.post('/api/billing', { orderedItems });
  //   } catch (error) {
  //     console.error('Billing failed:', error);
  //   }
  // };
  // const handleRemoveFromOrder = (index) => {
  //   const updatedOrderedItems = [...orderedItems];
  //   updatedOrderedItems.splice(index, 1);
  //   setOrderedItems(updatedOrderedItems);
  // };

  // const handlePrintBill = () => {
  //   // Function to print bill
  // };

  // const handleSelectOrderType = (type) => {
  //   setOrderType(type);
  // };

  // return (
  //   <div className='flex'>
  //     <Tables tables={tables} onTableSelect={handleTableSelect} />
  //     <MenuItems
  //       menuItems={menuItems}
  //       onMenuItemSelect={handleMenuItemSelect}
  //       onOrder={handleAddToOrder}
  //     />
  //     <OrderedItems
  //       onBilling={handleBilling}
  //       tableNumber={selectedTable ? selectedTable.id : null} // Pass table number
  //       orderedItems={orderedItems}
  //       onRemoveFromOrder={handleRemoveFromOrder}
  //       onPrintBill={handlePrintBill} // Pass print bill function
  //       onSelectOrderType={handleSelectOrderType} // Pass select order type function
  //     />
  //   </div>
  // );
  return(
    <></>
  )
};

export async function getServerSideProps(context) {
    // Connect to MongoDB if not already connected
  
    // if (!mongoose.connections[0].readyState) {
    //   await mongoose.connect("mongodb+srv://pos:pos@cluster0.bjoglyj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    // }
    // const users = await User.find();
    
    // console.log(users);
    return {
      props: {
        users: "hello"
      }
    };
  
}


export default POSoftware;
