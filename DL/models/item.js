
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createDate:{
      type: Date,
    default: Date.now
  },

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

  img:{
      type: String,
      // default: "https://vincenzaemartacreazioniartigiana.websites.co.in/e-store/img/defaults/product-default.png",
  },
  description:{
    type: String
  },
    category:{
    type: String,
    required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    quantity:{
      type: Number,
      default: 1,
    }
});

const itemModel = mongoose.model('item',itemSchema);

module.exports = {itemModel}
//same:
// module.exports.userModel = userModel;