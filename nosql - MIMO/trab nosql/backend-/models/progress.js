import mongoose from 'mongoose'

const ProgressSchema = new mongoose.Schema({

usuarioId:{

type:
mongoose.Schema.Types.ObjectId,

ref:'User',

required:true

},

licaoAtual:{

type:Number,

default:1

},

progresso:{

type:Number,

default:0

}

})

export default mongoose.model(
'Progress',
ProgressSchema
)