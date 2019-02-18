const {
    mod
} = require('../functions')

const character = require('../config/character.json')


module.exports = {
    name: 'buran-kai',
    description: 'Xavier Blazes main damaging source.',
    execute(message, args) {
        var AttackRoll = ['', Math.floor(Math.random() * 20) + 1];
        var DmgDice = 6;
        var DmgDiceAmount = 1;
        const AttckMod = 1;
        var multiplier = 1;
        var Dmg = [];


        // buran-kai on?
        if (args.some((element, index, array) => {
                return (element == 'on');
            })) {
            DmgDice = 8;
            DmgDiceAmount = 2;
        };

        //Attack roll
        if (args.some((element, index, array) => {
                return (element == 'adv');
            })) {
            AttackRoll[2] = [Math.floor(Math.random() * 20) + 1];
            AttackRoll[0] = Math.max(AttackRoll[1], AttackRoll[2]);
            message.channel.send(`${character.FName} swings Buran-Kai with a ${AttackRoll[0] + character.Prof + mod(character.Str) + AttckMod} to hit (${AttackRoll[0]} + ${character.Prof} + ${mod(character.Str)} + ${AttckMod}) (ADV Rolls ${AttackRoll[1]}, ${AttackRoll[2]})`);
        } else if (args.some((element, index, array) => {
                return (element == 'dis');
            })) {
            AttackRoll[2] = [Math.floor(Math.random() * 20) + 1];
            AttackRoll[0] = Math.min(AttackRoll[1], AttackRoll[2]);
            message.channel.send(`${character.FName} swings Buran-Kai with a ${AttackRoll[0] + character.Prof + mod(character.Str) + AttckMod} to hit (${AttackRoll[0]} + ${character.Prof} + ${mod(character.Str)} + ${AttckMod}) (DIS Rolls ${AttackRoll[1]}, ${AttackRoll[2]})`);
        } else {
            AttackRoll[0] = AttackRoll[1]
            message.channel.send(`${character.FName} swings Buran-Kai with a ${AttackRoll[0] + character.Prof + mod(character.Str) + AttckMod} to hit (${AttackRoll[0]} + ${character.Prof} + ${mod(character.Str)} + ${AttckMod})`);
        };
        if (AttackRoll[0] == 20) {
            multiplier = 2
            message.channel.send(`That's a CRITICAL HIT!!!!`);
        };


        // Dmg rolls
        for (i = 0; i < (DmgDiceAmount * multiplier); i++) {
            Dmg[i] = Math.floor(Math.random() * DmgDice) + 1
        };
        message.channel.send(`${character.FName} deals ${(Dmg.reduce((a, b) => a + b, 0) + AttckMod +  mod(character.Str))} damage (${Dmg.reduce((a, b) => a + b, 0)} + ${AttckMod} +  ${mod(character.Str)}) (Dice rolls ${Dmg})`);


        // Booming blade dmg
        if (args.some((element, index, array) => {
                return (element == 'boom');
            })) {
            var BoomDmg = [];
            for (i = 0; i < (character.BoomDice * multiplier); i++) {
                BoomDmg[i] = Math.floor(Math.random() * DmgDice) + 1
            };
            message.channel.send(`Booming blade deals ${(BoomDmg.reduce((a, b) => a + b, 0))} addtional  thunder damage (Dice rolls ${BoomDmg})`);

        };
    }
};