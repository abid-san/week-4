exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  // Simplified token verification
  const userId = token.split('.')[2];
  req.user = { id: userId };

  next(); // Proceed to protected route
};
