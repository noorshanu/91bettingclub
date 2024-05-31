const express = require('express');
const session = require('express-session');
const csrf = require('csurf');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Session configuration
app.use(session({
  secret: 'your-secret-key', // Replace with your secret key
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 12 * 60 * 60 * 1000, // 12 hours in milliseconds
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
  }
}));

// CSRF protection
const csrfProtection = csrf({ cookie: false });

// Middleware to add CSRF token to responses
app.use((req, res, next) => {
  if (req.session && !req.session.csrfToken) {
    req.session.csrfToken = req.csrfToken();
  }
  next();
});

// Login route
app.post('/wingo/login', csrfProtection, (req, res) => {
  const { identifier, password } = req.body;
  // Perform your user authentication here

  // Dummy authentication logic for illustration
  if (identifier === 'testuser' && password === 'password') {
    req.session.userId = 'user_id'; // Replace with actual user id
    res.json({ success: true, csrfToken: req.session.csrfToken });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Logout route
app.post('/wingo/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Failed to logout' });
    }
    res.json({ success: true });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
