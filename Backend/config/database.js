const mongoose = require("mongoose");
module.exports.connect = () => {
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("Connect Successful!");
    }

    catch(error){
        console.log("Connect Fail!");
        throw new Error(error);
    }
}


