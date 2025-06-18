// TODO: write your code here
export class Character {
   constructor (name, type, health = 100, level = 1, attack, defence) 
   {
     const heroes = [
            'Bowerman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ];
    
    if (2 <= name.length && name.length <= 10) {
        this.name = name;
   }
   else {throw new Error('Name is too short / long');
   }
   if (heroes.includes(type)) {
    this.type = type;
   }
   else {
    throw new Error('Wrong type of Hero');
   }

    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
   }

   levelUp () {
    if (this.health != 0) {
   this.level = this.level + 1;
   this.attack = (this.attack /100) * 20;
   this.defence = (this.defence /100) * 20;
   this.health = 100;
   }
   else {throw new Error ('It is impossible to level up a dead player')};
}

    damage (points) {
        if (this.health >=0) {
        this.health -= points * (1 - this.defence /100)
    }
}
}


export class Bowerman extends Character {
    constructor(name) {
        super(name, 'Bowerman', health, level, 25, 25);
   }
}

export class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman', health, level, 40, 10);
   }
}

export class Magician extends Character {
    constructor(name) {
        super(name, 'Magician', health, level, 10, 40);
   }
}

export class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon', health, level, 10, 40);
   }
}

export class Undead extends Character {
    constructor(name) {
        super(name, 'Undead', health, level, 25, 25);
   }
}

export class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie', health, level, 40, 10);
   }
}

import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));