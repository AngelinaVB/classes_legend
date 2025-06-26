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
    
    if ((2 <= name.length && name.length <= 10) || heroes.includes(type)) {
        this.name = name;
        this.type = type;
   }
   else {throw new Error('Name is too short / long / Wrong type of Hero');
   }
   
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
   }

   levelUp () {
   this.level = this.level + 1;
   this.attack = (this.attack /100) * 20;
   this.defence = (this.defence /100) * 20;
   this.health = 100;
   }
   
    if (this.health = 0) {
       throw new Error ('It is impossible to level up a dead player')};


    damage (points) {
        if (this.health >=0) {
        this.health -= points * (1 - this.defence /100)
    }
}
}

import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));