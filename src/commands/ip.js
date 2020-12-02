
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'ip',
    description: 'Ports and ip info!',
    execute(message, args) {

        const embed = new MessageEmbed()
            .setTitle("Wildcraft (1.8 - 1.16.x)")
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .setColor(0x8FDDF7)
            .setDescription("Ip y Puertos de wildcraft")
            .addField("IP", "Wildcraft.network", true)
            .addField("Puerto Java", "25565", true)
            .addField("Puerto Bedrock", "19132", true)
            .addField("Si quieres saber como unirte a un servidor en minecraaft bedrock", "[Pagina](https://es.wikihow.com/unirse-a-servidores-en-Minecraft-PE)");
        message.channel.send(embed)
    },
};