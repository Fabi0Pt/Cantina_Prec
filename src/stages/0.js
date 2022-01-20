const { menu0 } = require('../menu/menu0')
const { db } = require('../models/banco')

function execute(user, msg, contato) {
  // Obtem a hora atual do PC para definir se vai ser Bom dia, tarde ou noite.
  stamp = new Date()
  hours = stamp.getHours()
  if (hours >= 18 && hours < 24) {
    time = 'Boa noite'
  } else if (hours >= 12 && hours < 18) {
    time = 'Boa tarde'
  } else if (hours >= 0 && hours < 12) {
    time = 'Bom dia'
  }

  let menu = '🚨  CATEGORIAS  🚨\n\n'
  Object.keys(menu0).map(value => {
    const element = menu0[value]
    if (value === '1') {
      msg += `1️⃣ - _${element.name}_ \n`
    } else if (value === '2') {
      msg += `2️⃣ - _${element.name}_ \n`
    } else if (value === '3') {
      msg += `3️⃣ - _${element.name}_ \n`
    }

    console.log(menu0)
  })

  msg +=
    '\nLembre-se de não comer em sua estacão de trabalho!!!\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️\n*Digite OPÇÃO referente a categoria do produto ao qual deseja anotar na ficha:*'

  db[user].stage = 1

  return [
    menu,
    `${time} ${contato} 👋 Olá, Precoder, como vai? \n\nEu sou Cantys, o *assistente virtual* da Delícias da Precode. \n*Veja nossos produtos!!!* 🙋‍♂️`
  ]
}

exports.execute = execute
