const {userModel} = require('../models/user')
async function create(data){
   return await userModel.create(data);

}
async function read(filter){
    return await userModel.find(filter);
    
}
async function update(filter,newData){
   return await userModel.updateOne(filter, newData);
}
async function del(filter){
    await update(filter,{isActive:flase})
}

module.exports = {create,read,update,del}

