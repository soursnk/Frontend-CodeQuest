import express from 'express'

import {
  salvarProgresso,
  buscarProgresso
} from '../controllers/progressController.js'

const router = express.Router()

router.post('/', salvarProgresso)

router.get('/:usuarioId', buscarProgresso)

export default router