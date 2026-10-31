const adminModel = require('../models/adminModel');

const loginAdmin = async (username, password) => {
    const user = await adminModel.login(username, password);
    if (!user) {
        throw new Error('Invalid credentials');
    }
    return user;
};

const registerAdminUser = async (username, password, email) => {
    return await adminModel.registerUser(username, password, email);
};

const getAdminUserProfile = async (username) => {
    const user = await adminModel.getProfile(username);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

module.exports = {
    loginAdmin,
    registerAdminUser,
    getAdminUserProfile
};
