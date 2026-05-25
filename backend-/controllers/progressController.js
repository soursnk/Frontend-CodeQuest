import Progress from '../models/Progress.js'

export async function salvarProgresso(req, res) {
  try {
    const progress = await Progress.create(req.body)
    res.json(progress)
  } catch (error) {
    res.status(500).json('Erro ao salvar progresso')
  }
}

export async function buscarProgresso(req, res) {
  try {
    const progress = await Progress.find({
      usuarioId: req.params.usuarioId
    })

    res.json(progress)
  } catch (error) {
    res.status(500).json('Erro ao buscar progresso')
  }
}