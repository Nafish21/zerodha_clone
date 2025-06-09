const { Schema } = require('mongoose');
const OrdersSchema = new Schema({
    name: "String",
    qty: Number,
    price: Number,
    date: String,
    type: String,
});
module.exports = {OrdersSchema};