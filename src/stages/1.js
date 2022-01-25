const { db } = require('../models/banco')
const { salgados } = require('../menu/salgados.js')
const { doces } = require('../menu/doces.js')
const { bebidas } = require('../menu/bebidas.js')

function execute(user, msg) {
  const productSelected = salgados[msg] || doces[msg] || bebidas[msg]
  if (msg === '*') {
    db[user].stage = 0
    return ['Pedido cancelado com sucesso']
  }
  if (msg === '#') {
    db[user].stage = 3
    let resumo = '🗒️ *Resumo do Pedido:* \n'
    let total = 0
    db[user].itens.forEach(value => {
      resumo += `${value.description} =  ${value.price} \n`

      total += value.price
    })

    resumo += `*Total: ${total} reais*.\n'Retornar essa mensagem com o comprovante de pagamento.'`

    return ['Confirmar #️⃣ Cancelar *️⃣', resumo]
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
    `✅ - (${productSelected.description}) adicionado com sucesso!\n\n Digite outra opção:`
  ]
}

exports.execute = execute
