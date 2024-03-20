const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email:{type:String, required:true},
    phone:{type:String , required:true},
    company:{type:String, required:true},
    role: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    validity:{type:Date, default: Date.now},
    status:{type:String, default: "Active"},
    Order:{type: mongoose.Schema.Types.ObjectId, ref: 'Order'},
    Bill:{type: mongoose.Schema.Types.ObjectId, ref: 'Bill'},   
    Menu:{type: mongoose.Schema.Types.ObjectId, ref: 'Menu'},
    Table:{type: mongoose.Schema.Types.ObjectId, ref: 'Table'},
});
mongoose.models={};
export default mongoose.model('User', userSchema);