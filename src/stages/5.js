import { db } from "../models/banco.js"
let estagioInterno = 0;

export const stepSix = (user, msg) => {
    //db[user].stage = 0;

    if (estagioInterno === 1) {
        db[user].stage = 4;

        return stages[4].obj.execute(user, "");
    }
    if (msg === "1") {
        estagioInterno++;
        return ["Digite o valor em dinheiro para levarmos o troco: "];
    }
    if (msg === "3") {
        return ["Chave do PIX aqui 000.000.000-00"]
    }
    return ["Escolha a forma de pagamento:\n1️⃣-Dinheiro\n2️⃣-Cartão\n3️⃣-PIX"];
}