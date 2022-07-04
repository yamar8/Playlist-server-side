//****I need to check whether it necessary
require('../DL/db.js').connect();

const userController = require('../DL/controllers/userController');
const itemController = require('../DL/controllers/itemController');
const orderController = require('../DL/controllers/orderController');


//order looks like this: order =  {user: abc@gmail.com, cart:[{item:"asd342",qty:5},{item:sdf234,qty:3},...]}
async function createOrder(order){
    //check if user exist
    const user = await userController.read({email: order.user});
    let total = 0;
    if(!user){console.log('ERROR: "User does not exist"'); return false}
    // console.log(user);
    //checking if there is item in stock && calculate total price of the order
    for(i of order.cart){
       const item = await itemController.read({barcode: i.item});
       console.log(item);
       if(!item || item.inStock < i.qty ){console.log('item does not exist or not in stock'); return false}
       total += item.price * i.qty;
    }
    console.log(true);
    return true;  
}

// async function getOrderByUser
// async function getOrderByDate
// async function getOrderById

//only for demo
let orderFromClient = {
    user: "willsmith@gmail.com",
    cart:[{
        item:"345345",
        qty:6
    }]
}

// createOrder(orderFromClient);
