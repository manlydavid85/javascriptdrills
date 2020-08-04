// // To make a simple Array
// let student = [];

// // An Array of Strings
// let colors = ['red', 'green', 'blue'];

// // An Array of numbers

// let lottoNums = ['19','13','20','51'];

// // A mixed Array
// let stuff = ['true', '68', 'cat', 'null'];

// let shoppingList = ['ice', 'milk', 'cereal'];

// let colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// colors.length // 6
// colors [colors.length -1]

// Modifying an Array
// let shoppingList = ['cheddar cheese', '2% milk'];
// // to change '2%' milk to "whole Milk"
// shoppingList [1] = 'whole Milk';

// // Add Someting else to the list
// shoppingList[2] = 'ice cream';

// // This works as well, with adding more items to the list

// shoppingList[shoppingList.length]= 'Pizza';
// shoppingList[shoppingList.length]= 'Potatos';

//Array Methods
// Push --- add to end
// Pop --- remove from end
// Shift - remove from start
// Unshift ---- Add to start
// EXAMPLE
// let topSongs = [
//     'First time ever i saw your face',
//      'God only knows',
//      'Life on Mars'
// ];
// topSongs.push('fortunate son'); // add item to end
// topSongs.pop('fortunate son'); // removes the last item from end
// topSongs.shift('First time ever i saw your face'); // remove from start
// topSongs.unshift('First time ever i saw your face')// Add to start


// concat - to merge two or more arrays
// let fruits = ['apple', 'banana']
// let veggies = ['carrots', 'green beans'];
// let meats = [ 'chicken', 'steak', 'snails']
// console.log(fruits.concat(veggies, meats));

// let allFood = fruits.concat(veggies, meats);

// Include and indexOF ... when you are looking for something. 

// let ingredients = [
//     'water',
//     'milk',
//     'cheese',
//     'carrots',
//     'eel',
//     'butter',
//     'brown sugar'
// ];

//ingredients.includes('fish') = false
// ingredients.includes('eel') = true
// ingredients.indexOf ('eel')

// Reverse
// let letters = ['r', 'm', 't', 'o', 'b'];
// answer: [b,o,t,m,r]

// Join
// Answer: letters.join() "r,m,t,o,b"
// letters.reverse().join('.') = "b.o.t.m.r"

// SLICE
// let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

// let swimmers = animals.slice(0, 3);
// ans: (3) ["shark", "salmon", "whale"]

// let reptiles = animals.slice(4,6);
//(2) ["lizard", "tortoise"]

// pass in a negative number
// let quadruped = animals .slice(-3);
// ans:(3) ["bear", "lizard", "tortoise"]
// animal.slice () gives you the entire list.

// SPLICE

// let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
// ans: animal.splice(1,0, 'octopus');
// Ans: animals= ["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]
// to delete
// animals.splice(3,2) =  ["whale", "bear"]
// new count: animals
//(5) ["shark", "octopus", "salmon", "lizard", "tortoise"]


// SORT
// let people = ['Mrs. Robinson', ' Angie', 'Jolene', 'Maggie May', 'Roxane'];
// ans: people.sort() = (5) [" Angie", "Jolene", "Maggie May", "Mrs. Robinson", "Roxane"]

// numbers sorts

// let num = ['15','10','1000','56'];
// ans: (4) ["10", "1000", "15", "56"]


//Reference Types
// Value Type Variables

// const
//  const myEggs = ['brown', 'brown'];
//  myEggs.push ('purple');
//  myEggs[0] = 'green';

 // bad code
//  myEggs = ['blue', 'pink'];

// good code
// const myEggs = ['brown', 'brown'];
// undefined
// myEggs
// (2) ["brown", "brown"]
// myEggs.push ('purple');
// 3
// myEggs
// (3) ["brown", "brown", "purple"]
// myEggs[0] = 'green';
// "green"
// myEggs
// (3) ["green", "brown", "purple"]

// NESTED ARRAYS---- WE can store array inside other array
// ex: 
// const colors = [
// ['red', 'crimso.'],
// ['orange', 'dark orange'],
// ['yellow', 'golden rod'],
// ['green', 'olive'],
// ['blue', 'navy blue']
// ['purple', 'orchard']
// ];

// const animalPairs =[
//     ['doe', 'buck'],
//   ['ewe', 'ram'],
//   ['peahen', 'peacock']
// ];
// how do we get the female version of peacock out of the array
// animalPairs[2] =  ['peahen', 'peacock']
//animalPairs[2] [0] = "peahen"

// better const example

// tic tac to board

// const board =[
//     ['o' ,null ,'x'],
//     [null, 'x', 'o'],
//     ['x', 'o', null]

// ]

