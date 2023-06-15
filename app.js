//////////////////////////////////////////




// // using array inside an object

// // create an object
// const adventurer = {
//     name: "Leo",
//     hitPoint: 10,
//     belongings: ["staff", "potions", "medicine"],
//     companion: {
//         name: "stinky",
//         type: "cat",
//         belongings: ["ball of yarn", "healing potions", "health insurance", "satchel of elements"]
//     }
// }

// // access the values in the array of an array
// console.log(`My companions name is ${adventurer.companion}`);

// // access the values in the array of an array or an array
// console.log(`One of my companions belongings is ${adventurer.companion.belongings[2]}`);

// // access the values in the array
// console.log(adventurer.belongings);

// // access the first belonging
// console.log(adventurer.belongings[0]);


// // access all the belongings
// //itterate over an array inside of an object
// for (let i = 0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }





//////////////////////////////////////////





// // #1 OBJ within OBJ

// const movies = [
//     {
//         title: "Tokyo story"
//     },
//     {
//         title: "Paul Blart"
//     },
//     {
//         title: "Fast X"
//     },        
// ];


// console.log(movies[0].title);
// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i].title);
// }




//////////////////////////////////////////




/// combine objects, arrays and functions

// const foo = {
//     arr: [1, 2, 30],
//     obj: {
//         prop: "object property"
//     },

//     // method
//     doSomething: () => {
//         console.log("I did something!")
//     }
// }

// console.log(foo.arr[0]);  // 1
// console.log(foo.obj.prop);  // object property
// foo.doSomething();




//////////////////////////////////////////




// an array of array

// const foo = [
//     [1, 2, 3],
//     ["4", "5", "6"],
//     [7, 8, 9],
//     ()=>{
//         console.log("I'm a function inside an array");
//     }
// ]

//  // accessing []
// console.log(foo[0])

//  // accessing [][]
// console.log(foo[0][1])

// // storing function inside an array
// console.log(foo[3]());





//////////////////////////////////////////





// creating a class

// class Character {

//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) { // can default lovesCats to true here
//         this.legs = 2;
//         this.arms = 2;
//         this.name = name;
//         this.age = age;
//         this.eyes = eyes;
//         this.hair = hair;
//         this.lovesCats = lovesCats;
//         this.lovesDogs = lovesDogs || true; // setting default to true
//     }

//     setHairColor (hairColor) {
//         this.hair = hairColor;
//     }

//     //  create method 2
//      greet (otherChar) {
//         console.log(`hello ${otherChar}`);
//     }

//     // create method 2
//     smite () {
//         console.log("I Smite thee you vile person!")
//     }
// }


// // creating new Character() objects
// const alex = new Character();   // create a new object called alex
// const brock = new Character();  // create a new object called broc


// // accessing the greet() method for the objects that was created above
// // alex.greet("Alex");          // accessing the greet method in the alex object
// // brock.greet("Brock");        // accessing the greet method in brock object
// // alex.smite();                // accessing the method smite() in alex object

// // passing in arguments - name, age, eyes, hair
// const azreal = new Character("azreal", "150", "green", "silver");

// // azreal.eyes = "brown";       // change an object called azreal's property eyes to brown

// azreal.setHairColor("red");     // change hair color to red using the class's built in method setHairColor() instead

// console.log(azreal);

// // alex.greet();
// // brock.greet();

// // Character.greet()            // only accessable when the method is static







///////////////////////





// NOT WORKING
// class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || true;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Howdy ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('i smited thee.');
//     }
  
//   }
//    const hobbit = new Character('Mr Baggins', 33, 'brown', 'black')
//   console.log(hobbit);

//   class Hobbit extends Character {
//     constructor (name, age, eyes, hair) {
//         super(name, age, eyes, hair);
//         this.skills = ["thievery", "speed", "willpower"]
//     }

//     steal () {
//         console.log("Let's get away");
//     }

//     smite() {
//         super.super();
//         this.steal();
//     }
//   }

//   const frodo = new Hobbit("frodo", 30, "brown", "black");
// //   console.log(frodo);



//   frodo.classyGreeting(hobbit);
//   frodo.smite();




/////////////////////// WORKING





// // factory functions

// class Car {
//     constructor(make, vin) {
//         this.make = make;
//         this.vin = vin;
//     }

//     // methods
//     drive() {
//         console.log("vroom");
//     }
// }


// // create an object
// const newCar = new Car("Mazda", 123435);

// console.log(newCar);

// class Factory {
//     constructor(company) {
//         this.company = company;
//         this.cars = [];
//     }

//     generateCar() {
//         const newCar = new Car(this.company, this.cars.length);
//         this.cars.push(newCar);
//     }

//     findCar(index) {
//         return this.cars[index];
//     }

// }

// const tesla = new Factory("Tesla");
// tesla.generateCar();
// console.log(tesla);
// tesla.generateCar(tesla.findCar(0));


// const porsche = new Factory('Porsche');
// porsche.generateCar();
// console.log(porsche);
// console.log(porsche.findCar(0));




/////////////////////////  WORKING


class Person {

    constructor(name, age, eyeColor, hair) {
        this.name = name;
        this.age = age;
        this.hair = hair;
        this.eyeColor = eyeColor;
    }

    static eyeColors() {
        return ["blue", "green", "brown"]
    }

    //
}

class SuperHero extends Person {


}

const superman = new SuperHero("Clark Kent", 30, Person.eyeColors()[0], "black");
console.log(superman);





////////////////////////