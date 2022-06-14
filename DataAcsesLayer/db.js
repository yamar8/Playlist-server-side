const  mongoose = require ('mongoose');

const MONGO_URL = 'mongodb+srv://shachargut:sg12345@cluster0.2qsvz.mongodb.net/test1?retryWrites=true&w=majority';

exports.connect=async()=>{
    try{
        await mongoose.connect(MONGO_URL, {useNewUrlParser:true},
            (err)=>{
                if(err){throw err}
                console.log('connection succes, State', mongoose.connection.readyState);
            })
    }
    catch(e){
        console.log('error mpngoose:',e);
    }
}
