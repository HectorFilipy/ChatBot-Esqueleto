console.log("FERRAMENTAS ESTÃO OK!!!")

const tmi = require('tmi.js');
const client = new tmi.Client({
    options: { debug: true, messagesLogLevel: "info"},
    connection: {
        reconnect: true,
        secure: true
    },

    identity: {
        //Voce precisará criar uma conta na twitch para ser seu BOT.
        username: 'NOME DA CONTA DO SEU BOT',
        //Para gerar seu token é preciso acessar o site https://twitchapps.com/tmi/
        password: 'oauth:SEU TOKEN'
    },
    
    channels: [ 'NOME DO SEU CANAL' ]
});

client.connect().catch(console.error);

client.on('message', (channel, tags, message, self) => {
    
    if(self) return;

    if(message.toLowerCase() === '!olá') {
        console.log('** Foi executado o comando !olá **')
        client.say(channel, `@${tags.username}, tudo bem? seja Bem-Vindo!!!!!`);
    }
    if(message.toLowerCase() === '!sociais')
        console.log('** Foi executado o comando !sociais **')
        client.say(channel, `Sigam as redes sociais!!!`)
        client.say(channel, `Twitter: https://twitter.com/HectorFilipy`)
        client.say(channel, `Instagram: https://instagram.com/hector.filipy`)
        client.say(channel, `Linkedin: https://linkedin.com/in/hectorfilipy`)
        client.say(channel, `Github: https://github.com/HectorFilipy`)
}); 