import mongoose from 'mongoose'

async function connectDB(){

try{

await mongoose.connect(
'mongodb://127.0.0.1:27017/codequest'
)

console.log(
'Mongo conectado'
)

}

catch(error){

console.log(
'Erro Mongo'
)

console.log(
error
)

}

}

export default connectDB