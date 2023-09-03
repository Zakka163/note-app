const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '../.env' })



const privateKey = "note"||process.env.PRIVATEKEY


const generateToken = (data) => {
    return jwt.sign(data, privateKey, { expiresIn: 60 * 60 });
}
const compareToken = (token) => {
    return jwt.verify(token, privateKey)
}
// const removeToken = (data)=>{
//     return jwt.
// }


module.exports = {generateToken,compareToken}