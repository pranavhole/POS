const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  category: { type: String , default:"General"}, 
  number: { type: Number, required: true },
}); 

mongoose.models={};
export default mongoose.model('table', tableSchema);