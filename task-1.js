// Target array
const people = [];

// Source data
const firstNames = ["Mark", "Sandra", "Dina", "Mikoel"];
const lastNames = ["Shark", "Mellow", "Saur", "Boomex"];
const ages = [18, 27, 31, 44];
const cities = ["New York", "Berlin", "Barcelona", "Windhoek"];

// Your code here!
for (let i = 0; i < firstNames.length; i++) {
  const person = {
    firstName: firstNames[i],
    lastName: lastNames[i],
    age: ages[i],
    city: cities[i],
    fullName: `${firstNames[i]} ${lastNames[i]}`,
    introduce: function () {
      return `hi, my name is ${this.fullName}, i'm ${this.age} years old and I live in ${this.city}`;
    },
  };
  people.push(person);
}

console.log(people);
