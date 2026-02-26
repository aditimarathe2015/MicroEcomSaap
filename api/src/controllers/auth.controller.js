const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Dummy user (replace with DB in real app)
const user = {
  id: 1,
  username: 'admin',
  password: bcrypt.hashSync('admin123', 8),
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (username !== user.username) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
};

exports.profile = (req, res) => {
  res.json({
    message: 'Protected route accessed',
    user: req.user,
  });
};