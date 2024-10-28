// Your code here!

const player1 = {
  name: "scorpion",
  hp: 95,
  atkSkill: "fire breath",
  dmg: 30,

  attack: function (opp) {
    opp.hp -= this.dmg;
    console.log(
      `${this.name} uses ${this.atkSkill} dealing ${this.dmg} damage, ${opp.name} has ${opp.hp} health-points left`
    );

    // bonus

    if (opp.hp <= 0) {
      console.log(`${player1.name} wins!`);
    }
  },

  finisher: function (opp) {
    const finisherDmg = 20;
    if (opp.hp > 0 && opp.hp <= finisherDmg) {
      opp.hp = 0;
      console.log("FINISH HIM!");
    } else {
      console.log("FATALITY!");
    }
  },
};

const player2 = {
  name: "sub-zero",
  hp: 100,
  atkSkill: "ice blast",
  dmg: 25,

  attack: function (opp) {
    opp.hp -= this.dmg;
    console.log(
      `${this.name} uses ${this.atkSkill} dealing ${this.dmg} damage, ${opp.name} has ${opp.hp} health-points left`
    );

    // bonus

    if (opp.hp <= 0) {
      console.log(`${player2.name} wins!`);
    }
  },
  finisher: function (opp) {
    const finisherDmg = 20;
    if (opp.hp > 0 && opp.hp <= finisherDmg) {
      console.log("FINISH HIM!");
    } else {
      console.log("FATALITY!");
    }
  },
};

player1.attack(player2);
player2.attack(player1);
player1.attack(player2);
player2.attack(player1);
player1.attack(player2);
player2.attack(player1);
player1.finisher(player2);