const {
    mod
} = require('../functions')

const character = require('../config/character.json')


module.exports = {
    name: 'save',
    description: 'For use with save rolls',
    execute(message, args) {
        const save = Math.floor(Math.random() * 20) + 1
        var saveMod = 0;

        // need to come up with a better idea to use prof. For now just manuallt adding it
        if (args[0] == 'str') {
            saveMod = mod(character.Str) + character.Prof
        }
        if (args[0] == 'dex') {
            saveMod = mod(character.Dex)
        }
        if (args[0] == 'con') {
            saveMod = mod(character.Con) + character.Prof
        }
        if (args[0] == 'int') {
            saveMod = mod(character.Int)
        }
        if (args[0] == 'cha') {
            saveMod = mod(character.Cha)
        }
        if (args[0] == 'wis') {
            saveMod = mod(character.Wis)
        }

        message.channel.send(` I got a ${saveMod + save}(${save} + ${saveMod}) on my ${args[0]} save.`);
    }
};