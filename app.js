// using array inside an object


// create an object
const adventurer = {
    name: "Leo",
    hitPoint: 10,
    belongings: ["staff", "potions", "medicine" ],
    companion: {
        name: "stinky",
        type: "cat"
    }
}

// access the values in the array of an array
console.log(`My companions name is ${adventurer.companion}`);

// access the values in the array
console.log(adventurer.belongings);

// access the first belonging
console.log(adventurer.belongings[0]);


// access all the belongings
//itterate over an array inside of an object
for (let i = 0; i < adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i]);
}


// #1 OBJ within OBJ

