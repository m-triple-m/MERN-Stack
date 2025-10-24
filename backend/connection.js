import mongoose from 'mongoose';

const url = "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/mydb85?appName=Cluster0";

const connectDB = () => {

    // asynchronous function - returns Promise
    mongoose.connect(url)
        .then((result) => {
            console.log('database connected');
        })
        .catch((err) => {
            console.log(err);
        });
}

export default connectDB;