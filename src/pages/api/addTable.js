// pages/api/addtable.js

import Table from '../../models/Table'; // Assuming you have a Table model defined
import connectDb from '../../middleware/connectDb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { category, number } = req.body;
    try {
      // Create a new table
      const newTable = new Table({ category, number });
      await newTable.save();

      res.status(201).json({ table: newTable });
    } catch (err) {
      console.error('Error adding table:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default connectDb(handler);
