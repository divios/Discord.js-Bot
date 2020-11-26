const {Client, MessageEmbed} = require("discord.js");
const {prefix, token} = require("./config.json");
const client = new Client();

client.once("ready", () => {
    console.log("Bot listo");
});


client.on("message", message => {

    if (message.author.bot) return 

    if (message.content.toString().includes("<@!271751037704994817>")) {
        const embed = new MessageEmbed()
            .setTitle("NO hacer menciones al staff")
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .setColor(0x8FDDF7)
            .setDescription("No menciones al staff eres bobo o que")
            .addField("Revisa las reglas", "#reglas", true);
        message.channel.send(embed);
        message.delete();
    }
});
/////////////////////COMANDOS//////////////////////////
client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === ("ip")) {
        const embed = new MessageEmbed()
            .setTitle("Wildcra (1.8 - 1.16.x)")
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .setColor(0x8FDDF7)
            .setDescription("Ip y Puertos de wildcraft")
            .addField("ip", "Wildcraft.network", true)
            .addField("Puerto Java", "25565", true)
            .addField("Puerto Bedrock", "19132", true)
            .addField("si quieres saber como unirte a un servidor en minecraaft pe", "[Pagina](https://es.wikihow.com/unirse-a-servidores-en-Minecraft-PE)");
        message.channel.send(embed)
    }

    if (command === ("registrarse")) {
        const embed = new MessageEmbed()
            .setTitle("Registrarse ")
            .setAuthor(message.member.displayName, message.author.displayAvatarURL())
            .setColor(0xA4D31D)
            .setDescription("En el servidor para que no te roben la cuenta tiene un sistema de registro")
            .addField("la primera vez que entres te pedira que te registres para eso usa", "/register <contraseña> <confirma contraseña>")
            .addField("despues que te registres las proximas veces que entres al server te pedira que te logees para eso usa", "/login <contraseña>")
        message.channel.send(embed)
    }

});

client.login(token);