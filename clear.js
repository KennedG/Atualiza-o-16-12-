const { Client, Message, MessageEmbed, DiscordAPIError} = require('discord.js');

module.exports = {
    name: 'clear',
    aliases: ['limpar'],
    
    run: async (client, message, args) => {

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`${message.author} **Voce não possui permissão para esse comando.**`)

        try {
            let delamount = args[0];
            let msg_del = parseInt(delamount) + 1

            let incomplet = new MessageEmbed()
            .setTitle(`♻️ | Comando de Clear`)
            .setColor("RED")
            .setDescription(`**\n📋 | Descrição: Utilize esse comando para limpar o chat.\n\n❓ | Como usar? Use da seguinte forma: s!clear (mensagens) \n\n📜 | Exemplo: s!clear 10**`)
            if (isNaN(delamount) || parseInt(delamount <= 0)) return message.reply({embeds: [incomplet]})

            if (parseInt(delamount) > 99) return message.reply(':x: | **Voce só pode limpar 1 a 99 mensagens!**')

            await message.channel.bulkDelete(parseInt(delamount) + 1, true);

            let clear = new MessageEmbed()
            .setTitle(`♻️ | LIMPEZA`)
            .setColor("GREEN")
            .setThumbnail(`https://media.discordapp.net/attachments/907611751858733106/918493036487540826/limpeza.gif`)
            .setDescription(`**🎉 | Foi limpo ${delamount} mensagens.\n🎓 | Faxineiro: ${message.author}**`)    
            
            await message.channel.send({embeds: [clear]});
                
        } catch (e) {
            console.log(e)
        }

    }

}
