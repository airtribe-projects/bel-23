const sqlite3 = require('sqlite3').verbose();

let db;

const initDb = () => {
    db = new sqlite3.Database(':memory:');

    db.serialize(() => {
        db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY,
            username TEXT,
            password TEXT,
            email TEXT,
            is_admin BOOLEAN DEFAULT 0,
            credit_card TEXT,
            api_key TEXT
        )`);

        db.run(`INSERT INTO users (username, password, email, is_admin, credit_card, api_key) VALUES 
            ('admin', 'admin123', 'admin@blog.com', 1, '4532-xxxx-xxxx-9876', 'sk_live_admin_123456'),
            ('alice', 'alice123', 'alice@blog.com', 0, '4532-xxxx-xxxx-5678', 'sk_live_user_123456')`);
    });

    return db;
};

// Initialize DB on module load
initDb();

const getDb = () => db;

// 1. Login - Vulnerable to "always true" attack
const login = (username, password) => {
    
    //Input Validation 
    if (!username || !password || typeof username !== 'string' || typeof password !== 'string') {
        throw new Error("Incompatible types")
    }
    
    // Parametrized query
    return new Promise((resolve, reject) => {
        const query = `
            SELECT id, username, is_admin, email 
            FROM users 
            WHERE username = ? 
            AND password = ?
        `;

        db.all(query, [username, password], (err, user) => {
            if (err) return reject(err);
            if (!user || user.length === 0) return resolve(null);
            resolve(user);
        });
    });
};

// 2. Register User - Vulnerable to query stacking
const registerUser = (username, password, email) => {
    return new Promise((resolve, reject) => {
        const id = Math.round(Math.random() * 1000);
        // const query = `INSERT INTO users (id, username, password, email, is_admin) VALUES (${id}, '${username}', '${password}', '${email}', 0)`;
        
        const query = `INSERT INTO users (id, username, password, email, is_admin) VALUES (${id}, ?, ?, ?, 0)`;
        const query2 = `SELECT id, username, email, is_admin FROM users`;

        // db.run in place of db.exec. It reduces the error radius as it just executes one query
        db.run(query, [username, password, email], (err, results) => {
            if (err) return reject(err);

            db.all(query2, (err, users) => {
                if (err) return reject(err);
                resolve(users[users.length - 1] || []);
            });
        });
    });
};

// 3. User Profile - Vulnerable to data exfiltration (UNION attack)
const getProfile = (username) => {
    
    return new Promise((resolve, reject) => {
        const query = `
            SELECT username, email 
            FROM users 
            WHERE username = ?
        `;

        db.all(query, [username], (err, user) => {
            if (err) return reject(err);
            if (!user || user.length === 0) return resolve(null);
            resolve(user);
        });
    });
};

module.exports = {
    initDb,
    getDb,
    login,
    registerUser,
    getProfile
};
