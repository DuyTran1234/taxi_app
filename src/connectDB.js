const mongoose = require("mongoose");

const connectDB = () => {
    try {
        const uri = 'mongodb+srv://kira0504:1234560duy@cluster0.cpom0.mongodb.net/taxi_app?retryWrites=true&w=majority';
        mongoose.set("useCreateIndex", true);
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => console.log('connect DB successfully'));
    }
    catch(error) {
        console.log(`Error connect DB: ${error.message}`);
    }
}

module.exports = connectDB;