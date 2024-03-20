// pages/api/signin.js

import bcrypt from 'bcrypt';
import User from '../../models/User';
import connectDb from '../../middleware/connectDb';

const handler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    user.password = undefined;
    res.status(200).json({ user });
  } catch (err) {
    console.error('Error signing in:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default connectDb(handler);
