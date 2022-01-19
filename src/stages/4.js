import { db } from "../models/banco.js"

export const stepFive = (user, msg) => {
    db[user].stage = 0;
    return [
        "Obrigado pela preferencia.",
        "Aguarde, seu pedido chegará em breve",
        "Mais informações ligue para 33333-3311",
    ];
}
