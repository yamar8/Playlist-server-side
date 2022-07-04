const {validateToken} = require("../middleware/jwt")
const {read} = require("../DL/controllers/userController");

async function auth(req, res, next) {
  const token = req.headers.authorization;
  try {
    //verify token
    const decode = validateToken(token);
    //check it the user exist
    const eUser = await read({_id: decode.id});
    if(!eUser[0]) throw "";
    // if(eUser.permission != "admin") throw "";
    //next / res error
    next();
  } catch (error) {
     res.status(503).send({code: 503, message: "not authorized"});
  }
}

module.exports = auth;
