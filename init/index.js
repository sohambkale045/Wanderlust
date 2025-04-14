const mongoose = require('mongoose');
const Listing = require("../models/listing");
const initData = require("../init/data");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("db is connected");
})
.catch((err)=>{
    console.log(err);
})

async function main() {
       await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"67e3ba538cd9ca086843d9ad"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialise!!!");
}

initDB();