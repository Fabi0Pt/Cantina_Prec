const { db } = require('../models/banco')
const { step } = require('../models/stages')

function execute(user, msg) {
  if (msg === '*') {
    db[user].stage = 0
    return ['Pedido cancelado com sucesso']
  }

  if (msg === '#') {
    db[user].stage = 0

    return ['Chave do PIX aqui 000.000.000-00']
  }
}

exports.execute = execute
