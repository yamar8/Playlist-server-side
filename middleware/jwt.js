const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_JWT;


function createToken(_id){
    const token = jwt.sign({_id: _id}, secret, {expiresIn: "1h"});
    return token;
}
// console.log(createToken("abcd"));

function validateToken(token){
    const decode = jwt.verify(token, secret);
    return decode;
    // decode looks like { id: '62b1b89860f75cba376ba47f', iat: 1655891870, exp: 1655895470 }
}

// console.log(validateToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiY2QiLCJpYXQiOjE2NTU4MTQ5MzUsImV4cCI6MTY1NTgxODUzNX0.tgEyW-vu4rXx4MDsN7G9AXekTzYHGyIF09SSv3nKGbU"))

module.exports = {createToken, validateToken}
