const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.random() * (dragon.strength - 15) + 15;

const warriorDamage = () => Math.random() * ((warrior.strength * 2) - warrior.strength) + warrior.strength;

const mageDamageAndMana = () => {
  if (mage.mana < 15) {
    return {
      mageDamage: 'Not enough mana',
      mageManaConsumption: 0,
    };
  }
  return {
  mageDamage: Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence,
  mageManaConsumption: 15,
  };
}

const gameActions = {

  warriorTurn: warriorDamage => {
    warrior.damage = warriorDamage();
    dragon.healthPoints -= warrior.damage;
  },

  mageTurn: mageDamageAndMana => {
    const turn = mageDamageAndMana();
    if (typeof turn.mageDamage === 'number') {
      mage.damage = turn.mageDamage;
      mage.mana -= turn.mageManaConsumption;
      dragon.healthPoints -= mage.damage;
    } else {
      console.log(turn.mageDamage);
    }
  },

  dragonTurn: dragonDamage => {
    dragon.damage = dragonDamage();
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },

  playTheGame: () => {
    gameActions.warriorTurn(warriorDamage);
    gameActions.mageTurn(mageDamageAndMana);
    gameActions.dragonTurn(dragonDamage);
    console.table(battleMembers)
  },

};

while (warrior.healthPoints > 0 && dragon.healthPoints > 0) {
  gameActions.playTheGame();
};
