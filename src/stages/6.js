const { db } = require('../models/banco.js')
const { salgados } = require('../menu/salgados.js')
const { doces } = require('../menu/doces.js')
const { bebidas } = require('../menu/bebidas.js')

function execute(user, msg) {
  if (msg === '1') {
    let menu = '🥐  SALGADOS  🥐\n\n'
    Object.keys(salgados).forEach(value => {
      const element = salgados[value]
      if (value === '1') {
        menu += `1️⃣ - _${element.description}_ \n`
      } else if (value === '2') {
        menu += `2️⃣ - _${element.description}_ \n`
      } else if (value === '3') {
        menu += `3️⃣ - _${element.description}_ \n`
      } else if (value === '4') {
        menu += `4️⃣ - _${element.description}_ \n`
      } else if (value === '5') {
        menu += `5️⃣ - _${element.description}_ \n`
      } else if (value === '6') {
        menu += `6️⃣ - _${element.description}_ \n`
      }
    })
    db[user].stage = 1
    return [menu]
  } else if (msg === '2') {
    let menu = '🍫  DOCES  🍫\n\n'
    Object.keys(doces).map(value => {
      const element = doces[value]
      if (value === '1') {
        menu += `1️⃣ - _${element.description}_ \n`
      } else if (value === '2') {
        menu += `2️⃣ - _${element.description}_ \n`
      } else if (value === '3') {
        menu += `3️⃣ - _${element.description}_ \n`
      } else if (value === '4') {
        menu += `4️⃣ - _${element.description}_ \n`
      } else if (value === '5') {
        menu += `5️⃣ - _${element.description}_ \n`
      } else if (value === '6') {
        menu += `6️⃣ - _${element.description}_ \n`
      } else if (value === '7') {
        menu += `7️⃣ - _${element.description}_ \n`
      } else if (value === '8') {
        menu += `8️⃣ - _${element.description}_ \n`
      } else if (value === '9') {
        menu += `9️⃣ - _${element.description}_ \n`
      } else if (value === '10') {
        menu += `1️⃣0️⃣ - _${element.description}_ \n`
      } else if (value === '11') {
        menu += `1️⃣1️⃣ - _${element.description}_ \n`
      } else if (value === '12') {
        menu += `1️⃣2️⃣ - _${element.description}_ \n`
      }
    })

    db[user].stage = 7

    return [menu]
  } else if (msg === '3') {
    let menu = ' 🥤  BEBIDAS  🥤\n\n'
    Object.keys(bebidas).map(value => {
      const element = bebidas[value]
      if (value === '1') {
        menu += `1️⃣ - _${element.description}_ \n`
      } else if (value === '2') {
        menu += `2️⃣ - _${element.description}_ \n`
      } else if (value === '3') {
        menu += `3️⃣ - _${element.description}_ \n`
      } else if (value === '4') {
        menu += `4️⃣ - _${element.description}_ \n`
      } else if (value === '5') {
        menu += `5️⃣ - _${element.description}_ \n`
      } else if (value === '6') {
        menu += `6️⃣ - _${element.description}_ \n`
      }
    })

    db[user].stage = 8

    return [menu]
  }
}

exports.execute = execute
