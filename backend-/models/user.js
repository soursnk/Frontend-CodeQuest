import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({

nome:{
type:String,
required:true
},

email:{
type:String,
required:true,
unique:true
},

senha:{
type:String,
required:true
},

nivel:{
type:Number,
default:1
},

xp:{
type:Number,
default:0
},

streak:{
type:Number,
default:0
}

})

export default mongoose.model(
'User',
UserSchema
)