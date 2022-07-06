const express = require("express");
const router = express.Router();
const userLogic = require("../BL/userLogic"); //import userLogic - all the CRUD function.
const {auth} = require("../middleware/auth");

// router.all("/test",auth,(req,res)=>{
//   res.send("test");
// });

router.post("/login", async (req, res) => {
  try {
    const token = await userLogic.login(req.body);
    res.send({token});
  } catch (error) {
    console.log(error.message);
    res.status(500).send("sorry. something went wrong");
  }
});

router.post("/register", async (req, res) => {
  try {
    const token = await userLogic.register(req.body);
    res.status(200).send({ token });
  } catch (error) {
    console.log("register", error.message);
    if (error.code && error.code < 1000) {
      res.status(error.code).send(error.message);
    } else {
      res.send("sorry. something went wrong");
    }
  }
});

router.get("/:id", async (req, res) => {
  try {
    // console.log("req.params: ", req.params);
    const user = await userLogic.getUserById(req.params.id);
    res.send(user);
  } catch (error) {
    console.log("error code:", error.code);
    res
      .status(error.code || 500)
      .send({ message: error.message || "server error" });
  }
});
router.get("/", auth, async (req, res) => {
  //the path "/" is in "users/"
  try {
    const users = await userLogic.getAllUsers();
    // console.log(users);
    res.send(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("somthing went wrong");
  }
});

router.get("/", async (req, res) => {
  /* url:  '/?id='    */
  try {
    // console.log("req.query: ", req.query);
    const user = await userLogic.getUserById(req.query.id);
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: "somthing went wrong" });
  }
});

router.put("edit_user/:id", async (req, res) => {
  const savedUser = await userLogic.updateUser(req.params.id, req.body);
  res.send(savedUser);
});

module.exports = router;
