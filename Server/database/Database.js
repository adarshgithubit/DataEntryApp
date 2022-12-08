import mongoose from 'mongoose';

export const Connection= async (username, password) =>{

    const URL =`mongodb://adarsh:iloveuindia@ac-jcdpjya-shard-00-00.c30bial.mongodb.net:27017,ac-jcdpjya-shard-00-01.c30bial.mongodb.net:27017,ac-jcdpjya-shard-00-02.c30bial.mongodb.net:27017/?ssl=true&replicaSet=atlas-1sg5g4-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})

       console.log('DataBase Connected Succesfully')
    }catch(error)

    {
       console.log('Error while connecting', error);
    }
}

export default Connection;