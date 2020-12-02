


const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'help',
    aliases: ['ayuda'],
    description: 'help and info',
    execute(message, args) {

        const embed = new MessageEmbed()
            .setTitle("Comandos de WildCraftbot")
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .setColor(0xFFE554)
            .setDescription(" Aqui encontraras todos los comandos de WildcraftBot")
            .addField("Ip y Puertos del servidor", "w!ip")
            .addField("¿Como Votar?", "w!votar")
            .addField("¿Como registrarse?", "w!registrarse")
            .addField("¿Cuales son las reglas??", "w!reglas")
            .addField("¿Como puedo hablar en privado con el staff?", "w!ticket")
            .addField("¿Cuales son los comandos del bot?", "w!help")
            .addField("¿Como protejo mi zona?", "w!claim")
        message.channel.send(embed)

    },
};