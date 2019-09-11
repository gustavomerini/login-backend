const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
  if (req.body.password === '1234') {
    return res.status(200).json({ message: 'logado com sucesso!' })
  }
  return res.status(401).json({ message: 'senha inválida' })
})

module.exports = router
