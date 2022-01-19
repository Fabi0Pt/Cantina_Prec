import { db } from "../models/banco.js"
import { stages } from "../stages.js"

export const stepFour = (user, msg) => {
    if (msg === "*") {
        db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }

    if (msg === "#") {
        db[user].stage = 5;

        return stages[5].obj.execute(user, "");
    }
    return [
        "```Digite # para continuar ou * para cancelar```",
        `Confirma endereco de entrega : \n ${msg}`,
    ];
}