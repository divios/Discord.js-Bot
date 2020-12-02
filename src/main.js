
const fs = require('fs');
const Discord = require('discord.js');
const {Client, MessageEmbed} = require("discord.js");
const {prefix, token} = require("./config.json");
const client = new Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log("Bot listo");
});

client.on("message", message => {

    if (message.author.bot) return

    if (message.content.toString().includes("<@!271751037704994817>")) {

        const attachment = new Discord
            .MessageAttachment('./resources/logo_wildcraft.png', 'logo_wildcraft.png');

        const exampleEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .attachFiles(attachment)
            .setAuthor('IMPORTANTE', 'https://static.ariste.info/wp-content/uploads/2020/04/1200px-Antu_dialog-warning.svg_.png', 'https://discord.js.org')
            .setDescription('Ey <@!' + message.author.id + '> \n¡No esta permitido mencionar al staff! \nPor favor espera pacientemente a que te repondan\n\n**Si es un asunto importante puedes abrir tickets donde te responderan mas rapido y personas de confianza en el server. Para abrir ticket <#730090650841907350>**')
            .setThumbnail('attachment://logo_wildcraft.png')

        message.delete();
        message.channel.send(exampleEmbed);
    }
});

/////////////////////COMANDOS//////////////////////////
client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Hubo un error al intentar ejecutar ese comando');
    }

});

client.login(token);