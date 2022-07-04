require('../DL/db.js').connect();
const userController = require('../DL/controllers/userController');
const {createToken} = require("../middleware/jwt");

//user = {email: abc@gmail.com, password: "asdf434"}
// async function login(user){
//   const username = await userController.read({email: user.email});
//   const password = await userController.read({email: user.email,password: user.password});
//  if(!username){console.log("User dosen't exist");return false;}
//  if(!password){console.log("Error! password is incorrect");return false}
//  return true;
// }

// const user2 = {email:"Shahargut@gmail.com",password: "1234" }
// login(user2);

 const getUserById = async (id) => {
  const userId =  await userController.read({_id: id});
  console.log('user:',userId);
  if(!userId.length) throw ({code: 400, message: "ID dosen't exist"});
  return userId;
}

const getAllUsers = async () => {
    const users = await userController.read({});
    if(users.length === 0) throw ({code: 400, message: "there is no users"});
    return users;
  }

const updateUser = (id,newField) =>{
  const user = userController.update({_id: id},newField);
  return user;
}

const del = (id)=>{
  return userController.update({_id:id});
}

// exports.createUser = async (userFields) =>{
//   const eUser = await userController.read({email: userFields.email});
//   if(eUser.length) throw ({code: 400, message: "theis email already exist"});
//   return await userController.create(userFields);
// }

const register = async (data) =>{
  const {email, password, firstName, lastName} = data;
  if(!email || !password || !firstName || !lastName) 
    throw ({code: 400, message: "missing data"});
  
    const existUser = await userController.readOne({email});
    if(existUser) throw ({code: 405, message: "duplicate email"});

    const user = await userController.create(data);
    const token = createToken(user._id);
    return token;
}

const login = async(email, password) => {
  //basic validataion
  if(!email || !password) throw ({code: 409, message: "missing data"});
  //user exist?
   const eUser = await userController.read({email},"+password");
  if(eUser.length == 0) throw ({code: 404, message: "user not found"});
  //password matching?
  console.log(password,eUser[0]);
  if(password !== eUser[0].password) throw ({code: 503, message: "not auothorized"});
  const token = createToken(eUser[0]._id);
  return token;
}

// exports.findUserByName = (filter)=>{
//     return userController.read(filter);
// }

module.exports = {login,getAllUsers,getUserById,updateUser,del,register}
