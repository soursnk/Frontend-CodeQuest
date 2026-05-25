import express from 'express'
import redisClient from '../config/redis.js'
import User from '../models/User.js'

const router = express.Router()

router.get('/', async(req,res)=>{

try{

// 1. tenta buscar do cache
const rankingCache = await redisClient.get('cache:ranking')

if(rankingCache){
  return res.json({
    origem:'redis-cache',
    ranking: JSON.parse(rankingCache)
  })
}

// 2. se não tiver cache, busca no Redis Sorted Set
const ranking = await redisClient.zRangeWithScores(
  'ranking_global',
  0,
  9,
  { REV: true }
)

const resultado = []

for(const item of ranking){

const user = await User.findById(item.value)

if(user){

resultado.push({
nome: user.nome,
xp: item.score,
nivel: user.nivel
})

}

}

// 3. salva cache por 60 segundos
await redisClient.setEx(
  'cache:ranking',
  60,
  JSON.stringify(resultado)
)

res.json({
  origem:'redis-ranking',
  ranking: resultado
})

}catch(error){

res.status(500).json('Erro no ranking')

}

})

export default router