import express from 'express'
import mongoose from 'mongoose'

import userRoutes
from '../routes/userRoutes.js'

import progressRoutes
from '../routes/progressRoutes.js'

import rankingRoutes 
from '../routes/rankingRoutes.js'

import streakRoutes
from '../routes/streakRoutes.js'

import '../config/redis.js'

import rateLimit
from '../middlewares/rateLimit.js'

const app = express()

app.use(
express.json()
)

app.use(rateLimit)

await mongoose.connect(
'mongodb://127.0.0.1:27017/codequest'
)

console.log(
'Mongo conectado'
)


app.use(
'/users',
userRoutes
)

app.use(
'/progress',
progressRoutes
)

app.use(
'/ranking',
rankingRoutes)

app.use(
'/streak',
streakRoutes)

app.listen(

3000,

()=>{

console.log(
'Servidor rodando'
)

}

)