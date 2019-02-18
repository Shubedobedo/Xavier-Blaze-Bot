module.exports = {
    name: 'args-info',
    description: 'args-info',
    args: true,
    execute(message, args) {

        message.channel.send(`Command name: args-info\nArguments: ${args}`);
    },
};