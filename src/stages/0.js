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
  Object.keys(menu0).forEach(value => {
    const element = menu0[value]
    if (value === '1') {
      menu += `1️⃣ - _${element.name}_ \n`
    } else if (value === '2') {
      menu += `2️⃣ - _${element.name}_ \n`
    } else if (value === '3') {
      menu += `3️⃣ - _${element.name}_ \n`
    }
  })

  menu +=
    '\n⚠️Lembre-se de não comer em sua estacão de trabalho!!!⚠️\n\n  \n*Digite OPÇÃO referente a categoria do produto ao qual deseja anotar na ficha:*'

  db[user].stage = 6

  return [
    menu,
    ` 👋 ${time} ${contato}, como vai? \n\nEu sou Cantys, *assistente virtual* da Delícias da Precode. \n*Veja nossos produtos!!!* 🙋‍♂️`
  ]
}

exports.execute = execute
