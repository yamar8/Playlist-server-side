const {orderModel} = require('../models/order')

async function create(data){
    const res = await orderModel.create(data);
    console.log(res);
    return res;
}
async function read(filter){
    return await orderModel.find(filter).populate('userId').populate('items.itemId');
}
async function update(filter,newData){
    const res = await orderModel.updateOne(filter, newData);
    console.log(res);
    return res;
}

module.exports = {create,read,update}