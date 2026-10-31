const express = require('express');
const router = express.Router();
const { loginAdmin, registerAdminUser, getAdminUserProfile } = require('../controllers/adminController');

// 1. Login - Vulnerable to "always true" attack
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await loginAdmin(username, password);
        return res.status(200).json(user);
    } catch (err) {
        if (err.message === 'Invalid credentials') {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        return res.status(500).json({ error: err.message });
    }
});

// 2. Register User - Vulnerable to query stacking
router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const user = await registerAdminUser(username, password, email);
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

// 3. User Profile - Vulnerable to data exfiltration (UNION attack)
router.get('/profile', async (req, res) => {
    const { username } = req.query;

    try {
        const user = await getAdminUserProfile(username);
        return res.status(200).json(user);
    } catch (err) {
        if (err.message === 'User not found') {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(500).json({ error: err.message });
    }
});

module.exports = router;
