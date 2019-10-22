'use strict'
import Gladiator from './gladiator.js'
export default class Arena {

    constructor(name , gladiators = []){
        const uName = name.charAt(0).toUpperCase() + name.slice(1);
        this.name = uName;
        console.log(this.name);

        this.gladiators = gladiators;
        console.log(this.gladiators);
    }
    addGladiator (fighter){
        if (this.gladiators.length < 2 ) {
            this.gladiators.push(fighter);
        }
    }
    fight(){
        if (this.gladiators[1].weapon === this.gladiators[0].weapon){
            this.gladiators = [];
        }
        else if ((this.gladiators[1].weapon == 'Trident' && this.gladiators[0].weapon == 'Spear') 
        || (this.gladiators[1].weapon == 'Club' && this.gladiators[0].weapon == "Trident")){
            this.gladiators.shift();
        }
       else if ((this.gladiators[0].weapon == 'Trident' && this.gladiators[1].weapon == 'Spear') 
        || (this.gladiators[0].weapon == 'Club' && this.gladiators[1].weapon == "Trident")){
            this.gladiators.pop();
        }
    }    
Collapse        
    }

