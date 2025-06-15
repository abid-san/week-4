const users = require('./userController').users;

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate token (simplified)
  const token = `jwt.sample.token.${user.id}`;
  
  res.status(200).json({
    token,
    userId: user.id,
    role: user.role
  });
};
