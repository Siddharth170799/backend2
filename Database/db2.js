import mongoose from 'mongoose';



const Connection = async(username, password) => {
    const URL = 'mongodb://localhost:27017/new4'
    try {
        await mongoose.connect(URL, {  })
        console.log('Mongodb amazon  connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
