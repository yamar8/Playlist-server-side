require('../DataAcsesLayer/db').connect()
const userController = require('../DataAcsesLayer/controlers/userController')
const orderController = require('../DataAcsesLayer/controlers/orderController')
const itemController = require('../DataAcsesLayer/controlers/itemController')


async function createOrder(order){
    let res = {
    }
    console.log()
    //בדיקה אם היוזר קיים
    const user = await userController.read({email:order.user})[0]
    let total = 0;
    if(!user){console.log('ERROR'); return false}
    //לעבור ולבדוק אם יש את המוצר במלאי או אם בכלל
    //חישוב סהכ עלות הזמנה
    for(i of order.cart){
       const item = itemController.read({barcode:i.item})[0]
       if(!item || item.stock < i.qty ){console.log('not fount or not stock'); return false}
       total+= item.price*i.qty
    }
    return true;  
}
// async function getOrderByUser
// async function getOrderByDate
// async function getOrderById

let orderFromClient = {
    user: "yossef@gmail.com",
    cart:[{
        item:"KJF798ujygOUI",
        qty:6
    }]
}
createOrder(orderFromClient)

// let order1 = {
//     userId:'629f561bf4b6e63780b0c823',
//     items:[{
//         itemId: '62a839329b2615031b985be0',
//         quantity:5
//     }],
//     totalprice: order1.items.quantity*order1._id.price}