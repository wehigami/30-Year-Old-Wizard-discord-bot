module.exports = {
    name: 'ateista',
    description: "sends a bunch of images",
    execute(message, args){
        const msg1 = "your random message1"
        const msg2 = "your random message2"
        const msg3 = "your random message3"
        const msg4 = "your random message4"
        const msg5 = "your random message5"
        const msg6 = "your random message6"
        let msgs = [msg1, msg2, msg3, msg4, msg5, msg6]
        let msg = msgs[Math.floor(Math.random() * msgs.length)]
        //get the role ID, that's what the numbers are
        if(!message.member.roles.cache.has('794226448692150382')){
            message.channel.send(msg);

        } else {
            message.channel.send('Ateiści nie mogą używać tej komendy')
        }
    }
}
    
