class Animal {
  constructor(legs, color, weight) {
    this.legs = legs;
    this.color = color;
    this.weight = weight;
  }

  speak = (voice) => {
    console.log(voice);
  };
}

class Dog extends Animal {
  constructor(name, color, weight) {
    super(4, "brown", weight);

    this.name = name;
  }

  printDetails = () => {
    console.log(this.name, this.legs, this.color, this.weight);
  };
}

const dog1 = new Dog("murphy", "black", 45);
const dog2 = new Dog("jonnie", "white", 39);
dog1.printDetails();
dog2.printDetails();
