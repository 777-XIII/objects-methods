const person = {
  firstName: "Tim",
  age: 28,
};

// Your code here!
person.greet = function (greeting) {
  if (greeting === "hi") {
    return `hi, my name is ${this.firstName}`;
  } else if (greeting === "hey") {
    return `hey, my name is ${this.firstName}`;
  } else if (greeting === "hello") {
    return `hello, my name is ${this.firstName}`;
  } else {
    return `my name is ${this.firstName}`;
  }
};

console.log(person.greet("hi")); // Hi, my name is Tim
console.log(person.greet("hey")); // Hey, my name is Tim
console.log(person.greet("hello")); // Hello, my name is Tim
