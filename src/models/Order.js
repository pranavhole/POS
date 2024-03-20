const mongoose  = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type : mongoose.Schema.Types.ObjectId, ref: 'User'},
    client:{ type : mongoose.Schema.Types.ObjectId, ref: 'Client'},
    table: { tableCatagery:{type : mongoose.Schema.Types.ObjectId, ref: 'Table'},
            number: { type: Number, required: true },
     },
    Orders: [{
        MenuItem:{ type : mongoose.Schema.Types.ObjectId, ref: 'MenuItem'},
        quantity: { type: Number, default:1 },
        amount: { type: Number, required: true}
        },
    ], 
    orderAs:{ type: String, default:"Dine-in"},
    status: { type: String, default: "Pending" },
    orderType: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    payment:{type:String , default: "Pending" },
    totalAmount: { type: Number, required: true },  
    discount: { type: Number, required: true },
    tax: { type: Number, required: true },
    grandTotal: { type: Number, required: true },
});

mongoose.models={};
export default mongoose.model('Order', Orders);