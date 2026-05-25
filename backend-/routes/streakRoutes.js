import express from 'express'
import redisClient from '../config/redis.js'
import User from '../models/User.js'

const router = express.Router()

router.post('/:id', async(req, res) => {
  try {
    const userId = req.params.id

    const chaveHoje = `streak:hoje:${userId}`

    const jaContouHoje = await redisClient.get(chaveHoje)

    if (jaContouHoje) {
      return res.json({
        mensagem: 'Streak já contado hoje'
      })
    }

    const user = await User.findById(userId)

    user.streak += 1

    await user.save()

    await redisClient.setEx(chaveHoje, 86400, 'ok')

    res.json({
      mensagem: 'Streak atualizado',
      streak: user.streak
    })

  } catch(error) {
    res.status(500).json('Erro ao atualizar streak')
  }
})

export default router