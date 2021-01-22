module.exports = {
    name: 'spam',
    description: "spams",
    async execute(message, args) {
        if (message.member.roles.cache.has('697243393658585200')) {
            if (!args[0]) return message.reply("enter the number of messages to spam")
            if (isNaN(args[0])) return message.reply("enter a number")

            if (args[0] > 100) return message.reply("you can't spam more than 100 messages")
            if (args[0] < 1) return message.reply("you must spam at least 1 message")
            for (var i = 0; i < args[0]; i++) {


                await message.channel.messages.fetch({ limit: args[0] }).then(
                    setTimeout(() => message.channel.send('chuj'), 1000 * i))

            }
        } else {
            message.channel.send("Permission error");

        }
    }
}
