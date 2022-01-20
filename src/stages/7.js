const { menu0 } = require("../menu/menu0");
const { db } = require("../models/banco");
const { doces } = require("../menu/doces.js");

function execute(user, msg) {
  const productSelected = doces[msg]
  if (msg === "*") {
    db[user].stage = 0;
    return ["Pedido cancelado com sucesso"];
  }

  if (msg === "#") {
    db[user].stage = 2;
    return ["Estamos fechando seu pedido, ok?"];
  }

  if (!productSelected) {
    return [
      "Código inválido, digite corretamente",
      "```Digite # para finalizar ou * para cancelar```",
    ];
  }

  db[user].itens.push(productSelected);
  return [
    "```Digite # para finalizar ou * para cancelar```",
    `Item(${productSelected.description}) adiconado com sucesso`,
  ];
}

exports.execute = execute;
