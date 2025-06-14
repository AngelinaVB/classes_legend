// TODO: write your code here
export class Character {
   constructor (name, type, health, level, attack, defence) 
   {this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;

    if (2 <= name.length <= 10) {
        this.name;
   }
   else {throw new Error();
   }
   if (this.type === 'Bowerman' || 'Swordsman' || 'Magician' || 'Daemon' || 'Undead' || 'Zombie') {
    this.type
   }
   else {
    throw new Error();
   }
   }
}

export class Bowerman extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, 'Bowerman', health, level, 25, 25);
   }
}

export class Swordsman extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, 'Swordsman', health, level, 40, 10);
   }
}

export class Magician extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, 'Magician', health, level, 10, 40);
   }
}

export class Daemon extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, 'Daemon', health, level, 10, 40);
   }
}

export class Undead extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, 'Undead', health, level, 25, 25);
   }
}

export class Zombie extends Character {
    constructor(name, type, health, level, attack, defence) {
        super(name, 'Zombie', health, level, 40, 10);
   }
}

import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));