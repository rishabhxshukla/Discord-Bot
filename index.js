/* https://discord.com/developers/applications */


import { REST, Routes } from "discord.js";
import { Client, GatewayIntentBits } from "discord.js";
import { commands, handleCommands } from "./commands.js";
import { handleMessage } from "./messages.js";
import dotenv from "dotenv";
dotenv.config();


/* Importing variables from env file */
const { TOKEN, CLIENT_ID } = process.env;


/* Creating Client */
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


/* Logging in */
client.login(TOKEN);


/* Startup message */
client.on("ready", () => {
    console.log(`${client.user.tag} is listening...`);
});


/* Rest client */
const rest = new REST({ version: "10" }).setToken(TOKEN);
try {
    rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
    console.log("Successfully loaded application (/) commands.");
}
catch (err) {
    console.error(err);
}


/* Command interaction */
client.on("interactionCreate", handleCommands);


/* Getting the message */
client.on("messageCreate", handleMessage);