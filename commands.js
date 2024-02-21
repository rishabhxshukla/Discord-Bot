const commands = [
    {
        name: "ping",
        description: "Replies with Pong",
    },
    {
        name: "time",
        description: "Gets the current time"
    },
    {
        name: "joke",
        description: "Tell a joke"
    }
];


async function handleCommands(interaction) {

    if (!interaction.isCommand()) {
        return;
    }

    if (interaction.commandName === "ping") {
        await interaction.reply("Pong!");
    }

    else if (interaction.commandName === "time") {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const currentTime = `${hours}:${minutes}:${seconds}`;
        await interaction.reply(`Current time is ${currentTime}`);
    }

    else if (interaction.commandName === "joke") {
        await fetch("https://v2.jokeapi.dev/joke/Any")
            .then(res => res.json())
            .then(async (data) => {
                let setup = data.setup;
                let delivery = data.delivery;
                await interaction.reply(setup + "\n" + delivery);
            })
            .catch((err) => console.log(err));
    }
}


export { commands, handleCommands };