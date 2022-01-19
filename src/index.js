import bot from 'venom-bot'
import { db } from "../src/models/banco.js"
import { stages } from "./stages.js"

bot.create().then((client) => start(client));

const start = (client) => {
    client.onMessage((message) => {
        let resp = stages[getStage(message.from)].obj.execute(
            message.from,
            message.body,
            message.sender.name
        );
        for (let index = 0; index < resp.length; index++) {
            const element = resp[index];
            client.sendText(message.from, element);
        }
    });
}

const getStage = (user) => {
    if (db[user]) {
        //Se existir esse numero no banco de dados
        return db[user].stage;
    } else {
        //Se for a primeira vez que entra e contato
        db[user] = {
            stage: 0,
            itens: [],
        };
        return db[user].stage;
    }
}