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

const dragonDamage = dragon => Math.ramdom() * (dragon.strength - 15) + 15;

const warriorDamage = warrior => Math.ramdom() * ((warrior.strength * 2) - warrior.strength) + warrior.strength;

const mageDamageAndMana = mage => {
  if (mage.mana < 15) {
    return {
      mageDamage: 'Not enough mana',
      mageManaConcumption: 0,
    }
  }
  return {
  mageDamage: Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence,
  mageManaConsumption: 15,
  }
}

console.log(mageDamageAndMana(mage));