const { db } = require('../models/banco')
const { doces } = require('../menu/doces.js')

function execute(user, msg) {
  const productSelected = doces[msg]
  if (msg === '*') {
    db[user].stage = 0
    return ['Pedido cancelado com sucesso']
  }

  if (msg === '#') {
    let resumo = '🗒️ *RESUMO DO PEDIDO*: \n'
    let total = 0
    db[user].itens.forEach(value => {
      resumo += `${value.description} ---  ${value.price} \n`

      total += value.price
    })

    resumo += `*Total: ${total} reais*.`

    return ['*Confirmar #️⃣ \n\n Cancelar *️⃣*', resumo]
  }

  if (!productSelected) {
    return [
      'Código inválido, digite corretamente',
      'Digite #️⃣ para finalizar ou *️⃣ para cancelar'
    ]
  }

  db[user].itens.push(productSelected)
  return [
    'Digite #️⃣ para finalizar ou *️⃣ para cancelar',
    `✅*(${productSelected.description})* adicionado com sucesso! \n\n Digite outra opção:`,
    resumo
  ]
}

exports.execute = execute
