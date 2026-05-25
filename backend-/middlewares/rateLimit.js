import redisClient from '../config/redis.js'

async function rateLimit(req, res, next) {
  const ip = req.ip
  const chave = `rateLimit:${ip}`

  const total = await redisClient.incr(chave)

  if (total === 1) {
    await redisClient.expire(chave, 60)
  }

  if (total > 20) {
    return res.status(429).json({
      mensagem: 'Muitas requisições. Tente novamente em 1 minuto.'
    })
  }

  next()
}

export default rateLimit