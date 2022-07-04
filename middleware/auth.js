const {validateToken} = require("../middleware/jwt")
const {read} = require("../DL/controllers/userController");

async function auth(req, res, next) {
  const token = req.headers.authorization;
  try {
    //verify token
    const decode = validateToken(token);
    // console.log("decode: ", decode);
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

/* yossef version: */
// const { validateToken } = require("./jwt");
// const authJWT = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//       const token = authHeader.split(" ")[1];
//       jwt.verify(token, process.env.SECRET_JWT, (err, verifyToken) => {
//           if (err) {
//               return res.sendStatus(403);
//           }
//           req._id = verifyToken._id;
//           next();
//       });
//   } else {
//       res.sendStatus(401);
//   }
// };
// module.exports = { authJWT }

module.exports = auth;
