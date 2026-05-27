import express from 'express'

import {
  criarUsuario,
  buscarUsuario,
  atualizarXP
} from '../controllers/userController.js'

const router = express.Router()

router.post('/', criarUsuario)

router.get('/:id', buscarUsuario)

router.put('/:id/xp', atualizarXP)

export default router