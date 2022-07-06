require('../db').connect();

const {itemModel} = require('../models/item')

async function create(data){
    return await itemModel.create(data);
}
async function read(filter = {}, proj){
    return await itemModel.find(filter,proj);
}
async function update(filter,newData){
    return res = await itemModel.updateOne(filter, newData);
}
async function del(filter){
    return await update(filter,{isActive:flase});
}

module.exports = {create,read,update,del}
