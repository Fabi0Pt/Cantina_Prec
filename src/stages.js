import {
  stepOne,
  stepTwo,
  stepThree,
  stepFour,
  stepFive,
  stepSix
} from './stages/index.js'

export const stages = {
  0: {
    descricao: 'Boas Vindas',
    obj: stepOne
  },
  1: {
    descricao: 'Vendas',
    obj: stepTwo
  },
  2: {
    descricao: 'Resumo',
    obj: stepThree
  },
  3: {
    descricao: 'Endereço',
    obj: stepFour
  },
  4: {
    descricao: 'Enceramento',
    obj: stepFive
  },
  5: {
    descricao: 'Forma de Pagamento',
    obj: stepSix
  }
}
