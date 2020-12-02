
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'registrarse',
    aliases: ['register'],
    description: 'Ports and ip info!',
    execute(message, args) {


        const embed = new MessageEmbed()
            .setTitle("Registrarse ")
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .setColor(0xA4D31D)
            .setDescription("En el servidor para que no te roben la cuenta tiene un sistema de registro")
            .addField("la primera vez que entres te pedira que te registres para eso usa", "/register <contraseña> <confirma contraseña>")
            .addField("despues que te registres las proximas veces que entres al server te pedira que te logees para eso usa", "/login <contraseña>")
        message.channel.send(embed)

    },
};