import User from '../models/User.js'
import redisClient from '../config/redis.js'

export async function criarUsuario(req, res) {
  try {
    const user = await User.create(req.body)
    res.json(user)
  } catch (error) {
    res.status(500).json('Erro ao criar usuário')
  }
}

export async function buscarUsuario(req, res) {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (error) {
    res.status(404).json('Usuário não encontrado')
  }
}

export async function atualizarXP(req, res) {
  try {
    const { xp } = req.body

    const user = await User.findById(req.params.id)

    user.xp += xp
    user.nivel = Math.floor(user.xp / 100) + 1

    await user.save()

    await redisClient.zAdd('ranking_global', {
      score: user.xp,
      value: user._id.toString()
    })

    res.json(user)
  } catch (error) {
    res.status(500).json('Erro ao atualizar XP')
  }
}