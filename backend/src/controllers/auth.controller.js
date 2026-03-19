
import jwt from 'jsonwebtoken';
import { promises as fs } from 'fs';
import path from 'path';

const SECRET_KEY = 'mysecretkey';
const adminUserFilePath = path.resolve(
  process.cwd(),
  'backend/src/data/adminuser.json'
);

export const login = async (req, res) => {
  try {
    
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required',
      });
    }

    const fileContent = await fs.readFile(adminUserFilePath, 'utf-8');
    const adminUsers = JSON.parse(fileContent);

    const findUser = adminUsers.filter(
      (x) =>
        x.username.toLowerCase() === username.toLowerCase() &&
        x.password === password
    );
  
    if (!findUser || findUser.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

    return res.json({
      success: true,
      message: 'Login successful',
      token,
      user: findUser[0] ? { username: findUser[0].username } : { username },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to process login',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
