// pages/api/signup.js

import bcrypt from 'bcrypt';
import User from '../../models/User';
import connectDb from '../../middleware/connectDb';

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { username, password, email, phone, company, role } = req.body;
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ username, password: hashedPassword, email, phone, company, role });
            await newUser.save();
            newUser.password = undefined;
            res.status(201).json({ user: newUser });
        } catch (err) {
            console.error('Error signing up:', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

export default connectDb(handler);
