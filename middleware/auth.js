const {validateToken} = require("../middleware/jwt")
const {readOne} = require("../DL/controllers/userController");
const jwt = require("jsonwebtoken");


async function auth(req, res, next) {
  const token = req.headers.authorization;
  try { 
    //verify token
    const decode = validateToken(token.split(" ")[1]);
    //check it the user exist
    console.log("decode: ", decode);
    const user = await readOne({_id: decode._id});
    console.log("user: ", user);
    if(!user) throw "error";
    if(user.permission != "admin") throw "";
    console.log("auth-user: " ,user);
    // if(eUser.permission != "admin") throw "";
    //next / res error
    next();
  } catch (error) {
     res.status(503).send({code: 503, message: "not authorized"});
  }
}

/* yossef version: */
// const { validateToken } = require("./jwt");

const authJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.SECRET_JWT, (err, verifyToken) => { 
          if (err) {
              return res.sendStatus(403);
          }
          req._id = verifyToken._id;
          console.log("auth: ",verifyToken);
          next();
      });
  } else {
      res.sendStatus(401);
  }
};



function authAdmin(){

}
// module.exports = { authJWT }

module.exports = {auth,authJWT};
