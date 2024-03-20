// pages/dashboard.js
"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newMenuItem, setNewMenuItem] = useState('');
  const [newMenuItemPrice, setNewMenuItemPrice] = useState(0);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('/api/menuItems');
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  const addMenuItem = async () => {
    try {
      await axios.post('/api/menuItems', { name: newMenuItem, price: newMenuItemPrice });
      fetchMenuItems();
      setNewMenuItem('');
      setNewMenuItemPrice(0);
    } catch (error) {
      console.error('Error adding menu item:', error);
    }
  };

  return (
    <div>
      <h2>Add Menu Item</h2>
      <input type="text" value={newMenuItem} onChange={(e) => setNewMenuItem(e.target.value)} />
      <input type="number" value={newMenuItemPrice} onChange={(e) => setNewMenuItemPrice(parseFloat(e.target.value))} />
      <button onClick={addMenuItem}>Add Menu Item</button>

      <h2>Menu Items</h2>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>{menuItem.name} - ${menuItem.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
