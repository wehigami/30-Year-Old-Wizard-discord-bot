
const ytdl = require('ytdl-core');
const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = '3!'
const fs = require('fs');

client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.command.set(command.name, command);
}




client.once('ready', () => {
    console.log('The 30 Year Old Wizard has arrived.')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.command.get('ping').execute(message, args);
    } else if (command == 'ateista'){
        client.command.get('ateista').execute(message, args)
    } else if (command == 'jp'){
        client.command.get('jp').execute(message, args)
    } else if (command == 'prune'){
        client.command.get('prune').execute(message, args)
    } else if (command == 'spam'){
        client.command.get('spam').execute(message, args)
    } else if (command == 'mute'){
        client.command.get('mute').execute(message, args)
    } else if (command == 'unmute'){
        client.command.get('unmute').execute(message, args)
    } else if (command == 'play'){
        client.command.get('play').execute(message, args)
    } else if (command == 'leave'){
        client.command.get('leave').execute(message, args)
    } else if (command == 'rafonix'){
        client.command.get('rafonix').execute(message, args)
    } else if (command === "play") {
        client.command.get('play').execute(message, args)
    } else if (command === "stop") {
        client.command.get('stop').execute(message, args)
    } else if (command === "lolmmr") {
        client.command.get('lolmmr').execute(message, args).catch(err => {
            console.log(err);
        })
    } else if (command === "pfp") {
        client.command.get('pfp').execute(message, args)
    } else if (command === "help") {
        client.command.get('help').execute(message, args)
    }

    
})















//last line
client.login('Token');