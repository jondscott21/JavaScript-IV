/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`
    }
  }
  
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes);
        this.healthPoints = attributes.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage`;
    }
  }
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  class Humanoid extends CharacterStats {
    constructor(attributes) {
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
  }
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
 
  
  
  // ==== NEW PROTOS ====
  class Hero extends Humanoid  {
      constructor(attributes) {
        super(attributes);
      }
      attack(enemy) {
        if (enemy.healthPoints > 0) {
          if (this.healthPoints > 0) {
            enemy.healthPoints -= (Math.floor(Math.random() * 26) + 1);
            if (enemy.healthPoints > 0) {
              let weaponOfChoice = Math.floor(Math.random() * this.weapons.length);
              return `${this.name} swings ${this.weapons[weaponOfChoice]} at ${enemy.name}. ${enemy.name} is down to ${enemy.healthPoints} hp!`;
            } else {
              return `${enemy.name} has perished!`;
            }
          } else {
            return `${this.name} is dead.`;
          }
        } else {
          return `${this.name} was victorious!`;
        }
      }
  }
  
  
  
  
  class Villain extends Humanoid {
      constructor(attributes) {
          super(attributes);
      }
      attack(enemy) {
        if (enemy.healthPoints > 0) {
          if (this.healthPoints > 0) {
            enemy.healthPoints -= (Math.floor(Math.random() * 26) + 1);
            if (enemy.healthPoints > 0) {
              let weaponOfChoice = Math.floor(Math.random() * this.weapons.length);
              return `${this.name} casts ${this.weapons[weaponOfChoice]} at ${enemy.name}. ${enemy.name} is down to ${enemy.healthPoints} hp!`;
            } else {
              return `${enemy.name} has perished!`;
            }
          } else {
            return `${this.name} is dead.`;
          }
        } else {
          return `${this.name} was victorious!`;
        }
      }
  }
  
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
  // ==== NEW INSTANCES ====
    const necromancer = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 3,
        width: 2,
        height: 5,
      },
      healthPoints: 50,
      name: 'Morag',
      team: 'Mines',
      weapons: [
        'poison cloud',
        'fireball',
      ],
      language: 'Orcish',
    });
    
    const paladin = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 5,
        height: 1,
      },
      healthPoints: 50,
      name: 'Thorin',
      team: 'Mountain',
      weapons: [
        'Hammer',
        'Axe',
      ],
      language: 'Dwarvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
    console.log(necromancer.name);
    console.log(necromancer.healthPoints);
    console.log(paladin.attack(necromancer));
    console.log(necromancer.attack(paladin));
    console.log(paladin.attack(necromancer));
    console.log(necromancer.attack(paladin));
    console.log(paladin.attack(necromancer));
    console.log(necromancer.attack(paladin));
    console.log(paladin.attack(necromancer));
    console.log(necromancer.attack(paladin));
    console.log(paladin.attack(necromancer));
    console.log(necromancer.attack(paladin));
    console.log(paladin.attack(necromancer));
    console.log(necromancer.attack(paladin));