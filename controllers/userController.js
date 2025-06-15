// In-memory database (replace with real DB later)
const users = [];

exports.registerUser = (req, res) => {
  const { email, password, role = 'customer' } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  // Check for existing user
  if (users.some(u => u.email === email)) {
    return res.status(409).json({ error: 'User already exists' });
  }

  // Create user
  const newUser = {
    id: Date.now().toString(),
    email,
    password, // In production: hash password!
    role
  };

  users.push(newUser);

  // Return response without password
  const { password: _, ...userData } = newUser;
  res.status(201).json(userData);
};
