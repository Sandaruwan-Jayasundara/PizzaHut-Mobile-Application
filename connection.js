const mongoose=require("mongoose");

const MONGODB_URL='//ADD MONGODB URL';

const connectDB =async () =>{
    await mongoose.connect(MONGODB_URL,{
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:false
    });
    console.log('================ Database Synchronized ===================');
}
module.exports=connectDB;

