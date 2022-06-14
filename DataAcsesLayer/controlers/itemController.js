const {itemModel} = require('../models/item')

async function create(data){
    return await itemModel.create(data);
}
async function read(filter){
    return await itemModel.find(filter);
}
async function update(filter,newData){
    const res = await itemModel.updateOne(filter, newData);
    console.log(res);
    return res;
}
async function del(filter){
    return await update(filter,{isActive:flase})
}

module.exports = {create,read,update,del}
