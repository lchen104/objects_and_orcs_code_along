// // using array inside an object


// // create an object
// const adventurer = {
//     name: "Leo",
//     hitPoint: 10,
//     belongings: ["staff", "potions", "medicine" ],
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



// an array of array

const foo = [
    [1, 2, 3],
    ["4", "5", "6"],
    [7, 8, 9],
    ()=>{
        console.log("I'm a function inside an array");
    }
]

console.log(foo[0]) // []

console.log(foo[0][1]) // []


// storing function inside an array
console.log(foo[3]()); // []