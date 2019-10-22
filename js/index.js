'use strict'
import Arena from './arena.js';


const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Spear");
const andronicus = new Gladiator("Andronicus","Spear");
const colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators)
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);
colosseum.fight();