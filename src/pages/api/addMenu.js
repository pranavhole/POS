// pages/api/addmenu.js

import Menu from '../../models/Menu'; // Assuming you have a Menu model defined
import User from '../../models/User'; // Assuming you have a User model defined
import connectDb from '../../middleware/connectDb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { userId, category, name, price, description } = req.body;
    try {
      // Create a new menu item
      const newMenuItem = new Menu({ category, name, price, description, createdBy: userId });
      await newMenuItem.save();

  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      user.Menu.push(newMenuItem._id);
      await user.save();

      res.status(201).json({ menu: newMenuItem });
    } catch (err) {
      console.error('Error adding menu item:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default connectDb(handler);
