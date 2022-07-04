const express = require("express");

const router = express.Router(); 

const itemLogic = require('../BL/itemLogic.js');





router.get('/barcode', async (req, res) => {  //   ?barcode=566454
    try{
        const item = await itemLogic.getItemByBarcode(req.query.barcode);
        res.send(item);
    } catch(error){
        res.status(error.code || 500).send({message: error.message || "Server Error"});
    }
});

router.get('/', async (req, res) => {
   try{
       const items = await itemLogic.getAllItems();
       console.log("items", items)
       res.send(items);
   } catch(error){
    res.status(error.code || 500).send({message: error.message || "Server Error"});
   }
});

router.get('/:id', async (req, res) => {
    try{
        console.log("req.params.id: ", req.params.id);
        const item = await itemLogic.getItemById(req.params.id);
    }catch(error){
        res.status(error.code || 500).send({message: error.message || "Server Error"});
    }
});





module.exports = router;