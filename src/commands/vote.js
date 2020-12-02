
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'vote',
    aliases: ['votar', 'voto'],
    description: 'Ports and ip info!',
    execute(message, args) {

        const embed = new MessageEmbed()
            .setTitle("Como votar")
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .setColor(0xA4D31D)
            .setDescription("Para apoyar al server y que te den el rango vote y otras recompensas puedes votar")
            .addField("Pagina para votar", "[Pagina para votar](https://www.40servidoresmc.es/wildcraft)")
            .addField("Comando para votar", "/vote40")
            .addField("Como puedo votar ??", "Baja hasta abajo de la pagina, rellena con tu nombre y el captcha y vota despues en el server de minecraft usa de nuevo /vote40 para que te den tu recompensa")
        message.channel.send(embed)

    },
};