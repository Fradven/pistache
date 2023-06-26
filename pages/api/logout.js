export default function handler(req, res) {
    // Destroy the session or clear the stored user data
    // Replace 'userId' with the appropriate session variable you are using
    req.session.destroy();
  
    // Respond with a success message or redirect to the login page
    res.status(200).json({ message: 'Logged out successfully' });
  }
  