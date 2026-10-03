
const logger =(req, res, next) => {
    console.log(`1: ${req.method}: Request received on url: ${req.url}`);
    next()
} 

module.exports = {logger};