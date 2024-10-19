// console.log("kya haal");

// function run(){
//     console.log("Running");
// }
// run(); 

// let stand = function walk(){
//     console.log('walking');
// }
// stand(); // do not able to call directly with walk
// let ans = stand;
// ans();  // Aise assign kr k bhi call kr skte hai

//ARGUMENTS ek object input dega

// function sum(a, b){
//     let total = 0;
//     for(let value of arguments)
//         total = total + value;
//     return total;
// }
// let ans = sum(1,2,3,4,5,6);
// console.log(ans);
// 1,2,3,4,5,6 sb arguments k andr as a object print honge

//REST OPERATOR  ek array input dega

// function sum(num, value, ...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6);

//DEFAULT PARAMETER  (r is default parameter)
// agr a ki vlaue nhi denge to default wali use kr lega

// function interest(p,r=5,t){
//     return p*r*t/100;
// }
// console.log(interest(1000, 10, 5));

// GETTER AND SETTER

// let person = {
//     fName: 'Ratnesh',
//     lName: 'Mishra',
     
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },
// set fullName(value){
//     if(typeof value !== String){
//         throw new Error("You have not sent a string ")
//     }
//     let parts = value.split(' ');
//     this.fName = parts[0];
//     this.lName = parts[1];
// }
// };
// console.log(person.fullName);

// try{
//     person.fullName = 1;
// }
// catch (e){
//     alert(e);
// }
// console.log(person.fullName);
 