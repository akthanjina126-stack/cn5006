const mongoose = require('mongoose')

const MONGO_URL='mongodb+srv://akthanjina126_db_user:admin@cluster0.mtprrhs.mongodb.net/'

const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age: Number,
    gender: String,
    salary: Number
});

const Person = mongoose.model(
    'modelname',
    PersonSchema,
    'personCollection'
);

async function insertOne() {
    const doc1 = new Person({
        name:'Thanjina',
        age:22,
        gender:'Female',
        salary:1450
    });

    const savedDoc = await doc1.save();

    console.log('One document inserted');
    console.log(savedDoc);
    
}

async function main (){
    try{
        await mongoose.connect(MONGO_URL);
    console.log('Connected to ${MONGO_URL}');

    await insertOne();

    }
    catch(err){

        console.error('Error:',err);
    }

    finally{

        await mongoose.connection.close();
        console.log('Connection closed');
    }
} 

main();