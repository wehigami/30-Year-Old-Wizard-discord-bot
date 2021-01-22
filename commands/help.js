const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    description: "recieve help",
    execute(message, args){
        const embed = new MessageEmbed()
            .setColor('#000000')
            .setAuthor('Help!', 'https://media.discordapp.net/attachments/697391573792587883/801779767711367178/L.jpg?width=523&height=523')
            .setThumbnail('https://media3.giphy.com/media/bqm6WOjuLu480/giphy.gif')
            .addFields(
                {name: ':man_factory_worker: Moderation :mechanical_arm:', value: '`mute`   `unmute`   `prune`', inline: true},
                {name: ':musical_note: Music :man_mage:', value: '`play`   `stop`', inline: true},
                {name: ':briefcase: Useful :eyeglasses:', value: '`lolmmr`   `pfp`   `ping`', inline: true},
                {name: ':flushed: Random :watermelon:', value: '`ateista`   `jp`   `rafonix`   `spam`', inline: true},
            )
            .setImage('https://media.discordapp.net/attachments/697391573792587883/801879393814708264/help.png')
            message.channel.send(embed)
    }
}
    
