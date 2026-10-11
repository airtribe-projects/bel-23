const usersModel = require("../models/usersModel");
const bcrypt = require('bcrypt');
const SALT_ROUND = 5;

const registerUser = async (user) => {
    user.password = bcrypt.hashSync(user.password, SALT_ROUND);
    const dbUser = await usersModel.create(user);
    return dbUser;
};
 
const loginUser = async (email, password) => {
    
    const body = {
        email: email
    };

    const dbUser = await usersModel.findOne(body);

    if (!dbUser) {
        throw new Error("User not found");
    }

    // const  hashedPass = bcrypt.hashSync(password, SALT_ROUND);

    // console.log(hashedPass, dbUser.password);
    // const isSamePassword = dbUser.password == hashedPass;
    
    const isSamePassword = bcrypt.compareSync(password, dbUser.password);
    
    if (!isSamePassword) {
        throw new Error("Invalid Password");
    }

    return {status: "ok", user: {id: dbUser.id}};
}


module.exports = {registerUser, loginUser};