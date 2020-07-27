import mongoose from "mongoose";
const Schema = mongoose.Schema;

let dashboardSchema = new Schema({
},{strict:false});

export default mongoose.model('dashboard', dashboardSchema);