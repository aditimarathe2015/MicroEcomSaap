import { promises as fs } from 'fs';
import path from 'path';

const adminUserFilePath = path.resolve(
  process.cwd(),
  'backend/src/data/adminuser.json'
);

export const createAdminUser = async (req, res) => {
  try {
    const { url, username, password } = req.body;

    if (!url || !username || !password) {
      return res.status(400).json({
        message: 'url, username, and password are required',
      });
    }

    const fileContent = await fs.readFile(adminUserFilePath, 'utf-8');
    const adminUsers = JSON.parse(fileContent);

    const adminUser = {
      id: Date.now(),
      url,
      username,
      password,
      
    };

    adminUsers.push(adminUser);

    await fs.writeFile(
      adminUserFilePath,
      JSON.stringify(adminUsers, null, 2),
      'utf-8'
    );

    return res.status(201).json({
      message: 'Admin user saved successfully',
      adminUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to save admin user',
      error: error.message,
    });
  }
};

export const getAdminUser = async (req, res) => {
  try {
    const fileContent = await fs.readFile(adminUserFilePath, 'utf-8');
    const adminUsers = JSON.parse(fileContent);
    return res.status(200).json(adminUsers);
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to read admin users',
      error: error.message,
    });
  }
};
