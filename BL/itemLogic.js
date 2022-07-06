require('../DL/db.js').connect()
const itemController = require('../DL/controllers/itemController');



const getItemByBarcode = async (barcode) => {
        const item = await itemController.read({barcode});
        console.log("item:" , item);
        if(item.length === 0) throw {error: 400, message: "item dosen't exist"};
        return item;
}

const getItemById = async (id) => {
        const item = await itemController.read({_id: id});
        if(!item) throw {error: 400, message: "item dosen't exist"};
        return item;
}

const getAllItems = async ()=>{
        const items = await itemController.read();
        if(items.length === 0) throw ({code: 400, message: "there is no items"});
        return items;
}



const createItem = async (item) => {
        // check if item exist
        const oneItem = await itemController.read({barcode: item.barcode});
        if(oneItem.length === 0){
                console.log(oneItem);
        }else{
                console.log("item dosen't exist");
        }

        //if exist add to inStock
        //else create the item

}

item1 = {
        name: "Peach",  
      inStock: {
          type: Number,
          required: true,
          default: 0
        },
        price:{
          type: Number,
          required: true,
        },
        barcode:{
          type: String,
          required: true,
          unique: true,
        },
          category:{
          type: String,
          required: true,
          },
          quantity:{
            type: Number,
            default: 1,
          }
      }
createItem({

})



module.exports = {getItemByBarcode, getItemById, getAllItems, createItem};
