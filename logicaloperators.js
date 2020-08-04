


// example 1
// let password = 'chickenGal';

// if (password.length >= 1 && password.indexOf(' ') === -1){
//     console.log ("Valid Password!")

// }
// else { 
//     console.log("Invalid Password!");
// }

// Example 2
//  We want a user to guess a number between 1-10
// let num = '11';
// if(num >= 1 && num <= 10){
//     console.log ("Number is between 1 and 10");
// }
// else {
//     console.log ('Please guess a number between 1 and 10');
// }

// Logical Operators  || example 1

// let age = 78;

// if (age < 6 || age >= 65) {
//     console.log('You get in for free');
// } 
// else { 
//     console.log ('That will be $10 please!')
// }

// Example 2
// Olive Green, Burnt Orange, Purple

// let color = 'Olive Green';

// if(color ==='Olive Green' || color ===' Burnt Orange' || color === 'Purple' ){
//     console.log('Great Choice!');
// }
  
// let loggedInUser ;
// // if there isn't a logged in user
// if(!loggedInUser){
// console.log ('Get out of Here!')
// }

// let flavor = 'watermelon';
// if (flavor !== 'grape' && flavor !== 'cherry') {
//     console.log('We dont have that flavor!');
// }
// Another way to write the code above!

// let flavor = 'watermelon'

// if (!(flavor === 'grape' || flavor === 'cherry')) {
// console.log ('We only have grape and cherry!');
// }

// Operator Precedence

// let x = 7;
// x == 7 || x === 3 && x > 10; // True



// The Switch Operator

// let day = 9;

// if(day === 1){
//     console.log ('MOnday');
// }
// else if (day ===2){
//     console.log ('Tuesday');
// }
// else if (day ===3){
//     console.log ('Wednesday');
// }
// else if (day ===4){
//     console.log ('Thursday');
// }
// else if (day ===5){
//     console.log ('Friday');
// }
// else if (day ===6){
//     console.log ('Saturday');
// }
// else if (day ===7){
//     console.log ('Sunday');
// }
// else {
//     console.log ('Invalid Day');
// }
// switch case... Much easier to read!!
// switch(day){
//     case 1:
//         console.log ('Monday')
//         break;
//     case 2: 
//     console.log("Tuesday")
//     break;
//     case 3: 
//     console.log("Wednesday")
//     break;
//     case 4: 
//     console.log("Thursday")
//     break;
//     case 5: 
//     console.log("Friday")
//     break;
//     case 6: 
//     console.log("Saturday")
//     break;
//     case 7: 
//     console.log("Sunday")
//     break;
//     default:
//         console.log ('Invalid Day')
// }

// Another Switch Case

// let emoji = 'heart';

// switch (emoji){
//     case 'sad face':
//     case 'happy face':
//         console.log ('Yellow');
//         break;
//             case 'eggplant':
//                 console.log('purple');
//                 break;
//                 case  'heart':
//                     case 'lips':
//                     console.log ('red');
//                     break;
// }

//  Ternary Operator---- taking an if and else a dn turningthem into a single lineof code. 
// let num = 2;

// if(num === 7) {
//     console.log('Lucky');

// }
// else {
//     console.log ('Bad')
// }

// You can also write it like this( single line)

// num === 7 ? console.log ('Lucky!'): console.log ('bad')
// online of offline


let status = 'ofline';


// if(status === 'ofline'){
//     color = 'red';
// }
// else {
//     color = ' green'
// }
let color = status === 'ofline' ? 'red' : 'green';