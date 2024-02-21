function handleMessage(message) {

    //If bot messages itself, do nothing
    if (message.author.bot) {
        return;
    }

    //Converting message to lowercase
    const m = message.content.trim().toLowerCase();

    if (m === "hi" || m === "hey" || m === "hello") {
        message.reply("Hey from bot!");
    }

    else if (m === "what is your name" || m === "name") {
        message.reply("Je m'appelle BotX");
    }

    else if (m === "who created you" || m === "creator") {
        message.reply("I was created by Rishabh Shukla");
    }

    else if (m === "what can you do" || m === "help") {
        message.reply("I can perform basic arithmetic operations, greet you, tell you my name, a funny joke, the current time and much more!");
    }

    else if (m === "how are you" || m === "how are you doing") {
        message.reply("I'm just a bot, but thanks for asking!");
    }

    else if (m === "what's the weather like" || m === "weather") {
        message.reply("I'm sorry, I'm just a bot and I can't check the weather!");
    }

    else if (m === "tell me a fact" || m === "fact") {
        message.reply("Did you know that the shortest war in history lasted only 38 minutes? It was between Britain and Zanzibar in 1896!");
    }

    else if (/(\d+)\s*([\+\-\*\/])\s*(\d+)/.test(m)) {
        const match = m.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
        const num1 = parseFloat(match[1]);
        const operator = match[2];
        const num2 = parseFloat(match[3]);
        let result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    message.reply("Error: Division by zero");
                    return;
                }
                result = num1 / num2;
                break;
            default:
                message.reply("Invalid operator");
                return;
        }
        message.reply(`The result of ${num1} ${operator} ${num2} is ${result}`);
    }

    else if (m === "bye" || m === "goodbye") {
        message.reply("Goodbye! Have a great day!");
    }

    else if (m === "thanks" || m === "thank you") {
        message.reply("You're welcome :)");
    }

    else {
        message.reply("I'm sorry, I could not understand what you mean.");
    }
}


export { handleMessage }