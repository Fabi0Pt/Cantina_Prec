var stages = {
  0: {
    descricao: 'Boas Vindas',
    obj: require('../stages/0')
  },
  1: {
    descricao: 'Vendas',
    obj: require('../stages/1')
  },
  3: {
    descricao: 'Endereço',
    obj: require('../stages/3')
  },
  6: {
    descricao: 'Salgados',
    obj: require('../stages/6')
  },
  7: {
    descricao: 'Salgados',
    obj: require('../stages/7')
  },
  8: {
    descricao: 'Salgados',
    obj: require('../stages/8')
  }
}

exports.step = stages
